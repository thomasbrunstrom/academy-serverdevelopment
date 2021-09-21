# NodeJS

## Task 1

Create a javascript file that prints the phrase "Hello sunshine, whats cooking good looking?" to the terminal/console.
Try both stdout and console.log.

Run the program with `node <filename.js>`

## Task 2

### Task 2.1

Write a program that lists the files in a directory when run. If the start of the program doesnt get any parameters list the files in the current directory. If you supply a parameter, list the files in that directory.

Example:

```
$ node lecture2.js
-> .git
-> .gitignore
-> images
-> internet.md
-> LICENSE
-> nodejs.md
-> README.md
```

Example:

```
$ node lecture2.js ./images/
-> frank-berlin.jpg
-> frank-london.jpg
-> frank-paris.jpg
-> joe-berlin.jpg
-> joe-london.jpg
-> joe-paris.jpg
-> mary-berlin.jpg
-> mary-london.jpg
-> mary-paris.jpg
-> random.jpg
```

### Task 2.2

Do the same thing but use the synchronous function of readDir(Sync) to get the same result.
Change the program so that you can supply a parameter -a to use sync or async to readdir.

> Hint: -a as a paramter

## Task 3

In canvas you can find a zipfile with images, download and extract into the images folder. The name of the files is structured with the following pattern. <photographer>-<location>.jpg. Which is fine if you want to sort the images by photographer.

It's not that good when you want to sort by location, make a program that copies the images to a new directory named after the city the image is take in.

Call your program with `node <filename>` and the program should then put each photo in a folder named after it's location.

For example: the joe-berlin.jpg and frank.berlin.jpg should be copied into a folder named berlin, joe-paris.jpg and mary-paris.jpg should be copied into a folder named paris.

The program should print out a list of files that didn't fit the format in the end.

Example output:
node pictureSorter.js

```
Unhandled files:
  random.jpg
  README.md
```

## Task 4

Write a program that converts a csv-file to a JSON-file.

The file persons.cvs contains a number of people with their name and email-address on each line. The values are seperated with ;.

You should write a program that reads the lines and convert the content of the file into a fitting JSON-format. For instance an array with each person/email combo as a object.

The program should then write to a new file, persons.json with the right format.

> Hint: JSON.stringify.

Bonus: Make the program ask the user if he/she wants to convert from cvs to json or json to csv. Handle if the persons.json file does not exists. `fs.exists` or `fs.existsAsync`
