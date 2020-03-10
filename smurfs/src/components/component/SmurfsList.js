import React, { useEffect } from "react";
import { getSmurf } from "../store/action/index";
import Smurfs from "./Smurfs";
import { connect } from "react-redux";


const SmurfsList = (props, getSmurf, isFetching, error) => {

    useEffect(()=> {
       props.getSmurf();
    }, [getSmurf]);

    if (isFetching) {
        return <h2>Fetching Smurfs</h2>
    } 

    if (error) {
        return <h2>{error}</h2>
    }
    
    return(
        <div>
            {props.smurfs.map(smurf => { 
                return <Smurfs smurf={smurf} key={smurf.id} />        
            })}
        </div>
      
    )
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps,{getSmurf})(SmurfsList); 
