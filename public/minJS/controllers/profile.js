myApp.controller("profileController",["$scope","FIREBASE_URL",function(e,s){var a=new Firebase(s);e.passChangeForm=function(){e.passwordFormShow=!0},e.changePassword=function(){a.changePassword({email:e.user.email,oldPassword:e.user.oldPassword,newPassword:e.user.newPassword},function(s){if(s)switch(s.code){case"INVALID_PASSWORD":e.changeFailed="The Specified Account Password is Incorrect !";break;case"INVALID_USER":e.changeFailed="The Specified User Doesnot Exist !";break;default:e.changeFailed="Error Changing Password : ",s.toString()}else e.changeFailed="",e.changeSuccess="Your Password Successfully Changed !"})}}]);