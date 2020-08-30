import React from 'react';
import KaKaoLogin from 'react-kakao-login';
import styled from 'styled-components';
import { Redirect } from "react-router-dom";

const axios = require('axios');


function Login({ authenticated, login, location }) {
    const responseKaKao = (res) => {
        const email = res.profile.kakao_account.email;
        try {
            login({ email })
        } catch (e) {
            alert("Failed to login");
        }
        /*firestore.collection("users").doc(email).get()
            .then(function(doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                    //유저가 없다.. 문서를 새로 만듬
                    firestore.collection("users").doc(email)
                        .set({
                        email : email
                        })
                        .then(function(doc) {
                            console.log("Document written with ID: ", email);
                        })
                        .catch(function(error) {
                            console.error("Error adding document: ", error);
                        });
                }
            }).catch(function(error) {
            console.log("Error getting document:", error);
        });*/


        /*firestore.collection("users").add({
            email : 'abc@abc.com'
        })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });*/
        // 사용자가 서버에 등록이 되었는지 확인하기
        /*let isExistUser = false;
        axios.get('http://localhost:3001/users?user_id=' + email)
            // 응답(성공)
            .then((response) => {
                if (response.data.length === 0) isExistUser = false
                else isExistUser = true
                //유저가 없으면 유저를 등록
                if (!isExistUser) {
                    axios.post(
                        'http://localhost:3001/users',
                        {"user_id": res.profile.kakao_account.email}
                    )
                        .then((res) => {
                            console.log(res);
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                }  //if (!isExistUser) {
            }) //then end
            // 응답(실패)
            .catch(function (error) {
                console.log(error);
            })*/
    };

    const responseFail = (err) => {
        alert(err);
    }

    const { from } = location.state || { from: { pathname: "/main" } }
    if (authenticated) return <Redirect to={from} />

    return (
        <div className="login">
            <div className="login__box">
                {/*<div className="kakao__login"><FontAwesomeIcon icon="comments" className="login__icon" />카카오 로그인</div>*/}
                <KaKaoBtn
                    //styled component 통해 style을 입혀 줄 예정
                    jsKey={process.env.REACT_APP_KAKAO_KEY}
                    //카카오에서 할당받은 jsKey를 입력
                    buttonText='카카오 계정으로 로그인'
                    //로그인 버튼의 text를 입력
                    onSuccess={responseKaKao}
                    onFailure={responseFail}
                    //성공했을때 불러올 함수로서 fetch해서 localStorage에 저장할 함수를 여기로 저장
                    getProfile={true}
                />
            </div>
        </div>
        );
}

const KaKaoBtn = styled(KaKaoLogin)`
  padding: 0;
  width: 300px;
  height: 45px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default Login;
