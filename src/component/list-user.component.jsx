import React, { Component } from 'react';
import axios from 'axios';

import './list-user.component.scss';

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      listItens: [],
      allItens: [],
      showAll: true,
    }
  }

  // JSON request
  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/users')
    .then(response => { 
      this.setState({ listItens: response.data }); 
      this.setState({ allItens: response.data });
    })
    .catch(() => { console.log('Error retrieving data'); });
  }


  //Show itens. At first shows all.
  showItem(item) {
    if (this.state.showAll) {
      return (
        <div className="card-item" key={item.id}>
          <p><strong>Name:</strong> {item.name}</p>
          <p><strong>Username:</strong> {item.username}</p>
          <p><strong>E-mail:</strong> {item.email}</p>
          <p><strong>Phone:</strong> {item.phone}</p>
          <p><strong>Website:</strong> {item.website}</p>
          <p><strong>Address:</strong> {item.address.street}, {item.address.suite} - {item.address.city} - {item.address.zipcode}</p>
        </div>
      )
    }
  }


  //Filter items by changing only the state of the component.
  filterItens(e) {
    this.setState({
      listItens: this.state.allItens.filter(item => {
        let email = item.email;
        let domain = email.substring(email.indexOf("@") + 1);
        return domain.substring(domain.indexOf(".") + 1).search(
          e.target.value.toLowerCase()
          ) !== -1;
      })
    })
  }

  render() {
    //Render with the loop to build the cards
    return (
      <React.Fragment>
        <div className="search-bar">
          <input id="domain" className="input-domain" type="text" onChange={this.filterItens.bind(this)} pattern=".+" required />
          <label className="label-domain" htmlFor="domain">Search by domain</label>
        </div>
        {this.state.listItens.map(item => this.showItem(item))}
      </React.Fragment>
    )
  }
}