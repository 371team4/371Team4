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
                bat 'git reset --hard'    /* do this to avoid unstaged changes error */

                bat 'echo %BRANCH_NAME%'
                bat '''
                    IF %BRANCH_NAME% == 'Development' (
                        git rebase origin/Development
                    )
                    IF %BRANCH_NAME% == 'master' (
                        git rebase origin/master
                    ) ELSE (
                        git rebase origin/%CHANGE_TARGET%
                    )
                '''

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
