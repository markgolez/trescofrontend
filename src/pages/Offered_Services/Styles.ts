import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  height: 100%;
`; 

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #0f2540;
`;

export const CardDesc = styled.p`
  margin: 0;
  font-size: 14px;
  color: #536471;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardImage = styled.div<{ src?: string }>`
  width: 100%;
  height: 140px;
  border-radius: 6px;
  background: ${({ src }) => (src ? `url(${src}) center/cover no-repeat` : '#f5f5f5')};
`;

export const BadgeRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Badge = styled.span`
  background: #e3f2e4;
  color: #138813;
  border: 1px solid #c8e6c9;
  border-radius: 999px;
  padding: 2px 8px;
  font-size: 12px;
`;

export const CardFooter = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.div`
  color: #0a440a;
  font-weight: 600;
`;