"use strict"

class User {
    /**
     * 构造方法，在new对象时会被调用
     */
    constructor (username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    register () {
        console.log(this.username + ' is now registered');
    }

    /**
     * 定义表态方式，即类可直接调用的方法
     */
    static countUsers () {
        console.log('There are 100 users');
    }
}

let bob = new User('bob', 'bob@email.com', '12345');

bob.register();

User.countUsers();


/**
 * 类继承
 */

class Member extends User {
    constructor (username, email, password, memberPackage) {
        // 调用父类方法
        super(username, email, password);

        this.package = memberPackage;
    }

    getPackage () {
        console.log(this.username + ' is subscribed to the ' + this.package + ' package');
    }
}

let mike = new Member('mike', 'mike@email.com', '123', 'standard');
mike.register();
mike.getPackage();
