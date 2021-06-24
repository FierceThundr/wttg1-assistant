
/*  The Welcome To The Game I Assistant is built to help players of WTTG2
    Copyright (C) 2021 Fierce Thunder

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.  */

//==========================================================================Static Data
{
var sitedata = {
    "Bug Friendly":       {id:100,sub:["Store","FAQ","Noid","Join"]},
    "Cleaning Services":  {id:105,sub:["Burial","Freezing"]},
    "Cry Bitch":          {id:108,sub:["Login"]},
    "Dont Waste it":      {id:110,sub:["No","Yes"]},
    "Drone Spy":          {id:113,sub:["Videos","SpyForMe"]},
    "EnCrave":            {id:116,sub:["GateOpen"]},
    "Evidence Locker":    {id:118,sub:["Leaked","Confiscated","Contribute","Purchase"]},
    "Evil Collection":    {id:123,sub:["Pics","CreepyPics","RandomPics","Memes","Link","AB","AB2","Baby","Chat"]},
    "Eye":                {id:133},
    "Father Donald":      {id:134,sub:["Join"]},
    "Foot Doctor":        {id:136,sub:["MyFavoriteFeet","HomeMade","SendMePics"]},
    "Forgive Me":         {id:140,sub:["Confess"]},
    "Fortune Cookie":     {id:142},
    "Grandmas Fantasy":   {id:143,sub:["Older"]},
    "Heirloom":           {id:145,sub:["Quality","Specials","Containers","Order","PGPKey","WalletID","Error"]},
    "Hidden Pleasures":   {id:153,sub:["RequestSale","Range1","Range2","Range3","Range4","Range5","Message","Buy","SignIn"]},
    "I Love Cats":        {id:163,sub:["MyCats","Contact"]},
    "Is Evil":            {id:166},
    "Keep Sake":          {id:167},
    "Kill For Me":        {id:168,sub:["Targets","Instructions"]},
    "Milk Supply":        {id:171,sub:["MilkPictures"]},
    "Mortal Masks":       {id:173,sub:["Order","How"]},
    "Mutilation":         {id:176,sub:["Login","Join","NoWallet"]},
    "My Gut":             {id:180,sub:["Shop","Buy","Special","Contact"]},
    "Myriad":             {id:185},
    "Oneless":            {id:186},
    "Order Of Nine":      {id:187,sub:["Join"]},
    "Panty Sales":        {id:189},
    "Pay To Rape":        {id:190,sub:["FAQ","Pay"]},
    "Red Triangle":       {id:193},
    "Scream Bitch":       {id:194},
    "Share Your Genitals":{id:195},
    "St Louis Arch":      {id:196,sub:["Arch","Aliens","WhyDie"]},
    "Thanks For Visiting":{id:200,sub:["DontTalkToMe","Slide","BabyShrimp","Posture","Bar","EvilMonster","Slide2","Creepy","Face","FakeMain","Black","Numbers"]},
    "The Black Waves":    {id:213},
    "The Bomb Maker":     {id:214},
    "The Doll Maker":     {id:215,sub:["Enter"]},
    "The End Of NY":      {id:217},
    "The Granddaddy":     {id:218,sub:["Contact","Gallery","Error"]},
    "The Grey":           {id:222,sub:["Interius","Latus","Centrum","Inanis"]},
    "The Hall":           {id:227},
    "The Light Within":   {id:228,sub:["Saved"]},
    "The Loogaroo":       {id:230},
    "THE MAGISTRI":       {id:231,sub:["Enter","Join","Walk"]},
    "The Prey":           {id:235},
    "The Rule Of Three":  {id:236},
    "Vacation":           {id:237},
    "Warehouse 33":       {id:238,sub:["Warehouse1","Warehouse2","Warehouse4"]},
    "We Rock":            {id:242},
    "IAMHERE":            {id:243,times:":00 - :14"},
    "Borrow My Daughter": {id:244,times:":00 - :29"},
    "Deep Journal":       {id:245,times:":00 - :29",sub:["Page 2","Page 3"]},
    "YOU THERE?":         {id:248,times:":00 - :29"},
    "Ave Satan":          {id:249,times:":30 - :44"},
    "Fifty Seven":        {id:250,times:":30 - :44"},
    "Number Station":     {id:251,times:":30 - :44"},
    "Your Data":          {id:252,times:":30 - :44"},
    "THANATOS":           {id:253,times:":45 - :59"},
    "Little Friends":     {id:254,times:":45 - :59",sub:["Error"]},
    "Brutal Underground": {id:256,times:":30 - :59",sub:["Sign Up"]}
  }, tips = [
    "Listen for the door",
    "The game includes a lot of dead websites that will never be open",
    "Dont forget the Breather",
    "Remember to practice your hacking skills",
    "Dont forget your friend in the window",
    "HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAH",
    "Dont look behind you",
    "Dont worry about the noises behind you, they mean nothing... probably",
	"Be quiet when hiding or he will find you",
	"Error 418 I am a teapot"
  ], guidedata = [
    {"name":`<i class="fa fa-info-circle fa-lg"></i> About`,"content":`
    <h1>About</h1>
      <p>Created by: FierceThundr_</p>
      <p>Sounds and images used are property of reflect studios<br>Welcome to The Game I is property of reflect studios</p>
      <p><i>Started July 5th 2020</i><br><i>Updated May 18th 2021</i></p>
	  <p><a href="https://github.com/FierceThundr/wttg1-assistant" target="_blank" rel="noreferrer">Github Page</a></p>
    <h3>Information Sources</h3>
      <p>
        <a href="https://welcometothegame.fandom.com/wiki/Sound_Files_(WTTG2)" target="_blank" rel="noreferrer">Sound Files</a><br>
        <a href="https://www.speedrun.com/wttg2/guide/h2pkg" target="_blank" rel="noreferrer">Website and Key information ~Insym</a><br>
		<a href="https://www.speedrun.com/wttg2/resources" target="_blank" rel="noreferrer">Original Click Point Locations ~Shadowk222</a><br>
		<a target="_blank" rel="noreferrer">Improved Click Point Locations ~Nasko222</a><br>
        <a target="_blank" rel="noreferrer">Wttg2 Tenant Data ~Lutonite</a><br>
        <a target="_blank" rel="noreferrer">Information Assistance ~Nasko222</a>
      </p>
      <p>
        <a href="https://fontawesome.com/v4.7.0/" target="_blank" rel="noreferrer">Symbols</a><br>
        <a href="https://www.svgbackgrounds.com" target="_blank" rel="noreferrer">Website Background</a><br>
        <a href="http://grsmto.github.io/simplebar/" target="_blank" rel="noreferrer">Custom Scrollbars</a>
      </p> 
    <h3>Special Thanks</h3> 
      <p>
        <a href="https://www.twitch.tv/divineshadow_18" target="_blank" rel="noreferrer"><i class="fa fa-twitch fa-lg"></i>DivineShadow_18</a><br>
        <a href="https://www.twitch.tv/chexparty" target="_blank" rel="noreferrer"><i class="fa fa-twitch fa-lg"></i>ChexParty</a><br>
        <a href="https://www.twitch.tv/insym" target="_blank" rel="noreferrer"><i class="fa fa-twitch fa-lg"></i>Insym</a><br>
        <a href="https://www.twitch.tv/nasko222n" target="_blank" rel="noreferrer"><i class="fa fa-twitch fa-lg"></i>Nasko222n</a><br>
        <a href="https://www.twitch.tv/superfreshness" target="_blank" rel="noreferrer"><i class="fa fa-twitch fa-lg"></i>Superfreshness</a>
      </p>`},
    {"name":`<i class="fa fa-circle fa-lg"></i> Tutorial`,"content":`
    <h1>Tutorial</h1>
      <p>Thank you for using my welcome to the game assistant, I will try to make this section as straight to the point so anyone reading can get on their way.</p>
    <details>
      <summary><h3>The Wiki Block</h3></summary>
      <p>The wiki block is the primary note taking tool and can be immensely helpful if you know how to use it. To begin, copy the website list from a wiki page in the game by using Ctrl+A and Ctrl+C, then paste the contents into the textarea at the top of the block. It will then scan and determine the websites on your wiki. Once your wiki sites are processed you will see their names, sub-pages, availability, and multiple markers. The markers can be used to indicate that you've searched a site so that you never forget where you need to search in the end-game for remaining keys. The buttons provided are for <i class="fa fa-search"></i> manual searches, <i class="fa fa-search-plus"></i> key cue aided searches, and whether a <i class="fa fa-key"></i> key or <i class="fa fa-link"></i> link has been found respectively. The final feature that may need explaining is the <i class="fa fa-mouse-pointer"></i> mouse button, clicking on it will show you a copy of the site you've clicked on with multiple indicators that show the game's predetermined key click points.</p> 
    </details>
    <details>
      <summary><h3>The Notes Block</h3></summary>
      <p>The notes block is quite self-explanatory. The main purpose of this is that of a basic notepad that you can use to store keys, wiki links, and anything else you deem important. However, an additional feature is that any keys pasted into the textarea will be saved and compiled into the master key as you progressively find and enter the eight hidden keys.</p>
    </details>
    <details>
      <summary><h3>The Info Block</h3></summary>
      <p>The information block is the background of this tool and provides various features. These include project credits and resources, guides for threats and important skills, customization settings, and an area in which you can find ways provide feedback on this project.</p>
    </details>
    <p><b>With that, you have everything you need to know to use this tool, get on out there and beat this game!</b></p>`},
    {"name":`<i class="fa fa-circle fa-lg"></i> The Game`,"content":`
    <h1>The Game</h1>
	  <p>Welcome to the Game II is a deep web horror game where you are tasked with finding a female reporter kidnapped for looking into a group on the deep web suspected of horrific activity. To save her you must search the games websites to find 8 keys and gather 250 DosCoin to find her location. During this task you will face up against many killers, threats, and challenges. Perhaps you will be able to power through and join the 2%.</p>`},
	{"name":`<i class="fa fa-circle fa-lg"></i> The Computer`,"content":`
    <h1>The Computer</h1>
      <p>For the majority of the game, you will be stationed at your computer completing various tasks to aid in the generation of DosCoin, searching for keys, and exploring the deep web. To aid in this task, you have many programs and features on your within the computer.</p>
      
      <details>
        <summary><h4>A.N.N.</h4></summary>
        <p>A.N.N (Anonymous Node Network) is your Deep Web browser which you will be utilizing to find keys and navigate the web. It is mostly self explainatory to operate... You have the arrows navigate forward or back a page, the home button to jump to wiki #1, the refresh button which refreshes the current site, and there is one more button on the right of the URL bar that opens the source code of the current website as well. In addition to wiki #1, two more can be found via searching pages. If you wish to know how to search the Deep Web, that is covered in a separate section.</p>
      </details>
          
      <details>
        <summary><h4>ZeroDay Market</h4></summary>
        <p>The ZeroDay Market can be used throughout the game to buy critical software and tools to aid in defending yourself or searching the Deep Web. These include applications that allow you to crack into other wifi networks, Backdoor Hacks that let you earn money from counter-hacking, and a Key Cue widget which helps you search for keys on the deep web.</p>
        <p><i>(Specific item information can be found under the Markets guide)</i></p>
      </details>
          
      <details>
        <summary><h4>Shadow Market</h4></summary>
        <p>The Shadow Market can be used throughtout the game to buy important hardware items that will be useful throughout the game. Among the items sold are Motion Sensors which can be placed in the hallway, Remote VPNs that can be used to generate DosCoin, and better Wifi Dongles to help you search the Deep Web.</p>
        <p><i>(Specific item information can be found under the Markets guide)</i></p>
      </details>
          
      <details>
        <summary><h4>Notes</h4></summary>
        <p>This section is quite self-explanatory. It is the in-game note taking program that can be used to store keys, passwords, or wiki addresses.</p>
      </details>
          
      <details>
        <summary><h4>Noir Tunnel</h4></summary>
        <p>The Noir Tunnel is your ultimate goal at the end of the game. To beat the game, you must enter the compiled master key into the tunnel and pay 250 DosCoin. At which point ███ ████ ████ ████ ███ ███ ████ ██ █████ ████ ███ █████ ██████.</p>
      </details>
        
      <details>
        <summary><h4>Skybreak</h4></summary>
        <p>Skybreak is a wifi cracking tool that can be purchased from the ZeroDay Market to hack into additional wifi networks. Additionally, libraries can be purchased to allow cracking of better networks. If you want to know how to crack networks, visit the Cracking guide.</p>
      </details>
          
      <details>
        <summary><h4>The Status Bar</h4></summary>
        <p>The Status Bar at the top of the computer screen includes many menus and buttons that can be useful throughout the game. The following is what the icons do from left to right.</p>
        <ul>
          <li>The DosCoin icon shows you your current balance of DosCoin. Additionally, clicking on it will allow you to view information about placed remote VPNs and their performance. It lists each VPNs yield and seconds between yields.</li>
          <li>The Backdoor Hack label lists how many backdoor hacks you currently have installed.</li>
          <li>In the center you can see the in-game time displayed. It runs two times faster than real life time.</li>
          <li>The VPN Icon allows you to view and manage purchased any VPNs.</li>
          <li>The Motion Alert icon can be used to view and monitor any placed motion sensors. In addition, the icon will blink if a motion sensor is triggered and Sound Alert is pruchased.</li>
          <li>The Wifi Icon will be quite familiar to those who use PCs. It allows you to view nearby networks and log into them.</li>
          <li>The Sound Icon allows you to mute your PCs volume. An important note, doing this will mute all sounds produced by your PC.</li>
          <li>The Power Icon can be clicked to shutdown your PC.</li>
        </ul>
      </details>`},
	{"name":`<i class="fa fa-circle fa-lg"></i> The Building`,"content":`
	<h1>The Building</h1>
      <p>While quite a good amount of your time will be spent sitting at your computer, there are many important things you should know about your apartment and the building as a whole.</p>
      
      <p>When inside the computer you can right click to exit the computer at which point you will be able to look around and see your desk. Here you can boot your pc by interacting with your PC on the right of your desk if it is powered down. By right clicking again you will be able to get up and travel around your room. While there is not much to see, there are some important things to note.</p>
      <ol>
        <li>Your bedside table has a flashlight which will be useful later in the game. </li>
        <li>Your room has various lights each with their own switch. While their purpose will not be discussed in this guide, you should keep note of them. </li>
        <li>If you look on the left of your desk you will see your wifi dongle. It can be picked up and moved between 4 spots in your room, these spots include the window, the desk, the bedside table, and the table on your balcony. Moving your dongle to a new location will change the list of networks available on your PC. </li>
        <li>The closet next to the balcony and the shower located in the bathroom can be used as hiding places. Be mindful if you have not turned off your mic in your game settings as the game will listen to it and will deem you not truly hidden if you are caught making noise. These hiding places are relevant for a threat called the Hitman that is discussed in its own guide.</li>
      </ol>

      <p>Once you exit your apartment you will be in a hallway located on the 8th floor. Upon entering the stairwell, you will be able to freely travel up and down to other floors. The various other floors are relevant to a certain threat and the placement of Remote VPNs. The most important location you can access via the stairwell is the lobby which can be found on the bottom floor. Once there, you access the lobby computer and exit the front doors to visit the alley. All Shadow Market purchases will be shipped by drone to the end of the alley. Additionally, there is a small closet located on the right side of the alleyway, it can be used to counter a threat local to the alley if they become active.</p>`},
	{"name":`<i class="fa fa-circle fa-lg"></i> Searching`,"content":`
	<h1>Searching</h1>
      <p>An important skill for the game includes finding keys hidden within websites on the Deep Web and you will need to learn it to beat the game. Keys can be found in a variety of ways and are always a number followed by a dash and a random string of 12 alphanumeric characters. 1 - aWNrIGJyb3du It is quite easy to find these after you know where to look. Firstly, keys can be hidden in plain sight, this of course is the easiest and most straightforward method of which they can be hidden on a page. Secondly, keys and the link to Deep Wiki 2 can be hidden in a pages source code. This method can be more unpredictable, but can be quite easy if you know what to look for. All keys or links hidden in this way will be hidden inside of an HTML comment which looks like the following. &lt;!-- 1 - aqNr --&gt; Finally, keys may be hidden in a site behind a click point. This method is the hardest as it requires you to find and click on a certain word or picture in a site to reveal keys. To do this, you may either memorize the locations or use a guide. Once you find a functional clickpoint a sound will be played and either the key will appear on the page or as a file on your desktop.</p>
      <p>In addition to finding keys, you will also need to find two hidden wiki pages to complete the game. Fortunately finding wikis is a much easier task to complete. The link to wiki two can be found on a website within the first wiki. It will always be hidden within the source code of the first page of the website it is hidden on. Unlike the link to wiki two, the link to wiki three is always found on the website Rule of Three which is always located on the second wiki. To get the key, the site requires you to complete a trial and error memory puzzle. This puzzle is best completed earlier in a run since the pattern will randomize every time the page is reloaded.</p>
	  <p>There are also a couple quirks with how keys and links are hidden that you can find below.</p>
	  <ul>
	    <li>Keys and wiki links can exist on the same page, and can also both exist in the source code of a website at the same time.</li>
		<li>Forgive me will never contain a key, but can contain a wiki link.</li>
		<li>Rule of Three can never contain a key.</li>
		<l1>Keys and key clickpoints will never appear inside PGP blocks, but they can be in the opening or closing text.</li>
	  </ul>`},
    {"name":`<i class="fa fa-cog fa-lg"></i> Settings`,"content":`
    <h1>Settings</h1>
      <p>
        <div><span>Primary Color</span><b>:</b><span><input oninput="setcolor(0,this.value)" type="range" min="0" max="360" value="120" id="primary"></span></div>
        <div><span>Secondary Color</span><b>:</b><span><input oninput="setcolor(1,this.value)" type="range" min="0" max="360" value="0" id="secondary"></span></div>
      </p>`},
    {"name":`<i class="fa fa-question-circle fa-lg"></i> Feedback`,"content":`
    <h1>Feedback</h1>
    <p>If you wish to provide feedback or report a bug, please message leave a comment on the <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2211437048" target="_blank" rel="noreferrer">steam guide</a> for the helper or open an issue on the <a href="https://github.com/FierceThundr/wttg2-assistant/issues" target="_blank" rel="noreferrer">github page</a>!</p>`}
  ]
}

