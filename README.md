# ZolphScape

## Project Description
```
This is the code base for ZolphScape which is a platform to allow for developers and researchers to showcase their work. Here at ZolphScape we hope to create a environment where information no longer feels overwhelming by allowing users to not just share and showcase their work but also allowing users to pick and choose what exact information they wish to see on a day-to-day basis. The goal of ZolphScape is to give something back to the community which is why currently the code base is public. Serious Collaborations are welcome and encouraged. Please feel free to reach out to Zolphite on LinkedIn for more information.
```

### TO GET FIREBASE WORKING
```
1. Go to Firebase and find your FirebaseConfig information for the Firebase project you wish to link to this ZolphScape project. (Either by creating a new firebase project or finding the config info of an existing project)
2. Create a .env file in the root directory of this ZolphScape project.
3. Create variables in the .env file which store all your firebase config information.
4. Edit the FirebaseConfig object in the firebase.js file located at /src/utilities/firebase.js to match the variable names you gave the firebase config information in your .env file. (Make sure your firebase config information from the .env file is being used in the firebase.js file ) 
```
