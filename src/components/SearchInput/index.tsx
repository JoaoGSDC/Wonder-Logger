import { InputHTMLAttributes } from 'react'
import { RiSearchLine } from 'react-icons/ri'

import { Container, IconContainer } from './styles'

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>

const SearchInput: React.FC<SearchInputProps> = ({ ...rest }) => {
  return (
    <Container>
      <IconContainer>
        <RiSearchLine size={16} />
      </IconContainer>
      <input type="text" placeholder="Buscar ..." {...rest} />
    </Container>
  )
}

export default SearchInput
