import { ChangeEventHandler, MouseEventHandler } from 'react'
import CloseIcon from '../../../assets/svg/icon-cross.svg?react'
import Input from '../Input/Input'
import styles from './SubInput.module.css'

type SubInputProps = {
  subInputData: object,
  onChangeHandler: ChangeEventHandler<HTMLInputElement>,
  onClickHandler: MouseEventHandler<SVGSVGElement>
}

const SubInput = ({subInputData, onChangeHandler, onClickHandler}: SubInputProps) => {
  return (
    <div className={styles.subInput}>
      <Input type='text' value={subInputData.name} placeholder='e.g Make coffee' onChangeHandler={(e) => onChangeHandler(e, subInputData)} />
      <CloseIcon onClick={() => onClickHandler(subInputData)} />
    </div>
  )
}

export default SubInput