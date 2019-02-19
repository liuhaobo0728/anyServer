<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{title}}</title>
    <style>
        body{
            margin: 50px;
        }
        a{  
            display: block;
            font-size: 20px;
            color: blue;
        }
    </style>
</head>
<body>
    {{#each files}}
    <a href="{{../dir}}/{{files}}">[{{icon}}]{{files}}</a>
    {{/each}}
</body>
</html>