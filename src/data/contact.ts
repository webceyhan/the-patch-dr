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
