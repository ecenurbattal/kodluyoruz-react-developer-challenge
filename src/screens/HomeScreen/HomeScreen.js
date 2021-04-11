import React, { useEffect, useState } from 'react';
import { CardContent, CardContentWrapper, CardTitle, CardWrapper, StyledText, Wrapper } from '../../components/Card/Card.styles';
import NewCard from '../../components/Card/NewCard';
import Category from '../../components/Category/Category';
import Menu from '../../components/Menu/Menu';
import Overlay from '../../components/Overlay/Overlay';
import Profile from '../../components/Profile/Profile';
import {createTask, deleteTask, getTasks, updateTask} from '../../services/api';
import {Container} from './HomeScreen.styles'

const HomeScreen = () => {

    const [tasks,setTasks] = useState();

    const [filteredTasks,setFilteredTasks] = useState();
    const [selectedCategory,setSelectedCategory] = useState();

    const [createButton,setCreateButton] = useState(false);
    const [categories,setCategories] = useState();

    const [editingCard,setEditingCard] = useState();

    useEffect(() => {
        const init = async () => {
            try {
                const {data} = await getTasks();
                setFilteredTasks(data);
                setTasks(data);
                    let categories = ['Hepsi'];
                    data?.map((task) => (
                        categories.push(task.category)
                    ))
                    setCategories([...new Set(categories)])
            } catch(err){
            console.error(err)
            }
        }
        init();
    },[])


    const handleCreateButtonClick = () => {
        setCreateButton(true);
    }

    const handleCancelButtonClick = () => {
        setCreateButton(false);
    }


    const handleSaveButtonClick = async (taskList,title,category) => {
        try {
           await createTask({
               title:title,
               category:category,
               list:taskList
           })
           window.location.reload();
        } catch(err){
            console.error(err)
        }
    }

    const handleSaveUpdateButtonClick = async (taskList,title,category) => {
        try {
            await updateTask(editingCard,{
                title:title,
                category:category,
                list:taskList
            })
            window.location.reload();
        } catch(err) {
            console.error(err)
        }
    }

 

    const handleCategoryChange = (category,event) => {
        event.preventDefault();
        if(event.target.checked)  {
            setSelectedCategory(category);
            if(category!=='Hepsi') setFilteredTasks(tasks?.filter((task) => task.category===category))
            else setFilteredTasks(tasks)
        }
        
    }

    const handleEditButton = (id) => {
        setEditingCard(id)
    }

    const handleCardDeleteClick = async (taskId) => {
        try {
            await deleteTask(taskId);
            window.location.reload();
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <Container>
            <Menu>
                <Profile/>
                <Category
                    categories={categories}
                    onCategoryChange={handleCategoryChange}
                    selectedCategory={selectedCategory}
                />
            </Menu>
            <Wrapper>
                {filteredTasks?.map((task) => (
                    task.id===editingCard ? (
                        <NewCard
                        key={task.id}
                        onCreateButtonClick={handleCreateButtonClick}
                        createButton={true}
                        onCancelButtonClick={() => setEditingCard(null)}
                        onSaveButtonClick={handleSaveUpdateButtonClick}
                        task={task}
                />
                    ) : (
                        <CardWrapper 
                        key={task.id}
                    >
                        <Overlay
                            onDeleteButton = {handleCardDeleteClick}
                            onEditButton = {handleEditButton}
                            id = {task.id}
                        />
                        <CardTitle>{task.title}</CardTitle>
                        <CardContentWrapper>
                            {task?.list.map((item,i) => (
                                <CardContent
                                    key={`taskList${task.id}-${i}`}
                                >
                                    <input 
                                    type="checkbox" 
                                    defaultChecked={item.isDone} 
                                    onChange={() => item.isDone = !item.isDone}
                                    />
                                    <StyledText>{item.content}</StyledText>
                                </CardContent>
                            ))}
                        </CardContentWrapper>
                    </CardWrapper>
                    )
                    
                ))}
                <NewCard
                    onCreateButtonClick={handleCreateButtonClick}
                    createButton={createButton}
                    onCancelButtonClick={handleCancelButtonClick}
                    onSaveButtonClick={handleSaveButtonClick}
                />
            </Wrapper>
        </Container>
        
    )
}

export default HomeScreen
