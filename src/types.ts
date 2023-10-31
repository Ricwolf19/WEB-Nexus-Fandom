// Define the character object structure
export type Character = {
  id: number;
  name: string;
  description: string | null;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
  }
  series: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
  }
};

// Define the game object structure
export type Game = {
  name: string;
  background_image: string;
  released: string;
  rating: number;
  platforms: {
    platform: {
      name: string;
    };
  }[];
};
