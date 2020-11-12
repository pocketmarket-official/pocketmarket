import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';
import '../Components/scss/bizkitchen.scss';
import img1 from '../assets/order/menu1.png'
import img2 from '../assets/order/menu2.png'
import done from '../assets/business_kitchen/img_soldout.png'
function BizKitchen() {
    return (
        <>
            <HeaderBack url='/biz/mypage' />
            <div className="bizkitchen">
                <div className="bizkitchen__store__box">
                    <div className="bizkitchen__store">
                        포켓 떡볶이 강남점
                    </div>
                </div>
                <div className="bizkitchen__category">
                    <div className="category__left scroll"><span>{"<"}</span></div>
                    <div className="content__box">
                        <div className="category__content active">
                            전체메뉴
                            <div className="category__status">test</div>
                        </div>
                        <div className="category__content busy">
                            핫도그
                            <div className="category__status">주문밀림</div>
                        </div>
                        <div className="category__content done">
                            떡꼬치
                            <div className="category__status">메뉴품절</div>
                        </div>
                        <div className="category__content">
                            음료수
                            <div className="category__status">test4</div>
                        </div>
                        <div className="category__content">
                            디저트
                            <div className="category__status">test5</div>
                        </div>
                    </div>
                    <div className="category__right"><span>{">"}</span></div>
                </div>
                <div className="bizkitchen__menu">
                    <div className="menu__container done">
                        <img className="menu__image" src={img1}/>
                        <img className="menu__done" src={done}/>
                        <div className="menu__name">menu_name</div>
                        <div className="menu__price">menu_price</div>
                    </div>
                    <div className="menu__container">
                        <img className="menu__image" src={img2}></img>
                        <div className="menu__name">menu_name</div>
                        <img className="menu__done" src={done}/>
                        <div className="menu__price">menu_price</div>
                    </div>
                    <div className="menu__container">
                        <img className="menu__image" src={img1}></img>
                        <img className="menu__done" src={done}/>
                        <div className="menu__name">menu_name</div>
                        <div className="menu__price">menu_price</div>
                    </div>
                    <div className="menu__container">
                        <img className="menu__image" src={img1}></img>
                        <img className="menu__done" src={done}/>
                        <div className="menu__name">menu_name</div>
                        <div className="menu__price">menu_price</div>
                    </div>
                    <div className="menu__container">
                        <img className="menu__image" src={img1}></img>
                        <img className="menu__done" src={done}/>
                        <div className="menu__name">menu_name</div>
                        <div className="menu__price">menu_price</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BizKitchen;
