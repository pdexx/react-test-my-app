import React from 'react';
import PropTypes from 'prop-types';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
//此練習將資料與樣板分離 並用map使data驅動樣板
const myData = [
    {animateIn:'bounce', backgroundColor:'#00ffa2', name:'Bob'},
    {animateIn:'wobble', backgroundColor:'#003300', name:'Mary'},
    {animateIn:'jello', backgroundColor:'#910058', name:'Joe'}
];
class NameCard extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {};
    }
    //在JSX中直接map物件即可, 但在屬性中 就必須照邏輯放上ES6模板語言
    render() {
        return (
            <div>
                {
                myData.map(PageData =>(
                <ScrollAnimation animateIn={PageData.animateIn}>
                    <h1 style={{backgroundColor:`${PageData.backgroundColor}`, height: '100vh', textAlign: 'center', lineHeight: '100vh', fontSize: '5rem'}}>{PageData.name}</h1>
                </ScrollAnimation>
                ))
                }
            </div>
        );
    }
}

// NameCard.propTypes = {};

export default NameCard;
