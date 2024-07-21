export interface Photo {
    id?: string;
    alt?: string;
    uri?: string;
}

export interface Work {
    id: string;
    title: string;
    location: string;
    description: string;
    tags: string[];
    imageUri: string;
    photos: Photo[];
}

export const WORKS: Work[] = [
    {
        id: 'interior-repaint',
        title: 'Interior Repaint',
        location: 'Thornbury',
        description:
            'Complete 2 room crack repair & repaint of an Art Deco property in Thornbury.',
        tags: ['basement', 'kitchen', 'painting'],
        imageUri: '/images/work/interior-repaint-cover.jpg',
        photos: [
            {
                uri: '/images/work/interior-repaint-1.jpg',
                alt: 'Full repair & repaint. Fyffe St, Thornbury.',
            },
        ],
    },
    {
        id: 'cafe-renovation',
        title: 'Cafe Renovation',
        location: 'Richmond',
        description:
            'Complete plaster repair & repaint of a new organic food cafe on the outskirts of Richmond.',
        tags: ['sanitary', 'kitchen', 'electrical'],
        imageUri: '/images/work/cafe-renovation-cover.jpg',
        photos: [
            {
                uri: '/images/work/cafe-renovation-1.jpg',
                alt: 'Complete interior/exterior repaint. Fresh Organic Goods, Richmond',
            },
        ],
    },
    {
        id: 'extension-plastering',
        title: 'Extension Plastering',
        location: 'Epping',
        description:
            'Plastering of a brand new rumpus room extension in Epping.',
        tags: ['kitchen', 'painting'],
        imageUri: '/images/work/extension-plastering-cover.jpg',
        photos: [
            {
                uri: '/images/work/extension-plastering-1.jpg',
                alt: 'Complete extension plastering in Epping',
            },
        ],
    },
    {
        id: 'plaster-repairs',
        title: 'Plaster Repairs',
        location: 'Melbourne CBD',
        description:
            'Numerous repairs & painting preparation work for a modern office building in St Kilda Rd, Melbourne.',
        tags: ['electrical', 'kitchen'],
        imageUri: '/images/work/plaster-repairs-cover.jpg',
        photos: [
            {
                uri: '/images/work/plaster-repairs-1.jpg',
                alt: 'Pre-painting repair work. St Kilda Rd, Melbourne',
            },
        ],
    },
    {
        id: 'restaurant-renovation',
        title: 'Restaurant Renovation',
        location: 'Collingwood',
        description:
            'Complete renovation & repaint of a modern Indian eatery named Madras Brothers. Smith St, Collingwood.',
        tags: ['plumbing', 'kitchen'],
        imageUri: '/images/work/restaurant-renovation-cover.jpg',
        photos: [
            {
                uri: '/images/work/restaurant-renovation-1.jpg',
                alt: 'Complete interior & exterior repaint. Madras Bros, Collingwood',
            },
            {
                uri: '/images/work/restaurant-renovation-2.jpg',
                alt: 'Exterior courtyard repaint, before & after.',
            },
            {
                uri: '/images/work/restaurant-renovation-3.jpg',
                alt: 'Madras Bros, Collingwood.',
            },
            {
                uri: '/images/work/restaurant-renovation-4.jpg',
                alt: 'Entry & shopfront repaint, before & after. Madras Bros, Collingwood.',
            },
        ],
    },
    {
        id: 'patch-repair',
        title: 'Patch Repair',
        location: 'Keysborough',
        description:
            'Medium plaster wall repair after an accident exiting their manhole.',
        tags: ['basement', 'painting'],
        imageUri: '/images/work/patch-repair-cover.jpg',
        photos: [
            {
                uri: '/images/work/patch-repair-1.jpg',
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
        tags: ['sanitary', 'plumbing'],
        imageUri: '/images/work/ceiling-repairs-cover.jpg',
        photos: [
            {
                uri: '/images/work/ceiling-repairs-1.jpg',
                alt: 'Ceiling repairs, Richmond',
            },
        ],
    },
    {
        id: 'downlight-repairs',
        title: 'Downlight Repairs',
        location: 'Kensington',
        description:
            'Repairing numerous ceiling holes caused by switching to smaller downlights.',
        tags: ['kitchen', 'electrical'],
        imageUri: '/images/work/downlight-repairs-cover.jpg',
        photos: [
            {
                uri: '/images/work/downlight-repairs-1.jpg',
                alt: 'Multiple downlight hole repairs, Kensington.',
            },
        ],
    },
];

export const WORK_TAGS = [
    'all',
    ...WORKS.map((work) => work.tags)
        .flat()
        .filter((tag, index, self) => self.indexOf(tag) === index),
];
