import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { ConnectedRouter as Router } from 'connected-react-router';
// import { history } from '../redux'
import { ToastContainer } from 'react-toastify';
import { path } from '../utils'
import TaskRouter from '../routes/TaskRouter'

class App extends Component {
  handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }
    render() {
        return (
            <React.Fragment>
              <BrowserRouter Router>
                    <div className="main-container">
                        <div className="content-container">
                                <Switch>
                                    <Route path={path.HOME} exact component={(TaskRouter)} />
                                </Switch>
                        </div>
                        <ToastContainer
                            position='bottom-right'
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </div>
                </BrowserRouter>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);