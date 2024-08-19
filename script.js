document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.querySelector('.projects-container');
    const projectItems = document.querySelectorAll('.project-item');

    // Smooth scrolling based on cursor position within the projects container
    projectsContainer.addEventListener('mousemove', (event) => {
        const containerWidth = projectsContainer.offsetWidth;
        const containerLeft = projectsContainer.getBoundingClientRect().left;
        const mouseX = event.clientX - containerLeft;
        const scrollAmount = projectsContainer.scrollWidth - containerWidth;

        // Calculate the percentage of cursor position within the container
        const percentage = (mouseX / containerWidth) * 100;

        // Scroll left if cursor is in the left 60% of the container
        if (percentage < 40) {
            projectsContainer.scrollLeft -= (scrollAmount / 40) * (40 - percentage);
        }
        // Scroll right if cursor is in the right 60% of the container
        else if (percentage > 60) {
            projectsContainer.scrollLeft += (scrollAmount / 40) * (percentage - 60);
        }
    });

    // Autoplay and pause videos on hover
    projectItems.forEach(item => {
        const video = item.querySelector('video');

        item.addEventListener('mouseover', () => {
            video.play();
        });

        item.addEventListener('mouseout', () => {
            video.pause();
            video.currentTime = 0; // Optionally reset video to the beginning
        });
    });

    // Language proficiency circle animation
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        const percentage = circle.getAttribute('data-percentage');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;

        const offset = circumference - (percentage / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const languageItems = document.querySelectorAll('.language-item');

    languageItems.forEach(item => {
        const circleProgress = item.querySelector('.circle-progress');
        const percentage = circleProgress.getAttribute('data-percentage');

        item.addEventListener('mouseover', () => {
            circleProgress.style.setProperty('--percentage', `${percentage}`);
        });

        item.addEventListener('mouseout', () => {
            circleProgress.style.setProperty('--percentage', `0`);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-bar');

    // Intersection Observer options
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    // Callback function for the Intersection Observer
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const percentage = skillBar.getAttribute('data-percentage');
                
                skillBar.style.width = percentage + '%';
                skillBar.querySelector('::before').style.width = percentage + '%';
                
                observer.unobserve(skillBar); // Stop observing once animated
            }
        });
    };

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(callback, options);

    // Observe each skill bar
    skillBars.forEach(skillBar => {
        observer.observe(skillBar);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const eyes = document.querySelectorAll('.eye');
    const pupils = document.querySelectorAll('.pupil');

    function movePupils(event) {
        const { clientX: mouseX, clientY: mouseY } = event;
        eyes.forEach((eye, index) => {
            const { left, top, width, height } = eye.getBoundingClientRect();
            const eyeCenterX = left + width / 2;
            const eyeCenterY = top + height / 2;

            const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
            const distance = Math.min(eye.clientWidth / 4, 10); // Adjust distance for pupil movement

            const pupilX = distance * Math.cos(angle);
            const pupilY = distance * Math.sin(angle);

            pupils[index].style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        });
    }

    document.addEventListener('mousemove', movePupils);
});

document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project-item');

    // Autoplay and pause videos on hover
    projectItems.forEach(item => {
        const video = item.querySelector('video');
        if (video) {
            item.addEventListener('mouseover', () => {
                console.log('Mouseover on video:', video);
                video.play().catch(error => console.log('Error playing video:', error));
            });

            item.addEventListener('mouseout', () => {
                console.log('Mouseout from video:', video);
                video.pause();
                video.currentTime = 0; // Optionally reset video to the beginning
            });
        }
    });
});
