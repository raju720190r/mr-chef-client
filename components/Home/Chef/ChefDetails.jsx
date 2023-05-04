import React from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';
import { useLoaderData, } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const { chef_picture, chef_name, years_of_experience, description, likes, num_recipes, recpies_1, recpies_2, recpies_3,recipes_Name,cooking_method,recipes_rating,recipes_Name_2,} = chefDetails;

    return (
        <>
            <h2 className='fs-1 font-bold mt-3 mb-3 text-center'>Chef Recipes</h2>
            <Card className='d-flex p-3'>
                <div className='d-flex'>
                    <div className='pr-5 w-50'>
                        <Card.Img style={{ height: 500 }} variant="top" src={chef_picture} />
                    </div>
                    <div className='w-50'>
                        <Card.Body>
                            <Card.Title>Name : {chef_name}</Card.Title>
                            <Card.Text>
                                Description : {description}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>Likes : {likes}</ListGroup.Item>
                            <ListGroup.Item>Number Of Recipes : {num_recipes}</ListGroup.Item>
                            <ListGroup.Item>Exprience : {years_of_experience}</ListGroup.Item>

                            <ListGroup.Item></ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
            </Card>
                <div className='d-flex justify-content-around gap-5 mx-auto '>
                <Card className='mt-3 mb-5 mr-5' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Img style={{ height: 200 }} variant="top" src={recpies_1} />
                        <Card.Title></Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Sweet & sour chicken</ListGroup.Item>
                        <ListGroup.Item>
                            <p>Method : </p>
                            {cooking_method}
                            </ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-between'>
                            <div>
                            {recipes_rating}
                            </div>
                            <div>
                                Fav
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card className='mt-3 mb-5' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Img style={{ height: 200 }} variant="top" src={recpies_2} />
                        <Card.Title></Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Lionhead meatball soup</ListGroup.Item>
                        <ListGroup.Item>
                            <p>Method : </p>
                            {cooking_method}
                            </ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-between'>
                            <div>
                            <FaBeer />?
                            {recipes_rating}
                            </div>
                            <div>
                                Fav
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card className='mt-3 mb-5' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Img style={{ height: 200 }} variant="top" src={recpies_3} />
                        <Card.Title></Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Mushroom mapo tofu</ListGroup.Item>
                        <ListGroup.Item>
                            <p>Method : </p>
                            {cooking_method}
                            </ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-between'>
                            <div>
                            {recipes_rating}
                            </div>
                            <div>
                                Fav
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                </div>
                
            
        </>
    );
};

export default ChefDetails;