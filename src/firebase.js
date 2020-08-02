import firebase from "firebase/app";
import "firebase/firestore";

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

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };