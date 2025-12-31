import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const NewProduct = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4 md:p-8">
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>{t('add_new_product')}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="product-name">{t('product_name')}</Label>
                    <Input id="product-name" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="quantity">{t('quantity_in_stock')}</Label>
                    <Input id="quantity" type="number" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="price">{t('price_per_unit')}</Label>
                    <Input id="price" type="number" />
                </div>
                <div className="flex justify-end gap-2 mt-4">
                    <Button variant="outline">{t('cancel')}</Button>
                    <Button>{t('save')}</Button>
                </div>
            </CardContent>
        </Card>
    </div>
  );
};

export default NewProduct;
