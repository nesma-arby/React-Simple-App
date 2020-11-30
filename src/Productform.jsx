import React, { Component } from "react";

class Productform extends Component {
  state = {
    name: "",
    price: "",
    id: "",
  };

  componentDidMount() {
    let id = this.props.match.params.id;

    if (id !== "add") {
      // call backend service
      // const {data} = axios.get('url'+id)
      // state.name = data.name and so on

      const product = this.props.products.filter((p) => p.id == id)[0];

      //clone state
      let state = { ...this.state };
      //edit state
      state.name = product.name;
      state.price = product.price;
      state.id = product.id;
      // set state
      this.setState(state);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.props.match.params.id === "add") {
      // add product
      // call backend service to add product , prepare object
      // axios.post('url',obj)
      const id = this.props.products.length + 1;
      delete this.state.id;
      const obj = { ...this.state, count: 0, isInCart: false, id };
      this.props.products.push(obj);
      this.props.history.replace("/home");
    } else {
      // edit product

      // call backend , send the new data
      // const obj = {...this.state , count:0 , isInCart: false }
      // axios.put('url'+this.state.id , obj)

      const obj = { ...this.state, count: 0, isInCart: false };
      const item = this.props.products.filter((p) => p.id == obj.id)[0];

      //clone state
      let state = { ...this.state };
      //edit state
      item.name =  state.name;
      item.price = state.price;
      // set state
      this.setState(state);
      this.props.history.replace("/home");
    }
  };

  handleChange = (e) => {
    // clone state
    let state = { ...this.state };

    // //edit
    state[e.currentTarget.name] = e.currentTarget.value;

    //set state
    this.setState(state);
  };

  render() {
    return (
      <div className="container m-2">
        <h2>
          {this.props.match.params.id === "add"
            ? "Add Product"
            : "Edit Product"}
        </h2>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="productName">Name</label>
            <input
              type="text"
              className="form-control"
              id="productName"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Price</label>
            <input
              type="text"
              className="form-control"
              id="productPrice"
              value={this.state.price}
              onChange={this.handleChange}
              name="price"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            {this.props.match.params.id === "add" ? "Add" : "Edit"}
          </button>
        </form>
      </div>
    );
  }
}

export default Productform;
