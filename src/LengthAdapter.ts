export type MetricLengthUnits = "CENTIMETERS" | "METERS" | "KILOMETERS";
import {ImperialLength} from "./ImperialLength";
import {MetricLength} from "./MetricLength";
/**
 * Clase para adaptar unidades imperiales a métricas
 */
export class LengthAdapter extends MetricLength{
    
    /**
     * Contructor que inicializa el valor. Lo almacena en pulgadas
     * @param imperial Objeto del tipo Imperial sobre el que se trabajara
     */
    constructor(private readonly imperial: ImperialLength) {
        super(imperial.getInputInInches());
    }

    /**
     * Retorna el valor almacenado en kilometros
     * @returns {number} Valor en kilometros
     */
    getInputInKilometers(): number {
        return this.input / 39370;
    }

    /**
     * Retorna el valor almacenado en metros
     * @returns {number} Valor en metros
     */
    getInputInMeters(): number {
        return this.input / 39.37;
    }

    /**
     * Retorna el valor almacenado en centimetros
     * @returns {number} Valor en centimetros
     */
    getInputInCentimeters(): number {
        return this.input * 2.54;
    }
}