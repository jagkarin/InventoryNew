import React, { useState, useEffect } from 'react';
import './css/product.css';
import ProductForm from './ProductForm';
import ProductList from './ProductList';


const Inventory = () => {
    
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        category: '',
        quantity: '',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [productIdToEdit, setProductIdToEdit] = useState(null);

    useEffect(() => {
        fetch('http://localhost:7098/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error('Error fetching data:', err));
    }, []);

    const handleProduct = () => {
        const productToSend = { ...newProduct, quantity: parseInt(newProduct.quantity, 10) };

        if (!productToSend.name || !productToSend.category || productToSend.quantity <= 0) {
            alert('Please enter valid product details');
            return;
        }

        const request = isEditing
            ? fetch(`http://localhost:7098/products/${productIdToEdit}`, {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(productToSend),
              })
            : fetch('http://localhost:7098/products', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(productToSend),
              });

        request
            .then(res => res.json())
            .then(product => {
                setProducts(
                    isEditing
                        ? products.map(p => (p.id === productIdToEdit ? product : p))
                        : [...products, product]
                );
                resetForm();
                alert(isEditing ? 'Product updated successfully!' : 'Product added successfully!');
            })
            .catch(err => {
                console.error(err);
                alert(isEditing ? 'Error updating product' : 'Error adding product');
            });
    };

    const deleteProduct = id => {
        fetch(`http://localhost:7098/products/${id}`, { method: 'DELETE' })
            .then(() => {
                setProducts(products.filter(product => product.id !== id));
                alert('Product deleted successfully!');
            })
            .catch(err => {
                console.error(err);
                alert('Error deleting product');
            });
    };

    const resetForm = () => {
        setNewProduct({ name: '', description: '', category: '', quantity: '' });
        setIsEditing(false);
        setProductIdToEdit(null);
    };

    const editProduct = (product) => {
        setNewProduct({
            name: product.name,
            description: product.description,
            category: product.category,
            quantity: product.quantity,
        });
        setIsEditing(true); // ตั้งค่า isEditing เป็น true
        setProductIdToEdit(product.id); // กำหนด ID ของสินค้าที่กำลังแก้ไข
    };
    
    
    

    return (
        <div>
            <h1>Warehouse Inventory</h1>
            <ProductForm
                newProduct={newProduct}
                setNewProduct={setNewProduct}
                isEditing={isEditing}
                handleProduct={handleProduct}
                resetForm={resetForm}
            />
            <ProductList
                products={products}
                editProduct={editProduct}
                deleteProduct={deleteProduct}
            />
        </div>
    );
};

export default Inventory;
