//Require express and body-parser packages
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
//create app constant using express
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose')
//"mongoddb+srv://Username:Password@gettagrip..."
//Usernames for Tommy, Fabian and Jose are [tommy, fabian, jose]
//Passwords are the same                   [tommy, fabian, jose]

// const uri = "mongodb+srv://tommy:tommy@gettagrip.3ilws.mongodb.net/exercises?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("ggDB").collection("Exercise");
//   // perform actions on the collection object
//   client.close();
// });

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



mongoose.connect("mongodb+srv://tommy:tommy@gettagrip.3ilws.mongodb.net/GettaGrip?retryWrites=true&w=majority", {useNewUrlParser: true});
//mongoose.connect("mongodb+srv://tommy:tommy@gettagrip.3ilws.mongodb.net/Users?retryWrites=true&w=majority", {useNewUrlParser: true});

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
  embedded: String,
  selected: Boolean
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [1, "Needs a name"]
  },
  email: {
    type: String,
    require: [1, "Needs an email"]
  },
  all: [String],
  selected: [String],
  day1: [String],
  day2: [String],
  day3: [String],
  day4: [String],
  day5: [String],
  day6: [String],
  day7: [String],
});

const Exercise = mongoose.model("Exercise", ggSchema);
const User = mongoose.model("User", userSchema);
// new object template
// const = new Exercise ({
//   name: "",
//   description: "",
//   picture: "",
//   musclegroup: "",
//   reps: "3x12",
//   equipment: "",
//   embedded: "",
//   selected: 0
// });

const tommy = new User({
  name: "tommy",
  email: "tommyrlerma@gmail.com",
  all:[],
  selected: [],
  day1: [],
  day2: [],
  day3: [],
  day4: [],
  day5: [],
  day6: [],
  day7: []
});

