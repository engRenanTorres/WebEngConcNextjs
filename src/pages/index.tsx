import Head from 'next/head';
import { Header } from '@/components/global/Header';
import Topbar from '@/components/global/Topbar';
import { HOME_SUBTITLE, HOME_TITLE } from '@/config/appMessages';

export default function Home() {
  return (
    <>
      <Head>
        <title>Engenharia de Concursos</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/images/favicon.svg' />
      </Head>
      <main>
        <Header title={HOME_TITLE} subtitle={HOME_SUBTITLE} />
        <h1>oi</h1>
      </main>
    </>
  );
}
