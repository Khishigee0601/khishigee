var xhr = new XMLHttpRequest();
xhr.open("GET", "https://ikon.mn/rss", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var xmlDoc = xhr.responseXML;
        var items = xmlDoc.getElementsByTagName("item");
        var newsList = document.getElementById("news-list");

        for (var i = 0; i < items.length; i++) {
            var title = items[i].getElementsByTagName("title")[0].textContent;
            var link = items[i].getElementsByTagName("link")[0].textContent;
            var description = items[i].getElementsByTagName("description")[0].textContent;

            var listItem = document.createElement("li");
            listItem.innerHTML = `<a href="${link}" target="_blank">${title}</a><p>${description}</p>`;
            newsList.appendChild(listItem);
        }
    }
};
xhr.send();
