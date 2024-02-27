import { DialogContent } from '@/components/ui/dialog';

import { Form, FormSection, FormSubmit, Input } from '@/components/ui/Form';
import {
  CreateClothFormZodSchema,
  TCreateClotheFormValidationType,
} from '@/components/ui/Form/formValidation';
import {
  useGetSingleClotheQuery,
  useUpdateClothesMutation,
} from '@/redux/features/clothes/clothesApi';
import { useAppSelector } from '@/redux/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

export const AllClothesEditForm = () => {
  const id = useAppSelector((state) => state.clothes.clotheId);
  const { data } = useGetSingleClotheQuery(id);
  const [updateClothe] = useUpdateClothesMutation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TCreateClotheFormValidationType>({
    resolver: zodResolver(CreateClothFormZodSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const res = await updateClothe({ ...data, id });
    console.log(res);
  };
  return (
    <DialogContent className="md:max-w-2xl">
      <>
        <h3 className="text-center font-semibold text-xl">Edit Your Clothe</h3>
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
              defaultValue={data?.data?.image}
            ></Input>
            <Input
              name="title"
              label={'Title'}
              type={'text'}
              register={register('title')}
              errors={errors}
              defaultValue={data?.data?.title}
            ></Input>
            <Input
              name="category"
              label={'Category'}
              type={'text'}
              register={register('category')}
              errors={errors}
              defaultValue={data?.data?.category}
            ></Input>
            <Input
              name="size"
              label={'Size'}
              type={'text'}
              register={register('size')}
              errors={errors}
              defaultValue={data?.data?.size}
            ></Input>
            <Input
              name="description"
              label={'Description'}
              type={'text'}
              register={register('description')}
              errors={errors}
              defaultValue={data?.data?.description}
            ></Input>
          </FormSection>
          <FormSection>
            <FormSubmit>Update Now</FormSubmit>
          </FormSection>
        </Form>
      </>
    </DialogContent>
  );
};
