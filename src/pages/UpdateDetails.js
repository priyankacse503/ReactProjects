import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import classes from './Signup.module.css';
//import { useDispatch, useSelector } from "react-redux";

const UpdateDetails = () => {
    let displayName1;
    let picURL;
    const [isLoading, setIsLoading] = useState(false);

    const[disName,setDisName]=useState('');
    const[pic,setPic]=useState('');
    //const dispatch=useDispatch();


    useEffect(()=>{
       fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDLu529PHBrLvOm9gQ3d8p0H5MIZgpI-ac', {
           method: 'POST',
           body: JSON.stringify({
               idToken: JSON.parse(localStorage.getItem('dataKey'))

           }),
           headers: {
               'Content-Type': 'application/json',
           },
       }).then((res) => {
           setIsLoading(false);

           if (res.ok) {
               return res.json();
           }
           else {
               return res.json().then((data) => {
                   let errorMessage = 'Fetch failed!';
                   throw new Error(errorMessage);
               });
           }
       }).then(data => {
           console.log(data);
           console.log("User has successfully Fetched");
           
           const searchIndex = data.users.findIndex((obj) => obj.email=== JSON.parse(localStorage.getItem('email')));
           displayName1 = `${data.users[searchIndex].displayName}`;
           picURL = `${data.users[searchIndex].photoUrl}`;
           console.log("DisplayName: " + displayName1);
           console.log("PICURL: "+picURL);
           setDisName(displayName1);
           setPic(picURL);
       })
           .catch((err) => {
               alert(err.message);
           })
   },[])

   const nameHandler=(event)=>{
    event.preventDefault();
    setDisName(displayName1);
    console.log(disName)
   }

   const picHandler=(event)=>{
    event.preventDefault();
    setPic(picURL);
    console.log(pic)
   }
   
    
   const nameRef = useRef();
    const picRef = useRef();
    const updateHandler = (event) => {
        event.preventDefault();
        const token=JSON.parse(localStorage.getItem('dataKey'));
       
        const enteredname = nameRef.current.value;
        const enteredpic = picRef.current.value;

        if (enteredname === '' || enteredpic === '') {
            alert('Please enter Valid Inputs');
        }
        else {
            setIsLoading(true);

            let url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDLu529PHBrLvOm9gQ3d8p0H5MIZgpI-ac';

            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    idToken: token,
                    displayName: enteredname,
                    photoUrl: enteredpic,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => {
                setIsLoading(false);

                if (res.ok) {
                    return res.json();
                }
                else {
                    return res.json().then((data) => {
                        let errorMessage = 'Update failed!';
                        throw new Error(errorMessage);
                    });
                }
            }).then(data => {
                console.log(data);
                console.log("User has successfully Updated");

            })
                .catch((err) => {
                    alert(err.message);
                })

        }
    }
    const verifyHandler=(event)=>{
        event.preventDefault();
        const token=JSON.parse(localStorage.getItem('dataKey'));
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDLu529PHBrLvOm9gQ3d8p0H5MIZgpI-ac', {
            method: 'POST',
            body: JSON.stringify({
                requestType:"VERIFY_EMAIL",
                idToken: token,  
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            setIsLoading(false);

            if (res.ok) {
                return res.json();
            }
            else {
                return res.json().then((data) => {
                    let errorMessage = 'Verification failed!';
                    throw new Error(errorMessage);
                });
            }
        }).then(data => {
            console.log(data);
            console.log("User has successfully Verified");

        })
            .catch((err) => {
                alert(err.message);
            })

    }
    

    return (
        <>
        <div className={classes.top}>
        <form className={classes.form} >
                <Form.Label><h3 style={{ color: "blue" }}>Contact Details</h3></Form.Label>
                <Form.Group className="mb-3" controlId="formBasicname">
                    <Form.Label>Full Name </Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={disName} onChange={nameHandler} ref={nameRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicProfilepic">
                    <Form.Label>Profile photo URL </Form.Label>
                    <Form.Control type="text" placeholder="upload profile pic" value={pic} onChange={picHandler} ref={picRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicButton">
                    <Button type="submit" onClick={updateHandler}>Update</Button>
                    <Button variant="danger" style={{float:'right'}}>Cancel</Button>
                    <Button type="submit" style={{marginLeft:'28%'}} onClick={verifyHandler} variant="secondary">Verify Email</Button>
                    {isLoading && <p>Sending request...</p>}
                </Form.Group>
            </form>
        </div>
        </>
    )
}

export default UpdateDetails;