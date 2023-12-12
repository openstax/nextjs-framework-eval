import { GetServerSideProps } from 'next';
import { getApiDocs } from '@/swagger';

export default function uncalled() {
    return (
        ''
    )
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/json");
  const spec = await getApiDocs();
  res.write(JSON.stringify(spec));
  res.end();
  return {
    props: {},
  };
}
