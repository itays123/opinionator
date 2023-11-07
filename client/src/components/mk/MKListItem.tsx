import { IKnesetMember } from "../../types";
import { openSidebar } from "../../stores/layout";
import MKPage from "../pages/MKPage";

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
      <button onClick={() => openSidebar(MKPage, { id: mpId })}>
        <span className="text-gray-950 font-bold text-lg">{mpName}</span>
      </button>
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
