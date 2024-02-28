import { Form, FormSection, FormSubmit, Input } from '@/components/ui/Form';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import {
  AddVolunteerFormZodSchema,
  TAddVolunteerFormValidationType,
} from '@/components/ui/Form/formValidation';
import { toast } from 'sonner';
import { jwtDecode } from 'jwt-decode';
import { useAppSelector } from '@/redux/hooks';
import { getCurrentToken } from '@/redux/features/auth/authSlice';

import { useNavigate } from 'react-router-dom';
import { useSignUpVolunteerMutation } from '@/redux/features/volunteer/volunteerApi';

type TUser = {
  email: string;
  exp: number;
  iat: number;
};

const addVolunteerAnimation = {
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

const AddVolunteer = () => {
  const token = useAppSelector(getCurrentToken);
  const [signUpVolunteer] = useSignUpVolunteerMutation();

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
  } = useForm<TAddVolunteerFormValidationType>({
    resolver: zodResolver(AddVolunteerFormZodSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('loading');
    try {
      const volunteerData = {
        creatorEmail: user.email,
        ...data,
      };

      console.log(volunteerData);
      const res = await signUpVolunteer(volunteerData);
      console.log(res);
      toast.success('Volunteer Add Successfully', { id: toastId });
      reset();
      navigate('/dashboard');
    } catch (error: any) {
      if (error.response && error.response.data) {
        toast.error(`${error?.response?.data?.message}`, {
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
      variants={addVolunteerAnimation}
      initial="hidden"
      animate="visible"
      className="min-h-[calc(100vh-68px)]"
    >
      <h2>Sign Up As A Volunteer</h2>
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
            name="email"
            label={'Email'}
            type={'email'}
            register={register('email')}
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
            name="phone"
            label={'Phone Number'}
            type={'text'}
            register={register('phone')}
            errors={errors}
          ></Input>
          <Input
            name="location"
            label={'Location'}
            type={'text'}
            register={register('location')}
            errors={errors}
          ></Input>
        </FormSection>
        <FormSection>
          <FormSubmit>Sign Up as Volunteer</FormSubmit>
        </FormSection>
      </Form>
    </motion.div>
  );
};

export default AddVolunteer;
