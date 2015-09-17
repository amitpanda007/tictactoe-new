myApp.controller("gameController",["$scope","$rootScope","$location","$firebaseAuth","$firebaseArray","$firebaseObject","$timeout","$http","FIREBASE_URL",function(e,n,i,r,t,o,s,l,a){var c=new Firebase(a),u=r(c),m=new Firebase(a+"games/"),d=(t(m),new Firebase(a+"games/multiplayersessions/"+e.multiplayerFirebase+"/countX/"),new Firebase(a+"games/multiplayersessions/"+e.multiplayerFirebase+"/countY/"),new Firebase(a+"games/incomingconnection/")),g=t(d),h=new Firebase(a+"games/apiresquests/"),p=t(h),f=new Firebase(a+"games/multiplayersessions/"),w=t(f),W=new Firebase(a+"games/multiplayersessions/"+e.multiplayerFirebase+"/"),y=(o(W),new Firebase(a+"games/onlinegame/")),X=t(y);e.countX=[],e.countY=[],e.turnTime=10,e.gameFinish=!1,u.$onAuth(function(e){e||i.path("/login")}),X.$watch(function(n){X.$loaded().then(function(n){e.users=n,e.playerOnlineCount(e.users)})}),e.playerOnlineCount=function(n){var i=n.length;angular.forEach(n,function(e,r){("busy"==n.status||"offline"==n.status)&&i--}),e.playersOnline=i-8},p.$watch(function(n){n.key==e.fullname&&(e.scorePost=p.$getRecord(e.fullname),1==e.scorePost.$value&&e.apiScorePost())}),g.$watch(function(n){n.key==e.fullname&&(e.incomingConnect=g.$getRecord(e.fullname).connectionFrom,e.sendingConnect=g.$getRecord(e.fullname).connectingTo,e.multiplayerFirebase=g.$getRecord(e.fullname).currentlyPlaying,e.playMode=g.$getRecord(e.fullname).playMode,e.startingGame=g.$getRecord(e.fullname).connecting,e.swapReq=g.$getRecord(e.fullname).swapRequest,e.rejected=g.$getRecord(e.fullname).rejectStatus,e.timerActive=g.$getRecord(e.fullname).timerStart,e.gameReset=g.$getRecord(e.fullname).resetSet,e.win(),e.gameReset&&e.resetGame(),e.timerActive&&e.turnTimer(11),"X"==e.playMode?e.opponentPlaymode="O":e.opponentPlaymode="X",""!=e.incomingConnect||""!=e.sendingConnect?e.multiplayerRequest=!0:""==e.incomingConnect&&""==e.sendingConnect&&(e.multiplayerRequest=!1))}),w.$watch(function(n){var i=new Firebase(a+"games/multiplayersessions/"+e.multiplayerFirebase+"/"),r=new Firebase(a+"games/multiplayersessions/"+e.multiplayerFirebase+"/countX/"),s=new Firebase(a+"games/multiplayersessions/"+e.multiplayerFirebase+"/countY/"),l=o(i),c=t(r),u=t(s);c.$loaded().then(function(n){e.countX=c.length}),u.$loaded().then(function(n){e.countY=u.length}),l.$id==e.multiplayerFirebase&&l.$bindTo(e,"pleyerMovement").then(function(){e.one=e.pleyerMovement.one,e.two=e.pleyerMovement.two,e.three=e.pleyerMovement.three,e.four=e.pleyerMovement.four,e.five=e.pleyerMovement.five,e.six=e.pleyerMovement.six,e.seven=e.pleyerMovement.seven,e.eight=e.pleyerMovement.eight,e.nine=e.pleyerMovement.nine,e.winner=e.pleyerMovement.Winner,e.xwin=e.pleyerMovement.Xwin,e.owin=e.pleyerMovement.Owin,e.draw=e.pleyerMovement.Draw,e.playerTurn=e.pleyerMovement.turn,e.gameFinish=e.pleyerMovement.GameFinish,e.multiplayerBegin=e.pleyerMovement.multiplayerBegin,e.getWinnerName(e.xwin,e.owin),e.win()}),e.getScores()}),e.playerChoice=function(n){var i=new Firebase(a+"games/multiplayersessions/"+e.multiplayerFirebase+"/"),r=new Firebase(a+"games/incomingconnection/"+e.fullname+"/"),t=new Firebase(a+"games/incomingconnection/"+e.incomingConnect+"/");"X"==n?(r.child("playMode").set("X"),t.child("playMode").set("O"),i.child("multiplayerBegin").set(!0)):"O"==n?(r.child("playMode").set("O"),t.child("playMode").set("X"),i.child("multiplayerBegin").set(!0)):(e.playerElementSelected=!1,i.child("multiplayerBegin").set(!1))},e.boxClick=function(n){var i=new Firebase(a+"games/multiplayersessions/"+e.multiplayerFirebase+"/"),r=new Firebase(a+"games/multiplayersessions/"+e.multiplayerFirebase+"/countX/"),o=new Firebase(a+"games/multiplayersessions/"+e.multiplayerFirebase+"/countY/"),s=t(r),l=t(o);e.gameFinish||(1===n?"X"!=e.one&&"O"!=e.one&&(e.countX<e.countY?"O"==e.playMode&&(i.child("one").set("O"),s.$add({X:"1"}),e.turnUser(e.fullname)):"X"==e.playMode&&(i.child("one").set("X"),l.$add({X:"0"}),e.turnUser(e.fullname))):2===n?"X"!=e.two&&"O"!=e.two&&(e.countX<e.countY?"O"==e.playMode&&(i.child("two").set("O"),s.$add({X:"1"}),e.turnUser(e.fullname)):"X"==e.playMode&&(i.child("two").set("X"),l.$add({X:"0"}),e.turnUser(e.fullname))):3===n?"X"!=e.three&&"O"!=e.three&&(e.countX<e.countY?"O"==e.playMode&&(i.child("three").set("O"),s.$add({X:"1"}),e.turnUser(e.fullname)):"X"==e.playMode&&(i.child("three").set("X"),l.$add({X:"0"}),e.turnUser(e.fullname))):4===n?"X"!=e.four&&"O"!=e.four&&(e.countX<e.countY?"O"==e.playMode&&(i.child("four").set("O"),s.$add({X:"1"}),e.turnUser(e.fullname)):"X"==e.playMode&&(i.child("four").set("X"),l.$add({X:"0"}),e.turnUser(e.fullname))):5===n?"X"!=e.five&&"O"!=e.five&&(e.countX<e.countY?"O"==e.playMode&&(i.child("five").set("O"),s.$add({X:"1"}),e.turnUser(e.fullname)):"X"==e.playMode&&(i.child("five").set("X"),l.$add({X:"0"}),e.turnUser(e.fullname))):6===n?"X"!=e.six&&"O"!=e.six&&(e.countX<e.countY?"O"==e.playMode&&(i.child("six").set("O"),s.$add({X:"1"}),e.turnUser(e.fullname)):"X"==e.playMode&&(i.child("six").set("X"),l.$add({X:"0"}),e.turnUser(e.fullname))):7===n?"X"!=e.seven&&"O"!=e.seven&&(e.countX<e.countY?"O"==e.playMode&&(i.child("seven").set("O"),s.$add({X:"1"}),e.turnUser(e.fullname)):"X"==e.playMode&&(i.child("seven").set("X"),l.$add({X:"0"}),e.turnUser(e.fullname))):8===n?"X"!=e.eight&&"O"!=e.eight&&(e.countX<e.countY?"O"==e.playMode&&(i.child("eight").set("O"),s.$add({X:"1"}),e.turnUser(e.fullname)):"X"==e.playMode&&(i.child("eight").set("X"),l.$add({X:"0"}),e.turnUser(e.fullname))):9===n&&"X"!=e.nine&&"O"!=e.nine&&(e.countX<e.countY?"O"==e.playMode&&(i.child("nine").set("O"),s.$add({X:"1"}),e.turnUser(e.fullname)):"X"==e.playMode&&(i.child("nine").set("X"),l.$add({X:"0"}),e.turnUser(e.fullname))))},e.setgameReset=function(){d.child(e.fullname).child("resetSet").set(!0),d.child(e.incomingConnect||e.sendingConnect).child("resetSet").set(!0)},e.resetGame=function(){e.one="",e.two="",e.three="",e.four="",e.five="",e.six="",e.seven="",e.eight="",e.nine="",e.winner=null,e.countX=[],e.countY=[],e.xwin=!1,e.owin=!1,e.draw=!1,e.playerTurn="",e.gameFinish=!1,e.multiplayerBegin=!0,e.oneWinner="",e.twoWinner="",e.threeWinner="",e.fourWinner="",e.fiveWinner="",e.sixWinner="",e.sevenWinner="",e.eightWinner="",e.nineWinner="",f.child(e.multiplayerFirebase).set({one:"",two:"",three:"",four:"",five:"",six:"",seven:"",eight:"",nine:"",countX:"",countY:"",Winner:"",turn:"",Xwin:!1,Owin:!1,Draw:!1,turn:"",GameFinish:!1,multiplayerBegin:!0}),d.child(e.fullname).child("timerStart").set(!1),d.child(e.incomingConnect||e.sendingConnect).child("timerStart").set(!1),d.child(e.fullname).child("resetSet").set(!1),h.child(e.fullname).set(!1),h.child(e.incomingConnect||e.sendingConnect).set(!1)},e.win=function(){var n=new Firebase(a+"games/multiplayersessions/"+e.multiplayerFirebase+"/");"X"==e.one&&"X"==e.two&&"X"==e.three||"X"==e.four&&"X"==e.five&&"X"==e.six||"X"==e.seven&&"X"==e.eight&&"X"==e.nine||"X"==e.one&&"X"==e.four&&"X"==e.seven||"X"==e.two&&"X"==e.five&&"X"==e.eight||"X"==e.three&&"X"==e.six&&"X"==e.nine||"X"==e.one&&"X"==e.five&&"X"==e.nine||"X"==e.three&&"X"==e.five&&"X"==e.seven?(n.child("Xwin").set(!0),n.child("GameFinish").set(!0),"X"==e.one&&"X"==e.two&&"X"==e.three?(e.oneWinner="winner",e.twoWinner="winner",e.threeWinner="winner",e.fourWinner="loser",e.fiveWinner="loser",e.sixWinner="loser",e.sevenWinner="loser",e.eightWinner="loser",e.nineWinner="loser"):"X"==e.four&&"X"==e.five&&"X"==e.six?(e.oneWinner="loser",e.twoWinner="loser",e.threeWinner="loser",e.fourWinner="winner",e.fiveWinner="winner",e.sixWinner="winner",e.sevenWinner="loser",e.eightWinner="loser",e.nineWinner="loser"):"X"==e.seven&&"X"==e.eight&&"X"==e.nine?(e.oneWinner="loser",e.twoWinner="loser",e.threeWinner="loser",e.fourWinner="loser",e.fiveWinner="loser",e.sixWinner="loser",e.sevenWinner="winner",e.eightWinner="winner",e.nineWinner="winner"):"X"==e.one&&"X"==e.four&&"X"==e.seven?(e.oneWinner="winner",e.twoWinner="loser",e.threeWinner="loser",e.fourWinner="winner",e.fiveWinner="loser",e.sixWinner="loser",e.sevenWinner="winner",e.eightWinner="loser",e.nineWinner="loser"):"X"==e.two&&"X"==e.five&&"X"==e.eight?(e.oneWinner="loser",e.twoWinner="winner",e.threeWinner="loser",e.fourWinner="loser",e.fiveWinner="winner",e.sixWinner="loser",e.sevenWinner="loser",e.eightWinner="winner",e.nineWinner="loser"):"X"==e.three&&"X"==e.six&&"X"==e.nine?(e.oneWinner="loser",e.twoWinner="loser",e.threeWinner="winner",e.fourWinner="loser",e.fiveWinner="loser",e.sixWinner="winner",e.sevenWinner="loser",e.eightWinner="loser",e.nineWinner="winner"):"X"==e.one&&"X"==e.five&&"X"==e.nine?(e.oneWinner="winner",e.twoWinner="loser",e.threeWinner="loser",e.fourWinner="loser",e.fiveWinner="winner",e.sixWinner="loser",e.sevenWinner="loser",e.eightWinner="loser",e.nineWinner="winner"):"X"==e.three&&"X"==e.five&&"X"==e.seven&&(e.oneWinner="loser",e.twoWinner="loser",e.threeWinner="winner",e.fourWinner="loser",e.fiveWinner="winner",e.sixWinner="loser",e.sevenWinner="winner",e.eightWinner="loser",e.nineWinner="loser")):"O"==e.one&&"O"==e.two&&"O"==e.three||"O"==e.four&&"O"==e.five&&"O"==e.six||"O"==e.seven&&"O"==e.eight&&"O"==e.nine||"O"==e.one&&"O"==e.four&&"O"==e.seven||"O"==e.two&&"O"==e.five&&"O"==e.eight||"O"==e.three&&"O"==e.six&&"O"==e.nine||"O"==e.one&&"O"==e.five&&"O"==e.nine||"O"==e.three&&"O"==e.five&&"O"==e.seven?(n.child("Owin").set(!0),n.child("GameFinish").set(!0),"O"==e.one&&"O"==e.two&&"O"==e.three?(e.oneWinner="winner",e.twoWinner="winner",e.threeWinner="winner",e.fourWinner="loser",e.fiveWinner="loser",e.sixWinner="loser",e.sevenWinner="loser",e.eightWinner="loser",e.nineWinner="loser"):"O"==e.four&&"O"==e.five&&"O"==e.six?(e.oneWinner="loser",e.twoWinner="loser",e.threeWinner="loser",e.fourWinner="winner",e.fiveWinner="winner",e.sixWinner="winner",e.sevenWinner="loser",e.eightWinner="loser",e.nineWinner="loser"):"O"==e.seven&&"O"==e.eight&&"O"==e.nine?(e.oneWinner="loser",e.twoWinner="loser",e.threeWinner="loser",e.fourWinner="loser",e.fiveWinner="loser",e.sixWinner="loser",e.sevenWinner="winner",e.eightWinner="winner",e.nineWinner="winner"):"O"==e.one&&"O"==e.four&&"O"==e.seven?(e.oneWinner="winner",e.twoWinner="loser",e.threeWinner="loser",e.fourWinner="winner",e.fiveWinner="loser",e.sixWinner="loser",e.sevenWinner="winner",e.eightWinner="loser",e.nineWinner="loser"):"O"==e.two&&"O"==e.five&&"O"==e.eight?(e.oneWinner="loser",e.twoWinner="winner",e.threeWinner="loser",e.fourWinner="loser",e.fiveWinner="winner",e.sixWinner="loser",e.sevenWinner="loser",e.eightWinner="winner",e.nineWinner="loser"):"O"==e.three&&"O"==e.six&&"O"==e.nine?(e.oneWinner="loser",e.twoWinner="loser",e.threeWinner="winner",e.fourWinner="loser",e.fiveWinner="loser",e.sixWinner="winner",e.sevenWinner="loser",e.eightWinner="loser",e.nineWinner="winner"):"O"==e.one&&"O"==e.five&&"O"==e.nine?(e.oneWinner="winner",e.twoWinner="loser",e.threeWinner="loser",e.fourWinner="loser",e.fiveWinner="winner",e.sixWinner="loser",e.sevenWinner="loser",e.eightWinner="loser",e.nineWinner="winner"):"O"==e.three&&"O"==e.five&&"O"==e.seven&&(e.oneWinner="loser",e.twoWinner="loser",e.threeWinner="winner",e.fourWinner="loser",e.fiveWinner="winner",e.sixWinner="loser",e.sevenWinner="winner",e.eightWinner="loser",e.nineWinner="loser")):5===e.countY&&4===e.countX&&0==e.gameFinish&&0==e.xwin&&0==e.owin&&(n.child("Draw").set(!0),n.child("GameFinish").set(!0),e.oneWinner="tie",e.twoWinner="tie",e.threeWinner="tie",e.fourWinner="tie",e.fiveWinner="tie",e.sixWinner="tie",e.sevenWinner="tie",e.eightWinner="tie",e.nineWinner="tie")},e.gameSelect=function(){e.fullname=n.currentUser.firstname+" "+n.currentUser.lastname,"undefined undefined"!=e.fullname&&(d.child(e.fullname).set({connectingTo:"",connectionFrom:"",currentlyPlaying:""}),y.child(e.fullname).set({status:"online",name:e.fullname}),e.tictactoe=!0,e.multiplayerBegin=!1)},e.allGame=function(){y.child(e.fullname).set({status:"offline",name:e.fullname}),d.child(e.fullname).set({connectingTo:"",connectionFrom:"",currentlyPlaying:""}),d.child(e.incomingConnect).set({connectionFrom:"",connectingTo:"",currentlyPlaying:""}),e.tictactoe=!1,e.gameFinish=!1},e.startMultiplayer=function(n){y.child(e.fullname).set({status:"busy",name:e.fullname}),d.child(e.fullname).set({connectingTo:n,connectionFrom:"",currentlyPlaying:"",rejectStatus:!1}),d.child(n).set({connectionFrom:e.fullname,connectingTo:"",currentlyPlaying:"",rejectStatus:!1}),e.userConnectingTo=n},e.acceptGameRequest=function(){e.playerElementSelected=!0,e.multiplayerFirebase=e.fullname+" vs "+e.incomingConnect,f.child(e.multiplayerFirebase).set({one:"",two:"",three:"",four:"",five:"",six:"",seven:"",eight:"",nine:"",countX:"",countY:"",Winner:"",turn:"",Xwin:!1,Owin:!1,Draw:!1,GameFinish:!1,multiplayerBegin:!1}),y.child(e.fullname).set({status:"busy",name:e.fullname}),d.child(e.fullname).set({connectingTo:"",connectionFrom:e.incomingConnect,currentlyPlaying:e.multiplayerFirebase,swapRequest:!1,rejectStatus:!1,timerStart:!1,resetSet:!1}),d.child(e.incomingConnect).set({connectionFrom:"",connectingTo:e.fullname,connecting:!0,currentlyPlaying:e.multiplayerFirebase,swapRequest:!1,rejectStatus:!1,timerStart:!1,resetSet:!1}),h.child(e.fullname).set(!1),h.child(e.incomingConnect||e.sendingConnect).set(!1)},e.rejectGameRequest=function(){var n=new Firebase(a+"games/incomingconnection/"+e.incomingConnect+"/");e.multiplayerRequest=!1,n.child("rejectStatus").set(!0),s(function(){d.child(e.fullname).set({connectingTo:"",connectionFrom:"",currentlyPlaying:"",rejectStatus:!1}),d.child(e.incomingConnect).set({connectingTo:"",connectionFrom:"",currentlyPlaying:"",rejectStatus:!1}),y.child(e.incomingConnect).set({status:"online",name:e.incomingConnect})},2e3)},e.getWinnerName=function(n,i){var r=new Firebase(a+"games/multiplayersessions/"+e.multiplayerFirebase+"/"),t=new Firebase(a+"games/apiresquests/");1==n&&"X"==e.playMode&&(r.child("Winner").set(e.fullname),t.child(e.fullname).set(!0)),1==i&&"O"==e.playMode&&(r.child("Winner").set(e.fullname),t.child(e.fullname).set(!0))},e.apiScorePost=function(){1==e.xwin&&"X"==e.playMode&&l.get("https://multitactoe.herokuapp.com/api/scores").success(function(n){e.ScoresLocal=n,angular.forEach(e.ScoresLocal,function(n,i){n.name==e.fullname&&(e.mongoDB_ID=n._id,e.mongoDB_Name=n.name,e.mongoDB_Wins=n.wins,e.mongoDB_Lost=n.lost,e.scoreData={name:e.mongoDB_Name,wins:e.mongoDB_Wins+1,lost:e.mongoDB_Lost},l({method:"PUT",url:"https://multitactoe.herokuapp.com/api/scores/"+e.mongoDB_ID,header:"Content-Type:application/json",data:e.scoreData}).then(function(e){console.log("Scores Updated")},function(e){console.log("Error Occured")})),n.name==(e.incomingConnect||e.sendingConnect)&&(e.mongoDB_ID_op=n._id,e.mongoDB_Name_op=n.name,e.mongoDB_Wins_op=n.wins,e.mongoDB_Lost_op=n.lost,e.scoreData_op={name:e.mongoDB_Name_op,wins:e.mongoDB_Wins_op,lost:e.mongoDB_Lost_op+1},l({method:"PUT",url:"https://multitactoe.herokuapp.com/api/scores/"+e.mongoDB_ID_op,header:"Content-Type:application/json",data:e.scoreData_op}).then(function(e){console.log("Scores Updated")},function(e){console.log("Error Occured")}))}),s(function(){e.getScores()},3e3)}),1==e.owin&&"O"==e.playMode&&l.get("https://multitactoe.herokuapp.com/api/scores").success(function(n){e.ScoresLocal=n,angular.forEach(e.ScoresLocal,function(n,i){n.name==e.fullname&&(e.mongoDB_ID=n._id,e.mongoDB_Name=n.name,e.mongoDB_Wins=n.wins,e.mongoDB_Lost=n.lost,e.scoreData={name:e.mongoDB_Name,wins:e.mongoDB_Wins+1,lost:e.mongoDB_Lost},l({method:"PUT",url:"https://multitactoe.herokuapp.com/api/scores/"+e.mongoDB_ID,header:"Content-Type:application/json",data:e.scoreData}).then(function(e){console.log("Scores Updated")},function(e){console.log("Error Occured")})),n.name==(e.incomingConnect||e.sendingConnect)&&(e.mongoDB_ID_op=n._id,e.mongoDB_Name_op=n.name,e.mongoDB_Wins_op=n.wins,e.mongoDB_Lost_op=n.lost,e.scoreData_op={name:e.mongoDB_Name_op,wins:e.mongoDB_Wins_op,lost:e.mongoDB_Lost_op+1},l({method:"PUT",url:"https://multitactoe.herokuapp.com/api/scores/"+e.mongoDB_ID_op,header:"Content-Type:application/json",data:e.scoreData_op}).then(function(e){console.log("Scores Updated")},function(e){console.log("Error Occured")}))}),s(function(){e.getScores()},3e3)})},e.turnUser=function(n){var i=new Firebase(a+"games/multiplayersessions/"+e.multiplayerFirebase+"/");i.child("turn").set(e.incomingConnect||e.sendingConnect),e.turnTime=11,0==e.gameFinish&&e.countY<5?e.playerTurn==(e.incomingConnect||e.sendingConnect)?(d.child(e.fullname).child("timerStart").set(!1),d.child(e.incomingConnect||e.sendingConnect).child("timerStart").set(!0)):(d.child(n).child("timerStart").set(!1),d.child(e.incomingConnect||e.sendingConnect).child("timerStart").set(!0)):(d.child(e.fullname).child("timerStart").set(!1),d.child(e.incomingConnect||e.sendingConnect).child("timerStart").set(!1))},e.turnTimer=function(n){new Firebase(a+"games/multiplayersessions/"+e.multiplayerFirebase+"/");if(0==e.gameFinish){e.turnTime=n;s(function(){e.turnTime--,e.turnTime>0&&e.timerActive?e.turnTimer(e.turnTime):0==e.turnTime&&e.timerActive&&e.timesUp()},1e3)}},e.timesUp=function(){var n=new Firebase(a+"games/multiplayersessions/"+e.multiplayerFirebase+"/"),i=new Firebase(a+"games/multiplayersessions/"+e.multiplayerFirebase+"/countX/"),r=new Firebase(a+"games/multiplayersessions/"+e.multiplayerFirebase+"/countY/"),o=t(i),s=t(r);if(0==e.gameFinish){var l=function(){for(var e=9;e>=0;e--){var n=Math.floor(10*Math.random()+1);return n}};switch(l()){case 1:""==e.one?(n.child("one").set(e.playMode),"X"==e.playMode?s.$add({X:"0"}):o.$add({X:"1"}),e.turnUser(e.fullname)):e.timesUp();break;case 2:""==e.two?(n.child("two").set(e.playMode),"X"==e.playMode?s.$add({X:"0"}):o.$add({X:"1"}),e.turnUser(e.fullname)):e.timesUp();break;case 3:""==e.three?(n.child("three").set(e.playMode),"X"==e.playMode?s.$add({X:"0"}):o.$add({X:"1"}),e.turnUser(e.fullname)):e.timesUp();break;case 4:""==e.four?(n.child("four").set(e.playMode),"X"==e.playMode?s.$add({X:"0"}):o.$add({X:"1"}),e.turnUser(e.fullname)):e.timesUp();break;case 5:""==e.five?(n.child("five").set(e.playMode),"X"==e.playMode?s.$add({X:"0"}):o.$add({X:"1"}),e.turnUser(e.fullname)):e.timesUp();break;case 6:""==e.six?(n.child("six").set(e.playMode),"X"==e.playMode?s.$add({X:"0"}):o.$add({X:"1"}),e.turnUser(e.fullname)):e.timesUp();break;case 7:""==e.seven?(n.child("seven").set(e.playMode),"X"==e.playMode?s.$add({X:"0"}):o.$add({X:"1"}),e.turnUser(e.fullname)):e.timesUp();break;case 8:""==e.eight?(n.child("eight").set(e.playMode),"X"==e.playMode?s.$add({X:"0"}):o.$add({X:"1"}),e.turnUser(e.fullname)):e.timesUp();break;case 9:""==e.nine?(n.child("nine").set(e.playMode),"X"==e.playMode?s.$add({X:"0"}):o.$add({X:"1"}),e.turnUser(e.fullname)):e.timesUp();break;default:e.win(),e.timesUp()}}},e.swapRequest=function(){if(e.incomingConnect){var n=new Firebase(a+"games/incomingconnection/"+e.incomingConnect+"/"),i=new Firebase(a+"games/incomingconnection/"+e.fullname+"/");n.child("swapRequest").set(!0),i.child("swapRequest").set(!0)}else if(e.sendingConnect){var n=new Firebase(a+"games/incomingconnection/"+e.sendingConnect+"/"),i=new Firebase(a+"games/incomingconnection/"+e.fullname+"/");n.child("swapRequest").set(!0),i.child("swapRequest").set(!0)}},e.swapConfirm=function(n){if(n){if(e.incomingConnect){var i=new Firebase(a+"games/incomingconnection/"+e.incomingConnect+"/"),r=new Firebase(a+"games/incomingconnection/"+e.fullname+"/");i.child("playMode").set("X"),r.child("playMode").set("O"),i.child("swapRequest").set(!1),r.child("swapRequest").set(!1)}else if(e.sendingConnect){var i=new Firebase(a+"games/incomingconnection/"+e.sendingConnect+"/"),r=new Firebase(a+"games/incomingconnection/"+e.fullname+"/");i.child("playMode").set("X"),r.child("playMode").set("O"),i.child("swapRequest").set(!1),r.child("swapRequest").set(!1)}}else if(e.incomingConnect){var i=new Firebase(a+"games/incomingconnection/"+e.incomingConnect+"/"),r=new Firebase(a+"games/incomingconnection/"+e.fullname+"/");i.child("rejectStatus").set(!0),r.child("swapRequest").set(!1),s(function(){i.child("rejectStatus").set(!1),i.child("swapRequest").set(!1)},2e3)}else if(e.sendingConnect){var i=new Firebase(a+"games/incomingconnection/"+e.sendingConnect+"/"),r=new Firebase(a+"games/incomingconnection/"+e.fullname+"/");i.child("rejectStatus").set(!0),r.child("swapRequest").set(!1),s(function(){i.child("rejectStatus").set(!1),i.child("swapRequest").set(!1)},2e3)}},e.getScores=function(){l.get("https://multitactoe.herokuapp.com/api/scores").success(function(n){e.Scores=n})}}]);