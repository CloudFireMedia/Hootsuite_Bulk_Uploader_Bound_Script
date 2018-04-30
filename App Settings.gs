


var documentConfig = { 
  //no config settings yet
};




///// NO CHANGES BEYOND THIS POINT /////
///// NO CHANGES BEYOND THIS POINT /////
///// NO CHANGES BEYOND THIS POINT /////





//push config options to library
CCN.updateConfig({hootsuite:documentConfig});

//local functions passed to library functions
function runMeToGrantPermissions(){CCN.log(CCN.config)}
function onOpen(){ CCN.onOpen('hootsuite') }



function dumpConfig(){CCN.dumpConfig()}
