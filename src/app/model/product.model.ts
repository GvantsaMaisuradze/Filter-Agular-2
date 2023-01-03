export enum ProductType{Animals , Cars , Tech , Family, Food}

export class Product{
    public image!:string;
    public name!:string;
    public description!:string;
    public price!:number;
    public type!:ProductType;

    constructor(image:string,name:string, description:string, price:number, type:ProductType){
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
        this.type = type;
    }
}