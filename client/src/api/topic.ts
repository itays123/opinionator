import { mutation, query } from ".";
import { ID, ITopic, IOpinionatedTopic } from "../types";

export function getAll() {
    return query<ITopic[]>('/api/topic')
}

export function getById(id: ID) {
    return query<IOpinionatedTopic>(`/api/topic/${id}`)
}

export function insert(topic: ITopic) {
    return mutation<ITopic, unknown>('/api/topic', 'POST', topic);
}

export function update(id: ID, topic: ITopic) {
    return mutation<ITopic, unknown>(`/api/mk/${id}`, 'PATCH', topic);
}

export function deleteTopic(id: ID) {
    return mutation(`/api/topic/${id}`, 'DELETE');
}