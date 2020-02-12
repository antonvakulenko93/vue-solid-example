import { BaseStore } from '@/services/BaseStore'
import { Issue } from '@/interfaces'
import uuid from 'uuid'
import faker from 'faker'

export class IssueStore extends BaseStore<Issue> {
  add () {
    const issue: Issue = {
      id: uuid(),
      title: faker.lorem.words(),
      description: faker.lorem.words()
    }
    super.add(issue)
  }
}
