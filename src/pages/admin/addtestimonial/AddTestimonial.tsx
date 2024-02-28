import { Form, FormSection, FormSubmit, Input } from '@/components/ui/Form';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import {
  AddTestimonialFormZodSchema,
  TAddTestimonialFormValidationType,
} from '@/components/ui/Form/formValidation';
import { toast } from 'sonner';
import { jwtDecode } from 'jwt-decode';
import { useAppSelector } from '@/redux/hooks';
import { getCurrentToken } from '@/redux/features/auth/authSlice';

import { useNavigate } from 'react-router-dom';
import { useAddTestimonialMutation } from '@/redux/features/testimonial/testimonialApi';

type TUser = {
  email: string;
  exp: number;
  iat: number;
};

const addTestimonialAnimation = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: 'spring',
      bounce: 0.5,
    },
  },
};

const AddTestimonial = () => {
  const token = useAppSelector(getCurrentToken);
  const [addTestimonial] = useAddTestimonialMutation();
  const navigate = useNavigate();

  let user: TUser;
  if (token) {
    user = jwtDecode(token);
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TAddTestimonialFormValidationType>({
    resolver: zodResolver(AddTestimonialFormZodSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('loading');
    try {
      const testimonialData = {
        email: user.email,
        ...data,
        ratting: Number(data.ratting),
      };

      console.log(testimonialData);
      const res = await addTestimonial(testimonialData);
      console.log("res", res);

      toast.success('Thanks For Your Feedback', { id: toastId });
      reset();
      navigate('/dashboard');
    } catch (error: any) {
      if (error.response && error.response.data) {
        toast.error(`${error.response.data.message}`, {
          id: toastId,
          duration: 3000,
        });
      } else {
        toast.error('An error occurred', { id: toastId, duration: 3000 });
      }
    }
  };
  return (
    <motion.div
      variants={addTestimonialAnimation}
      initial="hidden"
      animate="visible"
      className="min-h-[calc(100vh-68px)]"
    >
      <h2>Add Your Valuable Feedback</h2>
      <Form
        onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
        double
      >
        <FormSection>
          <Input
            name="name"
            label={'Name'}
            type={'text'}
            register={register('name')}
            errors={errors}
          ></Input>
          <Input
            name="designation"
            label={'Designation'}
            type={'text'}
            register={register('designation')}
            errors={errors}
          ></Input>
          <Input
            name="image"
            label={'Image Link'}
            type={'text'}
            register={register('image')}
            errors={errors}
          ></Input>
          <Input
            name="message"
            label={'Message'}
            type={'text'}
            register={register('message')}
            errors={errors}
          ></Input>
          <Input
            name="ratting"
            label={'Rattings'}
            type={'number'}
            register={register('ratting')}
            errors={errors}
          ></Input>
        </FormSection>
        <FormSection>
          <FormSubmit>Add Testimonial</FormSubmit>
        </FormSection>
      </Form>
    </motion.div>
  );
};

export default AddTestimonial;
