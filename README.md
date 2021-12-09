# Manthan Frontend

#### Problem Statement

- Identification of terrorist profiles on various social media platform using mobile number or email address.


## Sample Data for checking the solution

#### Mobile numbers

- #### 8612280518 
- #### 7013875243
- #### 8691028435 
- #### 8077400229 
- #### 9130174546 
- #### 9783265632 
- #### 7963473112 
- #### 7152131852
- #### 7072737062
- #### 8399896852
- #### 7148936188
- #### 9783265632
- #### 9603697558


#### Email addresses

- #### makenzie.senger48@hotmail.com
- #### vance.orn@gmail.com 
- #### magali.altenwerth35@hotmail.com
- #### joe.swift30@hotmail.com
- #### neil51@hotmail.com
- #### alexandre96@hotmail.com
- #### lenny79@hotmail.com



## Sections

- #### Login Page 

We have two input fields: email and password. There will be validation rules in place to ensure that the email and password meet the needed criteria. When all criteria are successfully matched, it will call API to determine if these details are in the database and if so, it will match the needed password; if it runs well, the individual will be able to access the dashboard.

- #### SignUp Page

There are four fields: first name, last name, email address, and password. It will also verify the validation criteria and proceed to the dashboard only if there is no current user with the same information; otherwise, it will prompt you to log in from the application.

- #### Dashboard

There is a search option in which a concerned person who wants to check profiles may either input a mobile number or an email address, and logic will automatically recognize which type of data is provided for us to search our profiles. The data is now sent to the database, which will get the fetched data if it matches and if there is a profile with that phone number or email address. The provided data will now include the person's complete name, the platform on which this account is being created, and a link to his or her profile with the corresponding flag. Her profile will also have a collection of posts and details that we may manually view for further information.

- #### Flag Concept

We have upgraded our solution to the point where we are analysing user posts and using the proper concept, we are analysing hate speech keywords like jihad, kill, and so on, and with the intensity of these keywords, we are using flags to show how dangerous the profile of users that we have fetched from the database is, and we are accordingly showing the signs on the dashboard of our solution.
Based on the computation and appropriate examination of every post on his different social media handles, the signs are red, orange, yellow, and green on the basis of keywords which tell us the threat level of users and how suspicious it is in actual for each social media platform.

- #### Suspicious on one or two platforms

We have also considered the fact that maybe the user is suspicious on only one social media platform i.e. Facebook flags it as a possible concern based on their correct analytics. Then we need to go through all of the accounts and determine whether the profiles on social media sites are suspicious or not. Thus we have listed the profiles of users from all social media posts and used the concept of the flag on individual platforms.
