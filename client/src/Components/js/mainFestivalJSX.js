import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/mainFestivalJSX.scss';


class FestivalJSX extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <Link to={{
                pathname : `/main/festival/${data.id}`,
                state : { data }
            }}>
                <div className="content__festival">
                    <div className="festival__header">
                        <div className="header__title">{data.name}</div>
                        <div className="header__enter">축제입장</div>
                    </div>
                    <div className="festival__detail">
                        <img src={data.image} alt="festival" />
                        <div className="detail__description">
                            <ul>
                                <li>12월 2일 ~ 1월 25일 08~22시</li>
                                <li>{data.description}</li>
                                <li>{data.address}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default FestivalJSX;
