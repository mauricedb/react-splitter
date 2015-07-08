import './jquery-splitter';
import React from 'react';


var Splitter = React.createClass({
    componentDidMount() {
        var self = this;
        //self.minWidth = 450;
        //var lsKey = 'splitterLeftColWidth';
        //var lsValue = parseInt(window.localStorage.getItem(lsKey), 10) || '50%';
        //var lsValue =  550;
        //var splitterWidth = self._sanitizeSplitterPositionValue(lsValue);
//var splitterWidth = lsValue;

        //var splitter = $('#jquerySplitter').split({
        var domNode = React.findDOMNode(this);

        var splitter = $(domNode).split(this.props);

        //var splitter = $(domNode).split({
        //    orientation: 'vertical',
        //    //limit: self.minWidth,
        //    //position: splitterWidth,
        //    //position: '50%',
        //    //onDragEnd: function (e) {
        //    //    // dragEnd can exceed min/max width if user "lets go" beyond the min/max
        //    //    var newPosition = self._sanitizeSplitterPositionValue(e.clientX);
        //    //    window.localStorage.setItem(lsKey, newPosition);
        //    //}
        //});

        $(window).resize(function () {
            var newPosition = self._sanitizeSplitterPositionValue(splitter.position());
            if (newPosition !== splitter.position()) {
                splitter.position(newPosition);
            }
        });
    },
    _sanitizeSplitterPositionValue(position) {
        var newPosition = Math.min(position, window.innerWidth - this.minWidth);
        newPosition = Math.max(newPosition, this.minWidth);

        return newPosition;
    },
    render(){
        return <div { ...this.props }>
            { this.props.children }
        </div>;
    }
});

export default Splitter;
