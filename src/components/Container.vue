<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="list in entityList"
        :key="list.name"
        cols="12"
        sm="3"
      >
        <List :name="list.name" :service="list.service" :view="list.view"></List>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import List from './List'
import { UserStore } from '@/services/UserStore'
import { ProjectStore } from '@/services/ProjectStore'
import { IssueStore } from '@/services/IssueStore'
import { DataService } from '@/services/DataService'
import UserCard from '@/components/UserCard'
import ProjectCard from '@/components/ProjectCard'
import IssueCard from '@/components/IssueCard'

const userStore = new UserStore()

const userDataService = new DataService(userStore)
const projectDataService = new DataService(new ProjectStore())
const issueDataService = new DataService(new IssueStore())

const entityList = [
  { name: 'Users', service: userDataService, view: UserCard },
  { name: 'Projects', service: projectDataService, view: ProjectCard },
  { name: 'Issues', service: issueDataService, view: IssueCard },
  { name: 'UsersDuplicate', service: userDataService, view: UserCard }
]

export default {
  name: 'Container',
  components: { List },
  data: () => ({ entityList })
}
</script>

<style scoped>
</style>
