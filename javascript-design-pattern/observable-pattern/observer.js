const observers = [];

export default Object.freeze({
    notify: (data) => observers.forEach((observer) => observer(data)),
    subscribe: (observer) => observers.push(observer),
    unsubscribe: (observer) => observers.splice(observers.indexOf(observer), 1)
})