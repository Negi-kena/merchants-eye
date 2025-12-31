import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Home, Package, ShoppingCart, BarChart } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'dashboard', icon: Home },
  { to: '/products', label: 'products', icon: Package },
  { to: '/sales', label: 'sales', icon: ShoppingCart },
  { to: '/summary', label: 'summary', icon: BarChart },
];

const BottomNav = () => {
  const { t } = useTranslation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 text-white flex justify-around p-2">
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 text-xs ` +
            (isActive ? 'text-white' : 'text-gray-400')
          }
        >
          <link.icon className="h-6 w-6" />
          <span>{t(link.label)}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
