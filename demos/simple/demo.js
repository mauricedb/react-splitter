/**
 * Created by Maurice on 6/28/2015.
 */

'use strict';

var App = React.createClass({
    displayName: 'App',

    render: function render() {
        return React.createElement(
            Splitter,
            { style: { height: 200 },
                orientation: 'vertical',
                position: '40%',
                onDragEnd: function (e) {
                    return console.log(e.clientX);
                }
            },
            React.createElement(
                'div',
                null,
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dignissimos ex fugit illum iusto non suscipit. Aliquam aut est ipsam laudantium ratione! Accusantium adipisci autem ea enim ex ipsum nemo non optio repudiandae sit. Accusamus alias, atque aut corporis cum, deleniti dolore, dolorem doloribus ducimus earum esse fuga fugiat harum impedit ipsa ipsum itaque iusto laudantium libero magni maxime minima nobis non odit perspiciatis quasi quidem quo reiciendis rem repellat reprehenderit sint sit ut vel vero voluptate voluptatibus! Aliquid autem earum eligendi eos est expedita hic iusto numquam odit porro, praesentium provident quae, quam quas similique sit soluta suscipit voluptatum.'
            ),
            React.createElement(
                'div',
                null,
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dignissimos ex fugit illum iusto non suscipit. Aliquam aut est ipsam laudantium ratione! Accusantium adipisci autem ea enim ex ipsum nemo non optio repudiandae sit. Accusamus alias, atque aut corporis cum, deleniti dolore, dolorem doloribus ducimus earum esse fuga fugiat harum impedit ipsa ipsum itaque iusto laudantium libero magni maxime minima nobis non odit perspiciatis quasi quidem quo reiciendis rem repellat reprehenderit sint sit ut vel vero voluptate voluptatibus! Aliquid autem earum eligendi eos est expedita hic iusto numquam odit porro, praesentium provident quae, quam quas similique sit soluta suscipit voluptatum.'
            )
        );
    }
});

React.render(React.createElement(App, null), document.getElementById('app'));