//==========================================================================Variable Data
var data = {
  "note":{
    "keys":["","????","????","????","????","????","????","????","????"],
    "content":""},
  "wiki":{
    "current":1,
    "keys":[null,0,0,0],
    "total":[null,2,3,3]}
}

window.temp = 100

//==========================================================================Functions

function Full_array(i,v) {var a = [];for (var i = i;i > 0;i--) {a.push(v);};return a;}

//=============================
//=============================Wiki Functions
//=============================
function wikiinput(content) {//Update wiki data from input field
  var table = document.getElementById("wiki" + data.wiki.current + "list");
  document.getElementById("wikidata").value = "";
  if (content.length == 1) {return;}
  for (var y = table.rows.length - 1; y > 0; y--) {table.deleteRow(-1);}
  var sites = content.match(/(?=^)[\w ]+[!?]?(?= -)/gm)
  
  if (sites !== null) {sites.forEach(function (name) {var i = sitedata[name];if (i == undefined) {buttons(name,i,0,0,0,1)} else {var o = i.id;buttons(name,i,0,0,o,2);if (i.sub !== undefined) {i.sub.forEach(function (name,m,n) {o++;buttons(name,i,m,n,o,3)})}}})}
  function buttons(name,i,m,n,o,v) {
    var a = document.getElementById("wiki" + data.wiki.current + "list").insertRow(-1);
    var b = a.insertCell(0);
    var c = a.insertCell(1);
    var d = a.insertCell(2);
    b.innerHTML = (v !== 3) ? (name):((n.length - 1 == m) ? '⠀└─ ' + name:'⠀├─ ' + name);
    c.innerHTML = (v == 3) ? ('<i class="child">⠀Subpage</i>'):(v == 2) ? ((i.times == undefined) ? 'Always Available':i.times):('<i class="secondary">Dead Site</i>'); 
    d.innerHTML = `<button class="${(v == 1) ? "disabled":""}" ${(v !== 1) ? 'onclick="sitepreview(' + o + ')"':""}><i class="fa fa-mouse-pointer fa-lg"></i></button> <button class="${(v == 1) ? "disabled":"secondary"}" ${(v !== 1) ? 'onclick="toggle(this)"':""}><i class="fa fa-search fa-lg"></i></button><button class="${(v == 1) ? "disabled":"secondary"}" ${(v !== 1) ? 'onclick="toggle(this,1)"':""}><i class="fa fa-key fa-lg"></i></button><button class="${(v == 1) ? "disabled":"secondary"}" ${(v !== 1) ? 'onclick="toggle(this)"':""}><i class="fa fa-link fa-lg"></i></button>`
  }
}

