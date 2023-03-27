// Name : Marc Maged Moris
//                                                 Assignment 1 JS
// ____________________________________________________________________________________________________________________





// Q1)

// var x= prompt('enter num')
// console.log(x);

// _________________________________________________________
// Q2)

// var x = prompt('enter num :')
// if ((x%3==0) && (x%4==0))
// {
// console.log('true');
// }
// else
// {
//     console.log('false');
// }
// _________________________________________________________

// Q3)

// var x=prompt('enter num 1 :')
// var y=prompt('enter num 2 :')

// if (x>y) 
// { console.log(x)   }


// else 
// { console.log(y)  }

// _________________________________________________________

// Q4)

// var x = prompt('enter num :')
// if(x>0)
// { console.log("Positive"); }

// else
// {console.log('Negative');}

// _________________________________________________________


// Q5)

// var x = +prompt('enter Frist Num :')
// var y = +prompt('enter Second Num :')
// var z = +prompt('enter Third Num :')
// if  ( (x>y) && (x>z) )
// {
//     console.log("Max value =" + x);

//     if(y>z)
//     {
//         console.log("Min value =" + y);
//     }
//     else
//     { console.log("Min value =" + z);    }
    
// }

// else if  ( (y>x)&&(y>z) )
// {
//     console.log("Max value =" + y);

//     if(z>x)
//     {
//         console.log("Min value =" + z);
//     }
//     else
//     { console.log("Min value =" + x);    }
    

// }

// else  ( (z>y)&& (z>x))
// {

//     console.log("Max value =" + z);

//     if(x>y)
//     {
//         console.log("Min value =" + x);
//     }
//     else
//     { console.log("Min value =" + y);    }
    
// }
// _________________________________________________________

// حل اخر

// var a = +prompt('enter your first number')
// var q = +prompt('enter your second number')
// var w = +prompt('enter your third number')

// if (a > q && a > w) {
//     console.log("the max is " + a);

//     if (a < q && a < w) {
//         console.log("the min is " + a);

//     }
//     else if (q < a && q < w) {
//         console.log("the min is " + q);
//     }
//     else {
//         console.log("the min is " + w);
//     }
// }
//     else if (q > a && q > w) {
//     console.log("the max is " + q);
//     if (a < q && a < w) {
//         console.log("the min is " + a);

//     }
//     else if (q < a && q < w) {
//         console.log("the min is " + q);
//     }
//     else {
//         console.log("the min is " + w);
//     }
// }
// else {
//     console.log("the max is " + w);
//     if (a < q && a < w) {
//         console.log("the min is " + a);

//     }
//     else if (q < a && q < w) {
//         console.log("the min is " + q);
//     }
//     else {
//         console.log("the min is " + w);
//     }
// }


// Q 6&7)

// var x =prompt('enter num :')
// if (x %2==0) 
// {
// console.log('even num');    
// } else {
//     console.log('odd num');
// }
// _________________________________________________________


// Q8)

// var x = prompt('enter char :')

// switch (x) {
//     case 'a': 
//         console.log(" vowel ");
//         break;
// case 'o' :
//     console.log(' vowel ');
// break;
// case 'e' :
//     console.log(' vowel ');
// break;
// case 'l' :
//     console.log(' vowel ');
// break;
// case 'u' :
//     console.log(' vowel ');
// break;

//     default: console.log('Consonant');
//         break;
// }
// _________________________________________________________


// Q9)
// var x=+prompt('enter num:')
// for (var i = 1; i <= x; i++) {
//     console.log(i);
    
// }
// _________________________________________________________


// Q10)

// var x=+prompt('enter num :')

// for (var i = 1; i <= 12; i++) 
// {
//     console.log(i*x);
// }

// _________________________________________________________


// Q11)

// var x= +prompt('enter num :')

// for (var i = 1; i <= x; i++) {
//     if (i%2==0) {
//         console.log(i);
//     }
    
// }



// _________________________________________________________


// Q12-1)


// var x= +prompt('enter num :')
// var y= +prompt('enter num :')
// var z=1;
// while (y!=0) 
// {
//     z*=x;
//     --y;
// }
// console.log(z);
// _________________________________________________________


// Q12-2)

// var x=+prompt('enter frist num :')
// var y=+prompt('enter second num :')
// var z=+prompt('enter third num :')
// var f=+prompt('enter forth num :')
// var h=+prompt('enter fifth num :')
// var sum=x+y+z+f+h;
// var avg = (( x+y+z+f+h)/5 );
// var per=(((x+y+z+f+h) /5) *100) /100 ;
// console.log('Total marks:' +sum);
// console.log('Average marks:' +avg );
// console.log('Percentage marks:' +per );

// _________________________________________________________


