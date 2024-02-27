import { Form, FormSection, FormSubmit, Input } from '@/components/ui/Form';
import {
  CreateClothFormZodSchema,
  TCreateClotheFormValidationType,
} from '@/components/ui/Form/formValidation';
import { getUserEmail } from '@/redux/features/auth/authSlice';
import { useCreateClothesMutation } from '@/redux/features/clothes/clothesApi';

import { useAppSelector } from '@/redux/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const CreateClothes = () => {
  const [createClothe] = useCreateClothesMutation();
  const email = useAppSelector(getUserEmail);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TCreateClotheFormValidationType>({
    resolver: zodResolver(CreateClothFormZodSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    // console.log(data, email);
    const toastId = toast.loading('loading');
    try {
      const res = await createClothe({ data, email }).unwrap();
      if (res.success) {
        toast.success('Data Created Successfully', {
          id: toastId,
          duration: 2000,
        });
        reset();
      }
    } catch (error) {
      toast.error('Data Created Failed', {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <>
      <h2>Create New Clothe</h2>
      <Form
        double
        onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
      >
        <FormSection>
          <Input
            name="image"
            label={'Image Link'}
            type={'text'}
            register={register('image')}
            errors={errors}
          ></Input>
          <Input
            name="title"
            label={'Title'}
            type={'text'}
            register={register('title')}
            errors={errors}
          ></Input>
          <Input
            name="category"
            label={'Category'}
            type={'text'}
            register={register('category')}
            errors={errors}
          ></Input>
          <Input
            name="size"
            label={'Size'}
            type={'text'}
            register={register('size')}
            errors={errors}
          ></Input>
          <Input
            name="description"
            label={'Description'}
            type={'text'}
            register={register('description')}
            errors={errors}
          ></Input>
        </FormSection>
        <FormSection>
          <FormSubmit>Create Now</FormSubmit>
        </FormSection>
      </Form>
    </>
  );
};

export default CreateClothes;
