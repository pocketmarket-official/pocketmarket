import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';
import '../Components/scss/ReviewWrite.scss';
import axios from 'axios';
import cookie from 'react-cookies';
import storage from '../storage.js';
import img_ico from '../../src/assets/review_write/img_up_ico.png';

class ReviewWrite extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);

        this.state = {
            userId: null,
            image: [],
        }
    }

    handleSubmit() {
    }

    handleImageChange = (e) => {
        let container = document.getElementById("fileupload");
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
        let user_email = storage.get(cookie_token);

        axios.get("/api/users_user/")
        .then((res) => {
            let userId = res.data.find((elt) => {
                if(elt.email === user_email) {
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
                <HeaderBack url='/mypage' />
                <div className="reviewwrite">
                    <div className="review__write__box">
                        <div className="review__write__caption">리뷰쓰기</div>
                        <textarea className="reviewwrite__context"></textarea>
                    </div>
                    {/*
                        <div className="review__content__box">
                        <div className="review__content__caption">리뷰평가</div>
                        <div className="review__content">
                            <div className="input__container">
                                <div className="menu__name">아이스 아메리카노</div>
                                <input className="review__controll" type="range" min="0" max="5.0" step="0.5" />
                                <div className="review__point">3.5</div>
                            </div>
                            <div className="input__container">
                                <div className="menu__name">아이스 라떼</div>
                                <input className="review__controll" type="range" min="0" max="5.0" step="0.5" />
                                <div className="review__point">1.5</div>
                            </div>
                            <div className="input__container">
                                <div className="menu__name">프라푸치노</div>
                                <input className="review__controll" type="range" min="0" max="5.0" step="0.5" />
                                <div className="review__point">1.5</div>
                            </div>
                            <div className="input__container">
                                <div className="menu__name">뭐시기</div>
                                <input className="review__controll" type="range" min="0" max="5.0" step="0.5" />
                                <div className="review__point">1.5</div>
                            </div>
                            <div className="input__container">
                                <div className="menu__name">뭐시기</div>
                                <input className="review__controll" type="range" min="0" max="5.0" step="0.5" />
                                <div className="review__point">1.5</div>
                            </div>
                            <div className="image__container" id="image__container">
                                need to show image preview 
                            </div>
                        </div>
                    </div>
                    */}
                    <div className="photo__upload__box">
                        <div className="photo__upload__caption">사진업로드</div>
                        <div className="photo__upload">
                            <div className="upperline"></div>
                            <input type="file" multiple accept="image/*" id="review__image" hidden/>
                            <div className="fileupload" id="fileupload">
                                <div className="file__image__box empty">
                                    <img src={img_ico} alt="camera" className="image" id="select_image" />
                                    <input type="file" accept="image/png, image/jpeg" id="hidden_select"  onChange={this.handleImageChange} hidden/>
                                </div>
                            </div>
                            <div className="underline"></div>
                            <input type="submit" value="submit" id="review__submit" hidden/>
                            <div className="submit">등록하기</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ReviewWrite;
