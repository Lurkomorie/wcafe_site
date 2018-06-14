export interface IResults {
    id: number;
    rent: object;
    sale: object;
    business_sale: object;
    images: object;
    processed: boolean;
    object_num: number;
    wcafe: string;
    datetime_created: string;
    datetime_updated: string;
    address_num: string;
    is_supergo: boolean;
    is_goodview: boolean;
    district_hidden: boolean;
    title: string;
    is_open: boolean;
    scheduling_start: number;
    scheduling_end: number;
    square: number;
    square_kitchen: number;
    square_room: number;
    square_1: number;
    square_2: number;
    square_3: number;
    square_4: number;
    square_5: number;
    power: number;
    has_gas: boolean;
    ceil_height: number;
    deep_of_floor: number;
    deleted: boolean;
    promo_address: string;
    no_promo: boolean;
    video_link: string;
    location: object;
    owner: object;
    owner_busines: boolean;
    district: object;
    floor: object;
    entrance: object;
    format: object;
    types: object;
};