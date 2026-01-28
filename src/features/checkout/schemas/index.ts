import * as yup from 'yup';

export const checkoutSchema = yup.object({
    firstName: yup
        .string()
        .required('First name is required')
        .min(2, 'First name must be at least 2 characters'),
    streetAddress: yup
        .string()
        .required('Street address is required'),
    apartment: yup
        .string()
        .optional(),
    phoneNumber: yup
        .string()
        .required('Phone number is required')
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
    email: yup
        .string()
        .required('Email is required')
        .email('Invalid email address'),
});

export type CheckoutFormData = yup.InferType<typeof checkoutSchema>;