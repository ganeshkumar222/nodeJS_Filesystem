I have created express server and  i have made it to listen to port 8000 in local(subject to change to after deployment in render).

workflow:
In this project there is no need of sending  a data so i  have used two get requets get the requirements done.
renderurl:
    1)https://nodeexpress-file-system.onrender.com/post-file
        This request will create a file containing a timestamp.
    2)https://nodeexpress-file-system.onrender.com/get-file
        This request will return the data array (array of objects) which holds the details about the file name and the details of the same.
LocalHost:
    1)http://localhost/8000/post-file
    This request will create a file containing a timestamp.
    2)http://localhost/8000/get-file
    This request will return the data array (array of objects) which holds the details about the file name and the details of the same.


 postman documentation link:
    https://web.postman.co/workspace/My-Workspace~ac185e91-9d31-4239-8b4a-472601930d9d/documentation/32502559-85c3fc87-9b3a-4263-9716-cd05950b2232

    *since i faced some issues in craeting the filename with timestamp i have created the file name alone without timestamp but the value will be current timestamp as mentioned in the requirement.
   *Refer Product_details text file for further detalls
