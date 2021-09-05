import styled from 'styled-components'

export const Container = styled.div`
  margin: 24px auto;
  max-width: 50%;
  user-select: none;

  .pagination {
    justify-content: center;
    display: flex;
    padding-left: 0;
    list-style: none;
  }

  .page-item .page-link {
    position: relative;
    display: block;
    margin: 0 2px;
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    padding: 4px 12px;
  }

  .page-item.active .page-link {
    border-radius: 8px;
    background: ${props => props.theme.colors.primary};
    color: white;
  }

  .page-item.disabled .page-link {
    color: #6c757d;
    pointer-events: none;
    cursor: auto;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`
