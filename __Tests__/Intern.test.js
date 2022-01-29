const Intern = require('../lib/Intern');

test('Create a new Intern', () => {
    intern= new Intern('John Doe', '15', 'Intern', 'John.Doe@gmail.com', 'UofT');

    expect(intern.getName()).toBe('John Doe');
    expect(intern.getRole()).toBe('Intern');
    expect(intern.getId()).toBe('15');
    expect(intern.getSchool()).toBe('UofT');
    expect(intern.getEmail()).toBe('John.Doe@gmail.com');

})