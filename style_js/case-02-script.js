let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

const updateColors = () => {
    // last color ek allagnnw
    let lastColor = colors.pop();
    // mul color ekt last color ek set krnw
    colors.unshift(lastColor);

    // array eke content ek maru krnw
    colors.map((item,index) => {document.getElementsByClassName("light")[index].style.backgroundColor = item});

    console.log(colors);
}

// function ekt intervalekk denw
setInterval(updateColors, 3000);

