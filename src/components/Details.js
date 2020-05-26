import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import Navbar from './Navbar';

export default class Details extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ProductConsumer>
                    {(value) => {
                        const { id, company, img, info, price, title, inCart } = value.detailProduct;  //values from data.js for details products
                        return (
                            <div className="container py-5">
                                {/*title*/}
                                <div className='row'>
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                        <h1>{title}</h1>
                                    </div>
                                </div>
                                {/* end title */}
                                {/* prodcut info */}
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        {/*<img scr={img} className="img-fluid"   alt="product" />*/}
                                        <img src={img} className="card-img-top" alt="product" />

                                    </div>
                                    {/* product text */}
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h2> model : {title}</h2>
                                        <h4 className="text-tittle text-uppercase text-mute mt-3 mb-2">
                                            made by : <span className="text-upperCase">
                                                {company}</span>
                                        </h4>
                                        <h4 className="text-blue">
                                            <strong>
                                                price : <span>$</span>
                                                {price}
                                            </strong>
                                        </h4>
                                        <p className="text-capitalize font-weight-bild mt-3 mb-0">
                                            some info about product:
                                    </p>
                                        <p className="text-muted lead">{info}</p>
                                        <div>
                                            <Link to='/'>
                                                <ButtonContainer> back to products</ButtonContainer>
                                            </Link>
                                            <ButtonContainer
                                                cart
                                                disabled={inCart ? true : false}
                                                onClick={() => {
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }}>
                                                {inCart ? "inCart" : "add to cart"}
                                            </ButtonContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                </ProductConsumer>
            </div>
        )
    }
}
