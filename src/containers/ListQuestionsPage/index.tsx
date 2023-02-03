/* eslint-disable react-hooks/rules-of-hooks */
import { Question } from '@/domain/questions/questions';
import { Container } from './styles';
import { useId } from 'react';
import { Header } from '@/components/global/Header';

export type QuestionProps = {
  questions: Question[];
};

export default function ListQuestionsPage({ questions }: QuestionProps) {
  return (
    <Container>
      <Header />
      {questions.map((questions) => (
        <div key={useId()}>
          <h1>question {questions.id}</h1>
          <div>{questions.body}</div>
        </div>
      ))}
    </Container>
  );
}
