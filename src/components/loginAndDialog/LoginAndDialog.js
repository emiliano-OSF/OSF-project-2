import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';

import './LoginAndDialog.scss';
import { tsImportEqualsDeclaration } from '@babel/types';


export default class LoginAndDialog extends Component {

    constructor() {
        super();
        this.showPassword = this.showPassword.bind(this);
        this.validatePassword = this.validatePassword.bind(this)
    }

    state = {
        showLogIn: false,
        password: '',
        showPass: 'password',
        okPassword: false,
        inputWarn: false,
        warnings: []
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
            this.setState({
                inputWarn: false,
                okPassword: true
            })
            return
        }
        console.log("não passou", event.target.value);
        this.setState({
            inputWarn: true,
            okPassword: false
        })
    }

    showPassword() {
        this.setState({
            showPass: this.state.showPass == "password" ? 'text' : 'password'
        })
    }

    render() {
        if (!this.state.showLogIn) return null;

        return (
            <Modal className="login-container" open={this.state.showLogIn} onClose={this.toggle}>
                <div className="login-dialog__panel">
                    <h3 >Sign in</h3>
                    <form className="login-dialog__form-group">
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" type='email' placeholder="Enter your email" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password <span>Forgot passowrd</span></label>

                            <div className="password-field">
                                <input id="password" type={this.state.showPass} placeholder="Enter your password" onChange={this.validatePassword} />
                                <a className={`far fa-eye${this.state.showPass == "password" ? "" : "-slash"}`} onClick={this.showPassword}></a>
                            </div>

                            <small style={{ "display": this.state.inputWarn ? 'block' : 'none' }}>
                                At least 6 characters length, 1 numeric, 1 uppercase letter and 1 special character
                            </small>
                            <small className="ok-password" style={{"display": this.state.okPassword? "block": "none"}}>
                                Good password!
                            </small>
                        </div>
                        <button type='submit' >LOGIN</button>
                    </form>
                </div>
            </Modal>
        )
    }
}