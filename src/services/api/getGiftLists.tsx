import { get } from 'aws-amplify/api';

export const getGiftsList = (username: string) => {
  get({
    apiName: 'beta',
    path: `/users/${username}/giftlists`,
  }).response;
}