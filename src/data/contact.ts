import { Link } from './app';
import { COMPANY } from './company';

export const CONTACT_LINKS: Link[] = [
    {
        label: COMPANY.location,
        icon: 'location-dot',
        alt: 'Location',
    },
    {
        label: COMPANY.phone,
        icon: 'phone',
        href: `tel:${COMPANY.phone}`,
        alt: 'Phone',
    },
    {
        label: COMPANY.email,
        icon: 'envelope',
        href: `mailto:${COMPANY.email}`,
        alt: 'Email',
    },
    {
        label: COMPANY.website,
        icon: 'globe',
        href: `https://${COMPANY.website}`,
        alt: 'Website',
    },
];

export const SOCIAL_LINKS: Link[] = [
    {
        icon: '/images/social/facebook.png',
        href: 'https://www.facebook.com/thepatchdr',
        alt: 'Facebook',
    },
    {
        icon: '/images/social/tiktok.png',
        href: 'https://www.tiktok.com/@thepatchdr',
        alt: 'TikTok',
    },
    {
        icon: '/images/social/hipages.png',
        href: 'https://www.hipages.com.au/thepatchdr',
        alt: 'HiPages',
    },
    {
        icon: '/images/social/yellowpages.png',
        href: 'https://www.yellowpages.com.au/vic/fitzroy/the-patch-dr-1000001742637-listing.html',
        alt: 'Yellow Pages',
    },
];
