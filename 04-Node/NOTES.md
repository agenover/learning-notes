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
- [**Reading and Writing Files**](#reading-and-writing-files)
  - [**Read from files**](#read-from-files)
  - [**Access directories**](#access-directories)
  - [**Write to a file**](#write-to-a-file)
- [**Exploring Web Frameworks**](#exploring-web-frameworks)
  - [**Node.js Frameworks**](#nodejs-frameworks)
  - [**Express**](#express)
  - [**Socket.io**](#socketio)
- [**Building your Demo App Chat Client for the browser**](#building-your-demo-app-chat-client-for-the-browser)
  - [**Static serving with Express**](#static-serving-with-express)
  - [**Create your browser app**](#create-your-browser-app)
  - [**Create a get message service**](#create-a-get-message-service)
  - [**Create a post messages service**](#create-a-post-messages-service)
  - [**Connect to Socket.io from the browser app**](#connect-to-socketio-from-the-browser-app)
  - [**create your Socket.io event**](#create-your-socketio-event)

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

We have our own project and our own custom files and third party packages from where we left off previously. But what if wanted to distribute our app or project or put it into a git repository? It wouldn't make sense to include all of the packages we depend on because they take up a lot of space and since there are hundreds, if not thousands, of files each package depends on, it takes a long time to transfer those. But then the developer, who just got our project, will have to manually install all of those packages. And, if your depending on a few dozen, it will take a lot of time to execute all of those npm install calls each time we download a new project or take in an update.

To solve that, we can create a package.json file. Among other things, it stores a list of the packages you depend on in your project. That way, when using the npm command install, it will go through that list and install everything automatically. 

To create a package.json file, let's go to our terminal and type in 

```npm init```

This will ask us several questions. You can customize this for your specific project when it comes time to production. You have generated a package.json file. As it is now, it just contains all of those defaults we were prompted to modify when we used npm init. It also was nice enough to look in our node modules folder and see what dependencies we have in there, automatically adding them to the dependencies list.

Another shortcut you might want to know is if you're trying to create a package.json file quickly, you can use the command ```npm init --yes```, to create one with all of the defaults. Now that we have an understanding of how to work with modules and packages inside Node, let's take a look at using one of the more popular built-in node modules for reading and writing files.

# **Reading and Writing Files**

## **Read from files**

There are two areas where heavy input/output takes place. Network and disc access. 

- Disk Access:

Let's start by creating a [new file](node/Ex_Files_Learning_Node_js_2021_Q3/Exercise%20Files/03_01/demo.js). Let's require in the file system and I'll call it fs for short. And as you can see, the library itself is also called fs. The next command we'll perform will be to read from the file but we don't have a file to read yet so let's create a [temporary JSON file](node/Ex_Files_Learning_Node_js_2021_Q3/Exercise%20Files/03_01/data.json) and put some data into it.

The first thing we'll do is access the file system with a function called, 'read file' and let's pass in the location of our data JSON file. The second parameter since this is an asynchronous function will be our call back. So I could define a separate function like we did in our asynchronous video or I could provide an anonymous function and place it in the second parameter directly. The callback will pass an error and then the data that's read in. And so that's another way we can handle the call back. Another way yet would be to use an arrow function. And it's slightly more compact than the previous syntax. So we'll use that going forward. For now, let's go ahead and console log the data we get and see what happens. (typing) And then I'll use nodemon to execute our demo. As you can see we got some sort of output with a buffer at the start. That's not what we have inside our JSON. So what's going on? What's happening is we didn't specify the file format. And in order to read the JSON file and other documents we need to specify the UTF 8 format. So instead of the callback being the second parameter we'll push it over to the third parameter. And then we'll specify, as a string, UTF-8 as a second parameter. Let's save that and as you can see we're able to read in the JSON just fine.

Another good to know is that we can actually access our JSON file with a require directly instead of using read file. Let's try that out now. So I'll go to line two and create a data variable set it to require and specify the path to data.json. Then let's console log data. (typing) I'll save that. And now you can see we're getting two objects in our console. One from the require and one from our read file. They look a bit different so let's see what those differences are. The first thing I'm going to do is try to access the property name from our require to see if it's a true object or just a string. So I'll go over to line four and type in dot name. If I save that we can see it's outputting just the name. And so we're able to access the property and therefore it is an object. Let's try to do the same for our read file. As you can see, it's undefined. Therefore it is just a string. So let's create a new variable inside our read file callback called data and set it to json.parse. And then I'll pass in data. So, essentially it's taking our data parameter converting it to JSON and then overriding it. And then we're able to access data.name. And if we look in our console we can see there are two names being displayed.

## **Access directories**

Let's try to read directories with the file system as well. Let's create a [new demo file](node/Ex_Files_Learning_Node_js_2021_Q3/Exercise%20Files/03_02/demo.js). And once again, we'll need access to the file system. And so I'll require an fs. And we'll use a function from the file system called readdir. The first parameter we'll need to pass in is the location we want to read our directories from. So let's use Drive C as an example. Then once again, we'll create a callback that takes in an error and data. And then let's console-log the data. Let's save that, and I'll use nodemon to run demo. And you can see we're getting all of the directories inside our Drive C. As you can see, reading directories is very straightforward. Next let's take a look at writing files.

## **Write to a file**

 Let's move onto writing our own files. As usual, we'll begin by creating a new file, called [demo.js](./node/Ex_Files_Learning_Node_js_2021_Q3/Exercise%20Files/03_03/demo.js) and let's bring in the file system. In order to write a file, we're going to access the file system and use the function called [writeFile](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback). 
 
 The first parameter is the name of the file and we'll be writing a JSON file and we'll simply call it data.json. The second parameter, is the actual data that will be written to the file. We could add it inline, but I'm going to create a variable for that. So above our function, let's add a variable called data and set it to a JSON object. Inside here, we'll add a property called name and we'll pass in Bob as the value. And then, let's pass our new data object as the second parameter to our writeFile function. Let's save that, so let's go ahead and execute it. I'll use node and specify demo.js.
 
 As you can see, a data.json file is created. But if we look inside, we're not seeing what we expected. And that's because the second parameter expects a string, yet we're passing in a JSON object. So let's convert our object over into a string. So we could manually do it by wrapping everything in double quotes including the property name, but an easier way is to use JSON.stringify so I'll modify that on line seven. Let's save that and try running it again. Let's open our data.json and we can see that our JSON file is now in the correct format. So everything's working, but you might have noticed that we're getting a deprecation warning when we run our demo, telling us that calling an asynchronous function without a callback is deprecated. And if we hover over writeFile, we can see that the first parameter is the path, the second is the data, and the third is a callback, so let's create that.

 ```
 When file is a file descriptor, the behavior is almost identical to directly calling fs.write() like:

> import { write } from 'node:fs';
> import { Buffer } from 'node:buffer';

> write(fd, Buffer.from(data, options.encoding), callback);

The difference from directly calling fs.write() is that under some unusual conditions, fs.write() might write only part of the buffer and need to be retried to write the remaining data, whereas fs.writeFile() retries until the data is entirely written (or an error occurs).

The implications of this are a common source of confusion. In the file descriptor case, the file is not replaced! The data is not necessarily written to the beginning of the file, and the file's original data may remain before and/or after the newly written data.

For example, if fs.writeFile() is called twice in a row, first to write the string 'Hello', then to write the string ', World', the file would contain 'Hello, World', and might contain some of the file's original data (depending on the size of the original file, and the position of the file descriptor). If a file name had been used instead of a descriptor, the file would be guaranteed to contain only ', World'.
```
 
 And this simply passes an error, in case there was an error. And I'll just use a console.log and I'll write in the console 'write finished' and then I'll pass in the error in case there was an error. So let's save that and try to run it again. And you can see that the write was finished and we're no longer getting a deprecation warning. Now that we have a good idea of working with the file system, let's take a look at some of the popular web frameworks for Node.

 # **Exploring Web Frameworks**

 ## **Node.js Frameworks**

What is a framework? In its generic form a framework is an essential supporting structure of a building, vehicle, or object. In software, it's essentially the same thing. **It is a supporting structure that allows you to build on top of it.**

When it comes to web, and we want to build large APIs, or maybe HTTP servers, we can leverage web frameworks, and there are several options we can look at. Each of these provide us with the structure and components you need to quickly make serving static files, like traditional websites, easy. Or we can put together a web API to interact in a web app.

A web API is a service that allows us to get and save data to our server or back end, such as a web API that allows us to maybe create users, serve a list of users, etc.

Now let's take a look at the different options we have for web frameworks for Node. We'll be looking at **Express**, which is a very traditional framework. It's tried and tested, and it's simple to use. The next framework we'll look at is called **Sails**. It has many sub-frameworks such as an ORM, or object relational mapper, which gives us database access and many other rich features. Then there is **Koa**, which is the most modern framework.

## **Express**

We'll head over to [expressjs.com](https://expressjs.com/). If we scroll down a bit, we can see it has support for web applications and web APIs. 

But first, what is a web application? Is is something for the front end or something for the back end? When I think of apps, I think of things that run in your browser or mobile devices. But those apps often need to talk to a server. For example, to log users in or get a list of data to display, etc. One way to think of it is that a web app has some functionality on the front end and some on the back end. The app, as a whole, is distributed across both front and back end. Imagine Twitter without being able to get any tweets from its back end?

**Express.js runs within Node and Node is something just for the back end. But it contributes to the app as a whole which will talk to the back end.** As mentioned before, there is a lot of community support and online documentation because Express.js has been around for such a long time.

## **Socket.io**

[Socket.io](https://socket.io/) enables real time, bidirectional, event based communication. Express on the other hand allows the client to send a request to the server, but the server cannot send request to the client and so it does not have bidirectional communication.

Socket.io solves this, we can push notifications from the server to the client when an event happens, as well as other data.

Socket.io has two parts, a client side library that runs on the browser, and a server side library for node.js. Both components have an API that's nearly identical. And just like node.js, it is event driven. 

Now that we've had a brief intro into some of the most popular web frameworks for node, let's go ahead and create the demo application utilizing them. Let's look at that next.

# **Building your Demo App Chat Client for the browser**

## **Static serving with Express**

## **Create your browser app**

## **Create a get message service**

## **Create a post messages service**

## **Connect to Socket.io from the browser app**

## **create your Socket.io event**
