import React, { Component } from 'react';
// import Shoppingcart from './Shoppingcart';


class Productdetails extends Component {

    handleSave = () =>{
        this.props.history.replace('/cart')
    }

    render() {

      const selectedProduct = this.props.products.filter( p => p.id === parseInt(this.props.match.params.id))[0]

        return (
            <div className='container mt-2'>
              <h3>Details No {this.props.match.params.id}</h3>
                <p>Name : {selectedProduct.name}</p>
                <p> Count in shopping cart  {selectedProduct.count}  </p>
                <button className="btn-primary btn-sm" onClick={this.handleSave}> Save </button>
            </div>
        );
    }
}

export default Productdetails;


