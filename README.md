#Synopsis

A simple seed project for Javascript, ES6 and webpack.

#Running
Clone project then `npm install` 

Once that is done `npm dev` starts the webpack-dev-server which will monitor your code for changes and hot reload.

When `npm dev` is running, navigating to localhost:8080 will show a blank page however opening the console will show
output. 

Specifically it will show the console.logs in[app.js](src/app.js):

```
console.log(square.getHeight); 
console.log(notSquare.getHeight);
```

to see if it's hot reloading we can add a 

```
console.log(notSquare.getWidth);
```

and after a few seconds it should auto reload with the new output.

To webpack the project run ```npm build```.