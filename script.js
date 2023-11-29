async function shortURL() {
    const Url = document.getElementById("url").value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(Url)}`);
    if (response.ok) {
        const data = await response.text();
        document.getElementById('result').innerHTML = `
        Shortend URL : <a href="${data }" target="_blank">${data}</a>`;
    }
    else{
        document.getElementById('result').innerHTML = "❌ ERROR ❌"
    }

}
function refreshPage() {
    location.reload();
}