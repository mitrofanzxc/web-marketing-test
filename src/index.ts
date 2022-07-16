import './index.scss';

const SELECT_SORT = document.querySelector('.select-sort') as HTMLDivElement;
const SELECT_SORT_BUTTON = document.querySelector('.select-sort__button') as HTMLButtonElement;
const SELECT_SORT_BUTTON_DESCRIPTION = document.querySelector('.select-sort__button-description') as HTMLSpanElement;
const SELECT_LIST = SELECT_SORT.querySelector('.select-list__wrapper') as HTMLDivElement;
const SELECT_LIST_ITEMS = SELECT_LIST.querySelectorAll('.select-list__item') as NodeList;

const addSelectActive = () => {
  SELECT_LIST.classList.add('select-list__wrapper_active');
};

const removeSelectActive = () => {
  SELECT_LIST.classList.remove('select-list__wrapper_active');
};

SELECT_SORT_BUTTON.addEventListener('click', addSelectActive);

SELECT_LIST_ITEMS.forEach((item) => {
  item.addEventListener('click', (event) => {
    const target = event.target as HTMLLIElement;
    SELECT_SORT_BUTTON_DESCRIPTION.textContent = target.textContent;
    removeSelectActive();
  });
});
