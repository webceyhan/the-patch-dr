import { onMounted, onUnmounted, Ref } from 'vue';
import { useIntersectObserver } from './useIntersectObserver';
import { useAsset } from './useAsset';

const imageMap = new Map<Element, string>();

const observer = useIntersectObserver({
    handler: (entry) => {
        const target = entry.target as HTMLElement;
        const imagedUri = imageMap.get(target);

        if (imagedUri) {
            target.style.backgroundImage = `url(${imagedUri})`;
            unobserve(target);
        }
    },
});

const observe = (target: HTMLElement, imagedUri: string) => {
    imageMap.set(target, useAsset(imagedUri)!);
    observer.observe(target);
};

const unobserve = (target: HTMLElement) => {
    observer.unobserve(target);
    imageMap.delete(target);
};

export function useLazyBackground(
    ref: Ref<HTMLElement | null>,
    imageUri: string
): void {
    onMounted(() => {
        ref.value && observe(ref.value, imageUri);
    });

    onUnmounted(() => {
        ref.value && unobserve(ref.value);
    });
}
