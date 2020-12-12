// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/messaging";

import axios from "axios";


const server_key = process.env.REACT_APP_FIREBASE_SERVER_KEY;
const vapidKey = process.env.REACT_APP_PUBLIC_VAPID_KEY;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYaFuGXcKFTV1wIm8PeN0ri4jpur29CCY",
    authDomain: "pocket-market-ddc08.firebaseapp.com",
    databaseURL: "https://pocket-market-ddc08.firebaseio.com",
    projectId: "pocket-market-ddc08",
    storageBucket: "pocket-market-ddc08.appspot.com",
    messagingSenderId: "196040287857",
    appId: "1:196040287857:web:abfb63cdff7f2e1c30ddd0",
    measurementId: "G-T84SPLRMTM"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// let tokenVar='';
//허가를 요청합니다!
// messaging.requestPermission()
//     .then(function () {
//         return messaging.getToken(); //토큰을 받는 함수를 추가!
//     })
//     .then(function (token) {
//         tokenVar = token;
//     })
//     .catch(function (err) {
//         console.log('fcm에러 : ', err);
//     });

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken({vapidKey: vapidKey}).then((currentToken) => {
    if (currentToken) {
        console.log("=========1========");
        console.log(currentToken);

        axios.post("https://fcm.googleapis.com//v1/projects/pocket-market-ddc08/messages:send",
                {
                  "message": {
                    "token": currentToken,
                    "notification": {
                      "title": "Background Message Title",
                      "body": "Background message body"
                    },
                    "webpush": {
                      "fcm_options": {
                        "link": "http://localhost:3000/login/"
                      }
                    }
                  }
                },
            {
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': "bearer " + 'BJGFEP57ASR1hZfOE06L9Bgz4sSVFJ40WEw2cituFpM3ppPEyCSf48848mq9ybXABdb0CVhhCcctXoGELgw1YxU',
                },
            }
            );
    } else {
        // Show permission request.
        console.log('No registration token available. Request permission to generate one.');
        // Show permission UI.
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
});

