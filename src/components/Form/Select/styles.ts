import { StylesConfig } from 'react-select'
import styled from 'styled-components'

export const SelectLabel = styled.div`
  position: absolute;
  top: -30px;
  left: 10px;
  color: #fff;
  font-size: 0.95rem;
  padding: 0 6px;
  border-radius: 0 !important;
`

export const generateSelectStyles = (
  isErrored?: boolean
): StylesConfig<any, true> => {
  return {
    placeholder: () => ({
      color: isErrored ? '#ff1744' : '#707070',
      fontWeight: 400
    }),
    container: provided => ({
      ...provided,
      flex: 1,
      color: '#ff1744'
    }),
    control: (_, state) => ({
      display: 'flex',
      opacity: state.isDisabled ? 0.7 : 1,
      backgroundColor: '#FAFAFA',
      border: isErrored
        ? '1px solid #ff1744'
        : state.isFocused
        ? '2px solid #2e2b3e'
        : '1px solid  #BABABA',
      outline: 0,
      height: 56,
      borderRadius: 16,
      paddingLeft: 4,
      paddingRight: 4,
      fontFamily: 'Poppins',
      fontWeight: 300,
      fontSize: '14px',
      lineHeight: '28px',
      width: '100%'
    }),
    indicatorSeparator: () => ({
      display: 'none'
    }),
    menu: provided => ({
      ...provided,
      marginTop: 2,
      backgroundColor: '#fafafa',
      border: 0,
      outline: 0,
      borderRadius: 10,
      padding: '8px 0',
      boxShadow:
        'rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px',
      zIndex: 99
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected
        ? '#2e2b3e'
        : state.isFocused
        ? '#eaeaea'
        : 'transparent',
      color: state.isSelected
        ? '#FFFFFF'
        : state.isFocused
        ? '#707070'
        : '#707070',
      fontSize: '0.85rem',
      fontWeight: 400,
      padding: '8px 24px',
      borderRadius: 4
    })
  }
}
