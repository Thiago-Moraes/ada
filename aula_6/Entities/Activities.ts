class Activity {
    id: number | null;
    description: string;
    status: string | null;
    startDate: string | null;
    endDate: string | null;

    statusEnum = ["A FAZER", "EM PROGRESSO", "CONCLUÍDO"];

    constructor(
        id: number | null,
        description: string,
        startDate: string | null,
        endDate: string | null,
        status: string | null
    ) {
        this.validateDates(startDate, endDate);
        this.validateDescription(description);

        this.id = id;
        this.description = description.trim();
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    validateDates(startDate: string | null, endDate: string | null) {
        if (startDate === null || endDate === null) return;
        if (startDate > endDate) throw new Error("Data de inicio maior que data de finalização")
        if (endDate < startDate) throw new Error("Data de finalização menor que data de inicio")
    }

    validateDescription(description: string) {
        if (description.trim().length === 0) throw new Error("Descrição não pode ser vazia");
    }

}

export default Activity;