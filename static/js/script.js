const $ = selector => document.querySelector(selector);

const $html = $("#html");
const $css = $("#css");
const $js = $("#js");
const $iframe = $("#view");

$html.addEventListener("input", update);
$css.addEventListener("input", update);
$js.addEventListener("input", update);

function update(){
    const code = setHTML();
    $('iframe').setAttribute('srcdoc', code);
}

const setHTML = () => {
    const html = $html.value;
    const css = $css.value;
    const js = $js.value;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            ${css}
        </style>
    </head>
    <body>
        ${html}
        <script>
            ${js}
        </script>
    </body>
    </html>`
}