/* eslint-disable react-hooks/rules-of-hooks */
import { Question } from '@/domain/questions/questions';
import { Container } from './styles';
import { useId } from 'react';

export type QuestionProps = {
  questions: Question[];
};

export default function ListQuestionsPage({ questions }: QuestionProps) {
  return (
    <Container>
      {questions.map((questions) => (
        <>
          <h1 key={useId()}>question {questions.id}</h1>
          <div>{questions.body}</div>
        </>
      ))}
    </Container>
  );
}
