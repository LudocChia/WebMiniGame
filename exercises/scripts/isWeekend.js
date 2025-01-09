import dayjs from 'https://unpkg.com/dayjs/esm/index.js';

// const date = dayjs();

export default function isWeekend(date) {
    return date.format('dddd');
}