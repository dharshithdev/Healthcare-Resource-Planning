import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthFile';
import axios from 'axios';
import { FiLock, FiMail, FiShield, FiAlertTriangle } from 'react-icons/fi';

const Login = () => {
  const { user, loading, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      const path = 
        user.role === 'Admin' ? '/admin/dashboard' : 
        user.role === 'Doctor' ? '/doctor/dashboard' : '/staff/dashboard';
      navigate(path, { replace: true });
    }
  }, [user, loading, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, formData);
      const { token, user: userData } = response.data;
      localStorage.setItem('token', token);
      login(userData); 
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials or server error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading || user) return null;

  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-[#090d16] relative overflow-hidden font-sans px-4 py-8 selection:bg-indigo-500 selection:text-white">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[400px] lg:w-[700px] h-[400px] lg:h-[700px] bg-indigo-600/15 rounded-full blur-[100px] lg:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] lg:w-[700px] h-[400px] lg:h-[700px] bg-violet-600/10 rounded-full blur-[100px] lg:blur-[140px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 w-full max-w-[440px]"
      >
        {/* Branding Section */}
        <div className="text-center mb-8">
          
          <h1 className="text-4xl font-black text-white tracking-tight">
            HRP<span className="text-indigo-500">.</span>
          </h1>
          <p className="text-slate-400/60 text-xs font-semibold uppercase tracking-widest mt-1">Resource Planning System</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-2xl relative shadow-black/40">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white tracking-tight">Welcome Back</h2>
            <p className="text-slate-400 text-xs mt-1">Sign in to access secure clinical operations.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Error Message Section */}
            <AnimatePresence mode="wait">
              {error && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs py-3.5 px-4 rounded-xl flex items-center gap-3"
                >
                  <FiAlertTriangle className="text-red-400 text-base shrink-0" />
                  <span className="font-medium">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Email Field */}
            <div className="space-y-1.5 group">
              <label className="text-slate-400 text-[11px] font-bold uppercase tracking-wider ml-1 group-focus-within:text-indigo-400 transition-colors">
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors text-base" />
                <input 
                  required
                  type="email" 
                  autoComplete="email"
                  placeholder="name@hospital.com"
                  className="w-full bg-black/30 border border-white/[0.08] rounded-xl px-11 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/60 transition-all text-sm font-medium"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5 group">
              <label className="text-slate-400 text-[11px] font-bold uppercase tracking-wider ml-1 group-focus-within:text-indigo-400 transition-colors">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors text-base" />
                <input 
                  required
                  type="password" 
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="w-full bg-black/30 border border-white/[0.08] rounded-xl px-11 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/60 transition-all text-sm font-medium"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={!isSubmitting ? { scale: 1.01 } : {}}
              whileTap={!isSubmitting ? { scale: 0.99 } : {}}
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-bold text-sm text-white transition-all mt-6 shadow-lg shadow-indigo-900/10 border border-indigo-500/30 active:scale-[0.99] ${
                isSubmitting 
                ? 'bg-slate-800/80 cursor-wait border-slate-700 text-slate-400' 
                : 'bg-indigo-600 hover:bg-indigo-500'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Authenticating...
                </span>
              ) : 'Sign In'}
            </motion.button>
          </form>

          {/* Footer Decoration */}
          <div className="mt-6 pt-5 border-t border-white/[0.04] text-center">
            <p className="text-[10px] text-slate-500/80 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
              Secure Login
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;