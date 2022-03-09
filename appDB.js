//jshint esversion:6
//You need to install the current version of mongoshell from the mongoDB website to get this working
//Initialize mongod on a separate shell before you run on a different shell!

const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const ggSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [1, "Needs a name"]
  },
  description: String,
  picture: String,
  musclegroup: String,
  reps: String,
  equipment: String,
  selected: String
});


const Exercise = mongoose.model("Exercise", ggSchema);

const benchPress = new Exercise ({
  name: "Bench Press",
  description: "Extend arms upward with barbell while lying on the bench.",
  picture: "N/A",
  musclegroup: "Upper",
  reps: "3x12",
  equipment: "Gym",
  selected: "N/A"
});

const barbellBackSquat = new Exercise ({
  name: "Barbell Back Squat",
  description: "Perform barbell squats by standing with your feet shoulder-width apart. Take a deep breath and unrack a weighted barbell, holding it on your upper back. Keep your chest up and your back straight as you hinge your hips and knees to lower your body through a full range of motion into a squat position.",
  picture: "N/A",
  musclegroup: "Lower",
  reps: "3x8",
  equipment: "Gym",
  selected: "N/A"
});

const deadLift = new Exercise ({
  name: "Deadlift",
  description: "Push your feet into the floor and stand up tall, pulling the weight with you and keeping your arms straight. Bring your hips forward and squeeze your abs and glutes at the top. Slowly reverse the movement, bending your knees and pushing your butt back to lower the weight back to the floor.",
  picture: "N/A",
  musclegroup: "Lower",
  reps: "3x6",
  equipment: "Gym",
  selected: "N/A"
});

const barbellJammers = new Exercise ({
  name: "Barbell Jammers",
  description: "Get into a split squat stance, with one foot in front of the other. The raised end of the barbell should be at shoulder height. Take the barbell in one hand by cupping it with an overhand grip. The other arm can rest at your side. Push the bar away from your body until your arm is extended. Pause at the top and lower the bar back to the starting position. Continue until you reach the desired amount of reps on one side, then switch sides. ",
  picture: "N/A",
  musclegroup: "Upper",
  reps: "3x12",
  equipment: "Gym",
  selected: "N/A"
});

const lunges = new Exercise ({
  name: "Lunges",
  description: "Take a big step forward, keeping your back straight. Bend your front knee to about 90 degrees. Keep weight on your back toes and drop the back knee toward the floor. Don't let the back knee touch the floor. ",
  picture: "N/A",
  musclegroup: "Lower",
  reps: "3x20",
  equipment: "Home",
  selected: "N/A"
});

const starJumps = new Exercise ({
  name: "Star Jumps",
  description: "Stand tall with arms and legs straight, jump while spreading your arms and legs open",
  picture: "N/A",
  musclegroup: "Cardio",
  reps: "3x40",
  equipment: "Home",
  selected: "N/A"
});

const russianTwists = new Exercise ({
  name: "Russian Twists",
  description: "Lie on your back, and lift your knees up so your back and legs form a 90 degree angle. Then twist your body left and right with or without weights.",
  picture: "N/A",
  musclegroup: "Cardio",
  reps: "3x60",
  equipment: "Home",
  selected: "N/A"
});

const pushups = new Exercise ({
  name: "Pushups",
  description: "Lie on the floor with your stomach facing the ground, stand on the points of your feet and push off the ground with you arms at shoulder distance length.",
  picture: "N/A",
  musclegroup: "Cardio",
  reps: "3x20",
  equipment: "Home",
  selected: "N/A"
});

const pullups = new Exercise ({
  name: "Pullups",
  description: "Hang onto a stable bar, and execute a closed-chain movement, with the body lifted by the hands, being pulled upwards.",
  picture: "N/A",
  musclegroup: "Upper",
  reps: "3x12",
  equipment: "Home",
  selected: "N/A"
});
const chinups = new Exercise ({
  name: "Chinups",
  description: "Similar to the pull-up, have the range of motion be dictated by the chin being above the bar.",
  picture: "N/A",
  musclegroup: "Upper",
  reps: "3x12",
  equipment: "Home",
  selected: "N/A"
});

const situps = new Exercise ({
  name: "Situps",
  description: "Lie with your back on the floor, and hands preferably behind the head. Anchor the feet down and lift your body up to a 45-degree angle with your core muscles.",
  picture: "N/A",
  musclegroup: "Cardio",
  reps: "3x20",
  equipment: "Home",
  selected: "N/A"
});

const planks = new Exercise ({
  name: "Planks",
  description: "Get in the Push-up position, and keep arms at shoulder with while maintaining a lift off the ground for a set duration",
  picture: "N/A",
  musclegroup: "Cardio",
  reps: "3x60s",
  equipment: "Home",
  selected: "N/A"
});

Exercise.insertMany([benchPress, barbellBackSquat, deadLift, barbellJammers, lunges, starJumps, russianTwists, pushups, pullups, chinups, situps, planks],function(err){
  if(err){
    console.log(err);
  }else {
    console.log("Successful operation, insertion complete. ")
  }
})

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "tightest pussy"
// });

// Fruit.insertMany([kiwi], function(err){
//   if(err){
//     console.log(err);
//   }else {
//     console.log("success");
//   }
// });


Exercise.find(function(err, exercises){
  if (err){
    console.log(err);
  }else {
    mongoose.connection.close();

    exercises.forEach(function(exercise){
      console.log(exercise.name);
    });
  }
});
