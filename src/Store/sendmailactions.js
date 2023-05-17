import { sendmailactions } from "./sendmailReducer";

export const fetchsendmailtData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://expensetracker-11ae7-default-rtdb.firebaseio.com/sendmail.json');
            if (!response.ok) {
                throw new Error('Could not fetch Data');
            }
            const data = await response.json();
            return data;
        };
        try {
            const sendmailData = await fetchData();
            console.log("sendmailtData:" + sendmailData);
            dispatch(sendmailactions.replaceCart({
                sendmail: sendmailData.sendmail || [],
                selected: sendmailData.selected || {},
                deleted:sendmailData.deleted 
            }
            ));

        } catch (error) {
            {/*dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!...',
                    message: 'Fetching Cart data Failed',
                }));*/}
        }
    }
}

export const sendEmailData = (sendmail) => {
    return async (dispatch) => {
       {/* dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending Cart data!',
            }));*/}

        const sendRequest = async () => {
            const response = await fetch(`https://expensetracker-11ae7-default-rtdb.firebaseio.com/sendmail.json`, {
                method: 'PUT',
                body: JSON.stringify({
                    sendmail: sendmail.sendmail,
                    selected:sendmail.selected,
                    deleted:sendmail.deleted,
                }),
            });
            if (!response.ok) {
                throw new Error('Sending Email Failed.');
            }
        }
        try {
            await sendRequest();
            {/*dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent Cart data Successfully',
                }));*/}
        } catch (error) {
           {/* dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!...',
                    message: 'Sent Cart data Failed',
                }));*/}
        }
    };
}

