export interface Testimonial {
    name: string;
    location: string;
    review: string;
    avatarUri: string;
}

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
