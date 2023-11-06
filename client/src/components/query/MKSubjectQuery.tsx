import { deleteMKProperty, setMKProperty } from "../../stores/query/actions";
import { IKnesetMember } from "../../types";
import InputQueryField from "./field/InputQueryField";

export interface IMKSubjectQueryField {
  property: keyof IKnesetMember;
  field: string;
}

export default function MKSubjectQuery({
  property,
  field,
}: IMKSubjectQueryField) {
  return (
    <InputQueryField
      pickedClassName="text-primary-600"
      field={field}
      onInputChange={(value) => {
        setMKProperty(property, value);
      }}
      onDismiss={() => {
        deleteMKProperty(property);
      }}
    />
  );
}
