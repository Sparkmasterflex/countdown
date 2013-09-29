# Countdown Timer

A easily adjustable simple HTML/JavaScript countdown timer for whatever event, release date or deadline you may have going on.


## Getting started
```
$ git clone git@github.com:Sparkmasterflex/countdown.git
```

This will give you a needed javascript, json, html and css. You will notice that there is already a json and scss file for an example countdown.

## HTML (index.html)
You will need to create a scss or css file for your countdown timer and replace the link below with a link to your new css file.

```
<link rel="stylesheet" href="/stylesheets/masters-degree.css">
```

## Creating your timer
Create a <name>.json file to house the necessary data for your timer. You can user the masters-degree.json as a reference if you wish. The needed attributes are below:

```
{
  "Title of Countdown": {
    "logo": true/false,
  	"date": "YYYY-MM-DD",
  	"link": "http://example.com"
  }
}
```

If "logo" is set to true make sure to have a background image to add to the project.

## Styling for your timer

Now create a <name>.scss file for your project. If you have never used SASS before then you may use straight CSS or another preprocessor if you like.

```
// change these to your desired color
$bg-color: #000;
$link-color: #444;

body {
  background: $bg-color url(/images/<name>/your-image.jpg) no-repeat center center;
}

a {
  color: $link-color;
  &:hover { color: darken($link-color, 10%); }
}

time.countdown { 
  color: $link-color;
}

.logo {
  // update with your logo
  background-image: url(images/nothing.png);
  
  // add dimensions of your logo
  width: 200px;
  height: 100px;
}
```

> if using straght CSS do not include the $bg-color and $link-color, and replace these variables with your colors


## Finishing up
Remove the masters-degree.json, masters-degree.css and masters-degree.scss files. These are no longer needed.

## Questions
If you have any questions or suggestions please do not hesitate to contact me via twitter: [@Sparkmasterflex](https://twitter.com/intent/tweet?screen_name=Sparkmasterflex)


## Keith Raymond
[ifkeithraymond.com](http://ifkeithraymond.com)

[github](https://github.com/Sparkmasterflex)