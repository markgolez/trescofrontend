import { useState } from 'react';
import * as S from './Styles';
import Tabs from '../../components/Tabs';
import Services from '../Offered_Services';

type TabKey = 'services' | 'products' | 'postings' | 'profile';

const Dashboard = () => {
  const [active, setActive] = useState<TabKey>('services');

  const tabs = [
    { key: 'services', label: 'Services' },
    { key: 'products', label: 'Products' },
    { key: 'postings', label: 'User Postings' },
    { key: 'profile', label: 'My Posts & Tags' },
  ];

  return (
    <S.Container>
      <Tabs items={tabs} activeKey={active} onChange={(k) => setActive(k as TabKey)}>
        {active === 'services' && <Services />}
        {active === 'products' && <div>Products coming soon</div>}
        {active === 'postings' && <div>User Postings coming soon</div>}
        {active === 'profile' && <div>My Posts & Tags coming soon</div>}
      </Tabs>
    </S.Container>
  );
};

export default Dashboard;