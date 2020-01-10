import React, { Component } from 'react';
import axios from 'axios';

import './list-user.component.scss';

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { listItens: [] }

    this.refresh = this.refresh.bind(this);
  }

  // JSON request
  refresh() {
    axios.get('http://jsonplaceholder.typicode.com/users')
    .then(response => { this.setState({ listItens: response.data }); })
    .catch(() => { console.log('Error retrieving data'); });
  }

  componentDidMount() {
    this.refresh()
  }

  render() {
    //Render with the loop to build the cards
    return (
      <React.Fragment>
        {this.state.listItens.map(function(item, i)
          {
            return (
              <div className="card-item" key={i} id={item.id}>
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Username:</strong> {item.username}</p>
                <p><strong>E-mail:</strong> {item.email}</p>
                <p><strong>Phone:</strong> {item.phone}</p>
                <p><strong>Website:</strong> {item.website}</p>
                <p><strong>Address:</strong> {item.address.street}, {item.address.suite} - {item.address.city} - {item.address.zipcode}</p>
              </div>
            )
          }
        )}
      </React.Fragment>
    )
  }
}