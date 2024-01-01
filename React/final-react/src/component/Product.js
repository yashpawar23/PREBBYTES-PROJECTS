import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Product.css'
import {useDispatch} from 'react'
import { add } from '../Store/cartSlice'

const Product = () => {
  const dispatch = useDispatch()
    const[products,getproducts]= useState([])
    useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(data=> data.json())
    .then(result => getproducts(result))
    },[])
const addTocart = (product)=>{
     dispatch(add(product))
}
    const cards = products.map(product => (
       <div className="col-md-3" style={{marginBottom:'10px'}}>

            <Card key={product.id}  className='h-100'>
                <div className='text-center'>
                <Card.Img variant="top" src={product.image} style={{width:'100px', height:'130px',margin:"20px"}} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                       INR: {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={()=>addTocart(product)} >Add to cart</Button>
                </Card.Footer>
            </Card>
       </div>
    ))
  return (
   <>
   
    <div className="row">
      {cards}
    </div>
   </>
  )
}

export default Product