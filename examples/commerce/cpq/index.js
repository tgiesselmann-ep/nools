var nools = require("../../../lib");
var flow = nools.compile(require.resolve("./telco-cpq-partial.nools"));
var session = flow.getSession();

var Item = flow.getDefined("Item");
var Select = flow.getDefined("Select");
var Deselect = flow.getDefined("Deselect");
var SelectionState = flow.getDefined("SelectionState");
var SelectionConstraint = flow.getDefined("SelectionConstraint");
var InvalidSelectionError = flow.getDefined("InvalidSelectionError");

// parent, code, type, meta, selected, enabled
var line = new Item(null, "LINE", "Line", "lines", {}, true, true);
// var line2 = new Item(null, "LINE", "Line", {}, true, true);
// var line3 = new Item(null, "LINE", "Line", {}, true, true);
// var line4 = new Item(null, "LINE", "Line", {}, true, true);
// var line5 = new Item(null, "LINE", "Line", {}, true, true);

var iphone = new Item(line, "IPHONE", "Phone", "phones",
        {
            brand: "Apple",
            model: "iPhone",
            supportedNetworks: [ "LTE", "3G", "5G" ]
        }, false, true);

var galaxy = new Item(line, "GALAXY", "Phone", "phones",
        {
            brand: "Samsung",
            model: "Galaxy 10",
            supportedNetworks: [ "LTE", "5G" ]
        }, false, true);

var nokia = new Item(line, "NOKIA3310", "Phone", "phones",
        {
            brand: "Nokia",
            model: "3310",
            supportedNetworks: [ "3G" ]
        }, false, true);

var byod = new Item(line, "BYOD", "BYOD", "phones", {}, false, true);
//var byod2 = new Item(line, "BYOD", "BYOD", "phones", {}, false, true);

var newbie = new Item(line, "NOOB", "Rate plan", "rateplans", { family: "Legacy" }, false, true);
var basic = new Item(line, "BASIC", "Rate plan", "rateplans", { family: "US B2C" }, false, true);
var talker = new Item(line, "TALKER", "Rate plan", "rateplans", { family: "US B2C" }, false, true);
var family = new Item(line, "FAMILY", "Rate plan", "rateplans", { family: "US B2C" }, false, true);
var startup = new Item(line, "STARTUP", "Rate plan", "rateplans", { family: "Enterprise" }, false, true);
var smallbiz = new Item(line, "SMALLBIZ", "Rate plan", "rateplans", { family: "Enterprise" }, false, true);
var exec = new Item(line, "EXEC", "Rate plan", "rateplans", { family: "Enterprise" }, false, true);

var data2gb = new Item(line, "DATA2GB", "Data plan", "dataplans", {}, false, true);
var data5gb = new Item(line, "DATA5GB", "Data plan", "dataplans", {}, false, true);
var data10gb = new Item(line, "DATA10GB", "Data plan", "dataplans", {}, false, true);
var data20gb = new Item(line, "DATA20GB", "Data plan", "dataplans", {}, false, true);
var data50gb = new Item(line, "DATA50GB", "Data plan", "dataplans", {}, false, true);
var data100gb = new Item(line, "DATA100GB", "Data plan", "dataplans", {}, false, true);

var usroam = new Item(line, "USROAM", "VAS", "vas-roaming-us", {}, false, true);
var usroamplus = new Item(line, "USROAMPLUS", "VAS", "vas-roaming-us", {}, false, true);
var intlroam = new Item(line, "INTLROAM", "VAS", "vas-roaming", {}, false, true);
var globalroam = new Item(line, "GLOBALROAM", "VAS", "vas-roaming", {}, false, true);

var netflix = new Item(line, "NETFLIX", "VAS", "vas-media", { serviceType: "MEDIA" }, false, false);
var hulu = new Item(line, "HULU", "VAS", "vas-media", { serviceType: "MEDIA" }, false, false);
var spotify = new Item(line, "SPOTIFY", "VAS", "vas-media", { serviceType: "MEDIA" }, false, false);
var entertainment2go = new Item(line, "ENTERTAINMENT2GO", "VAS", "vas-media-e2go", {}, false, false);

var callerid = new Item(line, "CALLERID", "VAS", "vas-callerid", {}, false, true);



// session.assert(line2);
// session.assert(line3);
// session.assert(line4);
//session.assert(line5);

// TODO -- have a "default" group which acts like "select up to 1"? Like new SelectionConstraint("default", 0, 1)
session.assert(new SelectionConstraint("phones", 1, 1));
session.assert(new SelectionConstraint("rateplans", 1, 1));
session.assert(new SelectionConstraint("dataplans", 0, 1));
session.assert(new SelectionConstraint("vas-roaming-us", 0, 1));
session.assert(new SelectionConstraint("vas-media", 1, 2)); // TODO: for testing only, should be (0, 999)


//runDataplanRatePlansCompatibility();
//runDataplanPhoneCompatibility();
//runRoaming();
//runMedia();
//runVasRatePlansCompatibility();
//runVasPhoneCompatibility();
//runLineRateplans();
runDataplanToRateplanCompatibility();

