import { Link } from 'react-router-dom';
import { ShoppingCart, User, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* الشعار */}
        <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <ShoppingBag className="w-8 h-8" />
          <span>TechShop</span>
        </Link>
        
        {/* الروابط */}
        <div className="flex gap-6 items-center">
          <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium">المنتجات</Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600 flex items-center gap-1">
            <User size={20} />
            <span>دخول</span>
          </Link>
          <Link to="/cart" className="relative p-2 bg-blue-50 rounded-full text-blue-600 hover:bg-blue-100 transition">
            <ShoppingCart size={22} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center font-bold">0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;