import Observer from './observer.js';
import { sendGoogleData } from './googleObs.js';
import { sendAnalyticsData } from './analyticsObs.js';
const button1 = document.getElementById('analytics-btn');
const button2 = document.getElementById('google-btn');
button1.addEventListener('click', () => {
    const data = {
        subsribers : 100,
        views : 1000,
        likes : 100,
        dislikes : 10,
        comments : 10
    }
    sendAnalyticsData(data);
})
button2.addEventListener('click', () => {
    const data = {
        subsribers : 100,
        views : 1000,
        likes : 100,
        dislikes : 10,
        comments : 10
    }
    sendGoogleData(data);
})


