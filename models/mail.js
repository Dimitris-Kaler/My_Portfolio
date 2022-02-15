class Mail {
    constructor(name,email,message){
        this.name=name
        this.email=email
        this.message=message
    }

    toString(){
        return `Name:${this.name},Email:${this.email},Message:${this.message}`
    }
}


module.exports=Mail