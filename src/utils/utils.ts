export function getCreateDate(date: string) {
    const dateArr = date.split(' ').filter((el) => el !== '').map((el) => el.trim());

    const monthsShort = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    const day = dateArr[1];
    let monthsIndex;
    let year;

    monthsIndex = `${monthsShort.indexOf(dateArr[0]) + 1}`;

    if (dateArr[2].length !== 4) {
        year = '';
    } else {
        year = `-${dateArr[2]}`;
    }

    return `${day.padStart(2, '0')}-${monthsIndex.padStart(2, '0')}${year}`;
}