//<iframe width="1280" height="720" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
const benchPress = new Exercise ({
  name: "Bench Press",
  description: "Extend arms upward with barbell while lying on the bench.",
  picture: "benchPress.png",
  musclegroup: "Upper",
  reps: "3x12",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=gRVjAtPip0Y",
  selected: 0
});
const barbellBackSquat = new Exercise ({
  name: "Barbell Back Squat",
  description: "Perform barbell squats by standing with your feet shoulder-width apart. Take a deep breath and unrack a weighted barbell, holding it on your upper back. Keep your chest up and your back straight as you hinge your hips and knees to lower your body through a full range of motion into a squat position.",
  picture: "barbellBackSquat.png",
  musclegroup: "Lower",
  reps: "3x8",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=CWl0apMgshk",
  selected: 0
});
const deadLift = new Exercise ({
  name: "Deadlift",
  description: "Push your feet into the floor and stand up tall, pulling the weight with you and keeping your arms straight. Bring your hips forward and squeeze your abs and glutes at the top. Slowly reverse the movement, bending your knees and pushing your butt back to lower the weight back to the floor.",
  picture: "deadlift.png",
  musclegroup: "Lower",
  reps: "3x6",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=op9kVnSso6Q",
  selected: 0
});
const lunges = new Exercise ({
  name: "Lunges",
  description: "Take a big step forward, keeping your back straight. Bend your front knee to about 90 degrees. Keep weight on your back toes and drop the back knee toward the floor. Don't let the back knee touch the floor. ",
  picture: "lunges.png",
  musclegroup: "Lower",
  reps: "3x20",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=Z2n58m2i4jg",
  selected: 0
});
const starJumps = new Exercise ({
  name: "Star Jumps",
  description: "Stand tall with arms and legs straight, jump while spreading your arms and legs open",
  picture: "starJumps.png",
  musclegroup: "Cardio",
  reps: "3x40",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=hPFtd4K-khA",
  selected: 0
});
const russianTwists = new Exercise ({
  name: "Russian Twists",
  description: "Lie on your back, and lift your knees up so your back and legs form a 90 degree angle. Then twist your body left and right with or without weights.",
  picture: "russianTwists.png",
  musclegroup: "Upper",
  reps: "3x60",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=JyUqwkVpsi8",
  selected: 0
});
const pushups = new Exercise ({
  name: "Pushups",
  description: "Lie on the floor with your stomach facing the ground, stand on the points of your feet and push off the ground with you arms at shoulder distance length.",
  picture: "pushups.png",
  musclegroup: "Upper",
  reps: "3x20",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=6JroV8rJk2M",
  selected: 0
});
const pullups = new Exercise ({
  name: "Pullups",
  description: "Hang onto a stable bar, and execute a closed-chain movement, with the body lifted by the hands, being pulled upwards.",
  picture: "pullups.png",
  musclegroup: "Upper",
  reps: "3x12",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=aAggnpPyR6E",
  selected: 0
});
const situps = new Exercise ({
  name: "Situps",
  description: "Lie with your back on the floor, and hands preferably behind the head. Anchor the feet down and lift your body up to a 45-degree angle with your core muscles.",
  picture: "situps.png",
  musclegroup: "Upper",
  reps: "3x20",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=1fbU_MkV7NE",
  selected: 0
});
const planks = new Exercise ({
  name: "Planks",
  description: "Get in the Push-up position, and keep arms at shoulder with while maintaining a lift off the ground for a set duration",
  picture: "planks.png",
  musclegroup: "Upper",
  reps: "3x60s",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=5EFcTkm0J-w",
  selected: 0
});
const miniHops = new Exercise ({
  name: "Mini Hops",
  description: "An unweighted mini squat into a short jump straight into the air.",
  picture: "miniHops.png",
  musclegroup: "Lower",
  reps: "3x20",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=UDZBGzeQea0",
  selected: 0
});
const shoulderTaps = new Exercise ({
  name: "Shoulder Taps",
  description: "While planking, you rapidly lift one hand to tap the opposite shoulder and put it back down.",
  picture: "shoulderTaps.png",
  musclegroup: "Upper",
  reps: "3x20",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=mifkJdYqsZY",
  selected: 0
});
const sidePlank = new Exercise ({
  name: "Side Plank",
  description: "Lie on your side and life your body up with your elbow parallel to your shoulders - can be done in high or low position.",
  picture: "sidePlank.png",
  musclegroup: "Upper",
  reps: "3x60s",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=IkMmABQ9SkM",
  selected: 0
});
const handReleasePushups = new Exercise ({
  name: "Hand Release Pushups",
  description: "At the bottom of the push-up, lift your hands off the ground before pushing back up.  Make sure to keep a solid plank position with your core.",
  picture: "handReleasePushups",
  musclegroup: "Upper",
  reps: "3x15",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=kHtt49_Pljw",
  selected: 0
});
const declinePushups = new Exercise ({
  name: "Decline Pushups",
  description: "To work the upper chest and shoulders more just do a push up with your feet on a bench or stack of plates.",
  picture: "declinePushups.png",
  musclegroup: "Upper",
  reps: "3x20",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=SKPab2YC8BE",
  selected: 0
});
const vups = new Exercise ({
  name: "Vups",
  description: "Lay flat on the floor.  Lift your legs and upper body off the floor at the same time (making a v-shape) and touch your toes.  Then come back down.",
  picture: "vups.png",
  musclegroup: "Upper",
  reps: "3x30",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=7UVgs18Y1P4",
  selected: 0
});
const gobletSquats = new Exercise ({
  name: "Goblet Squats",
  description: "This is a traditional front squat, but with a heavy dumbbell or kettlebell held just below your chin.",
  picture: "gobletSquats.png",
  musclegroup: "Lower",
  reps: "3x20",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=mF5tnEBrdkc",
  selected: 0
});
const halos = new Exercise ({
  name: "Halos",
  description: "Take a weight in both hands, and trace a halo around your head.",
  picture: "halos.png",
  musclegroup: "Upper",
  reps: "3x20",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=wJcmanVh5EE",
  selected: 0
});
const lateralRaise= new Exercise ({
  name: "Lateral Raise",
  description: "With the dumbell facing foward and arms lowered, extend arms upward in line with shoulders, then lower.",
  picture: "latearlRaise.png",
  musclegroup: "Upper",
  reps: "3x15",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=kDqklk1ZESo",
  selected: 0
});
const chestPress = new Exercise ({
  name: "Chest Press",
  description: "Lie on a flat bench, hold two dumbells with palms facing forward and thumbs wraped, lower to slightly wider than mid chest, lower slowly to eye level.",
  picture: "chestPress.png",
  musclegroup: "Upper",
  reps: "3x12",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=VmB1G1K7v94",
  selected: 0
});
const bicepCurl = new Exercise ({
  name: "Bicep Curl",
  description: "Lower arms to the side, then extend fists out. Lift up to your chest, then lower back to former position.",
  picture: "bicepCurl.png",
  musclegroup: "Upper",
  reps: "3x20",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=uO_CNYidOw0",
  selected: 0
});
const pushPress = new Exercise ({
  name: "Push Press",
  description: "Grab a barbell with overhand, and hold it to shoulder height. Low your knees and keep your torso upright, then extend your knees and hips to drive the barbell overhead, standing tall.",
  picture: "pushPress.png",
  musclegroup: "Upper",
  reps: "3x12",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=iaBVSJm78ko",
  selected: 0
});
const inclineBenchPress = new Exercise ({
  name: "Incline Bench Press",
  description: "Set a bench to a 30 - 45 degree angle, then lie with back on it and a dumbell in each hand at shoulder level. Arch back, drive feet and press the weights over your chest.",
  picture: "inclineBenchPress",
  musclegroup: "Upper",
  reps: "3x12",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=dynoKEIcpoU",
  selected: 0
});
const bentoverRow = new Exercise ({
  name: "Bentover Row",
  description: "Grasp the weight with an overhand grip and bend forward so the torso is parallel to the floor. Squeeze your shoulder blades and row the weight to your neck.",
  picture: "bentoverRow.png",
  musclegroup: "Upper",
  reps: "3x20",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=VKFeB7ST830",
  selected: 0
});
const oneArmRow = new Exercise ({
  name: "One Arm Row",
  description: "Grab a dumbell in one hand, and rest your knee on a bench. Whith opposite arm hanging, keep body perpendicular to the ground and lift the weight up to your side.",
  picture: "oneArmRow.png",
  musclegroup: "Upper",
  reps: "3x20",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=PgpQ4-jHiq4",
  selected: 0
});
const ezBarCurl = new Exercise ({
  name: "Ez Bar Curl",
  description: "Hold an EZ bar (palms facing up) with a shoulder-width grip and arms extended with a slight bend at the elbows. Keeping your upper arms at your sides, curl the bar up.",
  picture: "ezBarCurl.png",
  musclegroup: "Upper",
  reps: "3x12",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=zG2xJ0Q5QtI",
  selected: 0
});
const dumbbellCurl = new Exercise ({
  name: "Dumbbell Curl",
  description: "Stand or set an adjustable bench to a 45- to 60-degree incline and lie back against it with a dumbbell in each hand. Hold the weights with your palms facing up and a braced core. Then, keeping your upper arms vertical, curl the weights up.",
  picture: "dumbbellCurl.png",
  musclegroup: "Cardio",
  reps: "3x20",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=sAq_ocpRh_I",
  selected: 0
});
const hammerCurl = new Exercise ({
  name: "Hammer Curl",
  description: "Hold a dumbbell in each hand with palms facing your sides and arms extended straight down. Keeping your upper arms against your sides, curl both weights at the same time.",
  picture: "hammerCurl.png",
  musclegroup: "Upper",
  reps: "3x20",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=EdWCF9-ZAJI",
  selected: 0
});
const crossbodyCurl = new Exercise ({
  name: "Cross-body Curl",
  description: "old a dumbbell in each hand with arms hanging at your sides and palms facing the body. With an upright posture, slowly begin to curl one dumbbell up across your body to opposite shoulder. Pause for one second and slowly lower back to the starting position.",
  picture: "crossbodyCurl.png",
  musclegroup: "Cardio",
  reps: "3x60s",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=n4J53LpjvUk",
  selected: 0
});
const tricepPushdown = new Exercise ({
  name: "Tricep Pushdown",
  description: "Attach a rope handle to the top pulley of a cable station and grasp an end in each hand. Push the weight down to lock out your elbows and then let your elbows drift back slightly on the way up so you feel a stretch in your triceps.",
  picture: "tricepPushdown.png",
  musclegroup: "Upper",
  reps: "3x30",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=HIKzvHkibWc",
  selected: 0
});
const lyingTricepExtension = new Exercise ({
  name: "Lying Tricep Extension",
  description: "Lying on a bench, hold the weights directly over your face. Keeping your upper arms at that angle, bend your elbows and lower the weights behind your head. Extend your elbows, keeping the same angle with your upper arms.",
  picture: "lyingTricepExtension.png",
  musclegroup: "Upper",
  reps: "3x12",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=MO_03opCc0g",
  selected: 0
});
const hangClean = new Exercise ({
  name: "Hang Clean",
  description: "Start by holding the bar against your body with your hands at shoulder-width on the bar. Keeping your back in its natural curve, bend your hips and knees (as you would in a squat), lowering the bar to just above your knees. Explosively extend your hips as if jumping, while at the same time shrugging your shoulders and pulling the bar straight up in front of your torso.",
  picture: "hangClean.png",
  musclegroup: "Upper",
  reps: "3x15",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=TjTEOme9fvw",
  selected: 0
});
const bentoverLateralRaise = new Exercise ({
  name: "Bentover Lateral Raise",
  description: "Hold a dumbbell in each hand and, keeping your lower back in its natural arch, bend your hips back until your torso is about parallel to the floor. Allow your arms to hang. Now, squeeze your shoulder blades together and raise your arms out 90 degrees, with thumbs pointing up, until your upper arms are parallel to the floor.",
  picture: "bentoverLateralRaise.png",
  musclegroup: "Cardio",
  reps: "3x60s",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=SWjzFaH9QXA",
  selected: 0
});
const inclineYTW = new Exercise ({
  name: "Incline YTW",
  description: "Sit on a bench with an incline and your frontal body facing the seat. Then extend and raise your arms in the shape of a “Y” formation (thumbs upward) for the first position. Then bring them down to form a “T” (thumbs down). Follow with the last movement by putting your arms in the shape of a “W” by shrugging and squeezing your shoulder blades together.",
  picture: "inclineYTW.png",
  musclegroup: "Upper",
  reps: "3x15",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=3g4EziPTjxI",
  selected: 0
});
const shrug = new Exercise ({
  name: "Shrug",
  description: "Hold dumbbells at your sides and stand with feet shoulder width apart. Bend your hips back to squat down until the weights are knee level. Now explode upward and shrug hard at the top. Reset your feet before beginning the next rep.",
  picture: "shrug.png",
  musclegroup: "Upper",
  reps: "3x60s",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=8lP_eJvClSA",
  selected: 0
});
const closegripDumbbellPress = new Exercise ({
  name: "Close-Grip Dumbbell Press",
  description: "Lie faceup on a bench, grasping a barbell with your index fingers on the inside edge of the knurling (the rough part of the bar). Arch your back and pull the bar off the rack. Lower it to your sternum, tucking your elbows about 45 degrees from your sides. When the bar touches your body, drive your feet hard into the floor and press the bar directly above you.",
  picture: "closegripDumbbellPress.png",
  musclegroup: "Upper",
  reps: "3x12",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=cefsgoFQNNA",
  selected: 0
});
const splitSquats = new Exercise ({
  name: "Split Squats",
  description: "Holding dumbbells, slowly lunge forwards, keeping the knee in line with the toe. Without stopping at the bottom, push back up to the start position. Now swap legs.",
  picture: "splitSquat.png",
  musclegroup: "Lower",
  reps: "3x12",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=SGHnCftrZkA",
  selected: 0
});
const seatedShoulderPress = new Exercise ({
  name: "Seated Shoulder Press",
  description: "Sitting upright on a bench, start with dumbbells held straight above your head. Slowly bend your elbows and lower dumbbells until they are in line with your shoulders, then drive up.",
  picture: "seatedShoulderPress.png",
  musclegroup: "Upper",
  reps: "3x12",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=oBGeXxnigsQ",
  selected: 0
});
const hipThrusts = new Exercise ({
  name: "Hip Thrusts",
  description: "Sit on the floor, back against a bench or step. Roll a dumbbell (or barbell) onto the front of your hips. With knees bent, shoulders on the bench, drive hips off the floor until your back is parallel.",
  picture: "hipThrusts.png",
  musclegroup: "Lower",
  reps: "3x20",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=Zp26q4BY5HE",
  selected: 0
});
const dumbbellDeadlift = new Exercise ({
  name: "Dumbell Deadlift",
  description: "Keeping your legs straight, bend at the hips to lower your weighted hands towards the floor. Go to just below knee height and then stand straight again. Clench your glutes and core muscles as you do so.",
  picture: "dumbellDeadlift.png",
  musclegroup: "Lower",
  reps: "3x10",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=JNpUNRPQkAk",
  selected: 0
});
const stepups = new Exercise ({
  name: "Stepups",
  description: "Start with your weaker leg on a step or box and, with or without dumbbells in your hands, step onto it. Without pausing at the top, lower back to the start position, leaving your start foot on the box and then stepping straight back up on the same leg.",
  picture: "stepups.png",
  musclegroup: "Lower",
  reps: "3x12",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=dG75KOf4EtY",
  selected: 0
});
const seatedBicepCurl = new Exercise ({
  name: "Seated Bicep Curl",
  description: "Sit upright holding dumbbells, arms down by your sides, palms facing forwards. Bend arms at the elbow, keeping shoulders still until the dumbbells almost reach them.",
  picture: "seatedBicepCurl.png",
  musclegroup: "Upper",
  reps: "3x12",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=zs618MVIsG4",
  selected: 0
});
const lateralPulldown = new Exercise ({
  name: "Lateral Pulldown",
  description: "Perform the lat pulldown exercise by sitting in front of a cable machine with a pulldown bar. Grab the bar and bend your elbows to lower it closer towards your upper chest.",
  picture: "lateralPulldown.png",
  musclegroup: "Upper",
  reps: "3x15",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=AOpi-p0cJkc",
  selected: 0
});
const legCurl = new Exercise ({
  name: "Leg Curl",
  description: "Exhale and flex your knees, pulling your ankles as close to your buttocks as you can. Keep your hips firmly on the bench. Hold briefly.",
  picture: "legCurl.png",
  musclegroup: "Lower",
  reps: "3x12",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=t9sTSr-JYSs",
  selected: 0
});
const seatedCableRow = new Exercise ({
  name: "Seated Cable Row",
  description: "Pull the handle and weight back toward the lower abdomen while trying not to use the momentum of the row too much by moving the torso backward with the arms.",
  picture: "seatedCableRow.png",
  musclegroup: "Upper",
  reps: "3x20",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=IzoCF_b3cIY",
  selected: 0
});
const legPress = new Exercise ({
  name: "Leg Press",
  description: "Brace your abdominal muscles and push the platform away with your heels and forefoot. While exhaling, extend your legs and keep your head and back flat against the seat pad.",
  picture: "legPress.png",
  musclegroup: "Lower",
  reps: "3x16",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=Aq5uxXrXq7c",
  selected: 0
});
const romanianDeadlift = new Exercise ({
  name: "Romanian Deadlift",
  description: "To start the move, stand with the bar or weight in your hands as opposed to the floor. Slowly lower the weight with a slight bend in your knees, bending at the hips and keeping your back straight. Lower until you feel a slight stretch in your hamstrings – usually when the weight has just passed your knees – then drive your hips forwards and use your hamstrings to power back up to standing.",
  picture: "romanianDeadlift.png",
  musclegroup: "Lower",
  reps: "3x8",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=2SHsk9AzdjA",
  selected: 0
});
const overheadTricepExtension = new Exercise ({
  name: "OverHead Tricep Extension",
  description: "Hold the weight overhead by grasping the inside dumbbell plate surface with both hands. Slowly bend your elbows and lower the weight behind your head as far as you can.",
  picture: "overheadTricepExtension.png",
  musclegroup: "Upper",
  reps: "3x14",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=9wxRhONFsRA",
  selected: 0
});
const cableCrossover = new Exercise ({
  name: "Cable Crossover",
  description: "Step forward in front of an imaginary straight line between both pulleys while pulling your arms together in front of you.",
  picture: "cableCrossover.png",
  musclegroup: "Cardio",
  reps: "3x16",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=taI4XduLpTk",
  selected: 0
});
const floorPress = new Exercise ({
  name: "Floor Press",
  description: " Slowly lay back while keeping the dumbbells close to your chest and bend your knees to roughly 45 degrees and move your feet up slightly. Press the weights to full extension by contracting your triceps and chest",
  picture: "floorPress.png",
  musclegroup: "Upper",
  reps: "3x12",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=uUGDRwge4F8",
  selected: 0
});
const landminePress = new Exercise ({
  name: "Landmine Press",
  description: "Place the end of the barbell into the landmine device, and stand facing the barbell. Using a full grip (with your thumbs wrapped around the bar), clasp the lever of the barbell with both hands.",
  picture: "landminePress.png",
  musclegroup: "Upper",
  reps: "3x12",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=gygpFvx_O3k",
  selected: 0
});
const lyingHamstringCurl = new Exercise ({
  name: "Lying Hamstring Curl",
  description: "Lie on your stomach with your legs straight out behind you. Support your upper body with your forearms. Position a dumbbell vertically in between the arches of your feet. Lift your legs so the dumbbell hovers just above the floor",
  picture: "lyingHamstringCurl.png",
  musclegroup: "Lower",
  reps: "3x12s",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=65vwYKNxUJs",
  selected: 0
});
const hackSquats = new Exercise ({
  name: "Hack Squats",
  description: "Step into the machine, placing your feet shoulder-width apart and your shoulders and back against the pads. Release the safety handles, inhale, and lower down, bending your knees until they reach a 90-degree angle.",
  picture: "hackSquat.png",
  musclegroup: "Lower",
  reps: "3x12",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=0tn5K9NlCfo",
  selected: 0
});
const dumbbellRDLShrug = new Exercise ({
  name: "Dumbbell RDL Shrug",
  description: "Hold a dumbbell in each hand, palms facing thighs, arms straight. Stand with feet hip width, with a natural arch in your lower back. Engaging your abs, lower your hips back as you lower the dumbbells.",
  picture: "dumbellRDLShrug.png",
  musclegroup: "Upper",
  reps: "3x12",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=7nMOPQns_4c",
  selected: 0
});
const kneelingPushups = new Exercise ({
  name: "Kneeling Pushups",
  description: "",
  picture: "kneelingPushUp.png",
  musclegroup: "Upper",
  reps: "3x16",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=utzhPQuXWcA",
  selected: 0
});
const runningSprint = new Exercise ({
  name: "Running Sprint",
  description: "X sets of top speed, with non sprinting time dedicated to walking.",
  picture: "runningSprint.png",
  musclegroup: "Cardio",
  reps: "5x10s",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=kQfXgIAcl0M",
  selected: 0
});
const walk = new Exercise ({
  name: "Walk",
  description: "...",
  picture: "walk.png",
  musclegroup: "Cardio",
  reps: "1x15m",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=945GB6r2o_Y",
  selected: 0
});
const cableWoodchop = new Exercise ({
  name: "Cable Woodchop",
  description: "Stand to the left of a high cable machine and hold the handle with both hands, arms straight. Step your right foot one to two feet in front of your left, knees slightly bent. Keeping your arms straight and eyes on your hands, pull the handle down and across your body until it's outside your left leg.",
  picture: "cableWoodchop.png",
  musclegroup: "Upper",
  reps: "3x16",
  equipment: "Gym",
  embedded: "https://www.youtube.com/watch?v=ZDt4MCvjMAA",
  selected: 0
});
const inclinePushups = new Exercise({
  name: "Incline Pushups",
  description: "The key to incline pushups is to make sure that your body is in a straight line while you’re in plank position. One common mistake is setting yourself up too close to the box, which can cause your back to arch. ",
  picture: "inclinePushups.png",
  musclegroup: "Upper",
  reps: "3x20",
  equipment: "Home",
  embedded: "https://www.youtube.com/watch?v=Z0bRiVhnO8Q",
  selected: 0
});

