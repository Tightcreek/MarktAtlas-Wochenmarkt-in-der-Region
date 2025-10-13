import { christmasMarkets } from './src/data/weihnachtsmarktdata';

// Find duplicate IDs
const ids = christmasMarkets.map(m => m.id);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
const uniqueDuplicates = [...new Set(duplicates)];

console.log('Total markets:', christmasMarkets.length);
console.log('Duplicate IDs found:', uniqueDuplicates);

if (uniqueDuplicates.length > 0) {
  uniqueDuplicates.forEach(dupId => {
    const markets = christmasMarkets.filter(m => m.id === dupId);
    console.log(`\nID "${dupId}" appears ${markets.length} times:`);
    markets.forEach(m => console.log(`  - ${m.name} (${m.city})`));
  });
}
