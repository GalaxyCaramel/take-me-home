const clock = document.getElementsByClassName("real-time-clock")[0];
const clock2 = document.getElementsByClassName("real-time-clock-2")[0];

const calculateTotal = (dday) => {
  const now = new Date()
  // dday - now 가 0 보다 크거나 같다 -> dday 가 현재보다 미래다
  if (dday.getTime() - now.getTime() >= 0) {
    calculateUntilFuture(dday)
  } else {
    // dday - now 가 0 보다 작다 -> dday 가 현재보다 과거다 (현재인 now 가 더 크다)
    calculateSincePast(dday)
  }
}


const calculateSincePast = (dday) => {
  const now = new Date()
  const gap = dday.getTime() - now.getTime()

  const day = Math.floor(gap / (1000 * 60 * 60 * 24))
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((gap % (1000 * 60)) / 1000)

  return [day, hours, minutes, seconds]

const calculateUntilFuture = (dday) => {
      const now = new Date()
      const gap = now.getTime() - dday.getTime()

      const day = Math.floor(gap / (1000 * 60 * 60 * 24))
      const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((gap % (1000 * 60)) / 1000)

      return [day, hours, minutes, seconds]

const render = () => {
    const [day, hours, minutes, seconds] = calculateTotal(new Date("2024-01-10T00:00+09:00"));
    const [day2, hours2, minutes2, seconds2] = calculateTotal(new Date("2025-01-01T00:00+09:00"));



    clock.innerHTML = `전역한지 ${day}일 ${hours}시간 ${minutes}분 ${seconds}초 되었습니다.`;
    clock2.innerHTML = `예비역 1년차까지 ${day2}일 ${hours2}시간 ${minutes2}분 ${seconds2}초 남았습니다.`;
}

setInterval(render, 1000);
