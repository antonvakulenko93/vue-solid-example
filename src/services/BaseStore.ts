import { WithId } from '@/interfaces'

export abstract class BaseStore<T extends WithId> {
  private data: Array<T> = new Array<T>();

  public getAll (): Array<T> {
    return this.data
  }

  public delete (deletedItemId: string): boolean {
    const removedItem = this.data.find(({ id }) => deletedItemId === id)
    if (!removedItem) {
      return false
    }
    const index = this.data.indexOf(removedItem)
    this.data.splice(index, 1)
    return true
  }

  public add (item: T): void {
    this.data.push(item)
  }

  public update (item: T): boolean {
    const updatedItemIndex = this.data.findIndex(({ id }) => item.id === id)
    if (updatedItemIndex !== -1) {
      this.data[updatedItemIndex] = item
      return true
    }
    return false
  }
}
