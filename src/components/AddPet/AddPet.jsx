// import * as yup from 'yup';
// import { Formik } from 'formik';

// const addPetFormSchema = yup.object().shape({
//   title: yup.string().when('category', {
//     is: value => value !== 'your pet',
//     then: yup
//       .string()
//       .min(2, 'Minimum 2 characters')
//       .max(16, 'Maximum 16 characters')
//       .required('Title is required (min 2, max 16 characters)'),
//     otherwise: yup.string(),
//   }),
//   category: yup
//     .string()
//     .oneOf(['your pet', 'sell', 'lost/found', 'in good hands'])
//     .required('Category is required'),
//   name: yup
//     .string()
//     .min(2, 'Minimum 2 characters')
//     .max(16, 'Maximum 16 characters')
//     .required('Name is required (min 2, max 16 characters)'),
//   date: yup
//     .string()
//     .matches(/^\d{2}\.\d{2}\.\d{4}$/, 'DD.MM.YYYY format needed')
//     .required('Date is required (DD.MM.YYYY format)'),
//   breed: yup
//     .string('Must be a string')
//     .min(2, 'Minimum 2 characters')
//     .max(16, 'Maximum 16 characters')
//     .required('Breed is required (min 2, max 16 characters)'),
//   file: yup
//     .mixed()
//     .test('fileSize', 'File size is too large', value => value?.size <= 3145728)
//     .test(
//       'fileType',
//       'Only image files are allowed',
//       value =>
//         !value || ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)
//     )
//     .required('Photo is required'),
//   sex: yup.string().when('category', {
//     is: value =>
//       value === 'sell' || value === 'lost/found' || value === 'in good hands',
//     then: yup.string().oneOf(['Female', 'Male']).required('Sex is required'),
//     otherwise: yup.string(),
//   }),
//   location: yup.string().when('category', {
//     is: value => value !== 'your pet',
//     then: yup
//       .string()
//       .matches(/^[A-Z][a-zA-Z]*$/, 'City begins with capitalize character')
//       .required('City is required'),
//     otherwise: yup.string(),
//   }),
//   price: yup.number().when('category', {
//     is: value => value === 'sell',
//     then: yup
//       .number()
//       .moreThan(0, 'Price must be greater than 0')
//       .required('Price is required'),
//     otherwise: yup.number(),
//   }),
//   comments: yup
//     .string()
//     .min(8, 'Minimum 8 characters')
//     .max(120, 'Maximum 120 characters'),
// });

export const AddPet = () => {
  return <>{/* <Formik validationSchema={addPetFormSchema}></Formik> */}</>;
};
