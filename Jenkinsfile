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

            archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true

            allure(
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            )

            emailext(
                subject: "WebdriverIO Build #${env.BUILD_NUMBER} - ${currentBuild.currentResult}",
                body: """
                <h2>Automation Execution Report</h2>

                <p><b>Job:</b> ${env.JOB_NAME}</p>
                <p><b>Build:</b> #${env.BUILD_NUMBER}</p>
                <p><b>Status:</b> ${currentBuild.currentResult}</p>

                <p>
                <a href="${env.BUILD_URL}">
                Open Jenkins Build
                </a>
                </p>

                <p>
                <a href="${env.BUILD_URL}allure">
                Open Allure Report
                </a>
                </p>
                """,
                mimeType: 'text/html',
                to: 'piyushkushwah4022@gmail.com'
            )
        }
        
        }
    }}