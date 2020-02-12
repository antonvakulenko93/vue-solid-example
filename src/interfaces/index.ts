import { BaseStore } from '@/services/BaseStore'

export interface WithId {
  id: string;
}

export interface User extends WithId {
    avatar: string;
    firstName: string;
    lastName: string;
}

export interface Project extends WithId {
    name: string;
}

export interface Issue extends WithId {
    title: string;
    description: string;
}

export interface EntityList<T extends WithId> {
  name: string;
  store: BaseStore<T>;
}
