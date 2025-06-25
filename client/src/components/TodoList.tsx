import {Flex, Spinner, Stack, Text} from "@chakra-ui/react";
import {useState} from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const todos = [
        {
            _id: 1,
            body: "Buy groceries",
            completed: true,
        },
        {
            _id: 2,
            body: "Walk the dog",
            completed: false,
        },
    ];

    return (
        <>
            <Text 
                fontSize={"4xl"} 
                textTransform={"uppercase"} 
                fontWeight ={'bold'} 
                textAlign={'center'} 
                my={2}
            >
                Today's Tasks
            </Text>
            {isLoading && (
                <Flex justifyContent ={'center'} my ={4}>
                    <Spinner size ={'xl'} />
                </Flex>
            )}
            {!isLoading && todos?.length === 0 && (
                <Stack alignItems = {'center'} gap ='3'>
                    <Text fontSize ={'xl'} textAlign={'center'} color = {'gray.500'}>
                        All Tasks Completed!
                    </Text>
                </Stack>
            )}
            <Stack gap ={'3'} alignItems={'center'}>
                {todos?.map((todo) => (
                    <TodoItem key = {todo._id} todo = {todo}/>
                ))}
            </Stack>
        </>
    );
};
export default TodoList;