document.addEventListener('DOMContentLoaded', function() {
    // Handling profile image and header animation
    setTimeout(function() {
        // Select elements for animation
        const introContainer = document.querySelector('.intro-container');
        const profileImageContainer = document.querySelector('.profile-image-container');
        const introInfo = document.querySelector('.intro-info');
        const headerTitle = document.querySelector('header h1');
        const header = document.querySelector('header');
    
        // Animate the header elements
        introContainer.style.justifyContent = 'flex-start';
        profileImageContainer.style.width = '50px'; // Reduce size of the image
        profileImageContainer.style.height = '50px';
        profileImageContainer.style.marginRight = '1600px'; // Space between image and text
        headerTitle.style.marginLeft = '0px'; 
        introInfo.style.opacity = '0';
    
        // Remove the description and buttons after fade-out
        setTimeout(function() {
            introInfo.style.display = 'none';
        }, 500); // Wait for fade-out to complete before removing
    
        // Add 'moved' class to trigger CSS changes
        header.classList.add('moved');
    
        // Apply smooth transitions
        introContainer.style.transition = 'all 1s ease';
        profileImageContainer.style.transition = 'all 1s ease';
        headerTitle.style.transition = 'all 1s ease';
        introInfo.style.transition = 'opacity 0.5s ease';
    
    }, 4000); // Start animation after 4 seconds
    
    // Handling video playback
    const videoContainers = document.querySelectorAll('.video-container');

    videoContainers.forEach(container => {
        const video = container.querySelector('video');
        video.muted = false; // Ensure videos are unmuted

        container.addEventListener('mouseenter', function() {
            console.log('Mouse entered video container'); // Debugging log
            video.play().catch(error => {
                console.error('Video failed to play:', error); // Debugging log for video play errors
            });
        });

        container.addEventListener('mouseleave', function() {
            console.log('Mouse left video container'); // Debugging log
            video.pause();
            video.currentTime = 0; // Optional: Reset the video to the start
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const newSectionContainer = document.querySelector('.new-section-container');

    // Smooth scrolling based on cursor position within the new section container
    newSectionContainer.addEventListener('mousemove', (event) => {
        const containerWidth = newSectionContainer.offsetWidth;
        const containerLeft = newSectionContainer.getBoundingClientRect().left;
        const mouseX = event.clientX - containerLeft;
        const scrollAmount = newSectionContainer.scrollWidth - containerWidth;

        // Calculate the percentage of cursor position within the container
        const percentage = (mouseX / containerWidth) * 100;

        // Scroll left if cursor is in the left 60% of the container
        if (percentage < 40) {
            newSectionContainer.scrollLeft -= (scrollAmount / 40) * (40 - percentage);
        }
        // Scroll right if cursor is in the right 60% of the container
        else if (percentage > 60) {
            newSectionContainer.scrollLeft += (scrollAmount / 40) * (percentage - 60);
        }
    });
});
