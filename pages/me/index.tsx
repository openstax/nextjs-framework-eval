import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import type { User } from '../../models/user'
import { MeForm } from '../../components/me-form'

export default function AboutMe({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <>
      <div>About Me</div>
      <MeForm user={user} />
    </>
  )
}


export const getServerSideProps: GetServerSideProps<{ user: User }> = async () => {
  const { CURRENT_USER } = await import('../../models/user')

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      user: CURRENT_USER,
    }
  }
}
