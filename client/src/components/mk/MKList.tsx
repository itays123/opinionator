import { IKnesetMember } from "../../types";
import List from "../utils/List";
import MKListItem from "./MKListItem";

export interface IMKListProps {
  list: IKnesetMember[];
}

export default function MKList({ list }: IMKListProps) {
  return (
    <List
      className="px-6"
      list={list}
      keyFunc={(mk) => mk.mpId}
      component={(mk) => <MKListItem {...mk} />}
      delimiter={<hr className="h-px bg-gray-400 border-0" />}
    />
  );
}
