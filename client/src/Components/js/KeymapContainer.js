import React from 'react';


class KeymapContainer extends React.Component {
    constructor(props) {
        super(props);
        let keymap = [
            {
                group_cd: 1,
                menu: '아이스아메리카노'
            },
            {
                group_cd: 2,
                menu: '초코케잌'
            },
            {
                group_cd: 1,
                menu: '아이스라떼'
            },
            {
                group_cd: 3,
                menu: '치즈버거'
            },
            {
                group_cd: 2,
                menu: '티라미수'
            },
            {
                group_cd: 2,
                menu: '쿠앤크'
            },
            {
                group_cd: 1,
                menu: '초콜릿라떼'
            },
            {
                group_cd: 2,
                menu: '생크림'
            },
            {
                group_cd: 3,
                menu: '빅맥'
            },
        ];
        this.state = {
            keymap: keymap,
        }
    }
    render() {
        let temp_list = this.state.keymap.filter((item) => item.group_cd == this.props.code);
        return (
            temp_list.map((data) => {
                return (
                    <>
                       <div className="menu__container" onClick={() => {
                                    const elt = document.getElementById("optionmodal");
                                    elt.classList.remove("hidden");
                                }}>
                            <div className="menu__image">image</div>
                            <div className="menu__name">{data.menu}</div>
                        </div>
                    </>
                );
            })
        );
    }
}

export default KeymapContainer;
