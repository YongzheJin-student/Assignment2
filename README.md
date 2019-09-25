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
Parameter<br>
<li>dataObserver: Observer < any > ;</li>
<li>messageObserver: Observer < any > ;</li>
<li>public userDetails;
	<ol>loginEmit()</ol>
</li>
<li>public Groups = [] ---It userd to manage the groups;
	<ol>public joinRoom(room, user)</ol>
	<ol>leaveRoom(room, user)</ol>
</li>
<li>public Channels = [] ---- It used to manage the channels;</li>
<li>public Users = [] ---- It used to manage all users;
	<ol>sendMessage(room, msg)</ol>
	<ol>sendMessagewithImage(room, msg, Img)</ol>
	<ol>getMessages(): Observable < any ></ol>
</li>
<li>public selectedGroup = 0 --- It used to connect the users and the groups;</li>
<li>public selectedChannel = 0 ---- It used to connect the users and the channel;</li>
<li>public currentUser ---- It is the flag used to create the users;
	<ol>getCurrentUser():</ol>
</li>
All of the purpose can easiliy judge by the name of the funciton in this way. I can easiliy to do the debug<br>
This means i won't be lost when there are a lot of different functions.
Service:<br>
Because this Asssignment is much complex due to the involved of the mogoDB so i divide the function into different<br>
files. So the funcitons have been saved inthe socket service or the model js files. In this way i can manage them properly<br>

Routes:<br>
Because there are many funciton involved so i have used many routes. Actually, i used one route for one function<br>
In this way, i can manage the data properly. Then all of the data have been stored in the mongoDB i have write a function<br>
To utilize the specific data that i need to use. After that, i can utilize the funciton to pass the data into service and <br>
do some funciton that i need then to perform the judgment function to resend the data into the angular component<br>
Then i can achieve the function in the  HTML file<br>

Image:<br>
For the Image i have tranform the image into data and store them into the mongoDB. Finally i can use the data when i want<br>
This is the different between angular designed software and other software design, that i have recogonized<br>

Because three types of users have got many same functions so i store the function in the different files can <br>
help me to easiliy navigate between different functions.

<li>Main Parameter to connect (Primary Key)
<ol>userID</ol> 
<ol>groupID</ol> 
<ol>channelID</ol>
</li>




