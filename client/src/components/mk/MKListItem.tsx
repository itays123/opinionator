import { Link } from "react-router-dom";
import { IKnesetMember } from "../../types";

export const MK_PAGE_PREFIX = "/mk/";
export const NO_ROLE = "N/A";

export interface IMKListItemProps extends IKnesetMember {}

export default function MKListItem({
  mpName,
  partyName,
  personalInfo,
  mpId,
  role,
}: IMKListItemProps) {
  return (
    <div className="px-6 space-y-1 py-4">
      <Link to={MK_PAGE_PREFIX + mpId}>
        <span className="text-gray-950 font-bold text-lg">{mpName}</span>
      </Link>
      <div className="text-gray-700">
        {role !== NO_ROLE && (
          <>
            <span>{role}</span>
            <span> · </span>
          </>
        )}
        <span>{partyName}</span>
      </div>
      <div>{personalInfo}</div>
    </div>
  );
}
