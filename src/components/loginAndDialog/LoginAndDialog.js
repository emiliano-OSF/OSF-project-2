import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';

import './LoginAndDialog.scss';


export default class LoginAndDialog extends Component {

    state = {
        showLogIn: false,
        password: ''
    }

    show(){
        this.setState({
            showLogIn: true
        })
    }

    toggle = ()=>{
        this.setState({
            showLogIn: false
        })
    }


    //Preparando para validar a senha
    validatePassword(){
        const validation = new RegExp('^(?=.*[a-z])(?=.*[A-Z])');
        if(validation.test(this.state.password)){
            console.log("passou", this.state.password);
            return
        }
        console.log("não passou", this.state.password)

    }

    render() {
        //if (!this.state.showLogIn) return null;
        
        return (
            <Modal className="login-container" open={true} onClose={this.toggle}>
                <div className="login-dialog__panel">
                    <h3 >Sign in</h3>
                    <form className="login-dialog__form-group">
                        <div className="input-group">
                            <label>Email</label>
                            <input type='email' placeholder="Enter your email" />
                        </div>
                        <div className="input-group">
                            <label>Password <span>Forgot passowrd</span></label>
                            <input type='password' placeholder="Enter your password" />
                        </div>
                        <button type='submit' >LOGIN</button>
                    </form>
                </div>
            </Modal>
        )
    }
}