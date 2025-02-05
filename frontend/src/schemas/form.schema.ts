import { TableStatus } from '@/constants/status';
import { z } from 'zod';

export type Salary =
  | { type: 'notSpecified'; value: string }
  | { type: 'range'; value: { from: number; to: number } }
  | { type: 'fixed'; value: number };

const salarySchema = z.union([
  z.object({
    type: z.literal('notSpecified'),
    value: z.string().optional(),
  }),
  z.object({
    type: z.literal('range'),
    value: z
      .object({
        from: z.preprocess(
          (val) => (typeof val === 'string' ? Number(val) : val),
          z
            .number({
              required_error: 'Minimum salary is required',
              invalid_type_error: 'Minimum salary must be a number',
            })
            .min(0, 'Minimum salary must be non-negative'),
        ),
        to: z.preprocess(
          (val) => (typeof val === 'string' ? Number(val) : val),
          z
            .number({
              required_error: 'Maximum salary is required',
              invalid_type_error: 'Maximum salary must be a number',
            })
            .min(0, 'Maximum salary must be non-negative')
            .max(1000000, 'Maximum salary must be less than one million'),
        ),
      })
      .refine((data) => data.to > data.from, {
        message: 'Maximum salary must be greater than minimum salary',
        path: ['max'],
      }),
  }),
  z.object({
    type: z.literal('fixed'),
    value: z.preprocess(
      (val) => (typeof val === 'string' ? Number(val) : val),
      z
        .number({
          required_error: 'Salary is required',
          invalid_type_error: 'Salary must be a number',
        })
        .min(0, 'Salary must be non-negative')
        .max(1000000, 'Maximum salary must be less than one million'),
    ),
  }),
]);

const statusSchema = z
  .object({
    type: z
      .string()
      .refine((type) => TableStatus.some((status) => status.type === type), {
        message: 'Invalid type',
      }),
    value: z.string(),
  })
  .superRefine((data, ctx) => {
    const status = TableStatus.find((status) => status.type === data.type);
    if (status && data.value !== status.value) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Value must be '${status.value}' for type '${data.type}'`,
        path: ['value'],
      });
    }
  });

export const recordSchema = z.object({
  company: z.string().min(2, 'Company name must contain at least 2 characters'),
  position: z
    .string()
    .min(2, 'Position name must contain at least 2 characters'),
  salary: salarySchema,
  status: statusSchema,
  note: z.string().max(1000).optional(),
});

export type RecordInputs = z.infer<typeof recordSchema>;
