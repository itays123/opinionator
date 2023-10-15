import { proxy } from "valtio";
import { ArrayElement, IKnesetMember, IOpinion, IQuery, ITopic } from "../types";

export const QUERY_STATES = ['IDLE', 'LOADING', 'ERROR', 'FETCHED'] as const;

export interface IQueryStore extends IQuery {
    state: ArrayElement<typeof QUERY_STATES>;
    data: IKnesetMember[] | ITopic[] | IOpinion[] | never[];
}

const query = proxy({
    state: 'IDLE',
    data: []
} as IQueryStore)

/* fetch new changes
subscribe(query, () => {
    
})
*/

export default query;