import React from 'react';


function OptionModal() {
    return (
        <>
            <div className="optionmodal hidden" id="optionmodal">
                <div className="optionmodal__container">
                    <div className="optionmodal__header">
                        <div>image</div>
                        <div className="optionmodal__title">
                            <div className="optionmodal__name">아이스 아메리카노</div>
                            <div className="optionmodal__content">item content</div>
                        </div>
                    </div>
                    <div className="optionmodal__options">
                        <div className="options__option">
                            <div className="">option</div>
                            <div className="">option</div>
                            <div className="">option</div>
                        </div>
                        <div className="options__option">
                            <div className="">option</div>
                            <div className="">option</div>
                            <div className="">option</div>
                        </div>
                        <div className="options__option">
                            <div className="">option</div>
                            <div className="">option</div>
                            <div className="">option</div>
                        </div>
                        <div className="options__option">
                            <div className="">option</div>
                            <div className="">option</div>
                            <div className="">option</div>
                        </div>
                    </div>
                    <div className="optionmodal__result">
                        <div className="result__container">
                            <div className="result__content">
                                <div>seq</div>
                                <div>옵션</div>
                                <input type="number" id="option__quantity" />
                                <button className="">X</button>
                            </div>
                        </div>
                        <div className="optionmodal__btn">
                            <button className="optionmodal__select">주문담기</button>
                            <button className="optionmodal__clear" onClick={() => {
                                const elt = document.getElementById("optionmodal");
                                elt.classList.add("hidden");
                            }}>초기화</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OptionModal;
