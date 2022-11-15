import { css } from 'lit';

const style = css`
  .checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1px;
    width: 15px;
    height: 15px;
    background-color: #fff;
    border: 1px solid black;
    margin-right: 10px;
  }

  .checkbox.checked {
    background-color: var(--checkbox-bg);
  }

  .checkbox.checked::before {
    color: #fff;
    content: '🗸';
    display: block;
  }
`;

export default style;
