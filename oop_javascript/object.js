var userOne= {
    email: 'test@email.com',
    name: 'Ninja',
    login(){
        console.log(this.email, 'has logged in')
    },
    logout(){
        console.log(this.email, 'has logged out')
    }
};
// Change object name
userOne.name= 'Yoshi';
userOne.age =25;

// Classes