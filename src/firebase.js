// firebase.js

import {
    initializeApp
} from 'firebase/app';
import {
    getToken,
    onMessage,
    getMessaging
} from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyBdX2VEIzPHMa1p6KoJy2tovoP-0xHRgXM",
    authDomain: "ghmc-d8170.firebaseapp.com",
    projectId: "ghmc-d8170",
    storageBucket: "ghmc-d8170.appspot.com",
    messagingSenderId: "895276116153",
    appId: "1:895276116153:web:591535b877ee313f8a1368",
    measurementId: "G-PS5LL8J96G"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
const channel = new BroadcastChannel('firebase-events');


export const getTokenFC = () => {
    return getToken(messaging).then((currentToken) => {
        if (currentToken) {
            console.log('current token for client: ', currentToken);
            // Track the token -> client mapping, by sending to backend server
            // show on the UI that permission is secured
            channel.postMessage({
                text: 'saveFCMToken',
                token: currentToken
            });
        } else {
            console.log('No registration token available. Request permission to generate one.');
            // shows on the UI that permission is required 
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // catch error while creating client token
    });
}


//export const onMessageListener = () =>
//    new Promise((resolve) => {
//        onMessage(messaging, (message) => {
//            console.log('Received message:', message);
//            channel.postMessage({
//                title: message.notification.title,
//                body: message.notification.body
//            });
//            resolve(message);
//        });

//    });

// Listen for incoming messages (optional)
onMessage(messaging, (message) => {
    console.log('Received message:', message);
    channel.postMessage({
        text: "notification",
        title: message.notification.title,
        body: message.notification.body
    });
});

//// Listen for incoming messages (optional)
//onMessage(messaging, (message) => {
//    console.log('Received message:', message);
//});