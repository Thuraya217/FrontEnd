    class User extends Human {
        constructor (name, age, id, title, depid, salary, workinghours) {
        super(name, age, id)
        this.title = title
        this.depid = depid
        this.salary = salary
        this.workinghours = workinghours
    }
}
