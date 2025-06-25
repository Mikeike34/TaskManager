import {Badge, Box, Flex, Text} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const TodoItem = ({todo} : {todo : any}) => {
    return (
        <Flex gap ={2} alignItems ={'center'} width = {'60%'} >
            <Flex flex ={1} alignItems ={'center'} border = '1px solid' borderColor={'gray.600'} p={2} borderRadius={'lg'} justifyContent ={'space-between'}>
                <Text color={todo.completed ? '#7fdb6a' : '#feda75'} textDecoration={todo.completed ? "line-through" : 'none'}>
                    {todo.body}
                </Text>
                {todo.completed && (
                    <Badge ml ='1' bg ='#7fdb6a' color = 'black'>
                        Done
                    </Badge>
                )}
                {!todo.completed && (
                    <Badge ml ='1' bg ='#feda75' color ='black'>
                        In Progress
                    </Badge>
                )}
            </Flex>
            <Flex gap ={2} alignItems={'center'}>
                <Box color = {'green.500'} cursor ={'pointer'}>
                    <FaCheckCircle size={20} />
                </Box>
                <Box color ={'red.500'} cursor ={'pointer'}>
                    <MdDelete size ={25} />
                </Box>
            </Flex>
        </Flex>
    );
};

export default TodoItem