/* eslint-disable react-hooks/rules-of-hooks */
import { Question } from '@/domain/questions/questions';
import { Container } from './styles';
import { useContext, useId } from 'react';
import { ColorModeContext } from '@/styles/theme';
import { IconButton } from '@mui/material';

export type QuestionProps = {
  questions: Question[];
};

export default function ListQuestionsPage({ questions }: QuestionProps) {
  const colorMode = useContext(ColorModeContext);
  return (
    <Container>
      <IconButton onClick={colorMode.toggleColorMode}></IconButton>
      {questions.map((questions) => (
        <>
          <h1 key={useId()}>question {questions.id}</h1>
          <div>{questions.body}</div>
        </>
      ))}
    </Container>
  );
}
