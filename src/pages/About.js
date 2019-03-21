import React from 'react';
import queryString from 'query-string';

const About = props => {
    const { location, match } = props;
    const query = queryString.parse(location.search);
    return (
        <>
            <h2>About {match.params.name}</h2>
            {query.test && <h3>Test On : {query.test}</h3>}
        </>
    );
};

export default About;
