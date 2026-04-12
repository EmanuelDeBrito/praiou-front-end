// Nota - Pensar se devo fazer a lógica de colocar um zero na frente caso o dia ou mês seja menor que 10
export const eventDateFormat = (eventDate: number[]): string => {
    const day = eventDate[2]
    const month = eventDate[1]

    return `${day}/${month}`
}