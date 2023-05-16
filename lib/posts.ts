type Filetree = {
  "tree": [
    {
      "path": string,
    }
  ]
}

export async function getPostsByName(fileName: string) {

}

export async function getPostMeta(): Promise<Meta[] | undefined> {
  const res = await fetch('https://api.github.com/repos/samezzz/blog-posts/git/trees/main?recursive=1', {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, 'X-Github-Api-Version': '2022-11-28'
    }
  })

  if (res.ok) return undefined

  const repoFiletree: Filetree = await res.json()

  const filesArray = repoFiletree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'))

  const posts: Meta[] = []

  for (const file of filesArray) {
    const post = await getPostsByName(file)
    if (post) {
      const { meta } = post
      post.push(meta)
    }
  }

  return posts.sort((a, b) => a.date < b.date ? 1 : -1)
}