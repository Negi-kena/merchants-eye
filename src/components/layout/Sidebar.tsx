import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Home, Package, ShoppingCart, BarChart } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'dashboard', icon: Home },
  { to: '/products', label: 'products', icon: Package },
  { to: '/sales', label: 'sales', icon: ShoppingCart },
  { to: '/summary', label: 'summary', icon: BarChart },
];

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <aside className="w-64 bg-gray-800 text-white p-4 hidden md:block">
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ` +
                  (isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white')
                }
              >
                <link.icon className="h-5 w-5" />
                <span>{t(link.label)}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
