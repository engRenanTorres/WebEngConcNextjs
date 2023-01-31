import { useRouter } from 'next/router';

export default function questions() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return <h1>questão de id: {router.query.qid}</h1>;
}
