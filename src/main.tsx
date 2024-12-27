import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './routes/Home';
import Layout from './components/Layout';
import GiftList from './routes/GiftList';
import Gift from './routes/Gift';
import GiftListById from './routes/GiftListById';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify, ResourcesConfig } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports.json';
import Login from './routes/Login';

Amplify.configure(awsExports as ResourcesConfig);

createRoot(document.getElementById('root')!).render(
  <Authenticator.Provider>
    <BrowserRouter>
      <Routes>
        <Route index path='/login' element={<Login />} />
        <Route path='/app' element={<Layout />}>
          <Route path='home' element={<Home />} />
          <Route path='giftlist' element={<GiftList />}>
            <Route path=':id' element={<GiftListById />} />
          </Route>
          <Route path='gift' element={<Gift />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Authenticator.Provider>,
);
