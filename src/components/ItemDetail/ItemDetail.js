import ItemCount from "../ItemCount/ItemCount"



const ItemmDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <div className="col-xs-12 col-md-6 col-xl-3 mx-auto text-center">
            <div className="card" >
                <img src={img} className="card-img-top imgDetail" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Categoría: {category}</p>
                    <p className="card-text">Descripcion: {description}</p>
                    <p className="card-text">Precio: ${price}</p>
                    <p className="card-text">Stock disponible:{stock}</p>
                    <footer className="Itemfooter">
                        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default ItemmDetail