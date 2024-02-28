import { Form, FormSection, FormSubmit, Input } from '@/components/ui/Form';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import {
  AddCommunityPostFormZodSchema,

  TAddCommunityPostFormValidationType,

} from '@/components/ui/Form/formValidation';
import { toast } from 'sonner';
import { jwtDecode } from 'jwt-decode';
import { useAppSelector } from '@/redux/hooks';
import { getCurrentToken } from '@/redux/features/auth/authSlice';

import { useNavigate } from 'react-router-dom';

import { useCreateCommunityPostMutation } from '@/redux/features/community/communityApi';

type TUser = {
  email: string;
  exp: number;
  iat: number;
};

const addCommunityAnimation = {
  hidden: {
    opacity: 0,
    x: -500,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: 'spring',
      bounce: 0.5,
    },
  },
};

const AddCommunity = () => {
  const token = useAppSelector(getCurrentToken);

  const [addCommunityPost] = useCreateCommunityPostMutation();

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
  } = useForm<TAddCommunityPostFormValidationType>({
    resolver: zodResolver(AddCommunityPostFormZodSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('loading');
    try {
      const communityPostData = {
        email: user.email,
        ...data,
      };

      console.log(communityPostData);

      const res = await addCommunityPost(communityPostData);
      console.log(res);

      toast.success('Post Add Successfully', { id: toastId });
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
      variants={addCommunityAnimation}
      initial="hidden"
      animate="visible"
      className="min-h-[calc(100vh-68px)]"
    >
      <h2>Create Post For Community</h2>
      <Form
        onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
      >
        <FormSection>
          <Input
            name="post"
            label={'Add Your Post'}
            type={'text'}
            register={register('post')}
            errors={errors}
          ></Input>
        </FormSection>
        <FormSection>
          <FormSubmit>Add Post</FormSubmit>
        </FormSection>
      </Form>
    </motion.div>
  );
};

export default AddCommunity;
