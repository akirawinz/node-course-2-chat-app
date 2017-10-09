var expect = require('expect');
var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('shd generate correct message object',() => {
		var from = 'eeiei';
		var text = ' some msg';
		var message = generateMessage(from,text);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from,text});
	});
});

describe('generateLocationMessage',() => {
	it('shd genreate correct location object', () => {
		var from = 'bob';
		var latitude = '15';
		var longtitude = '20';
		var url = 'https://www.google.com/maps?q=15,20'
		var message = generateLocationMessage(from,latitude,longtitude);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from,url});
	});
});