import styled from 'styled-components'
import { checkColor } from '../../utils/checkColor'

interface CustomTextProps {
  color: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4rem auto 0 auto;
  @media (min-width: 768px) {
    width: 46rem;
  }
`

export const NumberText = styled.p`
  font-size: 1rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 50%;
  margin-left: 0.625rem;
  background-color: ${({ theme }) => theme.colors.quintenary};
  color: ${({ theme }) => theme.colors.whiteText};
`

export const NumberTextCompleted = styled.p`
  font-size: 1rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  margin-left: 0.625rem;
  background-color: ${({ theme }) => theme.colors.quintenary};
  color: ${({ theme }) => theme.colors.whiteText};
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const CustomText = styled.p<CustomTextProps>`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ color, theme }) => checkColor(color, theme)};
`