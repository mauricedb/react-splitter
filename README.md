# react-splitter

This component is a wrapper around the [jquery.splitter](https://github.com/jcubic/jquery.splitter) component by [Jakub Jankiewicz](http://jcubic.pl). 

## Dependency
For now this component depends on jQuery so make sure to load that. This goal is to change this into a native React component without a jQuery dependency in the future.

## Usage
The Splitter components props are passed on to the split function of the [jquery.splitter](https://github.com/jcubic/jquery.splitter) so check its documentation for possible values. See the example below for a starter.

## Example
```javascript
var App = React.createClass({
    render(){
        return <Splitter style={{height:200}}
                         orientation='vertical'
                         position='40%'
                         onDragEnd={e => console.log(e.clientX)}>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </div>
        </Splitter>
    }
});
```