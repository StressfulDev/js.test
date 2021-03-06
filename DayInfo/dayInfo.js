const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
];

const months = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
];

function getDayInfo(date) {
    const correctDate = date.split('.').reverse().join();
    const dateInfo = new Date(correctDate);
    const day = dateInfo.getDay();
    const month = dateInfo.getMonth();
    const year = dateInfo.getFullYear();
    const dayInMonth = dateInfo.getDate();
    const weekOfMonth = Math.floor(dayInMonth / 7) + 1;

    return `${days[day]}, ${weekOfMonth} неделя ${months[month]} ${year} года`;
}