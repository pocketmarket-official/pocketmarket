import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';
import '../Components/scss/QuestionWrite.scss';
import img_ico from "../assets/review_write/img_up_ico.png";
import cookie from 'react-cookies';
import storage from '../storage.js';
import axios from 'axios';

class QuestionWrite extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getFormatDate = this.getFormatDate.bind(this);

        this.state = {
            userId: 0,
            content: '',
            image: null
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleImageChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    };

    getFormatDate = (date) => {
        var year = date.getFullYear();              //yyyy
        var month = (1 + date.getMonth());          //M
        month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
        var day = date.getDate();                   //d
        day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
        return  year + '' + month + '' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
    };


    handleSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        var date = new Date();
        date = this.getFormatDate(date);

        form_data.append('user', this.state.userId);
        form_data.append('questionDate', date);
        form_data.append('content', this.state.content);
        form_data.append('img', this.state.image, this.state.image.name);
        axios.post('http://localhost:8000/api/users_question/', form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err))
    };


    componentDidMount() {
        let cookie_token = cookie.load("access_token");
        let user_email = storage.get(cookie_token);

        axios.get('/api/users_user/')
            .then((res) => {
                let userId = res.data.find((elt) => {
                    if (elt.email === user_email) {
                        return true;
                    }
                }).id;
                this.setState({userId:userId});
            });


    }

    render() {
        return (
            <>
                <HeaderBack url='/mypage'/>
            <form onSubmit={this.handleSubmit}>
                <div className="questionwrite">
                    <div className="question__write__box">
                        <div className="question__write__caption">문의하기</div>
                        <textarea placeholder='Content' className="questionwrite__context" id='content' value={this.state.content} onChange={this.handleChange} required/>
                    </div>
                    <div className="photo__upload__box">
                        <div className="photo__upload__caption">사진업로드</div>
                        <div className="photo__upload">
                            <div className="upperline"></div>
                            <input type="file" multiple accept="image/*" id="question__image" hidden/>
                            <div className="fileupload">
                                {/*<div className="file__image__box">IMAGE</div>*/}
                                {/*<div className="file__image__box">IMAGE</div>*/}
                                {/*<div className="file__image__box">IMAGE</div>*/}
                                {/*<div className="file__image__box">IMAGE</div>*/}
                                <div className="file__image__box empty" id="empty">
                                    <label htmlFor="file-input">
                                        <img src={img_ico} className="image"/>
                                    </label>
                                    <input id="file-input" type="file" accept="image/png, image/jpeg" hidden onChange={this.handleImageChange}/>
                                </div>
                            </div>
                            <div className="underline"></div>
                            <div className="submit" onClick={(e)=>{
                                this.handleSubmit(e);
                            }}>등록하기</div>
                        </div>
                    </div>
                </div>
            </form>
            </>
        );
    }
}

export default QuestionWrite;
