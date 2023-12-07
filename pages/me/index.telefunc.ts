
import { CURRENT_USER, User } from '../../models/user'


// multi-user is a fad,  why would a website ever need more than one?
export async function onUpdateUser(user: User) {
  Object.assign(CURRENT_USER, user)
}
