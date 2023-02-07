import firebase from '@/config/firebase/firebaseConfig';
import { User } from '@/domain/users/users';
import { useRouter } from 'next/router';
import React, { ReactNode, createContext, useState } from 'react';

type Props = {
  children: ReactNode;
};

type AuthContextProps = {
  user?: User | null;
  loading: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  signin?: () => {};
  // eslint-disable-next-line @typescript-eslint/ban-types
  signout?: () => {};
};

const userNull = {} as User;

const AuthContext = createContext<AuthContextProps>({
  user: userNull,
  loading: false,
});

export const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<any>(userNull);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const signin = async () => {
    try {
      setLoading(true);
      return firebase
        .auth()
        .signInWithPopup(new firebase.auth.GithubAuthProvider())
        .then((response) => {
          setCurrentUser(response.user);
          router.push('/dashboard');
        });
    } finally {
      setLoading(false);
    }
  };

  const signout = async () => {
    try {
      setLoading(true);
      router.push('/');

      return firebase
        .auth()
        .signOut()
        .then(() => setCurrentUser(false));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user: currentUser, loading, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
