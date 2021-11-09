import { Link, Outlet } from "react-router-dom"
import { useNavigate } from 'react-router';

const Products = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Products</h1>
            <button onClick={() => navigate(-1)} >Lacteos</button>
            <br/>
            <Link to='/products/verduras'>Verduras</Link>
            <br/>
            <Link to='/products'>Limpiar</Link>
            <div style={{border: '2px solid  red'}}>
                <p>Tipo de producto</p>
                <Outlet />
            </div>
        </div>
    )
}

export default Products
