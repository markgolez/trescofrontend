export function handleFormikAPIError(error: any, helpers: any, defaultMessage: string) {
  if (error && error.response && error.response.data) {
    helpers.setErrors(error.response.data);
  } else {
    helpers.setStatus(defaultMessage);
  }
  helpers.setSubmitting(false);
} 