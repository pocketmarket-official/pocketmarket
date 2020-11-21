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

        this.state = {
            userId: 0,
            title: '',
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

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let form_data = new FormData();
        form_data.append('content', this.state.content);
        form_data.append('img', this.state.image, this.state.image.name);
        let url = 'http://localhost:8000/api/users_question/';
        axios.post(url, form_data, {
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
    }

    componentDidUpdate() {

    }

    // handleImageUpload() {
    //     const btn = document.getElementById("empty");
    //     btn.onclick = () => {
    //         window.
    //     }
    // }

    render() {
        return (
            <>
                <HeaderBack url='/mypage'/>

                {/*<div className="App">*/}

                {/*        <p>*/}
                {/*            <input type="text" placeholder='Title' id='title' value={this.state.title}*/}
                {/*                   onChange={this.handleChange} required/>*/}
                {/*        </p>*/}
                {/*        <p>*/}
                {/*            <input type="text" placeholder='Content' id='content' value={this.state.content}*/}
                {/*                   onChange={this.handleChange} required/>*/}

                {/*        </p>*/}
                {/*        <p>*/}
                {/*            <input type="file"*/}
                {/*                   id="image"*/}
                {/*                   accept="image/png, image/jpeg" onChange={this.handleImageChange} required/>*/}
                {/*        </p>*/}
                {/*        <input type="submit"/>*/}

                {/*</div>*/}

            <form onSubmit={this.handleSubmit}>
                <div className="questionwrite">
                    <div className="question__write__box">
                        <div className="question__write__caption">문의하기</div>
                        {/*<textarea className="questionwrite__context"></textarea>*/}

                        <input type="text" placeholder='Content' className="questionwrite__context" id='content' value={this.state.content} onChange={this.handleChange} required/>

                    </div>
                    <div className="photo__upload__box">
                        <div className="photo__upload__caption">사진업로드</div>
                        <div className="photo__upload">
                            <div className="upperline"></div>
                            <input type="file" multiple accept="image/*" id="question__image" hidden/>
                            <div className="fileupload">
                                <div className="file__image__box">IMAGE</div>
                                <div className="file__image__box">IMAGE</div>
                                <div className="file__image__box">IMAGE</div>
                                <div className="file__image__box">IMAGE</div>
                                <div className="file__image__box empty" id="empty">
                                {/*<div className="file__image__box empty" id="empty">*/}
                                {/*    <img src={img_ico} className="image"/>*/}
                                {/*</div>*/}

                                <div className="file__image__box empty" id="empty">
                                    <input type="file" accept="image/png, image/jpeg" onChange={this.handleImageChange}>
                                    </input>
                                </div>

                            </div>
                            <div className="underline"></div>
                            <input type="submit" value="submit" id="question__submit" hidden/>
                            {/*<div className="submit">등록하기</div>*/}
                            <input type="submit" className="submit"/>
                        </div>
                        </div>
                    </div>
                </div>
            </form>
            </>
        );
    }
}

export default QuestionWrite;
