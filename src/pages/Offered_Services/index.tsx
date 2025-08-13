import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import * as S from './Styles';
import {fetchServices} from '../../api/services';
import {refreshToken} from '../../dispatchers/authentication';
import ViewToggle, { ViewMode } from '../../components/ViewToggle';
import { useLayout } from '../../contexts/LayoutContext';

interface Service {
  id: number;
  name: string;
  description: string;
  category?: string;
  price?: number;
  provider_name?: string;
  thumbnail_url?: string;
  rating?: number;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<ViewMode>('grid');
  const { setSidebarCollapsed, openDetailPanel } = useLayout();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWithAuth = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
      } catch (error: any) {
        if (error.response && error.response.status === 401) {
          try {
            await refreshToken()();
            const data = await fetchServices();
            setServices(data);
          } catch (refreshError) {
            // Redirect to login if refresh fails
            navigate('/sign-in');
          }
        } else {
          console.error('Error fetching services:', error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchWithAuth();
  }, [navigate]);

  const handleOpenDetail = (service: Service) => {
    setSidebarCollapsed(true);
    openDetailPanel(
      <div>
        <h3>{service.name}</h3>
        {service.thumbnail_url && <img src={service.thumbnail_url} alt={service.name} style={{ width: '100%', borderRadius: 8 }} />}
        <p style={{ color: '#536471' }}>{service.description}</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {service.category && <S.Badge>{service.category}</S.Badge>}
          {typeof service.rating === 'number' && <S.Badge>★ {service.rating.toFixed(1)}</S.Badge>}
          {service.provider_name && <S.Badge>{service.provider_name}</S.Badge>}
        </div>
        <div style={{ marginTop: 12, fontWeight: 600, color: '#0a440a' }}>{service.price ? `$${service.price}` : ''}</div>
      </div>
    );
  };

  return (
    <S.Container>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Offered Services</h2>
        <ViewToggle mode={mode} onChange={setMode} />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        mode === 'grid' ? (
          <S.Grid>
            {services.map((service) => (
              <S.Card key={service.id} onClick={() => handleOpenDetail(service)} style={{ cursor: 'pointer' }}>
                <S.CardImage src={service.thumbnail_url} />
                <S.CardTitle>{service.name}</S.CardTitle>
                <S.CardDesc>{service.description}</S.CardDesc>
                <S.BadgeRow>
                  {service.category && <S.Badge>{service.category}</S.Badge>}
                  {typeof service.rating === 'number' && <S.Badge>★ {service.rating.toFixed(1)}</S.Badge>}
                  {service.provider_name && <S.Badge>{service.provider_name}</S.Badge>}
                </S.BadgeRow>
                <S.CardFooter>
                  <S.Price>{service.price ? `$${service.price}` : ''}</S.Price>
                  <button>Book</button>
                </S.CardFooter>
              </S.Card>
            ))}
          </S.Grid>
        ) : (
          <div style={{ display: 'grid', gap: 12 }}>
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => handleOpenDetail(service)}
                style={{
                  background: '#fff',
                  border: '1px solid #efeff4',
                  borderRadius: 8,
                  padding: 12,
                  cursor: 'pointer',
                  display: 'grid',
                  gridTemplateColumns: '96px 1fr auto',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <div style={{ width: 96, height: 72, borderRadius: 6, background: '#f5f5f5', backgroundImage: service.thumbnail_url ? `url(${service.thumbnail_url})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div>
                  <div style={{ fontWeight: 600, color: '#0f2540' }}>{service.name}</div>
                  <div style={{ color: '#536471', fontSize: 13 }}>{service.description}</div>
                  <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                    {service.category && <S.Badge>{service.category}</S.Badge>}
                    {typeof service.rating === 'number' && <S.Badge>★ {service.rating.toFixed(1)}</S.Badge>}
                    {service.provider_name && <S.Badge>{service.provider_name}</S.Badge>}
                  </div>
                </div>
                <div style={{ fontWeight: 600, color: '#0a440a' }}>{service.price ? `$${service.price}` : ''}</div>
              </div>
            ))}
          </div>
        )
      )}
      {!loading && services.length === 0 && <p>No services available at the moment.</p>}
    </S.Container>
  );
};

export default Services;





