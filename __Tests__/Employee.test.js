const Employee = require("../lib/Employee");

test("Create a new employee", () => {
    const employee = new Employee ('Jane Doe', '4', 'Jane.Doe@gmail.com');
        expect(employee.getName()).toBe("Jane Doe");
        expect(employee.getId()).toEqual('4');
        expect(employee.getEmail()).toBe("Jane.Doe@gmail.com");

        


})