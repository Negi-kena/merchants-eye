import Header from './Header';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 md:p-8 bg-gray-50 pb-20 md:pb-8">{children}</main>
      </div>
      <BottomNav />
    </div>
  );
};

export default Layout;
