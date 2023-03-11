const products=[];

module.exports=class Product{
    constructor(title){
        this.title=title;

    }
    save(){
        products.push(this)
    }
    // by using static , when we call fetchAll it will not be called for an instance but it will contains all the data for which th objects are created
   static fetchAll(){
    return products;
    }
}