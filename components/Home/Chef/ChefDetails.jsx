import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useLoaderData, } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const {chef_picture,chef_name,years_of_experience,description,likes,num_recipes} = chefDetails;

    return (
        <Card className='d-flex'>
            <div className='d-flex'>
            <div><Card.Img style={{height:500}} variant="top" src={chef_picture} /></div>
            <div><Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body></div>
            </div>
        </Card>
    );
};

export default ChefDetails;