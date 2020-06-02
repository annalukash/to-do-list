import React from 'react';
import './app-header.css'

const AppHeader = ({allTasks, getDoneTasks}) => {
    return (
        <div className="app-header">
            <h1>TO DO LIST</h1>
    <h2>{allTasks} задач, из которых выполнено {getDoneTasks}</h2>
        </div>
    )
}

export default AppHeader;