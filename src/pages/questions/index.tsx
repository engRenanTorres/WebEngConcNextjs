import ListQuestionsPage from '@/containers/ListQuestionsPage';
import { getAllQuestions } from '@/data/questions/get-all-questions';
import { Question } from '@/domain/questions/questions';
import { GetStaticProps } from 'next';

export type QuestionProps = {
  questions: Question[];
};

export default function questions({ questions }: QuestionProps) {
  return <ListQuestionsPage questions={questions} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const questions = await getAllQuestions();
  return {
    props: { questions },
  };
};
