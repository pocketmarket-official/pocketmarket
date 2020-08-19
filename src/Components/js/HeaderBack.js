import React from 'react';
import { Link, useHistory } from 'react-router-dom';


function HeaderBack(props) {
    const history = useHistory();

    return (
            <div className="header__box">
                <div id="back-btn" onClick={() => {
                    history.goBack();
                }}>back</div>
                <Link to="/main"><div>Pocket Market</div></Link>
                <Link to={props.url}><div>my</div></Link>
            </div>
        );
}

export default HeaderBack;
