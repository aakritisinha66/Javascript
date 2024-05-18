class student {
    // roll = "000"
    setRoll(roll){
        // console.log(this.roll, roll);
        this.roll = roll;
    }
    getRoll(){
        console.log(this.roll);
    }
}

let student_obj = new student();
student_obj.setRoll("001")
student_obj.getRoll();