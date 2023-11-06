import query from ".";
import { IKnesetMember, IQueryPredicate, QueryObject } from "../../types";

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

function updateObjectPropery<T extends object>(obj: T | undefined, property: keyof T, value: T[keyof T]) {
    if (!obj)
        return { [property]: value };
    return { ...obj, [property]: value };
}

function deleteObjectProperty<T extends object>(obj: T, property: keyof T) {
    const newObj = {...obj};
    delete newObj[property];
    return newObj;
}

export function setMKProperty(property: keyof IKnesetMember, field: string) {
    query.mkQuerySubject = updateObjectPropery(query.mkQuerySubject, property, field);
}

export function deleteMKProperty(property: keyof IKnesetMember) {
    query.mkQuerySubject = deleteObjectProperty(query.mkQuerySubject!, property);
}

