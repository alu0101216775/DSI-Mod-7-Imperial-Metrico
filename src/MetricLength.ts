//export type MetricLengthUnits = "CENTIMETERS" | "METERS" | "KILOMETERS";

/**
 * Clase para representar longitudes del sistema imperial
 */
export class MetricLength {
    input: number; //Por defecto, se almacena en centimetros
    
    /**
     * Contructor que inicializa el valor. Llama a setInput para funcionar
     * @param input Número a almacenar para las conversiones.
     */
    constructor(input: number) {
        this.setCentimeters(input);
    }

    /**
     * Retorna el valor almacenado en kilometros
     * @returns {number} Valor en kilometros
     */
    getInputInKilometers(): number {
        return this.input / 100000;
    }

    /**
     * Retorna el valor almacenado en metros
     * @returns {number} Valor en metros
     */
    getInputInMeters(): number {
        return this.input / 100;
    }

    /**
     * Retorna el valor almacenado en centimetros
     * @returns {number} Valor en centimetros
     */
    getInputInCentimeters(): number {
        return this.input;
    }
    
    /**
     * Cambia el valor del input.
     * @param input Número a almacenar para las conversiones.
     * @param unit Unidad en la que se recibe el parámetro
     *
    setInput(input: number, unit: MetricLengthUnits) {
        switch(unit) {
            case "KILOMETERS":  this.input = input * 100000;  break;
            case "METERS":      this.input = input * 100;     break;
            case "CENTIMETERS": this.input = input;           break;
        }
    }*/

    /**
     * Cambia el valor del input a uno recibido en centimetros
     * @param input 
     */
    setCentimeters(input: number) {
        this.input = input;
    }

    /**
     * Cambia el valor del input a uno recibido en metros
     * @param input 
     */
    setMeters(input: number) {
        this.input = input / 100;
    }

    /**
     * Cambia el valor del input a uno recibido en kilometros
     * @param input 
     */
    setKilometers(input: number) {
        this.input = input / 100000;
    }
}