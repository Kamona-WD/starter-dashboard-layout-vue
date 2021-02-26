const random = (max = 100) => {
  return Math.round(Math.random() * max) + 20
}

const randomData = (max = 100) => {
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

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default function useCharts() {
  return {
    random,
    months,
    randomData,
  }
}
