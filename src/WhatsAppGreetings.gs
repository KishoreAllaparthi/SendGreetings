/**
 * Maintainer:    Kishore Kumar Allaparthi
 * Created:       20.05.2020
 * Email:         planon.iot@gmail.com
 * Credits:       https://www.whatsmate.net/whatsapp-group-message-api.html
 * Description:   To work with this you need to register for Whatsmate API for WhatsApp which is chargable. For more details refer the website above.
 **/

function sendWhatsapp(sheet,number,name, message) {
  var instanceId = "YOUR_INSTANCE_ID_HERE";  // TODO: Replace it with your gateway instance ID here
  var clientId = "YOUR_CLIENT_ID_HERE";  // TODO: Replace it with your Forever Green client ID here
  var clientSecret = "YOUR_CLIENT_SECRET_HERE";   // TODO: Replace it with your Forever Green client secret here
  var destNumber = number;  // TODO: Specify the recipient's number here. NOT THE GATEWAY NUMBER!
  var templateText = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Email_Template").getRange(1, 1).getValue();
  var message =  templateText.replace("{name}",name);
   
  
  var jsonPayload = JSON.stringify({
    number: destNumber,
    message: message
  });
  
  var options = {
    "method" : "post",
    "contentType": "application/json",
    "headers": {
      "X-WM-CLIENT-ID": clientId,
      "X-WM-CLIENT-SECRET": clientSecret
    },
    "payload" : jsonPayload,
    "Content-Length": jsonPayload.length
  };
    
  UrlFetchApp.fetch("http://api.whatsmate.net/v3/whatsapp/single/text/message/" + instanceId, options);
  Logger.log("Message Sent");
}
