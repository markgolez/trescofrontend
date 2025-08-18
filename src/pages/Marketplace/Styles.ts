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
  margin-bottom: 12px;
`;

export const BadgeRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
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
  padding-top: 12px;
  border-top: 1px solid #eee;
`;

export const Price = styled.div`
  color: #0a440a;
  font-weight: 600;
  font-size: 16px;
`;

export const LoadingText = styled.div`
  color: #536471;
  font-size: 16px;
  text-align: center;
  padding: 40px;
`;

export const ErrorText = styled.div`
  color: #d32f2f;
  font-size: 16px;
  text-align: center;
  padding: 40px;
`;



// import styled from 'styled-components';

// export const Container = styled.div`
//   padding: 2rem;
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// export const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 1.5rem;
//   margin-top: 2rem;
// `;

// export const Card = styled.div`
//   background: #fff;
//   border-radius: 8px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   transition: transform 0.2s ease, box-shadow 0.2s ease;

//   &:hover {
//     transform: translateY(-4px);
//     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//   }
// `;

// export const CardTitle = styled.h3`
//   font-size: 1rem;
//   font-weight: 600;
//   color: #0f2540;
//   padding: 1rem;
//   margin: 0;
//   border-bottom: 1px solid #e8f4fa;
// `;

// export const CardDesc = styled.div`
//   padding: 1rem;
//   color: #536471;
//   font-size: 0.9rem;
// `;

// export const CardImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
// `;

// export const Price = styled.span`
//   color: #66bb6a;
//   font-weight: bold;
//   font-size: 1.1rem;
// `;

// export const Loading = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 200px;
//   color: #66bb6a;
//   font-size: 1.2rem;
// `;

// export const ErrorMessage = styled.div`
//   color: #ff6b6b;
//   padding: 1rem;
//   background: #ffecec;
//   border-radius: 4px;
//   margin-top: 1rem;
// `;
