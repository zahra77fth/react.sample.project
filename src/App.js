import React , { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.components'
import {SearchBox} from './components/search-box/search-box.component'
class App extends Component {
  constructor(){
    super();
    this.state = {
      accounts : [],
      searchField: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()).then(users => this.setState({accounts : users}))
  }
  handleChange = (e) => {
    this.setState({searchField : e.target.value})
  }
  render(){
    const {accounts ,searchField} = this.state;
    // const accounts = this.state.accounts
    const filterUsers = accounts.filter(account => account.name.toLowerCase().includes(searchField.toLowerCase()));   
    return(
      <div className="App">
        <h1>Users</h1>
        <SearchBox 
        placeholder = "search user" 
        handleChange = {this.handleChange} />
        <CardList accounts={filterUsers} />
      </div>
    )
  }
}
export default App;
