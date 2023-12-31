document.querySelectorAll('.section').forEach(function(section) {
    section.addEventListener('mouseover', function() {
        const sectionRightContent = this.querySelector('.section_right_content');
        sectionRightContent.style.transition = 'right 0.5s ease-out, opacity 0.5s ease-out';
        /* sectionRightContent.style.transitionDelay = '0.2s'; */
        sectionRightContent.style.right = '5%';
        sectionRightContent.style.opacity = '1';

        // Other elements
        this.querySelector('.panel').style.width = '100%';
        this.querySelector('.circle').style.left = '75%';
        this.querySelector('.panel h1').style.left = '15px';
        this.querySelector('.circle').style.opacity = '0';
        this.querySelector('.sectionRightChevron').style.left = '75%';
        this.querySelector('.sectionRightChevron').style.opacity = '0';
    });

    section.addEventListener('mouseout', function() {
        const sectionRightContent = this.querySelector('.section_right_content');
        // Add a delay for transition equivalent to the transition duration
        sectionRightContent.style.transition = 'none';
        sectionRightContent.style.right = '10%';
        sectionRightContent.style.opacity = '0';

        // Other elements
        this.querySelector('.panel').style.width = '50%';
        this.querySelector('.circle').style.left = '50%';
        this.querySelector('.panel h1').style.left = '0';
        this.querySelector('.circle').style.opacity = '1';
        this.querySelector('.sectionRightChevron').style.left = '51%';
        this.querySelector('.sectionRightChevron').style.opacity = '.7';
    });
});
