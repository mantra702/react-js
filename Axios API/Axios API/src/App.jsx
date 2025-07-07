import axios from 'axios'
import { useEffect, useState} from 'react';

function App() {

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetchProductsData();
  }, []);
  // useNavigate(() =>{
  //  })
  const fetchProductsData = async () => {
   const API = "https://dummyjson.com/products";
    const response = await axios.get(API);
    setProductsData(response.data.products);
  }

  return <>
    <h1 className="mt-5" style={{ textAlign: 'center' }}>Products Data</h1>
    <div className="container mt-5">
      <div className="row">
        {
          productsData.map((product, index) => {
            return <div className="card" style={{ width: "18rem", margin: "10px" }} key={index}>
              <img src={product.thumbnail} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Category : {product.category}</p>
                <p className="card-text">Price : ${product.price}</p>
                {
                  product.reviews.map((review, index) => {
                    return <p key={index}>⭐ {review.rating} {review.comment}</p>
                  })
                }
                 <a href="Javascriptvoid(0);" className="btn btn-primary">Add TO Cart</a>
              </div>
            </div>
          })
        }
      </div>
    </div >
  </>
}
export default App;