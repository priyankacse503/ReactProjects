import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import StartingPage from './pages/StartingPage';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import SendMail from './components/SendMail';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchsendmailtData, sendEmailData, fetchInboxMessages } from './Store/sendmailactions';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import classes from './App.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import OffcanvasInbox from './components/OffCanvasInbox';
import InboxHtml from './components/InboxHtml';
import Inbox from './components/Inbox';
import InboxData from './components/InboxData';
import { modalactions } from './Store/modalReducer';

let initial = true;

function App() {
  const sendmail = useSelector(state => state.sendmail);
  const dispatch = useDispatch();
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);

  const isauth = useSelector(state => state.auth.isLoggedIn);
  const isVisible=useSelector(state=>state.modal.isModalVisible);

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  useEffect(() => {
    dispatch(fetchsendmailtData());
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    dispatch(sendEmailData(sendmail));
  }, [sendmail, dispatch])

  useEffect(() => {
    setModalShow(true)
    history.replace('/inbox')
  }, [modalShow])

  const showHandler=()=>{
    dispatch(modalactions.showModal());
  }

  const hideHandler=()=>{
    dispatch(modalactions.hideModal());
  }
  return (
    <>
      <header><StartingPage /></header>
      <main>
        <Switch>

          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>

          <Route path='/home'>
            <div style={{
              backgroundImage: "url(/Images/home.jpg)",
              backgroundRepeat: 'no-repeat',
              backgroundSize: "cover",
              height: "100vh"
            }}>
              <Home />
            </div>
          </Route>

          <Route path='/signup'>
            <div style={{
              backgroundImage: "url(/Images/singupBG.jpg)",
              backgroundRepeat: 'no-repeat',
              backgroundSize: "cover",
              height: "100vh"
            }}>
              <SignUp />
            </div>
          </Route>

          <Route path='/login'>
            <div style={{
              backgroundImage: "url(/Images/login.jpg)",
              backgroundRepeat: 'no-repeat',
              backgroundSize: "cover",
              height: "100vh"
            }}>
              <Login />
            </div>
          </Route>

          <Route path='/sendmail'>
            <div style={{
              backgroundImage: "url(/Images/composeEmail.jpg)",
              backgroundRepeat: 'no-repeat',
              backgroundSize: "cover",
              height: "100vh"
            }}>
              <SendMail />
            </div>
          </Route>

          {isauth &&
          <Route path='/inbox'>
          {/*<div style={{
            backgroundImage: "url(/Images/composeEmail.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            height: "100vh"
          }}>*/}
          <Inbox />
          {/*<SendMail />
            <header className="App-editor">
            
    </header>
            <Editor
      editorState={editorState}
        onEditorStateChange={setEditorState} />*/}

        </Route>}

          <Route path='/open'>
            <InboxData show={modalShow}
              onHide={() => setModalShow(false)} />
          </Route>

          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </main>
    </>
  )
}
export default App;

