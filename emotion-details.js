const EMOTION_DETAILS = {
    Serenity: {
        name: 'Serenity',
        description: 'Serenity is the state of being calm, peaceful, and untroubled. It is characterized by a sense of tranquility and contentment.',
        coping_strategy: 'Practice deep breathing exercises or mindfulness meditation to promote a sense of serenity. Engage in activities that bring you joy and relaxation.',
    },
    Joy: {
        name: 'Joy',
        description: 'Joy is a feeling of great pleasure and happiness. It is often associated with positive events, achievements, or experiences.',
        coping_strategy: 'Express gratitude for the things that bring you joy. Engage in activities that make you laugh or smile, such as spending time with loved ones or pursuing hobbies you enjoy.',
    },
    Ecstasy: {
        name: 'Ecstasy',
        description: 'Ecstasy is an intense feeling of happiness and excitement. It is characterized by a sense of euphoria and elation.',
        coping_strategy: 'Engage in activities that allow you to experience pleasure and excitement, such as listening to music, dancing, or spending time in nature.',
    },
    Acceptance: {
        name: 'Acceptance',
        description: 'Acceptance is the act of recognizing and embracing reality, including both positive and negative aspects. It involves acknowledging one\'s emotions and experiences without judgment.',
        coping_strategy: 'Practice self-compassion and acceptance of your emotions, even when they are difficult. Seek support from trusted friends or professionals if needed.',
    },
    Trust: {
        name: 'Trust',
        description: 'Trust is a belief in the reliability, truth, or ability of someone or something. It involves confidence and faith in the integrity of others.',
        coping_strategy: 'Build trusting relationships with others by being honest, reliable, and consistent in your actions. Communicate openly and listen actively to foster trust.',
    },
    Admiration: {
        name: 'Admiration',
        description: 'Admiration is a feeling of respect, approval, or wonder towards someone or something. It involves recognizing and appreciating the qualities, achievements, or actions of others.',
        coping_strategy: 'Express your admiration and appreciation for others openly and sincerely. Look for opportunities to learn from those you admire and emulate their positive qualities.',
    },
    Apprehension: {
        name: 'Apprehension',
        description: 'Apprehension is a feeling of anxiety or fear about something that may happen in the future. It involves anticipation and worry about potential negative outcomes.',
        coping_strategy: 'Practice relaxation techniques such as deep breathing or progressive muscle relaxation to manage feelings of apprehension. Focus on the present moment and challenge negative thoughts about the future.',
    },
    Fear: {
        name: 'Fear',
        description: 'Fear is an intense emotional response to a perceived threat or danger. It triggers the body\'s fight-or-flight response and is often accompanied by physical sensations such as rapid heartbeat or sweating.',
        coping_strategy: 'Face your fears gradually and systematically, starting with small steps and gradually increasing exposure to the feared situation or object. Seek support from others and consider therapy or counseling if fear is significantly impacting your life.',
    },
    Terror: {
        name: 'Terror',
        description: 'Terror is an overwhelming feeling of fear or dread, often in response to a real or imagined threat. It can cause extreme distress and a sense of helplessness.',
        coping_strategy: 'Seek immediate safety and support if you are experiencing terror. Practice deep breathing and grounding techniques to help manage intense emotions. Consider seeking therapy or counseling to address underlying issues contributing to feelings of terror.',
    },
    Distraction: {
        name: 'Distraction',
        description: 'Distraction is a state of being pulled away from one\'s current focus or attention. It can result from external stimuli or internal thoughts and emotions.',
        coping_strategy: 'Practice mindfulness and focus techniques to bring your attention back to the present moment. Engage in activities that capture your interest and keep your mind occupied in a positive way. Set boundaries and limit distractions when needed to maintain focus and productivity.',
    },
    Surprise: {
        name: 'Surprise',
        description: 'Surprise is a sudden and unexpected event or revelation that catches someone off guard. It can evoke a range of emotions, including joy, fear, or confusion.',
        coping_strategy: 'Embrace the unexpected and allow yourself to experience the full range of emotions that surprise can bring. Take time to process and understand your reactions, and find healthy ways to adapt to unexpected situations.',
    },
    Amazement: {
        name: 'Amazement',
        description: 'Amazement is a feeling of wonder, awe, or astonishment in response to something remarkable or extraordinary. It involves a sense of admiration and reverence for the object of amazement.',
        coping_strategy: 'Cultivate a sense of curiosity and wonder in everyday life. Seek out experiences that inspire awe and amazement, such as exploring nature, learning new things, or witnessing acts of kindness and generosity. Take time to appreciate the beauty and wonder of the world around you.',
    },
    Pensiveness: {
        name: 'Pensiveness',
        description: 'Pensiveness is a state of deep thoughtfulness, reflection, or contemplation. It involves introspection and consideration of one\'s thoughts, feelings, and experiences.',
        coping_strategy: 'Set aside time for quiet reflection and introspection. Journaling, meditation, and mindfulness practices can help deepen your understanding of yourself and your experiences. Seek support from trusted friends or professionals if you need guidance or assistance in processing your thoughts and emotions.',
    },
    Sadness: {
        name: 'Sadness',
        description: 'Sadness is an emotional state characterized by feelings of sorrow, grief, or melancholy. It can result from loss, disappointment, or unmet expectations.',
        coping_strategy: 'Allow yourself to feel and express your sadness in healthy ways. Reach out to supportive friends or family members for comfort and companionship. Engage in activities that bring you comfort and solace, such as spending time in nature, listening to music, or practicing self-care.',
    },
    Grief: {
        name: 'Grief',
        description: 'Grief is a natural response to loss, typically involving intense feelings of sadness, longing, and emptiness. It can occur in response to the death of a loved one, the end of a relationship, or other significant losses.',
        coping_strategy: 'Give yourself permission to grieve and honor your emotions without judgment. Allow yourself to experience the stages of grief, including denial, anger, bargaining, depression, and acceptance, in your own time and at your own pace. Seek support from others who have experienced similar losses and consider seeking therapy or counseling to navigate the grieving process.',
    },
    Boredom: {
        name: 'Boredom',
        description: 'Boredom is a state of restlessness, dissatisfaction, or lack of interest in one\'s current activities or surroundings. It can result from monotony, repetition, or a lack of stimulation.',
        coping_strategy: 'Seek out new experiences and activities to break the cycle of boredom. Engage in hobbies or interests that capture your curiosity and passion. Practice mindfulness and focus techniques to find contentment and enjoyment in the present moment. Consider volunteering or helping others as a way to add purpose and meaning to your life.',
    },
    Disgust: {
        name: 'Disgust',
        description: 'Disgust is a strong feeling of revulsion, aversion, or repugnance towards something considered offensive, unpleasant, or morally objectionable. It can be triggered by sensory experiences, social norms, or personal values.',
        coping_strategy: 'Acknowledge and validate your feelings of disgust without judgment. Identify the source of your disgust and evaluate whether it aligns with your values and beliefs. Take action to remove yourself from situations or environments that trigger feelings of disgust, and seek support from trusted friends or professionals if needed to address underlying issues contributing to your emotional response.',
    },
    Loathing: {
        name: 'Loathing',
        description: 'Loathing is an intense feeling of hatred, disgust, or repulsion towards someone or something. It involves a deep-seated aversion and contempt for the object of loathing.',
        coping_strategy: 'Explore the root causes of your feelings of loathing and work towards understanding and acceptance. Practice compassion and empathy towards yourself and others, even in difficult situations. Set healthy boundaries to protect yourself from toxic relationships or environments that trigger feelings of loathing, and seek support from trusted friends or professionals if needed to address underlying issues contributing to your emotional response.',
    },
    Annoyance: {
        name: 'Annoyance',
        description: 'Annoyance is a mild feeling of irritation, frustration, or displeasure in response to something that bothers or disrupts one\'s peace or comfort. It can result from minor inconveniences, annoyances, or interruptions.',
        coping_strategy: 'Practice patience and tolerance when faced with situations or individuals that trigger feelings of annoyance. Take a step back and evaluate whether the source of annoyance is worth your attention or energy, and choose your battles wisely. Use humor and perspective to diffuse feelings of annoyance, and seek support from trusted friends or professionals if needed to address underlying issues contributing to your emotional response.',
    },
    Anger: {
        name: 'Anger',
        description: 'Anger is an intense emotional response to a perceived threat, injustice, or frustration. It involves feelings of annoyance, irritation, or hostility, and can vary in intensity from mild annoyance to uncontrollable rage.',
        coping_strategy: 'Practice self-awareness and identify the triggers and warning signs of your anger. Use relaxation techniques such as deep breathing, visualization, or progressive muscle relaxation to manage feelings of anger and diffuse tension. Communicate assertively and constructively to express your feelings and address the source of your anger, and seek support from trusted friends or professionals if needed to develop healthy coping strategies.',
    },
    Rage: {
        name: 'Rage',
        description: 'Rage is an intense and uncontrollable outburst of anger or fury. It involves a loss of control over one\'s emotions and behavior, and can result in aggressive or violent actions.',
        coping_strategy: 'Seek immediate safety and support if you are experiencing rage or witnessing someone else in a rageful state. Practice calming techniques such as deep breathing, counting to ten, or removing yourself from the situation until you can regain control over your emotions. Seek therapy or counseling to address underlying issues contributing to feelings of rage and develop healthy coping strategies for managing intense emotions.',
    },
    Interest: {
        name: 'Interest',
        description: 'Interest is a feeling of curiosity, engagement, or enthusiasm towards something that captures one\'s attention or piques one\'s curiosity. It involves a desire to explore, learn, or engage with the object of interest.',
        coping_strategy: 'Follow your interests and passions to pursue activities or hobbies that bring you joy and fulfillment. Seek out new experiences and opportunities for growth and learning. Surround yourself with people who share your interests and inspire you to explore new possibilities. Embrace the adventure of discovery and remain open to new ideas and experiences.',
    },
    Anticipation: {
        name: 'Anticipation',
        description: 'Anticipation is a feeling of excitement, expectation, or eagerness towards something anticipated or awaited in the future. It involves a sense of hope, optimism, or readiness for what is to come.',
        coping_strategy: 'Channel your anticipation into productive actions and preparations for the future. Set goals and create plans to work towards achieving them. Practice patience and resilience in the face of uncertainty or delays, and focus on the process of growth and development rather than solely on the outcome. Celebrate small victories and milestones along the way, and remain flexible and adaptable in your approach to navigating the journey ahead.',
    },
    Vigilance: {
        name: 'Vigilance',
        description: 'Vigilance is a state of heightened awareness, attentiveness, or watchfulness towards potential threats or dangers. It involves a sense of caution, readiness, or preparedness to respond to emergencies or unexpected events.',
        coping_strategy: 'Stay alert and attentive to your surroundings, and trust your instincts if you sense potential danger or risk. Take proactive steps to ensure your safety and security, such as locking doors and windows, staying in well-lit areas at night, and avoiding potentially dangerous situations or individuals. Seek support from trusted friends or authorities if you feel unsafe or threatened, and prioritize your well-being and peace of mind above all else.',
    },
    // Add details for remaining emotions
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
