import { Form, FormSection, FormSubmit, Input } from '@/components/ui/Form';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import {
  DonateFormZodSchema,
  TDonateFormValidationType,
} from '@/components/ui/Form/formValidation';
import { toast } from 'sonner';
import { jwtDecode } from 'jwt-decode';
import { useAppSelector } from '@/redux/hooks';
import { getCurrentToken } from '@/redux/features/auth/authSlice';
import { useAddDonateMutation } from '@/redux/features/donate/donateApi';
import { useNavigate } from 'react-router-dom';

type TUser = {
  email: string;
  exp: number;
  iat: number;
};

const donateAnimation = {
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

const DonateNow = () => {
  const token = useAppSelector(getCurrentToken);
  const [addDonate] = useAddDonateMutation();
  const navigate = useNavigate()

  let user: TUser;
  if (token) {
    user = jwtDecode(token);
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TDonateFormValidationType>({
    resolver: zodResolver(DonateFormZodSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('loading');
    try {
      const donateData = {
        email: user.email,
        amount: Number(data.amount),
      };
      await addDonate(donateData).unwrap();
      toast.success('Thanks For Your donate', { id: toastId });
      reset();
      navigate('/dashboard/leaderboard');
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
      variants={donateAnimation}
      initial="hidden"
      animate="visible"
      className="min-h-[calc(100vh-68px)]"
    >
      <h2>Donate Now</h2>
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
          <Input
            name="amount"
            label={'Amount'}
            type={'text'}
            register={register('amount')}
            errors={errors}
          ></Input>
        </FormSection>
        <FormSection>
          <FormSubmit>Donate</FormSubmit>
        </FormSection>
      </Form>
    </motion.div>
  );
};

export default DonateNow;
