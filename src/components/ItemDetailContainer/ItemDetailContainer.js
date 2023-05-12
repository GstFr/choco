
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
    
        const getProducto = async () => {
          const queryRef = doc(db, "products", itemId);
          const response = await getDoc(queryRef);
          const newItem = {
            id: response.id,
            ...response.data(),
          };
          console.log(newItem)
          setTimeout(()=>{
            setProduct(newItem);
            setLoading(false)
          }, 2000)
        };
        getProducto();
    
      }, [itemId]);

    console.log(product)

    return (
        <div className="ItemDetailContainer">
            {loading ? <p>Cargando información del producto...</p> : <ItemDetail product={product} />}
        </div>
    )

}

export default ItemDetailContainer



