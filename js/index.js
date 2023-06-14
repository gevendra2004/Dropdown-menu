const dropdownContent = document.getElementById('dropdown-content');
const dropdownButton = document.getElementById('button');

const showDropdown = () => {
    dropdownButton.addEventListener('click', () =>{
        // We add the show-dropdown class, so that the menu is displayed
        dropdownContent.classList.toggle('show-dropdown')
     })
}

showDropdown();