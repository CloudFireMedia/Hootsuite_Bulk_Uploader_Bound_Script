var SCRIPT_NAME = 'Hootsuite Bulk Uploader Bound Script'
var SCRIPT_VERSION = 'v2.0'

var CONFIG = {
  files: {
    announcements: {
//      master: '1vt_yq2YiswCeZ_yt7oJVAgfBs8x86sYktBiC2COErcE', // Live
      master: '1HhHC4ux6SKnQSH5br-CkeioBrgp0xZ0-rTK10Wt1HtI', // Test Copy 1  
//      master: '1AEQZTbJPC3dqVWaR06uZYHE8vvzBWbhHLp5wnlwVfSg', // Test Copy 2
    }
  },
  basedate: "January 21, 2018",
  properties: PropertiesService.getScriptProperties()
}

function onOpen(e){
  SpreadsheetApp
    .getUi()
      .createMenu("[ Hootsuite ]")
        .addItem("Add Recurring Events", "importRecurringEvents")
        .addItem("Delete All Rows",      "deleteRows")
        .addItem("Download",             "saveAsCSV")
        .addToUi();
}

function importRecurringEvents() {Hootsuite.importRecurringEvents(CONFIG)}
function deleteRows()            {Hootsuite.deleteRows()}
function saveAsCSV()             {Hootsuite.saveAsCSV()}