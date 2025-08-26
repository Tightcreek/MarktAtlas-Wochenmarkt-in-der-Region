import fs from 'fs';
import path from 'path';

// Read the weihnachtsmarktdata.tsx file
const filePath = path.join(process.cwd(), 'src/data/weihnachtsmarktdata.tsx');
const content = fs.readFileSync(filePath, 'utf-8');

// Extract just the markets array content
const arrayStart = content.indexOf('export const christmasMarkets: ChristmasMarket[] = [');
const arrayEnd = content.lastIndexOf('];');

if (arrayStart === -1 || arrayEnd === -1) {
  console.error('Could not find the christmasMarkets array');
  process.exit(1);
}

const beforeArray = content.substring(0, arrayStart);
const afterArray = content.substring(arrayEnd + 2);

// Parse the array content to extract individual market objects
const arrayContent = content.substring(arrayStart, arrayEnd + 2);

// Extract markets using regex
const marketRegex = /{\s*id:\s*"([^"]+)"/g;
const markets: any[] = [];
const seenIds = new Set<string>();

let match;
let currentIndex = 0;

// Find all market objects and track duplicates
const marketObjects: Array<{start: number, end: number, id: string, content: string}> = [];

while ((match = marketRegex.exec(arrayContent)) !== null) {
  const id = match[1];
  const matchStart = match.index;
  
  // Find the start of this object (look backwards for opening brace)
  let objectStart = matchStart;
  while (objectStart > 0 && arrayContent[objectStart] !== '{') {
    objectStart--;
  }
  
  // Find the end of this object (look forwards for closing brace)
  let braceCount = 0;
  let objectEnd = objectStart;
  for (let i = objectStart; i < arrayContent.length; i++) {
    if (arrayContent[i] === '{') braceCount++;
    if (arrayContent[i] === '}') {
      braceCount--;
      if (braceCount === 0) {
        objectEnd = i;
        break;
      }
    }
  }
  
  const marketContent = arrayContent.substring(objectStart, objectEnd + 1);
  
  if (!seenIds.has(id)) {
    seenIds.add(id);
    marketObjects.push({
      start: objectStart,
      end: objectEnd,
      id,
      content: marketContent
    });
  } else {
    console.log(`Found duplicate: ${id}`);
  }
}

// Rebuild the array with unique markets only
const uniqueMarkets = marketObjects.map(m => m.content).join(',\n  ');

const newContent = `${beforeArray}export const christmasMarkets: ChristmasMarket[] = [
  ${uniqueMarkets}
${afterArray}`;

// Write back to file
fs.writeFileSync(filePath, newContent, 'utf-8');

console.log(`Removed duplicates. Unique markets: ${marketObjects.length}`);
console.log('File has been updated.');