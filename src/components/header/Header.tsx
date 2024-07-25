import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  IconButton,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import './Header.css';


export default function Header() {
  return (
    <div id='boxHeader'>
      <Menu>
        <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            colorScheme="teal"
            size="lg"
            borderRadius="10px"
            boxShadow="md"
            _hover={{ bg: 'teal.500', color: 'white' }}
            _active={{ bg: 'teal.600', color: 'white' }}
        />
        <MenuList>
          <MenuItem><Link to='/bmr'>Рассчитать базовый метаболизм</Link></MenuItem>
          <MenuItem><Link to='/food'>Рассчитать массу продукта</Link></MenuItem>
          <MenuItem><Link to='/reviews'>Отзывы</Link></MenuItem>
          <MenuItem><Link to='/author'>Автор</Link></MenuItem>
        </MenuList>
      </Menu>
    </div>
  )
};