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

        stage('Run WebdriverIO Tests') {
            steps {
                dir('C:/Users/piyus/OneDrive/Documents/Vikash_Web/-PK-QA-WebdriverIO-Framework') {
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        bat 'npx wdio run wdio.conf.ts'
                    }
                }
            }
        }
    }

    post {
        always {
            dir('C:/Users/piyus/OneDrive/Documents/Vikash_Web/-PK-QA-WebdriverIO-Framework') {

                // Archive Allure Results
                archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true

                // Publish Allure Report
                allure(
                    includeProperties: false,
                    jdk: '',
                    results: [[path: 'allure-results']]
                )
            }
        }
    }
}