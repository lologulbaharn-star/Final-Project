import { Link } from 'react-router-dom';
import { ShoppingCart, User, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <ShoppingBag /> 
          <span>TechShop</span>
        </Link>

        <div className="flex gap-6 items-center font-medium">
          <Link to="/products" className="hover:text-blue-500">المنتجات</Link>
          
          <Link to="/login" className="hover:text-blue-500 flex items-center gap-1">
            <User size={20} />
            <span>دخول</span>
          </Link>

          <Link to="/cart" className="relative p-2 bg-blue-100 rounded-full text-blue-600">
            <ShoppingCart size={22} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;