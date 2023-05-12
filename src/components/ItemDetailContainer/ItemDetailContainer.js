
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = collection(db, 'products')

        getDocs(collectionRef)
            .then(response => {
                const productRender = response.docs.map(doc => {
                    const data = doc.data()
                    console.log(data.id)
                    if(data.id == itemId){
                        setProduct(data)
                    }
                })
                
                productRender() 
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })


    }, [itemId])

    console.log(product)

    return (
        <div className="ItemDetailContainer">
            {loading ? <p>Cargando información del producto...</p> : <ItemDetail product={product} />}
        </div>
    )

}

export default ItemDetailContainer