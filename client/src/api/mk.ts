import { mutation, query } from ".";
import { ID, IKnesetMember, IOpinionatedKnesetMember } from "../types";

export function getAll() {
    return query<IKnesetMember[]>('/api/mk')
}

export function getById(id: ID) {
    return query<IOpinionatedKnesetMember>(`/api/mk/${id}`)
}

export function search(q: string) {
    return query<IKnesetMember[]>(`/api/search`, ['query', q])
}

export function insert(mk: IKnesetMember) {
    return mutation<IKnesetMember, unknown>('/api/mk', 'POST', mk);
}

export function update(id: ID, mk: IKnesetMember) {
    return mutation<IKnesetMember, unknown>(`/api/mk/${id}`, 'PATCH', mk);
}

export function deleteMK(id: ID) {
    return mutation(`/api/mk/${id}`, 'DELETE');
}