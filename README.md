# Sitemap.xml URL Extractor
This Node.js script extracts URLs from one or more sitemap.xml files and appends them to a text file.

## Requirements
- Node.js v10 or higher
- The following Node.js modules:
- - fs
- - https
- - xml2js


## Installation
Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/sitemap-url-extractor.git
```

Navigate to the project directory:

```bash
cd sitemap-url-extractor
```
Install the required Node.js modules:

```bash
npm install
```
## Usage
Open the index.js file in a text editor.

Modify the sitemapUrls array to include the URLs of the sitemap.xml files you want to extract URLs from OR you could load sitemap.xml urls from sitemaps.txt file.

Save the changes to the index.js file.

Run the script using Node.js:

```bash
node index.js
```

The script will fetch each sitemap.xml file, extract the URLs, and append them to a file called urls.txt in the project directory.