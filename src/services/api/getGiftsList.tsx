import { get } from 'aws-amplify/api';

export const getGiftsList = () =>
  get({
    apiName: 'beta',
    path: '/giftlist',
  }).response;
