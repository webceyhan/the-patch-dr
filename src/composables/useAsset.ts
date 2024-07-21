const BASE_URL = import.meta.env.BASE_URL ?? '/';

export function useAsset(uri?: string): string | undefined {
    // prefix with base url if it's a relative path
    return uri?.startsWith('/') ? BASE_URL + uri.slice(1) : uri;
}

export function useAssetForCSS(uri?: string): string | undefined {
    return uri ? `url("${useAsset(uri)}")` : uri;
}
