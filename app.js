var page = window.location.pathname.substr(window.location.pathname.length - 9,window.location.pathname.length);//uses the last 9ish characters of the filename to decide what code to use
console.log(page);
 var data = [];

var displayIndividualRecords = function(){//function that sets the buttons for if there is data at that month
    
    
    
    
    
    
    var displayData = function(){//only displays data relating to the current month displayed
      
    var monthRecord = [];
    for(var i = 0; i <data.length; i++){
        var testing = document.querySelector('.budget__title--month').textContent;
       
        
        if(data[i].month == testing){//If the value of data[i] has the same month as current
            
            monthRecord[monthRecord.length] = data[i];//parses data between files
   
       
                }
        
            }
    return monthRecord;//return it to mess with the variable
}

    
    
    
    
    var stuffs = displayData();//sets the result of the function to use in the displaying function
    var time =  document.querySelector('.budget__title--month').textContent;
    if((time == 'August') || (time == 'January') || (time == 'March') || (time == 'May') || (time == 'July') || (time == 'October') || (time == 'December')){
            var setbtns = document.querySelectorAll('.btn');//sets all the buttons for each month
                    setbtns.forEach(function(currentValue, currentIndex) { 
                               
                        
                        for(var i = 0; i<stuffs.length;i++){
                                                if(stuffs[i].date == currentIndex+1){
                                                    
                                                    document.querySelector('.btn-' + currentIndex).classList.add('taskSpace');//adds a border as a form to highligh there is a task there
                                                }
                                            }
                        
                                    document.querySelector('.btn-' + currentIndex).addEventListener('click', function(){//adds an event listen where when clicked displays the task
                                                
                                            for(var i = 0; i<stuffs.length;i++){
                                                if(stuffs[i].date == currentIndex+1){
                                                    alert(stuffs[i].task);
                                                  
                                                }
                                            }
                                    });
                            });
       
        }
        if((time == 'April') || (time == 'June') || (time == 'September') || (time == 'November') ){
          var setbtns = document.querySelectorAll('.btn');
                    setbtns.forEach(function(currentValue, currentIndex) { 
                                
                            for(var i = 0; i<stuffs.length;i++){
                                                if(stuffs[i].date == currentIndex+1){
                                                    
                                                    document.querySelector('.btn-' + currentIndex).classList.add('taskSpace');
                                                }
                                            }
                        
                        
                                    document.querySelector('.btn-' + currentIndex).addEventListener('click', function(){
                                                
                                            for(var i = 0; i<stuffs.length;i++){
                                                if(stuffs[i].date == currentIndex+1){
                                                 alert(stuffs[i].task);
                                                }
                                                
                                            }
                                    });
                            });
          
    }
    else if(time == 'February'){
            var setbtns = document.querySelectorAll('.btn');
                    setbtns.forEach(function(currentValue, currentIndex) { 
                              
                        
                            for(var i = 0; i<stuffs.length;i++){
                                                if(stuffs[i].date == currentIndex+1){
                                                    
                                                    document.querySelector('.btn-' + currentIndex).classList.add('taskSpace');
                                                }
                                            }
                        
                        
                                    document.querySelector('.btn-' + currentIndex).addEventListener('click', function(){
                                                
                                            for(var i = 0; i<stuffs.length;i++){
                                                if(stuffs[i].date == currentIndex+1){
                                                    alert(stuffs[i].task);
                                                    //console.log(stuffs[i]);
                                                }
                                            }
                                    });
                            });
            
    
    }
}

