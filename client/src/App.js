import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers/customers';
import CustomerForm from './components/customer-form/customer-form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CustomerForm/>
          <Customers/>
        </header>
      </div>
    );
  }
}
export default App;
