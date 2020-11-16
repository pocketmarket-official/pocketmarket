import React from 'react';
import '../Components/scss/KDSSoldout.scss'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function KDSSoldout() {
    return (
        <>
            <div className="sold-out-setting">
                <div className="category-selector">
                    <div className="category-item">
                        <span>메뉴전체</span>
                    </div>
                    <div className="category-item selected">
                        <span>메뉴전체-선택:(category1 === blank)</span>
                    </div>
                    <div className="category-item">
                        <span>cat1Nm</span>
                    </div>
                    <div className="category-item selected">
                        <span>cat1 selected</span>
                    </div>
                    <div className="prev">
                        <div className="fa-icon">
                            <FontAwesomeIcon icon={faChevronLeft}/>
                        </div>
                    </div>
                    {/*<div className="prev active">
                        <div className="fa-icon">
                            <FontAwesomeIcon icon={faChevronLeft}/>
                        </div>
                    </div>*/}
                    {/*<div className="next">
                        <div className="fa-icon">
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </div>
                    </div>*/}
                    <div className="next active">
                        <div className="fa-icon">
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </div>
                    </div>
                </div>
                <div className="category-selector">
                    <div className="category-item">
                        <span>메뉴전체</span>
                    </div>
                    <div className="category-item selected">
                        <span>메뉴전체-선택:(category2 === blank)</span>
                    </div>

                    <div className="category-item">
                        <span>cat2Nm</span>
                    </div>
                    <div className="category-item selected">
                        <span>cat2 selected</span>
                    </div>
                    <div className="prev">
                        <div className="fa-icon">
                            <FontAwesomeIcon icon={faChevronLeft}/>
                        </div>
                    </div>
                    {/*<div className="prev active">
                        <div className="fa-icon">
                            <FontAwesomeIcon icon={faChevronLeft}/>
                        </div>
                    </div>*/}
                    {/*<div className="next">
                        <div className="fa-icon">
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </div>
                    </div>*/}
                    <div className="next active">
                        <div className="fa-icon">
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </div>
                    </div>
                </div>
                <div className="menu-item-selector">
                    <div className="menu-item">
                        <div className="item-box">
                            <span>item_first_nm<br/>ITEM_SECOND_NM</span>
                        </div>
                    </div>
                    <div className="menu-item sold-out">
                        <div className="item-box">
                            <span>ITEM_FIRST_NM<br/>ITEM_SECOND_NM</span>
                        </div>
                    </div>
                    <div className="menu-item selected">
                        <div className="item-box">
                            <span>ITEM_FIRST_NM<br/>ITEM_SECOND_NM</span>
                        </div>
                    </div>
                    <div className="menu-item none">
                        <div className="item-box">
                            <span>ITEM_FIRST_NM<br/>ITEM_SECOND_NM</span>
                        </div>
                    </div>

                        <div className="prev">
                            <div className="fa-icon">
                                <FontAwesomeIcon icon={faChevronLeft}/>
                            </div>
                        </div>
                        {/*<div className="prev active">
                        <div className="fa-icon">
                            <FontAwesomeIcon icon={faChevronLeft}/>
                        </div>
                    </div>*/}
                        {/*<div className="next">
                        <div className="fa-icon">
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </div>
                    </div>*/}
                        <div className="next active">
                            <div className="fa-icon">
                                <FontAwesomeIcon icon={faChevronRight}/>
                            </div>
                        </div>



                    <div className="info">
                        <div className="fa-icon">
                            <FontAwesomeIcon icon={faInfo}/>
                        </div>
                        <span>품절정보는 자정이 지나면 자동으로 초기화 됩니다.</span>
                        <div className="label focus"></div>
                        <span>선택항목</span>
                        <div className="label sold-out"></div>
                        <span>품절품목</span>
                        <div className="label normal"></div>
                        <span>보유품목</span>
                    </div>
                </div>
            </div>
            <div className="navigation">
                <div className="footer-btn prev" routerLink="/">
                    <div className="fa-icon">
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </div>
                    <span>이전</span></div>
                <div className="footer-btn save">
                    <span>저장</span>
                    <div className="fa-icon">
                        <FontAwesomeIcon icon={faSave}/>
                    </div>
                </div>
            </div>
        </>

    );
}

export default KDSSoldout;