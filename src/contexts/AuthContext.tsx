import { User } from '@/domain/users/users';
import { useRouter } from 'next/router';
import React, { ReactNode, createContext, useState } from 'react';

type Props = {
  children: ReactNode;
};

type AuthContextProps = {
  currentUser?: User | null;
  loading: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  signin?: (email: string, password: string) => {};
  // eslint-disable-next-line @typescript-eslint/ban-types
  signout?: () => {};
};

const userNull = {} as User;

const AuthContext = createContext<AuthContextProps>({
  currentUser: userNull,
  loading: false,
});

export const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<any>(userNull);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const signin = async (email: string, password: string) => {
    /*try {
      setLoading(true);
      return await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          setCurrentUser(response.user);
          router.push('/');
        });
    } finally {
      setLoading(false);
    }*/
  };

  const signout = async () => {
    /*try {
      setLoading(true);
      router.push('/');

      return await firebase
        .auth()
        .signOut()
        .then(() => setCurrentUser(false));
    } finally {
      setLoading(false);
    }*/
  };

  return (
    <AuthContext.Provider
      value={{ currentUser: currentUser, loading, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
