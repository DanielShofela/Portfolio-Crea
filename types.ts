
export enum PortfolioItemType {
  POSTER = 'poster',
  VIDEO = 'video',
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  type: PortfolioItemType;
  thumbnailUrl: string;
  contentUrl: string; // URL for full image or video embed
}
