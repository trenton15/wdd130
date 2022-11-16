// Render the header
function headerTemplate() {
    return `<a href="/wdd130/final-project/final.html" class="logo"><img src="/wdd130/images/salon_logo_long2.png" alt="jana's salon logo"></a>`
}

function renderHeader() {
    // Get element
    const element = document.querySelector('header');
    // Build html string
    const html = headerTemplate()
    // Insert html into element
    element.innerHTML = html;
}

// Render the navigation bar
function navTemplate() {
    return `
    <div class="nav" id="topNav">
        <a href="/wdd130/final-project/final.html">Home</a>
        <a href="/wdd130/final-project/schedule.html">Schedule</a>
        <a href="/wdd130/final-project/contact.html">Contact</a>
        <a href="javascript:void(0);" class="icon" onclick="addResponsive()">
            <i class="fa fa-bars"></i>
        </a>
    </div>`
}

function renderNav() {
    // Get element
    const element = document.querySelector('nav');
    // Build html string
    const html = navTemplate()
    // Insert html into element
    element.innerHTML = html;
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function addResponsive() {
    var x = document.getElementById("topNav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
}

// Render the footer
function footerTemplate() {
    return `<p>&copy2022 Trenton Murdock</p>`
}

function renderFooter() {
    // Get element
    const element = document.querySelector('footer');
    // Build html string
    const html = footerTemplate()
    // Insert html into element
    element.innerHTML = html;
}

renderNav();
renderFooter();
renderHeader();