type Props = {
  params: { id: string }
}

const CommentsPage = ({ params }: Props) => {
  return <div>CommentsPage{params.id}</div>
}

export default CommentsPage
