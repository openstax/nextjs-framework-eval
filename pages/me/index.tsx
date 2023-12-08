import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { onUpdateUser } from './index.telefunc'
import type { User } from '../../models/user'

export default function AboutMe({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const onSubmit = async (ev: any) => {
    ev.preventDefault();
    const inputs = ev.target.elements
    await onUpdateUser({
      name: inputs.name.value,
      email: inputs.email.value,
    })
  }

  return (

    <form onSubmit={onSubmit}>
      ID: {user.id}<br />
      Name: <input type="text" name="name" defaultValue={user.name} autoFocus /><br />
      Email: <input type="text" name="email" defaultValue={user.email} /><br />
      <button type="submit">Submit</button>
    </form>

  )

  return <div>About Me</div>
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
