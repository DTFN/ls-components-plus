export const numericProp = [Number, String];

export type Numeric = number | string;

export interface PickerFieldNames {
  text?: string;
  value?: string;
  children?: string;
}

export interface PickerOption {
  text?: Numeric;
  value?: Numeric;
  disabled?: boolean;
  children?: PickerColumn;
  className?: unknown;
  // for custom field names
  [key: PropertyKey]: any;
}

export type PickerColumn = PickerOption[];

export function assignDefaultFields(fields: PickerFieldNames | undefined): Required<PickerFieldNames> {
  return Object.assign(
    {
      text: 'text',
      value: 'value',
      children: 'children'
    },
    fields
  );
}
