import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Postcard ({ info }) {
    return (
        <div className="postcard">
            <div className="left-side">
                <DateAndPlace dateAndPlace={info.dateAndPlace}/>
                <Message message={info.message}/>
            </div>
            <div className="right-side">
                <Stamp stamp={info.stamp} />
                <Address address={info.address}/>
            </div>
        </div>
    )
}

const cardInfo = {
    message: "Hello from ReactLand! If you're reading this, I created this little postcard using React all on my own :) I used flex and grid and a Google font to style. Oh, and the Grumpy Cat stamp is the icing on the cake! It's small, but you have to start somewhere, right? Hope you enjoy!",
    address: {
        name: "Patrick Nepp",
        street: "000 St. Louis Avenue",
        city: "St. Louis",
        state: "MO",
        zip: 63100
    },
    stamp: "https://technabob.com/blog/wp-content/uploads/2013/07/grumpy_cat_stamp.jpg",
    dateAndPlace: {
        date: "01/07/2021",
        place: "ReactLand"
    }
};

function Address ({ address }) {
    const {name, street, city, state, zip} = address
    return (
        <div className="address">
            <span className="name">{name}</span>
            <br />
            <span className="street">{street}</span>
            <br />
            <span className="cityStateZip">{city}, {state}, {zip}</span>
        </div>
    )
}

function Stamp ({ stamp }) {
    return(
        <img
        src={stamp}
        className="stamp"
        alt="stamp" />
    )
}

function DateAndPlace ({ dateAndPlace }) {
    const {date, place} = dateAndPlace;
    return (
        <div className="dateAndPlace">
            <span className="date">{date}</span>
            <br />
            <span className="place">{place}</span>
        </div>
    )
}

function Message ({ message }) {
    return (
        <div className="message" >{message}</div>
    )
}

ReactDOM.render(
    <Postcard info={cardInfo}/>,
    document.querySelector('#root')
)