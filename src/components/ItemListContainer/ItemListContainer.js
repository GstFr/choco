import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList.js"


const ItemListContainer = ({greeting}) => {
    const [product, setProduct] = useState([])

    

    useEffect(() => {
        getProducts()
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div >
<h1>{greeting}</h1>
<ItemList products= {products}/>
        </div>
        
    )
}

export default ItemListContainer
