export interface Pathalias {
  alias: string
}

export interface Tag {
  name: string
  path: Pathalias
}

export interface DaterangeField {
  value: string
  end_value: string
}
