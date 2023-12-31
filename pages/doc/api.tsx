import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createSwaggerSpec } from 'next-swagger-doc';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';
import { getApiDocs } from '@/swagger';


const SwaggerUI = dynamic<{
  spec: any; // swagger-ui-react is declared as "PureComponent" not Component like dynamic expects
}>((import('swagger-ui-react') as any), { ssr: false });

function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <SwaggerUI spec={spec} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const spec = await getApiDocs();

  return {
    props: {
      spec,
    },
  };
};

export default ApiDoc;
