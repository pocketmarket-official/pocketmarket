import React from 'react';
import { Link } from 'react-router-dom';


function KDSMain() {
    return (
        <>
            <div className="kdspickup">
                <div className="kdspickup__cell" id="kdspickup__cell-1">
                    <div className="cell__receipt">receipt no</div>
                    <div className="cell__time">경과시간</div>
                    <div className="cell__container">
                        <div className="cell__item">item nm</div>
                        <div className="cell__options">
                            <div className="cell__option">opt add</div>
                            <div className="cell__option">opt add</div>
                        </div>
                    </div>
                </div>
                <div className="kdspickup__cell" id="kdspickup__cell-2">
                    <div className="cell__receipt">receipt no</div>
                    <div className="cell__time">경과시간</div>
                    <div className="cell__container">
                        <div className="cell__item">item nm</div>
                        <div className="cell__options">
                            <div className="cell__option">opt add</div>
                            <div className="cell__option">opt add</div>
                        </div>
                    </div>
                </div>
                <div className="kdspickup__cell" id="kdspickup__cell-3">
                    <div className="cell__receipt">receipt no</div>
                    <div className="cell__time">경과시간</div>
                    <div className="cell__container">
                        <div className="cell__item">item nm</div>
                        <div className="cell__options">
                            <div className="cell__option">opt add</div>
                            <div className="cell__option">opt add</div>
                        </div>
                    </div>
                </div>
                <div className="kdspickup__cell" id="kdspickup__cell-4">
                    <div className="cell__receipt">receipt no</div>
                    <div className="cell__time">경과시간</div>
                    <div className="cell__container">
                        <div className="cell__item">item nm</div>
                        <div className="cell__options">
                            <div className="cell__option">opt add</div>
                            <div className="cell__option">opt add</div>
                        </div>
                    </div>
                </div>
                <div className="kdspickup__cell" id="kdspickup__cell-5">
                    <div className="cell__receipt">receipt no</div>
                    <div className="cell__time">경과시간</div>
                    <div className="cell__container">
                        <div className="cell__item">item nm</div>
                        <div className="cell__options">
                            <div className="cell__option">opt add</div>
                            <div className="cell__option">opt add</div>
                        </div>
                    </div>
                </div>
                <div className="kdspickup__cell" id="kdspickup__cell-6">
                    <div className="cell__receipt">receipt no</div>
                    <div className="cell__time">경과시간</div>
                    <div className="cell__container">
                        <div className="cell__item">item nm</div>
                        <div className="cell__options">
                            <div className="cell__option">opt add</div>
                            <div className="cell__option">opt add</div>
                        </div>
                    </div>
                </div>
                <div className="kdspickup__cell" id="kdspickup__cell-7">
                    <div className="cell__receipt">receipt no</div>
                    <div className="cell__time">경과시간</div>
                    <div className="cell__container">
                        <div className="cell__item">item nm</div>
                        <div className="cell__options">
                            <div className="cell__option">opt add</div>
                            <div className="cell__option">opt add</div>
                        </div>
                    </div>
                </div>
                <div className="kdspickup__cell" id="kdspickup__cell-8">
                    <div className="cell__receipt">receipt no</div>
                    <div className="cell__time">경과시간</div>
                    <div className="cell__container">
                        <div className="cell__item">item nm</div>
                        <div className="cell__options">
                            <div className="cell__option">opt add</div>
                            <div className="cell__option">opt add</div>
                        </div>
                    </div>
                </div>
                <div className="kdspickup__cell" id="kdspickup__cell-9">
                    <div></div>
                    <div></div>
                    <div className="cell-9__btn">이전화면</div>
                    <div className="cell-9__btn">다음화면</div>
                    <div className="cell-9__btn"><Link to="/kds/main">메인화면</Link></div>
                </div>
            </div>
        </>
    );
}

export default KDSMain;
