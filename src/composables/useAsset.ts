const BASE_URL = import.meta.url;

export function useAsset(uri: string): string {
    return new URL(uri, BASE_URL).href;
}
