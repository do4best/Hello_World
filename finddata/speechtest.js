const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
console.log(SpeechRecognition)
if (!SpeechRecognition) {
    console.error("No SpeechRecognization found")
} else {
    const r = new SpeechRecognition()
    r.continuous = false;
    r.interimResults = false;
    r.maxAlternatives = 1;

    r.onstart = function () { console.log("R is started") };
    r.onresult =async function (event) {
        const transcript = event.results[0][0].transcript;
        console.log(`You Said ${transcript}`)
        const result = await callGimini(transcript)
        console.log(result)
    };
   async function callGimini(text) {
       const body = {
           system_instruction: {
               "parts": [
                   {
                       "text":"Daurling"
                   }
               ]
            },
            "contents": [{
                "parts": [
                    {
                      "text": text  
                    }
                  ]
            }]
        }
        const Api_Key = "AIzaSyCSj5n4V6MJhCo2_dwKTenendzSZCB4Fww"
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${Api_Key}`, {
            method: "POST",
            headers: { "content_type": "application/json" },
            body:JSON.stringify(body)
        })
       const result = response.json();
       return result;
    }
    r.onstart();
    console.log("Started")
    const btnEle = document.getElementById("btn")

btnEle.addEventListener("click",()=>r.onstart())
}
