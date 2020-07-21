import React from 'react';
import PropTypes from 'prop-types';


const PostsController = (props) => {
    return (
        <div>
            <input 
                type = "text" 
                value = { props.textValue }
                onChange = { props.textHandleChange }
                placeholder = "Id..."
            />
            <button onClick = { props.submit }>Search</button>
        </div>
    );
};


PostsController.propTypes = {
    textValue : PropTypes.string,
    textHandleChange : PropTypes.func,
    submit : PropTypes.func
};


export default PostsController;
