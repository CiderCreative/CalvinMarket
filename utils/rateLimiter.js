import pLimit from 'p-limit';
import { getImageURL } from './getImage';

const limit = pLimit(1); // Create a global request throttling limit

export var apiLimiter = {
  getImage: (keyNames = "") => {
    return limit(async () => {
      return getImageURL(keyNames);
    });
  },
};
