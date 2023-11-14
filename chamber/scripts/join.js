/* JOIN */
function msg() { console.log("asd") };
function showMembershipInfo(membership) {
    const membershipDiv = document.querySelector(".membership-info");
    var info = "";
    switch (membership) {
        case "np":
            info =
                `
        <ul>
        <li>Monthly price: <b>Free</b></li>
        <li>Access to resources for non-profits</li>
        </ul>
        `
            break;

        case "bronze":
            info =
                `
        <ul>
        <li>Monthly price: <b>$100</b></li>
        <li>2 professional training sessions per month</li>
        <li>Workshops for professional development</li>
        </ul>
        `
            break;

        case "silver":
            info =
                `
        <ul>
        <li>Monthly price: <b>$200</b></li>
        <li>5 professional training sessions per month</li>
        <li>3 days of advertising in spotlight</li>
        </ul>
        `
            break;

        case "gold":
            info =
                `
        <ul>
        <li>Monthly price: <b>$300</b></li>
        <li>Unlimited professional training sessions per month</li>
        <li>7 days of advertising in spotlight</li>
        <li>And many more...</li>
        </ul>
        `
            break;
    }
    membershipDiv.innerHTML = info;
}

/* GET LOCAL DAY */
function getHiddenDate() {
    let dateElement = document.querySelector("#hiddenDate");
    dateElement.value = date.toLocaleDateString("en-US", lastModifiedOptions);
    console.log(hiddenDate.value);
};