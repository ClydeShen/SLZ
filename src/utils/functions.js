export const pipePromises =
  (...fns) =>
  (...config) =>
    fns.reduce((p, fn) => p.then(fn), Promise.resolve(config))

export const wait = (ms) => new Promise((r) => setTimeout(r, ms))
