export interface IHouse {
    $key: string;
    id: number;
    lat: number;
    lng: number;
    owner: string;
    city: string;
    location: string;
    address: string;
    bedrooms: number;
    bathrooms: number;
    price: number;
    area: number;
    type: string;
    purpose: string;
    imgUrl: string;
    imgAlt: string;
    additionalDetails: string;
}

