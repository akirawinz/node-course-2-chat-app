const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString',() => {
	it('should reject non-string values' ,() => {
		var res  = isRealString(98);
		expect(res).toBe(false);
	});
	it('shd reject string with only spaces',() =>{
		var res = isRealString('  ');
		expect(res).toBe(false);
	});
	it('shd allow string with non-space characters',() =>{
		var res = isRealString(' andrew  ');
		expect(res).toBe(true);
	});
});