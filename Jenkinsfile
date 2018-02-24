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

                bat '''
                    IF %BRANCH_NAME% == Development (
                        git rebase origin/Development
                    ) ELSE (
                        IF %BRANCH_NAME% == master (
                            git rebase origin/master
                        ) ELSE (
                            IF %BRANCH_NAME:~0,7% == feature (
                                git rebase origin/%BRANCH_NAME%
                            ) ELSE (
                                IF %BRANCH_NAME:~0,5% == issue (
                                    git rebase origin/%BRANCH_NAME%
                                ) ELSE (
                                    IF %BRANCH_NAME:~0,7% == jenkins (
                                        git rebase origin/%BRANCH_NAME%
                                    ) ELSE (
                                        git rebase origin/%CHANGE_TARGET%
                                    )
                                )
                            )
                        )
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
    }
}
