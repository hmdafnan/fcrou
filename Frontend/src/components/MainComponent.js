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
            products: [],
        };
        this.getProducts = this.getProducts.bind(this);
    }

    //Fetch all products
    getProducts() {
        fetch('http://localhost:5000/featuredProducts')
            .then(res => res.json())
            .then( (result) => {
                this.setState({
                products: result
            })
        })
        console.log("on getProduct");
    }

    componentDidMount() {
        //this.getProducts();
        console.log("on componentDis Mount");
        fetch('http://localhost:5000/featuredProducts')
            .then(res => res.json())
            .then( (result) => {
                this.setState({
                products: result
            })
            },(err)=>{
                console.log("error",err)
            })
        console.log("on getProduct");
    }

    render() {

        const HomePage = () => {
            return(
                <Home
                    product={this.state.products.filter( (product) => product.featured)}
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