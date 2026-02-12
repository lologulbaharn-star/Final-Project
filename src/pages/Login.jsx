import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuthStore } from '../store/AuthStore';

const Login = () => {
  const [email, setEmail] = useState('john@mail.com'); 
  const [password, setPassword] = useState('changeme');
  const [error, setError] = useState('');
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      
      const res = await api.post('/auth/login', { email, password });
      const token = res.data.access_token;

      const userRes = await api.get('/auth/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });

      setAuth(userRes.data, token);
      navigate('/profile'); 
    } catch (err) {
      setError('خطأ في الإيميل أو كلمة المرور');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">تسجيل الدخول</h2>
      {error && <p className="bg-red-50 text-red-500 p-3 rounded-lg mb-4 text-sm">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium">البريد الإلكتروني</label>
          <input 
            type="email" 
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">كلمة المرور</label>
          <input 
            type="password" 
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition">
          دخول
        </button>
      </form>
    </div>
  );
};

export default Login;