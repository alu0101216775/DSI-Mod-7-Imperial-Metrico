/**
 * Clase para representar masas del sistema imperial
 */
export class ImperialMass {
    input: number; //Por defecto se almacena en onzas
    
    /**
     * Contructor que inicializa el valor. Llama a setOunces para funcionar
     * @param input Número a almacenar para las conversiones.
     */
    constructor(input: number = 0) {
        this.setOunces(input);
    }
    /**
     * Retorna el valor almacenado en onzas
     * @returns {number} Valor en onzas
     */
    getInputInOunces(): number {
        return this.input;
    }

    /**
     * Retorna el valor almacenado en libras
     * @returns {number} Valor en libras
     */
    getInputInPounds(): number {
        return this.input / 16;
    }

    /**
     * Retorna el valor almacenado en piedras
     * @returns {number} Valor en piedras
     */
    getInputInStones(): number {
        return this.input / 224;
    }

    /**
     * Retorna el valor almacenado en toneladas imperiales
     * @returns {number} Valor en toneladas imperiales
     */
    getInputInTons(): number {
        return this.input / 32000;
    }

    
    /**
     * Cambia el valor del input a uno recibido en onzas
     * @param input 
     */
    setOunces(input: number) {
        this.input = input;
    }

    /**
     * Cambia el valor del input a uno recibido en libras
     * @param input 
     */
    setPounds(input: number) {
        this.input = input * 16;
    }

    /**
     * Cambia el valor del input a uno recibido en piedras
     * @param input 
     */
    setStones(input: number) {
        this.input = input * 224;
    }

    /**
     * Cambia el valor del input a uno recibido en toneladas
     * @param input 
     */
    setTons(input: number) {
        this.input = input * 32000;
    }

}