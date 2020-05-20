/**
 * Maintainer:    Kishore Kumar Allaparthi
 * Created:       20.05.2020
 * Email:         planon.iot@gmail.com
 * Credits:       https://www.crazycodersclub.com/
 **/


//To Send Email Greeting from Message_Template Sheet call this method in SendGreetings.gs file.
function sendMail(sheet,messageBody,name,toMail){
   var templateText = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Message_Template").getRange(1, 1).getValue();
   var messageBody =  templateText.replace("{name}",name);
   Logger.log(messageBody);
   //MailApp.sendEmail(toMail,'Happy Birthday '+name,''+ messageBody);
}
//To Send Email Greeting from email.html file use this method in SendGreetings.gs file.
function sendHTMLMail(sheet,name,toMail){
   var emailTemp = HtmlService.createTemplateFromFile("email");
   emailTemp.Customer_Name = name;
   var htmlMessage = emailTemp.evaluate().getContent();
   GmailApp.sendEmail(toMail,"Happy Birthday","HappyBirthday",{htmlBody: htmlMessage});
}
