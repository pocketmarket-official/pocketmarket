importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyCYaFuGXcKFTV1wIm8PeN0ri4jpur29CCY",
    authDomain: "pocket-market-ddc08.firebaseapp.com",
    databaseURL: "https://pocket-market-ddc08.firebaseio.com",
    projectId: "pocket-market-ddc08",
    storageBucket: "pocket-market-ddc08.appspot.com",
    messagingSenderId: "196040287857",
    appId: "1:196040287857:web:abfb63cdff7f2e1c30ddd0",
    measurementId: "G-T84SPLRMTM"
});
const messaging = firebase.messaging();


messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
