const title_area = document.querySelector(".title")
const body_area = document.querySelector("body")

if (title_area) {
    const title = title_area.childNodes[1].textContent.replace(/: /g, " - ")
    const url = window.location.href
    const url_protocol_host_port = url.match(/https?:\/\/[^\/]+/g)[0]

    const yearmonth = url.match(/\d+/g).map(Number)[0]
    const download_filename = "20" + yearmonth + " " + title + ".pdf"
    const pdf_url = url.replace("abs", "pdf") + ".pdf"
    const markdown_filename = ("_20" + yearmonth + " " + title + ".md")
        .replace(/ - /g, "-")
        .replace(/: /g, "-")
        .toLowerCase()
        .replace(/ /g, "-")

    // console.log("title: " + title)
    // console.log("url: " + url)
    // console.log("url_protocol_host_port: " + url_protocol_host_port)
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

    // create download button - this button may not be working on the other domains due to CORS policy
    const download_button = document.createElement("a")
    download_button.href = pdf_url
    download_button.download = download_filename
    download_button.innerHTML = "Download PDF"
    // style as a button
    download_button.style = "margin-left: 10px; font-size: 10px; background-color: #CCCFCC; border: none; padding: 5px 10px; text-align: center; text-decoration: none; display: inline-block;"
    body_area.prepend(download_button)

    if (!pdf_url.startsWith(url_protocol_host_port)) {
        download_button.innerHTML = "Download PDF (not working)"
        download_button.style = "margin-left: 10px; font-size: 10px; background-color: #CCCFCC; border: none; padding: 5px 10px; text-align: center; text-decoration: none; display: inline-block; cursor: not-allowed;"
        download_button.onclick = function () {
            alert("This button is not working for this PDF URL due to CORS policy. Please download the PDF manually.")
            return false
        }
    }
}
