import React from 'react';
import FestivalJSX from './mainFestivalJSX';
import axios from 'axios';

import btnClose from '../../assets/festival_pop/btn_close.png';

import festivalImg from '../../assets/festival_pop/img_1.jpg';
import festivalInfoImg from '../../assets/festival_pop/img_info.jpg';

class MainFestivalContent extends React.Component {
    constructor(props) {
        super(props);

        this._getData = this._getData.bind(this);
        this._infiniteScroll = this._infiniteScroll.bind(this);
        this.sortCallback = this.sortCallback.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.showFestivalInfoModal = this.showFestivalInfoModal.bind(this);

        this.state = {
            lat1: 0,
            long1: 0,
            festivals: [],
            data: [],
            gap: 3,
            preItems: 0,
            items: 4,
        };

        axios.get("/api/festivals_festival/")
        .then((res) => {
            const festivals = res.data;
            this.setState({
                festivals: festivals,
                data: festivals.slice(0, 4),
            });
        });
    }

    showFestivalInfoModal(festivalData) {
        document.getElementsByClassName('modal__festival')[0].classList.toggle('hidden');
    }

    getPosition(options) {
        return new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    }

    sortCallback() {
        this.state.festivals.forEach((data) => {
            let d = this.calcDistance(this.state.lat1, this.state.long1, data.xPosition, data.yPosition)[1];
            let dist = this.calcDistance(this.state.lat1, this.state.long1, data.xPosition, data.yPosition)[0];
            data["distance"] = d;
            data["show_dist"] = dist;
        });

        this.state.festivals.sort(this.sortData);
        this.setState({
            loading: false,
            data: this.state.festivals.slice(0, 4),
            preItems: 0,
            items: 4,
        });
    }

    _getData() {
        let result = this.state.festivals.slice(this.state.preItems, this.state.items);
        this.setState({
            data: this.state.data.concat(result),
            page: this.state.page + 1,
        });
        return result;
    }

    _infiniteScroll() {
        let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        let clientHeight = document.documentElement.clientHeight;

        if( 10 >= scrollHeight - scrollTop - clientHeight ) {
            this.setState({
                preItems: this.state.items,
                items: this.state.items + this.state.gap,
            },
                () => this._getData()
            );
        }
    }

    componentDidMount() {
        let addressContainer = document.getElementById("btn__address");
        let getPositionBtn = document.getElementById("btn__map_list");

/*        getPositionBtn.onclick = () => {
            addressContainer.innerHTML = "주소지";
            this.getPosition().then((position) => {
                this.setState({
                    lat1: position.coords.latitude,
                    long1: position.coords.longitude,
                },
                    () => this.sortCallback()
                )
            })
            .catch((e) => console.log(e));
        }
*/
        window.addEventListener("scroll", this._infiniteScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this._infiniteScroll, true);
    }

    render() {
        return (
            <>
                <div className="modal__festival hidden">
                    <div className="modal__modal">
                        <img src={btnClose} className="modal__close" onClick={() => {
                            document.getElementsByClassName('modal__festival')[0].classList.toggle('hidden')
                        }}/>
                        <div className="modal__content">
                            <div className="content__title">
                                <img src={festivalImg} className="title__img"/>
                                <div className="title__description">
                                    <div className="description__title">밤도깨비 야시장(반포낭만달빛)</div>
                                    <div className="description__tags">
                                        <div className="tags__tag">기간</div>
                                        <div className="tags__content">2020.09.01~2020.10.31</div>
                                    </div>
                                    <div className="description__tags">
                                        <div className="tags__tag">시간</div>
                                        <div className="tags__content">16:00 ~ 23:00</div>
                                    </div>
                                    <div className="description__tags">
                                        <div className="tags__tag">업체</div>
                                        <div className="tags__content">총 400 매장 | 동시 40 매장</div>
                                    </div>
                                    <div className="description__tags">
                                        <div className="tags__tag">위치</div>
                                        <div className="tags__content">서울시 여의도동 반포 한강공원</div>
                                    </div>
                                </div>
                            </div>
                            <div className="content__description">
                                <div className="description__title">축제소개</div>
                                <div className="description__content">
                                    각양각색의 상품을 만날 수 있는 글로벌 야시장.세계의 먹거리는 물론
                                    다채로운 핸드메이드 상품,서커스와 화려한 K-CULTURE 공연까지!
                                    아름다운 한강과 서울의 불빛이 만들어 내는세계 최고의 야경도 만나
                                    보세요!
                                </div>
                            </div>
                            <div className="content__stores">
                                <div className="stores__title">참여업체</div>
                                <div className="stores__content">
                                    <span>88강정</span>
                                    <span>Pride of Fried</span>
                                    <span>Say好</span>
                                    <span>Woker</span>
                                    <span>골드스테이크&쉬림프</span>
                                    <span>그날저녁</span>
                                    <span>기브앤테이크</span>
                                    <span>꺼야꺼야</span>
                                    <span>달달한형제들</span>
                                    <span>대한트럭</span>
                                    <span>돈블랙</span>
                                    <span>로꼬트럭</span>
                                    <span>무빙키친</span>
                                    <span>불타는네모반점</span>
                                </div>
                            </div>
                            <div className="content__guide">
                                <div className="guide__title">축제안내</div>
                                <img className="guide__img" src={festivalInfoImg}/>
                            </div>
                        </div>
                        <div className="modal__btns">
                            <button>축제입장</button>
                        </div>
                    </div>
                </div>
                {
                    this.state.data.map((data) => (
                        <FestivalJSX data={data} key={data.id} showFestivalInfo={this.showFestivalInfoModal}/>
                    ))
                }
            </>
        );
    }
}

export default MainFestivalContent;
