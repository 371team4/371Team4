pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                bat 'echo Building..'
            }
        }
        stage('Test') {
            steps {
                bat 'echo Testing...'
                bat 'echo Multiline shell steps work too'
            }
        }
        stage ('Deploy') {
            steps {
                bat 'echo Deploying...'
            }
        }
    }

    post {
        always {
            echo 'This will always run'
        }
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
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}
