import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { fetchPostings, fetchPostingBids } from '../../api/posting';
import { refreshToken } from '../../dispatchers/authentication';
import ViewToggle, { ViewMode } from '../../components/ViewToggle';
import { useLayout } from '../../contexts/LayoutContext';
import { Posting, PostingWithRelations } from '../../types/api/posting';



const Postings = () => {
  const [postings, setPostings] = useState<PostingWithRelations[]>([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<ViewMode>('grid');
  const { openDetailPanel } = useLayout();
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const getTimeRemaining = (endDate: string) => {
    const now = new Date();
    const end = new Date(endDate);
    const diff = end.getTime() - now.getTime();
    
    if (diff <= 0) return 'Ended';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) return `${days}d ${hours}h left`;
    return `${hours}h left`;
  };

  useEffect(() => {
    const fetchWithAuth = async () => {
      try {
        const data = await fetchPostings();
        const postingsWithRelations = await Promise.all(
          data.map(async (posting: Posting) => {
            try {
              const bids = await fetchPostingBids(Number(posting.id));
              return { 
                ...posting, 
                bids,
                current_price: posting.current_price || posting.starting_price
              };
            } catch (error) {
              console.error(`Error fetching bids for posting ${posting.id}:`, error);
              return { 
                ...posting, 
                bids: [],
                current_price: posting.current_price || posting.starting_price
              };
            }
          })
        );
        setPostings(postingsWithRelations);
      } catch (error: any) {
        if (error.response?.status === 401) {
          try {
            await refreshToken()();
            const data = await fetchPostings();
            setPostings(data);
          } catch (refreshError) {
            navigate('/sign-in');
          }
        } else {
          console.error('Error fetching postings:', error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchWithAuth();
  }, [navigate]);

  const handleOpenDetail = async (posting: PostingWithRelations) => {
    let detailedPosting = posting;
    if (!posting.bids) {
      try {
        const bids = await fetchPostingBids(Number(posting.id));
        detailedPosting = { ...posting, bids };
      } catch (error) {
        console.error('Error fetching bids:', error);
      }
    }

    openDetailPanel(
      <S.DetailContainer>
        <S.DetailTitle>{detailedPosting.title}</S.DetailTitle>
        <S.DetailDescription>{detailedPosting.description}</S.DetailDescription>
        
        <S.DetailSection>
          <S.PriceRow>
            <S.PriceLabel>Current Price:</S.PriceLabel>
            <S.CurrentPrice>{formatPrice(detailedPosting.current_price)}</S.CurrentPrice>
          </S.PriceRow>
          
          <S.PriceRow>
            <S.PriceLabel>Starting Price:</S.PriceLabel>
            <S.PriceValue>{formatPrice(detailedPosting.starting_price)}</S.PriceValue>
          </S.PriceRow>
          
          {detailedPosting.buy_now_price > 0 && (
            <S.PriceRow>
              <S.PriceLabel>Buy Now Price:</S.PriceLabel>
              <S.BuyNowPrice>{formatPrice(detailedPosting.buy_now_price)}</S.BuyNowPrice>
            </S.PriceRow>
          )}
          
          <S.PriceRow>
            <S.PriceLabel>Bids:</S.PriceLabel>
            <S.PriceValue>{detailedPosting.bid_count} bid{detailedPosting.bid_count !== 1 ? 's' : ''}</S.PriceValue>
          </S.PriceRow>
          
          <S.PriceRow>
            <S.PriceLabel>Ends:</S.PriceLabel>
            <S.TimeRemaining status={detailedPosting.status}>
              {formatDate(detailedPosting.end_date)} ({getTimeRemaining(detailedPosting.end_date)})
            </S.TimeRemaining>
          </S.PriceRow>
        </S.DetailSection>

        <S.SellerSection>
          <S.SectionTitle>Seller Information</S.SectionTitle>
          <S.SellerInfo>
            <S.SellerAvatar>
              {detailedPosting.seller.username?.charAt(0).toUpperCase() || 'U'}
            </S.SellerAvatar>
            <S.SellerDetails>
              <S.SellerName>{detailedPosting.seller.username}</S.SellerName>
              <S.SellerJoinDate>
                Member since {formatDate(detailedPosting.created_at)}
              </S.SellerJoinDate>
            </S.SellerDetails>
          </S.SellerInfo>
          
          <S.SellerStats>
            <S.StatItem>
              <S.StatValue>4.8★</S.StatValue>
              <S.StatLabel>Rating</S.StatLabel>
            </S.StatItem>
            <S.StatItem>
              <S.StatValue>127</S.StatValue>
              <S.StatLabel>Reviews</S.StatLabel>
            </S.StatItem>
            <S.StatItem>
              <S.StatValue>98%</S.StatValue>
              <S.StatLabel>Positive</S.StatLabel>
            </S.StatItem>
          </S.SellerStats>
        </S.SellerSection>

        <S.DetailSection>
          <S.SectionTitle>Item Details</S.SectionTitle>
          <S.ItemDetailsGrid>
            <S.ItemDetail>
              <S.DetailLabel>Condition:</S.DetailLabel>
              <S.DetailValue>{detailedPosting.condition}</S.DetailValue>
            </S.ItemDetail>
            <S.ItemDetail>
              <S.DetailLabel>Brand:</S.DetailLabel>
              <S.DetailValue>{detailedPosting.brand || 'N/A'}</S.DetailValue>
            </S.ItemDetail>
            <S.ItemDetail>
              <S.DetailLabel>Model:</S.DetailLabel>
              <S.DetailValue>{detailedPosting.model || 'N/A'}</S.DetailValue>
            </S.ItemDetail>
            <S.ItemDetail>
              <S.DetailLabel>Year:</S.DetailLabel>
              <S.DetailValue>{detailedPosting.year || 'N/A'}</S.DetailValue>
            </S.ItemDetail>
            <S.ItemDetail>
              <S.DetailLabel>Location:</S.DetailLabel>
              <S.DetailValue>{detailedPosting.location}</S.DetailValue>
            </S.ItemDetail>
          </S.ItemDetailsGrid>
        </S.DetailSection>

        <S.BadgeContainer>
          <S.Badge>{detailedPosting.category.name}</S.Badge>
          <S.Badge>{detailedPosting.posting_type}</S.Badge>
          <S.Badge>{detailedPosting.status}</S.Badge>
          {detailedPosting.allow_negotiation && <S.Badge>Negotiable</S.Badge>}
          {detailedPosting.auto_extend && <S.Badge>Auto-extend</S.Badge>}
        </S.BadgeContainer>
      </S.DetailContainer>,
      { collapseSidebar: true }
    );
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Auction Postings</S.Title>
        <ViewToggle mode={mode} onChange={setMode} />
      </S.Header>
      
      {loading ? (
        <S.Loading>Loading...</S.Loading>
      ) : (
        mode === 'grid' ? (
          <S.Grid>
            {postings.map((posting) => (
              <S.Card key={posting.id} onClick={() => handleOpenDetail(posting)}>
                <S.CardTitle>{posting.title}</S.CardTitle>
                <S.CardDescription>{posting.description}</S.CardDescription>
                
                <S.PriceContainer>
                  <S.PriceRow>
                    <S.CurrentPrice>{formatPrice(posting.current_price)}</S.CurrentPrice>
                    <S.TimeRemaining status={posting.status}>
                      {getTimeRemaining(posting.end_date)}
                    </S.TimeRemaining>
                  </S.PriceRow>
                  
                  <S.AuctionInfo>
                    <S.InfoText>{posting.bid_count} bid{posting.bid_count !== 1 ? 's' : ''}</S.InfoText>
                    <S.InfoText>Ends: {formatDate(posting.end_date)}</S.InfoText>
                  </S.AuctionInfo>
                </S.PriceContainer>
                
                <S.SellerInfoCompact>
                  <S.InfoText>Seller: {posting.seller.username}</S.InfoText>
                  <S.InfoText>{posting.location}</S.InfoText>
                </S.SellerInfoCompact>
                
                <S.BadgeRow>
                  <S.Badge>{posting.category.name}</S.Badge>
                  <S.Badge>{posting.condition}</S.Badge>
                  {posting.allow_negotiation && <S.Badge>Negotiable</S.Badge>}
                </S.BadgeRow>
                
                <S.CardFooter>
                  <S.BidButton>Place Bid</S.BidButton>
                </S.CardFooter>
              </S.Card>
            ))}
          </S.Grid>
        ) : (
          <S.ListContainer>
            {postings.map((posting) => (
              <S.ListItem key={posting.id} onClick={() => handleOpenDetail(posting)}>
                <S.ListContent>
                  <S.ListTitle>{posting.title}</S.ListTitle>
                  <S.ListDescription>{posting.description}</S.ListDescription>
                  
                  <S.BadgeRow>
                    <S.Badge>{posting.category.name}</S.Badge>
                    <S.Badge>{posting.condition}</S.Badge>
                    {posting.allow_negotiation && <S.Badge>Negotiable</S.Badge>}
                  </S.BadgeRow>
                  
                  <S.ListInfo>
                    <S.InfoText>Seller: {posting.seller.username}</S.InfoText>
                    <S.InfoText>{posting.location}</S.InfoText>
                    <S.InfoText>{posting.bid_count} bid{posting.bid_count !== 1 ? 's' : ''}</S.InfoText>
                  </S.ListInfo>
                </S.ListContent>
                
                <S.ListSidebar>
                  <S.CurrentPrice>{formatPrice(posting.current_price)}</S.CurrentPrice>
                  <S.TimeRemaining status={posting.status}>
                    {getTimeRemaining(posting.end_date)}
                  </S.TimeRemaining>
                  <S.InfoText>Ends: {formatDate(posting.end_date)}</S.InfoText>
                  <S.BidButtonSmall>Bid Now</S.BidButtonSmall>
                </S.ListSidebar>
              </S.ListItem>
            ))}
          </S.ListContainer>
        )
      )}
      
      {!loading && postings.length === 0 && (
        <S.EmptyState>No postings available at the moment.</S.EmptyState>
      )}
    </S.Container>
  );
};

export default Postings;