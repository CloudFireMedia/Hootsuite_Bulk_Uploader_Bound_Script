////Redevelopment note: must download dates in mm/dd/yyyy hh:mm:ss format
//
////var ui = SpreadsheetApp.getUi();
//function saveAsCSV() {
//  var ss = SpreadsheetApp.getActiveSpreadsheet();
//  var sheets = ss.getSheets();
//  // create a folder from the name of the spreadsheet
//  //var folder = DriveApp.createFolder(ss.getName().toLowerCase().replace(/ /g,'_') + '_csv_' + new Date().getTime());
//  
// var folder = DriveApp.getFoldersByName("My Drive");
//  for (var i = 0 ; i < sheets.length ; i++) {
//    var sheet = sheets[i];
//    // append ".csv" extension to the sheet name
//    fileName = "Upload to Hootsuite" + ".csv";
//    // convert all available sheet data to csv format
//    var csvFile = convertRangeToCsvFile_(fileName, sheet);
//    //return;
//    // create a file in the Docs List with the given name and the csv data
//    DriveApp.createFile(fileName,csvFile);
//  }
//  Browser.msgBox("File has been downloaded to Google Drive as '" + fileName + "'");
//}
//
//var csvContent = "data:text/csv;charset=utf-8,";
//
//function convertRangeToCsvFile_(csvFileName, sheet) {
//
//	try {
//		var data = sheet.getDataRange().getValues();
//		var csvFile = undefined;
//
//		var curDate = (new Date()).valueOf();
//
//		if (data.length > 1) {
//			var csv = "";
//
//			for (var row = 1; row < data.length; row++) {
//
//				var str1 = data[row][1].replace(/[\u2018\u2019]/g, "'");
//
//				if ('' + data[row][0] != '') {
//					if (typeof(data[row][0]) == 'object') {
//						if (data[row][0].valueOf() > curDate)
//							var strDate = Utilities.formatDate(data[row][0], Session.getScriptTimeZone(), "MM/dd/yyyy HH:mm:ss");
//						csv += '"' + strDate + '","' + str1 + '","' + data[row][2] + '"\r\n';
//					} else {
//
//						var dt = new Date(data[row][0]);
//						if (dt.valueOf() > curDate) {
//							var strDate = Utilities.formatDate(dt, Session.getScriptTimeZone(), "MM/dd/yyyy HH:mm:ss");
//							csv += '"' + data[row][0] + '","' + str1 + '","' + data[row][2] + '"\r\n';
//						}
//					}
//
//				}
//				csvFile = csv;
//			}
//		}
//		
//		return csvFile;
//		
//	} catch (err) {
//		Logger.log(err);
//		Browser.msgBox(err);
//	}
//}