import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './HomeComponent';
import Software from './SoftwareComponent';
import Tally from './TallyComponent';
import Products from './ProductsComponent';
import AboutUs from './AboutUsComponent';
import Footer from './FooterComponent';
import ContactUs from './ContactUsComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            tally:[]
        };
        this.getProducts = this.getProducts.bind(this);
        this.getTallyPrices = this.getTallyPrices.bind(this);
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

    getTallyPrices() {
        fetch('http://localhost:5000/tallyPrices')
            .then(res => res.json())
            .then( (result) => {
                this.setState({
                    tally: result
                })
            })
            console.log('on Tally setState');
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
        fetch('http://localhost:5000/tallyPrices')
            .then(res => res.json())
            .then( (result) => {
                this.setState({
                    tally: result
                })
            },(err) => {
                console.log(err, 'on getTally')
            })
            console.log('on Tally setState');
    }

    render() {

        const TallyPage = () => {
            return(
                <Tally
                    tallyCard={this.state.tally}
                />
            )
        }

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
                        <Route exact path="/tally" component={TallyPage} />
                        <Route exact path="/software" component={Software} />
                        <Route exact path="/products" component={Products} />
                        <Route exact path="/aboutus" component={AboutUs} />
                        <Route exact path="/contactus" component={ContactUs} />
                        <Redirect to='/home' />
                </Switch>
            <Footer />
            </div>
        );
    }
}

export default Main;