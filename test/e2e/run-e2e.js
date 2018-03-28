const mvn = require('maven').create({
  cwd: __dirname,
  updateSnapshots: true
})

mvn
  .execute(['clean', 'compile'], { skipTests: true })
  .then(
    mvn
      .execute(['test', 'surefire-report:report-only', 'site'], {
        'maven.test.failure.ignore': true,
        generateReports: false
      })
      .catch(e => console.error(e))
  )
  .catch(e => console.error(e))
