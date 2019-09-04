import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';

import './LoginAndDialog.scss';


export default class LoginAndDialog extends Component {

    state = {
        showLogIn: false,
        password: '',
        inputWarn: false,
        warnings:[]
    }

    show() {
        this.setState({
            showLogIn: true
        })
    }

    toggle = () => {
        this.setState({
            showLogIn: false
        })
    }


    //Preparando para validar a senha
    validatePassword(event) {
        const validation = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
        if (validation.test(event.target.value)) {
            console.log("passou", event.target.value);
            return
        }
        console.log("não passou", event.target.value)

    }

    render() {
        if (!this.state.showLogIn) return null;

        return (
            <Modal className="login-container" open={this.state.showLogIn} onClose={this.toggle}>
                <div className="login-dialog__panel">
                    <h3 >Sign in</h3>
                    <form className="login-dialog__form-group">
                        <div className="input-group">
                            <label>Email</label>
                            <input type='email' placeholder="Enter your email" onChange={this.validatePassword} />
                        </div>
                        <div className="input-group">
                            <label>Password <span>Forgot passowrd</span></label>
                            <input type='password' placeholder="Enter your password" onFocus={()=>this.setState({inputWarn: true})}/>
                            <small style={{ "display": this.state.inputWarn ? 'block' : 'none' }}>At least 6 characters length, 1 numeric, 1 uppercase letter and 1 special character</small>
                            <small>

                            </small>
                        </div>
                        <button type='submit' >LOGIN</button>
                    </form>
                </div>
            </Modal>
        )
    }
}