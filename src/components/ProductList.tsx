import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const mockProducts = [
  { name: 'Tej', stock: 12, price: 150 },
  { name: 'Injera', stock: 50, price: 10 },
  { name: 'Berbere', stock: 5, price: 200 },
  { name: 'Shiro', stock: 25, price: 120 },
  { name: 'Kolo', stock: 8, price: 80 },
];

const ProductList = () => {
  const { t } = useTranslation();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {mockProducts.map((product) => (
        <Card key={product.name}>
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{t('quantity_in_stock')}: {product.stock}</p>
            <p>{t('price_per_unit')}: {product.price} ETB</p>
          </CardContent>
          <CardFooter className='gap-2'>
            <Button variant="outline">{t('edit')}</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
