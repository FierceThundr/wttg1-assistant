
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
    "Remember to check in the source code",
    "You shouldnt check the peep hole",
    "Hacks are the best way to gain DosCoin",
    "Zonewall will not give you DosCoin for backdoors",
    "Listen for the door",
    "The game includes a lot of dead websites that will never be open",
    "More secure networks are faster and safer",
    "Dont forget to log off when you leave the PC",
    "Remember to switch your wifis",
    "Dont forget the Breather",
    "If possible, you should save up for key cue",
    "Remember to practice your hacking skills",
    "Press up and down in console to view command history",
    "You can't force hacks in 1337 mode",
    "Dont run through doors, you don't know who might be there",
    "Dont forget your friend in the window",
    "Remember to grab the flashlight",
    "Say hi to Lucas for me",
    "The Noir are not good at hugs",
    "Avoid the alley later in the game",
    "HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAH",
    "Dont look behind you",
    "Move your router to change your wifi list",
    "Dont underestimate the Doll Maker",
    "Dont worry about the noises behind you, they mean nothing... probably",
	"Be quiet when hiding or he will find you",
	"Dont waste the flashlight, you dont want to be stuck in the dark",
	"Error 418 I am a teapot"
  ], guidedata = [
    {"name":`<i class="fa fa-info-circle fa-lg"></i> About`,"content":`
    <h1>About</h1>
      <p>Created by: FierceThundr_</p>
      <p>Sounds and images used are property of reflect studios<br>Welcome to The Game II is property of reflect studios</p>
      <p><i>Started July 5th 2020</i><br><i>Updated May 18th 2021</i></p>
	  <p><a href="https://github.com/FierceThundr/wttg2-assistant" target="_blank" rel="noreferrer">Github Page</a></p>
    <h3>Information Sources</h3>
      <p>
        <a href="https://cdn.discordapp.com/attachments/572088008723922954/572089747649069056/Welcome_to_the_Game_II_WiFi_Table.xlsx" target="_blank" rel="noreferrer">Wifi data ~Nasko222</a><br>
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
      <summary><h3>The Wifi Block</h3></summary>
      <p>The wifi block allows you to survey the many wifi networks present in the game. It will also information useful for cracking and accessing such wifis. Along with this, the block has password fields and an inbuilt tracking timer that will play a warning when you have one minute remaining to get off a network before the cops trace you.</p>
    </details>
    <details>
      <summary><h3>The Tenant Block</h3></summary>
      <p>The tenant block can be used to view a database of tenants of Clint's apartment. It provides their ages, names, and their notes from the lobby computer. Along with this, it will also tell you if the tenant is a valid victim for the Doll Maker.</p>
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
      <p>An important skill for the game includes finding keys hidden within websites on the Deep Web and you will need to learn it to beat the game. Keys can be found in a variety of ways and are always a number followed by a dash and a random string of 12 alphanumeric characters. 1 - aWNrIGJyb3du It is quite easy to find these after you know where to look. Firstly, keys can be hidden in plain sight, this of course is the easiest and most straightforward method of which they can be hidden on a page. Secondly, keys and the link to Deep Wiki 2 can be hidden in a pages source code. This method can be more unpredictable, but can be quite easy if you know what to look for. All keys or links hidden in this way will be hidden inside of an HTML comment which looks like the following. &lt;!-- 1 - aWNrIGJyb3du --&gt; Finally, keys may be hidden in a site behind a click point. This method is the hardest as it requires you to find and click on a certain word or picture in a site to reveal keys. To do this, you may either memorize the locations or use a guide. Once you find a functional clickpoint a sound will be played and either the key will appear on the page or as a file on your desktop.</p>
      <p>In addition to finding keys, you will also need to find two hidden wiki pages to complete the game. Fortunately finding wikis is a much easier task to complete. The link to wiki two can be found on a website within the first wiki. It will always be hidden within the source code of the first page of the website it is hidden on. Unlike the link to wiki two, the link to wiki three is always found on the website Rule of Three which is always located on the second wiki. To get the key, the site requires you to complete a trial and error memory puzzle. This puzzle is best completed earlier in a run since the pattern will randomize every time the page is reloaded.</p>
	  <p>There are also a couple quirks with how keys and links are hidden that you can find below.</p>
	  <ul>
	    <li>Keys and wiki links can exist on the same page, and can also both exist in the source code of a website at the same time.</li>
		<li>Forgive me will never contain a key, but can contain a wiki link.</li>
		<li>Rule of Three can never contain a key.</li>
		<l1>Keys and key clickpoints will never appear inside PGP blocks, but they can be in the opening or closing text.</li>
	  </ul>`},
	{"name":`<i class="fa fa-circle fa-lg"></i> Events`,"content":`
    <h1>Events</h1>
      <p>During your playthrough you will encounter two randomevents in addition to the killers attempting to kill you.</p>
      <p>The first event is the blackout. This event is quite easy to beat as you must walk to the end of the hallway and turn the circuit breaker back on in the maintenance closet. This event requires that the player have the flashlight available to be able to navigate the pitch black hallway. It is important to keep in mind that the flashlight has a limited battery life and cant be recharged in the event that it dies. While the event isnt deadly by itself, Noir usually spawns during the event since the darkness allows them to be more active. It is useful to be cautious due to this fact.</p>
      <p>The second event is hacks. These events are randomly occuring minigames which you must beat in order to avoid losing notes or DosCoin. In addition, hacks can be used as an easy method of DosCoin in conjunction with a Backdoor Hack. If you want more details about how hacks function, please refer to the hacking guide.</p>`},
	{"name":`<i class="fa fa-circle fa-lg"></i> The Markets`,"content":`
    <h1>The Markets</h1>
      <p>During your playthrough there are many useful items can be purchased to help with evading threats, speeding up your internet, or generating DosCoin. The following is a list of the items available for purchase.</p>
      <h3>ZeroDay Market</h3>
      <p>The ZeroDay Market sells useful software and tools for use on your computer.</p>
      <ul>
        <li><b>Skybreak</b> The basic installation of Skybreak which allows for the cracking of WEP security networks. Can be upgraded with Skybreak libraries.</li>
        <li><b>Skybreak WPA lib</b> An upgrade to the basic installation of Skybreak which allows for the cracking of WPA security networks.</li>
        <li><b>Skybreak WPA2 lib</b> An upgrade to the basic installation of Skybreak which allows for the cracking of WPA2 security networks.</li>
        <li><b>Backdoor Hack</b> Cheap consumables that reward DosCoin for successfully defending against hack events. (Excluding ZoneWall)</li>
        <li><b>Motion Alert</b> An addon to Motion Sensors. It will create an auditory alert when a placed Motion Sensor is tripped.</li>
        <li><b>VPN Level #</b> A variety of VPNs that can be purchased to suppress hacks. They can also be disabled at will to control whether hacks can occur. Becomes more effective for each level purchased.</li>
        <li><b>Key Cue</b> An addon to the A.N.N. browser which detects if a key is on the currently loaded page. It will put a key symbol on the bottom right corner of the browser if it detects a key.</li>
        <li><b>VWipes</b> VWipes can be purchased to scan for viruses and remove them. VWipes are one use and another must be purchased every time you wish to scan your computer. Viruses can be obtained when hacks are failed and can tamper with your DosCoin and shutdown your computer.</li>
      </ul>
      <h3>Shadow Market</h3>
      <p>The Shadow Market sells useful hardware and tools to aid in various tasks. All purchases here will be delivered to the buildings alley for pickup.</p>
      <ul>
        <li><b>Wifi Dongle Level 2</b> A more capable wifi dongle that allows for faster web browsing and access to additional wifi networks.</li>
        <li><b>Wifi Dongle Level 3</b> The most capable wifi dongle in the game that allows for faster browsing and access to all available wifi networks.</li>
        <li><b>Motion Sensors</b> Motion Sensors can be used to detect movement outside of your apartment. However, they are only effective on the Hitman.</li>
        <li><b>Remote VPNs</b> DosCoin generators that can be placed around the building. They should be placed in locations in which they appear green for best performance.</li>
        <li><b>Police Scanner</b> A device that allows you to listen in on police communications. It can allow you to tell when the police are planning on arriving at your apartment.</li>
        <li><b>LOLPY Disc</b> A tool that can be used to hack the lobby computer to access the tenant database. It is used to complete the Doll Maker quest.</li>
        <li><b>Blue Whisper</b> A device that allows you to remotely hear sounds produced by your PC.</li>
      </ul>`},
    {"name":`<i class="fa fa-circle fa-lg"></i> The Police`,"content":`
    <h1>The Police</h1>
      <p>The police are the easiest threat in the game to avoid. To avoid them you must switch wifi networks before you exceed their respective tracking timers. Though if you forget to switch, the game only has a certain chance to trigger the swat team to break down your door based on the network you stayed on. <i>(If they are triggered, they will wait until you approach your front door or the stairwell door of floor eight before causing a game over.)</i> Despite this, you should avoid gambling on that chance.</p>
	  <p>the task of avoiding the cops can be made easier by purchasing skybreak from the ZeroDay Market and cracking higher security networks. Not only will they give you more time to breath, they often perform better.</p>
      <p><i>(In 1337 mode the tracking rates are shortened which allow the police to find you faster and with a garunteed chance of success)</i></p>
	  <p>The Police Scanner is an optional device that can be purchased to know when the police are close to tracing. When turned on, the police scanner will occasionally intercept and output random police communications. Certain phrases indicate that they are close to tracing you. <i>(Sound cues can be found below)</i></p>
      <details>
        <summary><b>Police Scanner Cues</b></summary>
        <h4>Morse Code</h4>
          <audio controls><source src="Assets/police_scanner_real1.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>
        <h4>1 11 1 10</h4>
          <audio controls><source src="Assets/police_scanner_real2.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>
		<h4>We need your expertise on that</h4>
          <audio controls><source src="Assets/police_scanner_real3.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>
        <br><br>
      </details>
      <details>
        <summary><b>Notes</b></summary>
        <ul>
          <li>Remember to switch wifi often</li>
          <li>Hacking into more secure networks using skybreak will allow you more time between switching networks</li>
        </ul>
      </details>`},
    {"name":`<i class="fa fa-circle fa-lg"></i> The Hitman`,"content":`
    <h1>The Hitman</h1>
      <p>The Hitman (Also known as Lucas Kumiega) is an enemy that becomes active deeper into the game, they will become active after you have gone into three pages that have keys or after you accrue a certain amount of difficulty points by other methods. You can check whether or not they are active by checking if the window to the left of your desk is open. <i>(Please note that this is simplified for brevity, go to the bottom of this quide for a full explaination)</i></p>
      <p><i>(In 1337 mode the Hitman will be active immediately)</i></p>
      <p>The Hitman is a very difficult enemy to beat due to various reasons, but let's start from the bottom.</p>
      <ol>
        <li>Remember to always lock your door. The Hitman is the only threat this mechanic is relevant to, but you should practice doing this regularly.</li>
        <li>Make sure that you can hear the lockpicking sound cue. Normally this is the only way to identify that the hitman is at your door and preparing to break in. <i>(Sound cue can be found below)</i></li>
        <li>Purchase and place motion sensors in addition to buying sound alert. This will give you a more effective method to know when the hitman is coming to your door in addition to giving you more time to hide. <i>(The motion sensors should be placed on the wall on both ends of the hallway, as the hitman can approach from both sides of the hallway)</i></li>
      </ol>
      <p>When you know the Hitman is currently preparing to barge in you must turn of your computer and hide in either the shower in the bathroom or the closet near your balcony. In both cases you must be quiet as to not alert the hitman. <i>(This is only relevant if you have the mic enabled in your settings)</i> Also note that if you do not turn off the computer the hitman can erase notes saved into the games internal notepad in addition to stealing portions of your DosCoin balance. During the time he is in your apartment, stay in your hiding place until you hear him leave. <i>(Sound can be found below)</i> You can affect the time he is in your apartment by turning off more lights in the seconds before you hide and prior.</p>
	  <p>In addition to encountering the Hitman as he pays a visit to your apartment it is possible for them to kill you when returning to your apartment if they spawn when you are not at the apartment. Unfortunately, if this rare event occurs it is impossible to mitigate and you will die the next time you open a hallway door.</p>
      <details>
        <summary><b>Hitman Activation</b></summary>
        <p>The Hitman activates based off of a system of difficulty points in the game, this system has a couple of factors that feed into it. For every key you find, you gain one difficulty point. If you are after 1 AM you get another. Lastly, you can gain a difficulty point for every 3 forced hacks. <i>(Force hacking can be found in the exploits section)</i> Whenever you get 3 difficulty points in total, the Hitman will activate and the window of your apartment will open. However, in 1337 mode you automatically start with 8 difficulty points.</p>
      </details>
      <details>
        <summary><b>Hitman Simulater</b></summary>
        <p>If you want to work on improving your ability to hear the Hitmans lockpicking sound cue, I have created a web version of a tool created by a Welcome to the Game modder named Nasko. This tool can be found on the left side of the info block in the guide list.</p>
      </details>
      <details>
        <summary><b>Hitman Sound Cues</b></summary>
        <h4>Lockpicking</h4>
          <audio controls><source src="Assets/hitman_doorknob.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>
        <h4>Hitman Leaving</h4>
          <audio controls><source src="Assets/hitman_softdoorshut.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>
        <br><br>
      </details>
      <details>
        <summary><b>Notes</b></summary>
        <ul>
          <li>The default sound cue for the hitman is very faint, you should set up your sound options to mitigate this</li>
          <li>The hitman can erase the in-game notepad if the PC is not turned off during an encounter with him</li>
          <li>Your apartment lights affect how long the hitman stays during his visits, the more off the faster he leaves</li>
          <li>If the Hitman is at the door he can kill you if you use the peep hole</li><li>It is a good investment to buy a pair of motion sensors and a sound alert</li>
        </ul>
      </details>`},
    {"name":`<i class="fa fa-circle fa-lg"></i> The Noir`,"content":`
    <h1>The Noir</h1>
      <p>The Noir are a threat prevalent in the game. They appear randomly in various places such as in the apartment, the apartment window, the hallway, behind doors, and in rare cases behind the gate in back of the alley.</p>
      <p>They are a basic threat to mitigate, but can quite easily catch those unfamiliar with them. To make them go away, turn around as soon as you see them and count to ten. After this they should be gone. If not, repeat the process. However, they pose a more active threat when they spawn behind doorways. This often catches players who are attempting to rush to and from the alley/lobby and back as fast as possible. In addition, the Noir have a chance to instantly kill you if you have at least two lights turned off in your apartment. <i>(For more details of the Noir insta-kill, check below)</i>
      <details>
        <summary><b>Noir insta-kill</b></summary>
        <p>The noir insta-kill is one of the most dangerous aspects of the Noir. It allows the Noir to instantly kill the player if a few criteria are met.</p>
        <ul>
          <li>At least two lights in the apartment are off</li>
          <li>You have at least 4 difficulty points</li>
          <li>No other threat is currently active</li>
        </ul>
        <p>Noir will check if these criteria are met every 120 seconds, and if they are met you will be killed the next time you stand from your desk.</p>
        <details>
          <summary><h4>Difficulty Points</h4></summary>
          <p>The game has a system of difficulty points that affect how aggressive enemies are. For every key you find, you gain one difficulty point. If you are after 1 AM you get another. Lastly, you can gain a difficulty point for every 3 forced hacks you perform. However, in 1337 mode you automatically start with 8 difficulty points which forces killers to start at maximum aggression.</p>
        </details>
        <br>
      </details>
      </details>
      <details>
        <summary><b>Notes</b></summary>
        <ul>
          <li>It is advised that you do not run through doors</li>
          <li>The Noir are more active in darkness, be careful if you turn your lights off or if the power goes out</li>
          <li>Make sure to occasionally check for the Noir in the window, on the balcony, and in the apartment</li>
        </ul>
      </details>`},
    {"name":`<i class="fa fa-circle fa-lg"></i> The Breather`,"content":`
    <h1>The Breather</h1>
      <p>The Breather is by far the most annoying threat you can encounter in the game. While he is only active in the alley, it is very difficult to ward him off. The difficulty is also aided by the relative rarity of encountering them in the first place.</p>
      <p>Normally, it is unlikely for the Breather to spawn on a visit to the alley. However, as you get more keys throughout the game, the chance for him to spawn will go up. To know if he is active on a visit to the alley, listen for any potential sound cues when passing the dumpster. <i>(Sound cues can be found below)</i> If you hear a sound (or you are not sure) you should go into the nearby door and prepare to brace the door. You can look through the window in an attempt to see him, but you should not let him see you. If he begins to push the door, immediately hold the doorknob. (Keep in mind that this minigame is very strict and will result in death upon failure) After he gives up, you should stop holding to prepare for his next attempt. Repeat this process until he leaves.</p>
 	  <details>
        <summary><b>Breather Cues</b></summary>
        <h4>Laugh</h4>
          <audio controls><source src="Assets/breather_cue1.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>
        <h4>Phone Ring</h4>
          <audio controls><source src="Assets/breather_cue2.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>
		<h4>Footsteps</h4>
          <audio controls><source src="Assets/breather_cue3.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>
        <br><br>
      </details>
	  <details>
        <summary><b>Breather spawnrate</b></summary>
        <p>For those interested in the specifics of the Breathers spawnrate, the breather has percentage chance to be spawned which depends on how many keys you've discovered. <i>(This does not require actually finding them)</i> When you have zero or one keys, the Breather will spawn 20% of the times you visit the alley. Upon discovering any keys after your first, he will gain 5% to his chance of spawning up to a maximum of 55%. <i>(When playing in 1337 mode, the Breather will always have a fixed 55% chance of spawning.)</i></p>
      </details>
      <details>
        <summary><b>Notes</b></summary>
        <ul>
          <li>Listen for the Breather when you enter the alley</li>
          <li>Pay close attention to the movement of the door handle as you brace it</li>
          <li>You should avoid visiting the alley later in the game to avoid meeting the Breather</li>
        </ul>
      </details>`},
    {"name":`<i class="fa fa-circle fa-lg"></i> The Doll Maker`,"content":`
	<h1>The Dollmaker</h1>
      <p>The Dollmaker is an optional threat that is activated upon entering the site by the same name. After a certain amount of time, the Dollmaker will ██████ ██ ████ ████ and force you to ████ ████ ███ ████-████. Then the power will ██ ███ ███ █ ████████ ████ ██ █████████.</p>
      <p>After you have been given the marker on your doorknob you have a limited amount of time to place it on a suitable door. If you fail to do so, he will return disappointed and kill you wherever he happens to find you. There are two routes you can take in the Dollmakers task. You can attempt to randomly select a correct door or you can buy the Lolpy Disk item off the Shadow Market to have certainty of your selection. Once you have the Lolpy Disk, you can go to the lobby computer and hack it with the disk. Once it is finished, you will have access to a database of all tenants in the building. Simply select a suitable female target and place the marker on their door. Keep in mind that the Dollmaker will always request five targets during your encounter with him, remember to listen for him returning the marker.</p>
      <details>
        <summary><b>Extra Information</b></summary>
        <p>The following are specific timers and information for the Doll Makers various events.</p>
        <p>When you activate the Doll Maker they will spawn after 3:20 to 7:10 minutes. Once you recieve the door marker from the Doll Maker he will check your selection after 14:00 to 19:00 minutes. After the Doll Maker claims your selection he will wait 7:05 to 14:20 minutes to return the door marker.</p>
      </details>
      <details>
        <summary><b>Notes</b></summary>
        <ul>
          <li>If possible, you should avoid triggering the Dollmaker in a run going for completion</li>
          <li>If you want to complete the quest, go for it AFTER you have sufficient funds for a better chance of success</li>
          <li>While the time the Dollmaker quest provides is generous, it should be completed as soon as you can manage</li>
        </ul>
      </details>`},
    {"name":`<i class="fa fa-circle fa-lg"></i> Hacking`,"content":`
    <h1>Hacking</h1>
      <p>Occasionally throughout the game you can get hacked and face up against various minigames. While at first they are an annoying hinderance, they can be used to help you complete the game after you learn how to beat them.</p>
      <details>
        <summary><h3>ZoneWall</h3></summary>
        <p>Zonewall is always the first hack you will encounter upon being presented with a hack. ZoneWall consists of multiple lines with randomly selected target areas on each. In addition, you will see a moving bar on the topmost line. The goal is to left click when the bar is hovering over the red section, whether you succeed or not you will then be moved to the next bar down in the sequence. If you successfully time and complete a certain amount of bars, the hack will be instantly blocked. If you fail too many however, you will be randomly given one of the following hacks...</p>
      </details>
      <details>
        <summary><h3>StackPUSHER</h3></summary>
        <p>StackPUSHER consists of a randomly sized grid with a randomly generated layout. To successfully defend against this hack you must drop all stack nodes <img class="help_photo" src="Assets/stack3.png"> into the center where the popper node <img class="help_photo" src="Assets/stack1.png"> is located. You can only interact with stack nodes which are adjacent to the pusher node <img class="help_photo" src="Assets/stack2.png">. You can move the pusher node to any location on the board by clicking on it and clicking a destination. At higher levels, you will also need to avoid clicking on skull nodes that will start being generated. Clicking on them will result in an immediate failure of the hack.</p>
      </details>
      <details>
        <summary><h3>NodeH3X3R</h3></summary>
        <p>NodeH3X3R is often regarded as the hardest hack by the greater majority of players. It consists of a randomly sized grid of nodes. Which can each either be Alpha or Beta. <img class="help_photo" src="Assets/node3.png"><img class="help_photo" src="Assets/node2.png"> Your goal is to connect the starting node to all corrupted nodes (indicated by a bright green outline) <img class="help_photo" src="Assets/node1.png"> via a continuous line from the indicated starting node. However, when making this path you must be cautious to make every connection to the alternative node type. Connecting a node to another of the same type will not result in a failure until the hack attempts to verify your route through the nodes. Make sure to check your work and remember that you cant pass through the same node twice.</p>
      </details>
      <details>
        <summary><h3>MemD3FR4G3R</h3></summary>
        <p>MemD3FR4G3R is by far the easiest hack, at least at lower levels. You will be shown a sequence of letters and numbers in a box that you will be required to remember and reproduce with the buttons that will be provided by the hack. In addition, you may replay the pattern by clicking on the block in the center if you need a second chance to see a pattern. Keep in mind that you may be required to complete multiple levels of MemD3fr4g3r to pass the hack. Also, in 1337 mode or in the late game of a normal run, you may want to have a piece of paper at the ready as the sequence generated can be excessively long if given the right conditions.</p>
      </details>
	  <br>
      <p>When presented with ZoneWall, you may either fail this to get a secondary hack or succeed to instantly block the hack. While instantly blocking hacks sounds better, if you buy backdoors you can get DosCoin by failing ZoneWall and beating the secondary hack. The difficulty of hacks gradually increases based on the games duration, but you can effect the difficulty by the amount of levels succeeded during ZoneWall. Keep in mind, failing hacks can result in losing your in-game notes and a randomly selected amount of DosCoin. In addition, failing can cause you to get a virus which can hinder you from beating the game by causing random shutdowns and stealing DosCoin.</p>
      <p><i>(In 1337 mode all hacks will be given at max level despite zonewall performace or duration of the run)</i></p>
      <p>If you want to avoid getting hacked, you can buy VPN levels on the ZeroDay Market to supress the chance of a hack occuring for the remainder of the game. The supression depends on how many VPN levels you purchase from the ZeroDay market with each lowering the chance a hack will go through by 20%. VPNs can also be disabled by accessing their section on the right side of the taskbar.</p>
      <!--<details>
        <summary><b>Hack difficulty</b></summary>
        <p>If you want specific values about the difficulty of hacks a player named Lutonite has created a <a href="Assets/wttg2hacks.txt" target="_blank" rel="noreferrer">file</a> containing that information.</p>
      </details>-->
      <details>
        <summary><b>Notes</b></summary>
        <ul>
          <li>Backdoors bought from the ZeroDay Market will give you DosCoin for succeeding hacks other than ZoneWall</li>
          <li>Your success on zonewall affects the difficulty of secondary hacks</li>
          <li>VPNs can allow you to optionally suppress hacks</li>
        </ul>
      </details>
	`},
    {"name":`<i class="fa fa-circle fa-lg"></i> Cracking`,"content":`
    <h1>Cracking</h1>
      <p>An important skill for evading police and extending your available breathing room is cracking. Cracking can be performed after purchasing SkyBreak from the ZeroDay Market. To hack a wifi network, you must first open the application and proceed to type the name of the package you would like to run. ("wep","wpa","wpa2") By default, a basic installation will only include the ability to access the WEP library.</p> <p><b>[You do not need to be connected to a wifi network to use SkyBreak]</b></p>
      <details>
        <summary><h3>WEP</h3></summary>
        <p>Wep networks are the weakest security network you can crack in the game. They will give you slightly improved times over most free networks available. To hack a WEP network you must first type 'scan' to see the currently available wifi networks. Then after choosing the network you wish to crack, type the command 'probe &lt;The BSSID of the network you want to hack&gt; 1 1000'. Skybreak will then find the open port on your chosen wifi. You can then crack the wifi by typing the command 'crack &lt;The BSSID of the network&gt; &lt;The channel of the network&gt; &lt;The wifi networks open port&gt;' which will provide you with the networks password upon completion.</p>
      </details>
      <details>
        <summary><h3>WPA & WPA2</h3></summary>
        <p>Hacking a wpa or wpa2 network starts similarly to wep networks. First type in 'scan' to see your available networks, then proceed to type 'inject &lt;The BSSID of the network you want to hack&gt; &lt;The channel of the network&gt; &lt;The amount of packets to inject&gt;'. This will proceed to inject the specified number of packets into the target network. Keep in mind that sending too many packets in a certain amount of time will result in a network being knocked offline for a period of time. To avoid this, try to extend the amount of injections over an extended period of time. (The exact injection rates are included in the wifi block) To complete the cracking of a wpa or wpa2 network, type 'crack &lt;The BSSID of the network you want to hack&gt; &lt;The channel of the network&gt;' which will procide you with the networks password upon completion.</p>
      </details>
      <p>[Skybreak allows you to access a history of commands by pressing the up and down arrow keys.]</p>`},
    {"name":`<i class="fa fa-circle fa-lg"></i> Exploits & Bugs`,"content":`
    <h1>Exploits</h1>
      <details>
        <summary><h3>WPA2 Quick Crack</h3></summary>
        <p>Hacking a WPA or WPA2 takes quite a lot of time due to the requirement to inject these networks before attempting a crack. This can cause a lot of grief both by the innate time cost and the consequences for failure. However, an exploit has been discovered that can easily skip this part of the process by a couple simple steps.</p>
        <ol>
          <li>Open skybreak and find the BSSID of the WPA or WPA2 network you wish to crack.</li>
          <li>Type and copy the following command 'probe &lt;Target network BSSID&gt; 1 1'.</li>
          <li>Probe and begin to crack a WEP network.</li>
          <li>Before the crack completes paste the command from the previous steps</li>
        </ol>
        <p>If you completed the steps correctly SkyBreak will display an error related to the port range as the crack is occuring. It will then complete and display the password for the target network</p>
      </details>
      <details>
        <summary><h3>Window Key Cue</h3></summary>
        <p>The window to left of Clint's desk opens based on the games difficulty point system. Due to how this system works, it can be exploited as a single use key cue. To put it simply... If you enter a site and the window opens immediately afterwards, you can say with certainty that the website you enters contains a key somewhere. <i>(Unlike the proper key cue, this trick does not give you a precise page)</i> Additionally, this trick can also be used to rule out websites if you understand the system behind how it works. <i>(If you do not know how the system works refer to the dropdown below)</i> If you search through wiki 1 and successfully discover the locations of both keys before 1AM, you can go through the sites on wiki2 and eliminate any site for which the window does not open. At the same time, when it finally opens you know the site you just entered has a key located on it somewhere.</p>
        <details>
          <summary><h4>Advanced Explanation</h4></summary>
          <p>The window opens based off of a system of difficulty points in the game, this system has a couple of factors that feed into it. For every key you find, you gain one difficulty point. If you are after 1 AM you get another. Lastly, you can gain a difficulty point for every 3 forced hacks. Whenever you get 3 difficulty points in total, the window of your apartment will open. However, in 1337 mode you automatically start with 8 difficulty points which prevents the use of this strategy in that mode.</p>
        </details>
        <br>
      </details>
      <details>
        <summary><h3>Force Hacking</h3></summary>
        <p>Force hacking is a strategy you can use to trigger additional hacks by going to a dead site and repeatedly refreshing. To perform a force hack you simply need to find a dead website and refresh it repeatedly. Unfortunately in the newest patch this trick has been significantly nerfed. In older patches you can attempt force hacks every second, while in the newest patch the cooldown has been raised to 30 seconds.</p>
      </details>
      <details>
        <summary><h3>God Spot</h3></summary>
        <p>The god spot is the name given to a strange VPN location known for its strange attributes. It is a red location that gives 277 DosCoin every 2770 seconds. (1 DosCoin every 10 seconds) It is not currently known why this location exists, but it can be a powerful tool to earn a lot of DosCoin if you can find it. The following is a strategy that can be used to find it...</p>
        <ol>
          <li>Take a VPN and place it into a red location.</li>
          <li>After a couple seconds, switch to a new red location.</li>
          <li>After you have placed the VPN in a handful of red locations, return to the PC and check your DosCoin balance.</li>
          <li>If your DosCoin balance has significantly changed, you can go back to the last places you searched and trial and error the god spot. Otherwise, you can test other red locations to find it.</li>
        </ol>
      </details>
      <details>
        <summary><h3>Package Quick Grab</h3></summary>
        <p>Package Quick Grab is a trick that can be done if you enter the alley and the drone is arriving. If this is the case it is possible to grab the package directly from the drone. This can be done by standing right below where the drone dips down near the entrance to the alley and clicking the button to grab the package.</p>
        <p><i>(This exploit will also trigger a bug which prevents the delivery of any packages matching the types you snatch from the drone.)</i></p>
      </details>
      <details>
        <summary><h3>Noir Quick Hide</h3></summary>
        <p>The Noir Quick Hide is a strategy you can use to skip turning your back on the Noir. In the event that a Noir is in your apartment your first instinct may be to turn around. However, you can also open the balcony door to make the Noir disappear as well. <i>(This will not work if the Noir is located on your balcony)</i></p>
      </details>
      <details>
        <summary><h3>Door Clipping</h3></summary>
        <p>Door Clips are tricks you can perform to cause yourself to go out of bounds and often to useful areas.<i>(Please note that these tricks will not work in the current version of the game and may be unpredictable in all versions)</i></p>
        <details>
          <summary><h4>Apartment Closet</h4></summary>
          <p>To clip out of bounds using the apartments closet, enter the closet and exit. Immediately after exiting the closet turn around and run into the closet doors. If performed correctly you should fall out of bounds and potentially land in the lobby area.</p>
        </details>
        <details>
          <summary><h4>Alley Closet</h4></summary>
          <p>The alley closet can be used to clip by exploiting the doors hitbox. To do so, open the door from the inside and run to the boxes in the right of the closet. If you sucessfully get behind the door you will fall out of bounds and may land in the partment.</p>
        </details>
        <br>
      </details>
      <details>
        <summary><h3>Quick Navigation</h3></summary>
        <p>Quick Back Navigation is a simple exploit that exists for an unknown reason. When you press backspace on the A.N.N. browser it will take you to a visual copy of the website that you were in last. Pressing backspace subsequent times will take you to the next site in your browsing history and so on. While the copies you will see look identical to the webpages you visited, they will not have clickpoints and you can not open their source code.</p>
		<p>Additionally, this exploit can cause a bug on websites featuring recurring audio. If used on those pages their audio will continue to play after you leave the website. To fix the bug, you must close A.N.N. while you are loading into the website whose audio is glitched. Doing so should fix the bug.</p>
      </details>
	  <details>
        <summary><h3>The Copy Bug</h3></summary>
        <p>A nototiously annoying bug is the Copy Bug. It is triggered by using alt+tab while the game is not paused. When this bug is active all attempts to copy website content such as keys will fail. To fix the bug you must click inside the A.N.N. browser while holding alt</p>
      </details>
	  `},
	{"name":`<i class="fa fa-circle fa-lg"></i> Miscellaneous`,"content":`
    <h1>Miscellaneous</h1>
      <h2>Miscellaneous Info</h2>
        <p>Contrary to many popular myths, there are only one naturally occuring ambient sound cue that has meaning. This sound cue is the Hitman lockpicking your door.</p>
        <p>It is not possible to hide from the police. Once they are at your door they will stay there until you approach them.</p>
        <p>When placing remote VPNs, both walls of each hallway have identical color zones.</p>
      <h2>Fun Facts</h2>
        <p>There is actually a page on Bug Friendly in which nudity is shown because it was improperly programmed.</p>
        <p>YOU THERE? uses minimal text despite it's appearance.</p>
        <p>The center photo on ISEVIL is a picture of an untreated snake bite.</p>
        <p>On the yellow sub-page of Don't waste it, the boy located on the left of the photo moves a few seconds after the page is loaded.</p>
        <p>The name for the Hitman is a reference to a moderater in Adam's twitch channel. In addition, the brand name for the police scanner is a direct reference to their username.</p>
        <p>There is a bug in the game where if you lean into certain walls or run up against an elevator, you may trigger an easter egg where you are teleported inside an elevator. This is believed to be a form of noclip or glitch protection.</p>
        <p>The landing page photo on I Love Cats was sourced from a popular furry site named furaffinity and modified before being used inside the game. The user who posted the orginal photo was named MethLab.</p>
      `},
    {"name":`<i class="fa fa-dot-circle-o fa-lg"></i> Hitman Simulator`,"content":`
    <h1>Hitman Simulator</h1>
      <p>The button below will open a simulator for the Hitmans lockpicking noise. Once you hear it, you should go to the widget for the simulator and click 'I heard that'. It will then tell you if you correct or incorrect. It will play five seconds after you start the simulation as a test, after that you must pay attention for when it plays. If you fail to catch a noise it plays, it will tell you that you have died and will continue the simulator as normal.</p>
      <button onclick="simulatorlaunch()">Launch Simulator</button>`},
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
    "keys":["","????????????","????????????","????????????","????????????","????????????","????????????","????????????","????????????"],
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
    d.innerHTML = `<button class="${(v == 1) ? "disabled":""}" ${(v !== 1) ? 'onclick="sitepreview(' + o + ')"':""}><i class="fa fa-mouse-pointer fa-lg"></i></button> <button class="${(v == 1) ? "disabled":"secondary"}" ${(v !== 1) ? 'onclick="toggle(this)"':""}><i class="fa fa-search fa-lg"></i></button><button class="${(v == 1) ? "disabled":"secondary"}" ${(v !== 1) ? 'onclick="toggle(this)"':""}><i class="fa fa-search-plus fa-lg"></i></button><button class="${(v == 1) ? "disabled":"secondary"}" ${(v !== 1) ? 'onclick="toggle(this,1)"':""}><i class="fa fa-key fa-lg"></i></button><button class="${(v == 1) ? "disabled":"secondary"}" ${(v !== 1) ? 'onclick="toggle(this)"':""}><i class="fa fa-link fa-lg"></i></button>`
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
  if (data.note.keys.indexOf("????????????") == -1) {document.getElementById("keyoutput").innerHTML = `<b>Master Key</b><br>${data.note.keys.join("")}`;}
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