export type AttributeType =
  | "short_text"
  | "long_text"
  | "options"
  | "number"
  | "checkbox"
  | "date"
  | "radio";

export interface AttributeOption {
  id: string;
  value: string;
  label: string;
}

export interface Attribute {
  created: number;
  default_value: string | null;
  description: string | null;
  id: string;
  is_multiselect: boolean;
  is_public: boolean;
  meta: string[] | null;
  name: string;
  options: AttributeOption[];
  required: boolean;
  type: AttributeType;
  updated: number;
}
