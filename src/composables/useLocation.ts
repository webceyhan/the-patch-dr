import { onMounted, onUnmounted, ref } from 'vue';

export function useLocation() {
    const hash = ref(location.hash);

    const popstateListener = () => {
        hash.value = location.hash;
    };

    onMounted(() => {
        window.addEventListener('popstate', popstateListener);
    });

    onUnmounted(() => {
        window.removeEventListener('popstate', popstateListener);
    });

    return { hash };
}
