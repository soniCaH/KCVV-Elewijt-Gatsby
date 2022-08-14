import { Tag } from "./Drupal"

export interface ShareProps {
  socialConfig: { twitterHandle: string; config: { url: string; title: string } }
  tags: Tag[]
}
