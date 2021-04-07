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
});