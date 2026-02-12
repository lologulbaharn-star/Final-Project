import { useAuthStore } from '../store/AuthStore';
import { useNavigate } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';

const Profile = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="bg-blue-600 h-32"></div>
      <div className="px-8 pb-8">
        <div className="relative">
          <img src={user.avatar} className="w-32 h-32 rounded-2xl border-4 border-white absolute -top-16 shadow-lg" alt="avatar" />
        </div>
        <div className="mt-20">
          <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-500">{user.email}</p>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">الدور الوظيفي</p>
              <p className="font-bold text-blue-600 capitalize">{user.role}</p>
            </div>
            <User className="text-gray-300" size={40} />
          </div>

          <button 
            onClick={handleLogout}
            className="w-full mt-8 flex items-center justify-center gap-2 bg-red-50 text-red-600 py-4 rounded-2xl font-bold hover:bg-red-100 transition"
          >
            <LogOut size={20} />
            تسجيل الخروج
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;