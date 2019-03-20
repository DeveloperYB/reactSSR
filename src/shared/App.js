import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts, NotFound } from 'pages';

import Menu from 'components/Menu';

class App extends Component {
    render() {
        return (
            <>
                <Menu />
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about/:name" component={About} />
                        <Route path="/about" component={About} />
                        <Route path="/posts" component={Posts} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </>
        );
    }
}

export default App;
