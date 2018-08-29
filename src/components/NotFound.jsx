import React from 'react';

export class NotFound extends React.Component {
    render() {
        return <div className="NotFound">
            <div>
                <div className="notification__message notification__message--error">
                    <h2 className="asset__title">Houston, we have a problem</h2>
                    <h3>That page isn't found.</h3>
                    <p>You may want to <a href="/">return home</a>.</p>
                </div>
            </div>


        </div>
    }
}

export default NotFound;