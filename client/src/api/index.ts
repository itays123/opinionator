
const BASE_URL =  window.location.origin;

export async function query<ReturnType>(url: string, ...params: [string, string][]) {
    const urlObj = new URL(BASE_URL + url);
    params.forEach(([param, value]) => urlObj.searchParams.append(param, value));
    const res = await fetch(urlObj);
    const json = await res.json() as ReturnType;
    return json;
}

export async function mutation<MutationData, ReturnType>(url: string, method: 'POST' | 'PATCH' | 'DELETE', data?: MutationData) {
    const res = await fetch(BASE_URL + url, {
        method,
        body: data ? JSON.stringify(data) : undefined
    });
    const json = await res.json() as ReturnType;
    return json;
}