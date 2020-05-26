import React from 'react'
import Navbar from '../Navbar'

export default function EmptyCart() {
    return (
        <div>
            <Navbar />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-1o mx-auto text-center">
                        <h1> Your cart is currently empty</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
