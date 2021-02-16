const Engineer = require('../lib/Engineer');

const engTest = {
    getRole: 'Engineer',
    getGithub: 'Github',
};

describe('Validating the role to be "Engineer"', () => {
    test('getRole should return Engineer', () => {
        const engRole = 'Engineer';
        const eng = new Engineer('Moe', 'mkassem917');
        expect(eng.getRole()).toBe('Engineer');
    })
});

describe('Verifying the Github username', () => {
    test('getGithub should return username', () => {
        const user = 'Github User';
        const eng = new Engineer('mkassem917');
        expect(eng.getGithub()).toBe(this.github);
    })
});