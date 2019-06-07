import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        };
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addTask(e){
        fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            //promesa
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));

        e.preventDefault();
    }
    handleChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        return (
            <div>
            {/* Navegación*/}
                <nav className="Light-blue darken-4">
                    <div className="container">   
                    <a className="brand-logo" href="/">MERN Stack</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" name="title" onChange={this.handleChange} placeholder="Task título" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea placeholder="Task description" onChange={this.handleChange} name="description" className="materialize-textarea">

                                                </textarea>
                                            </div>
                                        </div>
                                        <button className="btn light-blue darken-4">
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default App;