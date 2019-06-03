import React from "react";

import "./Todo.css";

function generateId() {
    return `${new Date().getTime()}${Math.random()}`;
}

const initialTodos = [
    {
        id: generateId(),
        createdAt: new Date("January 28 2000 12:30"),
        text: "todo1",
        isDone: false
    },
    {
        id: generateId(),
        createdAt: new Date("January 31 2000 12:30"),
        text: "todo2",
        isDone: false
    },
    {
        id: generateId(),
        createdAt: new Date("January 10 2000 12:30"),
        text: "todo3",
        isDone: true,

    }
];

const FILTER_STATES = {
    ALL: "ALL",
    ACTIVE: "ACTIVE"
};

function filterTodos(todos, filterName) {
    if (filterName === FILTER_STATES.ACTIVE) {
        return todos.filter(todo => !todo.isDone);
    }

    return todos;
}

function sortedTodos(todos, fieldName) {
    return todos.sort((el1, el2) => {
        let f1 = el1[fieldName];
        let f2 = el2[fieldName];

        if (f1 === f2) return 0;

        return f1 > f2 ? 1 : -1;
    });
}

export default class Todos extends React.Component {
    state = {
        todos: initialTodos,
        filterName: FILTER_STATES.ALL,
        sortField: "createdAt", // byCreatedAt
        newTodoText: "",
        isEdit:false
    };

    showFiltered = filterName => () => {
        this.setState({
            filterName
        });
    };

    sortByField = fieldName => () => {
        this.setState({
            sortField: fieldName
        });
    };

    handleNewTodoText = event => {
        this.setState({ newTodoText: event.target.value });
    };

    getHandleIsDone = todo => event => {
        this.setState({
            todos: this.state.todos.map(item => {
                if (item !== todo) return item;

                return {
                    ...item,
                    isDone: event.target.checked
                };
            })
        });
    };

    handleItemText(todo,fieldName,newText){
        this.setState({
            todos: this.state.todos.map(item => {
                if (item !== todo) return item;

                return {
                    ...item,
                    [fieldName]: newText
                };
            })
        });
    };


    addNewTodo = event => {
        event.preventDefault();
        const newTodo = {
            id: generateId(),
            createdAt: new Date(),
            text: this.state.newTodoText,
            isDone: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo],
            newTodoText: ""
        });
    };

    render() {
        let todos = filterTodos(this.state.todos, this.state.filterName);
        todos = sortedTodos(todos, this.state.sortField);

        return (
            <div className="Todos">
                <div>
                    <button onClick={this.showFiltered(FILTER_STATES.ALL)}>All</button>
                    <button onClick={this.showFiltered(FILTER_STATES.ACTIVE)}>
                        Delete
                    </button>
                </div>

                <div>
                    <button onClick={this.sortByField("createdAt")}>By date</button>
                    <button onClick={this.sortByField("isDone")}>by isDone</button>
                </div>

                <form onSubmit={this.addNewTodo}>
                    <input
                        value={this.state.newTodoText}
                        onChange={this.handleNewTodoText}
                    />
                    <button type="submit">Add</button>
                </form>

                {todos.map(item => (
                    <div key={item.id} className={item.isDone ? "is-done" : ""}>
                        <input
                            type="checkbox"
                            checked={item.isDone}
                            onChange={this.getHandleIsDone(item)}
                        />
                        {item.isEdit} ? <input value={item.text} onChange={e => this.handleItemText(item, e.target.value)} /> }
                        <span>({item.createdAt.toISOString()})</span>
                    </div>
                ))}
            </div>
        );
    }
}