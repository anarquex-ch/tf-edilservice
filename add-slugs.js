const fs = require('fs');
const path = require('path');

const serviziDir = path.join(__dirname, 'src', 'app', 'servizi');
const directories = fs.readdirSync(serviziDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(name => name !== '[service]' && name !== 'impianti-elettrici');

let subServicesDataSnippet = "";

directories.forEach(dir => {
  const pagePath = path.join(serviziDir, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) return;
  
  let content = fs.readFileSync(pagePath, 'utf8');
  
  // 1. Add slug to features
  content = content.replace(/{ title: "([^"]+)", description: "([^"]+)" }/g, (match, title, description) => {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    // Add to subServicesDataSnippet
    subServicesDataSnippet += `    "${slug}": {\n`;
    subServicesDataSnippet += `      title: "${title}",\n`;
    subServicesDataSnippet += `      subtitle: "${description}",\n`;
    subServicesDataSnippet += `      description: "${description} Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",\n`;
    subServicesDataSnippet += `      imageUrl: "/images/servizi/${dir}.jpg",\n`;
    subServicesDataSnippet += `      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]\n`;
    subServicesDataSnippet += `    },\n`;

    return `{ title: "${title}", description: "${description}", slug: "${slug}" }`;
  });

  // Multiline versions
  content = content.replace(/{\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)"\s*}/g, (match, title, description) => {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    subServicesDataSnippet += `    "${slug}": {\n`;
    subServicesDataSnippet += `      title: "${title}",\n`;
    subServicesDataSnippet += `      subtitle: "${description}",\n`;
    subServicesDataSnippet += `      description: "${description} Offriamo soluzioni all'avanguardia e su misura per ogni esigenza in tutto il Canton Ticino.",\n`;
    subServicesDataSnippet += `      imageUrl: "/images/servizi/${dir}.jpg",\n`;
    subServicesDataSnippet += `      keyPoints: [{ text: "Servizio di alta qualità" }, { text: "Personale qualificato" }, { text: "Soluzioni personalizzate" }, { text: "Assistenza dedicata" }]\n`;
    subServicesDataSnippet += `    },\n`;

    return `{ title: "${title}", description: "${description}", slug: "${slug}" }`;
  });

  // 2. Add parentSlug to ServiceContent
  if (!content.includes(`parentSlug="${dir}"`)) {
    content = content.replace(/(<ServiceContent[\s\S]*?)( \/>)/, `$1 parentSlug="${dir}"$2`);
  }

  fs.writeFileSync(pagePath, content);
  
  console.log(`Updated ${dir}`);
  
  // Output snippet for the current service
  fs.appendFileSync('subServicesOutput.txt', `\n  "${dir}": {\n${subServicesDataSnippet}  },`);
  subServicesDataSnippet = ""; // reset
});

console.log('Done!');
