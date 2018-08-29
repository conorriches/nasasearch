import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import APIcall from '../utils/nasa';

export class Asset extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: false,
            nasa_id: this.props.nasa_id || this.props.match && this.props.match.params.id,
            type: "",
            description: "",
            date: "",
            title: ""
        };

        this.toggleFullDescription = this.toggleFullDescription.bind(this);
    }

    fetchAsset(nasa_id) {

        let metaPromise = new Promise((resolve, reject) => {
            return APIcall(`https://images-api.nasa.gov/metadata/${nasa_id}`)
                .then(response => response.data)
                .then(json => {
                    if (!json.location) throw new Error("Invalid asset ID");
                    return json;
                })
                .then(json => APIcall(json.location))
                .then(response => response.data)
                .then(json => {
                    resolve({
                        type: json['AVAIL:MediaType'],
                        description: json["AVAIL:Description"],
                        date: json["AVAIL:DateCreated"],
                        title: json["AVAIL:Title"]
                    })
                })
        });

        let assetPromise = new Promise((resolve, reject) => {
            return APIcall(`https://images-api.nasa.gov/asset/${nasa_id}`)
                .then(response => response.data)
                .then(media => resolve({ media: media.collection.items }))
                .catch(error => {
                    reject(error);
                })
        });

        return Promise.all([metaPromise, assetPromise])
            .then(data => {
                return Promise.resolve(Object.assign(data[0], data[1]))
            });

    }

    componentDidMount() {
        this.fetchAsset(this.state.nasa_id).then(asset => {
            this.setState(asset)
        }).catch(error => {
            this.setState({ error })
        })
    }

    toggleFullDescription() {
        this.setState({ open: !this.state.open })
    }

    render() {
        return <div>

            {
                //TODO: put this in its own component
                this.state.error &&
                <div>
                    <div className="notification__message notification__message--error">
                        <h2 className="asset__title">Houston, we have a problem</h2>
                        <h3>We couldn't load your content.</h3>
                        <p>{this.state.error.message}</p>
                    </div>
                </div>
            }

            {
                !this.state.title && <div className="asset">
                    <h2 className="asset__loading">Loading...</h2>
                </div>
            }
            {
                !this.state.error && this.state.title &&
                <div className="asset">
                    <h2 className="asset__title">{this.state.title}</h2>
                    <h4 className="asset__date">First published {this.state.date}</h4>
                    {
                        this.state.media && this.state.type == "audio" &&
                        <audio controls autoPlay>
                            <source src={this.state.media[0].href} type="audio/mpeg"></source>
                            <source src={this.state.media[0].href} type="audio/ogg"></source>
                            Your browser does not support the audio element.
                        </audio>
                    }
                    {
                        this.state.media && this.state.type == "image" &&
                        <div>
                            <img className="asset__image" src={this.state.media[Math.min(2, this.state.media.length - 2)].href} />
                        </div>
                    }

                    <div className={
                        classNames(
                            "asset__description",
                            { "asset__description--open": this.state.open }
                        )
                    }
                    >

                        {
                            this.state.media && this.state.type == "image" &&
                            <p>
                                Check out the original, <a target="_blank" href={this.state.media[0].href}>full sized image</a>.
                        </p>
                        }

                        <p>{this.state.description}</p>
                        <div className="asset__description-fade" />
                    </div>

                    {this.state.description.length > 1200 &&

                        <button className="btn btn-primary" onClick={this.toggleFullDescription}>
                            {this.state.open ? "Close" : "Open"} Full Description
                        </button>
                    }
                </div>
            }
        </div>
    }

}

Asset.defaultProps = {
    nasa_id: ''
}

Asset.propTypes = {
    nasa_id: PropTypes.string
}

export default Asset;