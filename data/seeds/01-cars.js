exports.seed = function(knex, Promise) {
    return knex('cars').truncate()
        .then( function(){
            return knex('cars').insert([
                {id:1, vin:"toyota1", make:"toyota", model:"corolla",mileage:1000,title:null, transmission:null},
                {id:2, vin:"ford1", make:"ford", model:"fisa",mileage:1000,title:null, transmission:null},
                {id:3, vin:"chrysler1", make:"chrysler", model:"coupaa",mileage:1000,title:null, transmission:null},
                {id:4, vin:"dogdge1", make:"dodge", model:"charger",mileage:1000,title:null, transmission:null},
                {id:5, vin:"tesla1", make:"tesla", model:"2k",mileage:1000,title:null, transmission:null},
            ])
        });
}
