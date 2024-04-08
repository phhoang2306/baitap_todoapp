import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as actions from "../store/actions"
import ReactPaginate from 'react-paginate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-toastify/dist/ReactToastify.css';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import DeleteModal from './Modal/DeleteModal'
import EditModal from './Modal/EditModal'
import './Task.scss'
class Task extends Component {
    constructor(props){
        super(props);
        this.state = {
            page : 1,
            limit: 10,
            totalPages : 0, 
            listTasks : [],
            isShowEdit: false,
            isShowDelete: false,
            selectedTask : '',
        }
    }
    async componentDidMount() {
        await this.props.queryTasks(this.state.page, this.state.limit)
        this.setState({
            listTasks: this.props.tasks.results,
            totalPages: this.props.tasks.totalPages,
            page: this.props.tasks.page
        })
    }
    handleOnChangePage = async(number) => { 
        await this.props.queryTasks(number.selected + 1, this.state.limit)
        await this.setState({
            listTasks: this.props.tasks.results,
            totalPages: this.props.tasks.totalPages,
        })
    }
    handleOnClickDelete = async(task) =>{
        this.setState(({
            isShowDelete: true,
            selectedTask: task
        }));
    }
    handleOnCloseDelete = async() =>{
        this.setState(({
            isShowDelete: false,
        }));
    }
    handleOnClickEdit = async(task) =>{
        this.setState(({
            isShowEdit: true,
            selectedTask: task
        }));
    }
    handleOnCloseEdit = async() =>{
        this.setState(({
            isShowEdit: false,
        }));
    }
    render() {
        let {listTasks, totalPages, isShowDelete, selectedTask, isShowEdit} = this.state
        return (
            <div className='task-container'>
                <div className='title'> BAITAP DOTOAPP </div>
                <div className='table-container'>
                    { listTasks && listTasks.length > 0 
                    ? 
                    <>
                        <table className="table table-bordered">
                            <thead>
                                    <tr className="table-success text-center">
                                        <th className='id_column'>ID</th>
                                        <th className='title_column'>Title</th>
                                        <th className='assignee_column'> Assignee ID</th>
                                        <th className='content_column'>Content</th>
                                        <th className='status_column'>Status</th>
                                        <th className='function_column'>Function</th>
                                    </tr>
                            </thead>
                            {
                                listTasks.map((item, index) =>{
                                    return(
                                    <tr>
                                        <th className="table_row">{index + 1}</th>
                                        <td className="table_row">{item.title}</td>
                                        <td className="table_row">{item.assigneeID}</td>
                                        <td className="table_row">{item.content}</td>
                                        <td className="table_row">{item.status}</td>
                                        <td className="table_row">
                                            <FontAwesomeIcon className ="edit-btn" icon={faPencilAlt} onClick={() => this.handleOnClickEdit(item)} />
                                           <FontAwesomeIcon  className ="del-btn" icon={faTrash} onClick={() => this.handleOnClickDelete(item)}/>
                                        </td>
                                    </tr>

                                    )
                                })
                            }
                        </table> 
                         <ReactPaginate
                            previousLabel={'<'}
                            nextLabel={'>'}
                            breakLabel={'...'}
                            pageCount={totalPages}
                            marginPagesDisplayed={3}
                            pageRangeDisplayed={4}
                            onPageChange={this.handleOnChangePage}
                            containerClassName='pagination justify-content-center'
                            pageClassName='page-item'
                            pageLinkClassName='page-link'
                            previousClassName='page-item'
                            previousLinkClassName='page-link'
                            nextClassName='page-item'
                            nextLinkClassName='page-link'
                            breakClassName='page-item'
                            breakLinkClassName='page-link'
                            activeClassName='active'
                            />
                    </>
                    :
                    <div>None data of tasks list</div>}
                </div>
                <DeleteModal
                    isShow = {isShowDelete}
                    handleOnCloseModal = {this.handleOnCloseDelete}
                    selectedTask = {selectedTask}
                />
                <EditModal
                    isShow = {isShowEdit}
                    handleOnCloseModal = {this.handleOnCloseEdit}
                    selectedTask = {selectedTask}
                />
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        tasks : state.task.tasks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        queryTasks:(page, limit) => dispatch(actions.fetchQueryTasks(page, limit))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
