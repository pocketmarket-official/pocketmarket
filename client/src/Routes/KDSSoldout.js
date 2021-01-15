import React from 'react';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class KDSSoldout extends React.Component{
    constructor(props){
        super(props);
        this.getSoldOutInfo();
    }

    getSoldOutInfo() {
        this.state = {
            food: [],
            soldOut: [],
            categoryFoodMap: [
                {category: "category1", food: ['category1_food1', 'category1_food2'], soldOut: [1, 0]},
                {category: "category2", food: ['category2_food1', 'category2_food2'], soldOut: [0, 0]},
                {category: "category3", food: ['category3_food1', 'category3_food2'], soldOut: [0, 1]}
            ],
            buttonAll: [
                {buttonId: "button_all", active: 1}
            ],
            buttonActive: [
                {buttonId: "button_0", active: 0},
                {buttonId: "button_1", active: 0},
                {buttonId: "button_2", active: 0}
            ]
        };
    }

    componentDidMount(){
        this.showFoodListInActiveButton()
    }

    changeSoldOutInfoInCategoryFoodMap(foodName) {
        for(let categoryIndex in this.state.categoryFoodMap){
            for(let foodIndex in this.state.categoryFoodMap[categoryIndex].food) {
                if (this.state.categoryFoodMap[categoryIndex].food[foodIndex] === foodName) {
                    if(this.state.categoryFoodMap[categoryIndex].soldOut[foodIndex] === 1) {
                        this.state.categoryFoodMap[categoryIndex].soldOut[foodIndex] = 0
                    } else {
                        this.state.categoryFoodMap[categoryIndex].soldOut[foodIndex] = 1
                    }
                }
            }
        }
    }

    changeCategoryButtonActive(id) {
        if(this.state.buttonAll[0].buttonId === id){
            if(this.state.buttonAll[0].active === 1) {
                this.state.buttonAll[0].active = 0
            } else {
                this.state.buttonAll[0].active = 1
            }
        }

        for(let buttonIndex in this.state.buttonActive){
            if(id === this.state.buttonActive[buttonIndex].buttonId) {
                if(this.state.buttonActive[buttonIndex].active === 1) {
                    this.state.buttonActive[buttonIndex].active = 0
                } else {
                    this.state.buttonActive[buttonIndex].active = 1
                }
            }
        }
    }

    changeButtonStyleOfFoodButton(id) {
        const clickedButton = document.getElementById(id);
        if(clickedButton.className === "button button-active-food"){
            clickedButton.className = "button"
            this.changeSoldOutInfoInCategoryFoodMap(clickedButton.textContent)
        } else {
            clickedButton.className = "button button-active-food"
            this.changeSoldOutInfoInCategoryFoodMap(clickedButton.textContent)
        }
    }

    changeButtonStyleOfCategoryButton(id) {
        const clickedButton = document.getElementById(id);
        if(clickedButton.className === "button button-active-category"){
            clickedButton.className = "button"
            this.changeCategoryButtonActive(id)
        } else {
            clickedButton.className = "button button-active-category"
            this.changeCategoryButtonActive(id)
        }
        this.showFoodListInActiveButton()
    }

    showFoodListInActiveButton() {
        let foodListWillBePushed = []
        let soldOutListWillBePushed = []
        for(let categoryIndex in this.state.categoryFoodMap){
            if(this.state.buttonActive[categoryIndex].active === 1 || this.state.buttonAll[0].active === 1) {
                for (let foodIndex in this.state.categoryFoodMap[categoryIndex].food) {
                    foodListWillBePushed.push(this.state.categoryFoodMap[categoryIndex].food[foodIndex])
                    soldOutListWillBePushed.push(this.state.categoryFoodMap[categoryIndex].soldOut[foodIndex])
                }
            }
        }

        this.setState({
            food: foodListWillBePushed,
            soldOut: soldOutListWillBePushed
        });
    }

    handleGoBack() {
        window.history.back()
    }

    render(){
        const categoryHtml = []
        const handleClickOfCategoryButton = e => this.changeButtonStyleOfCategoryButton(e.target.id);
        const handleClickOfFoodButton = e => this.changeButtonStyleOfFoodButton(e.target.id);
        const handleGoBack = e => this.handleGoBack();
        categoryHtml.push(<button id="button_all" className="button button-active-category" onClick={handleClickOfCategoryButton}>all</button>)
        for(let categoryIndex in this.state.categoryFoodMap){
            const eachButtonId = `button_${categoryIndex}`
            const eachCategory = this.state.categoryFoodMap[categoryIndex].category
            categoryHtml.push(<button id={eachButtonId} className="button" onClick={handleClickOfCategoryButton}>{eachCategory}</button>)
        }

        return (
        <>
            <div className="sold-out-setting">
                <div className="category-selector">
                    {categoryHtml}
                </div>
                <div>
                    {this.state.food.map((eachFood, index) => {
                        const each_button_id = `food_button_${index}`
                        if (this.state.soldOut[index] === 0) {
                            return (<button id={each_button_id} onClick={handleClickOfFoodButton} className="button">{eachFood}</button>);
                        } else {
                            return (<button id={each_button_id} onClick={handleClickOfFoodButton} className="button button-active-food">{eachFood}</button>);
                        }
                    })}
                </div>
            </div>
            <div className="info">
                <span>※ 품절 정보는 자정이 지나면 자동으로 초기화 됩니다.</span>
                <div className="label sold-out"></div>
                <span>품절</span>
                <div className="label normal"></div>
                <span>보유</span>
            </div>
            <div className="footer">
                <div className="footer-btn prev" routerLink="/" onClick={handleGoBack}>
                    <div className="fa-icon">
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </div>
                    <span>이전</span></div>
                <div className="footer-btn save">
                    <span>저장</span>
                    <div className="fa-icon">
                        <FontAwesomeIcon icon={faSave}/>
                    </div>
                </div>
            </div>
        </>
        )
    }
}
export default KDSSoldout;
