const checkAvailability = require('../src/Domain/checkAvailability');
const fs = require('fs');
const path = require('path');

test('視聴可能ならばtrue', function() {
    const availableHtml = fs.readFileSync(path.join(__dirname, './sample/available.html'), 'UTF-8');
    expect(checkAvailability(availableHtml)).toBe(true);
});

test('視聴不可能ならばfalse', function() {
    const unavailableHtml = fs.readFileSync(path.join(__dirname, './sample/unavailable.html'), 'UTF-8');
    expect(checkAvailability(unavailableHtml)).toBe(false);
});
