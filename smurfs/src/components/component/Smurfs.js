import React from "react";
//import {connect} from "react-redux";

const Smurfs = (props) => {
    return (
        <div>
            <h3>{props.smurf.name}</h3>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
        </div>

        
    );
};

// const mapPropsToState = state => {
//     return {
//         smurfs: state.smurfs,
//         isFetching: state.isFetching,
//         error: state.error
//     };
// };

// export default connect(mapPropsToState, {getSmurf})(Smurfs);

export default Smurfs