const fs = require('fs');
const https = require('https');
const xml2js = require('xml2js');


const outputFile = 'urls.txt';

// const sitemapUrls = fs.readFileSync('sitemaps.txt', 'utf-8').split('\n');

const sitemapUrls = [
    'https://example.com/sitemap.xml',
    'https://example.com/fr/sitemap.xml',
    'https://example.com/de/sitemap.xml'
];

function processSitemap(sitemapUrl) {
    https.get(sitemapUrl, (res) => {
        if (res.statusCode !== 200) {
            console.error(`Failed to fetch sitemap (${res.statusCode}): ${res.statusMessage}`);
            return;
        }

        // Concatenate the response data
        let data = '';
        res.on('data', chunk => {
            data += chunk;
        });

        // Parse the XML data when the response is complete
        res.on('end', () => {
            xml2js.parseString(data, (err, result) => {
                if (err) {
                    console.error(err);
                    return;
                }

                // Extract all the URLs from the sitemap
                const urls = result.urlset.url.map(url => url.loc[0]);

                // Append the URLs to a file
                fs.appendFile(outputFile, urls.join('\n') + '\n', (err) => {
                    if (err) {
                        console.error(err);
                        return;
                    }

                    console.log(`Appended ${urls.length} URLs from ${sitemapUrl} to ${outputFile} `);
                });
            });
        });
    }).on('error', (err) => {
        console.error(err);
    });
}

sitemapUrls.forEach(processSitemap);