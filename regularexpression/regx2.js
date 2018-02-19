class Metacharacters{
    static reTest(re,str){
        if(re.test(str)){
            console.log(`${str} matched ${re.source}`)
        }
        else{
            console.log(`${str} does not match ${re.source}`)
        }
    }
}

//let re=/^s/i;//means expression strarts with s
//let re=/ nitro$/i;//exp ends with nitro
//let re=/n.tro$/i;// there could be any single character between n and tro and it will match
//let re=/n*tro$/i;// there could be any multiple character between n and tro and it will match
//let re=/sap?en?t/i;//charcter before ? is optional

//character Sets
//let re=/sa[pi]en?t/i;   //match with either p or i ,not both
//let re=/[^sa]pien?t/i;      //doesn't match with  sa
//let re=/[A-Z]pien?t/i; 
//let re=/[a-z]{2,8}pien?t/; //start with any 2 to 8 words follwed by "pie" then "n" is optional then t
//let re=/^[A-Za-z]{3,6}t/i;  //start with any 3 to 6 words then followed by t 
//let re=/Sap{2,4}t/i       //p can occur between 2 to 4 times
//let re=/^([0-9]x){2,3}$      //first letter can be a digit followed by x,this can repeat for 2 to 3 times
//let re =/x(?=y)/        //match if x is followed bt y

//Assertions
//let re =/x(?!y)/            //match if x is not followed by y

//Shorthand character Classes
//let re=/\w/     //matches alphabetic,numericals,underscore
//let re =/\w+/     //one or more alphabetic,numericals,underscore
//let re = /\w*/     //atleast zero or more alphabetic,numericals,underscore and blank space
//let re=/\W/     //atleast one non word
//let re=/\d/       //atleast one digit
//let re =/\D/        //atleast one non digit
//let re =/\s/            //atleast one white space
//let re =/\S/            //atleast one non white space
//let re=/\b\Sap\b/i            //searches for exact word,after and before "Sap" there should be white space
//let re=/^\wSap\b\s*ient$/i      //start with any alphanumeric or undescore follewed by "Sap" after 1 or more white spaces then end with "ient"
let email=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z_\-]+).([a-zA-Z]{2,5})$/
let phone = /^(\W?\d{2,3}[-. ])?(\d{3,4}[-. ])?\d{7,8}$/
let url = /^https?:([/]{2})(www.)?\w+[.]([a-zA-Z]{2,10})$/
Metacharacters.reTest(url,'http://www.w3schools.com');
