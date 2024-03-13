import { fetchEmotionDetails } from './emotion-details.js';

// Listen for clicks on hotspots
const modelViewer = document.getElementById('modelviewer');

modelViewer.querySelectorAll('button').forEach((hotspot) => {
    hotspot.addEventListener('click', () => annotationClicked(hotspot));
  });

const annotationClicked = (annotation) => {
    let dataset = annotation.dataset;
    if (annotation) {
        console.log(annotation);
            try {
                const details = await fetchEmotionDetails(annotation);
                showEmotionDetails(annotation);
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


