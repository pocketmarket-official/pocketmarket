import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

class Reject extends React.Component {
    render() {
        return (
            <>
                <HeaderBack />
                <div className="reject">
                    <div className="reject__box">
                        <div className="reject__message">
                            <FontAwesomeIcon icon={faExclamation} size="6x" className="reject__exclamation" />
                            <div className="message__message">로그인이 필요한 서비스입니다.</div>
                        </div>
                        <button className="reject__button">로그인하러가기</button>
                    </div>
                </div>
            </>
        );
    }
}

export default Reject;
