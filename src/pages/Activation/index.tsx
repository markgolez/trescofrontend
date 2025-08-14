import { FormEvent, useEffect, useMemo, useState } from 'react';
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

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #efeff4;
  border-radius: 6px;
  margin-top: 8px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

const Activation = () => {
  const { uid, token } = useParams();
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'submitting'>('idle');
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [linkInput, setLinkInput] = useState<string>('');
  const [uidInput, setUidInput] = useState<string>('');
  const [tokenInput, setTokenInput] = useState<string>('');
  const [resendEmail, setResendEmail] = useState<string>('');

  const parsedFromLink = useMemo(() => {
    if (!linkInput) return { uid: '', token: '' };
    try {
      // Accept full URLs like http(s)://<host>/activate/<uid>/<token>
      const url = new URL(linkInput);
      const parts = url.pathname.split('/').filter(Boolean);
      const actIdx = parts.findIndex((p) => p.toLowerCase() === 'activate');
      if (actIdx >= 0 && parts.length >= actIdx + 3) {
        return { uid: parts[actIdx + 1] || '', token: parts[actIdx + 2] || '' };
      }
    } catch {
      // Fallback: try to parse as path only
      const parts = linkInput.split('/').filter(Boolean);
      const actIdx = parts.findIndex((p) => p.toLowerCase() === 'activate');
      if (actIdx >= 0 && parts.length >= actIdx + 3) {
        return { uid: parts[actIdx + 1] || '', token: parts[actIdx + 2] || '' };
      }
    }
    return { uid: '', token: '' };
  }, [linkInput]);

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
      await axios.post(`${BASE_URL}/api/v1/auth/users/activation/`, { uid: u, token: t }, {
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      });
      setStatus('success');
      setErrorMessage('');
    } catch (e) {
      setStatus('error');
      const msg = (e as any)?.response?.data?.detail || 'Activation failed. The link may be invalid or expired.';
      setErrorMessage(msg);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const finalUid = uidInput || parsedFromLink.uid;
    const finalToken = tokenInput || parsedFromLink.token;
    if (!finalUid || !finalToken) {
      setErrorMessage('Please provide both uid and token, or paste a valid activation link.');
      setStatus('error');
      return;
    }
    handleActivate(finalUid, finalToken);
  };

  const handleResend = async () => {
    if (!resendEmail) {
      setErrorMessage('Please enter your email to resend the activation.');
      setStatus('error');
      return;
    }
    try {
      setStatus('submitting');
      await axios.post(`${BASE_URL}/api/v1/auth/users/resend_activation/`, { email: resendEmail }, {
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      });
      setStatus('idle');
      setErrorMessage('Activation email resent. Please check your inbox and spam folder.');
    } catch (e) {
      setStatus('error');
      const msg = (e as any)?.response?.data?.detail || 'Failed to resend activation email.';
      setErrorMessage(msg);
    }
  };

  return (
    <Container>
      <Panel>
        <Title>Activate Your Account</Title>
        {status === 'idle' && (
          <Message>Click the activation link sent to your email. Or paste the link / uid+token below to activate.</Message>
        )}
        {status === 'submitting' && <Message>Activating your account...</Message>}
        {status === 'success' && (
          <>
            <Message>Your account has been activated successfully. You can now sign in.</Message>
            <Button onClick={() => navigate('/sign-in')}>Go to Sign In</Button>
          </>
        )}
        {status === 'error' && <Message>{errorMessage}</Message>}

        {status !== 'success' && (
          <form onSubmit={onSubmit} style={{ textAlign: 'left', marginTop: 12 }}>
            <label>Activation Link</label>
            <Input
              placeholder="Paste activation link (e.g., http://localhost:8000/activate/uid/token)"
              value={linkInput}
              onChange={(e) => setLinkInput(e.target.value)}
            />
            <Row>
              <div>
                <label>UID</label>
                <Input value={uidInput || parsedFromLink.uid} onChange={(e) => setUidInput(e.target.value)} />
              </div>
              <div>
                <label>Token</label>
                <Input value={tokenInput || parsedFromLink.token} onChange={(e) => setTokenInput(e.target.value)} />
              </div>
            </Row>
            <Button type="submit" style={{ width: '100%' }}>Activate</Button>
          </form>
        )}

        {status !== 'success' && (
          <div style={{ marginTop: 16, textAlign: 'left' }}>
            <label>Resend Activation Email</label>
            <Input placeholder="Email" value={resendEmail} onChange={(e) => setResendEmail(e.target.value)} />
            <Button type="button" onClick={handleResend} style={{ width: '100%' }}>Resend</Button>
          </div>
        )}
      </Panel>
    </Container>
  );
};

export default Activation;


