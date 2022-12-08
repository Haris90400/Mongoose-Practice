const mongoose = require('mongoose');
 
main().catch(err => console.log(err));
 
async function main() {
  await mongoose.connect('mongodb://127.0.0.1/fruitsDB');
  console.log("Connected");
 
  // What this will do is to create the database 'fruitsDB'
  // ALL THE CODE SHOULD BE WITHIN THE MAIN FUNCTION
  // Read the Mongoose Documentation
    //Creating the schema of database
    const fruitSchema = new mongoose.Schema ({
        name: {
            type: String, //Validation given(Ex required)
            required: true
        },
        rating: {
           type: Number,
           min: 1, //Validation given(Ex. min and max)
           max: 10
        },
        review: String
        });
    
    
     
        //creating the model
        const Fruit = new mongoose.model ("Fruit", fruitSchema)
     
        //Adding data
        const fruit = new Fruit ({
        name: "Apple",
        rating: 10,
        review: "Great!"
        });

    
        //Saving the data 
        // fruit.save();

        const personsSchema = new mongoose.Schema ({
            name: String,
            age: Number,
            favouriteFruit: fruitSchema //establishing relationship
        });

        // const pineapple = new Fruit({
        //     name: "Pineapple",
        //     score: 9,
        //     review: "Great Fruit!"
        // });

        // pineapple.save();

        // const mango = new Fruit({
        //     name: "Mango",
        //     score: 10,
        //     review: "King pf fruits"
        // });

        // mango.save();

        const Person = new mongoose.model("Person",personsSchema);

        // const person = new Person ({
        //     name: "John",
        //     age: 37,
        //     favouriteFruit: mango
        // });

        // const person = new Person ({
        //          name: "Amy",
        //          age: 12,
        //          favouriteFruit: pineapple
        //      });

        // person.save();

        const kiwi = new Fruit({
            name: "Kiwi",
            score: 10,
            review: "The best fruit!"
        });

        // Insert Data using Model
        // Fruit.insertMany([kiwi],function(err){
        //     if (err){
        //         console.log(err)
        //     }
        //     else{
        //         console.log("Sucessfully saved fruit");
        //     }
        // });


        // Print fruit details or name
        Fruit.find(function(err, fruitDeatils){
            if (err){
                console.log(err);
            }
            else {
                mongoose.connection.close();
                //Prints only fruit names
                for(var i =0;i<fruitDeatils.length;i++){
                    console.log(fruitDeatils[i].name);
                }
            }
        });
            
            Person.deleteOne({_id: "6392133178bc43c8abfa9a1e"},function(err){
                if(err){
                    console.log(err);
                }
                else {
                    console.log("Successfuly deleted");
                }
            });
}
         
        
            