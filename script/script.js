document.getElementById("concat_string").onclick = function () {
    let message = "Hello";
    let userName = "zohaib";
    let banger = "!";
    document.getElementById("outputstatement").innerHTML = "let message= 'hello'<br> let username = 'zohaib' <br> let banger = '!'"
    document.getElementById("outputbox").innerHTML = message + " " + userName + banger
}
document.getElementById("user_name").onclick = function () {
    let first_name = prompt("Enter your first name");
    let lastName = prompt("Enter your last name");
    let fullName = first_name + " " + lastName;
    document.getElementById("outputstatement").innerHTML = "let first_name = prompt ('Enter your first name'); <br> let lastName = prompt('Enter your last name'); <br> let fullName = first_name + ' ' + lastName;"
    document.getElementById("outputbox").innerHTML = fullName
}
document.getElementById("compare").onclick = function () {
    let num1 = +prompt("Enter first number")
    let num2 = +prompt("Enter second number")
    if (num1 === num2) {
        document.getElementById("outputstatement").innerHTML = "num1 == num2"
        document.getElementById("outputbox").innerHTML = "Condition satisfy. Numbers are equal!"
    }
    else {
        document.getElementById("outputstatement").innerHTML = "num1 != num2"
        document.getElementById("outputbox").innerHTML = "considtion not satisfy. Numbers are not equal!"
    }

}
document.getElementById("ifelseif").onclick = function () {
    let marks = +prompt("please enter your marks")
    if (marks >= 90 && marks <= 100) {
        document.getElementById("outputstatement").innerHTML = "marks >= 90"
        document.getElementById("outputbox").innerHTML = "You got A+ grade."
    }
    else if (marks >= 80 && marks < 90) {
        document.getElementById("outputstatement").innerHTML = "marks>= 80 && marks <90"
        document.getElementById("outputbox").innerHTML = "You got A grade."
    }
    else if (marks >= 70 && marks < 80) {
        document.getElementById("outputstatement").innerHTML = "marks>= 70 && marks <80"
        document.getElementById("outputbox").innerHTML = "You got B grade."
    }
    else if (marks >= 60 && marks < 70) {
        document.getElementById("outputstatement").innerHTML = "marks>= 60 && marks <70"
        document.getElementById("outputbox").innerHTML = "You got C grade."
    }
    else if (marks >= 50 && marks < 60) {
        document.getElementById("outputstatement").innerHTML = "marks>= 50 && marks <60"
        document.getElementById("outputbox").innerHTML = "You got D grade."
    }
    else if (marks < 50) {
        document.getElementById("outputstatement").innerHTML = "marks < 50 "
        document.getElementById("outputbox").innerHTML = "You got F grade."
    }
    else {
        document.getElementById("outputstatement").innerHTML = "ERROR! Marks chould be less than 100. "
        document.getElementById("outputbox").innerHTML = "INVALID MARKS!"
    }
}
document.getElementById("sets_of_conditions").onclick = function () {
    let age = +prompt('Enter Your Age :');
    let weight = +prompt('Enter Your Weight :');
    if (age > 0 && age < 18) {
        document.getElementById("outputstatement").innerHTML = "age > 0 && age < 18"
        document.getElementById("outputbox").innerHTML = "You are a child!"
    }
    else if (age >= 18 && weight >= 40 && weight <= 80) {
        document.getElementById("outputstatement").innerHTML = "age >= 18 && weight >= 40 && weight <= 80"
        document.getElementById("outputbox").innerHTML = "You are healthy!"
    }
    else if (age >= 18 && weight > 80) {
        document.getElementById("outputstatement").innerHTML = "age >= 18 && weight > 80"
        document.getElementById("outputbox").innerHTML = "You are over weight!"
    }
    else if (age >= 18 && weight < 40) {
        document.getElementById("outputstatement").innerHTML = "age >= 18 && weight < 40"
        document.getElementById("outputbox").innerHTML = "You are under weight!"
    }
    else {
        document.getElementById("outputstatement").innerHTML = ""
        document.getElementById("outputbox").innerHTML = "You are not yet born!"
    }
}
document.getElementById("if_nested").onclick = function () {
    let userName = prompt("please enter user name")
    if (userName == "zohaib") {
        let password = prompt("please enter password")
        if (password == 210) {
            document.getElementById("outputstatement").innerHTML = "userName == 'zohaib' password == '210'"
            document.getElementById("outputbox").innerHTML = "Successfully Logged in!"
        }
        else {
            document.getElementById("outputstatement").innerHTML = "<span>try </span><span style='color: red;'>210</span>"
            document.getElementById("outputbox").innerHTML = " Invalid Password!"
        }
    }
    else {
        document.getElementById("outputstatement").innerHTML = "<span>try </span><span style='color: red;'>zohaib</span>"
        document.getElementById("outputbox").innerHTML = "Invalid username"
    }
}
document.getElementById("login").onclick = function () {

    let userName = prompt('Enter Username :');
    let password = prompt('Enter Password :');
    let myUserName = "zohaib";
    let myPassword = "210";
    if (userName == myUserName && password == myPassword) {
        document.getElementById("outputstatement").innerHTML = "userName == myUserName && password == myPassword"
        document.getElementById("outputbox").innerHTML = "You are successfully Logged in!"
    }
    else { 
    document.getElementById("outputstatement").innerHTML = "<span>try username </span><span style='color: red;'>zohaib</span> <br><span>and </span> <span style='color: red;'>210</span><span> password!</span>"
    document.getElementById("outputbox").innerHTML = "Invalid Username OR Password"
    }
}

document.getElementById("clearstatement").onclick = function () {
    document.getElementById("outputstatement").innerHTML = ""
}
document.getElementById("clearoutput").onclick = function () {
    document.getElementById("outputbox").innerHTML = ""
}