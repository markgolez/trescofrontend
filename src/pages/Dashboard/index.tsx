import { useState } from 'react';
import * as S from './Styles';
import Tabs from '../../components/Tabs';
import Services from '../Offered_Services';
import Products from '../Marketplace';
import Postings from '../Posting'; // Make sure to import Postings
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useIsAuthenticated } from '../../hooks/useIsAuthenticated';

type TabKey = 'services' | 'products' | 'postings' | 'profile' | 'transactions';

const Dashboard = () => {
  const [active, setActive] = useState<TabKey>('services');
  const user = useIsAuthenticated();

  const tabs = [
    { key: 'services', label: 'My Services' },
    { key: 'products', label: 'Products' },
    { key: 'postings', label: 'User Postings' },
    { key: 'profile', label: 'My Posts & Tags' },
    { key: 'transactions', label: 'Transactions' },
  ];

  return (
    <S.Container>
      <Tabs items={tabs} activeKey={active} onChange={(k) => setActive(k as TabKey)}>
        {active === 'services' && <Services />}
        {active === 'products' && <Products />}
        {active === 'postings' && <Postings />} {/* Removed userId prop */}
        {active === 'profile' && <div>My Posts & Tags coming soon</div>}
        {active === 'transactions' && <div>My Transactions coming soon</div>}
      </Tabs>
    </S.Container>
  );
};

export default Dashboard;