class user {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("User Data: ", this.name, this.email);
    }
}

class admin extends user{
    constructor(name, email){
        super(name, email)
    }
    editData(){
        super.viewData();
    }
}

let object = new user("ABC", "abc@gmail.com");
object.viewData();

let object1 = new admin("XYZ", "xyz@gmail.com");
object1.editData();