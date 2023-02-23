import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

/*export default*/class Product extends React.Component {
    constructor(props){
        super(props)
        this.state = props;
    }
    like() {
      this.setState({like: this.state.produit.like + 1});
    }

    render() {
      const qt = this.state.produit.quantity;
      let button;
      if (qt === 0) {
        button = <Button disabled variant="info" >buy</Button>;

      } else {
        button = <Button variant="info" >buy</Button>;
      }
     
  return (
    <Card>
        <Card.Header>{this.state.produit.category}</Card.Header>
        <Card.Body>
        <Card.Img src={require('../assets/images/'+this.state.produit.img)} />
            <Card.Title>{this.state.produit.name}</Card.Title>
            <Card.Text>
                {this.state.produit.description}
            </Card.Text>
            <Row>
            <Col xs lg="10">
            <Button variant="primary" onClick={this.like}>Like {this.state.produit.like}</Button>
            </Col>
              <Col xs lg="2">
                {button}
               </Col> 
          </Row>
        </Card.Body>
    </Card>

  );


}

}

export default Product;