// Q13)
// var x=+prompt(' Month Number: ')
// if (x==1) 
// {
//     console.log(" Days in Month: 31" );
// }
//  else if (x==2) 
//  {
//     console.log(" Days in Month: 28" );
//  }
//  else if (x==3) 
//  {
//     console.log(" Days in Month: 30" );
//  }
//  else if (x==4) 
//  {
//     console.log(" Days in Month: 31" );
//  }
//  else if (x==5) 
//  {
//     console.log(" Days in Month: 30" );
//  }
//  else if (x==6) 
//  {
//     console.log(" Days in Month: 31" );
//  }
//  else if (x==7) 
//  {
//     console.log(" Days in Month: 30" );
//  }
//  else if (x==8) 
//  {
//     console.log(" Days in Month: 31" );
//  }
//  else if (x==9) 
//  {
//     console.log(" Days in Month: 30" );
//  }
//  else if (x==10) 
//  {
//     console.log(" Days in Month: 31" );
//  }
//  else if (x==11) 
//  {
//     console.log(" Days in Month: 30" );
//  }
//  else if (x==12) 
//  {
//     console.log(" Days in Month: 31" );
//  }
//  else 
//  {
//     console.log(" try again" );
//  }



// Q14)


// var x=+prompt('enter your Physics :')
// var y=+prompt('enter your Chemistry :')
// var z=+prompt('enter your Biology :')
// var c=+prompt('enter your Mathematics :')
// var v=+prompt('enter your Computer :')
// var sum =x+y+z+c+v ;
// var tum= sum /500;
// var percen = tum*100;
// if (percen>=90) 
// {
//     console.log("Grade A");
// }
// else if (percen>=80)
// {
//      console.log("Grade B");
    
// }
// else if (percen>=70)
// {
//      console.log("Grade C");
    
// }
// else if (percen>=60)
// {
//      console.log("Grade D");
    
// }
// else if (percen>=40)
// {
//      console.log("Grade E");
    
// }
// else if (percen<40)
// {
//      console.log("Grade F");
    
// }

// ___________________________________________________________


// Q15)

// var x =prompt('enter num of month')
// switch (x)
//  {
//     case '1': {
//         console.log('31 day');
//     }
//     break;
//         case '2': {console.log('28 day');}
//         break;
//         case '3': {console.log('30 day');}
//         break;
//         case '4': {console.log('31 day');}
//         break;
//         case '5': {console.log('30 day');}
//         break;
//         case '6': {console.log('31 day');}
//         break;
//         case '7': {console.log('30 day');}
//         break;
//         case '8': {console.log('31 day');}
//         break;
//         case '9': {console.log('30 day');}
//         break;
//         case '10': {console.log('31 day');}
//         break;
//         case '11': {console.log('30 day');}
//         break;
//         case '12': {console.log('31 day');}
//         break;
//     default: {console.log('try again')};
//         break;
// }
// _________________________________________________________



// Q16)


// var x = prompt('enter char :')

// switch (x) {
//     case 'a': 
//         console.log(" vowel ");
//         break;
// case 'o' :
//     console.log(' vowel ');
// break;
// case 'e' :
//     console.log(' vowel ');
// break;
// case 'l' :
//     console.log(' vowel ');
// break;
// case 'u' :
//     console.log(' vowel ');
// break;

//     default: console.log('Consonant');
//         break;
// }
// _________________________________________________________


// Q17)


// var x =+prompt('enter frist num :')
// var y =+prompt('enter second num :')

// switch (x>y)
//  {
//     case true: 
//     console.log("max num :"+x);
//     console.log("min num :"+y);
       
//         break;
//         case false :
//             console.log("max num :"+y);
//             console.log("min num :"+x);
            
//             break;

//             default:console.log('try again');
            
//             break;
// }

// _________________________________________________________________


// Q18)


// var x =+prompt("enter num:")
// switch (x%2==0)
//  {
//     case true: console.log("this is even num");
        
//         break;
// case false : console.log('this is odd num');
// break ;
//     default: console.log('try again');
//         break;
// }

// __________________________________________________________________




// Q19)


// var x=prompt('enter num :');

// switch (x>0) {
//     case true:console.log('Positive num');
        
//         break;

//     default: console.log('Negative num');
//         break;
// }


// __________________________________________________________________


// Q20)


// var num1=prompt('Enter frist num :')
// var opp=prompt('Enter Opprator : ')
// var num2=prompt('Enter second num :')
// switch (oop) {
//     case '+':console.log(num1+num2);
        
//         break;
//     case '-' :console.log(num1-num2);
        
//         break;
//     case '*':console.log(num1*num2);
        
//         break;
//     case '/':console.log(num1/num2);
        
//         break;
//     case '%':console.log(num1%num2);
        
//         break;

//     default:console.log('try again');
//         break;
// }


// _________________________________________________________________________________________
// ________________________________________________________________
// _______________________________________________
// ______________________________________
// ________________________
// _______________
// _________
// _____
// __
















