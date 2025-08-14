import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.section`
  padding: 48px 24px;
  background: #ffffff;
  border-bottom: 1px solid #efeff4;
`;
const Hero = styled(Section)`
  background: linear-gradient(135deg, #e3f2e4 0%, #ffffff 60%);
  text-align: center;
`;
const H1 = styled.h1` margin: 0 0 12px; color: #0f2540; `;
const P = styled.p` color: #536471; margin: 0 auto 16px; max-width: 720px; `;
const CTA = styled(Link)`
  display: inline-block;
  padding: 12px 18px;
  background: #66bb6a;
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
`;
const Card = styled.div`
  background: #ffffff;
  border: 1px solid #efeff4;
  border-radius: 8px;
  padding: 16px;
`;

const Home = () => {
  return (
    <div>
      <Hero>
        <H1>Tresco — One platform, many possibilities</H1>
        <P>Discover services, products, and social moments. Manage your wallet and postings in one place.</P>
        <CTA to="/create-account">Get Started</CTA>
      </Hero>

      <Section>
        <H1>Quick Actions</H1>
        <Grid>
          <Card><h3>Post a Request</h3><P>Share what you need and get bids fast.</P></Card>
          <Card><h3>Browse Services</h3><P>Find trusted providers and book with confidence.</P></Card>
          <Card><h3>Open Wallet</h3><P>Track balances, deposits, and withdrawals.</P></Card>
        </Grid>
      </Section>

      <Section>
        <H1>About Us</H1>
        <P>Tresco connects people and services through a unified marketplace and social feed.</P>
        <CTA to="/about">Learn More</CTA>
      </Section>

      <Section>
        <H1>Testimonials</H1>
        <Grid>
          <Card>“Seamless experience and great providers.”</Card>
          <Card>“My go-to for getting tasks done.”</Card>
          <Card>“The wallet and marketplace just work.”</Card>
        </Grid>
      </Section>

      <Section>
        <H1>How it Works</H1>
        <Grid>
          <Card>1. Create an account</Card>
          <Card>2. Browse or post</Card>
          <Card>3. Book or bid</Card>
          <Card>4. Pay and review</Card>
        </Grid>
      </Section>
    </div>
  );
};

export default Home;



