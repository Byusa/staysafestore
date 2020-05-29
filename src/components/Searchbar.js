import React, { Component } from 'react';
import {storeProducts, detailProduct} from '../data'
import { Link } from 'react-router-dom';
import {
    Button,
    Input,
    Footer,
    Card,
    CardBody,
    CardImage,
    CardTitle,
    CardText
} from "mdbreact";


class Searchbar extends Component {

    state = {
        search: ""
    }

    renderSearchbar = storeProducts => {
        const { search } = this.state;
        const inst =  "./Institution"
        var instName = storeProducts.title
        instName = instName.replace(/\s/g,''); 
        const institutionName= inst.concat(instName)
        return (
            <div className="PayConnectInstitutionList1">
                <Card>
                    <CardBody>
                        <Link to={institutionName}> {storeProducts.title}</Link>
                        {/*<label> {institution.AccountNumber}</label>*/}
                    </CardBody>
                </Card>

            </div>
        )
    };

    onchange = e => {
        this.setState({ search: e.target.value });
    }



    render() {
        const { search } = this.state;

        const filteredInstitutions = storeProducts.filter( storeProducts => {
            return storeProducts.title.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })

        return (
            <div >
                <label className="AppTitle InstitutionSearch">
                    Search for the product of your choice
                </label>
                <div className="FormField" >

                    <input
                        label="Search Product Name"
                        icon="search"
                        onChange={this.onchange}
                        className="PayConnectbox"
                    />

                    <table id="table" className="PayConnectTable">
                        <thead>
                            <th> Name of the institution </th>
                        </thead>

                        <tbody>
                            {
                                filteredInstitutions.map(storeProducts => {
                                    return this.renderSearchbar(storeProducts)
                                })
                            }
                        </tbody>

                    </table>

                    <button id="Search Button" className=" PayConnectSearchButton"> Search</button>
                </div>
            </div>
        )
    }
}

export default Searchbar;

