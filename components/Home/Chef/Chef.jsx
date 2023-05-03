import React from 'react';
import { Card, CardGroup, Button, ListGroup } from 'react-bootstrap';
import "./Chef.css"
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { chef_picture, chef_name, years_of_experience, description, likes, num_recipes } = chef;

    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img style={{ height: 200 }} className='img-thumbnail chef-img' variant="top" src={chef_picture} />
                    <Card.Body>
                        <Card.Title>{chef_name}</Card.Title>
                        <Card.Text>
                            {description.length < 80 ? <>{description}</> :
                                <>{description.slice(0, 80)}...</>}
                        </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Link to={`/chefdetails/${chef.id}`}><Button variant='primary' className='text-dark'>View Details</Button></Link>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Chef;