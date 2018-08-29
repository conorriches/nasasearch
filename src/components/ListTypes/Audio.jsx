import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export class Audio extends React.Component {
    render() {
        return <div className="Result__item--audio">
            <Link to={`/asset/${this.props.item.data[0].nasa_id}`}>
                <h3>{this.props.item.data[0].title}</h3>
            </Link>
        </div>

    }
}

Audio.propTypes = {
    item: PropTypes.object.isRequired
};

export default Audio;