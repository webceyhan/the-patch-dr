export interface Photo {
    id?: string;
    alt?: string;
    uri?: string;
}

export interface Link {
    icon?: string;
    label?: string;
    href?: string;
    alt?: string;
}

export interface Company {
    name: string;
    location: string;
    phone: string;
    email: string;
    website: string;
}

export interface Service {
    id: string;
    title: string;
    features: string[];
}

export interface Work {
    id: string;
    title: string;
    location: string;
    description: string;
    categories: string[];
    photos: Photo[];
}

export interface Testimonial {
    name: string;
    location: string;
    review: string;
    avatarUri: string;
}
