import React, { Component } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
// import axios from 'axios';


import Navbar from './Navbar'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Shoppingcart from './Shoppingcart';
import Productdetails from './Productdetails';
import Notfound from './Notfound';
import Login from './Login';
import Admin from './Admin';
import Productform from './Productform';

class App extends Component {

  constructor() {
    super();
    this.state = {
      products: [
        { id: 1, name: "Burger", count: 0, price: 10, isInCart: false },
        { id: 2, name: "Fries", count: 0, price: 20, isInCart: false },
        { id: 3, name: "Cola", count: 0, price: 30, isInCart: false },
      ],
    }

  }


  // async componentDidMount() {
  //   // wait fel line dh l7d ma tcall el fun el b3do
  //  const {data} =  await axios.get('http://localhost:3000/products/');
  //  this.setState({products:data})
  //  console.log(data)
  // }


  handleReset = () => {
    //clone
    let products = [...this.state.products];
    //Edit
    products.map(p => p.count = 0);
    //Setstate
    this.setState({ products: products })
  }

  handleDelete = (product) => {
    //clone 
    let products = [...this.state.products];
    //Edit
    products = products.filter(p => p.id !== product.id)
    // setstate
    this.setState({ products: products })
  }

  hnadleIncrement = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //Edit
    products[index].count++;
    //Set State
    this.setState({ products });
  }

  handleIsInCart = (product) => {

    //clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };

    //edit 
    products[index].isInCart = !products[index].isInCart;

    //setstate
    this.setState({ products })

  }



  render() {
    return (
      <div>

        <Navbar productCount={this.state.products.filter(p => p.isInCart === true).length} />

        <Switch>

          {/* name is an optional route parameter */}
          {/* <Route path='/products/:id/:name?' component={Productdetails} />   */}

          <Route path='/products/:id' render={(props) =>
            <Productdetails products={this.state.products} {...props} />}
          />

          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Route path='/productform/:id' render ={(props) =>  
          <Productform  products={this.state.products} 
          {...props}/>
           }
          />

          <Route path='/admin' render={(props) =>
            <Admin
              products={this.state.products}
              onDelete={this.handleDelete}
              {...props}
            />
          }

          />

          <Route path='/cart' render={(props) =>
            <Shoppingcart
              products={this.state.products.filter(p => p.isInCart === true)}
              onReset={this.handleReset}
              onDelete={this.handleDelete}
              onIncrement={this.hnadleIncrement}
              {...props}
            />
          } />

          <Route path='/home' exact render={(props) =>
            <Home
              products={this.state.products}
              inCart={this.handleIsInCart}
              {...props}
            />
          }
          />

          {/* if user wrote / at the url redirect to /home */}
          <Redirect from='/' to='/home' />

          <Route path='/notfound' component={Notfound} />
          <Redirect to='/notfound' />

        </Switch>

      </div>
    );
  }
}

export default App;


