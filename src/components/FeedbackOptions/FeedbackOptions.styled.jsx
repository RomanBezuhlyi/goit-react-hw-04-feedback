import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  align-items: center;
  list-style: none;
`;

export const ButtonListItem = styled.li`
  display: block;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const FeedbackButton = styled.button`
  display: inline-block;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;

  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.backgroundLightColor};
  color: ${({ theme }) => theme.colors.textLightColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;

  transition: color, background-color, transform 250ms ease-out;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
