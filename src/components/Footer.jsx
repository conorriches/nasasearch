import React from 'react';
export class Header extends React.Component {

    render() {
        return <div className="Footer navbar navbar-dark bg-dark">
            <h3 className="masthead-brand">Stargazer</h3>
            <p>Data from <a href="https://api.nasa.gov/api.html">NASA API</a></p>
        </div>
    }

}


export default Header;