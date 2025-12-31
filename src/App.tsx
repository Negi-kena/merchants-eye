import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/dashboard';
import Products from './pages/products';
import NewProduct from './pages/products/new';
import Sales from './pages/sales';
import NewSale from './pages/sales/new';
import Auth from './pages/auth';
import Summary from './pages/summary';
import './lib/i18n';

const App = () => {
  return (
    <Suspense fallback="loading">
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/products" element={<Layout><Products /></Layout>} />
          <Route path="/products/new" element={<Layout><NewProduct /></Layout>} />
          <Route path="/sales" element={<Layout><Sales /></Layout>} />
          <Route path="/sales/new" element={<Layout><NewSale /></Layout>} />
          <Route path="/summary" element={<Layout><Summary /></Layout>} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
