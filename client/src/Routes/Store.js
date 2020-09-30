import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';
import StoreList from '../Components/js/StoreList';


class StoreView extends React.Component {
    constructor(props) {
        super(props);

        this.temp = [
            {
                id: 1,
                username: "노민철",
                like_count: 14,
                order_date: "2020-09-10",
                order_list: ["아이스아메리카노 2", "아이스라떼 1"],
                comment: "커피가 정말 맛있어요",
                review: '한입 와앙! 물고 놨는데 한도 끝도 없이 끊어지지 않고 늘어나는 치즈!',
                storeName: '강남핫도그',
                comments: ["감사합니다 길동님!"],
            },
            {
                id: 2,
                username: "마진형",
                like_count: 22,
                order_date: "2020-09-11",
                order_list: ["아이스아메리카노 1", "티라미수 1"],
                comment: "맛있는 티라미수",
                review: '맵기만 한 떢볶이는 이제 그만! 화끈한 매운맛과 불맛, 그리고 건강까지...',
                storeName: '조폭 떡볶이',
                comments: ["감사합니다 길동님!", "가나다라마바사"],
            },
        ]

        this.state = {
            current: 0,
            temp: this.temp,
        }

        this.handlePageGrid = this.handlePageGrid.bind(this);
        this.handlePageList = this.handlePageList.bind(this);
        this.handlePageRender = this.handlePageRender.bind(this);

        const id = this.props.location.state.data.id;
        const link = "/main/store/" + id + "/order";
    }

    handlePageGrid() {
        this.setState(() => ({ current: 0 }));
    }

    handlePageList() {
        this.setState(() => ({ current: 1 }));
    }

    handlePageRender() {
        if(this.state.current === 0) {
            return (
            <>
                <div className="store__review grid" id="review__container">
                    <Link to="/review"><div>image1</div></Link>
                    <div>image2</div>
                    <div>image3</div>
                    <div>image1</div>
                    <div>image2</div>
                    <div>image3</div>
                    <div>image1</div>
                    <div>image2</div>
                    <div>image3</div>
                    <div>image1</div>
                    <div>image2</div>
                    <div>image3</div>
                    <div>image1</div>
                    <div>image2</div>
                </div>
            </>
            );
        } else if(this.state.current === 1) {
            return <StoreList data={this.state.temp} />;
        } else {
            return null;
        }
    }

    render() {
        return (
            <>
                <HeaderBack url='/mypage' />
                <div className="store">
                    <div className="content__store">
                        <div className="store__store">
                            <div className="store__image">image</div>
                            <div className="store__detail">
                                <div className="detail__title">
                                    <div className="detail__name">{this.props.location.state.data.store_nm}</div>
                                    <div className="detail__distance">{this.props.location.state.d}</div>
                                    <div className="detail__likes">{this.props.location.state.data.like_count}</div>
                                </div>
                                <div className="detail__description">
                                    {this.props.location.state.data.comment}
                                </div>
                            </div>
                        </div>
                        <div className="button__container">
                                <button onClick={this.handlePageGrid}>Grid</button>
                                <button onClick={this.handlePageList}>List</button>
                        </div>
                    </div>
                    {this.handlePageRender()}
                </div>
                <div className="order"><Link to={this.link}>주문하기</Link></div>
            </>
        );
    }
}

export default StoreView;
