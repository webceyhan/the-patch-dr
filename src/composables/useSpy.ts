import { computed, ref } from 'vue';
import { useIntersectObserver } from './useIntersectObserver';

// global state
const visibleId = ref<string | null>(null);

const visibleHash = computed(() => '#' + visibleId.value);

const observe = () => {
    const observer = useIntersectObserver({
        handler: (entry) => (visibleId.value = entry.target.id),
        /**
         * This rootMargin creates a horizontal line vertically centered
         * that will help trigger an intersection at that the very point.
         */
        rootMargin: '-50% 0% -50% 0%',
    });

    // observe all elements with the class 'spy'
    const targets = document.querySelectorAll('.spy');
    targets.forEach((target) => observer.observe(target));
};

export function useSpy() {
    return { visibleId, visibleHash, observe };
}
