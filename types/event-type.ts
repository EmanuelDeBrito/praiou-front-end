export type EventType = {
    idEvento: number,
    idUsuario: number,
    nome: string,
    descricao: string,
    endereco: string,
    tipoEvento: string,
    data: number[],
    dataPublicacao: number[],
    horario: number[],
    limiteParticipantes: number
}