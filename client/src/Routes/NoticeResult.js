import React from 'react';
import HeaderBiz from '../Components/js/HeaderBiz';
import Notice1 from '../Components/js/Notice1';
import Notice2 from '../Components/js/Notice2';
import Notice3 from '../Components/js/Notice3';

class NoticeResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.noticeId,
        }
    }

    render() {
        let jsx = null;
        if(this.state.id === '1') {
            jsx = <Notice1 />;
        } else if(this.state.id === '2') {
            jsx = <Notice2 />;
        } else if(this.state.id === '3') {
            jsx = <Notice3 />;
        }
        return (
            <>
                <HeaderBiz />
                <div className="noticeresult__content">
                {jsx}
                </div>
            </>
        );
    }
}

export default NoticeResult;
