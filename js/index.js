const clock = document.getElementsByClassName("real-time-clock")[0];
const clock2 = document.getElementsByClassName("real-time-clock-2")[0];
const clock3 = document.getElementsByClassName("real-time-clock-3")[0];

const calculate = (dday) => {
    const now = new Date()
    const gap = now.getTime() - dday.getTime()
    

    const day = Math.floor(gap / (1000 * 60 * 60 * 24))
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((gap % (1000 * 60)) / 1000)

    return [day, hours, minutes, seconds]


    const now1 = new Date1()
    const gap1 = dday1.getTime() - now.getTime()

    const day1 = Math.floor(gap1 / (1000 * 60 * 60 * 24))
    const hours1 = Math.floor((gap1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes1 = Math.floor((gap1 % (1000 * 60 * 60)) / (1000 * 60))
    const seconds1 = Math.floor((gap1 % (1000 * 60)) / 1000)


    return [dday, dhours, dminutes, dseconds]
}

const render = () => {
    const [day, hours, minutes, seconds] = calculate(new Date("2024-01-10T00:00+09:00"));
    const [day1, hours1, minutes1, seconds1] = calculate(new Date1("2025-01-01T00:00+09:00"));
    const [day3, hours3, minutes3, seconds3] = calculate(new Date("2024-01-09T20:00+09:00"));


    clock.innerHTML = `전역한지 ${day}일 ${hours}시간 ${minutes}분 ${seconds}초 되었습니다.`;
    clock2.innerHTML = `예비역 1년차까지 ${dday}일 ${dhours}시간 ${dminutes}분 ${dseconds}초 남았습니다.`;
    clock3.innerHTML = `마지막 휴가 복귀까지 ${day3}일 ${hours3}시간 ${minutes3}분 ${seconds3}초 남았습니다.`;
}

setInterval(render, 1000);

