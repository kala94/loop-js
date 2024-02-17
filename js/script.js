/* 1. print the even number upto 50. */
 
   var i;
   var n=50;
   console.log("\n Even number of upto 50:");
   for(i=1;i<=n;i++)
   {
     if(i%2==0)
	 {
	   console.log(i);
	 }
   }
   
 /* 2. Add 1 to 10. */
   
   var i;
   var n=10;
   var sum=0;
   for(i=1;i<=n;i++)
   {
	 sum+=i;
   } 
   console.log("\n The sum of 10 is:" +sum);
   
 /* 3.print in reverse order 100 to 50. */
   
   var i;
   var n=50;
   console.log("\n The reverse order for 100 to 50:");
   for(i=100;i>=n;i--)
   {
	 console.log(i);
   }
   
/* 4.Find factorial of the given number. */

   var i;
   var n=prompt("Enter the factorial Number");
   var fact=1;
   for(i=1;i<=n;i++)
   {
	 fact=fact*i;
   }
   console.log("\n The factorial of given number is :" +fact);
   
/* 5.Find given number is prime or not. */

   var i;
   var isprime=true;
   var n=prompt("Enter the prime number");
   for(i=2;i<n;i++)
   {
	 if(n%i==0)
     {
	   isprime=false;
	   break;
	 }
   }
   if(isprime)
   {
     console.log("\n The given number"   + n +   "is a prime number");
   }
   else    
   {
     console.log("\n The given number"   + n +   "is not a prime number");
   }  

/* 6.Add the given number. */

   var n=prompt("Enter the add number");
   var rem,rev=0;
   var n1=0;
   while(n>0)
   {
     rem=n%10;
	 n1=n1+rem;
     rev=(rev*10)+rem;
     n=(n-rem)/10;
   }
   console.log("\n The sum of the given number is:" +n1);     
   
/* 7.Sum of odd and even number */
   
   var n=prompt("Enter the sum of odd and even number");
   var rem,rev=0;
   var s1=0,s2=0;
   while(n>0)
   {
	  rem=n%10;
	  rev=(rev*10)+rem;
	  n=(n-rem)/10;
	  if(rem%2==0)
	  {
		s1=s1+rem;
	  }
	  else if(rem%2==1)
	  {
		s2=s2+rem;
	  }
	  else 
	  {
		console.log("\n Enter the valid number");
	  }
   }
   console.log("The sum of even number:" +s1);
   console.log("The sum of odd number:"+s2);

/* 8.Find the sum of odd number and then find the average. */

   var n=prompt("Enter the sum of odd number");
   var count=0,rem;
   var avg,rev=0;
   var sum=0;
   while(n>0)
   {
	 rem=n%10;
	 if(rem%2==1)
     {
	   sum=sum+rem;
	   count++;
	 }
	 rev=(rev*10)+rem;
	 n=(n-rem)/10;
   }
   avg=sum/count;
   console.log("\n The odd number average is:" +avg);
   
/* 9. Sum of all number and then find the average.*/

   var n=prompt("Enter the sum and average number");
   var rev=0,c1=0;
   var rem,s1=0;
   var avg1;
   while(n>0)
   {
	  rem=n%10;
	  rev=(rev*10)+rem;
	  n=(n-rem)/10;
	  s1=s1+rem;
	  c1++;
  }
  avg1=s1/c1;
  console.log("\n The average of the given number:" +avg1);

/* 10.Check given number is armstrong or not. */

   var n=prompt("Enter the armstrong number");
   var temp=n;
   var rev=0,rem;
   var n1,n2=0;
   console.log("The number is:" +n);
   while(n>0)
   {
     rem=n%10;
	 rev=(rev*10)+rem;
	 n=(n-rem)/10;
     n1=rem**3;
     n2=n2+n1;
   }
   console.log("\n The result is:" +n2);
   if(temp==n2)
   {
     console.log("\n The given number is armstrong");
   }
   else 
   {
     console.log("\n The given number is not a armstrong");
   }	   
      
	 