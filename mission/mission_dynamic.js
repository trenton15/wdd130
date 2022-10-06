// replace with code to select dropdown element out of the HTML
const themeSelector = document.querySelector('#theme-select');

function changeTheme() {
    //check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!
    const value = themeSelector.value;
    // if the value is dark then:
    if (value === "Dark"){
        // add the dark class to the body
        document.body.classList.add('dark');
        // change the source of the logo to point to the white logo.
        document.querySelector("#imageid").src="/wdd130/images/byui-logo_white.png";
    }
    // otherwise
    else {
        // remove the dark class
        document.body.classList.remove('dark');
        // make sure the logo src is the blue logo.
        document.querySelector("#imageid").src="/wdd130/images/byui-logo_blue.jpg";
    }
}           
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.
document.querySelector('#theme-select').addEventListener('click', changeTheme);