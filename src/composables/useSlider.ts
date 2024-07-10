import { computed, onMounted, onUnmounted, ref } from 'vue';

export function useSlider<T>(items: T[], interval: number = 5000) {
    let intervalId: number;

    const isPlaying = ref(true);
    const index = ref(0);
    const item = computed(() => items[index.value]);

    const pause = () => (isPlaying.value = false);
    const resume = () => (isPlaying.value = true);
    const next = (i?: number) => {
        index.value = i ?? (index.value + 1) % items.length;
    };

    onMounted(() => {
        setInterval(() => isPlaying.value && next(), interval);
    });

    onUnmounted(() => {
        clearInterval(intervalId);
    });

    return { index, item, isPlaying, pause, resume, next };
}
