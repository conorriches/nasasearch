import React from 'react';
import PropTypes from 'prop-types';

export class Search extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    render() {
        return <div className="Search">
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.props.query} readOnly />
                <label for="images">Images</label>
                <input type="checkbox" id="images" name="images" />
                <label for="audio">Audio</label>
                <input type="checkbox" id="audio" name="audio" />
                <input type="submit"/>
            </form>
        </div>
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('A name was submitted: ' + event);
    }

}

Search.defaultProps = {
    query: 'Orion'
};

Search.propTypes = {
    query: PropTypes.string
};

export default Search;