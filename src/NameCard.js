import React from 'react';
import PropTypes from 'prop-types';
//animate.css and react-animate-on-scroll
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
//BS4 and reactstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Jumbotron, Button } from 'reactstrap';
//元件標頭載入MyData
import MyData from './NameCardData';
//此練習將資料與樣板分離 並用map使data驅動樣板
// const myData = [ //此段資料搬去NameCardData 並在該元件標頭載入
//     {animateIn:'bounce', backgroundColor:'#00ffa2', name:'Bob'},
//     {animateIn:'wobble', backgroundColor:'#003300', name:'Mary'},
//     {animateIn:'jello', backgroundColor:'#910058', name:'Joe'}
// ];
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
                    MyData.map(PageData => (
                        <ScrollAnimation animateIn={PageData.animateIn}>
                            <h1 style={{ backgroundColor: `${PageData.backgroundColor}`, height: '100vh', textAlign: 'center', lineHeight: '100vh', fontSize: '5rem' }}>{PageData.name}</h1>
                        </ScrollAnimation>
                    ))}
                <Container>
                    <Button color="primary">primary</Button>{' '}
                    <Button color="secondary">secondary</Button>{' '}
                    <Button color="success">success</Button>{' '}
                    <Button color="info">info</Button>{' '}
                    <Button color="warning">warning</Button>{' '}
                    <Button color="danger">danger</Button>{' '}
                    <Button color="link">link</Button>

                    <Jumbotron>
                        <h1 className="display-3">Hello, world!</h1>
                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-2" />
                        <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                        <p className="lead">
                            <Button color="primary">Learn More</Button>
                        </p>
                    </Jumbotron>
                </Container>

            </div>
        );
    }
}

// NameCard.propTypes = {};

export default NameCard;
