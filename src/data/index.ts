import { Company, Link, Service, Testimonial, Work } from './types';

export const COMPANY: Company = {
    name: 'The Patch Dr.',
    phone: '0422782198',
    email: 'jobs@thepatchdr.com.au',
    website: 'www.thepatchdr.com.au',
    location: 'Melbourne, Australia',
};

export const NAV_LINKS: Link[] = [
    { href: '#service', label: 'Snapshot' },
    { href: '#about', label: 'About' },
    { href: '#call-action', label: 'STQ' },
    { href: '#features', label: 'Services' },
    { href: '#portfolio', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Connect' },
];

export const CONTACT_LINKS: Link[] = [
    {
        icon: 'location-dot',
        label: COMPANY.location,
        alt: 'Location',
    },
    {
        icon: 'phone',
        label: COMPANY.phone,
        href: `tel:${COMPANY.phone}`,
        alt: 'Phone',
    },
    {
        icon: 'envelope',
        label: COMPANY.email,
        href: `mailto:${COMPANY.email}`,
        alt: 'Email',
    },
    {
        icon: 'globe',
        label: COMPANY.website,
        href: `https://${COMPANY.website}`,
        alt: 'Website',
    },
];

export const SOCIAL_LINKS: Link[] = [
    {
        icon: 'facebook',
        href: 'https://www.facebook.com/thepatchdr',
    },
    {
        icon: 'tiktok',
        href: 'https://www.tiktok.com/@thepatchdr',
    },
    {
        icon: 'hipages',
        href: 'https://www.hipages.com.au/thepatchdr',
    },
    {
        icon: 'yellowpages',
        href: 'https://www.yellowpages.com.au/vic/fitzroy/the-patch-dr-1000001742637-listing.html',
    },
];

export const SERVICES: Service[] = [
    {
        id: 'repairs',
        title: 'Plaster Repairs',
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
        features: [
            'Colour Scheme Advice & Consultancy',
            'Design & Product Consultancy',
            // more features
        ],
    },
];

export const WORK_CATEGORIES = [
    'all',
    'basement',
    'kitchen',
    'painting',
    'sanitary',
    'electrical',
    'plumbing',
];

export const WORKS: Work[] = [
    {
        id: 'interior-repaint',
        title: 'Interior Repaint',
        location: 'Thornbury',
        description:
            'Complete 2 room crack repair & repaint of an Art Deco property in Thornbury.',
        categories: ['all', 'basement', 'kitchen', 'painting'],
        photos: [
            {
                uri: 'interior-repaint-1.jpg',
                alt: 'FULL REPAIR & REPAINT. FYFFE ST, THORNBURY.',
            },
        ],
    },
    {
        id: 'cafe-renovation',
        title: 'Cafe Renovation',
        location: 'Richmond',
        description:
            'Complete plaster repair & repaint of a new organic food cafe on the outskirts of Richmond.',
        categories: ['all', 'sanitary', 'kitchen', 'electrical'],
        photos: [
            {
                uri: 'cafe-renovation-1.jpg',
                alt: 'COMPLETE INTERIOR/EXTERIOR REPAINT. FRESH ORGANIC GOODS, RICHMOND',
            },
        ],
    },

    {
        id: 'extension-plastering',
        title: 'Extension Plastering',
        location: 'Epping',
        description:
            'Plastering of a brand new rumpus room extension in Epping.',
        categories: ['all', 'kitchen', 'painting'],
        photos: [
            {
                uri: 'extension-plastering-1.jpg',
                alt: 'COMPLETE EXTENSION PLASTERING IN EPPING',
            },
        ],
    },

    {
        id: 'plaster-repairs',
        title: 'Plaster Repairs',
        location: 'Melbourne CBD',
        description:
            'Numerous repairs & painting preparation work for a modern office building in St Kilda Rd, Melbourne.',
        categories: ['all', 'electrical', 'kitchen'],
        photos: [
            {
                uri: 'plaster-repairs-1.jpg',
                alt: 'PRE-PAINTING REPAIR WORK. ST KILDA RD, MELBOURNE',
            },
        ],
    },
    {
        id: 'restaurant-renovation',
        title: 'Restaurant Renovation',
        location: 'Collingwood',
        description:
            'Complete renovation & repaint of a modern Indian eatery named Madras Brothers. Smith St, Collingwood.',
        categories: ['all', 'plumbing', 'kitchen'],
        photos: [
            {
                uri: 'restaurant-renovation-1.jpg',
                alt: 'COMPLETE INTERIOR & EXTERIOR REPAINT. MADRAS BROS, COLLINGWOOD',
            },
            {
                uri: 'restaurant-renovation-2.jpg',
                alt: 'EXTERIOR COURTYARD REPAINT, BEFORE & AFTER.',
            },
            {
                uri: 'restaurant-renovation-3.jpg',
                alt: 'MADRAS BROS, COLLINGWOOD.',
            },
            {
                uri: 'restaurant-renovation-4.jpg',
                alt: 'ENTRY & SHOPFRONT REPAINT, BEFORE & AFTER. MADRAS BROS, COLLINGWOOD.',
            },
        ],
    },
    {
        id: 'patch-repair',
        title: 'Patch Repair',
        location: 'Keysborough',
        description:
            'Medium plaster wall repair after an accident exiting their manhole.',
        categories: ['all', 'basement', 'painting'],
        photos: [
            {
                uri: 'patch-repair-1.jpg',
                alt: 'Patch Repair',
            },
        ],
    },
    {
        id: 'ceiling-repairs',
        title: 'Ceiling Repairs',
        location: 'Richmond',
        description:
            'Former downlight hole & crack repairs in a modern apartment in Richmond.',
        categories: ['all', 'sanitary', 'plumbing'],
        photos: [
            {
                uri: 'ceiling-repairs-1.jpg',
                alt: 'CEILING REPAIRS, RICHMOND',
            },
        ],
    },
    {
        id: 'downlight-repairs',
        title: 'Downlight Repairs',
        location: 'Kensington',
        description:
            'Repairing numerous ceiling holes caused by switching to smaller downlights.',
        categories: ['all', 'kitchen', 'electrical'],
        photos: [
            {
                uri: 'downlight-repairs-1.jpg',
                alt: 'MULTIPLE DOWNLIGHT HOLE REPAIRS, KENSINGTON.',
            },
        ],
    },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        name: 'Janette Eley',
        location: 'Frankston South',
        review: 'The Patch Dr. did a great job. Very neat work, and Iʼm happy with the end result.',
        avatarUri: 'janette-eley.jpg',
    },
    {
        name: 'William Nguyen',
        location: 'Footscray',
        review: 'Dallas helped me do some urgent patching of some holes which were made while installing ceiling fans in my apartment. He was more than happy to accommodate my tight schedule, and the patching work was fantastic. I’d highly recommend The Patch Dr. to anyone.',
        avatarUri: 'william-nguyen.jpg',
    },
    {
        name: 'Osher Klein',
        location: 'St Kilda East',
        review: 'Dallas was very quick to respond, and came & completed the job the following day. He did a great job and left our house looking neat and tidy!',
        avatarUri: 'osher-klein.jpg',
    },
];
