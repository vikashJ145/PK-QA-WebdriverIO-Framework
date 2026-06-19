pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                dir('C:/Users/piyus/OneDrive/Documents/Vikash_Web/-PK-QA-WebdriverIO-Framework') {
                    bat 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('C:/Users/piyus/OneDrive/Documents/Vikash_Web/-PK-QA-WebdriverIO-Framework') {
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        bat 'npx wdio run wdio.conf.ts'
                    }
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                dir('C:/Users/piyus/OneDrive/Documents/Vikash_Web/-PK-QA-WebdriverIO-Framework') {
                    bat 'allure generate allure-results --clean -o allure-report'
                }
            }
        }
    }

    post {
    always {
        dir('C:/Users/piyus/OneDrive/Documents/Vikash_Web/-PK-QA-WebdriverIO-Framework') {

            archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true

            allure([
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            ])
        }
    }
}
}