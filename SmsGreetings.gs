/**
 * Maintainer:    Kishore Kumar Allaparthi
 * Created:       20.05.2020
 * Email:         planon.iot@gmail.com
 * Credits:       GREG BAUGUES(https://www.twilio.com/blog/author/gbaugues)
 * Description:   To work with this you need to register with TWILIO (https://www.twilio.com/)
 **/
 

function sendSms(sheet, number, name, messageBody) {
  var accountSID = "YOUR_TWILIO_ACCOUNT_SID_HERE";
  var authToken = "YOUR_TWILIO_AUTHTOKEN_HERE";
  var twiloNumber = "YOUR_TWILIO_NUMBER_HERE";
  var templateText = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Message_Template").getRange(1, 1).getValue();
  var messageBody =  templateText.replace("{name}",name);
  var messages_url = "https://api.twilio.com/2010-04-01/Accounts/"+accountSID+"/Messages.json";
  var payload = {
    "To": number,
    "Body" : messageBody,
    "From" : twiloNumber
  };

  var options = {
    "method" : "post",
    "payload" : payload
  };

  options.headers = { 
    "Authorization" : "Basic " + Utilities.base64Encode(accountSID+":"+authToken)
  };

  UrlFetchApp.fetch(messages_url, options);
}
