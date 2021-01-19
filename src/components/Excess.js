import React, { Component } from 'react';
import { connect } from 'react-redux';  
import { set_excess } from '../actions/';


class Excess extends Component {
    
    constructor(){
        super();
        this.state = {
            newexcess: 0
        }
    }
    componentDidMount(){
        this.setState({
            newexcess: this.props.excess
        })
    }

    onChange(e) {
        // This is to update the UI...
        this.setState(
            {
                newexcess: e.target.value
            }
        )
        // This is to dispatch to the redux flow
        this.props.set_excess(e.target.value)
    }

    render() {
        return (
            <div>
                <h2>How much excess would you be prepared to pay in the event of a claim?</h2>
                <input type="text" value={this.state.newexcess}
                onChange={(value) => this.onChange(value)}
                ></input>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      excess: state.insurance.excess
    };
}

const mapDispatchToProps = {
    set_excess
};

export default connect(mapStateToProps, mapDispatchToProps)(Excess);