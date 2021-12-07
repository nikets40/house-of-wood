export type User = {
  id: number
  name: string
}

export interface AutoCompleteFieldProps {
  label: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  value: string;
  options: string[];
}
