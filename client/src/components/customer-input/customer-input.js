import React, {Component} from 'react';
import './customer-input.css';

class CustomerInput extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            customers:[]
        }
    }
    componentDidMount() { // runs automatically when component is mounted        
    }

    onSubmit() {
        var request = new XMLHttpRequest();
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let customer = {
            "firstName": firstName,
            "lastName": lastName
        };
        request.open('POST', 'http://localhost:8080/person/', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        console.log("Attempting to `POST` customer:\n\t"+ customer)
        request.send(customer);
    }


    render() {
        return (
            <div id="customer-input">
                <h2>Customers</h2>
                <form action="/action_page.php">
                    <label id="fname-label">First name:</label><br/>
                    <input type="text" id="firstName" name="fname"/><br/>

                    <label id="lname-label">Last name:</label><br/>
                    <input type="text" id="lname" name="lname"/><br/><br/>
                    <button onClick={()=> this.onSubmit()}>Submit</button> 
                </form>
            </div>
        );
    }
}

export default CustomerInput;