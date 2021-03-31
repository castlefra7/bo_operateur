export interface HttpRespOffer {
    status?: Status,
    data?: Offer[]
}

export interface HttpRespApp {
    status?: Status,
    data?: Application[]
}

export interface Status {
    code?: number,
    message?: string
}

export interface Offer {
    id?: number | undefined,
    code?: string,
    name?: string,
    isOneDay?: boolean,
    createdAt?: string,
    price?: number,
    validityDay?: number,
    priority?: number,
    limitation?: Limitation,
    amounts?: Amount[],
    hourMin?: string,
    hourMax?: string,
}

export interface Limitation {
    buyingLimit?: number,
    durationInDays?: number
}

export interface Amount {
    isUnlimited?: boolean,
    application?: Application,
    value?: number,
    utilization?: Utilization,
}

export interface Utilization {
    intra?: Price,
    extra?: Price,
}

export interface Price {
    price?: number,
    per?: string
}

export interface Application {
    id?: number | undefined,
    name?: string,
    t_type?: string,
    internet_application_id?: number
    unit?: Unit,
}

export interface Unit {
    id?: number,
    suffix?: string
}