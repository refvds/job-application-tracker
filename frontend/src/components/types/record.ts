type TSalaryValue = string | number | { from: number; to: number };

export interface IRecord {
  id: number;
  company: string;
  position: string;
  salary: {
    type: string;
    value: TSalaryValue;
  };
  status: {
    type: string;
    value: string;
  };
  note?: string;
}
