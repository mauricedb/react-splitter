/**
 * Created by Maurice on 6/28/2015.
 */

var App = React.createClass({
    render(){
        return <Splitter className='container'>
            <div className='left'>Left</div>
            <div className='right'>Right</div>
        </Splitter>
    }
});

React.render(<App/>, document.getElementById('app'));