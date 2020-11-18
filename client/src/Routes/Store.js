import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';
import StoreList from '../Components/js/StoreList';
import '../Components/scss/storeGrid.scss';

import bg from '../assets/store_grid/grid_top_bg.jpg';
import menu1 from '../assets/store_grid/grid_img1.jpg';
import menu2 from '../assets/store_grid/grid_img2.jpg';
import menu3 from '../assets/store_grid/grid_img3.jpg';
import menu4 from '../assets/store_grid/grid_img4.jpg';
import menu5 from '../assets/store_grid/grid_img5.jpg';
import menu6 from '../assets/store_grid/grid_img6.jpg';
import menu7 from '../assets/store_grid/grid_img7.jpg';
import menu8 from '../assets/store_grid/grid_img8.jpg';
import menu9 from '../assets/store_grid/grid_img9.jpg';
import menu10 from '../assets/store_grid/grid_img10.jpg';
import menu11 from '../assets/store_grid/grid_img11.jpg';
import menu12 from '../assets/store_grid/grid_img12.jpg';

class StoreView extends React.Component {
    constructor(props) {
        super(props);
        const id = this.props.location.state.data.storeCd;
        const link = "/main/store/" + id + "/order";

        this.state = {
            current: 0,
            link: link,
        };

        this.handlePageSlide = this.handlePageSlide.bind(this);
        this.handlePageRender = this.handlePageRender.bind(this);
    }

    handlePageSlide() {
        this.setState((prev) => ({ current: (prev.current + 1) % 2 }));
    }

    handlePageRender() {
        if(this.state.current === 0) {
            return (
            <>
                <div className="store__review__grid" id="review__container">
                    <div className="storeGridMenu">
                        <div className="photo"><img src={menu1}/></div>
                        <div><img src={menu2}/></div>
                        <div><img src={menu3}/></div>
                    </div>
                    <div className="storeGridMenu">
                        <div><img src={menu4}/></div>
                        <div><img src={menu5}/></div>
                        <div><img src={menu6}/></div>
                    </div>
                    <div className="storeGridMenu">
                        <div><img src={menu7}/></div>
                        <div><img src={menu8}/></div>
                        <div><img src={menu9}/></div>
                    </div>
                    <div className="storeGridMenu">
                        <div><img src={menu10}/></div>
                        <div><img src={menu11}/></div>
                        <div><img src={menu12}/></div>
                    </div>
                    <div className="storeGridMenu">
                        <div><img src={menu4}/></div>
                        <div><img src={menu5}/></div>
                        <div><img src={menu6}/></div>
                    </div>
                </div>
            </>
            );
        } else if(this.state.current === 1) {
            return <StoreList />;
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className='page__store'>
                <HeaderBack />
                <div className="storeGrid-store">
                    <div className="storeGrid__content">
                        {/*<div className="store__store">*/}
                            <div className="storeGrid__image"><img src={bg}/></div>
                            <div className="storeGrid__detail">
                                <div className="storeGrid__title">
                                    <div className="storeGrid__name">{this.props.location.state.data.storeName}</div>
                                    <div className="storeGrid__distance">{this.props.location.state.d}</div>
                                    <div className="storeGrid__likes"><p className="likesButton">♥</p>{this.props.location.state.data.like_count || 123}</div>
                                    <div className="storeGrid__description">{this.props.location.state.data.description}</div>
                                </div>
                                <div className="storeGrid__description">
                                    {this.props.location.state.data.comment}
                                </div>
                            </div>
                        {/*</div>*/}
                        <div className="button__container" onClick={this.handlePageSlide}>
                            <button><p className="simple">간단</p></button>
                            <div className="slide">
                                <div className="subslide">
                                    <div className={"slideBall " + (this.state.current === 1 ? 'right' : '')}/>
                                </div>
                            </div>
                            <button><p className="detail">상세</p></button>
                        </div>
                    </div>
                    {this.handlePageRender()}
                </div>
                <div className="order">
                    <Link to={this.state.link}>
                        <p className="orderButton">주문하기</p>
                    </Link>
                </div>
            </div>
        );
    }
}

export default StoreView;
