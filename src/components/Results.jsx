import React from 'react';
import PropTypes from 'prop-types';
import Image from './ListTypes/Image';
import Audio from './ListTypes/Audio';

export class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = { results: [] };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ results: nextProps.results })
    }

    render() {
        return <div className="Results">
            {this.props.results.length == 0 && <p className="Results__none">There were no results.</p>}
            {this.props.results.map((result, id) =>
                <div key={`result${id}`} className="Results__item ">
                    {result.data[0].media_type == 'audio' && <Audio item={result} />}
                    {result.data[0].media_type == 'image' && <Image item={result} />}
                </div>
            )}
        </div>
    }

}

Results.defaultProps = {
    results: []
};

Results.propTypes = {
    results: PropTypes.array
};

export default Results;