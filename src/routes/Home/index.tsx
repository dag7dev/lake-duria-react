import { useAuthenticator } from '@aws-amplify/ui-react';
import { getGiftsList } from '../../services/api/getGiftsList';

const Home = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  console.log(getGiftsList());
  return (
    <main>
      <h1>Hello {user?.username}</h1>
    </main>
  );
};

export default Home;
