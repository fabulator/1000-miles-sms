import { FormProvider, useForm } from 'react-hook-form';

export const MockForm = ({ children }: React.PropsWithChildren) => {
  const form = useForm();
  return (
    <FormProvider {...form}>
      <form
        noValidate
        onSubmit={(event) =>
          void form.handleSubmit((valid) => {
            console.log(valid);
            /* empty */
          })(event)
        }
      >
        {children}
        <button type={'submit'}>Submit</button>
      </form>
    </FormProvider>
  );
};
