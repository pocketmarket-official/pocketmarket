import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';
import img_ico from "../assets/review_write/img_up_ico.png";
import cookie from 'react-cookies';
import storage from '../storage.js';
import axios from 'axios';

class QuestionWrite extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getFormatDate = this.getFormatDate.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);

        this.state = {
            userId: null,
            content: '',
            image: [],
        }
    }

    getFormatDate = (date) => {
        var year = date.getFullYear();              //yyyy
        var month = (1 + date.getMonth());          //M
        month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
        var day = date.getDate();                   //d
        day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
        return  year + '' + month + '' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
    };

    handleSubmit = () => {
        let form_data = new FormData();
        var date = new Date();
        date = this.getFormatDate(date);
        const content = document.getElementById("content");

        form_data.append('user', this.state.userId);
        form_data.append('questionDate', date);
        form_data.append('content', content.value);
        for(let i in this.state.image){
            let j = parseInt(i);
            form_data.append(`img${j + 1}`, this.state.image[i][0]);
        }

        // axios.post('http://localhost:8000/api/users_question/', form_data, { //URL EXCHANGE LOCAL
        axios.post('/api/users_question/', form_data, { //URL EXCHANGE RELATIVE
        // axios.post('http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/users_question/', form_data, { //URL EXCHANGE SERVER
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
            })
            .catch(err => console.log(err))
    };

    handleImageChange = (e) => {
        let container = document.getElementById("fileupload");
        const elt = document.getElementById("empty");
        if(container.childElementCount === 5) {
            elt.style.display = "none";
        }

        let fileReader = new FileReader();
        fileReader.readAsDataURL(e.target.files[0]);
        fileReader.onload = function(e) {
            let elt = document.createElement("img");
            elt.className = "file__image__box";
            elt.src = e.target.result;
            container.appendChild(elt);
        };

        this.setState({
            image: this.state.image.concat(e.target.files),
        });
    };


    componentDidMount() {
    let cookie_token = cookie.load("access_token");
        if(!cookie_token){
            window.location.href = '/login/';
        }
        else if(cookie_token==='guest') {
            cookie.remove('access_token');
            window.location.href = '/login/';
        }
        let user_email = storage.get(cookie_token);

        //axios.get("http://localhost:8000/api/users_user/") // URL EXCHANGE LOCAL
        axios.get("/api/users_user/") // URL EXCHANGE RELATIVE
        // axios.get("http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/users_user/") // URL EXCHANGE SERVER
            .then((res) => {
                let userId = res.data.find((elt) => {
                    if (elt.email === user_email) {
                        return true;
                    }
                }).id;
                this.setState({ userId: userId });
            });

        const elt = document.getElementById("select_image");
        const elt2 = document.getElementById("hidden_select");
        elt.onclick = () => {
            elt2.click();
        }
    }

    render() {
        return (
            <>
                <HeaderBack url='/mypage'/>
                <div className="questionwrite">
                    <div className="question__write__box">
                        <div className="question__write__caption">문의하기</div>
                        <textarea placeholder='Content' className="questionwrite__context" id='content'  onChange={this.handleChange} required/>
                    </div>
                    <div className="photo__upload__box">
                        <div className="photo__upload__caption">사진업로드</div>
                        <div className="photo__upload">
                            <div className="upperline"></div>
                            <input type="file" multiple accept="image/*" id="question__image" hidden/>
                            <div className="fileupload" id="fileupload">
                                <div className="file__image__box empty" id="empty">
                                    <img src={img_ico} alt="camera" className="image" id="select_image" />
                                    <input type="file" accept="image/png, image/jpeg" id="hidden_select"  onChange={this.handleImageChange} hidden/>
                                </div>
                            </div>
                            <div className="underline"></div>
                            <input type="submit" value="submit" id="review__submit" hidden/>
                            <div className="submit" onClick={() => this.handleSubmit()}>등록하기</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default QuestionWrite;
