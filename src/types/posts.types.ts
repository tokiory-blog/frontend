export interface PostsFrontmatter {
  title: string,
  description: string,
  tags: string[]
}

export interface PostItem extends PostsFrontmatter {
  url: string
}