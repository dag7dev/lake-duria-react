import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  return (
    <Authenticator signUpAttributes={['preferred_username', 'email']}>
      {({ user }) => {
        if (user) navigate('/app/home');
        return <></>;
      }}
    </Authenticator>
  );
};

export default Login;
