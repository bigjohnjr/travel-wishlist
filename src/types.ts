export interface Country {
    name: {
        common: string;
    };
    capital: string,
    currencies: {
        CLP : {
            name: string,
        }
    }
    region: string,
    flags: {
        png: string;
        alt: string;
    }
    population: number;
}
