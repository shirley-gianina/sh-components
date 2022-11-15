import { css } from 'lit';

export const dropdownItem = css``;

export const dropdown = css`
  .dropdown .select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1.5px solid #808b96;
    background-color: #fff;
    padding: 0px 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .dropdown .select p {
    color: #808b96;
    font-size: 18px;
    margin: 5px 0px;
  }

  .dropdown img {
    width: 10px;
    height: 10px;
  }

  .dropdown .select-list ul {
    background-color: #fff;
    border: 1.5px solid #808b96;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    list-style: none;
    margin: 0px;
    padding: 0px;
  }

  .dropdown .select-list {
    display: none;
  }

  ::slotted(sh-dropdown-item) {
    display: flex;
    padding: 5px 10px;
    border: 1px solid #eee;
    background-color: #f8f8f8;
  }

  ::slotted(sh-dropdown-item:first-child),
  ::slotted(sh-dropdown-item:last-child) {
    /*background-color: red;*/
    border: none;
  }

  .dropdown .select-list.open {
    display: block;
  }
`;

export default {
  dropdown,
  dropdownItem,
};
