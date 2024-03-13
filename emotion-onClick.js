import { fetchEmotionDetails } from './emotion-details.js';

const modelViewer = document.getElementById('modelviewer');

// Function to close the emotion details container
function closeEmotionDetails() {
    detailsContainer.classList.remove('show');
}

// Event listener to close the emotion details container when clicking outside
document.body.addEventListener('click', (event) => {
    // Check if the clicked element is outside of the emotion details container
    if (!detailsContainer.contains(event.target)) {
        closeEmotionDetails();
    }
});

// Listen for clicks on hotspots
modelViewer.querySelectorAll('button').forEach((hotspot) => {
    hotspot.addEventListener('click', () => annotationClicked(hotspot));
  });

// Declare annotationClicked as async function
const annotationClicked = async (annotation) => {
    let dataset = annotation.dataset;
    if (annotation) {
        console.log(annotation.innerText);
        try {
            const details = await fetchEmotionDetails(annotation.innerText); // Pass innerText to fetchEmotionDetails
            showEmotionDetails(details);
        } catch (error) {
            console.error('Error fetching emotion details:', error);
        }
    }
}

function showEmotionDetails(details) {
    const detailsContainer = document.getElementById('emotion-details');
    detailsContainer.innerHTML = `
        <h2>${details.name}</h2>
        <p>${details.description}</p>
        <p>${details.coping_strategy}</p>
    `;
    detailsContainer.classList.add('show');
}
