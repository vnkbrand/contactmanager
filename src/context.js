// Provider - class that is wrapped-around the whole App
import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    default:
      return state;
  }
}

export class Provider extends Component {
  // Global State
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '123-456-789'
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action)) 
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

// Export Consumer
export const Consumer = Context.Consumer;