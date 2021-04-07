import "mocha";
import {expect} from 'chai';
import {ImperialLength} from '../src/ImperialLength';
import {MetricLength} from '../src/MetricLength';
import {LengthAdapter} from '../src/LengthAdapter';



describe('Length tests', () => {
    it('inches to km works', () => {
        let len: ImperialLength = new ImperialLength(39370);
        let adp: LengthAdapter = new LengthAdapter(len);
        expect(adp.getInputInKilometers()).to.be.equal(1);
    });
    it('inches to meters works', () => {
        let len: ImperialLength = new ImperialLength(39.37);
        let adp: LengthAdapter = new LengthAdapter(len);
        expect(adp.getInputInMeters()).to.be.equal(1);
    });
    it('yards to centimeters works', () => {
        let len: ImperialLength = new ImperialLength();
        len.setYards(100);
        let adp: LengthAdapter = new LengthAdapter(len);
        expect(adp.getInputInCentimeters()).to.be.equal(9144);
    });
    it('milles to kilometers works', () => {
        let len: ImperialLength = new ImperialLength();
        len.setMilles(100);
        let adp: LengthAdapter = new LengthAdapter(len);
        expect(parseFloat(adp.getInputInKilometers().toFixed(2))).to.be.equal(160.93);
    });
    it('feet to centimeters works', () => {
        let len: ImperialLength = new ImperialLength();
        len.setFeet(100);
        let adp: LengthAdapter = new LengthAdapter(len);
        expect(adp.getInputInCentimeters()).to.be.equal(3048);
    });
});