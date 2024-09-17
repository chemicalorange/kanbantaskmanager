import React from 'react'

type TitleProps = {
    title: string,
    needOption: boolean
}

const Title = ({title, needOption}: TitleProps) => {
  return (
    <div>
        <h2>{title}</h2>
        {needOption && <p>123</p>}
    </div>
  )
}

export default Title