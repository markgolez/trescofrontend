import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { fetchServices, fetchServicePackages } from '../../api/services';
import { refreshToken } from '../../dispatchers/authentication';
import ViewToggle, { ViewMode } from '../../components/ViewToggle';
import { useLayout } from '../../contexts/LayoutContext';

interface TimeStampedUUIDModel {
  pkid: number;
  id: string;
  created_at: string;
  updated_at: string;
}

interface ServiceCategory extends TimeStampedUUIDModel {
  name: string;
  description: string;
  icon: string;
  is_active: boolean;
}

interface ServiceType extends TimeStampedUUIDModel {
  category: string;
  name: string;
  description: string;
  is_active: boolean;
}

interface ServiceProviderProfile extends TimeStampedUUIDModel {
  user: string;
  bio: string;
  skills: any[];
  experience_years: number;
  total_earnings: number;
  total_orders: number;
  average_rating: number;
  is_verified: boolean;
}

interface Service extends TimeStampedUUIDModel {
  provider: string;
  service_type: string;
  title: string;
  description: string;
  is_featured: boolean;
  status: 'active' | 'inactive' | 'paused' | 'draft';
  view_count: number;
  booking_count: number;
  rating_average: number;
  rating_count: number;
}

interface ServiceImage extends TimeStampedUUIDModel {
  service: string;
  image: string;
  caption: string;
  is_primary: boolean;
}

interface ServicePackage extends TimeStampedUUIDModel {
  service: string;
  name: string;
  billing_type: 'fixed' | 'hourly' | 'daily' | 'weekly' | 'monthly';
  description: string;
  price: number;
  delivery_time: number;
  revision_count: number;
  features: any[];
}

interface ServiceWithRelations extends Service {
  provider_profile?: ServiceProviderProfile;
  service_type_detail?: ServiceType;
  category_detail?: ServiceCategory;
  images?: ServiceImage[];
  packages?: ServicePackage[];
  reviews?: any[];
}

