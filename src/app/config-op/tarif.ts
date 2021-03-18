
export interface TarifInternet {
    amount_interior?: number,
    application_id?: number,
    date?: string,
}

export interface TarifAppel extends TarifInternet {
    amount_exterior?: number,
}
  
export interface TarifMessage extends TarifAppel {}

export interface FraisMobileMoney {
    date?: string,
    amount_min?: number,
    amount_max?: number,
    amount_fee?: number
}