function wikiupdate(m) {//Change wiki page
  click()
  document.getElementById("wiki" + data.wiki.current).style.display = "none";
  data.wiki.current += m
  if (data.wiki.current == 4) {data.wiki.current = 1;};
  if (data.wiki.current == 0) {data.wiki.current = 3;};
  document.getElementById("wiki" + data.wiki.current).style.display = "block";
  document.getElementById("wikititle").innerHTML = "Wiki " + "III".slice(0,data.wiki.current);
  keysupdate()
}

function toggle(element,k) {//Toggle color of note taking buttons (Update key count)
  click()
  if (k == 1) {data.wiki.keys[data.wiki.current] += (element.classList.contains("secondary")) ? 1:-1;keysupdate()}
  element.classList.toggle("secondary")
}

function keysupdate() {//Update key count display
  document.getElementById("keycount").innerHTML = '<b>Keys remaining: ' + Math.max((data.wiki.total[data.wiki.current] - data.wiki.keys[data.wiki.current]),0) + '</b>';
}

function guideload() {
  try {
	document.getElementById("preview").contentDocument.addEventListener('click', function(e) {sitepreview(-1)})
  } catch (e) {
	sitepreview(-1)
	console.log("Clickpoint Guide Failure: " + e)
  }
}

function sitepreview(i) {//Update and display key clickpoints popup
  click()
  if (i == -1) {
    document.getElementById("preview_div").style.display = "none";
    document.body.classList.remove("noscroll");
    return;
  }
  document.getElementById("preview").src = 'Clickpoint Guides/' + i + '.html'
  document.getElementById("preview_div").style.display = "block"
  document.body.classList.add("noscroll");
}

