const title_area = document.querySelector(".title")
const body_area = document.querySelector("body")

if (title_area) {
    const title = title_area.childNodes[1].textContent.replace(/: /g, " - ")
    const url = window.location.href

    const yearmonth = url.match(/\d+/g).map(Number)[0]
    const download_filename = "20" + yearmonth + " " + title + ".pdf"
    const pdf_url = url.replace("arxiv.org", "browse.arxiv.org").replace("abs", "pdf") + ".pdf"
    const markdown_filename = ("_20" + yearmonth + " " + title + ".md")
        .replace(/ - /g, "-")
        .replace(/: /g, "-")
        .toLowerCase()
        .replace(/ /g, "-")

    // console.log("title: " + title)
    // console.log("url: " + url)
    // console.log("yearmonth: " + yearmonth)
    // console.log("download_filename: " + download_filename)
    // console.log("pdf_url: " + pdf_url)
    // console.log("markdown_filename: " + markdown_filename)

    // create copy markdown filename button
    const copy_button1 = document.createElement("button")
    copy_button1.onclick = function () {
        navigator.clipboard.writeText(markdown_filename)
    }
    copy_button1.innerHTML = "copy text \"" + markdown_filename + "\""
    copy_button1.style = "margin-left: 10px; font-size: 10px; background-color: #CCCFCC; border: none; padding: 5px 10px; text-align: center; text-decoration: none; display: inline-block; cursor: pointer;"
    body_area.prepend(copy_button1)

    // create copy download filename button
    const copy_button2 = document.createElement("button")
    copy_button2.onclick = function () {
        navigator.clipboard.writeText(download_filename)
    }
    copy_button2.innerHTML = "copy text \"" + download_filename + "\""
    copy_button2.style = "margin-left: 10px; font-size: 10px; background-color: #CCCFCC; border: none; padding: 5px 10px; text-align: center; text-decoration: none; display: inline-block; cursor: pointer;"
    body_area.prepend(copy_button2)

    // // create download button - this button is not working anymore because of CORS policy
    // const download_button = document.createElement("a")
    // download_button.href = pdf_url
    // download_button.download = download_filename
    // download_button.innerHTML = "Download PDF"
    // // style as a button
    // download_button.style = "margin-left: 10px; font-size: 10px; background-color: #CCCFCC; border: none; padding: 5px 10px; text-align: center; text-decoration: none; display: inline-block;"
    // body_area.prepend(download_button)
}
