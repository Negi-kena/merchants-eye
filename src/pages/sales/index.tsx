import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Sales = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{t('sales')}</h1>
        <Button asChild>
          <Link to="/sales/new">{t('record_sale')}</Link>
        </Button>
      </div>
      {/* Sales list will go here */}
    </div>
  );
};

export default Sales;
