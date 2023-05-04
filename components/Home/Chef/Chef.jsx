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
                    <Card.Img style={{ height: 300 }} className='img-thumbnail chef-img' variant="top" src={chef_picture} />
                    <Card.Body>
                        <Card.Title>{chef_name}</Card.Title>
                        <Card.Text>
                            {description.length < 80 ? <>{description}</> :
                                <>{description.slice(0, 80)}...</>}
                        </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Exprience : {years_of_experience}</ListGroup.Item>
                            <ListGroup.Item>Number Of Recipes : {num_recipes}</ListGroup.Item>
                            <ListGroup.Item>Likes : {likes}</ListGroup.Item>
                        
                        </ListGroup>
                        <Link to={`/chefdetails/${chef.id}`}><Button className='w-100 text-dark' variant='primary'>View Details</Button></Link>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Chef;