import React, { Component } from 'react';
import Product from './Product';
import products from '../products.json'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class Products extends Component {
    render() {
        return (
            <Container>
    
    <Row className="justify-content-md-center">

      {products.map((product,index)=>
              <Col xs={6} md={4}>

                <Product
                key={index}
                produit={product}>

                </Product>
                </Col>

                )}
    </Row>
   
    </Container>


        );
};
}


export default Products;