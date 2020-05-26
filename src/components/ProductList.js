import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';
import Navbar from './Navbar';


export default class ProductList extends Component {

    render() {
        //console.log(this.state.products)
        return (
            <React.Fragment>
                <Navbar />
                <div className="py-5">
                    <div className="container">
                        <Title name="our " title="products" />

                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id}
                                            product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
