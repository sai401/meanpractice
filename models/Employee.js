module.exports=class Employee{
    constructor(name,designation,companyName="virtusa",email,city,state,country){
        this.name=name;
        this.designation=designation;
        this.companyName=companyName;
        this.email=email;
        this.city=city;
        this.state=state;
        this.country=country;
    }
}