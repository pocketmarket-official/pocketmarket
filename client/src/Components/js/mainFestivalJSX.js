import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../../assets/main/grayBI.png';


class FestivalJSX extends React.Component {
    constructor(props) {
        super(props);
        this.formatDate = this.formatDate.bind(this);
    }

    formatDate(dateStr) {
        if(dateStr) {
            const formedDate = dateStr.slice(0, 4) + '.' + dateStr.slice(4, 6) + '.' + dateStr.slice(6, 8);
            return formedDate;
        } else {
            return;
        }
    }

    render() {
        let data = this.props.data;
        let start = new Date(this.formatDate(data.startDt));
        let startDt = start.getFullYear() + '년 ' + (start.getMonth() + 1) + '월 ' + start.getDate() + '일';
        let end = new Date(this.formatDate(data.endDt));
        let endDt = end.getFullYear() + '년 ' + (end.getMonth() + 1) + '월 ' + end.getDate() + '일';

        return (
            <Link to={{
                pathname : `/main/festival/${data.festivalCd}`,
                state : { data }
            }}>
                <div className="content__festival">
                    <div className="festival__header">
                        <div className="header__title">{data.festivalName}</div>
                        <div className="header__enter">축제입장</div>
                    </div>
                    <div className="festival__detail">
                        <img src={data.imgUrl || defaultImg} alt="festival" />
                        <div className="detail__description">
                            <ul>
                                <li>{startDt} ~ {endDt}</li>
                                <li>{data.descriptionHeader}</li>
                                <li>{data.addr1}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default FestivalJSX;
