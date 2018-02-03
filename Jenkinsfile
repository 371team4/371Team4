pipeline {
    agent any
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
