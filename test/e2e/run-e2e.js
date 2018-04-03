// read argument passed down
const headless = process.argv[2] === '--headless'

// system props for java
const defines = {
  'maven.test.failure.ignore': true,
  generateReports: false,
  test: 'com.reparty.test.**'
}

// add chrome.headless if we were asked to run headless
if (headless) {
  defines['chrome.headless'] = headless
}

const mvn = require('maven').create({
  cwd: __dirname,
  updateSnapshots: true
})

mvn
  .execute(['clean', 'compile'], { skipTests: true })
  .then(
    mvn
      .execute(['test', 'surefire-report:report-only', 'site'], defines)
      .catch(e => console.error(e))
  )
  .catch(e => console.error(e))
