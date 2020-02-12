import { BaseStore } from '@/services/BaseStore'
import { Project } from '@/interfaces'
import uuid from 'uuid'
import faker from 'faker'

export class ProjectStore extends BaseStore<Project> {
  add () {
    const project: Project = {
      id: uuid(),
      name: faker.company.companyName()
    }
    super.add(project)
  }
}
