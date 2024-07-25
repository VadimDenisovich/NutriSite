import React, {useEffect, useState} from 'react';
import { Input, InputGroup, InputRightElement, Box, Text } from '@chakra-ui/react';
import './Unit.css';

interface UnitInputProps {
    phrase: string;
}

export default function UnitInput({phrase}:UnitInputProps) {
  const [focused, setFocused] = useState(false);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
      <Box p={4} w='330px' py={1}>
        <InputGroup>
          <Input
              id='unitInput'
              h='35px'
              focusBorderColor='teal.500'
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyPress={handleKeyPress}
              borderColor='gray.600'
          />
          <InputRightElement width="3rem" h='35px'>
            <Text
              color={focused ? 'black' : 'gray.500'}
            >{phrase}</Text>
          </InputRightElement>
        </InputGroup>
      </Box>
  );
};