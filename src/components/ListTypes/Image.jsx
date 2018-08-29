import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export class Image extends React.Component {
    render() {
        let image = {
            backgroundImage: `url(${this.props.item.links[0].href})`
        }
        return <div className="Results__item--image" style={image} test="test">
            <Link to={`/asset/${this.props.item.data[0].nasa_id}`}>
                <div>
                    <h3>{this.props.item.data[0].title}</h3>
                </div>
            </Link>
        </div>
    }
}

Image.propTypes = {
    item: PropTypes.object.isRequired
};

export default Image;