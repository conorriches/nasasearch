import React from 'react';
import PropTypes from 'prop-types';
import Results from './Results';
import classnames from 'classnames';

export class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: "",
            error: "",
            fetch: {
                "metadata": {
                    "total_hits": 0,
                    "items": [],
                    "links": []
                }
            },
            media: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ query: nextProps.query })
    }

    render() {
        return <div className="Search">
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    className={classnames("form-control", { "is-invalid": this.state.error })}
                    value={this.state.query}
                    name="query"
                    onChange={this.handleChange} />

                {this.state.error ? <span className="error">{this.state.error}</span> : ""}

                <div className="row">
                    <div className="col form-check">
                        <label className="form-check-label">
                            <input type="checkbox" name="image" className="form-check-input" onChange={this.handleChange} />
                            Images
                        </label>
                    </div>

                    <div className="col form-check">
                        <label className="form-check-label">
                            <input type="checkbox" name="audio" className="form-check-input" onChange={this.handleChange} />
                            Audio
                        </label>
                    </div>
                </div>

                <input className="btn btn-primary" type="submit" />
            </form>

        </div>
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        switch (target.name) {
            case "query":
                this.setState({ query: value });
                break;
            case "audio":
            case "image":
                let mediaState = Object.assign({}, this.state.media)
                mediaState[name] = value;
                this.setState({ media: mediaState })
                break;
            default:
                this.setState({ name: value });
        }
    }


    componentDidUpdate() {
        console.log(this.state);
    }
    handleSubmit(event) {
        event.preventDefault();

        if (!this.state.query) {
            this.setState({ error: "Please enter a query!" })
        } else {
            fetch(`https://images-api.nasa.gov/search?q=${this.state.query}&media_type=${Object.keys(this.state.media).join(',')}`)
                .then(response => {
                    return response.json();
                }).then(json => {
                    this.setState({ fetch: json.collection });
                })
                .catch(error => console.info(error));;
        }
    }

}

Search.defaultProps = {
    query: ''
};

Search.propTypes = {
    query: PropTypes.string
};

export default Search;