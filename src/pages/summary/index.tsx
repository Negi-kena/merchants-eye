import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Summary = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">{t('summary')}</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t('daily_sales_overview')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">5,200 ETB</p>
            <p className="text-sm text-gray-500">+20% from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{t('weekly_sales_overview')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">25,800 ETB</p>
            <p className="text-sm text-gray-500">+15% from last week</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Summary;
