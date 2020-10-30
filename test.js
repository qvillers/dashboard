var myList2 = ["1200","1201"];

var myList = [
	{ "value": 1, "text": "Google Cloud Platform" },
	{ "value": 2, "text": "Amazon AWS" },
	{ "value": 3, "text": "Docker" },
	{ "value": 4, "text": "Digital Ocean" }
]

var langList = [
{
	"code": "EN", 
	"Name": "English"
	
}, 
{
	"code": "FR", 
	"Name": "French"
},
{
	"code": "ES", 
	"Name": "Spanish"
},
{
	"code": "", 
	"Name": "Default"
},
{
	"code": "ZH", 
	"Name": "Chinese"
},
{
	"code": "JA", 
	"Name": "Japanese"
},
{
	"code": "IT", 
	"Name": "Italian"
},
{
	"code": "DE", 
	"Name": "German"
}


];

var systemList = 
[
  {
    "Id": "VR1",
    "Name": "Preprod - VR1",
    "Link": "https://launchpad-pp.richemont.com/",
    "LinkOffline": "http://launchpad-pp-offline.richemont.com/sap/bc/ui5_ui5/sap/zlpdbtq_off/index.html",
    "WebGUI": "https://vr1webdisp.richemont.com/sap/bc/se/m/310_rel/mainapp/ClientBin/index.html?sap-client=100&sap-theme=sap_belize&sap-language=EN&",
    "Rank": 4,
    "ChangeBTQURL": "https://vr1webdisp.richemont.com/sap/bc/se/m/310_rel/mainapp/ClientBin/index.html?sap-client=100&sap-theme=sap_belize&sap-language=EN&~transaction=ZWEB_UI5_USER_MAINT&sap-personas-flavor=72571E487B021EEB84DB9EC1290F8308",
    "Script_AddStock": "https://vr1webdisp.richemont.com/sap/bc/se/m/310_rel/mainapp/ClientBin/index.html?sap-client=100&sap-theme=sap_belize&sap-language=EN&~transaction=MB1C&sap-personas-flavor=7257163788021EDB84F0DC320E8A207F"
  },
  {
    "Id": "QR2",
    "Name": "Quality - QR2",
    "Link": "https://launchpad-qp.richemont.com/",
    "LinkOffline": "http://launchpad-qp.richemont.com/sap/bc/ui5_ui5/sap/zlpdbtq_off/index.html",
    "WebGUI": "https://qr2webdisp.richemont.com/sap/bc/se/m/310_rel/mainapp/ClientBin/index.html?sap-client=100&sap-theme=sap_belize&sap-language=EN&",
    "Rank": 2,
    "ChangeBTQURL": "https://qr2webdisp.richemont.com/sap/bc/se/m/310_rel/mainapp/ClientBin/index.html?sap-client=100&sap-theme=sap_belize&sap-language=EN&~transaction=ZWEB_UI5_USER_MAINT&sap-personas-flavor=7257187FEF021EDB84DD6C6E3FE4C287",
    "Script_AddStock": "https://qr2webdisp.richemont.com/sap/bc/se/m/310_rel/mainapp/ClientBin/index.html?sap-client=100&sap-theme=sap_belize&sap-language=EN&~transaction=MB1C&sap-personas-flavor=7257130905021EDB84F1725D321A0842"
  },
  {
    "Id": "DR3",
    "Name": "Dev - DR3",
    "Link": "https://launchpad-dp.richemont.com/",
    "LinkOffline": "http://launchpad-dp.richemont.com/sap/bc/ui5_ui5/sap/zlpdbtq_off/index.html",
    "WebGUI": "https://dr3webdisp.richemont.com/sap/bc/se/m/310_rel/mainapp/ClientBin/index.html?sap-client=200&",
    "Rank": 1,
    "ChangeBTQURL": "https://dr3webdisp.richemont.com/sap/bc/se/m/310_rel/mainapp/ClientBin/index.html?sap-client=200&sap-theme=sap_belize&sap-language=EN&~transaction=ZWEB_UI5_USER_MAINT&sap-personas-flavor=A615919EB6021EDB84F19466E668DA62",
    "Script_AddStock": "https://dr3webdisp.richemont.com/sap/bc/se/m/310_rel/mainapp/ClientBin/index.html?sap-client=200&sap-theme=sap_belize&sap-language=EN&~transaction=MB1C&sap-personas-flavor=A615919EB6021EDB84F1895321A3DA5E"
  },
  {
    "Id": "QR1",
    "Name": "Quality - QR1",
    "Link": "https://launchpad-qm.richemont.com/",
    "LinkOffline": "http://launchpad-qm.richemont.com/sap/bc/ui5_ui5/sap/zlpdbtq_off/index.html",
    "WebGUI": "https://qr1webdisp.richemont.com/sap/bc/se/m/310_rel/mainapp/ClientBin/index.html?sap-client=100&sap-theme=sap_belize&sap-language=EN&",
    "Rank": 3,
    "ChangeBTQURL": "https://qr1webdisp.richemont.com/sap/bc/se/m/310_rel/mainapp/ClientBin/index.html?sap-client=100&sap-theme=sap_belize&sap-language=EN&~transaction=ZWEB_UI5_USER_MAINT&sap-personas-flavor=7257197B9B021EEB84DD6D6827E0C4E1",
    "Script_AddStock": "https://qr1webdisp.richemont.com/sap/bc/se/m/310_rel/mainapp/ClientBin/index.html?sap-client=100&sap-theme=sap_belize&sap-language=EN&~transaction=MB1C&sap-personas-flavor=7257118FF2021EEB84F17AF8E99C464D"
  },
  {
    "Id": "PR1",
    "Name": "Prod - PR1",
    "Link": "https://launchpad.richemont.com",
    "LinkOffline": "https://launchpad-offline.richemont.com/sap/bc/ui5_ui5/sap/zlpdbtq_off/index.html#",
    "WebGUI": "https://pr1webdisp.richemont.com/sap/bc/se/m/310_rel/mainapp/ClientBin/index.html?sap-client=100&sap-theme=sap_belize&sap-language=EN&",
    "Rank": 99,
    "ChangeBTQURL": "",
    "Script_AddStock": ""
  }
];

