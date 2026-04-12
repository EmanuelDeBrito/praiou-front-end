export const textWithoutAccents = (text: string): string => {
    const newText = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

    return newText;
}