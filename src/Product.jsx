import React, { Component } from "react";

class product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Burger",
      count: 4,
      //   names: ["ahmed", "mohamed", "nesma"],
    };

    //  this.clickHandler = this.clickHandler.bind(this);
  }

  /*******************   All Functions   ****************/

  getClasses() {
    return this.state.count > 0
      ? "badge badge-primary m-2"
      : "badge badge-warning m-2";
  }

  // check if the list is empty condetional rendrening
  // Solution No 1
  //   renderNames() {
  //     if (this.state.names.length === 0) {
  //       return <h1>No Names</h1>;
  //     } else {
  //       return (
  //         <ul>
  //           {this.state.names.map((name) => (
  //             <li key={name}> {name} </li>
  //           ))}
  //         </ul>
  //       );
  //     }
  //   }
  // solution No 2 is to use && operator

  /*  ################################################################## */

  //   clickHandler(){
  //       this.setState({count : this.state.count +1 })
  //       // will cause error Uncaught TypeError: Cannot read property 'setState' of undefined
  //       // y3ne el this = undefined l2nha btshawer 3la regualre fun in strict mode so we have 2 solutions
  //       // rebind this or use arrow function
  //   }

  clickHandler = (num) => {
    this.setState({ count: this.state.count + num });
  };

  /*  ################################################################## */

  render() {
    return (

      <div className='container'> 

      <div className="row">

        <div className="col-2">
          <span> {this.state.name} </span>
          <span className={this.getClasses()}> {this.state.count} </span>
        </div>

        <div className="col-1">
          {/*  want to pass arguments to event handler -> ref 3la fun  wl fun de bt call another function */}
          <button
            className="btn btn-primary btn-sm"
            onClick={() => this.clickHandler(3)}>
            Add
          </button>
        </div>

        <div className="col-1">
          <i className="fas fa-trash-alt m-2"></i>
        </div>
        {/* {this.renderNames()} */}

        {/* {this.state.names.length === 0 && <h1>No Names</h1>}
        <ul>
          {this.state.names.map((name) => (
            <li key={name}> {name} </li>
          ))}
        </ul> */}
      </div>
      </div>
    );
  }
}

export default product;
