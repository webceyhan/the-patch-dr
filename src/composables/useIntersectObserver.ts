type Options = IntersectionObserverInit & {
    handler: (entry: IntersectionObserverEntry) => void;
};

export function useIntersectObserver({ handler, ...options }: Options) {
    return new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        entries.map((entry) => entry.isIntersecting && handler(entry));
    }, options);
}
