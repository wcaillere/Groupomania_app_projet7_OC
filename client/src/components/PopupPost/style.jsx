import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupCloseButton = styled.button`
  display: flex;
  position: absolute;
  top: 25px;
  right: 12px;
  border: none;
  background: white;
  color: ${colors.primary};
  :hover {
    cursor: pointer;
  }
`;

export const PopupContent = styled.textarea`
  border: none;
  resize: none;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background: #e7e7e7;
  border-radius: 10px;
  font-size: 15px;
`;
