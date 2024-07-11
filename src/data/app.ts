export interface Link {
    icon?: string;
    label?: string;
    href?: string;
    alt?: string;
}

export const NAV_LINKS: Link[] = [
    {
        label: 'Snapshot',
        href: '#service',
    },
    {
        label: 'About',
        href: '#about',
    },
    {
        label: 'STQ',
        href: '#call-action',
    },
    {
        label: 'Services',
        href: '#features',
    },
    {
        label: 'Gallery',
        href: '#portfolio',
    },
    {
        label: 'Testimonials',
        href: '#testimonials',
    },
    {
        label: 'Connect',
        href: '#contact',
    },
];
