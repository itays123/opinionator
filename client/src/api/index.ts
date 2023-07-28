
export async function query<ReturnType>(url: string, ...params: [string, string][]) {
    const urlObj = new URL(url);
    params.forEach(([param, value]) => urlObj.searchParams.append(param, value));
    const res = await fetch(urlObj);
    const json = await res.json() as ReturnType;
    return json;
}

export async function mutation<MutationData, ReturnType>(url: string, method: 'POST' | 'PATCH' | 'DELETE', data?: MutationData) {
    const res = await fetch(url, {
        method,
        body: data ? JSON.stringify(data) : undefined
    });
    const json = await res.json() as ReturnType;
    return json;
}