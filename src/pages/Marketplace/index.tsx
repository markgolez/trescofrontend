import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import * as api from '../../api/marketplace';
import { refreshToken } from '../../dispatchers/authentication';
import ViewToggle, { ViewMode } from '../../components/ViewToggle';
import { useLayout } from '../../contexts/LayoutContext';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string | number;
  category: {
    id: number;
    name: string;
  };
  images: Array<{
    id: number;
    image_url: string;
  }>;
}

const formatPrice = (price: string | number): string => {
  const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
  if (isNaN(numericPrice)) {
    return 'Price not available';
  }
  return `$${numericPrice.toFixed(2)}`;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<ViewMode>('grid');
  const { setSidebarCollapsed, openDetailPanel } = useLayout();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWithAuth = async () => {
      try {
        const data = await api.fetchProducts();
        setProducts(data);
      } catch (error: any) {
        if (error.response && error.response.status === 401) {
          try {
            await refreshToken()();
            const data = await api.fetchProducts();
            setProducts(data);
          } catch (refreshError) {
            navigate('/sign-in');
          }
        } else {
          console.error('Error fetching products:', error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchWithAuth();
  }, [navigate]);

  const handleOpenDetail = (product: Product) => {
    openDetailPanel(
      <div>
        <h3>{product.name}</h3>
        {product.images[0]?.image_url && (
          <img 
            src={product.images[0].image_url} 
            alt={product.name} 
            style={{ width: '100%', borderRadius: 8 }} 
          />
        )}
        <p style={{ color: '#536471' }}>{product.description}</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {product.category && <S.Badge>{product.category.name}</S.Badge>}
        </div>
        <div style={{ marginTop: 12, fontWeight: 600, color: '#0a440a' }}>
          {formatPrice(product.price)}
        </div>
      </div>,
      { collapseSidebar: true }
    );
  };

  return (
    <S.Container>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Marketplace Products</h2>
        <ViewToggle mode={mode} onChange={setMode} />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        mode === 'grid' ? (
          <S.Grid>
            {products.map((product) => (
              <S.Card key={product.id} onClick={() => handleOpenDetail(product)} style={{ cursor: 'pointer' }}>
                <S.CardImage src={product.images[0]?.image_url} />
                <S.CardTitle>{product.name}</S.CardTitle>
                <S.CardDesc>{product.description}</S.CardDesc>
                <S.BadgeRow>
                  {product.category && <S.Badge>{product.category.name}</S.Badge>}
                </S.BadgeRow>
                <S.CardFooter>
                  <S.Price>{formatPrice(product.price)}</S.Price>
                  <button>View Details</button>
                </S.CardFooter>
              </S.Card>
            ))}
          </S.Grid>
        ) : (
          <div style={{ display: 'grid', gap: 12 }}>
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => handleOpenDetail(product)}
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
                  background: product.images[0]?.image_url 
                    ? `url(${product.images[0].image_url}) center/cover no-repeat` 
                    : '#f5f5f5' 
                }} />
                <div>
                  <div style={{ fontWeight: 600, color: '#0f2540' }}>{product.name}</div>
                  <div style={{ color: '#536471', fontSize: 13 }}>{product.description}</div>
                  <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                    {product.category && <S.Badge>{product.category.name}</S.Badge>}
                  </div>
                </div>
                <div style={{ fontWeight: 600, color: '#0a440a' }}>
                  {formatPrice(product.price)}
                </div>
              </div>
            ))}
          </div>
        )
      )}
      {!loading && products.length === 0 && <p>No products available at the moment.</p>}
    </S.Container>
  );
};

export default Products;


// import { useEffect, useState } from 'react';
// import * as S from './Styles';
// import { useLayout } from '../../contexts/LayoutContext';

// interface Product {
//   id: number;
//   title: string;
//   price: number;
// }

// const Marketplace = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const { openDetailPanel } = useLayout();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         // TODO: replace with real API call
//         const mock: Product[] = [
//           { id: 1, title: 'Product A', price: 19.99 },
//           { id: 2, title: 'Product B', price: 29.99 },
//         ];
//         setProducts(mock);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <S.Container>
//       <h2>Marketplace</h2>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <S.Grid>
//           {products.map((p) => (
//             <S.Card key={p.id} onClick={() => openDetailPanel((
//               <div>
//                 <h3>{p.title}</h3>
//                 <div>Price: ${p.price.toFixed(2)}</div>
//               </div>
//             ))} style={{ cursor: 'pointer' }}>
//               <S.CardTitle>{p.title}</S.CardTitle>
//               <S.CardDesc>${p.price.toFixed(2)}</S.CardDesc>
//             </S.Card>
//           ))}
//         </S.Grid>
//       )}
//     </S.Container>
//   );
// };

// export default Marketplace;