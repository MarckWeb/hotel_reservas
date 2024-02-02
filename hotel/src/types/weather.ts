
export interface Location {
   latitude: number;
   longitude: number;
}

export interface WetherData {
   main: {
      feels_like: number;
      humidity: number;
      pressure: number;
      temp: number;
      temp_max: number;
      temp_min: number;
   };

   weather: Array<{
      description: string
      icon: string
      id: number
      main: string
   }>;
}

