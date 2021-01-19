import React from 'react';
import { connect } from 'react-redux';  

class Policy extends React.Component {    
    render() {
        let premium = Math.floor(this.props.count * 1.1 * 1000);
        //premium  = (premium === 0) ? 1000 : premium;

        if(premium === 0){
            premium = 1000 - parseInt(this.props.excess);
        }else{
            premium = premium - parseInt(this.props.excess);
        }

        return (
            <div>
                <h2>Policy Premium based on {this.props.count} claims in the past year, and Excess of ${this.props.excess}</h2>
                <h3>${premium}</h3>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.insurance.count,
        excess: state.insurance.excess.excess
    };
}

export default connect(mapStateToProps)(Policy);