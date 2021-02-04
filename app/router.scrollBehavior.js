export default function (to, from, savedPosition) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('savedpos', savedPosition)
      if (savedPosition) {
        resolve({ savedPosition })
        console.log('saved route?', from)
      } else {
        resolve({ x: 0, y: 0 })
        console.log('new route?', from)
      }
    }, 0)
  })
}
