import React, { Component } from 'react';
import { connect } from "react-redux";
import Task from '../containers/Task';
class TaskRouter extends Component {
    render() {
        return (
             <React.Fragment>
                <Task/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskRouter);