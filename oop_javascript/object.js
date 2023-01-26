// var userOne= {
//     email: 'test@email.com',
//     name: 'Ninja',
//     login(){
//         console.log(this.email, 'has logged in')
//     },
//     logout(){
//         console.log(this.email, 'has logged out')
//     }
// };
// // Change object name
// userOne.name= 'Yoshi';
// userOne.age =25;

// // Classes
// var userFour = new User()

class User{
    // cunstructor function
    constructor(email, name){
        this.email= email;
        this.name= name;
        this.score= 0;
    }
    login(){
        console.log(this.email, 'Just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'Just logged out');
        return this;
    }
    updateScore(){
    this.score++;
    console.log (this.email, 'score is now', this.score);
    return this;
    }
}
var userOne = new User ('test@email.com', 'Test');
var userTwo= new User('test2@email.com', 'Test 2');
// // console.log(userOne);
// // console.log(userTwo);
// userOne.login().updateScore().logout();
// userTwo.logout();
class Admin extends User{
    deleteUser(user){
        users= users.filter(u => {
            return u.email  != user.email;
        })
    }
}
var admin= new Admin('gideon@email.com', 'shaun');

var users= [userOne, userTwo];
admin.deleteUser(userTwo);
console.log(users);
