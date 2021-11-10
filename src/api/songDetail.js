import { axiosInstance } from './config';
export const getSongDetail = (id) => {
  return axiosInstance.get('/album', {
    params: {
      id: id,
    },
  });
};
