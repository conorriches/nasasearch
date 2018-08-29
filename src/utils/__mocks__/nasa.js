import fs from 'fs';
import path from 'path';

const APIcall = (url) => {
    
    return new Promise((resolve, reject) => {
        switch (url) {
            case 'https://images-api.nasa.gov/metadata/123':
                resolve(getFile('audio_metadata.json'));
                break;
            case 'https://images-api.nasa.gov/search?q=Hello&media_type=image,audio':
                resolve(getFile('mixed-search.json'));
                break;
            case 'https://images-assets.nasa.gov/audio/Ep53_Mars is Hard/metadata.json':
                resolve(getFile('audio_metadata_data.json'));
                break;
            case 'https://images-api.nasa.gov/asset/123':
                resolve(getFile('audio_asset.json'));
                break;
            default:
                console.error(`Warning - URL not mocked out! URL: ${url}`);
                reject();

        }
    });
}

const getFile = (file => new Promise((resolve, reject) => {
    return fs.readFile(path.join("./test/__fixtures__", file), 'utf8', (err, data) => {
        if (err) reject(err);
        resolve(JSON.parse(data));
    });
}));


export default APIcall;