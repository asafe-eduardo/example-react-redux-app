import React from "react";
import { hashHistory } from 'react-router'
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props) {
        super(props)

    }

    componentWillMount() {
        
    }

    render() {

        return (
            <div>
                <div className="wrapper">

                    <section id="geral">
                        <div id="corpo">
                            <div className="container">
                                <div style={{width: "100%"}}>
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer></footer>
                </div>
            </div>
        )
    }
}

export default App;

App.propTypes = {
    children: PropTypes.object
};
