import React from 'react';
import './ItemDetail.css';
import ItemCount from '../itemCount';


function ItemDetail ({title, price, image, description, stock,}) {
    const onAdd = (MyComponent) => { 
        console.log('Compraste ${} unidades.');
        
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = { showTitle: false };
        }
    
        render() {
            return (
              <div>
                <button onClick={() => this.setState({ showTitle: true })}>Click</button>
                {this.state.showTitle && (
                  <button className='add'>Finalizar Compra</button>
                )}
              </div>
            );
          }
        }
    }

    return (
        <div className="cardFlex">
             <img src={image} alt={title}/>
             <p className="price"> -  ${price}  -</p>
             <p className="description"> {description} </p>
            {
                MyComponent.length
                ?<ItemCount className="itemCount" initial={1} stock={stock} onAdd={onAdd} />
                :<MyComponent> </MyComponent>
            }
        </div>
       
        )
}
export default ItemDetail;