import React, {useState} from "react";
import { addSmurf } from "../store/action/index";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";


const SmurfsForm = ({addSmurf}) => {
    const inputState = {name: "", age: "", height: ""};
    const [input,setInput] = useState(inputState);

    const handleChange = e => {
        e.preventDefault();
        setInput({...input, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        addSmurf(input);
        setInput(inputState);
    };

    return(
        <Form onSubmit={handleSubmit}>
        <h2>Name that Smurf</h2>
        <input 
            name="name"
            value= {input.name}
            placeholder= "Name"
            onChange={handleChange}
        />
        <h2>How Old Are They??</h2>
        <input 
            name="age"
            value={input.age}
            placeholder= "Age"
            onChange={handleChange}
        />
        <h2>How Tall Are They??</h2>
        <input 
            name="height"
            value={input.height}
            placeholder="Height"
            onChange={handleChange}
        />
        <button type="submit" value="submit">SUBMIT</button>
        </Form>
    );
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {addSmurf})(SmurfsForm);