function wikidemo() {//Force update of wiki data
  click()
  wikiinput("BathRoom Cams - \n\rBrutal Underground - \n\rCheap Surgery - \n\rChosen Awake - \n\rCorpses For Sell - \n\rCry Bitch - \n\rDeep Journal - \n\rDEEPDOTWEB - \n\rDream Place - \n\rEvil Collection - \n\rEye - \n\rForgive Me - \n\rHot Burners - \n\rIAMHERE - \n\rKeep Sake - \n\rLittle Friends - \n\rScream Bitch - \n\rSecure Drop - \n\rSKYWEB - \n\rSt Louis Arch - \n\rThe 8th Sin - \n\rThe Doll Maker - \n\rThe Light Within - \n\Vacation - \n\rYOU THERE? - ")
}

//=============================
//=============================Note Functions
//=============================
function noteinput(content) {//Attempt to find and save keys in note block input
  var lkeys = content.match(/[1-8] - [\w]{12}/g)
  if (lkeys !== null) {lkeys.forEach(function (a) {data.note.keys[a.slice(0,1)] = a.slice(4,16)});}
  document.getElementById("keyoutput").innerHTML = `<b>Key Data</b><br>${data.note.keys.join("").substr(0,48)}<br>${data.note.keys.join("").substr(48,48)}`;
  if (data.note.keys.indexOf("????") == -1) {document.getElementById("keyoutput").innerHTML = `<b>Red Room URL</b><br>${data.note.keys.join("")}.ann`;}
}

