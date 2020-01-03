import fetch from "node-fetch";

async function crawlHtml(url: string): Promise<string> {
    return (await fetch(url)).text();
}

export default crawlHtml;
