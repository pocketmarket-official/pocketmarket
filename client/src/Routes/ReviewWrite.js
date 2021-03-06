import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';
import axios from 'axios';
import {cookieCheck_rejectGuest} from "../Components/js/CookieCheck.js"
import img_ico from '../../src/assets/review_write/img_up_ico.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/common/logo.png';

class ReviewWrite extends React.Component {
    constructor(props) {
        super(props);
        this.props.history.go(1);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getFormatDate = this.getFormatDate.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);

        let billNo = this.props.location.state.matched.billNo || null;
        let saleDt = this.props.location.state.matched.saleDt || null;
        let storeId = this.props.location.state.matched.storeId || null;
        let saleHeaderId = this.props.location.state.matched.id || null;

        this.state = {
            userId: '',
            billNo: billNo,
            saleDt: saleDt,
            storeId: storeId,
            saleHeaderId: saleHeaderId,
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

    handleSubmit = (e) => {
        if(!e.detail || e.detail == 1){
            let form_data = new FormData();
            var date = new Date();
            date = this.getFormatDate(date);
            const content = document.getElementById("reviewwrite__context");

            form_data.append('storeCd', this.state.storeId);
            form_data.append('saleDt', this.state.saleDt);
            form_data.append('billNo', this.state.billNo);
            form_data.append('user', this.state.userId);
            form_data.append('reviewDt', date);
            form_data.append('context', content.value);
            for(let i in this.state.image){
                let j = parseInt(i);
                form_data.append(`img${j + 1}`, this.state.image[i][0]);
            }

            axios.post('/api/reviews_review/', form_data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then(res => {
                axios.put(`/api/trades_saleHeader/${this.state.saleHeaderId}/`,{
                    orderStatus: 6,
                    reviewYn: 'Y',
                } );
                window.location.replace('/mypage/order')
            })
            .catch(err => console.log(err))
        }
    };

    handleImageChange = (e) => {
        let container = document.getElementById("fileupload");
        const elt = document.getElementById("file__image__box");
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
        let user_email = cookieCheck_rejectGuest();
        const elt = document.getElementById("select_image");
        const elt2 = document.getElementById("hidden_select");
        elt.onclick = () => {
            elt2.click();
        };


        axios.get("/api/users_user/")
            .then((res) => {
                let userId = res.data.find((elt) => {
                    if (elt.email === user_email) {
                        return true;
                    }
                }).id;
                this.setState({ userId: userId });
            });
    }

    render() {
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
                                <div className="file__image__box empty" id="file__image__box" onChange={this.handleImageChange}>
                                    <img src={img_ico} alt="camera" className="image" id="select_image" />
                                    <input type="file" accept="image/png, image/jpeg" id="hidden_select"  hidden/>
                                </div>
                            </div>
                            <div className="underline"/>
                            <input type="submit" value="submit" id="review__submit" hidden/>
                            {
                                this.state.image.length === 0 ?
                                <div className="submit__off" onClick={(e) => {
                                    e.preventDefault();
                                    toast(<div className="message-container"><img src={logo} /><div>사진을 등록해주세요!</div></div>, {
                                        position: "top-center",
                                        autoClose: 5000,
                                        closeOnClick: true,
                                        className: 'toast',
                                        hideProgressBar: false,
                                        closeButton: false,
                                    });
                                }}>등록하기</div>
                                :
                                <div className="submit" onClick={this.handleSubmit}>등록하기</div>
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ReviewWrite;
