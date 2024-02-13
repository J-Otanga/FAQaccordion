function toggleAccordion(sectionId) {
    var section = document.getElementById(sectionId);
    section.classList.toggle('active');
    var button = section.previousElementSibling.querySelector('button');

            // Toggle the button text between '+' and '-'
            if (section.classList.contains('active')) {
                button.textContent = '-';
            } else {
                button.textContent = '+';
            }
}
