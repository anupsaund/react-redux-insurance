import React from 'react';
import { connect } from 'react-redux';  

 class Policy extends React.Component {    
    render() {
        let premium = Math.floor(this.props.count * 1.1 * 1000);
        premium  = (premium === 0 ? 1000 : premium);
        return (
            <div>
                <h2>Policy Premium based on {this.props.count} claims in the past year.</h2>
                <p>${premium}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.insurance.count
    };
}

export default connect(mapStateToProps)(Policy);