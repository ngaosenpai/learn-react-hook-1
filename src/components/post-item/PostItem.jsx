import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'


const PostItem = (props) => {
    const { title, body } = props
    return (
        <li className="post" >
            <div className="post__title">
                {`Title : ${ title }`}
            </div>
            <div className="post__content">
                { body }
            </div>
        </li>
    );
};


PostItem.propTypes = {
    title : PropTypes.string,
    body : PropTypes.string
};


export default PostItem;
