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
import Dashboard from './Dashboard';

const url = process.env.REACT_APP_BACKEND_URL;

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            tally:[],
            notifications: []
        };
        this.getProducts = this.getProducts.bind(this);
        this.getTallyPrices = this.getTallyPrices.bind(this);
        this.getNotifications = this.getNotifications.bind(this);
    }

    //Fetch all products
    getProducts() {
        fetch(`${url}/featuredProducts`)
            .then(res => res.json())
            .then( (result) => {
                this.setState({
                products: result
            })
        })
        console.log("on getProduct");
    }

    //Fetch tally prices
    getTallyPrices() {
        fetch(`${url}/tallyPrices`)
            .then(res => res.json())
            .then( (result) => {
                this.setState({
                    tally: result
                })
            })
            console.log('on Tally setState');
    }

    //Fetch ContactUs queries(notifications) for dashboard
    getNotifications() {
        fetch(`${url}/contactus`)
            .then(res => res.json())
            .then( (result) => {
                this.setState({
                    notifications: result
                })
            },(err) => {
                console.log(err, 'on Dashboard')
            })
            console.log('on Dashboard setState');
    }

    componentDidMount() {
        //this.getProducts();
        console.log("on component Did Mount");
        fetch(`${url}/featuredProducts`)
            .then(res => res.json())
            .then( (result) => {
                this.setState({
                products: result
            })
            },(err)=>{
                console.log("error",err)
            })
        console.log("on getProduct");
        fetch(`${url}/tallyPrices`)
            .then(res => res.json())
            .then( (result) => {
                this.setState({
                    tally: result
                })
            },(err) => {
                console.log(err, 'on getTally')
            })
            console.log('on Tally setState');
        fetch(`${url}/contactus`)
            .then(res => res.json())
            .then( (result) => {
                this.setState({
                    notifications: result
                })
            },(err) => {
                console.log(err, 'on Dashboard')
            })
            console.log('on Dashboard setState');
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

        const DashboardNew = () => {
            console.log(this.state.notifications.body);
            return(
                <Dashboard
                    notification={this.state.notifications.body}
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
                        <Route exact path="/dashboard" component={DashboardNew} />
                        <Redirect to='/home' />
                </Switch>
            <Footer />
            </div>
        );
    }
}

export default Main;