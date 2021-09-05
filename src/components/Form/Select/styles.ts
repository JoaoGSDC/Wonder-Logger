import styled from 'styled-components'

import { StylesConfig } from 'react-select'

export const Container = styled.div`
  margin: 24px 0;
`

export const InputLabel = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #707070;
  font-size: 0.85rem;
  user-select: none;
  margin-bottom: 12px;

  svg {
    margin-right: 8px;
    color: #707070;
  }
`

export const selectStyles: StylesConfig<any, any> = {
  placeholder: provided => ({
    color: '#bababa',
    userSelect: 'none'
  }),
  container: provided => ({
    ...provided,
    flex: 1,
    userSelect: 'none'
  }),
  control: (_, state) => ({
    display: 'flex',
    opacity: state.isDisabled ? 0.5 : 1,
    backgroundColor: '#efefef',
    border: 0,
    outline: 0,
    height: 44,
    borderRadius: 10,
    paddingLeft: 12,
    paddingRight: 12,
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '0.85rem',
    lineHeight: '28px',
    width: '100%',
    userSelect: 'none'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  menu: provided => ({
    ...provided,
    boxShadow: '0px 4px 4px rgb(0 0 0 / 5%)',
    marginTop: -4,
    backgroundColor: '#eaeaea',
    border: 0,
    outline: 0,
    borderRadius: '0 0 15px 15px',
    paddingBottom: '12px',
    fontSize: '0.85rem',
    userSelect: 'none'
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected
      ? '#52b032'
      : state.isFocused
      ? 'rgba(82, 176, 50, 0.1)'
      : 'transparent',
    padding: '8px 24px',
    userSelect: 'none'
  })
}
