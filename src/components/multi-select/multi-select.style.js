import { css } from 'lit';

const style = css`
  .multi-select .title {
    font-size: 17px;
    color: #808b96;
    margin: 0px;
  }

  .multi-select .select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1.5px solid #808b96;
  }

  .multi-select .select p {
    font-size: 18px;
    margin: 5px 0px;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .multi-select .select img {
    width: 10px;
    height: 10px;
  }

  .multi-select.open .select img {
    transform: rotate(180deg);
  }

  .multi-select .select-list ul {
    background-color: #fff;
    padding: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  .multi-select .select-list ul li {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  
  .multi-select .select-list {
    display: none;
  }

  .multi-select.open .select-list {
    display: block;
  }
`;

export default style;
