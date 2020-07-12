import React, {Component} from 'react';
import './customer-form.css';

class CustomerForm extends Component {
    componentDidMount() { // runs automatically when component is mounted        
    }

    constructor() {
        super();
        this.state = {
          fname: '',
          lname: '',
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
        const { fname, lname } = this.state;
        const request = {
            method: 'POST',
            body: JSON.stringify({
                "firstName": fname,
                "lastName": lname
            }),
            headers: {"Content-Type": "application/json"}
        };
        fetch("person/", request)
            .then((res) => res.json())
            .then((body)=> {
              alert(JSON.stringify(body));
              window.location.reload(false);
            });
    }

      render() {
        const { fname, lname } = this.state;
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
            <button type="submit" onClick={this.onSubmit}>Submit</button>
          </form>
        );
      }
}

export default CustomerForm;