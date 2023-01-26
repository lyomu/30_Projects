function User (email, name){
    this.email= email;
    this.name= name;
    this.online= false;
    this.login= function(){
        console.log (this.email, 'has logged in');
    }
}


var userOne = new User ('test@email.com', 'Test');
var userTwo= new User('test2@email.com', 'Test 2');
