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
      searchResults = searchByName(people);
      break;
    case 'no':
      // TODO: search by traits
<<<<<<< HEAD
      searchResults = searchByTrait(people);
=======
      searchByTrait();
>>>>>>> 703214a0f1d205ebf4d1772e624348aec5995ea3
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
<<<<<<< HEAD
=======


>>>>>>> 703214a0f1d205ebf4d1772e624348aec5995ea3
  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
  
  
  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }
<<<<<<< HEAD
  let displayOption = prompt("Found " + unzippedPerson.firstName + " " + unzippedPerson.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
=======

  let displayOption = prompt("Found " + person[0].firstName + " " + person[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

>>>>>>> 703214a0f1d205ebf4d1772e624348aec5995ea3
  switch(displayOption){
    case "info":
    // TODO: get person's info
    displayPerson(person);
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
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
<<<<<<< HEAD
  let personInfo = "First Name: " + unzippedPerson.firstName + "\n";
  personInfo += "Last Name: " + unzippedPerson.lastName + "\n";
  personInfo += "Gender: " + unzippedPerson.gender + "\n";
  personInfo += "Date Of Birth: " + unzippedPerson.dob + "\n";
  personInfo += "Height: " + unzippedPerson.height + "\n";
  personInfo += "Weight: " + unzippedPerson.weight + "\n";
  personInfo += "Eye Color: " + unzippedPerson.eyeColor + "\n";
  personInfo += "Occupation: " + unzippedPerson.occupation + "\n";
=======
  let personInfo = "First Name: " + person[0].firstName + "\n";
  personInfo += "Last Name: " + person[0].lastName + "\n";
  personInfo += "Gender: " + person[0].gender + "\n";
  personInfo += "Date Of Birth: " + person[0].dob + "\n";
  personInfo += "Height: " + person[0].height + "\n";
  personInfo += "Weight: " + person[0].weight + "\n";
  personInfo += "Eye Color: " + person[0].eyeColor + "\n";
  personInfo += "Occupation: " + person[0].occupation + "\n";
>>>>>>> 703214a0f1d205ebf4d1772e624348aec5995ea3
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
<<<<<<< HEAD
let searchResults;
function searchByTrait(people) {
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
    
      //let lastName = promptFor("What is the person's last name?", chars);
      let foundPerson = people.filter(function(person){
        if(person.height === height ){
          return true;
        }
        else{
          return false;
        }
      })
      // TODO: find the person using the name they entered
     console.log(foundPerson);
      return foundPerson;  
    }  
    //////////////////////////////////////////////////////////////////////////////////////////////////
=======
function searchByTrait() {
  let traitSelection = prompt("Please enter which trait you would like to search for.(dob,height,weight,eyeColor,occupation");
  switch(traitSelection){
      case "dob":
      
      break;
      case "height":
        
      break;

      case "weight":

      break;

      case "eyecolor":

      break;

      case "occupation":

      break;

      default:
      return traitSelection();


  }
}
>>>>>>> 703214a0f1d205ebf4d1772e624348aec5995ea3
