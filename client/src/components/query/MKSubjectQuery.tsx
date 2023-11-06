import { deleteMKProperty, setMKProperty } from "../../stores/query/actions";
import { IKnesetMember } from "../../types";
import InputQueryField from "./field/InputQueryField";

export const MK_PROPS_TO_FIELDS: Record<
  keyof IKnesetMember,
  string | undefined
> = {
  mpName: "בשם",
  partyName: "ממפלגת",
  personalInfo: undefined, // don't allow querying based on personal info
  role: "בתפקיד",
  mpId: undefined, // same here
};

export interface IMKSubjectQueryField {
  property: keyof IKnesetMember;
}

export default function MKSubjectQuery({ property }: IMKSubjectQueryField) {
  const field = MK_PROPS_TO_FIELDS[property];
  return field ? (
    <InputQueryField
      className="text-mk-700"
      field={field}
      onInputChange={(value) => {
        setMKProperty(property, value);
      }}
      onDismiss={() => {
        deleteMKProperty(property);
      }}
    />
  ) : (
    <></>
  );
}
