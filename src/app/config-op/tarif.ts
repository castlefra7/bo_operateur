
export interface Tarif {
    amount_interior?: number,
    application_id?: number,
    date?: string,
}

export interface TarifInternet {
    amount?: number,
    date?: string,
}

export interface TarifAppel extends Tarif {
    amount_exterior?: number,
}
  
export interface TarifMessage extends TarifAppel {
    unit?: number
}

export interface FraisMobileMoney {
    date?: string,
    amount_min?: number,
    amount_max?: number,
    amount_fee?: number
}