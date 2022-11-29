import axios from 'axios';
import {ArtWorkDataResult} from './interface';

const getArtWorks = async () => {
  const {
    data: {data},
  } = await axios.get<ArtWorkDataResult>('artworks');
  return data;
};

export default {
  getArtWorks,
};
