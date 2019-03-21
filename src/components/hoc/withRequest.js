import React, { Component } from 'react';
import axios from 'axios';

const withRequest = url => WrappedComponent => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: null
            };
        }
        async initialize() {
            const { match } = this.props;
            try {
                const response = await axios.get(`${url}${match.params.id}`);
                this.setState({
                    data: response.data
                });
            } catch (e) {
                console.log(e);
            }
        }
        componentDidMount() {
            this.initialize();
        }
        componentDidUpdate(prevProps) {
            if (prevProps.match.params.id !== this.props.match.params.id) {
                this.initialize();
            }
        }
        render() {
            return <WrappedComponent {...this.props} data={this.state.data} />;
        }
    };
};

export default withRequest;