async function runDataplanToRateplanCompatibility() {
    session.assert(line);

    session.assert(iphone);
    session.assert(galaxy);
    session.assert(nokia);
    session.assert(byod);
    
    session.assert(newbie);
    session.assert(basic);
    session.assert(talker);
    session.assert(family);
    session.assert(startup);
    session.assert(smallbiz);
    session.assert(exec);

    session.assert(data2gb);
    session.assert(data5gb);
    session.assert(data10gb);
    session.assert(data20gb);
    session.assert(data50gb);
    session.assert(data100gb);

    session.assert(usroam);
    session.assert(usroamplus);
    session.assert(intlroam);
    session.assert(globalroam);

    session.assert(netflix);
    session.assert(hulu);
    session.assert(spotify);
    session.assert(entertainment2go);

    session.assert(callerid);

    //logStuff();
    await execute();

    session.assert(new Select(galaxy));
    await execute();
    
    session.assert(new Select(iphone));
    await execute();
    
    session.assert(new Select(basic));
    await execute();
    
    session.assert(new Select(data5gb));
    await execute();

    session.assert(new Select(data10gb));
    await execute();

    session.assert(new Select(netflix));
    await execute();

    session.assert(new Select(hulu));
    await execute();

    // session.assert(new Select(newbie));
    // session.assert(new Select(basic));
    // await execute();
    // session.assert(new Select(startup));
    
    // session.assert(new Select(data5gb));
    // await session.match();
    // session.assert(new Select(data2gb));
    // session.assert(new Select(data50gb));

    //logStuff();
    
    // console.log("New state:")
    // var items = session.getFacts(Item);
    // console.log(items);
}

async function execute() {
    await session.match();

    console.log("SelectionStates:");
    var ss = session.getFacts(SelectionState);
    console.log(ss);

    console.log("InvalidSelectionErrors:");
    var allIse = session.getFacts(InvalidSelectionError);
    console.log(allIse);
    
    // console.log("Clearing errors ...");
    allIse.forEach(ise => {
        session.retract(ise);
    });
    console.log("---------------------------------------------------------------------------------");
}

async function runVasRatePlansCompatibility() {
    session.assert(usroam);
    session.assert(usroamplus);
    session.assert(intlroam);
    session.assert(globalroam);
    session.assert(netflix);
    session.assert(hulu);
    session.assert(spotify);
    session.assert(entertainment2go);
    session.assert(callerid);

    session.assert(newbie);
    session.assert(basic);
    session.assert(talker);
    session.assert(family);
    session.assert(startup);
    session.assert(smallbiz);
    session.assert(exec);

    await session.match();
    logStuff();
}

async function runLineRateplans() {
    session.assert(galaxy);
    //session.assert(nokia);
    session.assert(basic);
    // session.assert(exec);
    //session.assert(data20gb);
    session.assert(data20gb);
    session.assert(netflix);
    session.assert(hulu);
    session.assert(spotify);
    //session.assert(new Select(data20gb));

    await session.match();
    logStuff();
}

async function runLineDataplans() {
    session.assert(iphone);
    session.assert(basic);

    await session.match();
    logStuff();
}

async function runVasPhoneCompatibility() {
    session.assert(netflix);
    session.assert(hulu);

    session.assert(iphone);
    session.assert(galaxy);
    session.assert(nokia);

    await session.match();
    logStuff();
}

async function runDataplanRatePlansCompatibility() {
    session.assert(data2gb);
    session.assert(data5gb);
    session.assert(data10gb);
    session.assert(data20gb);
    session.assert(data100gb);

    session.assert(newbie);
    session.assert(basic);
    session.assert(talker);
    session.assert(family);
    session.assert(startup);
    session.assert(smallbiz);
    session.assert(exec);

    await session.match();
    logStuff();
}

async function runDataplanPhoneCompatibility() {
    session.assert(data2gb);
    session.assert(data5gb);
    session.assert(data10gb);
    session.assert(data20gb);
    session.assert(data100gb);

    session.assert(iphone);

    await session.match();
    logStuff();
}

async function runRoaming() {
    session.assert(usroam);
    session.assert(usroamplus);
    session.assert(intlroam);
    session.assert(globalroam);

    session.assert(new Select(usroam));
    await session.match();
    logStuff();

    session.assert(new Select(intlroam));
    await session.match();
    logStuff();
}

async function runMedia() {
    session.assert(netflix);
    session.assert(hulu);
    session.assert(spotify);
    session.assert(entertainment2go);

    session.assert(new Select(netflix));
    await session.match();
    logStuff();

    session.assert(new Select(spotify));
    await session.match();
    logStuff();
    
    session.assert(new Select(hulu));
    await session.match();
    logStuff();

    session.assert(new Deselect(spotify));
    await session.match();
    logStuff();

    session.assert(new Select(entertainment2go));
    await session.match();
    logStuff();

    session.assert(new Deselect(netflix));
    await session.match();
    logStuff();
}

function logStuff() {
    console.log("========================================================================================================")
    // var items = session.getFacts(Item);
    // console.log("New state:")
    //console.log(items);
    // console.log("----------------------")
    // console.log("Compatibility:");
    // var compatibility = session.getFacts(Compatibility);
    // console.log(compatibility);
    // console.log("Strings:");
    // var strings = session.getFacts(String);
    // console.log(strings);
    // console.log("SelectionConstraints:");
    // var sc = session.getFacts(SelectionConstraint);
    // console.log(sc);
    console.log("InvalidSelectionErrors:");
    var allIse = session.getFacts(InvalidSelectionError);
    console.log(allIse);
    console.log("========================================================================================================")
}