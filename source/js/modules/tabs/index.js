const tabParentElement = document.querySelectorAll('.tabs');

const tabsInit = () => {
  tabParentElement.forEach((parent, indexParent) => {
    parent.setAttribute('id', `tabs-${indexParent + 1}`);
    const parentId = parent.getAttribute('id');
    const parentById = document.querySelector(`#${parentId}`);

    if (parentById) {
      const buttonElements = parentById.querySelectorAll('.tabs__button');
      const tabContentElements = parentById.querySelectorAll('.tabs__content');
      tabContentElements.forEach((element, index) => {
        if (index !== 0) {
          element.style.display = 'none';
        }
      });

      buttonElements.forEach((tabButton, index) => {
        tabButton.setAttribute('data-tab', index);
        const classButtonElement = tabButton.classList[0];
        const classButtonModificate = `${classButtonElement}--active`;

        tabButton.addEventListener('click', (e) => {
          e.preventDefault();
          const activeTabId = e.target.getAttribute('data-tab');

          buttonElements.forEach((item) => {
            if (tabButton !== item) {
              item.classList.remove(classButtonModificate);
            }
          });

          tabButton.classList.add(classButtonModificate);

          tabContentElements.forEach((itemContent, indexContent) => {
            itemContent.setAttribute('data-tab-content', indexContent);
            const contentId = itemContent.getAttribute('data-tab-content');

            if (contentId === activeTabId) {
              itemContent.style.display = 'block';
            } else {
              itemContent.style.display = 'none';
            }
          });
        });
      });
    }
  });
};

export { tabsInit };
