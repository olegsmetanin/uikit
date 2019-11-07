
export interface ILoadRequest<T> {
  query?: T
}

export interface IListLoadResponse<T> {
  data: T[]
}

export interface IItemLoadResponse<T> {
  data: T
}

export interface ILoadError {
  error: object
}

export interface IIdQuery {
  id: string
}

export interface ISelectQuery {
  q?: string
  id?: string
  ids?: string[]
}
