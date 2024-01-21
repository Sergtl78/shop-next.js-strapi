type Props = {
  params: { id: string }
}

const SettingsPage = ({ params }: Props) => {
  return <div>SettingsPage{params.id}</div>
}

export default SettingsPage
