const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js")
const ejs = require("ejs");
app.use(bodyParser.urlencoded({extended : true}));
//app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(express.static("public"))
const items = ["Buy Food","Cook food", "Eat Food"];
const workItems=[];


app.get("/", function(req,res){

    const day = date.getDate();
    res.render("list", {listTitle : day, newListItems : items}) ;
});

app.post("/", function(req, res){
    let item =req.body.newItem;
    if(req.body.list === "Work List") {
        workItems.push(item);
        res.redirect("/work")
    } else {
    Items.push(item);
    res.redirect("/")
    }

})


app.get("/work",function(req,res){
    res.render("list", {listTitle: "Work List", newListItems: workItems } );
})

app.get("/about" ,function(req,res){
    res.render("about")
})





app.listen("3000", function(){
    console.log("Server is open and listening at port 3000")
})
































 /* switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
            case 1:
                day = "Monday";
                break;
                case 2:
                    day = "Tuesday";
                    break;
                    case 3:
                        day = "Wednesday";
                        break;
                        case 4:
                            day = "Thursday";
                            break;
                            case 5:
                                day = "Friday";
                                break;
                                case 6:
                                    day = "Saturday";
                                    break;
                                    default;
                                    console.log("Error current day is equal to: " + currentDay)
 }
                                    */