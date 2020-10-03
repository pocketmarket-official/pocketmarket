import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';
import StoreList from '../Components/js/StoreList';


class StoreView extends React.Component {
    constructor(props) {
        super(props);

        const id = this.props.location.state.data.id;
        const link = "/main/store/" + id + "/order";

        this.state = {
            current: 0,
            link: link,
        };

        this.handlePageGrid = this.handlePageGrid.bind(this);
        this.handlePageList = this.handlePageList.bind(this);
        this.handlePageRender = this.handlePageRender.bind(this);
    }

    handlePageGrid() {
        this.setState(() => ({ current: 0 }));
    }

    handlePageList() {
        this.setState(() => ({ current: 1 }));
    }

    handlePageRender() {
        if(this.state.current === 0) {
            return (
            <>
                <div className="store__review grid" id="review__container">
                    <Link to="/review"><div>image1</div></Link>
                    <div>image2</div>
                    <div>image3</div>
                    <div>image1</div>
                    <div>image2</div>
                    <div>image3</div>
                    <div>image1</div>
                    <div>image2</div>
                    <div>image3</div>
                    <div>image1</div>
                    <div>image2</div>
                    <div>image3</div>
                    <div>image1</div>
                    <div>image2</div>
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
            <>
                <HeaderBack url='/mypage' />
                <div className="store">
                    <div className="content__store">
                        <div className="store__store">
                            <div className="store__image">image</div>
                            <div className="store__detail">
                                <div className="detail__title">
                                    <div className="detail__name">{this.props.location.state.data.store_nm}</div>
                                    <div className="detail__distance">{this.props.location.state.d}</div>
                                    <div className="detail__likes">{this.props.location.state.data.like_count}</div>
                                </div>
                                <div className="detail__description">
                                    {this.props.location.state.data.comment}
                                </div>
                            </div>
                        </div>
                        <div className="button__container">
                                <button onClick={this.handlePageGrid}>Grid</button>
                                <button onClick={this.handlePageList}>List</button>
                        </div>
                    </div>
                    {this.handlePageRender()}
                </div>
                <div className="order"><Link to={this.state.link}>주문하기</Link></div>
            </>
        );
    }
}

export default StoreView;
