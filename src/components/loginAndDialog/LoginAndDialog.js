import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';

import './LoginAndDialog.scss';


export default class LoginAndDialog extends Component {

    state = {
        showLogIn: false
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
    componentDidMount(){
        console.log(this.props.show)
        this.setState({
            showLogIn: this.props.show
        })
    }

    render() {
        if (!this.state.showLogIn) return null;
        
        return (
            <div className="odal">
                <Modal id='modal' open={this.state.showLogIn} onClose={this.toggle} onClose={this.toggle}>
                    <h1>Modal aberto</h1>
                </Modal>

            </div>
            // <section className="login-container" onClick={()=> this.hide()}>
            //     <div className="login-dialog__panel">
            //         <h3 >Sign in</h3>
            //         <form className="login-dialog__form-group">
            //             <div className="input-group">
            //                 <label>Email</label>
            //                 <input type='email' placeholder="Enter your email" />
            //             </div>
            //             <div className="input-group">
            //                 <label>Password <span>Forgot passowrd</span></label>
            //                 <input type='password' placeholder="Enter your password" />
            //             </div>
            //             <button type='submit'>LOGIN</button>
            //         </form>
            //     </div>
            // </section>
        )
    }
}