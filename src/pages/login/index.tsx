import { FormEventHandler, useCallback } from 'react';
import { useRouter } from 'next/router';
import useAuth from '@/utils/hooks/useAuth';

interface eventTarget extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

const Login = ({ history }: any) => {
  const router = useRouter();
  const { currentUser, loading, signin, signout } = useAuth();
  const handleLogin: FormEventHandler<HTMLFormElement> = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { email, password } = (event.target as HTMLFormElement)
        .elements as eventTarget;
      console.log(email.value, password.value);
      try {
        if (signin) await signin(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    [history],
  );

  if (currentUser) return router.push('/');

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name='email' type='email' placeholder='Email...' />
        </label>
        <label>
          Password
          <input name='password' type='password' placeholder='Password...' />
        </label>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
