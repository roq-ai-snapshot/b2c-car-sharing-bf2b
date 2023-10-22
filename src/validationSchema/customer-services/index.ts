import * as yup from 'yup';

export const customerServiceValidationSchema = yup.object().shape({
  service_name: yup.string().required(),
  service_description: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
