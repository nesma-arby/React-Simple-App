import React, { Component } from "react";

class Home extends Component {



  render() {

    return (
      <div className='container'>
        
        <h3 className='text-center'>Menue</h3>

        <table className="table table-dark">

          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Cart</th>
            </tr>
          </thead>

          <tbody>

              {this.props.products.map(p => 
                
                <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td><i className="fas fa-cart-plus" style={ p.isInCart? {color:'#fff'} : {color:'#737272'} } onClick={() => this.props.inCart(p)}></i></td>
               </tr>
                    
                )}

        
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
