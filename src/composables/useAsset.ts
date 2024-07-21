const BASE_URL = import.meta.env.BASE_URL ?? '/';

export function useAsset(uri: string): string {
    // If the URI starts with a slash, replace it with the base URL
    if (uri?.startsWith('/')) {
        return BASE_URL + uri.slice(1);
    }

    return uri;
}
