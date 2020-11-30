import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Shoppingcart extends Component {

  getClasses(p) {
    return p.count > 0 ? "badge badge-primary m-2" : "badge badge-warning m-2";
  }

  render() {

    const {onReset,onIncrement,onDelete} = this.props

    return (
      <div>
        <h1 className="text-center">Shopping Cart</h1>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Count</th>
              <th scope="col">Add</th>
              <th scope="col">Delete</th>
              <th scope="col">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={onReset}
                >
                  Reset
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((p) => (

              <tr key={p.id}>
                <td> <Link to={`/products/${p.id}`}>  {p.name} </Link>  </td>
                <td className={this.getClasses(p)}>{p.count}</td>

                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => onIncrement(p)}
                  >
                    Add
                  </button>
                </td>

                <td>
                  <button
                    className="btn btn-sm"
                    onClick={() => onDelete(p)}
                  >
                    <i className="fas fa-trash-alt m-2"></i>
                  </button>
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Shoppingcart;
