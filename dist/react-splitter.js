(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Splitter"] = factory(require("react"));
	else
		root["Splitter"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(1);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var Splitter = _react2['default'].createClass({
	    displayName: 'Splitter',

	    componentDidMount: function componentDidMount() {
	        var self = this;
	        //self.minWidth = 450;
	        //var lsKey = 'splitterLeftColWidth';
	        //var lsValue = parseInt(window.localStorage.getItem(lsKey), 10) || '50%';
	        //var lsValue =  550;
	        //var splitterWidth = self._sanitizeSplitterPositionValue(lsValue);
	        //var splitterWidth = lsValue;

	        //var splitter = $('#jquerySplitter').split({
	        var domNode = _react2['default'].findDOMNode(this);

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
	    _sanitizeSplitterPositionValue: function _sanitizeSplitterPositionValue(position) {
	        var newPosition = Math.min(position, window.innerWidth - this.minWidth);
	        newPosition = Math.max(newPosition, this.minWidth);

	        return newPosition;
	    },
	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            this.props,
	            this.props.children
	        );
	    }
	});

	exports['default'] = Splitter;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	/*!
	 * JQuery Spliter Plugin
	 * Copyright (C) 2010-2013 Jakub Jankiewicz <http://jcubic.pl>
	 *
	 * This program is free software: you can redistribute it and/or modify
	 * it under the terms of the GNU Lesser General Public License as published by
	 * the Free Software Foundation, either version 3 of the License, or
	 * (at your option) any later version.
	 *
	 * This program is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	 * GNU Lesser General Public License for more details.
	 *
	 * You should have received a copy of the GNU Lesser General Public License
	 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
	 */
	'use strict';

	(function ($, undefined) {
	    var count = 0;
	    var splitter_id = null;
	    var splitters = [];
	    var current_splitter = null;
	    $.fn.split = function (options) {
	        var data = this.data('splitter');
	        if (data) {
	            return data;
	        }
	        var panel_1;
	        var panel_2;
	        var settings = $.extend({
	            limit: 100,
	            orientation: 'horizontal',
	            position: '50%',
	            invisible: false,
	            onDragStart: $.noop,
	            onDragEnd: $.noop,
	            onDrag: $.noop
	        }, options || {});
	        this.settings = settings;
	        var cls;
	        var children = this.children();
	        if (settings.orientation == 'vertical') {
	            panel_1 = children.first().addClass('left_panel');
	            panel_2 = panel_1.next().addClass('right_panel');
	            cls = 'vsplitter';
	        } else if (settings.orientation == 'horizontal') {
	            panel_1 = children.first().addClass('top_panel');
	            panel_2 = panel_1.next().addClass('bottom_panel');
	            cls = 'hsplitter';
	        }
	        if (settings.invisible) {
	            cls += ' splitter-invisible';
	        }
	        var width = this.width();
	        var height = this.height();
	        var id = count++;
	        this.addClass('splitter_panel');
	        var splitter = $('<div/>').addClass(cls).bind('mouseenter touchstart', function () {
	            splitter_id = id;
	        }).bind('mouseleave touchend', function () {
	            splitter_id = null;
	        }).insertAfter(panel_1);
	        var position;

	        function get_position(position) {
	            if (typeof position === 'number') {
	                return position;
	            } else if (typeof position === 'string') {
	                var match = position.match(/^([0-9\.]+)(px|%)$/);
	                if (match) {
	                    if (match[2] == 'px') {
	                        return +match[1];
	                    } else {
	                        if (settings.orientation == 'vertical') {
	                            return width * +match[1] / 100;
	                        } else if (settings.orientation == 'horizontal') {
	                            return height * +match[1] / 100;
	                        }
	                    }
	                } else {}
	            } else {}
	        }

	        var self = $.extend(this, {
	            refresh: function refresh() {
	                var new_width = this.width();
	                var new_height = this.height();
	                if (width != new_width || height != new_height) {
	                    width = this.width();
	                    height = this.height();
	                    self.position(position);
	                }
	            },
	            position: (function () {
	                if (settings.orientation == 'vertical') {
	                    return function (n, silent) {
	                        if (n === undefined) {
	                            return position;
	                        } else {
	                            position = get_position(n);
	                            var sw = splitter.width();
	                            var sw2 = sw / 2;
	                            if (settings.invisible) {
	                                var pw = panel_1.width(position).outerWidth();
	                                panel_2.width(self.width() - pw);
	                                splitter.css('left', pw - sw2);
	                            } else {
	                                var pw = panel_1.width(position - sw2).outerWidth();
	                                panel_2.width(self.width() - pw - sw);
	                                splitter.css('left', pw);
	                            }
	                        }
	                        if (!silent) {
	                            self.find('.splitter_panel').trigger('splitter.resize');
	                        }
	                        return self;
	                    };
	                } else if (settings.orientation == 'horizontal') {
	                    return function (n, silent) {
	                        if (n === undefined) {
	                            return position;
	                        } else {
	                            position = get_position(n);
	                            var sw = splitter.height();
	                            var sw2 = sw / 2;
	                            if (settings.invisible) {
	                                var pw = panel_1.height(position).outerHeight();
	                                panel_2.height(self.height() - pw);
	                                splitter.css('top', pw - sw2);
	                            } else {
	                                var pw = panel_1.height(position - sw2).outerHeight();
	                                panel_2.height(self.height() - pw - sw);
	                                splitter.css('top', pw);
	                            }
	                        }
	                        if (!silent) {
	                            self.find('.splitter_panel').trigger('splitter.resize');
	                        }
	                        return self;
	                    };
	                } else {
	                    return $.noop;
	                }
	            })(),
	            orientation: settings.orientation,
	            limit: settings.limit,
	            isActive: function isActive() {
	                return splitter_id === id;
	            },
	            destroy: function destroy() {
	                self.removeClass('splitter_panel');
	                splitter.unbind('mouseenter');
	                splitter.unbind('mouseleave');
	                splitter.unbind('touchstart');
	                splitter.unbind('touchmove');
	                splitter.unbind('touchend');
	                splitter.unbind('touchleave');
	                splitter.unbind('touchcancel');
	                if (settings.orientation == 'vertical') {
	                    panel_1.removeClass('left_panel');
	                    panel_2.removeClass('right_panel');
	                } else if (settings.orientation == 'horizontal') {
	                    panel_1.removeClass('top_panel');
	                    panel_2.removeClass('bottom_panel');
	                }
	                self.unbind('splitter.resize');
	                self.find('.splitter_panel').trigger('splitter.resize');
	                splitters[id] = null;
	                splitter.remove();
	                var not_null = false;
	                for (var i = splitters.length; i--;) {
	                    if (splitters[i] !== null) {
	                        not_null = true;
	                        break;
	                    }
	                }
	                //remove document events when no splitters
	                if (!not_null) {
	                    $(document.documentElement).unbind('.splitter');
	                    $(window).unbind('resize.splitter');
	                    self.data('splitter', null);
	                    splitters = [];
	                    count = 0;
	                }
	            }
	        });
	        self.bind('splitter.resize', function (e) {
	            var pos = self.position();
	            if (self.orientation == 'vertical' && pos > self.width()) {
	                pos = self.width() - self.limit - 1;
	            } else if (self.orientation == 'horizontal' && pos > self.height()) {
	                pos = self.height() - self.limit - 1;
	            }
	            if (pos < self.limit) {
	                pos = self.limit + 1;
	            }
	            self.position(pos, true);
	        });
	        //inital position of splitter
	        var pos;
	        if (settings.orientation == 'vertical') {
	            if (pos > width - settings.limit) {
	                pos = width - settings.limit;
	            } else {
	                pos = get_position(settings.position);
	            }
	        } else if (settings.orientation == 'horizontal') {
	            //position = height/2;
	            if (pos > height - settings.limit) {
	                pos = height - settings.limit;
	            } else {
	                pos = get_position(settings.position);
	            }
	        }
	        if (pos < settings.limit) {
	            pos = settings.limit;
	        }
	        self.position(pos, true);
	        if (splitters.length == 0) {
	            // first time bind events to document
	            $(window).bind('resize.splitter', function () {
	                $.each(splitters, function (i, splitter) {
	                    splitter.refresh();
	                });
	            });
	            $(document.documentElement).bind('mousedown.splitter touchstart.splitter', function (e) {
	                if (splitter_id !== null) {
	                    current_splitter = splitters[splitter_id];
	                    $('<div class="splitterMask"></div>').css('cursor', current_splitter.children().eq(1).css('cursor')).insertAfter(current_splitter);
	                    current_splitter.settings.onDragStart(e);
	                    return false;
	                }
	            }).bind('mouseup.splitter touchend.splitter touchleave.splitter touchcancel.splitter', function (e) {
	                if (current_splitter) {
	                    $('.splitterMask').remove();
	                    current_splitter.settings.onDragEnd(e);
	                    current_splitter = null;
	                }
	            }).bind('mousemove.splitter touchmove.splitter', function (e) {
	                if (current_splitter !== null) {
	                    var limit = current_splitter.limit;
	                    var offset = current_splitter.offset();
	                    if (current_splitter.orientation == 'vertical') {
	                        var pageX = e.pageX;
	                        if (e.originalEvent && e.originalEvent.changedTouches) {
	                            pageX = e.originalEvent.changedTouches[0].pageX;
	                        }
	                        var x = pageX - offset.left;
	                        if (x <= current_splitter.limit) {
	                            x = current_splitter.limit + 1;
	                        } else if (x >= current_splitter.width() - limit) {
	                            x = current_splitter.width() - limit - 1;
	                        }
	                        if (x > current_splitter.limit && x < current_splitter.width() - limit) {
	                            current_splitter.position(x, true);
	                            current_splitter.find('.splitter_panel').trigger('splitter.resize');
	                            e.preventDefault();
	                        }
	                    } else if (current_splitter.orientation == 'horizontal') {
	                        var pageY = e.pageY;
	                        if (e.originalEvent && e.originalEvent.changedTouches) {
	                            pageY = e.originalEvent.changedTouches[0].pageY;
	                        }
	                        var y = pageY - offset.top;
	                        if (y <= current_splitter.limit) {
	                            y = current_splitter.limit + 1;
	                        } else if (y >= current_splitter.height() - limit) {
	                            y = current_splitter.height() - limit - 1;
	                        }
	                        if (y > current_splitter.limit && y < current_splitter.height() - limit) {
	                            current_splitter.position(y, true);
	                            current_splitter.find('.splitter_panel').trigger('splitter.resize');
	                            e.preventDefault();
	                        }
	                    }
	                    current_splitter.settings.onDrag(e);
	                }
	            });
	        }
	        splitters.push(self);
	        self.data('splitter', self);
	        return self;
	    };
	})(jQuery);

	//throw position + ' is invalid value';

	//throw 'position have invalid type';

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;