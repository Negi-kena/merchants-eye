import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ProductList from '@/components/ProductList';

const Products = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{t('products')}</h1>
        <Button asChild>
          <Link to="/products/new">{t('add_new_product')}</Link>
        </Button>
      </div>
      <ProductList />
    </div>
  );
};

export default Products;
