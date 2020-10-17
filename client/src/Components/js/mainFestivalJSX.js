import React from 'react';
import { Link } from 'react-router-dom';


class FestivalJSX extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <Link to={{
                pathname : `/main/festival/${data.id}`,
                state : { data }
            }}>
                <div className="content__festival">
                    <div><img src={data.imageUrl} alt="festival" /></div>
                    <div className="festival__detail">
                        <div className="detail__name">{data.name}</div>
                        <div className="detail__description">{data.description}</div>
                        <div className="detail__address">{data.address}</div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default FestivalJSX;
