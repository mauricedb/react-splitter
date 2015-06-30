/**
 * Created by Maurice on 6/28/2015.
 */

var App = React.createClass({
    render(){
        return <Splitter style={{height:200}}
                         orientation='vertical'
                         position='40%'
                         onDragEnd={e => console.log(e.clientX)}
            >
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dignissimos ex fugit illum iusto non
                suscipit. Aliquam aut est ipsam laudantium ratione! Accusantium adipisci autem ea enim ex ipsum nemo non
                optio repudiandae sit. Accusamus alias, atque aut corporis cum, deleniti dolore, dolorem doloribus
                ducimus earum esse fuga fugiat harum impedit ipsa ipsum itaque iusto laudantium libero magni maxime
                minima nobis non odit perspiciatis quasi quidem quo reiciendis rem repellat reprehenderit sint sit ut
                vel vero voluptate voluptatibus! Aliquid autem earum eligendi eos est expedita hic iusto numquam odit
                porro, praesentium provident quae, quam quas similique sit soluta suscipit voluptatum.
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dignissimos ex fugit illum iusto non
                suscipit. Aliquam aut est ipsam laudantium ratione! Accusantium adipisci autem ea enim ex ipsum nemo non
                optio repudiandae sit. Accusamus alias, atque aut corporis cum, deleniti dolore, dolorem doloribus
                ducimus earum esse fuga fugiat harum impedit ipsa ipsum itaque iusto laudantium libero magni maxime
                minima nobis non odit perspiciatis quasi quidem quo reiciendis rem repellat reprehenderit sint sit ut
                vel vero voluptate voluptatibus! Aliquid autem earum eligendi eos est expedita hic iusto numquam odit
                porro, praesentium provident quae, quam quas similique sit soluta suscipit voluptatum.
            </div>
        </Splitter>
    }
});

React.render(<App/>, document.getElementById('app'));