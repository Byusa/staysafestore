import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList'
import CartTotals from './CartTotals'
import Navbar from '../Navbar';


export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Navbar />
                                    <Title name=" Your" title=" cart" />
                                    <CartColumns />
                                    <CartList value={value}/>
                                    <CartTotals value={value} history={this.props.history} />
                                </React.Fragment>
                            );
                        } else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}

/*
<CartList value={value} />
                                    <CartTotals value={value}
                                        history={this.props.history} />
*/
