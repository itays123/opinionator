import { ID } from "../../types";

export interface IMKPageProps {
  id: ID;
}

export default function MKPage({ id }: IMKPageProps) {
  return <div>MP {id}</div>;
}
