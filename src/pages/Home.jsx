import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-3xl shadow-xl">
      <h1 className="text-5xl font-extrabold mb-4">أهلاً بك في Tech-Shop</h1>
      <p className="text-xl mb-8">اكتشف أحدث التقنيات بأفضل الأسعار</p>
      <Link to="/products" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
        تسوق الآن
      </Link>
    </div>
  );
};

export default Home;