export interface CountryT {
    // readonly capital?: string[];
    // readonly cca3: string;
    readonly flags: { png: string; svg: string };
    readonly languages: { [key: string]: string };
    
    readonly name: {
      common: string;
      official:string
      // official: string;
      // nativeName: { [key: string]: { official: string; common: string } };
    };
    readonly population: number;
    readonly region: string;
    // readonly tld?: string[];
    countries:CountryT[]
    data:CountryT[]
  }

   export interface CountriesState {
       countries:CountryT[]
       countrySearched:CountryT[]
       isLoading:boolean
       isError: boolean
       message:string
          }
   export interface FavoritesState {
             favoriteCountries:CountryT[]
   }