![GitHub Repo stars](https://img.shields.io/github/stars/nabilhayet/OS) ![GitHub forks](https://img.shields.io/github/forks/nabilhayet/OS) ![GitHub followers](https://img.shields.io/github/followers/nabilhayet) ![Bitbucket open issues](https://img.shields.io/bitbucket/issues/nabilhayet/OS)                                          
                                        <h1>:jack_o_lantern: Keyboard Navigation :jack_o_lantern: </h1>
                                                      
This groundbreaking project assists individuals without vision in navigating letters on a keyboard. It takes input from the user and continues until the stop button is pressed. When the navigate button is activated, the system echoes the user's input and displays the text on the webpage. 

A key feature of this project is the keyboard navigation functionality. It provides real-time voice feedback to users, informing them if they pressed the correct letter. In cases of an incorrect key press, the system instructs the user to delete the character and guides them to the correct position on the keyboard. This voice-guided assistance persists until the end of the input is reached. 
<li><a href="https://www.youtube.com/watch?v=Hn_W5HWUBPA">Demo</a></li>


Table of Contents
- [Features](#features)
- [Tech-Stack](#tech-stack)
- [Installing](#installing)
- [Challenges](#challenges)
- [Future-Implementation](#future-implementation)
- [Code-Snippet](#code-snippet)
                               
## Features
<ul>
   <li>Record User's speech</li>
   <li>Speech to text</li>
   <li>Text to Speech</li>
   <li>Stop button to stop recording</li>
  <li>Navigate button to echo user's speech</li>
  <li>Navigate keyboard letters as voice command while typing</li>
</ul>

## Record User's Speech
![start_stop_recording](https://github.com/user-attachments/assets/ce46c97a-b4de-4fb4-8b85-11043aef614a)
## Echo User's Input
![navigate](https://github.com/user-attachments/assets/83ebcf26-fb08-4fab-b1da-698d650f5018)
## Navigate Keyboard's letters 
![keyboard_navigate](https://github.com/user-attachments/assets/a9aaa684-1441-4d52-a74d-68dbe209253e)

## Tech-Stack
<p>This Web app makes use of the following:</p>
*  Javascript
*  HTML
*  CSS

## Installing
<ul>
   <li> Clone this repo to your local machine git clone <this-repo-url></li>
  <li> Make sure your browser is upto date</li>
  <li>Only Chrome & Firefox supports speech recognition </li>
  <li> run index.html</li>
</ul>
        
## Challenges
<ul>
  <li>Continuous navigation from one button to another</li>
  <li>Removing unexpected input from voice command </li>
  <li> Mapping letters to keyboard position</li>
  <li> Echo voice command for each input</li>
</ul>

## Future-Implementation
<ul>
  <li>Getting more accurate input from user</li>
  <li>Improve keyboard navigation's algorithm</li>
  <li>Adding voice command replacing buttons</li>
</ul>

## Code-Snippet 

```
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('pauseButton')
const outputDiv = document.getElementById('output');
const textArea = document.getElementById("story");
const navigateButton = document.getElementById("navigate");
const typedText = document.getElementById("story");
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
let result = ""

recognition.final
recognition.continuous = true;

startButton.addEventListener('click', () => {
    recognition.start();
    startButton.disabled = true;
    stopButton.disabled = false
    startButton.textContent = 'Recording...';
    typedText.disabled = false
    if (result.length > 0) {
        result += " "
    }
});

stopButton.addEventListener('click', () => {
    recognition.stop()
    startButton.disabled = false
    stopButton.disabled = true
    navigateButton.disabled = false
    //  result += " "
    outputDiv.textContent = result
})
```



