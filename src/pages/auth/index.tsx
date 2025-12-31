import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Auth = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">{t('login')}</CardTitle>
          <CardDescription>
            {t('welcome')}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">{t('email')}</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">{t('password')}</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardContent className="grid gap-4">
            <Button className="w-full">{t('login')}</Button>
            <Button variant="outline" className="w-full">{t('signup')}</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
