"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/
// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      displayPerson(searchByName(people));
      isUserSatisfied(people);
      break;
    case 'no':
      // TODO: search by traits
      displayMultiple(searchByTrait(people));
      isUserSatisfied(people);
      
      break;
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}
// Menu function to call once you find who you are looking for
function mainMenu(person, people){
  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
  
  
  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }
  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
  switch(displayOption){
    case "info":
    // TODO: get person's info
    displayPerson(unzippedPerson); 
    app(people);
    break;
    case "family": 
   family(people,person.lastName); 
   app(people);
    // TODO: get person's family
    break;
    case "descendants": 
    descendants(people, person.id); 
    app(people);
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}
 let unzippedPerson;
function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);
  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
 unzippedPerson = foundPerson.shift();
  console.log(unzippedPerson);
  return unzippedPerson;
}
// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}
function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "Date Of Birth: " + person.dob + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}
// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}
// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}
// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
let searchResults;
function searchByTrait(people) {
  let numberTraits = prompt ("Do you want to search for multiple traits? yes / no "); 
  if (numberTraits === "no"){
  let traitSelection = prompt("Please enter which trait you would like to search for.(dob,height,weight,eyecolor,occupation");
  
  switch(traitSelection){
      case "dob":
        searchResults = searchDob(people); 
      break;
      case "height": 
      searchResults = searchHeight(people)
      break;
      case "weight":
        searchResults = searchWeight(people);
      break;
      case "eyecolor":
        searchResults = searchEyeColor(people);
      break;
      case "occupation":
        searchResults = searchOccupation(people);
      break;
      default:
      return traitSelection();
  } 
 return searchResults; 
}
else if(numberTraits === "yes") {
  searchByMultipleTraits(people); 
  } 
  else {
    alert("Invalid Input, Please try again.")
    searchByTrait(people);}
return searchResults; 
}  

//////////////////////////////////////////////////////////////////////////////////////////////////
function searchDob(people){
  let dob = prompt("What is the person's dob?");
  let foundPerson = people.filter(function(person){
    if(person.dob === dob ){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  console.log(foundPerson);
  return foundPerson 
}
//////////////////////////////////////////////////////////////////////////////////////////////////
function searchWeight (people){
  let weight = parseInt(prompt("What is the person's weight?"));
  let foundPerson = people.filter(function(person){
    if(person.weight === weight ){
      return true;
    }
    else{
      return false;
    }
  })
  console.log(foundPerson);
  return foundPerson 
}
//////////////////////////////////////////////////////////////////////////////////////////////////
  function searchEyeColor(people){
    let eyeColor = prompt("What is the person's eye color?");
    let foundPerson = people.filter(function(person){
      if(person.eyeColor === eyeColor ){
        return true;
      }
      else{
        return false;
      }
    })
    console.log(foundPerson);
    return foundPerson 
}
//////////////////////////////////////////////////////////////////////////////////////////////////
    function searchOccupation(people){
      let occupation = prompt("What is the person's occupation?");
      let foundPerson = people.filter(function(person){
        if(person.occupation === occupation ){
          return true;
        }
        else{
          return false;
        }
      })
      console.log(foundPerson);
      return foundPerson
    }  
    //////////////////////////////////////////////////////////////////////////////////////////////////
    function searchHeight(people){
      let height = parseInt(prompt("What is the person's height")); 
      let foundPerson = people.filter(function(person){
        if(person.height === height ){
          return true;
        }
        else{
          return false;
        }
      })
     console.log(foundPerson);
      return foundPerson;  
    }  
    //////////////////////////////////////////////////////////////////////////////////////////////////
    function searchByMultipleTraits(people){
      let traitSelection =[]; 
      let traitSelection2 = [];
      while (traitSelection !== "-1"){
      traitSelection = prompt("Please enter multiple traits you would like to search for: ( dob, height, weight, eyecolor, occupation or -1 to finish list of traits )");
      traitSelection2.push(traitSelection);
    } traitSelection2.pop();
      let lessPeople=[];
      for (let i = 0; i < traitSelection2.length; i++){
 
    if (traitSelection2[i] === "dob"){
      lessPeople = searchDob(people); 
      people = lessPeople;
    } else if (traitSelection2[i] === "height"){
        lessPeople = searchHeight(people); 
        people = lessPeople;
    } else if (traitSelection2[i] === "weight"){
        lessPeople = searchWeight(people); 
        people = lessPeople;
    } else if (traitSelection2[i] === "eyecolor"){
          lessPeople = searchEyeColor(people); 
          people = lessPeople;
    } else if (traitSelection2[i] === "occupation"){
            lessPeople = searchOccupation(people); 
            people = lessPeople; 
}  
else {console.log("else was activated");}
}  
searchResults = lessPeople;
 return searchResults; 
    }
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//helper function to check satisfaction of user(pass when you're looking to close out user interaction.)
    function isUserSatisfied(people){
      let isUserHappy = prompt("Did you find who you were looking for?('yes' or 'no')");
      switch(isUserHappy){
        case "yes": 
        return process.exit(1);// stop execution 
        case "no":
          app(people);
       default:
    return mainMenu(person, people); // ask again
        
      }
    }
////////////////////////////////////////////////////////////// 

function family(people, newName){ 
  let lastName = newName;
    let foundPerson = people.filter(function(person){
      if( person.lastName === lastName){
        return true;
      }
      else{
        return false;
      }
    });
    for(let i = 0; i < foundPerson.length; i++)
    {
      let testPerson = foundPerson[i];
      displayPerson(testPerson);
    }
    console.log(foundPerson);
    return foundPerson 
  } 
   
  ////////////////////////////////////////////////////////////// 

function descendants(people, id){ 

    let foundPerson = people.filter(function(person){
      if( parseInt(person.parents) === parseInt(id)){
        return true;
      }
      else{
        return false;
      }
    });
    for(let i = 0; i < foundPerson.length; i++)
    {
      let testPerson = foundPerson[i];
      displayPerson(testPerson);
    }
    console.log(foundPerson);
    return foundPerson 
  } 
   
  //////////////////////////////////////////////////////////////////// 
   
  function displayMultiple(){ 
if (searchResults.length > 0 ){
    for(let i = 0; i < searchResults.length; i++)
    {
      let testPerson = searchResults[i];
       displayPerson(testPerson);
    }
  } 
 else { displayPerson(searchResults); } 
}
