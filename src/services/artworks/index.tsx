import axios from 'axios';
import {ArtWorkDataResult} from './interface';

const getArtWorks = async () => {
  const {
    data: {data},
  } = await axios.get<ArtWorkDataResult>('artworks');
  return data;
};

const getArtWorkByQuery = async (query: string) => {
  const {
    data: {data},
  } = await axios.get<ArtWorkDataResult>(
    'artworks/search?fields=image_id,id,title,thumbnail&q=' + query,
  );
  return data;
};

export default {
  getArtWorks,
  getArtWorkByQuery,
};
