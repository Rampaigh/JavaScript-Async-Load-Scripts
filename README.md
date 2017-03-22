# JavaScript Async Load Scripts
Using pure JavaScript to load Stylesheets and JavaScript files asynchronously into webpage


> ### LoadScript.js
> Load JavaScript files in an async manner using the `LoadScript` function
> 
> ##### Usage
> ```javascript
/*
  @param {string} URL - The URL of the JavaScript File
  @param {bool} Async - Load JavaScript File asynchronously
*/
LoadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js', true);
```


> ### LoadStyle.js
> Load Stylesheet files in an async manner using the `LoadStyle` function
> 
> ##### Usage
> ```javascript
/*
  @param {string} URL - The URL of the Stylesheet
  @param {bool} Async - Load Stylesheet asynchronously
*/
LoadStyle('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', true);
```
