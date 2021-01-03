import React, { PureComponent } from 'react';

class Toast extends PureComponent {
    // Toast component for react
    // options: 
    // vanishOnClick
    // true이면 클릭해야 사라짐
    // false이거나 적지 않을시에는 자동으로 내려감
    // turn
    // on일때만 동작

    constructor(props) {
        super(props);
        this.handleToast = this.handleToast.bind(this);
        this.handleToast2 = this.handleToast2.bind(this);

        let flag = true;
        let flag2 = false;

        if(this.props.vanishOnClick === undefined || this.props.vanishOnClick === false) {
            flag = false;
        }

        if(this.props.turn === 'on') {
            flag2 = true;
        }

        this.state = {
            vanishOnClick: flag,
            turn: flag2,
        }
    }

    componentDidMount() {
        let elt = document.getElementById("toast");
        if(this.state.turn) {
            if(!this.state.vanishOnClick) {
                elt.classList.remove("toast_off");
                elt.classList.add("toast");
                setTimeout(this.handleToast, 5000);
            } else if(this.state.vanishOnClick) {
                elt.classList.remove("toast_off");
                elt.classList.add("toast_up");
                setTimeout(this.handleToast2, 3000);
            }
        }
    }

    handleToast() {
        let elt = document.getElementById("toast");
        if(elt) {
            elt.classList.add("toast_off");
        }
    }

    handleToast2() {
        let elt = document.getElementById("toast");
        if(elt) {
            elt.onclick = () => {
                elt.classList.add("toast_down");
                setTimeout(() => {
                    elt.classList.add("toast_off");
                }, 3000);
            }
        }
    }

    render() {
        return (
            <>
                <div className="toast_off" id="toast">{this.props.message}</div>
            </>
        );
    }
}

export default React.memo(Toast);
