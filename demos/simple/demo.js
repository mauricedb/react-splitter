/**
 * Created by Maurice on 6/28/2015.
 */

'use strict';

var App = React.createClass({
    displayName: 'App',

    render: function render() {
        return React.createElement(
            Splitter,
            { className: 'container' },
            React.createElement(
                'div',
                { className: 'left' },
                'Left'
            ),
            React.createElement(
                'div',
                { className: 'right' },
                'Right'
            )
        );
    }
});

React.render(React.createElement(App, null), document.getElementById('app'));