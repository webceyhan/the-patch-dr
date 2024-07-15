import { computed, onMounted, onUnmounted, ref } from 'vue';

export function useSlider<T>(items: T[], interval: number = 5000) {
    let intervalId: number;
    const timeout = 10;
    const secondCounter = ref(0);
    const progress = computed(
        () => (secondCounter.value / (interval / timeout)) * 100
    );
 
    const isPlaying = ref(true);
    const index = ref(0);
    const item = computed(() => items[index.value]);
    const pause = () => (isPlaying.value = false);
    const resume = () => (isPlaying.value = true);
    const next = (i?: number) => {
        index.value = i ?? (index.value + 1) % items.length;
    };

    onMounted(() => {
        // tick every second
        setInterval(() => {
            // skip if not playing
            if (!isPlaying.value) {
                return;
            }

            // reset counter if interval passed
            if (secondCounter.value === interval / timeout) {
                secondCounter.value = 0;
                return next();
            }

            // increment counter
            secondCounter.value++;
        }, timeout);
    });

    onUnmounted(() => {
        clearInterval(intervalId);
    });

    return { index, item, isPlaying, progress, pause, resume, next };
}
