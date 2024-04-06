const Skill=require("../models/skill");


const html=new Skill("HTML","./images/html.png");

const css=new Skill("CSS","./images/css.png")

const javascript=new Skill("JAVASCRIPT","./images/javascript.png")

const java=new Skill("JAVA","./images/java.png")

const rpa=new Skill("ROBOTIC PROCESS AUTOMATION","./images/rpa.jpg")

const bootstrap=new Skill("BOOTSPTRAP","./images/Bootstrap.png")

const node=new Skill("NODE","./images/node.png");

const express=new Skill("EXPRESS","./images/express.png")

const react=new Skill("REACT","./images/react.png")

const sails=new Skill("SAILS","./images/sails.jpg")

const mysql=new Skill("MYSQL","./images/mysql.png");

const liberty=new Skill("OPEN LIBERTY","./images/liberty.jpg")




const skillsArray=[html,css,javascript,java,rpa,bootstrap,node,express,react,sails,mysql,liberty]



module.exports=skillsArray;