pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'echo Getting Dependencies...'
                bat 'npm install'

                bat 'echo Linting...'
                bat `npm run lint-fix`

                bat 'echo Building...'
                bat 'npm build'
            }
        }
        stage('Test') {
            steps {
                bat 'echo Testing...'
                bat 'npm unit tests'
                bat 'npm e2e tests'
            }
        }
        stage ('Deploy') {
            steps {
                bat 'echo Deploying...'
                bat 'npm run deploy'
            }
        }
    }

    post {
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
        }
    }
}
