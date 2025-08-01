export default function makeDateReadable(date) {
    const dateInfoArr = String(date).split(' ')
    return `${dateInfoArr[1]} ${dateInfoArr[2]}, ${dateInfoArr[3]}`;
}