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

            emailext(
                subject: "WebdriverIO Automation Report - Build #${BUILD_NUMBER}",
                body: """
                <h3>Automation Execution Completed</h3>

                <p><b>Build Number:</b> ${BUILD_NUMBER}</p>
                <p><b>Build Status:</b> ${currentBuild.currentResult}</p>

                <p>
                <b>Allure Report:</b><br>
                <a href="${BUILD_URL}allure">
                ${BUILD_URL}allure
                </a>
                </p>

                <p>Regards,<br>
                Automation Team</p>
                """,
                mimeType: 'text/html',
                to: 'piyushkushwah4022@gmail.com',
                attachmentsPattern: 'allure-report.zip'
            )
        }
    }
    }
}
