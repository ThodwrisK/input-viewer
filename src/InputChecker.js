import './InputChecker.css';

function InputChecker(){
    var keysInList = [];

    // Handles removing timed out elements
    function setRemovalTimer(element){
        setTimeout(function(){
            //console.log("Timer triggered");
            element.classList.add("removing");
            element.addEventListener("animationend", ()=> {
                var keyIndex = keysInList.indexOf(element);
                keysInList.splice(keyIndex, 1);
                element.remove();
                });
        }, 3000);
    }

    function checkIfLimitReached(){
        console.log("Keys:" + keysInList.length);
    }
    

    window.addEventListener('keydown', function(event){
        if (event.repeat)
            return;
        
		console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
        
        var keyList = document.getElementById("list");
        
        var keyElement = document.createElement("li");
        keyElement.setAttribute("class", "key");
        
        var keyText = document.createElement("p");
        keyText.setAttribute("class", "key-text");

        // Key string
        var keyStr = event.key;
        switch (event.keyCode){
            case 37: keyStr = "←"; break;
            
        }
        keyText.textContent = keyStr;
        
        //
        keyElement.appendChild(keyText);
        keyList.appendChild(keyElement);
        
        //
        event.Handled = true;
        setRemovalTimer(keyElement);
        keysInList.push(keyElement);
        checkIfLimitReached();
    },
    )


    // Render return
    return(
        <div className="InputChecker">
            <ul id="list">
            </ul>
        </div>
    );
}

export default InputChecker;