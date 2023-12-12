import type { User } from '../models/user'
import { onUpdateUser } from './me-form.telefunc'

export function MeForm({ user }: { user:User }) {

  const onSubmit = async (ev: any) => {
    ev.preventDefault();
    const inputs = ev.target.elements
    await onUpdateUser({
      id: 'me',
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

}
