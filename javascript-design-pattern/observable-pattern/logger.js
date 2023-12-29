import Observable from "./obserbale";

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

Observable.subscribe(logger);