var Pages = (function(title){
    
    
    if(title == 'ndex.html'){//code for the Index page only
           ///////////////////////////////////////////////////////////////////////////////////
        //          INDEX HTML SECTION
        ///////////////////////////////////////////////////////////////////////////////////

        var addTasks = function(){
               if(document.querySelector('#Task').value == 0) {
                                        alert('Please Fill out all sections.');//makes you fill it out
     
                                        }
         else{
          
      var Months = document.querySelector('#Month').value;
      var Date = document.querySelector('#Date').value;//reads values from inputs
      var Task = document.querySelector('#Task').value;
            var tasksstring;
                                 /* if((document.querySelector('#Exercise').value == 0) || (document.querySelector('.Sets').value == 0) ||   ( document.querySelector('.Reps').value == 0)){
                                        alert('Please Fill out all sections.');
     
                                        }*/
   tasks[tasks.length] = new record(Months, Date, Task);
       
        document.cookie =   tasks[tasks.length-1].month + ',' + tasks[tasks.length-1].date + ',' + tasks[tasks.length-1].task + '=' + tasks.length;// the last task gets added to the cookie in the form 'month,date,task=x where x is a number
     
         
    
           
        }
}
    
document.querySelector('.Selection-btn').addEventListener('click', addTasks);//adds task on click
        document.addEventListener('keypress', function(event) {//How the Data is initialised into the system

                             if(event.keyCode === 13 || event.which === 13){//adds task on enter
                                   
                                  if(document.querySelector('#Task').value == 0) {
                                        alert('Please Fill out all sections.');
     
                                        }
                                 else{
                                     addTasks();
                                  
                                 }
                                    }
    
                             });
       
    }
    else if(title == 'View.html'){
        ///////////////////////////////////////////////////////////////////////////////////
        //          VIEW HTML SECTION
        ///////////////////////////////////////////////////////////////////////////////////
           
        
    
        
        var displayMonth = (function(){


            var now, year, month, months;
            months = ['January', 'February' , 'March', 'April', 'May', 'June', 'July' , 'August', 'September', 'October', 'November', 'December'];
            now = new Date();
            month = now.getMonth();
          
            document.querySelector('.budget__title--month').textContent = months[month];//displays month
           
        })();//chooses the current month
        


   

var changeMonthRight = function(){
//changes what the month is
    if(month < 12){
    month++;
    }
    else{
        month = 1;
    }
      var months;
            months = ['January', 'February' , 'March', 'April', 'May', 'June', 'July' , 'August', 'September', 'October', 'November', 'December'];
     
          
            document.querySelector('.budget__title--month').textContent = months[month-1];
    addViewHTML(month);//calls function to change the month
    displayIndividualRecords();//calls function to filter the data again
}
var changeMonthLeft = function(){

    if(month > 1){
    month--;
    }
    else{
        month = 12;
    }
      var months;
            months = ['January', 'February' , 'March', 'April', 'May', 'June', 'July' , 'August', 'September', 'October', 'November', 'December'];
     
          
            document.querySelector('.budget__title--month').textContent = months[month-1];
    addViewHTML(month);
    displayIndividualRecords();
}




 document.querySelector('.left').addEventListener('click', changeMonthLeft );//calls the function on click
   document.querySelector('.right').addEventListener('click', changeMonthRight);
    
        
        var addViewHTML = function(month){//Used to set the correct number of btns more code is below it. go to line 712
var dateDecider, html;
    //Month = new Date();
    dateDecider = month;//Month.getMonth();
    document.querySelector('.task-display').textContent = '';
                  if((dateDecider == 1) || (dateDecider == 3) || (dateDecider == 5) || (dateDecider == 7) || (dateDecider == 8) || (dateDecider == 10) || (dateDecider == 12)){
    html = `<div class='row'>
                <div class='col span-1-of-6 '>
         
        <a  class = 'btn btn-0'>1</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a  class = 'btn btn-1'>2</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-2'>3</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-3'>4</a>
    
                    </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-4'>5</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-5'>6</a>
    
            </div>
            </div>
                     <div class='row'>
                <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-6'>7</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-7'>8</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-8'>9</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-9'>10</a>
     
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-10'>11</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-11'>12</a>
    
            </div>
            </div>
                     <div class='row'>
                <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-12'>13</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-13'>14</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-14'>15</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-15'>16</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-16'>17</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-17'>18</a>
    
            </div>
            </div>
                     <div class='row'>
                <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-18'>19</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-19'>20</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-20'>21</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-21'>22</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-22'>23</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-23'>24</a>
    
            </div>
            </div>
                     <div class='row'>
                <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-24'>25</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-25'>26</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-26'>27</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-27'>28</a>
    
            </div>
                    <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-28'>29</a>
    
            </div>
       <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-29'>30</a>
    
            </div>
            </div><div class='row'>  <div class='col span-1-of-6 '>  <a   class = 'btn btn-30'>31</a></div></div>`
document.querySelector('.task-display').insertAdjacentHTML('beforeend', html);
    }
    else if((dateDecider == 4) || (dateDecider == 6) || (dateDecider == 9) || (dateDecider == 11)){
        
      html = `<div class='row'>
                <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-0'>1</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-1'>2</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-2'>3</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-3'>4</a>
    
                    </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-4'>5</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-5'>6</a>
    
            </div>
            </div>
                     <div class='row'>
                <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-6'>7</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-7' value=8 >8</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-8'>9</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-9'>10</a>
     
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-10'>11</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-11'>12</a>
    
            </div>
            </div>
                     <div class='row'>
                <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-12'>13</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-13'>14</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-14'>15</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-15'>16</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-16'>17</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-17'>18</a>
    
            </div>
            </div>
                     <div class='row'>
                <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-18'>19</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-19'>20</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-20'>21</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-21'>22</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-22'>23</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-23'>24</a>
    
            </div>
            </div>
                     <div class='row'>
                <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-24'>25</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-25'>26</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-26'>27</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-27'>28</a>
    
            </div>
                    <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-28'>29</a>
    
            </div>
       <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-29'>30</a>
    
            </div>
            </div>`
        document.querySelector('.task-display').insertAdjacentHTML('beforeend', html);
    }
    else{
        html = `<div class='row'>
                <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-0'>1</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-1'>2</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-2'>3</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-3'>4</a>
    
                    </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-4'>5</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-5'>6</a>
    
            </div>
            </div>
                     <div class='row'>
                <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-6'>7</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-7'>8</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-8'>9</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-9'>10</a>
     
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-10'>11</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-11'>12</a>
    
            </div>
            </div>
                     <div class='row'>
                <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-12'>13</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-13'>14</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-14'>15</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-15'>16</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-16'>17</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-17'>18</a>
    
            </div>
            </div>
                     <div class='row'>
                <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-18'>19</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-19'>20</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-20'>21</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-21'>22</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-22'>23</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a   class = 'btn btn-23'>24</a>
    
            </div>
            </div>
                     <div class='row'>
                <div class='col span-1-of-6 '>
         
        <a class = 'btn btn-24'>25</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a  class = 'btn btn-25'>26</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a class = 'btn btn-26'>27</a>
    
            </div>
              <div class='col span-1-of-6 '>
         
        <a class = 'btn btn-27'>28</a>
    
            </div>
             
            </div>`
        
document.querySelector('.task-display').insertAdjacentHTML('beforeend', html);
    }
       
  
        
}




var Month = new Date();
var month = Month.getMonth() + 1;//the getMonth function starts at 0 so this just makes it normal
addViewHTML(month);//dislays the month for the first time















        
    }
    
})(page);



