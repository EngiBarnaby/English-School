export default function dateForFilter(value){
    const options = { 
        month : 'long',
        day : "2-digit",
        hour : "2-digit",
        minute : "2-digit",
        second : "2-digit"
    }
    const newDate = new Intl.DateTimeFormat('ru-Ru', options).format(value)
    return newDate
}