const defaults = [benchPress, barbellBackSquat, deadLift, lunges, starJumps, russianTwists, pushups, pullups, situps, planks, miniHops, shoulderTaps, sidePlank, handReleasePushups, declinePushups, vups, gobletSquats, halos, lateralRaise, chestPress, bicepCurl, pushPress, inclineBenchPress, bentoverRow, oneArmRow, ezBarCurl, dumbbellCurl, hammerCurl, crossbodyCurl, tricepPushdown, lyingTricepExtension, hangClean, bentoverLateralRaise, inclineYTW, shrug, closegripDumbbellPress, splitSquats, seatedShoulderPress, hipThrusts, dumbbellDeadlift, stepups, seatedBicepCurl, lateralPulldown, legPress, romanianDeadlift, overheadTricepExtension, cableCrossover, floorPress, landminePress, lyingHamstringCurl, hackSquats, dumbbellRDLShrug, kneelingPushups, runningSprint, walk, cableWoodchop, inclinePushups];


//Hello when user tries to access / or home route
app.get("/", function(req, res){


    Exercise.find({}, function(err, foundExercises){
        if (foundExercises.length === 0){
          Exercise.insertMany(defaults, function(err){
            if(err){
              console.log(err);
            } else {
              console.log("Successful Insert Operation.");
            }
          });
          res.redirect("/");
        } else {
          res.render("list", {listTitle: "", newListItems: foundExercises});
        }
    });
  });

// Add method with ways for name object retrieval
  app.post("/", function(req, res){
    const exerciseName = req.body.newExercise;

    const exercise = new Exercise({
      name: exerciseName
    });

    exercise.save();

  });

app.get("/exercises", function(req, res){
  res.render("list", {listTitle: "", newListItems: exercisePItems});
});

app.get("/schedule", function(req, res){
  res.render("list", {listTitle: "", newListItems: schedulePItems});
});
//listen on port 3000, log that the server is running
app.listen(3000, function(){
  console.log("Server Running");
});


//
// <div class = "">
//   <% for (let i = 0; i < newListItems.length; i++) { %>
//     <div class="exerciseItems">
//       <input type="">
//       <p><%= newListItems[i].name %></p>
//     </div>
//     <%} %>




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
