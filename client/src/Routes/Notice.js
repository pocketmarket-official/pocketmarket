import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBiz from '../Components/js/HeaderBiz';

class Notice extends React.Component {
    render() {
        return (
            <>
                <HeaderBiz url='/mypage' />
                <div className="notice">
                    <div className="notice__body">
                        <Link to="/mypage/notice/2">
                            <div className="notice__list">
                                <div className="notice__content">
                                    <div className="notice__title">이용약관</div>
                                    <div className="notice__date">20210115</div>
                                </div>
                                <div className="notice__mark">></div>
                            </div>
                        </Link>
                        <Link to="/mypage/notice/1">
                            <div className="notice__list">
                                <div className="notice__content">
                                    <div className="notice__title">개인정보처리방침</div>
                                    <div className="notice__date">20210114</div>
                                </div>
                                <div className="notice__mark">></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        );
    }
}

export default Notice;
