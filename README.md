# GoodHealth Assignment 
This Assignment is made using nodejs,express,mongodb,mongoose,twilio
# -
This project is deployed using heroku and here the link-
https://goodhealth.herokuapp.com

# How to run
# Step1-
Install all the packages using npm install

# Step2-
Now to need to run project using npm start

# Features-

# 1-
Here in signup page i have applied all the validtions like you need to fill all the fileds like user name,email,password and mobile no.
If the user enter any email or mobile number which is already registred than user will get a message that user is already registred.

# 2-
And in login you will get two mode of login i.e login with email and login with otp.
# 3-
If you login with email then if user enter wrong credential he/she will get a message about wrong credentials and all the fields are required all these are the validation i 
used in login with email

# 4-
if you login with mobileno here also i apllied validations like if user enter a mobile number that is not registred you will get a message mobile number not registred
and after filling correct mobile number you will get a otp so here i have used twilio which send you a message and you will move to next page where you have to fill that code 
if you fill wrong code you will get a alert message wrong code and if you enter correct otp you will move  to home screen

# 5-
after entering correct code you will see a home screen with your user name and email.

