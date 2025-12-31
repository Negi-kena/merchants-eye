import LanguageSwitcher from '../LanguageSwitcher';

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold">Duka</h1>
      </div>
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        {/* User menu can go here */}
      </div>
    </header>
  );
};

export default Header;
