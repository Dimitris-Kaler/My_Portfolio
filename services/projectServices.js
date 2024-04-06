const Project=require('../models/project')

const BestShopEver=new Project("Best-PetShop-Ever",
"This is PeopleCert CB13 Group final project.Best-PetShop-Ever is an Ecommerce Online Web Store for pets.In simple words it'a a Pet Shop which allows consumers to directly buy goods from a seller over the Internet using a web browser or a mobile app.",
"./images/BestPetshop.png",
"https://github.com/SpiValk/Best-PetShop-Ever")

const MVCPrivateSchoolCrud=new Project("MVC---Private-School---Crud",
"My second assignment at Peoplecert, Implementation of a CRUD using MVC The Required Technologies for this project NODE/EXPRESS.JS,MYSQL,BOOTSTRAP",
"./images/logo.png",
"https://github.com/Dimitris-Kaler/MVC---Private-School---Crud"

)
const BestPlayersApp=new Project("Best-Players-App",
"'BestPlayers' is a React application which gives you the ability to find the best football players of all time(the app has searchbar for easier searching) and you can read personal information about them and their statistics in their football career",
"./images/bestPlayers.png",
"https://github.com/Dimitris-Kaler/Best-Players-App"

)

const MemoryGame =new Project("Kal-Memory-Game",
"This is a small sample of a memory game. This version serves as a basic demonstration of the game's functionality and design. The final version will incorporate Java Servlets, a database, and additional features, and will be hosted on a Tomcat web server.",
"./images/game.jpg",
"https://dimitris-kaler.github.io/Memory-Game/")

const BackgroundGenerator=new Project("Background-Generator",
"An app which allows user to create his own background.User can pick colors for his background or generate colors randomly,upload image(through session storage),and set properties like background-size ,blendmode",
"./images/backgroundGenerator.png",
"https://github.com/Dimitris-Kaler/background-generator"
)
const OtherProjects=new Project("Others","You can view  other projects at my github like calculator,to-do-list,my projects from peoplecert bootcamp,rock-scissors-paper game etc","./images/otherProjects.png","https://github.com/Dimitris-Kaler?tab=repositories")

const projectsArray=[BestShopEver,MVCPrivateSchoolCrud,BestPlayersApp,BackgroundGenerator,MemoryGame,OtherProjects]





module.exports=projectsArray