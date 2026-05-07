import { Field, FieldLabel } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export enum GroupOrientation {
  Horizontal = "horizontal",
  Vertical = "vertical",
}

type CustomRadioGroupProps<T> = {
  data: T[];
  name?: string;
  defaultValue?: string;
  label: keyof T;
  id?: keyof T;
  value: T;
  onChange?: (value: T) => void;
  title?: string;
  orientation?: GroupOrientation;
};

export const CustomRadioGroup = <T,>({
  orientation = GroupOrientation.Horizontal,
  ...props
}: CustomRadioGroupProps<T>) => {
  return (
    <RadioGroup
      onValueChange={(value) => {
        const selectedItem = props.data.find(
          (item) => String(item[props.label]) === value,
        );
        if (selectedItem) {
          props.onChange?.(selectedItem);
        }
      }}
      defaultValue={props.defaultValue}
      value={props.value[props.label] as string}
    >
      {props.title && <FieldLabel className="mb-2">{props.title}</FieldLabel>}
      <div
        className={`flex ${orientation === GroupOrientation.Horizontal ? "flex-row items-center" : "flex-col"} gap-2`}
      >
        {props.data.map((item, index) => {
          return (
            <Field
              key={`${index}-radioGroup`}
              orientation="horizontal"
              data-disabled
            >
              <RadioGroupItem
                value={String(item[props.label])}
                id={String(item[props.id || props.label])}
              />
              <FieldLabel
                htmlFor={String(item[props.id || props.label])}
                className="font-normal"
              >
                {String(item[props.label])}
              </FieldLabel>
            </Field>
          );
        })}
      </div>
    </RadioGroup>
  );
};
