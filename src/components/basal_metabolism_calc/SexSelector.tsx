import React, { useState } from 'react';
import {Button, useColorModeValue, HStack} from '@chakra-ui/react';

type SexType = 'man' | 'woman';

interface ActivityLevelOption {
  label: string;
  value: SexType;
}

const SexSelector: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<SexType>('man');

  const sexTypes: ActivityLevelOption[] = [
    { label: 'Мужской', value: 'man' },
    { label: 'Женский', value: 'woman' },
  ];

  const handleSelect = (value: SexType) => {
    setSelectedLevel(value);
  };

  const buttonColor = useColorModeValue('white', 'white');
  const selectedButtonColor = useColorModeValue('teal.500', 'teal.600');

  return (
      <HStack spacing={3} align="start">
        {sexTypes.map((level) => (
            <Button
                key={level.value}
                onClick={() => handleSelect(level.value)}
                bg={selectedLevel === level.value ? selectedButtonColor : buttonColor}
                color={selectedLevel === level.value ? 'white' : 'black'}
                _hover={{ bg: selectedLevel === level.value ? selectedButtonColor : buttonColor }}
                size="xs"
                borderRadius="md"
                px={2}
                py={1}
            >
              {level.label}
            </Button>
        ))}
      </HStack>
  );
};

export default SexSelector;