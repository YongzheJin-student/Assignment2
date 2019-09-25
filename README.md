# Assignment2
For this assignment i have been requried to use github to track the change or my file<br>
Because this is a private Assignment so i only used the master branch to store all of my<br>
versions.<br>
There are two entites involved in this software design. They are users,groups and channels<br>
The relationship between users and groups is many to many. Because one user can have many gorup<br>
and one group can have many users after the the relationship between users and channels is one to many<br>
It means one channel can have many users.<br>
On the other hand, for this assignment we have been required to use to services. They<br>
are angular service and node service even with the mongoDB. They are definitely differnet 
<br> Component in building this software.<br>
For the routers i have divide them in to differents files and required all of them in the service.js file. <br>
In this way i can manage them properly and easiliy to find the errors.After that i have create many component<br>
They can be divided in to two parts. The first part is the login part. Then the room componeny and the dashboard are the second<br>
parts. They combined the user interface for the users to send message and communicate with others<br>
Component
<li>
 <ul>private socket;
 <ul> dataObserver: Observer < any > ;
  <ul>messageObserver: Observer < any > ;
  <ul>public userDetails;
 <ul> public Groups = [];
  <ul>public Channels = [];
  <ul>public Users = [];

