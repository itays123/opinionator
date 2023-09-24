import { IKnesetMember } from "../../types";
import MKListItem from "./MKListItem";

export interface IMKListProps {
  list: IKnesetMember[];
}

export default function MKList({ list }: IMKListProps) {
  return (
    <div className="px-6">
      {list.map((mk, idx) => (
        <div key={mk.mpId}>
          {idx !== 0 && <hr className="h-px bg-gray-400 border-0" />}
          <MKListItem {...mk} />
        </div>
      ))}
    </div>
  );
}
