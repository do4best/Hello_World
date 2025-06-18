class Employee{
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    print() {
        console.log(`Name : ${this.name} Role : ${this.role}`)
    }
}
class EmplyeeGroup{
    constructor(name, group = []) {
        this.name = name;
        this.group = group;

    }
    print() {
        console.log(`Group : ${this.name}`);
        this.group.forEach(emp =>emp.print())
    }
}
let person = new Employee("Meer", "Web Developer")
let person2 = new Employee("Shah", "Andtriod Developer")
let agroup = new EmplyeeGroup("Developer", [person, person2])
agroup.print()