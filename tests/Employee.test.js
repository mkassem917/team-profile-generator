const Employee = require('../lib/Employee');


describe('Employee', () => {
    describe('Testing New Employee', () => {
        it('Should create a new Employee', () => {
            const employee = new Employee;
            expect(employee).toEqual(new Employee); // .toBe did not work, i had to use .toEqual
        })
    })
});