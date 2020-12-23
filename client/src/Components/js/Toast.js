import React, { PureComponent } from 'react';

class Toast extends PureComponent {
    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        let elt = document.getElementById("toast");
        elt.classList.remove("toast_off");
        elt.classList.add("toast");
        setTimeout(this.handleToast, 3000);
    }

    handleToast() {
        let elt = document.getElementById("toast");
        if(elt) {
            elt.classList.add("toast_off");
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
