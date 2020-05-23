/**
 * Maintainer:    Kishore Kumar Allaparthi
 * Created:       20.05.2020
 * Email:         planon.iot@gmail.com
 * Credits:       https://www.crazycodersclub.com/
 **/

//To Send Email Greeting from email.html file use this method in SendGreetings.gs file.
function sendHTMLMail(sheet,name,toMail){
   var emailTemp = HtmlService.createTemplateFromFile("email");
   emailTemp.Customer_Name = name;
   var htmlMessage = emailTemp.evaluate().getContent();
   GmailApp.sendEmail(toMail,"Happy Birthday","HappyBirthday",{htmlBody: htmlMessage});
}
