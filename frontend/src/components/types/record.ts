export type TSalaryValue = string | number | { from: number; to: number };
export type TSalaryType = 'range' | 'fixed' | 'notSpecified';

export interface IRecord {
  id: number;
  company: string;
  position: string;
  salary: {
    type: TSalaryType;
    value: TSalaryValue;
  };
  status: {
    type: string;
    value: string;
  };
  note?: string;
}
