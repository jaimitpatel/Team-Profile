const Manager = require('../lib/Manager');

test('Create a new Manager', () => {
    manager= new Manager('James Doe', '1', 'James.Doe@gmail.com', '101');

    expect(manager.getName()).toBe('James Doe');
    expect(manager.getId()).toBe('1');
    expect(manager.getEmail()).toBe('James.Doe@gmail.com');
    expect(manager.getOffice()).toBe('101');

})