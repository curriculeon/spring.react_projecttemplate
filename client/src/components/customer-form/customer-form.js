import React, {Component} from 'react';
import axios from 'axios';
import './customer-form.css';

class CustomerForm extends Component {
    componentDidMount() { // runs automatically when component is mounted        
    }

    constructor() {
        super();
        this.state = {
          fname: '',
          lname: '',
          email: '',
        };
      }

    onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        this.setState({ [e.target.name]: e.target.value });
    }

      
    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { fname, lname, email } = this.state;
        alert("hello world")
        fetch("person/",{
            method: 'POST',
            body: {
                "firstName": fname,
                "lastName": lname
            },
            headers: {"Content-Type": "application/json"}
          })
          .then(function(response){
            return response.json()
          }).then(function(body){
            console.log(body);
          });
    }

      render() {
        const { fname, lname, email } = this.state;
        return (
          <form>
            <label id="fname-label">First name:</label>
            <input
              type="text"
              name="fname"
              value={fname}
              onChange={this.onChange}
            /><br />
            <label id="lname-label">Last name:</label>
            <input
              type="text"
              name="lname"
              value={lname}
              onChange={this.onChange}
            /><br />
            <label id="email-label">Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.onChange}
            /><br/>
            <button type="submit" onClick={this.onSubmit}>Submit</button>
          </form>
        );
      }
}

export default CustomerForm;