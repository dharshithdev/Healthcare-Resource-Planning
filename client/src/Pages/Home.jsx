import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiShield, FiCpu, FiTrendingUp, FiDatabase } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Header />

      {/* Hero Section */}
      <main className="flex-1 pt-24 sm:pt-32 lg:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">        

          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none"
          >
            Streamline Dynamic Platform Insights with <span className="text-indigo-600">HRP</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed px-2"
          >
            Optimize automation pipelines, anchor historical records securely, and query mission-critical matrices instantly through a unified data engine.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link to="/portal" className="flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-indigo-100 w-full transition-all">
                <span>Get Started Nowww</span>
                <FiArrowRight />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link to="/docs" className="flex items-center justify-center border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 font-semibold px-8 py-4 rounded-xl w-full transition-all">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Bento Grid Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Feature 1 */}
            <motion.div variants={itemVariants} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6 text-xl">
                <FiDatabase />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Matrix Contexts</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Compile deep relational metrics into ultra-fast pipelines seamlessly.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={itemVariants} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6 text-xl">
                <FiCpu />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Automated Processing</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Accelerate internal routines through optimized multi-threaded gateways.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={itemVariants} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6 text-xl">
                <FiShield />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Ironclad Guardrails</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Secure data boundaries with enterprise-grade protection tokens.</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div variants={itemVariants} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6 text-xl">
                <FiTrendingUp />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Predictive Logic</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Analyze trends through real-time telemetry pipelines and graphs.</p>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;