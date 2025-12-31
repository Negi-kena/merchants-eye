import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">{t('dashboard')}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>{t('todays_revenue')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">0 ETB</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{t('stock_status')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">5 {t('products')} {t('low_stock_alerts')}</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 flex gap-4">
        <Button size="lg" asChild>
          <Link to="/sales/new">{t('record_sale')}</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link to="/products/new">{t('add_new_product')}</Link>
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
