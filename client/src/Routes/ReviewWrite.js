import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';
import axios from 'axios';
import cookie from 'react-cookies';
import storage from '../storage.js';
import img_ico from '../../src/assets/review_write/img_up_ico.png';

class ReviewWrite extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);

        let userId = this.props.location.state.userId || null;
        let billNo = this.props.location.state.billNo || null;
        let saleDt = this.props.location.state.saleDt || null;
        let storeCd = this.props.location.state.storeCd || null;

        this.state = {
            userId: userId,
            billNo: billNo,
            saleDt: saleDt,
            storeCd: storeCd,
            image: [],
        }
    }

    handleSubmit() {
        const content = document.getElementById("reviewwrite__context");
/*        axios.post("/api/reviews_review", {
            storeCd: ,
            saleDt: , // 판매 날짜 trading에서
            billNo: ,
            user: ,
            context: content.value,
            img1: ,
            img2: ,
            img3: ,
            img4: ,
            img5: ,
        })
*/    }

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
        const elt = document.getElementById("select_image");
        const elt2 = document.getElementById("hidden_select");
        elt.onclick = () => {
            elt2.click();
        }
    }

    render() {
        console.log(this.state);
        return (
            <>
                <HeaderBack url='/mypage' />
                <div className="reviewwrite">
                    <div className="review__write__box">
                        <div className="review__write__caption">리뷰쓰기</div>
                        <textarea className="reviewwrite__context" id="reviewwrite__context"></textarea>
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
                            <div className="upperline"/>
                            <input type="file" multiple accept="image/*" id="review__image" hidden/>
                            <div className="fileupload" id="fileupload">
                                <div className="file__image__box empty" onChange={this.handleImageChange}>
                                    <img src={img_ico} alt="camera" className="image" id="select_image" />
                                    <input type="file" accept="image/png, image/jpeg" id="hidden_select"  hidden/>
                                </div>
                            </div>
                            <div className="underline"/>
                            <input type="submit" value="submit" id="review__submit" hidden/>
                            <div className="submit" onClick={() => this.handleSubmit()}>등록하기</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ReviewWrite;
