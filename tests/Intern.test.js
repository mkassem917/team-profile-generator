const Intern = require('../lib/Intern');

const intTest = {
    getRole: 'Intern',
    getSchool: 'School',
};

describe('Validating the role to be an "Intern"', () => {
    test('getRole should return Intern', () => {
        const internRole = 'Intern';
        const int = new Intern('Moe');
        expect(int.getRole()).toBe('Intern');
    })
});

describe('Verifying your school', () => {
    test('getSchool should return the school name', () => {
        const schoolName = 'School Name';
        const int = new Intern('Moe', 'MSU');
        expect(int.getSchool()).toBe(this.school);
    })
});