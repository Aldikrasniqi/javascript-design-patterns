import Observer from './observer.js';

export function sendGoogleData(data){
     
    const date = new Date().toLocaleDateString();
    console.log(`Sending data to google ${date} ${data.views} views, ${data.likes} likes, ${data.dislikes} dislikes, ${data.comments} comments`);
}
Observer.notify(sendGoogleData) 