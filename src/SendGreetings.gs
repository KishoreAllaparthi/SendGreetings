/**
 * Maintainer:    Kishore Kumar Allaparthi
 * Created:       20.05.2020
 * Email:         planon.iot@gmail.com
 **/

function sendBdayWishes(){
	var ss = SpreadsheetApp.getActiveSpreadsheet();
	var sheet = ss.getSheetByName("Form Responses 1").activate();
	var cDate = new Date(); //Present Day, 
    var messageBody = '';
    
    for(var i =2 ;i<=sheet.getLastRow(); i++){
  
		var bDate = sheet.getRange(i,3).getValue(); // Date from SpreadSheet 
  
		if(cDate.getDate()==bDate.getDate()){
			if(cDate.getMonth()==bDate.getMonth()){
				var name = sheet.getRange(i,2).getValue(); // Name from SpreadSheet
				var toMail= sheet.getRange(i,5).getValue(); //Email from SpradSheet
				try {
                      sendHTMLMail(sheet,name,toMail);
                    } catch (e) {
                // Logs an ERROR message.
                Logger.log('sendHTMLMail() yielded an error: ' + e);
		sheet.getRange(i,6).setValue("ERRROR wishes not sent"); 
                    }
                sheet.getRange(i,6).setValue("Bday wishes sent"); 
                /*Commented as this requires TWILIO and WhatsMate Subscription and costs $$$
		try {
                      sendSms(sheet, number, name, messageBody);
                    } catch (e) {
                    // Logs an ERROR message.
                      Logger.log('sendSms() yielded an error: ' + e);
		      sheet.getRange(i,6).setValue("ERRROR wishes not sent"); 
                    }
                sheet.getRange(i,7).setValue("SMS wishes sent");
                try {
                      sendWhatsapp(sheet, number, name, messageBody);
                    } catch (e) {
                    // Logs an ERROR message.
                      Logger.log('sendWhatsapp() yielded an error: ' + e);
		      sheet.getRange(i,6).setValue("ERRROR wishes not sent"); 
                    }
                sheet.getRange(i,8).setValue("WhatsApp wishes sent"); 
		*/
            }
        }
     }
}
