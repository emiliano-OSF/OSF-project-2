import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import './CountdownPage.scss'

class CountdownPage extends Component {

    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined,
    }

    componentDidMount() {

        /**
         * passing this pathname to App component
         * **/
        this.props.setPath(this.props.location.pathname)

        /**
         * calculates the date
         * **/
        this.interval = setInterval(() => {
            let deadline = new Date("Sep 12, 2019 15:30:00").getTime();     // deadline date
            let today = new Date().getTime()    //todays' date
            let timeUntil = deadline - today;   //gets the time between these two dates

            let days = Math.floor(timeUntil / (1000 * 60 * 60 * 24));   //get the value of days
            let hours = Math.floor((timeUntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // same as days
            let minutes = Math.floor((timeUntil % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeUntil % (1000 * 60)) / (1000));


            /**
             * sets the states to the values which represents the remaining
             * **/
            this.setState({
                days, hours, minutes, seconds
            })

        }, 1000);

    }

    componentWillUnmount(){
        if(this.interval || this.days < 0){
            clearInterval(this.interval);   //clear the interval when the component is not rendered
        }
    }

    render() {

        /**
         * verify if the date has passsed - if so, it will stop the interval
         * **/
        if(this.state.days < 0){
            clearInterval(this.interval);
        }

        return (
            <section className="countdown__container">
                <div className="countdown__panel">
                    <h3>We Will Release OSF Academy</h3>
                    <p>We are working hard and estimated release time products below.
                       Sed ac tristique nunc, ut gravida nunc. Nulla consequat erat non lectus imperdiet.
                    </p>

                    <div className="countdown__timer-panel">
                        <div className="countdown__time-circle">
                            <span>{this.state.days}</span>
                            <h6>DAYS</h6>
                        </div>
                        <div className="countdown__time-circle">
                            <span>{this.state.hours}</span>
                            <h6>HOURS</h6>
                        </div>
                        <div className="countdown__time-circle">
                            <span>{this.state.minutes}</span>
                            <h6>MINUTES</h6>
                        </div>
                        <div className="countdown__time-circle">
                            <span>{this.state.seconds}</span>
                            <h6>SECONDS</h6>
                        </div>
                    </div>
                    <div className="countdown__input-field">
                        <input placeholder="Enter your email to receive the latest announcements"/>
                        <span className="fas fa-angle-right"></span>
                    </div>
                </div>
            </section>
        )
    }
}

/**
 * this structure is to get acces to the route pathname
 * with this it will be possible to dynamically change the Breadcrumb property component
 * **/
export default withRouter(CountdownPage)