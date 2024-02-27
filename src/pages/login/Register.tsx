import { Form, FormSection, FormSubmit, Input } from '@/components/ui/Form';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  RegisterFormZodSchema,
  TRegisterFormValidationType,
} from '@/components/ui/Form/formValidation';
import { NavLink, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '@/redux/features/auth/authApi';
import { toast } from 'sonner';
import { jwtDecode } from 'jwt-decode';
import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/features/auth/authSlice';
import { motion } from 'framer-motion';
const registerAnimation = {
  hidden: {
    opacity: 0,
    x: 500,
    rotate: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TRegisterFormValidationType>({
    resolver: zodResolver(RegisterFormZodSchema),
  });

  const [signUp] = useRegisterMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading('loading');
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      const res = await signUp(userInfo).unwrap();
      console.log(res);
      const user = jwtDecode(res.token);
      dispatch(setUser({ user: user, token: res.token }));
      toast.success('Successfully registered', {
        id: toastId,
        duration: 3000,
      });
      navigate('/dashboard');
    } catch (error) {
      toast.error('Registration Field', { id: toastId, duration: 3000 });
    }
  };
  return (
    <motion.div variants={registerAnimation} initial="hidden" animate="visible">
      <h2>Register Now</h2>
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
          <Input
            name="name"
            label={'User Name'}
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
            name="password"
            label={'Password'}
            type={'password'}
            register={register('password')}
            errors={errors}
          ></Input>
        </FormSection>
        <FormSection>
          <FormSubmit>Register Now</FormSubmit>
        </FormSection>
        <div className="flex justify-between">
          <span>
            Already Registered
            <NavLink
              to="/login"
              className={
                'hover:border-b-2 px-2 text-blue-500 cursor-pointer hover:font-bold hover:text-blue-600 transition-all'
              }
            >
              Login
            </NavLink>
          </span>
        </div>
      </Form>
    </motion.div>
  );
};

export default Register;
