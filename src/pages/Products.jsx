import { useState, useEffect } from 'react';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import Skeleton from '../components/Skeleton';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes, catRes] = await Promise.all([
          api.get('/products'),
          api.get('/categories')
        ]);
        setProducts(prodRes.data);
        setCategories(catRes.data);
      } catch (error) {
        console.error("خطأ في جلب البيانات", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || p.category.id === parseInt(selectedCategory))
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
        <h2 className="text-3xl font-bold">المتجر التقني</h2>
        
        <div className="flex gap-2 w-full md:w-auto">
          <input 
            type="text" 
            placeholder="ابحث عن منتج..." 
            className="border p-2 rounded-lg w-full md:w-64 focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select 
            className="border p-2 rounded-lg bg-white"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">كل الفئات</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          [...Array(8)].map((_, i) => <Skeleton key={i} />)
        ) : (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
      
      {!loading && filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-10">عذراً، لم نجد منتجات تطابق بحثك.</p>
      )}
    </div>
  );
};

export default Products;