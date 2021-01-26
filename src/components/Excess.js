import React, { Component } from 'react';
import { connect } from 'react-redux';  
import { set_excess } from '../actions/';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

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
            <Card style={{ width: '18rem', border: '1px solid red' }}>
                <Card.Img variant="top" width="100px" src="https://i.ytimg.com/vi/2EfHtzauHcM/maxresdefault.jpg" />
                <Card.Body>
                    <Card.Title>How much excess would you be prepared to pay in the event of a claim?</Card.Title>
                    <Card.Text>
                    <Form.Control as="input" value={this.state.newexcess}
                onChange={(value) => this.onChange(value)} label="$ CAD" />
                    </Card.Text>
                </Card.Body>
            </Card>    
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