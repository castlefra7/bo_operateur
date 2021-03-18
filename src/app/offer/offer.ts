export interface HttpRespOffer {
    status?: Status,
    data?: Offer[]
}

export interface Status {
    code?: number,
    message?: string
}

export interface Offer {
    id?: number | undefined,
    name?: string,
    createdAt?: string,
    price?: number,
    validityDay?: number,
    priority?: number,
    limitation?: Limitation,
    amounts?: Amount[]
}

export interface Limitation {
    buyingLimit?: number,
    durationInDays?: number
}

export interface Amount {
    application?: Application,
    value?: number
}

export interface Application {
    id?: number | undefined,
    name?: string,
    unit?: Unit
}

export interface Unit {
    id?: number,
    suffix?: string
}