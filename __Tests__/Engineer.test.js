const Engineer = require('../lib/Engineer');

test('Create a new Engineer', () => {
    engineer= new Engineer('Jane Doe', '12', 'Engineer', 'Jane.Doe@gmail.com', 'Jane-Doe');

    expect(engineer.getName()).toBe('Jane Doe');
    expect(engineer.getId()).toBe('12');
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getGitHub()).toBe('Jane-Doe');
    expect(engineer.getEmail()).toBe('Jane.Doe@gmail.com');

})