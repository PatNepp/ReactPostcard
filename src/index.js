import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Postcard () {
    return (
        <div className="postcard">
            <div className="left-side">
                <DateAndPlace />
                <Message />
            </div>
            <div className="right-side">
                <Stamp />
                <Address />
            </div>
        </div>
    )
}

function Address () {
    return (
        <div className="address">
            <span className="name">Patrick Nepp</span>
            <br />
            <span className="street">000 St. Louis Avenue</span>
            <br />
            <span className="cityStateZip">St. Louis, MO, 63100</span>
        </div>
    )
}

function Stamp () {
    return(
        <img
        src="https://technabob.com/blog/wp-content/uploads/2013/07/grumpy_cat_stamp.jpg"
        className="stamp"
        alt="stamp" />
    )
}

function DateAndPlace () {
    return (
        <div className="dateAndPlace">
            <span className="date">01/07/2021</span>
            <br />
            <span className="place">ReactLand</span>
        </div>
    )
}

function Message () {
    return (
        <div className="message" >Hello from ReactLand! If you're reading this, 
        I created this little postcard using React all on my own :) It's small, 
        but you have to start somewhere, right? Hope you enjoy!</div>
    )
}

ReactDOM.render(
    <Postcard />,
    document.querySelector('#root')
)