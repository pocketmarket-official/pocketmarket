import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';
import ReviewJSX from '../Components/js/reviewJSX';


class ReviewList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <HeaderBack url='/mypage' />
                <ReviewJSX props={this.props} />
            </>
        );
    }
}

export default ReviewList;
