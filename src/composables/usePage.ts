import { computed, onMounted, onUnmounted, ref } from 'vue';

export function usePage() {
    const readyState = ref(document.readyState);

    const isReady = computed(() => readyState.value === 'complete');
    const isLoading = computed(() => !isReady.value);

    const readyStateListener = () => {
        readyState.value = document.readyState;
    };

    onMounted(() => {
        document.addEventListener('readystatechange', readyStateListener);
    });

    onUnmounted(() => {
        document.removeEventListener('readystatechange', readyStateListener);
    });

    return { isReady, isLoading };
}
