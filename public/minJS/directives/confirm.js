myApp.directive("confirmationNeeded",function(){return{priority:1,terminal:!0,link:function(i,n,e){var t=e.confirmationNeeded||"Are you sure you want to delete this item ?",o=e.ngClick;n.bind("click",function(){window.confirm(t)&&i.$eval(o)})}}});