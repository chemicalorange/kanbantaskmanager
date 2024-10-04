type TitleProps = {
    title: string,
    needOption: boolean
}

const Title = ({title, needOption}: TitleProps) => {
  return (
    <div>
        <h2>{title}</h2>
        {needOption && <></>}
    </div>
  )
}

export default Title