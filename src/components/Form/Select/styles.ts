import styled from 'styled-components'

import { Styles } from 'react-select'

export const Container = styled.div`
  margin: 24px 0;
`

export const InputLabel = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1rem;
  user-select: none;

  svg {
    margin-right: 8px;
  }
`

export const selectStyles: Styles<any, true> = {
  container: provided => ({
    ...provided,
    flex: 1
  }),
  control: (_, state) => ({
    marginTop: '14px',
    display: 'flex',
    opacity: state.isDisabled ? 0.5 : 1,
    backgroundColor: '#eaeaea;',
    border: 0,
    outline: 0,
    height: 44,
    borderRadius: 10,
    paddingLeft: 12,
    paddingRight: 12,
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '28px',
    width: '100%'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  menu: provided => ({
    ...provided,
    marginTop: -8,
    backgroundColor: '#EFF0F6',
    border: 0,
    outline: 0,
    borderRadius: '0 0 15px 15px',
    paddingBottom: '12px'
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected
      ? '#114fac'
      : state.isFocused
      ? '#E7EDF7'
      : 'transparent',
    padding: '8px 24px'
  })
}
