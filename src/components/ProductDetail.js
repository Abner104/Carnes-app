
import { useParams } from 'react-router-dom'
import { Button } from 'bootstrap'
import DATA from '../Data'

const ProductDetail = () => {

    const proid= useParams();
    const proDetail = DATA.filter(x=>x.id = proid.id)
    const product = proDetail[0];
    console.log(product);

  return (
    <div>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src={product.img} alt={product.title}/>
            </div>
            <div className="col-md-6">
                <h1>{product.title}</h1>
                <hr/>
                <h2>{product.price}</h2>
                <p>{product.desc}</p>
                <Button className="btn btn-outline-primary">AGREGAR</Button>

            </div>

        </div>

    </div>


    
    </div>
  )
}

export default ProductDetail