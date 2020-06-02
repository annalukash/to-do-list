import React, { Component } from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.persist();
        this.setState(() => {
            return {
                inputValue: event.target.value
            }
        })
    }

    handleSubmit() {
        this.setState(() => {
            this.props.addItem(this.state.inputValue);
            return {
                inputValue: ''
            }
        })
    }

    render() {
        return (
            <div className='post-add-form'>
            <input 
                type="text" 
                placeholder="Введите задачу..."
                value={this.state.inputValue}
                onChange={this.handleChange}
            />
            <button
                onClick={this.handleSubmit}    
            >Добавить</button>
            </div>
        )
    }
}