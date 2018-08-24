import React from 'react';
import Search from '../components/Search';

export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { query: '' };
        this.handleSampleClick = this.handleSampleClick.bind(this);
    }

    handleSampleClick(event) {
       this.setState({query: event.target.innerHTML});
    }
    
    render() {
        return <div className="Home">
            <div className="row">
                <h1 className="col-xs-12 col-md-8 mx-auto text-center">Search the NASA image library</h1>
            </div>
            <div className="row">
            <div className="col-xs-12 col-md-8 mx-auto text-center">
                <p>
                    Can't think of anything to search? Check out a few:
                </p>
                <ul className="SearchTerms">
                    <li onClick={this.handleSampleClick}>Oreon</li>
                    <li onClick={this.handleSampleClick}>Mars</li>
                    <li onClick={this.handleSampleClick}>Moon</li>
                </ul>
            </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-8 mx-auto text-center">
                    <Search query={this.state.query} />
                </div>
            </div>
        </div>

    }

}


export default Home;