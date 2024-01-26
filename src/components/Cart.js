import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { remove } from '../redux/cartSlice'


const Cart = () => {

    const dispatch =useDispatch();



    //storing cart state items in products 
    
    const products = useSelector (state=>state.cart)


const removeFromCart=(id) =>  dispatch (remove(id))

//mappung products and storing in variable
    const cards = products.map(product => (
        <div className='col-md-12 mb-4 '>
            <Card  className="h-100" key={product.id}>
                <div className='text-center'>
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer><Button onClick={()=>removeFromCart(product.id)}  variant="danger">Remove Item</Button></Card.Footer>
                 </div>


            </Card>
        </div>
    ))

  return (
    <div className='row'>{cards}</div>
  )
}

export default Cart