import React from 'react';

const ProductList = ({ products, editProduct, deleteProduct }) => {
    return (
        <div className="product-list">
            <h2>Product List</h2>
            {products.length > 0 ? (
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            <p><span>Name:</span> {product.name}</p>
                            <p><span>Description:</span> {product.description}</p>
                            <p><span>Category:</span> {product.category}</p>
                            <p><span>Quantity:</span> {product.quantity}</p>
                            <button onClick={() => editProduct(product)}>Edit</button>
                            <button onClick={() => deleteProduct(product.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="no-products">No products found</div>
            )}
        </div>
    );
};

export default ProductList;
