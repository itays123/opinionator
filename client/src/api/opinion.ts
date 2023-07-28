import { mutation } from ".";
import { ID, OpinionType, IOpinion } from "../types";

export function upsert(mkId: ID, topicId: ID, opinionType: OpinionType, source: string) {
    return mutation<Pick<IOpinion, 'opinionType' | 'source'>, unknown>(`/api/opinion/${mkId}/${topicId}`, 'POST', { opinionType, source });
}

export function deleteOpinion(mkId: ID, topicId: ID) {
    return mutation(`/api/opinion/${mkId}/${topicId}`, 'DELETE')
}