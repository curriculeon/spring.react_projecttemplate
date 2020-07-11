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

        axios.post('/', { fname, lname, email })
          .then((result) => {
            //access the results here....
        });
    }

      render() {
        const { fname, lname, email } = this.state;
        return (
          <form>
            <label id="fname-label">First name:</label><br/>
            <input
              type="text"
              name="fname"
              value={fname}
              onChange={this.onChange}
            /><br />
            <label id="lname-label">Last name:</label><br/>
            <input
              type="text"
              name="lname"
              value={lname}
              onChange={this.onChange}
            /><br />
            <label id="email-label">Email:</label><br/>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.onChange}
            />
            <button type="submit">Submit</button>
          </form>
        );
      }
}

export default CustomerForm;