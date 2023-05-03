import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useLoaderData, } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const { chef_picture, chef_name, years_of_experience, description, likes, num_recipes } = chefDetails;

    return (
        <Card className='d-flex p-3'>
            <div className='d-flex'>
                <div className='pr-5'><Card.Img style={{ height: 500 }} variant="top" src={chef_picture} /></div>
                <div><Card.Body>
                    <Card.Title>Name : {chef_name}</Card.Title>
                    <Card.Text>
                        Description : {description}
                    </Card.Text>
                </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>Exprience : {years_of_experience}</ListGroup.Item>
                        <ListGroup.Item>Number Of Recipes : {num_recipes}</ListGroup.Item>
                        <ListGroup.Item>Likes : {likes}</ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        Recpie Sample : <div>pasta</div>
                    </Card.Body></div>
            </div>
        </Card>
    );
};

export default ChefDetails;