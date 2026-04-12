// Nota - Pensar se devo fazer a lógica de colocar um 0 na frente caso o número seja menor do que 10

export const eventDateFormat = (eventDate: number[]): string => {
    let day = eventDate[2]
    let month = eventDate[1]

    if(day < 10 && month < 10){
        return `0${day}/0${month}`
    }

    if(day < 10){
        return `0${day}/${month}`
    }

    if(month < 10){
        return `${day}/0${month}`
    }

    return `${day}/${month}`
}

export const eventHourFormat = (eventHour: number[]): string => {
    let hour = eventHour[0]
    let minute = eventHour[1]

    if(hour < 10 && minute < 10){
        return `0${hour}:0${minute}`
    }

    if(hour < 10){
        return `0${hour}:${minute}`
    }

    if(minute < 10){
        return `${hour}:0${minute}`
    }

    return `${hour}:${minute}`
}