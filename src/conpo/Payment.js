import React from 'react'
import style from 'styled-components'
import StripeCheckout from 'react-stripe-checkout';

const Container = style.div`
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
const Button = style.button`
width: 100px;
padding: 20px;
border:1px solid white;
background-color: black;
color:white;
margin-top:200px;
`
const Key = 'pk_test_51JkyRMLm3LiulVebQJ6JDsd3boUnedUjdwWu6SNJdT3cxJpsY72NqQpEoxcXPEnZ8OktvI2Il6c8diidIgl95TJE00aXCw9qzT'

const Payment = () => {
    const onToken = (token) => {
        // setStripeToken(token)
        console.log(token)
        }
  return (
    <Container>
    {/* {stripeToken ?(<span>Procesing ...</span>): */}
    <StripeCheckout name="L.M.J" image="https://ecomercejew7b6e695de0ef4126badbc7db32fd927c112134-dev.s3.amazonaws.com/public/Argollas1.jpeg"
    // billingAddress
    // shippingAddress
    description='your Total is $30'
    amount ={3000}
    token={onToken}
    stripeKey={Key}
    >
    <Button>Pay</Button>
    </StripeCheckout>
 
    
</Container>
  )
}

export default Payment
