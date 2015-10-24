
/* JavaScript content from js/jgply.js in folder common */
/*
* Licensed Materials - Property of IBM
* 5725-G92 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

function wlCommonInit(){
	require([ "dojo/core-web-layer", "dojo/mobile-ui-layer",
			"dojo/mobile-compat-layer" ], dojoInit);


}

function insert()
{
	var nam = document.getElementById("name").value;
	var email = document.getElementById("mail").value;
	var adrs = document.getElementById("det").value;
 var invocation ={
		 adapter:'dealer_form',
		 procedure:'procedure1',
		 parameters:[nam,email,adrs]
 };
 
  var options = 
	  {
		  onSuccess:success,
		  onFailure:fail
	  };
  WL.Client.invokeProcedure(invocation, options);
  
  return false;

}
	function success()
	{
		alert("successful");
	
	}
	function fail()
	{
		alert("Try again");
		
	}




















function dojoInit() {
	require([ "dojo", "dojo/parser", "dojox/mobile", "dojox/mobile/compat", "dojox/mobile/deviceTheme", "dojox/mobile/ScrollableView", "dojox/mobile/View", "dojox/mobile/Heading", "dojox/mobile/IconItem", "dojox/mobile/ListItem", "dojox/mobile/RoundRectList", "dojox/mobile/Audio", "dojox/mobile/Accordion", "dojox/mobile/ContentPane" ],
			function(dojo) {
				dojo.ready(function() {
				});
			});
}

/* JavaScript content from js/jgply.js in folder windowsphone8 */
/*
 *  Licensed Materials - Property of IBM
 *  5725-G92 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}