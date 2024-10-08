type TitleProps = {
    title: string,
}

const Title = ({title}: TitleProps) => {
  return (
    <div>
        <h2>{title}</h2>
    </div>
  )
}

export default Title