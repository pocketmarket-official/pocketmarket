import React from 'react';
import InfiniteScroll from './InfiniteScroll';
import menu from '../../assets/store_list/grid_img1.jpg';

class StoreList extends React.Component {
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
            {
                id: 3,
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
                id: 4,
                username: "마진형",
                like_count: 22,
                order_date: "2020-09-11",
                order_list: ["아이스아메리카노 1", "티라미수 1"],
                comment: "맛있는 티라미수",
                review: '맵기만 한 떢볶이는 이제 그만! 화끈한 매운맛과 불맛, 그리고 건강까지...',
                storeName: '조폭 떡볶이',
                comments: ["감사합니다 길동님!", "가나다라마바사"],
            },
            {
                id: 5,
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
                id: 6,
                username: "마진형",
                like_count: 22,
                order_date: "2020-09-11",
                order_list: ["아이스아메리카노 1", "티라미수 1"],
                comment: "맛있는 티라미수",
                review: '맵기만 한 떢볶이는 이제 그만! 화끈한 매운맛과 불맛, 그리고 건강까지...',
                storeName: '조폭 떡볶이',
                comments: ["감사합니다 길동님!", "가나다라마바사"],
            },
            {
                id: 7,
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
                id: 8,
                username: "마진형",
                like_count: 22,
                order_date: "2020-09-11",
                order_list: ["아이스아메리카노 1", "티라미수 1"],
                comment: "맛있는 티라미수",
                review: '맵기만 한 떢볶이는 이제 그만! 화끈한 매운맛과 불맛, 그리고 건강까지...',
                storeName: '조폭 떡볶이',
                comments: ["감사합니다 길동님!", "가나다라마바사"],
            },
            {
                id: 9,
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
                id: 10,
                username: "마진형",
                like_count: 22,
                order_date: "2020-09-11",
                order_list: ["아이스아메리카노 1", "티라미수 1"],
                comment: "맛있는 티라미수",
                review: '맵기만 한 떢볶이는 이제 그만! 화끈한 매운맛과 불맛, 그리고 건강까지...',
                storeName: '조폭 떡볶이',
                comments: ["감사합니다 길동님!", "가나다라마바사"],
            },
            {
                id: 11,
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
                id: 12,
                username: "마진형",
                like_count: 22,
                order_date: "2020-09-11",
                order_list: ["아이스아메리카노 1", "티라미수 1"],
                comment: "맛있는 티라미수",
                review: '맵기만 한 떢볶이는 이제 그만! 화끈한 매운맛과 불맛, 그리고 건강까지...',
                storeName: '조폭 떡볶이',
                comments: ["감사합니다 길동님!", "가나다라마바사"],
            },
            {
                id: 13,
                username: "노민철",
                like_count: 144,
                order_date: "2020-09-10",
                order_list: ["아이스아메리카노 2", "아이스라떼 1"],
                comment: "커피가 정말 맛있어요",
                review: '한입 와앙! 물고 놨는데 한도 끝도 없이 끊어지지 않고 늘어나는 치즈!',
                storeName: '강남핫도그',
                comments: ["감사합니다 길동님!"],
            },
            {
                id: 14,
                username: "마진형",
                like_count: 222,
                order_date: "2020-09-11",
                order_list: ["아이스아메리카노 1", "티라미수 1"],
                comment: "맛있는 티라미수",
                review: '맵기만 한 떢볶이는 이제 그만! 화끈한 매운맛과 불맛, 그리고 건강까지...',
                storeName: '조폭 떡볶이',
                comments: ["감사합니다 길동님!", "가나다라마바사"],
            },
        ]

        this.state = {
            temp: this.temp,
            data: this.temp.slice(0, 5),
            gap: 4,
            preItems: 0,
            items: 4,
            page: 1,
        };

        this._getData = this._getData.bind(this);
        this._infiniteScroll = this._infiniteScroll.bind(this);
    }

    _getData() {
        let result = this.state.temp.slice(this.state.preItems, this.state.items);
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
        window.addEventListener("scroll", this._infiniteScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this._infiniteScroll, true);
    }

    render() {
        return(
                <div className="storeList__grid">
                    <div className="storeList__box">
                        <div className="storeList_publisherBox">
                            <div className="storeList__photo"><img src={menu}/></div>
                            <div className="storeList__name">홍길동길동</div>
                            <div className="storeList__likes"><p className="listLikesButton">♥</p>53</div>
                            <div className="storeList__publisher">Hong**** 20.09.20 [치즈핫도그, 콘핫도그x2] </div>
                            <div className="storeList__description">한입 와앙! 물고 놨는데 한도끝도 없이 끊어지지 않고 늘어나는 치즈 (;;;) ㅋㅋㅋㅋ 사진으로 그게 표현이 안되는게 아쉽네..ㅜ? </div>
                        </div>
                        <div className="storeList__replyBox">
                            <div className="storeList__replyButton"><p className="replyButton">답글</p></div>
                            <div className="storeList__replyId">KinS**** </div>
                            <div className="storeList__replyDescription">아 여기 치즈는 ㄹㅇ 인정이져. 핫도그 안에 치즈 생산공장 들엇는줄 </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default StoreList;
