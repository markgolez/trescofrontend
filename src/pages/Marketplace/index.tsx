import { useEffect, useState } from 'react';
import * as S from './Styles';

interface Product {
  id: number;
  title: string;
  price: number;
}

const Marketplace = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // TODO: replace with real API call
        const mock: Product[] = [
          { id: 1, title: 'Product A', price: 19.99 },
          { id: 2, title: 'Product B', price: 29.99 },
        ];
        setProducts(mock);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <S.Container>
      <h2>Marketplace</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <S.Grid>
          {products.map((p) => (
            <S.Card key={p.id}>
              <S.CardTitle>{p.title}</S.CardTitle>
              <S.CardDesc>${p.price.toFixed(2)}</S.CardDesc>
            </S.Card>
          ))}
        </S.Grid>
      )}
    </S.Container>
  );
};

export default Marketplace;