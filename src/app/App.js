import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
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
                                    <form>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" name="title" placeholder="Task título" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea placeholder="Task description" className="materialize-textarea">

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