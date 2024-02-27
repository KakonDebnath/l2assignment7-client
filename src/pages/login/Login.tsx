import { Form, FormSection, FormSubmit, Input } from '@/components/ui/Form';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import {
  LoginFormZodSchema,
  TLoginFormValidationType,
} from '@/components/ui/Form/formValidation';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { toast } from 'sonner';
import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/features/auth/authSlice';
import { jwtDecode } from 'jwt-decode';

const loginAnimation = {
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

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TLoginFormValidationType>({
    resolver: zodResolver(LoginFormZodSchema),
  });
  let from = location.state?.from?.pathname || '/dashboard';
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('loading');
    try {
      const res = await login(data).unwrap();
      const user = jwtDecode(res.token);
      dispatch(setUser({ user: user, token: res.token }));
      toast.success('Successfully Login', { id: toastId, duration: 3000 });
      navigate(from, { replace: true });
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
      variants={loginAnimation}
      initial="hidden"
      animate="visible"
      className="mb-10"
    >
      <h2>Login Now</h2>
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
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
          <FormSubmit>Login</FormSubmit>
        </FormSection>
        <div className="flex justify-between">
          <span>
            New Hare
            <NavLink
              to="/register"
              className={
                'hover:border-b-2 px-2 text-blue-500 cursor-pointer hover:font-bold hover:text-blue-600 transition-all'
              }
            >
              Register Now
            </NavLink>
          </span>

          <span> | </span>
          <NavLink to="" className={'text-red-500'}>
            Forgot Password
          </NavLink>
        </div>
      </Form>
    </motion.div>
  );
};

export default Login;
