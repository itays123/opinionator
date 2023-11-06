import { proxy, subscribe } from "valtio";
import { ArrayElement, IKnesetMember, IOpinion, IQuery, ITopic } from "../types";

export const QUERY_STATES = ['IDLE', 'LOADING', 'ERROR', 'FETCHED'] as const;

export interface IQueryStore extends Partial<IQuery> {
    state: ArrayElement<typeof QUERY_STATES>;
    data: IKnesetMember[] | ITopic[] | IOpinion[] | never[];
}

const query = proxy({
    state: 'IDLE',
    data: []
} as IQueryStore)

subscribe(query, () => {
    console.log(query.queryObject);
})


export default query;