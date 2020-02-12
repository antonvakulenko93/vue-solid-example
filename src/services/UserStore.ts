import { BaseStore } from '@/services/BaseStore'
import { User } from '@/interfaces'
import uuid from 'uuid'
import faker from 'faker'

export class UserStore extends BaseStore<User> {
  add () {
    const user: User = {
      id: uuid(),
      avatar: faker.image.avatar(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    }
    super.add(user)
  }
}
