import CartWidget from '../CartWidget/CartWidget'


const NavBar =()=>{
return(
    <nav>
        <h3>Plantas Exóticas</h3>
        <div>
            <button>Sobre nosotros</button>
            <button>Plantas del jardin</button>
            <button>Otros productos</button>
        </div>
        <CartWidget/>
    </nav>
)




}
export default  NavBar