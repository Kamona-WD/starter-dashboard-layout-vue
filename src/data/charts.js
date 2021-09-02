export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const random = (max = 100) => {
  return Math.round(Math.random() * max) + 20
}

export const randomData = (max = 100) => {
  return [
    random(max),
    random(max),
    random(max),
    random(max),
    random(max),
    random(max),
    random(max),
    random(max),
    random(max),
    random(max),
    random(max),
    random(max),
  ]
}
