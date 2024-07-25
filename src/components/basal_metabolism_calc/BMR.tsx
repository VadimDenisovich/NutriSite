import './BMR.css'
import React from 'react';
import ActivityLevelSelector from "./ActivityLevelSelector";
import UnitInput from "./Unit";
import SexSelector from "./SexSelector";
import {Button} from "@chakra-ui/react";

export default function BMR() {
  const [hovered, setHovered] = React.useState(false);


  return (
      <div id='basalBody'>
        <div className='basalStrings'>
          <label>Возраст</label>
          {/*<input className='basalInputs'></input> /!*age*!/*/}
          <UnitInput phrase='лет'/>
        </div>
        <div className='basalStrings'>
          <label>Вес</label>
          {/*<input className='basalInputs'></input> /!*height*!/*/}
          <UnitInput phrase='кг'/>
        </div>
        <div className='basalStrings'>
          <label>Рост</label>
          {/*<input className='basalInputs'></input> /!*weight*!/*/}
          <UnitInput phrase='см'/>
        </div>
        <div className='basalStrings'>
          <label>Активность</label>
          <ActivityLevelSelector /> {/*acitvity*/}
        </div>
        <div className='basalStrings'>
          <label>Пол</label>
          <SexSelector />
        </div>
        <Button
          bg={hovered ? '#ffffff' : 'teal.500'}
          color={hovered ? 'black' : 'white'}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          _hover={{ bg: '#ffffff' }}
          borderRadius='md'
          id='basalButton'
          size='lg'
          px={2}
          py={2}
        >Рассчитать</Button>
      </div>
  )
};