import React from 'react';
import Header from '../Components/js/Header';

function Main() {
    return (
            <>
                <Header />
                <div className="main">
                    <div className="main__navigation">
                        <div className="navigation__festival">축제보기</div>
                        <div className="navigation__store">매장보기</div>
                    </div>
                    <div className="current-position">내 현재 위치 icon</div>
                </div>
            </>
        );
}

export default Main;
