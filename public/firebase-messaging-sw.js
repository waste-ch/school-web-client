// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyBdX2VEIzPHMa1p6KoJy2tovoP-0xHRgXM",
    authDomain: "ghmc-d8170.firebaseapp.com",
    projectId: "ghmc-d8170",
    storageBucket: "ghmc-d8170.appspot.com",
    messagingSenderId: "895276116153",
    appId: "1:895276116153:web:591535b877ee313f8a1368",
    measurementId: "G-PS5LL8J96G"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    //const notificationTitle = payload.notification.title;
    //const notificationOptions = {
    //    body: payload.notification.body,
    //};

    //self.registration.showNotification(notificationTitle,
    //    notificationOptions);

    // The code below handles showing popup notification from the browser/OS only
    let notificationTitle = payload && payload.notification && payload.notification.title;
    let notificationOptions = {
        body: payload && payload.notification && payload.notification.body,
        icon: payload && payload.notification && payload.notification.image
    }
    // This is the web browser Push API for displaying the notification
    return self.registration.showNotification(notificationTitle, notificationOptions);
});