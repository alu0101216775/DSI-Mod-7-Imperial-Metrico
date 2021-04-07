export type ImperialLengthUnits = "MILLES" | "INCHES" | "YARDS" | "FEET";

/**
 * Clase para representar longitudes del sistema imperial
 */
export class ImperialLength {
    input: number;
    inputType: ImperialLengthUnits; //Por defecto, se almacena en pulgadas
    
    /**
     * Contructor que inicializa el valor. Llama a setInput para funcionar
     * @param input Número a almacenar para las conversiones.
     * @param unit Unidad en la que se recibe el parámetro
     */
    constructor(input: number, unit: ImperialLengthUnits) {
        this.setInput(input, unit);
    }
    /**
     * Retorna el valor almacenado en millas
     * @returns {number} Valor en millas
     */
    getInputInMilles(): number {
        return this.input / 63360;
    }

    /**
     * Retorna el valor almacenado en yardas
     * @returns {number} Valor en yardas
     */
    getInputInYards(): number {
        return this.input / 36;
    }

    /**
     * Retorna el valor almacenado en pies
     * @returns {number} Valor en pies
     */
    getInputInFeet(): number {
        return this.input / 12;
    }

    /**
     * Retorna el valor almacenado en pulgadas
     * @returns {number} Valor en pulgadas
     */
    getInputInInches(): number {
        return this.input;
    }
    
    /**
     * Cambia el valor del input.
     * @param input Número a almacenar para las conversiones.
     * @param unit Unidad en la que se recibe el parámetro
     */
    setInput(input: number, unit: ImperialLengthUnits) {
        this.inputType = "INCHES";
        switch(unit) {
            case "MILLES": this.input = input * 63360;  break;
            case "FEET":   this.input = input * 12;     break;
            case "YARDS":  this.input = input * 36;     break;
            case "INCHES": this.input = input;          break;
        }
    }
}