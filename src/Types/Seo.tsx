export interface SeoClassProps {
  title: string
  path: string
  keywords?: string[]
  description?: string
  image?: {
    src: string
    width: number
    height: number
  }
}
