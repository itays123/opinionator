/**
 * Type definitions for client, coupled directly with the server definitions
 */

export type ID = number;

export interface IKnesetMember {
    mpId: ID;
    mpName: string;
    partyName: string;
    personalInfo: string;
}

export interface ITopic {
    topicId: ID;
    topicName: string;
    description: string;
}

export enum OpinionType {
    STRONGLY_OPPOSES,
    OPPOSES,
    NEUTRAL,
    SUPPORTS,
    STRONGLY_SUPPORTS
}

export interface IOpinion {
    mpId: ID,
    topicId: ID,
    opinionType: OpinionType,
    source: string;
}

export interface IOpinionWithMk extends IOpinion {
    mpName: string;
}

export interface IOpinionWithTopic extends ITopic {
    topicName: string;
}

export interface IOpinionatedKnesetMember extends IKnesetMember {
    opinions: IOpinionWithTopic[]
}

export interface IOpinionatedTopic extends IKnesetMember {
    opinions: IOpinionWithMk[]
}
