var SCRIPT_NAME = 'Hootsuite Bulk Uploader Bound Script'
var SCRIPT_VERSION = 'v1.0.dev_ajr'

var CONFIG = {
  files: {
    announcements: {
//      master: '1vt_yq2YiswCeZ_yt7oJVAgfBs8x86sYktBiC2COErcE', // Live
      master: '1HhHC4ux6SKnQSH5br-CkeioBrgp0xZ0-rTK10Wt1HtI', // Test Copy 1     
    }
  },
  basedate: "January 21, 2018",
  properties: PropertiesService.getScriptProperties()
}

function onOpen(e){
  SpreadsheetApp
    .getUi()
      .createMenu("[ Hootsuite ]")
        .addItem("Add Recurring Events", "HootSuite.importRecurringEvents")
        .addItem("Delete All Rows",      "HootSuite.deleteRows")
        .addItem("Download",             "HootSuite.saveAsCSV")
        .addToUi();
}

function importRecurringEvents() {Hootsuite.importRecurringEvents(CONFIG)}
function deleteRows()            {Hootsuite.deleteRows()}
function saveAsCSV()             {Hootsuite.saveAsCSV()}