// Builds the HTML Table out of myList.
function buildHtmlTable(selector) {
  var columns = addAllColumnHeaders(myList, selector);

  for (var i = 0; i < myList.length; i++) {
    var row$ = $('<tr/>');
    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
      var cellValue = myList[i][columns[colIndex]];
      if (cellValue == null) cellValue = "";
      row$.append($('<td/>').html(cellValue));
    }
    $(selector).append(row$);
  }
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.
function addAllColumnHeaders(myList, selector) {
  var columnSet = [];
  var headerTr$ = $('<tr/>');

  for (var i = 0; i < myList.length; i++) {
    var rowHash = myList[i];
    for (var key in rowHash) {
      if ($.inArray(key, columnSet) == -1) {
        columnSet.push(key);
        headerTr$.append($('<th/>').html(key));
      }
    }
  }
  $(selector).append(headerTr$);

  return columnSet;
}

function buildRadioButton(list,name,selector){
	for (var i = 0; i < list.length; i++) {
		$(selector).append( $('<option/>').attr("id",i).text(list[i].Name) ); 
	}
}

function build(){
	buildHtmlTable('#excelDataTable');
	buildRadioButton(systemList,"system","#system");
	buildRadioButton(langList,"lang","#lang");
	
	$('.basicAutoSelect').autoComplete();
				$('.basicAutoSelect').on('autocomplete.select', function (evt, item) {
					console.log('select', item);
					$('.basicAutoSelectSelected').html(item?JSON.stringify(item):'null');

				});
				

	$(".ui5").on("click",function(){
		var url = "";
		
		if($(this).hasClass("online")){
			url = systemList[ $( "select#system option:selected" ).attr("id")].Link;
		}		
		if($(this).hasClass("webgui")){
			url = systemList[ $( "select#system option:selected" ).attr("id")].WebGUI;
		}		
		if($(this).hasClass("offline")){
			url = systemList[ $( "select#system option:selected" ).attr("id")].LinkOffline;
		}
		if($(this).hasClass("changebtq")){
			url = systemList[ $( "select#system option:selected" ).attr("id")].ChangeBTQURL;
		}
		
		url =  url + $(this).attr("link");
		
		if($(this).hasClass("user")){
			url = url.replace("{USER}",$("#user").val());
		}
		
		if($(this).hasClass("lang")){
			url = url.replace("{LANG}",langList[ $( "select#lang option:selected" ).attr("id")].code );
		}
		
		if($(this).hasClass("repair")){
			url = url.replace("{REPAIR}", $("#repair").val() );
		}

		if($(this).hasClass("boutique")){
			url = url.replace("{BOUTIQUE}",$("#boutique").val());
		}		
		
		//console.log(systemList[ $( "select#system option:selected" ).attr("id")]).Link;
		//console.log(systemList[ $( "select#system option:selected" ).attr("id")]).Link;
		
		
		window.open(url,"_blank");
	});
}

