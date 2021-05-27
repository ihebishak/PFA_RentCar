export class Car {
    id: number
    carName: string
    location: string
    city:string
    bookingPrice : number
    carType:string
    fuelType:string
    numOfSeats:number
    pricePerKm:number
    transmissionType:string
    imageUrl: string
    isBooked:boolean
    


    constructor(id){
        this.id = id;
    }
    
}