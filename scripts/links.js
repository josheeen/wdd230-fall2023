const baseURL = "https://github.com/josheeen/wdd230";
const linksURL = "data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data);
        displayLinks(data.lessons);

    } catch (error) {
        console.error("Error:", error);
    }
}

function displayLinks(lessons) {
    console.log(lessons);
    const courseList = document.getElementById("course-list");

    lessons.forEach(lesson => {
        const lessonItem = document.createElement("li");
        const lessonTitle = document.createElement("a");
        lessonTitle.textContent = `Lesson ${lesson.lesson}`;
        lessonTitle.href = "#";

        const linksList = document.createElement("ul");

        lesson.links.forEach(link => {
            const listItem = document.createElement("li");
            const linkElement = document.createElement("a");
            linkElement.href = link.url;
            linkElement.textContent = link.title;

            listItem.appendChild(linkElement);
            linksList.appendChild(listItem);
        });

        lessonItem.appendChild(lessonTitle);
        lessonItem.appendChild(linksList);
        courseList.appendChild(lessonItem);
    });
}

getLinks();