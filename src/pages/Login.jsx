
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import devsum from "../assets/Images/devsum.jpeg";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100 font-inter">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h1 className='text-center items-center font-bold text-2xl'>Welcome to InternHub</h1>
        <img src={devsum} alt="Logo" className="w-15 mx-auto mb-4" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type='email' className="w-full border p-2 rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="w-full border p-2 rounded" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="bg-blue-800 text-white hover:bg-blue-950 font-bold w-full py-2 rounded">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

