import { fetchEmotionDetails } from './emotion-details.js';

// Listen for clicks on hotspots
document.addEventListener('click', async (event) => {
    const hotspot = event.target.closest('.Hotspot');
    if (hotspot) {
        const emotion = hotspot.dataset.emotion;
        if (emotion) {
            try {
                const details = await fetchEmotionDetails(emotion);
                showEmotionDetails(details);
            } catch (error) {
                console.error('Error fetching emotion details:', error);
            }
        }
    }
});

function showEmotionDetails(details) {
    const detailsContainer = document.querySelector('.emotion-details');
    detailsContainer.innerHTML = `
        <h2>${details.name}</h2>
        <p>${details.description}</p>
        <!-- Add more details as needed -->
    `;
}