const Services = () => {
  const [services, setServices] = useState<ServiceWithRelations[]>([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<ViewMode>('grid');
  const { openDetailPanel } = useLayout();
  const navigate = useNavigate();

  const getPrimaryImage = (images?: ServiceImage[]): string | undefined => {
    if (!images || images.length === 0) return undefined;
    const primary = images.find(img => img.is_primary);
    return primary ? primary.image : images[0].image;
  };

  useEffect(() => {
    const fetchWithAuth = async () => {
      try {
        const data = await fetchServices();
        const servicesWithRelations = await Promise.all(
          data.map(async (service: Service) => {
            try {
              const packages = await fetchServicePackages(service.pkid);
              return { 
                ...service, 
                packages,
                rating_average: service.rating_average || 0,
                booking_count: service.booking_count || 0
              };
            } catch (error) {
              console.error(`Error fetching packages for service ${service.id}:`, error);
              return { 
                ...service, 
                packages: [],
                rating_average: service.rating_average || 0,
                booking_count: service.booking_count || 0
              };
            }
          })
        );
        setServices(servicesWithRelations);
      } catch (error: any) {
        if (error.response?.status === 401) {
          try {
            await refreshToken()();
            const data = await fetchServices();
            setServices(data);
          } catch (refreshError) {
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

  const handleOpenDetail = (service: ServiceWithRelations) => {
    const primaryImage = getPrimaryImage(service.images);
    
    openDetailPanel(
      <div>
        <h3>{service.title}</h3>
        {primaryImage && (
          <img 
            src={primaryImage} 
            alt={service.title} 
            style={{ width: '100%', borderRadius: 8 }} 
          />
        )}
        <p style={{ color: '#536471' }}>{service.description}</p>
        
        {service.packages && service.packages.length > 0 && (
          <div style={{ marginTop: 16 }}>
            <h4 style={{ marginBottom: 8 }}>Packages</h4>
            <div style={{ display: 'grid', gap: 8 }}>
              {service.packages.map((pkg) => (
                <div key={pkg.id} style={{
                  background: '#f8f9fa',
                  padding: 12,
                  borderRadius: 6,
                  border: '1px solid #e9ecef'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong>{pkg.name}</strong>
                    <span style={{ color: '#0a440a', fontWeight: 600 }}>
                      ${pkg.price} ({pkg.billing_type})
                    </span>
                  </div>
                  <div style={{ color: '#536471', fontSize: 14, marginTop: 4 }}>
                    {pkg.description}
                  </div>
                  <div style={{ color: '#6c757d', fontSize: 13, marginTop: 4 }}>
                    Delivery: {pkg.delivery_time} day{pkg.delivery_time !== 1 ? 's' : ''} • 
                    Revisions: {pkg.revision_count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 16 }}>
          {service.service_type_detail?.name && (
            <S.Badge>{service.service_type_detail.name}</S.Badge>
          )}
          {service.rating_average > 0 && (
            <S.Badge>★ {service.rating_average.toFixed(1)} ({service.rating_count})</S.Badge>
          )}
          {service.provider_profile && (
            <S.Badge>Provider: {service.provider_profile.user}</S.Badge>
          )}
          {service.booking_count > 0 && (
            <S.Badge>Booked {service.booking_count} time{service.booking_count !== 1 ? 's' : ''}</S.Badge>
          )}
        </div>
      </div>,
      { collapseSidebar: true }
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
            {services.map((service) => {
              const primaryImage = getPrimaryImage(service.images);
              return (
                <S.Card key={service.id} onClick={() => handleOpenDetail(service)} style={{ cursor: 'pointer' }}>
                  {primaryImage && <S.CardImage src={primaryImage} />}
                  <S.CardTitle>{service.title}</S.CardTitle>
                  <S.CardDesc>{service.description}</S.CardDesc>
                  
                  {service.packages && service.packages.length > 0 && (
                    <div style={{ margin: '8px 0' }}>
                      {service.packages.slice(0, 2).map((pkg) => (
                        <div key={pkg.id} style={{
                          background: '#f8f9fa',
                          padding: 8,
                          borderRadius: 4,
                          marginBottom: 4,
                          fontSize: 13
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>{pkg.name}</span>
                            <span style={{ color: '#0a440a', fontWeight: 500 }}>
                              ${pkg.price} ({pkg.billing_type})
                            </span>
                          </div>
                        </div>
                      ))}
                      {service.packages.length > 2 && (
                        <div style={{ color: '#6c757d', fontSize: 12, textAlign: 'center' }}>
                          +{service.packages.length - 2} more packages
                        </div>
                      )}
                    </div>
                  )}
                  
                  <S.BadgeRow>
                    {service.service_type_detail?.name && (
                      <S.Badge>{service.service_type_detail.name}</S.Badge>
                    )}
                    {service.rating_average > 0 && (
                      <S.Badge>★ {service.rating_average.toFixed(1)}</S.Badge>
                    )}
                    {service.booking_count > 0 && (
                      <S.Badge>Booked {service.booking_count}</S.Badge>
                    )}
                  </S.BadgeRow>
                  <S.CardFooter>
                    <button>Book Now</button>
                  </S.CardFooter>
                </S.Card>
              );
            })}
          </S.Grid>
        ) : (
          <div style={{ display: 'grid', gap: 12 }}>
            {services.map((service) => {
              const primaryImage = getPrimaryImage(service.images);
              return (
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
                  <div style={{ 
                    width: 96, 
                    height: 72, 
                    borderRadius: 6, 
                    background: '#f5f5f5', 
                    backgroundImage: primaryImage ? `url(${primaryImage})` : undefined, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                  }} />
                  <div>
                    <div style={{ fontWeight: 600, color: '#0f2540' }}>{service.title}</div>
                    <div style={{ color: '#536471', fontSize: 13 }}>{service.description}</div>
                    
                    {service.packages && service.packages.length > 0 && (
                      <div style={{ marginTop: 8, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                        {service.packages.slice(0, 2).map((pkg) => (
                          <div key={pkg.id} style={{
                            background: '#f8f9fa',
                            padding: '4px 8px',
                            borderRadius: 4,
                            fontSize: 12,
                            border: '1px solid #e9ecef'
                          }}>
                            {pkg.name} (${pkg.price})
                          </div>
                        ))}
                        {service.packages.length > 2 && (
                          <div style={{ 
                            background: '#f8f9fa',
                            padding: '4px 8px',
                            borderRadius: 4,
                            fontSize: 12,
                            border: '1px solid #e9ecef'
                          }}>
                            +{service.packages.length - 2} more
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                      {service.service_type_detail?.name && (
                        <S.Badge>{service.service_type_detail.name}</S.Badge>
                      )}
                      {service.rating_average > 0 && (
                        <S.Badge>★ {service.rating_average.toFixed(1)}</S.Badge>
                      )}
                      {service.booking_count > 0 && (
                        <S.Badge>Booked {service.booking_count}</S.Badge>
                      )}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    {service.packages && service.packages.length > 0 && (
                      <div style={{ fontSize: 12, color: '#6c757d', textAlign: 'right' }}>
                        Starting at
                      </div>
                    )}
                    <div style={{ fontWeight: 600, color: '#0a440a' }}>
                      ${service.packages && service.packages.length > 0 
                        ? Math.min(...service.packages.map(p => p.price)) 
                        : 'N/A'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )
      )}
      {!loading && services.length === 0 && <p>No services available at the moment.</p>}
    </S.Container>
  );
};

export default Services;