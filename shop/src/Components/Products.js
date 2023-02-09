import React, { Component } from 'react';
import Product from './Product';
import products from '../products.json'

class Products extends Component {
    render() {
        /*const productsList = this.props.products.map((product, index) => (
            <Product
        key={index}
        name={product.name}
        description={product.description}
        image={product.image}
            />
        ));*/
        return (
            <>
                {products.map((product,index)=>
                <Product
                key={index}
                produit={product}>

                </Product>)}
            </>
        );
};
}


export default Products;