import query from ".";
import { IQueryPredicate, QueryObject } from "../../types";

export function setObject(obj: QueryObject) {
    query.queryObject = obj;
}

export function clearObject() {
    query.queryObject = undefined;
    clearPredicate();
}

export function setPredicate(pred: IQueryPredicate) {
    query.predicateName = pred.name;
    query.opinionQueryPredicate = pred.value;
}

export function clearPredicate() {
    query.predicateName = undefined;
    query.opinionQueryPredicate = undefined;
}