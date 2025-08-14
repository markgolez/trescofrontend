import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 64px);
  padding: 24px;
`;

const Panel = styled.div`
  background: #ffffff;
  border: 1px solid #efeff4;
  border-radius: 8px;
  padding: 24px;
  max-width: 520px;
  width: 100%;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
`;

const Title = styled.h2`
  margin: 0 0 12px;
  color: #0f2540;
`;

const Message = styled.p`
  color: #536471;
`;

const Button = styled.button`
  margin-top: 16px;
  padding: 10px 16px;
  background: #66bb6a;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

const Activation = () => {
  const { uid, token } = useParams();
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'submitting'>('idle');
  const navigate = useNavigate();

  useEffect(() => {
    // If route params provided, auto-submit
    if (uid && token) {
      handleActivate(uid, token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid, token]);

  const handleActivate = async (u: string, t: string) => {
    try {
      setStatus('submitting');
      await axios.post(`${BASE_URL}/api/v1/auth/users/activation/`, { uid: u, token: t });
      setStatus('success');
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <Container>
      <Panel>
        <Title>Activate Your Account</Title>
        {status === 'idle' && (
          <Message>Click the activation link sent to your email. If you have a link, open it here to activate automatically.</Message>
        )}
        {status === 'submitting' && <Message>Activating your account...</Message>}
        {status === 'success' && (
          <>
            <Message>Your account has been activated successfully. You can now sign in.</Message>
            <Button onClick={() => navigate('/sign-in')}>Go to Sign In</Button>
          </>
        )}
        {status === 'error' && (
          <>
            <Message>Activation failed. The link may be invalid or expired.</Message>
            <Button onClick={() => navigate('/sign-in')}>Back to Sign In</Button>
          </>
        )}
      </Panel>
    </Container>
  );
};

export default Activation;


