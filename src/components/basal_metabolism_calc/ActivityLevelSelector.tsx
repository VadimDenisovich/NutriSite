import React, { useState } from 'react';
import {Button, useColorModeValue, HStack} from '@chakra-ui/react';

type ActivityLevel = 'none' | 'low' | 'medium' | 'high';

interface ActivityLevelOption {
  label: string;
  value: ActivityLevel;
}

const ActivityLevelSelector: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<ActivityLevel>('none');

  const activityLevels: ActivityLevelOption[] = [
    { label: 'Отсутствует', value: 'none' },
    { label: 'Малая', value: 'low' },
    { label: 'Средняя', value: 'medium' },
    { label: 'Высокая', value: 'high' },
  ];

  const handleSelect = (value: ActivityLevel) => {
    setSelectedLevel(value);
  };

  const buttonColor = useColorModeValue('white', 'white');
  const selectedButtonColor = useColorModeValue('teal.500', 'teal.600');

  return (
      <HStack spacing={3} align="start">
        {activityLevels.map((level) => (
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

export default ActivityLevelSelector;