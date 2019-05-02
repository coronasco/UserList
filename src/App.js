import React from "react";
import "./App.css";
import CardList from "./components/CardList";

import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";

import ErrorBoundry from "./components/ErrorBoundry";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      search: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(res => res.json())
      .then(data =>
        this.setState({
          users: data
        })
      );
  }

  onSearchChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const filteredUsers = this.state.users.filter(user => {
      return user.name.toLowerCase().includes(this.state.search.toLowerCase());
    });

    if (!this.state.users.length) {
      return <h1 className="loadingBar">Loading</h1>;
    } else {
      return (
        <div className="App">
          <header className="pa-4">
            <h1>Users List</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </header>
          <Scroll>
            <ErrorBoundry>
              <CardList users={filteredUsers} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
