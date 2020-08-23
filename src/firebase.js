import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "pocket-market-ddc08.firebaseapp.com",
    databaseURL: "https://pocket-market-ddc08.firebaseio.com",
    projectId: "pocket-market-ddc08",
    storageBucket: "pocket-market-ddc08.appspot.com",
    messagingSenderId: "196040287857",
    appId: "1:196040287857:web:abfb63cdff7f2e1c30ddd0",
    measurementId: "G-T84SPLRMTM"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = firebase.storage();
// Create a storage reference from our storage service
const storageRef = storage.ref();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore, storageRef };
