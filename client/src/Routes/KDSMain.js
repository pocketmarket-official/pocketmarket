import React from 'react';
import { Link } from 'react-router-dom';


function KDSMain() {
    return (
        <>
            <div className="kds">
                <div className="kds__cell" id="kds__cell-1">
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
                <div className="kds__cell" id="kds__cell-2">
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
                <div className="kds__cell" id="kds__cell-3">
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
                <div className="kds__cell" id="kds__cell-4">
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
                <div className="kds__cell" id="kds__cell-5">
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
                <div className="kds__cell" id="kds__cell-6">
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
                <div className="kds__cell" id="kds__cell-7">
                    <div className="cell__summary">Summary</div>
                    <div className="cell__container">
                        <div className="cell__item">item nm</div>
                        <div className="cell__options">
                            <div className="cell__option">opt add</div>
                            <div className="cell__option">opt add</div>
                        </div>
                    </div>
                    <div className="cell__btns">
                        <div className="cell__left">&lt;-</div>
                        <div className="cell__right">-&gt;</div>
                    </div>
                </div>
                <div className="kds__cell" id="kds__cell-8">
                    <div className="cell-8__btn">픽업처리</div>
                    <div className="cell-8__btn"><Link to="/kds/kitchen">품절처리</Link></div>
                    <div className="cell-8__btn">주문현황</div>
                    <div className="cell-8__btn"><Link to="/kds/setting">환경설정</Link></div>
                    <div className="cell-8__btn">종료</div>
                </div>
            </div>
        </>
    );
}

export default KDSMain;
