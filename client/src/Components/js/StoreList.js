import React from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from './InfiniteScroll';


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
                like_count: 14,
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
            temp: this.temp,
            data: this.temp.slice(0, 5),
            gap: 5,
            preItems: 0,
            items: 5,
        };

        this._getData = this._getData.bind(this);
        this._infiniteScroll = this._infiniteScroll.bind(this);
    }

    _getData() {
        let result = this.state.temp.slice(this.state.preItems, this.state.items);
        console.log(result);
        this.setState({ data: result });
        return result;
    }

    _infiniteScroll() {
        let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        let clientHeight = document.documentElement.clientHeight;

        console.log(scrollHeight);
        console.log(scrollTop + clientHeight);

        if( 0 === Math.floor(scrollHeight - scrollTop - clientHeight)) {
            this.setState({
                preItems: this.state.items,
                items: this.state.items + this.state.gap,
            });
            this._getData();
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this._infiniteScroll);
    }

    render() {
        console.log(this.state.data)
        let id = 0;
        return(
            <InfiniteScroll data={this.state.data} key={id++} />
        );
    }
}

export default StoreList;
