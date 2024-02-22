function run(){
    let html = document.getElementById("html");       // Text area for html code
    let css = document.getElementById("css");         // Text area for css code
    let js = document.getElementById("js");           // Text area for js code

    let output = document.getElementById("output");    // Output frame/window

    // Displaying on output window
    output.contentDocument.body.innerHTML = html.value + "<style>" + css.value + "</style>";
    output.contentWindow.eval(js.value);

    let buttonCopyHtml = document.getElementById("copyHtml");       // HTML copy button
    let buttonClearHtml = document.getElementById("clearHtml");     // HTML clear button

    let buttonCopyCss = document.getElementById("copyCss");         // CSS copy button
    let buttonClearCss = document.getElementById("clearCss");       // CSS clear button

    let buttonCopyJs = document.getElementById("copyJs");           // JS copy button
    let buttonClearJs = document.getElementById("clearJs");         // JS clear button


    // Copying html code
    buttonCopyHtml.addEventListener("click", function() {
        // Select the text in the textarea
        html.select();

        // Copy the selected text to the clipboard
        navigator.clipboard.writeText(html.value);
        html.blur();

        // Changing the background color and text of copy button when it is clicked for 2 seconds.
        buttonCopyHtml.style.backgroundColor = "#1A1A1A";
        buttonCopyHtml.textContent = "COPIED";
        
        setTimeout(function(){
            buttonCopyHtml.style.backgroundColor = "black";
            buttonCopyHtml.textContent = "COPY CODE";
        },1000);
        
    });

    // Clearing html code
    buttonClearHtml.addEventListener("click" , function(event){
        document.getElementById("html").value = "";
        
        // Updating output window
        output.contentDocument.body.innerHTML = html.value + "<style>" + css.value + "</style>";
        output.contentWindow.eval(js.value);
    });

    // Copying css code
    buttonCopyCss.addEventListener("click", function() {
        // Select the text in the textarea
        css.select();

        // Copy the selected text to the clipboard
        navigator.clipboard.writeText(css.value);
        css.blur();


        // Changing the background color and text of copy button when it is clicked for 2 seconds.
        buttonCopyCss.style.backgroundColor = "#1A1A1A";
        buttonCopyCss.textContent = "COPIED";
        
        setTimeout(function(){
            buttonCopyCss.style.backgroundColor = "black";
            buttonCopyCss.textContent = "COPY CODE";
        },1000);
        
        
    });

    // Clearing css code
    buttonClearCss.addEventListener("click" , function(event){
        document.getElementById("css").value = "";

        // Updating output window
        output.contentDocument.body.innerHTML = html.value + "<style>" + css.value + "</style>";
        output.contentWindow.eval(js.value);
    });


    // Copying js code
    buttonCopyJs.addEventListener("click", function() {
        // Select the text in the textarea
        js.select();

        // Copy the selected text to the clipboard
        navigator.clipboard.writeText(js.value);
        js.blur();

        // Changing the background color and text of copy button when it is clicked for 2 seconds.
        buttonCopyJs.style.backgroundColor = "#1A1A1A";
        buttonCopyJs.textContent = "COPIED";
        
        setTimeout(function(){
            buttonCopyJs.style.backgroundColor = "black";
            buttonCopyJs.textContent = "COPY CODE";
        },1000);
        
        
    });

    // Clearing js code
    buttonClearJs.addEventListener("click" , function(event){
        document.getElementById("js").value = "";

        // Updating output window
        output.contentDocument.body.innerHTML = html.value + "<style>" + css.value + "</style>";
        output.contentWindow.eval(js.value);
    });


    // Removing the default behavior of tab key which was to switch to next field.
    html.addEventListener("keydown", function(event) {
        if (event.key === "Tab") {
            event.preventDefault();
        }
    });
    // Removing the default behavior of tab key which was to switch to next field.
    css.addEventListener("keydown", function(event) {
        if (event.key === "Tab") {
            event.preventDefault();
        }
    });
    // Removing the default behavior of tab key which was to switch to next field.
    js.addEventListener("keydown", function(event) {
        if (event.key === "Tab") {
            event.preventDefault();
        }
    });


}