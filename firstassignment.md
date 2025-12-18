# React Setup For WTF December project

## Assignment Questions 
1. What is NPM and Package.json
2. What is vite

## Before explaining what NPM is let's understand what packages are 
Imagine you're building a house. To buid this house, you could actually make every brick and block yourself, craft and design every piece of wood, and forge every nail. But that would take forever! Instead, you go to a hardware store, buy pre-made materials, and assemble them. Packages work exactly the same way in software development. They're pre-written code that provides specific functionality, allowing developers to focus on building their own unique features rather than reinventing tools that are common and can be reused by many.

Basically, a package is a bundled collection of code, resources, and metadata designed to provide specific functionality. Examples of packages includ, tailwind CSS, Express, Jest among others.

## History of NPM, how it came about 
In the early days of JavaScript and Node.js, developers had a major headache. There was no standardized way to share and manage reusable code. If you wanted to use someone else's code in your project, you'd have to manually download files, track versions, and manage dependencies (other code that your code depends on). It was chaotic and error-prone.

In January 2010, Isaac Z. Schlueter created NPM (originally standing for Node Package Manager) to solve this problem. He was influenced by similar tools in other programming languages like PEAR for PHP and CPAN for Perl. NPM was designed to be a lightweight and community-oriented—a centralized place where developers could publish their code and others could easily install it.

## why Package Managers and what is NPM

### Why Package Managers
A package manager is a tool that makes installing, updating, configuring, and removing packages automated. Without a package manager, managing dependencies would be incredibly frustrating and scattered, this problem is so common it even has a name: "dependency hell."

Dependency hell occurs when your project has conflicting package requirements. For example:​

Package A requires Version 1.0 of Library X

Package B requires Version 2.0 of Library X

You can only have one version installed

Result: Your project breaks!

This is why they Package Managers are needed, they act as intelligent coordinators:

1. Check dependencies: When you install a package, the manager checks what other packages it needs

2. Automatically install related packages: It downloads and installs all required dependencies

3. Version management: It tracks which versions are compatible and installs the right ones

4. Prevent conflicts: It maintains a database to avoid version mismatches

5. Update and remove: It safely updates packages or removes them without breaking your project

coomon pacakag managers include; npm, yarn, pnpm among others.

### What is NPM
NPM (Node Package Manager) is the default package manager for JavaScript and Node.js. It consists of three main components:​

1. The NPM CLI (Command-Line Interface): A command-line tool you use to interact with NPM on your computer

2. The NPM Registry: A massive online database containing millions of packages

3. The NPM Website: Where you can search for and browse available packages

#### How NPM Works

When you use NPM to install a package:​

```
example
npm install express

```

Here's what happens behind the scenes:

1. NPM checks your local machine to see if Express is already installed

2. It connects to the npm registry (npmjs.com) and downloads the package

3. It extracts all files into a folder called node_modules

4. It records the package name and version in your package.json file

5. If Express depends on other packages, NPM installs those too automatically

## What is package.json ?

The package.json file is a JSON file that lives in the root of your Node.js project. It is  the heart of your project, basically a comprehensive blueprint that describes everything about your project and what it needs to run.​

### Why is package.json Important?​

1. Identifies your project: Records the name, version, description, author, and license

2. Manages dependencies: Lists all external packages your project uses

3. Runs scripts: Defines custom commands for testing, building, and deploying

4. Configuration: Specifies the main entry point and other settings

5. Enables collaboration: Lets other developers instantly install the exact same dependencies