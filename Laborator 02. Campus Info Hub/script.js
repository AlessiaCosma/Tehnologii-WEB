let data = []

fetch("resources.json")
.then(response => response.json())
.then(json => {
    data = json.resources
    showAll()
    showTags()
})

function showAll() {

    const list = document.getElementById("resourceList")
    list.innerHTML = ""

    data.forEach(r => {

        const li = document.createElement("li")

        li.innerHTML = r.name + " | " + r.location + " | " + r.program

        list.appendChild(li)
    })
}

function showStudy() {

    const list = document.getElementById("resourceList")
    list.innerHTML = ""

    const filtered = data.filter(r => r.type === "study")

    filtered.forEach(r => {

        const li = document.createElement("li")

        li.innerHTML = r.name + " | " + r.location

        list.appendChild(li)
    })
}

function showTags(){

    const tagList = document.getElementById("tags")
    tagList.innerHTML = ""

    let allTags = []

    data.forEach(r => {
        allTags = allTags.concat(r.tags)
    })

    const unique = [...new Set(allTags)]

    unique.forEach(tag => {

        const li = document.createElement("li")
        li.textContent = tag

        tagList.appendChild(li)
    })
}