import React from 'react'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useDispatch} from 'react-redux'
// importing action
import { add } from '../redux/cartSlice'

const Products = () => {

    const dispatch = useDispatch();

    const [products, getProducts] = useState([]);
    useEffect(() => {
        ///api

        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => getProducts(result))

    }, []);


    //function for adding to cart
    const addToCart = (product) => {
        dispatch(add(product))
    }


    const cards = products.map(product => (
        <div className='col-md-3 mb-4 '>
            <Card  className="h-100" key={product.id}>
                <div className='text-center'>
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                 </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.price}
                    </Card.Text>

                </Card.Body>

                <Card.Footer><Button  onClick={() => addToCart(product)} variant="primary">Add to Cart</Button></Card.Footer>
            </Card>
        </div>
    ))

    return (
        <>
            <div className='row'>
                <h1 className='text-center'>Products</h1>
                {cards}
            </div>
        </>
    )
}

export default Products




//what redux does is 
// STORE (reducers  .......)
//          V ^
// [UI] <- state