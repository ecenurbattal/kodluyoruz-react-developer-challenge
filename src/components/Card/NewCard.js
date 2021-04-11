import React, { useState } from 'react';
import { AddButton, CardContent, CardContentWrapper, CardTitle, CardWrapper, NewInput, RowWrapper, StyledText, StyledTrash } from '../../components/Card/Card.styles';
import { StyledButton } from '../FormElements/FormElements';

const NewCard = ({onCreateButtonClick,onCancelButtonClick,onSaveButtonClick,createButton,task}) => {

    const [taskList,setTaskList] = useState(task?.list ? task?.list : []);

    const [value,setValue] = useState();
    const [cardTitle,setCardTitle] = useState(task?.title ? task?.title : '');
    const [category,setCategory] = useState(task?.category ? task?.category : '');

    const handleTaskInputChange = (event) => {
        setValue(event.target.value)
    }

    const handleCardTitleChange = (event) => {
        setCardTitle(event.target.value)
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    const handleTaskAddClick = () => {
        setTaskList(prevState => [...prevState,{
            content:value,
            isDone:false
        }])
    }

    const handleDeleteTask = (event,index) => {
        event.preventDefault();
        let list = taskList.filter((el,i) => i!==index)
        setTaskList(list)
    }

    const createTasks = (list) => {
        return (
            <CardContentWrapper>
                {list.map((item,i) => (
                <CardContent>
                    <input 
                    type="checkbox" 
                    defaultChecked={item.isDone} 
                    onChange={() => item.isDone = !item.isDone}
                    />
                    <StyledText>{item.content}</StyledText>
                    <StyledTrash
                        onClick={(event) => handleDeleteTask(event,i)}
                    />
                    </CardContent>
                ))}
            </CardContentWrapper>
        )
    }
    

    return (
        <CardWrapper>
            {createButton ? (
                <>
                    {task&&<StyledTrash/>}
                    <NewInput
                        required={true}
                        value={cardTitle}
                        type='text'
                        placeholder='Başlığı giriniz'
                        onChange={(event) => handleCardTitleChange(event)}
                    />
                    {createTasks(taskList)}
                    <RowWrapper>
                    <NewInput
                        required={true}
                        type='text'
                        placeholder='Görev giriniz'
                        onChange={(event) => handleTaskInputChange(event)}
                    />
                    <AddButton
                        type='button'
                        onClick={handleTaskAddClick}
                    >Ekle</AddButton>
                    </RowWrapper>
                        <NewInput
                            required={true}
                            type='text'
                            placeholder='Kategori giriniz'
                            value={category}
                            onChange={(event) => handleCategoryChange(event)}
                        />
                    <RowWrapper>
                        <AddButton
                            type='button'
                            value='saveCard'
                            onClick={() => onSaveButtonClick&&onSaveButtonClick(taskList,cardTitle,category)}
                            //onClick={console.log(taskList)}
                        >Kaydet</AddButton>
                        <AddButton
                            type='button'
                            value='cancelCard'
                            onClick={() => onCancelButtonClick&&onCancelButtonClick()}
                        >
                            İptal Et
                        </AddButton>
                    </RowWrapper>
                </>
            ) : (
                <>
                <CardTitle>Yeni İçerik</CardTitle>
                <StyledButton
                    type='button'
                    name='create'
                    onClick={() => onCreateButtonClick&&onCreateButtonClick()}
                >
                    Oluştur
                </StyledButton>
                </>
            )}
        </CardWrapper>
    )
}

export default NewCard