//=============================
//=============================Info Block Functions
//=============================
function guideupdate(i) {//Change info page
  click()
  document.getElementById("guidedata").innerHTML = guidedata[i].content
}

function setcolor(i,c) {//Update site color settings in memory
  localStorage.setItem(`color${i}`,c)
  document.getElementById("dom_color").innerHTML = `body {color:hsl(${localStorage.getItem('color0')},100%,50%)} .simplebar-scrollbar::before {background-color:hsl(${localStorage.getItem('color0')},100%,50%)} .child {color:hsl(${localStorage.getItem('color0')},100%,30%)} .secondary {color:hsl(${localStorage.getItem('color1')},100%,50%)} .disabled {color:hsl(${localStorage.getItem('color1')},100%,20%)}`
}

//=============================
//=============================Other
//=============================
function tunnelsecret() {
  return "3 - mv2gq5lomrza"
}

function tipupdate() {//Update displayed tip
  document.getElementById("tips").innerHTML = '[Tip] ' + tips[Math.floor(Math.random() * tips.length)]
}
setInterval(tipupdate,10000);

function setup() {//Prepare website lists and appearance
  guidedata.forEach(function (data,index) {
    var button = document.createElement("button")
    document.getElementById("guidelist").appendChild(button)
    button.outerHTML = `<button onclick="guideupdate(${index})">${data.name}</button>`
  })
  if (localStorage.getItem('color0') == undefined) {localStorage.setItem('color0',120)}
  if (localStorage.getItem('color1') == undefined) {localStorage.setItem('color1',0)}
  document.getElementById("dom_color").innerHTML = `body {color:hsl(${localStorage.getItem('color0')},100%,50%)} .simplebar-scrollbar::before {background-color:hsl(${localStorage.getItem('color0')},100%,50%)} .child {color:hsl(${localStorage.getItem('color0')},100%,30%)} .secondary {color:hsl(${localStorage.getItem('color1')},100%,50%)} .disabled {color:hsl(${localStorage.getItem('color1')},100%,20%)}`
  document.getElementById("animated").style = "animation:slide 1s 0.3s forwards"
}

function click() {//Play click sound
  var audio = new Audio('Assets/general_mouseclick.mp3');audio.play();
}

function sitecycle() {//Temporary dev function (Cycle through clickpoint guides)
  sitepreview(window.temp)
  window.temp++
}