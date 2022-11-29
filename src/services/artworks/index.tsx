import axios from 'axios';
import {ArtWorkDataResult} from './interface';

const getArtWorks = async () => {
  const {
    data: {data},
  } = await axios.get<ArtWorkDataResult>('artworks');
  console.log(data);
  return data;
};

const getArtWorkByQuery = async (query: string) => {
  const {
    data: {data},
  } = await axios.get<ArtWorkDataResult>(
    'artworks/search?fields=image_id,id,title,thumbnail,artist_display,artist_title,exhibition_history&q=' +
      query,
  );
  return data;
};

export default {
  getArtWorks,
  getArtWorkByQuery,
};
