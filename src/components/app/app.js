import React, { Component } from 'react';
import './app.css';
import nextId from "react-id-generator";

import AppHeader from '../app-header/app-header'
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: "dvgerhberr", done: false, id: nextId()},
                {label: "egrhtykuyliu", done: false, id: nextId()}
            ],
            doneTasks: 0
        };

        this.onToggle = this.onToggle.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.getDoneTasks = this.getDoneTasks.bind(this);
    }

    onToggle(id) {
        this.setState(({data}) => {
            const newArray = data.map((item) => {
                if (item.id === id) {
                    item.done = !item.done;
                }
                return item;
            })
            const doneTasks = this.getDoneTasks(newArray);

            return {
                data: newArray,
                doneTasks: doneTasks.length
            }
        })
    }

    addItem(value) {
        this.setState(({data}) => {
            const newArray = data.slice();
            const newObject = {label: value, done: false, id: nextId()};

            newArray.push(newObject);

            return {
                data: newArray
            }
        })
    }

    removeItem(id) {
        this.setState(({data}) => {
            const filteredArray = data.filter((item) => item.id !== id);

            const doneTasks = this.getDoneTasks(filteredArray);

            return {
                data: filteredArray,
                doneTasks: doneTasks.length
            }
        })
    }

    getDoneTasks(array) {
        return array.filter((item) => item.done)
    }

    render() {
        return (
            <div className="app">
                <AppHeader
                    allTasks = {this.state.data.length}
                    getDoneTasks = {this.state.doneTasks}
                ></AppHeader>
                <PostList
                    posts = {this.state.data}
                    onToggle = {this.onToggle}
                    removeItem = {this.removeItem}
                ></PostList>
                <PostAddForm
                    addItem = {this.addItem}
                ></PostAddForm>
            </div>
            
        ) 
    }
};

