pipeline {
    agent any

    stages {
        stage('Install Deps') {
            steps {
                bat 'npm install'
            }
        }
        stage('Lint') {
            steps {
                bat 'npm run lint-fix'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps {
                bat 'npm run unit'
                // bat 'npm run e2e'
            }
        }
    }

    post {
        always {
            deleteDir()   /* clean up our workspace */
        }
    }
}
