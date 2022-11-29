export interface ArtWorkInterface {
  id: number;
  api_model: string;
  api_link: string;
  is_boosted: boolean;
  title: string;
  alt_titles: string | null;
  image_id: string;
  thumbnail: {
    alt_text: string;
  };
  artist_display: string;
  artist_title: string;
  exhibition_history: string;
}

export interface ArtWorkDataResult {
  data: Array<ArtWorkInterface>;
}
