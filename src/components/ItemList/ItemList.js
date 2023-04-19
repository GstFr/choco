import Item from "../Item/Item";
import CardGroup from 'react-bootstrap/CardGroup';
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
        <CardGroup>
            {products.map(prod => <Item key={prod.id}{...prod} />)}
        </CardGroup>
    )
}

export default ItemList