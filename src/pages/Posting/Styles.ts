import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  margin: 0;
  color: #0f2540;
  font-size: 24px;
`;

export const Loading = styled.div`
  text-align: center;
  padding: 40px;
  color: #6c757d;
`;

export const EmptyState = styled.p`
  text-align: center;
  color: #6c757d;
  padding: 40px;
`;

// Grid View Styles
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
  gap: 12px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #0f2540;
  line-height: 1.3;
`;

export const CardDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: #536471;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`;

export const PriceContainer = styled.div`
  margin: 8px 0;
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

export const AuctionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #6c757d;
`;

export const SellerInfoCompact = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #6c757d;
`;

export const InfoText = styled.span`
  font-size: 13px;
  color: #6c757d;
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
  white-space: nowrap;
`;

export const CardFooter = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BidButton = styled.button`
  background: #0a440a;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background: #083008;
  }
`;

// List View Styles
export const ListContainer = styled.div`
  display: grid;
  gap: 12px;
`;

export const ListItem = styled.div`
  background: #fff;
  border: 1px solid #efeff4;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  align-items: center;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ListTitle = styled.div`
  font-weight: 600;
  color: #0f2540;
  font-size: 16px;
  line-height: 1.3;
`;

export const ListDescription = styled.div`
  color: #536471;
  font-size: 14px;
  line-height: 1.4;
`;

export const ListInfo = styled.div`
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: #6c757d;
`;

export const ListSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

export const BidButtonSmall = styled(BidButton)`
  padding: 6px 12px;
  font-size: 12px;
  margin-top: 8px;
`;

// Detail Panel Styles
export const DetailContainer = styled.div`
  padding: 16px;
`;

export const DetailTitle = styled.h3`
  margin: 0 0 8px 0;
  color: #0f2540;
  font-size: 18px;
`;

export const DetailDescription = styled.p`
  margin: 0 0 16px 0;
  color: #536471;
  font-size: 14px;
  line-height: 1.4;
`;

export const DetailSection = styled.div`
  margin-bottom: 16px;
`;

export const SectionTitle = styled.h4`
  margin: 0 0 8px 0;
  color: #0f2540;
  font-size: 16px;
`;

export const PriceLabel = styled.span`
  font-weight: 600;
  color: #0f2540;
`;

export const PriceValue = styled.span`
  color: #6c757d;
`;

export const CurrentPrice = styled.span`
  color: #0a440a;
  font-weight: 600;
  font-size: 18px;
`;

export const BuyNowPrice = styled.span`
  color: #dc3545;
  font-weight: 600;
`;

interface TimeRemainingProps {
  status: string;
}

export const TimeRemaining = styled.span<TimeRemainingProps>`
  color: ${props => props.status === 'active' ? '#dc3545' : '#6c757d'};
  font-weight: 600;
  font-size: 12px;
`;

export const SellerSection = styled.div`
  background: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  margin-bottom: 16px;
`;

export const SellerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

export const SellerAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #6c757d;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 18px;
`;

export const SellerDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SellerName = styled.div`
  font-weight: 600;
  color: #0f2540;
`;

export const SellerJoinDate = styled.div`
  color: #6c757d;
  font-size: 14px;
`;

export const SellerStats = styled.div`
  display: flex;
  gap: 16px;
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatValue = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: #0f2540;
`;

export const StatLabel = styled.div`
  color: #6c757d;
  font-size: 12px;
`;

export const ItemDetailsGrid = styled.div`
  display: grid;
  gap: 8px;
`;

export const ItemDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DetailLabel = styled.span`
  color: #6c757d;
`;

export const DetailValue = styled.span`
  font-weight: 600;
  color: #0f2540;
`;

export const BadgeContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 16px;
`;