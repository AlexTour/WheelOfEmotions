const EMOTION_DETAILS = {
    serenity: {
        name: 'Serenity',
        description: 'Serenity is the state of being calm, peaceful, and untroubled. It is characterized by a sense of tranquility and contentment.',
        coping_strategy: 'Practice deep breathing exercises or mindfulness meditation to promote a sense of serenity. Engage in activities that bring you joy and relaxation.',
    },
    joy: {
        name: 'Joy',
        description: 'Joy is a feeling of great pleasure and happiness. It is often associated with positive events, achievements, or experiences.',
        coping_strategy: 'Express gratitude for the things that bring you joy. Engage in activities that make you laugh or smile, such as spending time with loved ones or pursuing hobbies you enjoy.',
    },
    ecstasy: {
        name: 'Ecstasy',
        description: 'Ecstasy is an intense feeling of happiness and excitement. It is characterized by a sense of euphoria and elation.',
        coping_strategy: 'Engage in activities that allow you to experience pleasure and excitement, such as listening to music, dancing, or spending time in nature.',
    },
    acceptance: {
        name: 'Acceptance',
        description: 'Acceptance is the act of recognizing and embracing reality, including both positive and negative aspects. It involves acknowledging one\'s emotions and experiences without judgment.',
        coping_strategy: 'Practice self-compassion and acceptance of your emotions, even when they are difficult. Seek support from trusted friends or professionals if needed.',
    },
    trust: {
        name: 'Trust',
        description: 'Trust is a belief in the reliability, truth, or ability of someone or something. It involves confidence and faith in the integrity of others.',
        coping_strategy: 'Build trusting relationships with others by being honest, reliable, and consistent in your actions. Communicate openly and listen actively to foster trust.',
    },
    admiration: {
        name: 'Admiration',
        description: 'Admiration is a feeling of respect, approval, or wonder towards someone or something. It involves recognizing and appreciating the qualities, achievements, or actions of others.',
        coping_strategy: 'Express your admiration and appreciation for others openly and sincerely. Look for opportunities to learn from those you admire and emulate their positive qualities.',
    },
    apprehension: {
        name: 'Apprehension',
        description: 'Apprehension is a feeling of anxiety or fear about something that may happen in the future. It involves anticipation and worry about potential negative outcomes.',
        coping_strategy: 'Practice relaxation techniques such as deep breathing or progressive muscle relaxation to manage feelings of apprehension. Focus on the present moment and challenge negative thoughts about the future.',
    },
    fear: {
        name: 'Fear',
        description: 'Fear is an intense emotional response to a perceived threat or danger. It triggers the body\'s fight-or-flight response and is often accompanied by physical sensations such as rapid heartbeat or sweating.',
        coping_strategy: 'Face your fears gradually and systematically, starting with small steps and gradually increasing exposure to the feared situation or object. Seek support from others and consider therapy or counseling if fear is significantly impacting your life.',
    },
    // Add details for other emotions
};

export async function fetchEmotionDetails(emotion) {
    // Simulate asynchronous fetch
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const details = EMOTION_DETAILS[emotion];
            if (details) {
                resolve(details);
            } else {
                reject(new Error('Emotion details not found'));
            }
        }, 500); // Simulate network delay
    });
}
