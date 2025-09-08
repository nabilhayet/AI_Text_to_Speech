const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('pauseButton');
const outputDiv = document.getElementById('output');
const textArea = document.getElementById("story");
const navigateButton = document.getElementById("navigate");
const typedText = document.getElementById("story");

let mediaRecorder;
let audioChunks = [];
let result = "";


// --- AI Speech-to-Text Injection (Whisper API) ---

// Start recording
startButton.addEventListener('click', async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = e => {
        audioChunks.push(e.data);
    };

    mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
        audioChunks = [];

        const formData = new FormData();
        formData.append("file", audioBlob, "speech.webm");
        formData.append("model", "whisper-1");

        const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer YOUR_API_KEY` // <-- Put your API key here
            },
            body: formData
        });

        const data = await response.json();
        if (data.text) {
            result += data.text + " ";
            outputDiv.textContent = result;
        } else {
            console.error("Whisper API error:", data);
        }
    };

    mediaRecorder.start();
    startButton.disabled = true;
    stopButton.disabled = false;
    startButton.textContent = 'Recording...';
    typedText.disabled = false;
});

// Stop recording
stopButton.addEventListener('click', () => {
    mediaRecorder.stop();
    startButton.disabled = false;
    stopButton.disabled = true;
    navigateButton.disabled = false;
});
