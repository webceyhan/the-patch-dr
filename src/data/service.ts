export interface Service {
    id: string;
    title: string;
    imageUri: string;
    features: string[];
}

export const SERVICES: Service[] = [
    {
        id: 'repairs',
        title: 'Plaster Repairs',
        imageUri: '/images/services/repairs.png',
        features: [
            'Plaster Hole Repairs',
            'Crack Repairs',
            'Water Damage Repairs',
            'Internal Render Repairs',
            'Decorative Rosette & Arch Removal',
            'General Patch & Repairs',
        ],
    },
    {
        id: 'plastering',
        title: 'Full Plastering',
        imageUri: '/images/services/plastering.png',
        features: [
            'Bathroom Reno WR Plastering',
            'Kitchen Reno Plastering',
            'New Extension Plastering',
            'Decorative Cornice Installation',
            'Sagging Ceiling Repair/Replacement',
            'Cornice to Square Set Transformation',
        ],
    },
    {
        id: 'painting',
        title: 'Painting',
        imageUri: '/images/services/painting.png',
        features: [
            'Interior Repainting',
            'Renovation/Extension Painting',
            'Enamel Doors & Trims',
            'Weatherboard Repair & Painting',
            '15+ Years Professional Experience',
        ],
    },
    {
        id: 'consultancy',
        title: 'Consultancy',
        imageUri: '/images/services/consultancy.png',
        features: [
            'Colour Scheme Advice & Consultancy',
            'Design & Product Consultancy',
            // more features
        ],
    },
];
