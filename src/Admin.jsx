import React, { Component } from "react";

class Admin extends Component {

  render() {

    const { products, onDelete} = this.props;

    return (
      <div>

        <button className="btn btn-primary btn-sm m-3" 
        onClick={()=>{this.props.history.push('/productform/add') }}> Add Product </button>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>
                  <button className='btn'
                   onClick={()=>this.props.history.push(`/productform/${p.id}`)}>
                     <i className="fas fa-edit m-2"></i></button>
                </td>
                <td>
                  <button className='btn' onClick={() => onDelete(p)}><i className="fas fa-trash-alt m-2"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Admin;
