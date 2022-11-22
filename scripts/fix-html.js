(() => {
  const { readFileSync, writeFileSync } = require('fs');
  const { resolve, join } = require('path');
  const { cwd } = require('process');
  const glob = require('glob');

  const out = resolve(cwd(), 'out');

  const rewriteHTML = (html) => html.replace(/(href|src)="\/_next/g, `$1="./_next`);

  const rewriteFile = (file) => {
    const content = readFileSync(file, 'utf8');
    writeFileSync(file, rewriteHTML(content));
    console.log('📝 fix html', file);
  };

  glob(join(out, '**', '*.html'), (_, files) => files.forEach(rewriteFile));
})();
