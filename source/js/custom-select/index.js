const selectInit = () => {
  document.querySelectorAll('.form__select').forEach((selectElement) => {
    const selectOptions = selectElement.querySelectorAll('option');
    const selectOptionLength = selectOptions.length;
    const selectedOption = Array.from(selectOptions).find((option) => option.selected);

    selectElement.style.display = 'none';
    const wrapper = document.createElement('div');
    wrapper.classList.add('select');
    selectElement.parentNode.insertBefore(wrapper, selectElement);
    wrapper.appendChild(selectElement);

    const newSelectHead = document.createElement('div');
    newSelectHead.classList.add('new-select');
    newSelectHead.setAttribute('tabindex', '0'); // Позволяет элементу получать фокус
    newSelectHead.textContent = selectedOption ? selectedOption.textContent : '';
    wrapper.appendChild(newSelectHead);

    const newSelectList = document.createElement('div');
    newSelectList.classList.add('new-select__list');
    wrapper.appendChild(newSelectList);

    for (let i = 1; i < selectOptionLength; i++) {
      const newSelectItem = document.createElement('div');
      newSelectItem.classList.add('new-select__item');
      newSelectItem.setAttribute('data-value', selectOptions[i].value);
      newSelectItem.setAttribute('tabindex', '0'); // Позволяет элементу получать фокус

      const itemText = document.createElement('span');
      itemText.textContent = selectOptions[i].textContent;
      newSelectItem.appendChild(itemText);

      newSelectList.appendChild(newSelectItem);
    }

    const selectItems = newSelectList.querySelectorAll('.new-select__item');
    newSelectList.style.display = 'none';

    const toggleDropdown = () => {
      if (!newSelectHead.classList.contains('new-select--on')) {
        newSelectHead.classList.add('new-select--on');
        newSelectList.style.display = 'block';
        setTimeout(() => {
          newSelectList.style.opacity = 1;
        }, 0); // для плавного появления
      } else {
        closeDropdown();
      }
    };

    function closeDropdown() {
      newSelectHead.classList.remove('new-select--on');
      newSelectList.style.display = 'none';
    }

    newSelectHead.addEventListener('click', toggleDropdown);

    // Добавляем обработчик события keydown для открытия списка
    newSelectHead.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { // Проверяем на Enter или Пробел
        event.preventDefault(); // Предотвращаем прокрутку страницы при нажатии пробела
        toggleDropdown();
      }
    });

    selectItems.forEach((item) => {
      item.addEventListener('click', function () {
        selectItem(this);
      });

      // Добавляем обработчик события keydown для выбора элемента
      item.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') { // Проверяем на Enter или Пробел
          event.preventDefault(); // Предотвращаем прокрутку страницы при нажатии пробела
          selectItem(this);
        }
      });
    });

    function selectItem(item) {
      if (!item) {
        return;
      } // Проверка на существование элемента

      const chooseItem = item.getAttribute('data-value');
      if (chooseItem) {
        selectElement.value = chooseItem;
        newSelectHead.textContent = item.querySelector('span') ? item.querySelector('span').textContent : '';
      }

      closeDropdown();
    }

    // Закрытие селекта при клике вне его
    document.addEventListener('click', (event) => {
      if (!wrapper.contains(event.target)) {
        closeDropdown();
      }
    });
  });
};

export { selectInit };
