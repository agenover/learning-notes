## Notes from LinkedIn course: [Learning Node.js](https://www.linkedin.com/learning/learning-node-js-2017/get-started-with-node-js?autoplay=true&resume=false&u=36053556) 

***

Table of Contents

- [**Introduction to Node**](#introduction-to-node)
  - [**Understanding Node**](#understanding-node)
  - [**Demo Application Overview**](#demo-application-overview)
  - [**Why is JavaScript Node language**](#why-is-javascript-node-language)
  - [**Benefits and features of JavaScript**](#benefits-and-features-of-javascript)
  - [**Asynchronous tasks and callbacks**](#asynchronous-tasks-and-callbacks)
- [**Understanding npm: Node Package Manager**](#understanding-npm-node-package-manager)
  - [**Write your own module**](#write-your-own-module)
  - [**Manage third party packages with npm**](#manage-third-party-packages-with-npm)
  - [**What is a package.json file?**](#what-is-a-packagejson-file)

***

# **Introduction to Node**

## **Understanding Node**
Node is an open source, cross-platform runtime environment for service-side and networking applications. It is built on top of Chrome's JavaScript runtime, the V8 engine, and so applications for Node are written in JavaScript. This is why many developers like Node, it's lightweight, you can write your front-end and back-end in the same language, share libraries, reduce code write times and tech stack adoption efforts.

## **Demo Application Overview**
In this course we'll be creating a demo chat application. It will feature HTTP requests made from the front end to the back end, as well as web sockets through Socket.IO, which will allow for automatic push notifications from the server to the client. So let's take a look at that. So I can post a new message and it will automatically show up in my client, but in the second client as well, and vice versa. In fact, we can open up as many clients as we like, and it will scale. We can even restart our clients, and the data will still show. And we'll be using MongoDB and mLab to make our data persist Most of the node concepts will be taught by developing this app. While a few of the more fundamental concepts will be taught through separate programming lessons.

## **Why is JavaScript Node language**
 Modern web apps and websites all have some front end components or functionality. Since the browser running these apps all use JavaScript, these components usually are written in JavaScript. It's nice to have both your front end and back end written in the same language for multiple reasons. 
 
 First, there are no syntactical differences to worry about as with two different languages. Second, it increases the capacity to focus and also allows to share code and data structure between your front end and back end. 
 
 Let's take a look at some examples of where code sharing might be useful. There are many great libraries for encryption or utility such as Underscore, that can be used for both the front end and the back end. An example could be, if you are writing a user authentication system with tokens, you might want to use the same token and encryption library on both the front end and back end to authorize your users.
 
 Or, if you're writing a custom algorithm or some sort of logic or function that you could use both on the front end and back end. One example I can think of is if you're writing a web game. You will perform some sort of attack algorithm on the front end, or the game client, and you'll verify it on the back end in the server to make sure nobody's cheating. And to do that, you'll need the same algorithm on both the front end and back end.
 
 Another example is a data model. For example, the definition of your user which can have many properties. With all of these examples, if they are not in the same language, there will be maintenance overhead. Let's imagine having to change 20 data models with multiple properties in each model in two different languages. It's much better to have to do it only once. This is a key principle of programming. And one of the benefits we get when we code share and have our front end and back end in the same language.

 ## **Benefits and features of JavaScript**

 Let's summarize some of the benefits and features of JavaScript. 
 
 With Node, we get access to sharing the language between the back end and the front end, and as well, sharing the code between the back end and the front end. 
 
 Another difference, is that JavaScript is a dynamic language, meaning the type is determined by value, not when the variable is declared. It is loosely typed versus strongly typed.
 
 Another nice benefit is that JSON comes naturally to JavaScript, which makes it ideal for web apps both on the front end and back end. JSON stands for JavaScript Object Notation, and it's based on a subset of the JavaScript language. A good example is passing data from our back end to our front end. In other environments with different languages, you would have to do some sort of conversion. With JavaScript it's much easier.
 
 Overall, JavaScript has many pros, but these can be seen as cons depending on the circumstance. JavaScript is definitely not the ultimate solution, but sharing JavaScript between your front end and back end makes web app development that much more fun.

 ## **Asynchronous tasks and callbacks**
When you execute a task synchronously, you wait for it to finish before moving on to another task which is what causes blocking. On the other hand, when you execute tasks asynchronously, you can move on to another task without having to wait for the previous task to finish. For example, if you've ever used an application or a website where you had to submit a form and everything went gray until the response was received, that's the background process running synchronously and blocking the responsiveness of the user interface until it completes. 

If we were to make a list of all the things you could do on a computer and ordered them based on their completion time, there would be two that require relatively long waiting times: networking access and file system access. And with a web app, these are some of the most common functions. This is why Node performs so well for web apps. The most common way to get started with asynchronous code is to do callbacks.

***Synchronous code***

Let's take a look at [some code](../node-course/node/Ex_Files_Learning_Node_js_2021_Q3/Exercise%20Files/01_06/sync-demo.js) for synchronous. You could type:
```
fs = require('fs');

data = fs.readdirSync('c:/');
console.log('data:', data);

console.log("this comes after");
```

With this demo app, we're loading the filesystem, and then we're reading the directories from drive C. Once that completes, it then executes the next line and so on. And so, when I execute this, we should see the console log that displays the directory list, and then we'll see the next console log which says "this comes after." 
 
In the terminal write the command: use Node and type out the filename, in this case is sync-demo.js.
```
node sync-demo.js
```

So the first thing we will see is the console log of the directory list. And then as expected, we will then see "this comes after." 

***Asynchronous code***

Now, let's take a look at a different version of this code using [asynchronous code](../node-course/node/Ex_Files_Learning_Node_js_2021_Q3/Exercise%20Files/01_06/async-demo.js).

```
fs = require('fs');

function phoneNumber(err, data) {
	console.log('data:', data);
}

fs.readdir('c:/', phoneNumber);

console.log("this comes after");
```

We can see that the directory listing is shown. And if we scroll up, we can see the text "this comes after" before our directory listing. So let's take a look at why this occurred in reverse. Even though the console log for "this comes after" is on the last line, it still executes first. And the reason is because of this callback which I have defined on line three as a function. And I pass it into the filesystem for reading the directory on line seven. So instead of the execution waiting for readdir to finish, it continues and goes to the next line. And then once readdir finishes, it calls this function which is our callback, and then it executes the console log on line nine.

You might be wondering why I called our callback phoneNumber. Well, a good analogy for callbacks is calling technical support for your Internet provider. For most companies, you have to wait on hold and put your day on hold until an agent is available to take your call. But some companies have something that's also called a callback because it functions in the same way. Once you register with your phone number for a callback, you can hang up and carry on with your day. And then, the agent will call you back when they are available in much of the same way that readdir calls our phoneNumber callback which is described on line seven or defined as the function above.

***

# **Understanding npm: Node Package Manager**

## **Write your own module**

[Example](../node-course/node/Ex_Files_Learning_Node_js_2021_Q3/Exercise%20Files/02_01/module-demo.js) of a module.

To print out what is on [my-module.js](../node-course/node/Ex_Files_Learning_Node_js_2021_Q3/Exercise%20Files/02_01/my-module.js), in the terminal write command:

```
node module-demo.js
```

We are able to access data in our module demo from another module or file.

## **Manage third party packages with npm**

Node has something called a Node Package Manager, or NPM for short. Packages are one or more modules bundled together. One of the more popular packages is called **Lodash**. To install type:

```
npm install lodash
```

Now that we have it installed, let's create a [file that we'll use to write our own code](node/Ex_Files_Learning_Node_js_2021_Q3/Exercise%20Files/02_02/demo.js) which will utilize Lodash to get get a random value between one and one hundred.

There are several different types of NPM packages, and some will work as command line interfaces, like **Nodemon**. 

First let's install Nodemon and if we take a look at our "node_modules" folder, we can see that there was no installation of Nodemon. That is because it is installed globally, and not in our local "node_modules" directory. So to use it, we can type in "nodemon" instead of "node" in the terminal: 

```
nodemon demo.js
```

What this allows us to do is automatically execute our "demo.js" anytime there's a change, so we don't have to keep typing in "node" to execute the new changes. So for example, instead of getting the range of one to one hundred in our random call, I'd like one to ten. I'll save it by hitting Control-S, and you can see Nodemon detects those changes, and automatically executes it. 


## **What is a package.json file?**

Now, what if we end up installing several third party packages, and we want to keep track of what we have installed and are dependent on in a list somewhere? That's where the "package.json" file comes in.