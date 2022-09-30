import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";

class App extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  // built method: ComponentDidMount
  componentDidMount() {
    console.log("In component did mount");
    // method to call the API (HTTP)
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("Res data is " + JSON.stringify(data));
        this.setState({ users: data });
      })
      .catch(console.log);
  }
  // render
  render() {
    return (
      <div>
        <div className="container">
          <h2>App Component</h2>
          <div class="row row-cols-1 row-cols-md-2">
            {this.state.users.map((user) => (
              <div className="card col mb-3 me-3">
                <div className="card-body md-3">
                  <h3 className="card-title">{user.name}</h3>
                  <h5 className="card-subtitle mb-2 text-muted">
                    {user.email}
                  </h5>
                  <p className="card-text">{user.address.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
