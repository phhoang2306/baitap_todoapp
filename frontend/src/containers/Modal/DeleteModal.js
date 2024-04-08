import React, { Component } from 'react';
import { connect } from 'react-redux';
import{Modal} from 'reactstrap';

class DeleteModal extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    async componentDidMount(){
    }

    render() {
        let {isShow, selectedTask, handleOnCloseModal} = this.props
        console.log(selectedTask)
        return ( 
            <>
                <Modal isOpen={isShow} className={'modal-dialog modal-dialog-scrollable'} centered>
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">ALLERT</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"  onClick={handleOnCloseModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body"> Are you sure to delete {selectedTask.title}</div>
                        <div className="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={handleOnCloseModal}>Close</button>
                            <button type="button" class="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </Modal>
            </>
  
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);