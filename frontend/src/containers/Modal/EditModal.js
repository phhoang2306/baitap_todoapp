import React, { Component } from 'react';
import { connect } from 'react-redux';
import{Modal} from 'reactstrap';
import Select from 'react-select'
import './EditModal.scss'
class EditModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            listStatus: [
            { value: 1, label: 'todo' },
            { value: 2, label: 'inprogress' },
            { value: 3, label: 'done' }
            ],
            title: '',
            assigneeID: '',
            content: '',
            status: '',
            ID: '',
        } 
    }
    async componentDidMount(){
        await this.setState({
            ID : this.props.selectedTask.id,
            title: this.props.selectedTask.title,
            content: this.props.selectedTask.content,
            status: this.props.selectedTask.status,
            assigneeID: this.props.selectedTask.assigneeID,
        })
    }
    handleOnChangeText = async(event, id) => {
        let stateCopy = {...this.state}
        stateCopy[id] = event.target.value
        await this.setState({...stateCopy})
    }
    render() {
        let {isShow, handleOnCloseModal} = this.props
        let {title, assigneeID, content, status, listStatus} = this.state
        return ( 
            <>
                <Modal isOpen={isShow} className={'modal-dialog modal-dialog-scrollable'} centered>
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">EDIT TITLE</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"  onClick={handleOnCloseModal} aria-label="Close"></button>
                        </div>
                        <div className="modal-body"> 
                            <div className='info col-12 form-group'>
                                <label className='body-title'>Title</label>
                                    <input className='form-control'
                                        value = {title}
                                        onChange={(event)=>this.handleOnChangeText(event, 'title')}>
                                    </input>
                            </div>

                            <div className='info col-12 form-group'>
                                <label className='body-title'>Content</label>
                                    <input className='form-control'
                                        value = {content}
                                        onChange={(event)=>this.handleOnChangeText(event, 'content')}>
                                    </input>  
                            </div>

                            <div className='info col-6 form-group'>
                                <label className='body-title'>Assignee ID</label>
                                    <textarea className='form-control'
                                        value = {assigneeID}
                                        onChange={(event)=>this.handleOnChangeText(event, 'assigneeID')}>
                                    </textarea>  
                            </div>  

                            <div className='info col-6 form-group'>
                                <label className='body-title'>Status</label>
                                    <Select
                                        value ={status}
                                        options={listStatus}
                                    />
                            </div>  
                        </div>
                        <div className="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={handleOnCloseModal}>Close</button>
                            <button type="button" class="btn btn-primary">Save Changes</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);