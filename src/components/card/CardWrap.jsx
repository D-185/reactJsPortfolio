import { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import VanillaTilt from 'vanilla-tilt';
import "./card.css";

function CardWrap(props) {
    const tiltRef = useRef();

    useEffect(() => {
        VanillaTilt.init(tiltRef.current, {
            max: 25,
            speed: 400
        });
    }, []);

    return (
        <Card ref={tiltRef} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.thumbnail} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );  
}

export default CardWrap;
