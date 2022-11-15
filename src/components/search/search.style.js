import { css } from 'lit';

const style = css`
  .search-box {
    width: fit-content;
    height: fit-content;
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .input-search {
    width: 0px;
    height: 50px;
    border-style: none;
    padding: 0px 40px 0px 10px;
    font-size: 18px;
    letter-spacing: 2px;
    outline: none;
    border-radius: 25px;
    transition: all 0.5s ease-in-out;
    background-color: #22a6b3;
    padding-right: 40px;
    color: #fff;
  }
  .input-search::placeholder {
    color: #fff;
    font-size: 15px;
    letter-spacing: 2px;
    font-weight: 100;
  }
  .btn-search {
    width: 50px;
    height: 50px;
    border-style: none;
    font-size: 20px;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    color: #fff;
    background-color: transparent;
    pointer-events: painted;
  }
  .btn-search:focus ~ .input-search {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid #fff;
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
  .input-search:focus {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }

  .search-box .btn-search img {
    width: 25px;
    height: 25px;
  }

  .hidden {
    display: none;
  }
`;

export default style;
