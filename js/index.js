const clock = document.getElementsByClassName("real-time-clock")[0];
const clock2 = document.getElementsByClassName("real-time-clock-2")[0];
const clock3 = document.getElementsByClassName("real-time-clock-3")[0];

const calculate = (dday) => {
    const now = new Date()
    const gap = dday.getTime() - now.getTime()

    const day = Math.floor(gap / (1000 * 60 * 60 * 24))
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((gap % (1000 * 60)) / 1000)

    return [day, hours, minutes, seconds]
}

const render = () => {
    const [day, hours, minutes, seconds] = calculate(new Date("2024-01-10T08:30+09:00"));
    const [day2, hours2, minutes2, seconds2] = calculate(new Date("2024-01-10T00:00+09:00"));
    const [day3, hours3, minutes3, seconds3] = calculate(new Date("2023-12-23T00:00+09:00"));


    clock.innerHTML = `부대 출발까지 ${day}일 ${hours}시간 ${minutes}분 ${seconds}초 남았습니다.`;
    clock2.innerHTML = `그가 집에 가는 날까지 ${day2}일 ${hours2}시간 ${minutes2}분 ${seconds2}초 남았습니다.`;
    clock3.innerHTML = `마지막 휴가까지 ${day3}일 ${hours3}시간 ${minutes3}분 ${seconds3}초 남았습니다.`;
}

setInterval(render, 1000);

