import { Link } from 'react-router-dom';
import products from './data/data';

const Items = () => {
    return (
        <section>
            <h2>Shop top sellers</h2>
            <div className='items'>
                {products.map((product) => {
                    return (
                        <article key={product.id}>
                            <h5>{product.name}</h5>
                            <Link to={`/products/${product.id}`}>more info</Link>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Items;