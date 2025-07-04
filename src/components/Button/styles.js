import styled from 'styled-components'

export const MyButtonWrapper = styled.div`
  z-index: 3;
  position: relative;
  margin-top: 1rem;
`

export const MyButton = styled.button`
  color: rgb(44, 44, 44);
  background-color: #ffffff;
  border-color: rgb(44, 44, 44);
  width: 15rem;
  height: 2.8rem;
  font-size: 1.1rem;
  border-radius: 10px;
  border: 2px solid;
  cursor: pointer;
  transition: transform 0.3s ease;
  font-weight: 600;

  &:hover {
    transform: translateY(-5px);
    background: #EEF77D;
    background: linear-gradient(0deg,rgba(238, 247, 125, 1) 0%, rgba(237, 58, 228, 1) 100%);
    color: black;
  }

`