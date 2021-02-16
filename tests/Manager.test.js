const Manager = require('../lib/Manager');

const intTest = {
    getRole: 'Manager',
    getOfficeNumber: 'Office Number',
};

describe('Validating the role to be a "Manager"', () => {
    test('getRole should return "Manager"', () => {
        const managerRole = 'Manager';
        const man = new Manager('Moe');
        expect(man.getRole()).toBe('Manager');
    })
});

describe('Verifying your Office Number', () => {
    test('getOfficeNumber should return the Office Phone Number', () => {
        const office = 'Office Number';
        const man = new Manager('Moe', '313-599-9990');
        expect(man.getOfficeNumber()).toBe(this.officeNumber);
    })
});