interface ITableStatus {
  type: string;
  value: string;
}

export const TableStatus: ITableStatus[] = [
  { type: 'submitted', value: 'Submitted' },
  { type: 'accepted', value: 'Accepted' },
  { type: 'interview', value: 'Interview' },
  { type: 'test', value: 'Test Assignment' },
  { type: 'offer', value: 'Offer' },
  { type: 'rejected', value: 'Rejected' },
];
