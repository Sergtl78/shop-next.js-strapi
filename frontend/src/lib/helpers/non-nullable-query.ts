export type NonNullableQuery<T> = {
  [Prop in keyof T]-?: NonNullableQuery<NonNullable<T[Prop]>>
}
