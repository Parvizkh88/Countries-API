export interface CountryT{
    region: string
    independent:boolean
    area:number
   }

   export interface CountriesState {
       countries:CountryT[]
       isLoading:boolean
       isError: boolean
       message:string
   }