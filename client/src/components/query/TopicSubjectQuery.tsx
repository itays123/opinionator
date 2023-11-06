import {
  deleteTopicProperty,
  setTopicProperty,
} from "../../stores/query/actions";
import InputQueryField from "./field/InputQueryField";

export interface ITopicSubjectQueryProps {
  label: string;
}

export default function TopicSubjectQuery({ label }: ITopicSubjectQueryProps) {
  return (
    <InputQueryField
      pickedClassName="text-primary-600"
      field={label}
      onInputChange={(value) => setTopicProperty("topicName", value)}
      onDismiss={() => deleteTopicProperty("topicName")}
    />
  );
}
