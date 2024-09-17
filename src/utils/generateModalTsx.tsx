import { useAppDispatch, useAppSelector } from "../store/hooks";

import Label from "../components/shared/Label/Label";
import Button from "../components/shared/Button/Button";
import Input from "../components/shared/Input/Input";
import Textarea from "../components/shared/Textarea/Textarea";
import Select from "../components/shared/Select/Select";
import Title from "../components/shared/Title/Title";
import SubInput from "../components/shared/SubInput/SubInput";

type ModalProps = {
    modalType: 'createTask' | 'editTask' | 'createBoard' | 'editBoard', 
}

export const generateModalTsx =  ({modalType}: ModalProps) => {
    

    const dispatch = useAppDispatch()

    switch (modalType) {
        case 'createTask':
            return (
                <>
                    <Title title="Add New Task" needOption={false} />
                    <Label title="Title">
                        <Input placeholder="e.g Take coffee break" type="text" onChangeHandler={() => {}} />
                    </Label> 
                    <Label title="Description">
                        <Textarea placeholder="e.g It`s always good to take a break" onChangeHandler={() => {}} />
                    </Label>
                    <Label title="Subtasks">
                        <SubInput subInput={{}} />
                        <Button color="white" title="+ Add New Subtask" onClickHandler={() => {}} />
                    </Label>
                    <Label title="Status">
                        <Select variants={['Todo', 'In progress', 'Done']} onClickHandler={() => {}} />
                    </Label>
                    <Button color="purple" title="Create Task" onClickHandler={() => {}} />
                </>
            ) 
        case 'editTask':
            return (
                <>
                    <Title title="Add New Task" needOption={false} />
                    <Label title="Title">
                        <Input placeholder="e.g Take coffee break" type="text" onChangeHandler={() => {}} />
                    </Label> 
                    <Label title="Description">
                        <Textarea placeholder="e.g It`s always good to take a break" onChangeHandler={() => {}} />
                    </Label>
                    <Label title="Subtasks">
                        <SubInput subInput={{}} />
                        <Button color="white" title="+ Add New Subtask" onClickHandler={() => {}} />
                    </Label>
                    <Label title="Status">
                        <Select variants={['Todo', 'In progress', 'Done']} onClickHandler={() => {}} />
                    </Label>
                    <Button color="purple" title="Create Task" onClickHandler={() => {}} />
                </>
            )

        case 'createBoard': 
            return (
                <>
                    <Title title="Add New Board" needOption={false} />
                    <Label title="Name">
                        <Input placeholder="e.g Web Design" type="text" onChangeHandler={() => {}} />
                    </Label> 
                    <Label title="Columns">
                        <SubInput subInput={{}} />
                        <Button color="white" title="+ Add New Column" onClickHandler={() => {}} />
                    </Label>
                    <Button color="purple" title="Create New Board" onClickHandler={() => {}} />
                </>
            )
        case 'editBoard':
            return(
                <>
                    <Title title="Edit Board" needOption={false} />
                    <Label title="Name">
                        <Input placeholder="e.g Web Design" type="text" onChangeHandler={() => {}} />
                    </Label> 
                    <Label title="Columns">
                        <SubInput subInput={{}} />
                        <Button color="white" title="+ Add New Column" onClickHandler={() => {}} />
                    </Label>
                    <Button color="purple" title="Save Changes" onClickHandler={() => {}} />
                </>
            )
    }
}