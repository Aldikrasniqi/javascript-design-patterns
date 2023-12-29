import Observer from './observer.js';

export function sendAnalyticsData(data){
  
  const date = new Date().toLocaleDateString();
  console.log(`${date} the analytics data are ${data.views} views, ${data.likes} likes, ${data.dislikes} dislikes, ${data.comments} comments`)
}

Observer.subscribe(sendAnalyticsData)