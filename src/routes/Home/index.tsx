import { useAuthenticator } from '@aws-amplify/ui-react';

const Home = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  return (
    <main>
      <h1>Hello {user?.username}</h1>
    </main>
  );
};

export default Home;
