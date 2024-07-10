import { computed, onMounted, onUnmounted, ref } from 'vue';

export function useScroll(threshold: number = 10) {
    const top = ref(0);

    const wasScrolled = computed(() => top.value > threshold);

    const scrollListener = () => {
        top.value = window.scrollY;
    };

    onMounted(() => {
        window.addEventListener('scroll', scrollListener);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', scrollListener);
    });

    return { top, wasScrolled };
}
