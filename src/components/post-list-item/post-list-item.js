import React, { Component } from 'react';
import './post-list-item.css'

export default class PostListItem extends Component {

    render() {
        const {label, done, onToggle, removeItem} = this.props;
        let classNames = `list-item ${done ? 'checked' : ''}`
        return (
            <div className = "post-list-item">
                <input type="checkbox" onClick={onToggle}/>
                <span className={classNames}>{label}</span>
                <button
                    onClick={removeItem}
                >delete</button>
            </div>
        )
    }  
}
