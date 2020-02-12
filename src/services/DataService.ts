import { BaseStore } from '@/services/BaseStore'
import { WithId } from '@/interfaces'

type ListenCallback<T> = (data: T[]) => void;

export class DataService<T extends WithId > {
  private listeners: Array<ListenCallback<T>> = new Array<ListenCallback<T>>();

  constructor (public store: BaseStore<T>) {
    console.info('Init store')
  }

  delete (id: string) {
    this.store.delete(id)
    this.notifyListeners()
  }

  add (newItem: T) {
    this.store.add(newItem)
    this.notifyListeners()
  }

  update (updatedItem: T) {
    this.store.update(updatedItem)
    this.notifyListeners()
  }

  subscribe (cb: ListenCallback<T>) {
    this.listeners.push(cb)
    cb(this.store.getAll())
  }

  unsubscribe (cb: ListenCallback<T>) {
    const index = this.listeners.indexOf(cb)
    if (index === -1) {
      return false
    }
    this.listeners.splice(index, 1)
    return true
  }

  private notifyListeners () {
    const data = this.store.getAll()
    this.listeners.forEach((fn) => fn(data))
  }
}
