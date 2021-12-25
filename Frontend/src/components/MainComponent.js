import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router';
import Home from './HomeComponent';
import Software from './SoftwareComponent';
import Tally from './TallyComponent';
import Products from './ProductsComponent';
import AboutUs from './AboutUsComponent';
import Footer from './FooterComponent';

import { PRODUCTS } from '../shared/products';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: PRODUCTS,
        };
    }

    render() {

        const HomePage = () => {
            return(
                <Home
                    product1={this.state.products.filter( (product) => product.featured)[0]}
                    product2={this.state.products.filter( (product) => product.featured)[1]}
                    product3={this.state.products.filter( (product) => product.featured)[2]}
                    product4={this.state.products.filter( (product) => product.featured)[3]}
                    product5={this.state.products.filter( (product) => product.featured)[4]}
                    product6={this.state.products.filter( (product) => product.featured)[5]}
                    product7={this.state.products.filter( (product) => product.featured)[6]}
                    product8={this.state.products.filter( (product) => product.featured)[7]}
                />
            );
        }

        return(
            <div>
            <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path="/tally" component={Tally} />
                    <Route exact path="/software" component={Software} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/aboutus" component={AboutUs} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;