import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';


/*export default*/class Product extends React.Component {
    constructor(props){
        super(props)
        this.state = props;
    }
    render() {
  return (
    /*<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.image} />
      <Card.Body>
        <Card.Title>{this.props.name}</Card.Title>
        <Card.Text>
        {this.props.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>*/
    <Card>
        <Card.Img
            src={require('../assets/images/'+this.state.produit.img)}
        />
        <Card.Body>
            <Card.Title>{this.state.produit.name}</Card.Title>
            <Card.Text>
                {this.state.produit.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
  );

}
}

export default Product;