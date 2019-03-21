import React, { Component } from 'react';

const asyncComponent = getComponent => {
    // 여기서 getComponent 는 () => import('./SplitMe') 의 형태로 함수가 전달되야합니다.
    class asyncComponent extends Component {
        state = {
            AsyncComp: null
        };

        constructor(props) {
            super(props);
            getComponent().then(({ default: AsyncComp }) => {
                this.setState({
                    AsyncComp
                });
            });
        }

        render() {
            const { AsyncComp } = this.state;
            if (!AsyncComp) {
                return null;
            }
            return <AsyncComp {...this.props} />;
        }
    }

    return asyncComponent;
};

export default asyncComponent;
