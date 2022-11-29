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
}

export interface ArtWorkDataResult {
  data: Array<ArtWorkInterface>;
}
