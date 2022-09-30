import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CarsServices from "../services/CarsServices";

class ListCar extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = { cars: [] };
  }

  // built method: ComponentDidMount
  componentDidMount() {
    console.log("In component did mount");

    // method to call the API (axios Library HTTP)
    CarsServices.getAllCar()
      .then((res) => {
        console.log("Res data is " + JSON.stringify(res.data));
        this.setState({ cars: res.data });
      })
      .catch(console.log);
    // method to call the API (HTTP)
    // fetch("http://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("Res data is " + JSON.stringify(data));
    //     this.setState({ users: data });
    //   })
    //   .catch(console.log);
  }
  // render
  render() {
    return (
      <div>
        <div className="container">
          <h2 className="mb-5">List Car Component</h2>
          <div className="row row-cols-1 row-cols-md-2">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {this.state.cars.map((car) => (
                  <tr>
                    <td>{car.productId}</td>
                    <td>{car.name}</td>
                    <td>{car.description}</td>
                    <td>IDR {car.price} K</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListCar;