/////////////////////////////////////////////////////////
//              DATA
/////////////////////////////////////////////////////////
class record{//the data structure for the task
    constructor(month,date,task){
        
        this.month = month;
        this.date = date;
        this.task = task;
    }
    displayTask(){
       console.log(this.record);
    }
};
var tasks = [];// an array of task objects



//console.log(tasks[1].month);
//console.log(tasks);





   // month = now.getMonth();

//export.tasks = tasks;

  








///////////////////////




////////////////////////////




//var result = {};

var cookieSplitter = function (str) {
    str = str.split('; ');//sepates the string into each task with its key 
    var res = []

    for (var i = 0; i < str.length; i++) {
        var cur = str[i].split('=');
     //removes the key from each cookie leaving just the date,month and task


        res[i] = cur[0];
       
    }
    var info = []; 
    
    
    
    for(var i = 0; i<res.length; i++){
    info[i] = res[i].split(',');//splits the cookie into each individual part of the info Date, Month, and Tasks
    
    }
    
    
    for(var i = 0; i< info.length; i++){

    data[data.length] = new record(info[i][0], info[i][1], info[i][2]);//assigns it to the data
    }
    //data[data.length] = new record(info[1][0], info[1][1], info[1][2]);
   // return result;/////////////////////////////////////////
    
}

    
    

var splitCookieInit = (function(){//initialises the data;
    cookieSplitter(document.cookie);
    if(page == '/View.html'){
        
    displayIndividualRecords();
    }
})();


