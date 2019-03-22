# Coffee Engine v2 - mobile application 

<p> New updated verion for ios and android... </p>


# the-coffee-app v1 - web application 
<p align="center">
<img align="right" src="https://thumbs.gfycat.com/WaryHarmfulCanine-size_restricted.gif" height="400px">
<img align="center" src="https://thumbs.gfycat.com/FragrantExaltedGraywolf-size_restricted.gif" height="400px">
<img align="left"src="https://thumbs.gfycat.com/PertinentGoodAzurevase-size_restricted.gif" height="400px">
</p>
The coffee app incorporates a state of the art eco-physiological model of coffee yield predictions allowing anyone to access coffee yield predictions from anywhere in the world. The app also alows the user to run simulations to discover whether thier farm could benift from an increase or decrease in shade conditions. 

Why shade? Some coffee plantations can benifit from shade. As shade trees are an expensive longterm investment, our app give advice for farmers on this issue. 

By running simulations we are also able to provide management advice for shade treatments.

The app is useful for coffee farmers and corporations to simulate shade management treatments before investing.

Please visit then web page to use the model.
[the-coffee-app webpage](http://the.coffee.app.s3-website-eu-west-1.amazonaws.com/home)

steps:
  1. choose a location (locations within tropcial regions give most interesting predictions)
  2. enter in your management system.
  3. model the data - see how much coffee you produce compared to our model predictions.
  4. optimize for shade - run simiulations with different shade treatments and see you your farm could benifit from and increase or decrease in shade. 
  
  test all around the world.


### Screen shots
Map Page                                     |                                      User Input |                                      Results |                                      Optimise
:-------------------------------------------:|:-----------------------------------------------:|:-------------------------------------------:|:-----------------------------------------------:
![mappage](https://s3-eu-west-1.amazonaws.com/james.margrove/the-coffee-app/readMeImages/locationfinder+copy.png) | ![usersettings](https://s3-eu-west-1.amazonaws.com/james.margrove/the-coffee-app/readMeImages/userinput.png)| ![results](https://s3-eu-west-1.amazonaws.com/james.margrove/the-coffee-app/readMeImages/initialmodelresults.png) | ![optimised](https://s3-eu-west-1.amazonaws.com/james.margrove/the-coffee-app/readMeImages/optiRes.png) |

### Tech stack

The vast majority of the code is done in javascript es6. Frontend framework used was React and Redux. Google maps api was used to implement the mapping. Koa was used to implement the backend. 

The app has been deployed entierly on amazon web services. The app is served on an s3 bucket. The server and the model are run on an ec2 instance. 

To enable the model to calculate predictions anywhere, we use 10GB global environmental datasets stored in raster formats. We use AWS's Relational Database Service to store these using postgres / postGIS.  


React         |        redux |            R |           JS |          koa | google-maps
:------------:|:------------:|:------------:|:------------:|:------------:|:------------:
![reactredux](https://s3-eu-west-1.amazonaws.com/james.margrove/the-coffee-app/readMeImages/react.png) | ![redux](https://s3-eu-west-1.amazonaws.com/james.margrove/the-coffee-app/readMeImages/redux.jpeg) | ![R](https://s3-eu-west-1.amazonaws.com/james.margrove/the-coffee-app/readMeImages/R.jpeg) | ![JS](https://s3-eu-west-1.amazonaws.com/james.margrove/the-coffee-app/readMeImages/es6.jpeg) | ![koa](https://s3-eu-west-1.amazonaws.com/james.margrove/the-coffee-app/readMeImages/koa.png) | ![ggm](https://s3-eu-west-1.amazonaws.com/james.margrove/the-coffee-app/readMeImages/ggm.png)

### Contributors
[Eric Rahn]() - developer of the model

[James Margrove](https://www.linkedin.com/in/james-margrove-b3b81557/) - full stack developer
