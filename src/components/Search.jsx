import React from 'react';
import PropTypes from 'prop-types';
import Results from './Results';
import classnames from 'classnames';
import APIcall from '../utils/nasa';

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
            media: { "image": true, "audio": true }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ query: nextProps.query })
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

    fetchResults(query) {
        return new Promise((resolve, reject) =>
            APIcall(query)
                .then(response => response.data)
                .then(json => {
                    resolve(json);
                })
                .catch(error => reject(error))
        );
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!this.state.query) {
            this.setState({ error: "Please enter a query!" })
        } else {
            this.setState({ loading: true });

            let queryStr = `${this.state.query}&media_type=${Object.keys(this.state.media).filter(o => this.state.media[o]).join(',')}`

            this.fetchResults(`https://images-api.nasa.gov/search?q=${queryStr}`).then(results => {
                this.setState(
                    {
                        fetch: results.collection,
                        loading: false,
                        error: false
                    });
            }).catch(error => {
                console.error(error)
            })
        }
    }

    render() {
        return <div>
            <div className="Search__form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        className={classnames("form-control", { "is-invalid": this.state.error })}
                        value={this.state.query}
                        name="query"
                        onChange={this.handleChange} />

                    {this.state.error ? <span className="Search__error">{this.state.error}</span> : ""}

                    <div className="row">
                        <div className="col form-check">
                            <label className="form-check-label">
                                <input type="checkbox" name="image" defaultChecked={this.state.media.image} className="form-check-input" onChange={this.handleChange} />
                                Image
                        </label>
                        </div>

                        <div className="col form-check">
                            <label className="form-check-label">
                                <input type="checkbox" name="audio" defaultChecked={this.state.media.audio} className="form-check-input" onChange={this.handleChange} />
                                Audio
                        </label>
                        </div>
                    </div>

                    <input
                        className={
                            classnames(
                                "btn btn-primary",
                                { "disabled": this.state.loading }
                            )
                        }
                        type="submit"
                        value={this.state.loading ? "Loading..." : "Search the NASA library"} />

                </form>
            </div>

            {
                this.state.fetch.items
                && <Results results={this.state.fetch.items} />
            }
        </div>
    }

}

Search.defaultProps = {
    query: ''
};

Search.propTypes = {
    query: PropTypes.string
};

export default Search;