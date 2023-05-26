type Meta = {
  id: string,
  title: string,
  date: string,
  tags: string[],
  path: string,
}

type BlogPost = {
  meta: Meta,
  content: ReactElement<any, string | JSXElementConstructor<any>>,
}