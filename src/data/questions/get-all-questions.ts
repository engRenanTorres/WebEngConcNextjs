import { LIST_QUESTIONS_URL } from '@/config/app-config';
import { Question } from '@/domain/questions/questions';
import { fetchJson } from '@/utils/fetch-json';

export const getAllQuestions = async (): Promise<Question[]> => {
  const questions = await fetchJson<Promise<Question[]>>(LIST_QUESTIONS_URL);
  return questions;
};
