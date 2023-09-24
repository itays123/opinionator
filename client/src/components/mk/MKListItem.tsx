import { Link } from "react-router-dom";
import { IKnesetMember } from "../../types";

export const MK_PAGE_PREFIX = "/mk/";

export interface IMKListItemProps extends IKnesetMember {}

export default function MKListItem({
  mpName,
  partyName,
  personalInfo,
  mpId,
}: IMKListItemProps) {
  return (
    <div className="px-6 space-y-1 py-4">
      <div>
        <Link to={MK_PAGE_PREFIX + mpId}>
          <span className="text-gray-950 font-bold text-lg">{mpName}</span>
        </Link>
        <span className="text-gray-800"> ({partyName})</span>
      </div>
      <div>{personalInfo}</div>
    </div>
  );
}
