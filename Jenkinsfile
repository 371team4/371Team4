// CMPT 371 Team 4

pipeline {
	agent { docker 'python:3.5.1' }
        stages {
        stage('test') {
            steps {
                sh 'python --version'
                sh '''
                    echo "Multiline shell steps work too"
                    ls -lah
                '''
            }
        }
    }
}
