import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

const CreateProject = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')


    const handleChange = (e) =>{
        switch (e.target.id){
            case ("title"):
                setTitle(e.target.value);
                break;
            case ("content"):
                setContent(e.target.value);
                break;

        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.createProject({title, content})
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='white'>
                <h5 className='grey-text text-darken-3'>Create New Project</h5>
                <div className='input-field'>
                    <label htmlFor="title">Title</label><br/>
                    <input type="text" id="title" onChange={handleChange}/>
                </div>
                <div className='input-field'>
                    <label htmlFor="content">Project Content</label><br/>
                    <textarea className='materialize-textarea' id="content" onChange={handleChange}></textarea>
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0'>Create</button>
                </div>
            </form>
        </div>
    )}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject);