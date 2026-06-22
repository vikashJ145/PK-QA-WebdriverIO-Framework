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

                    catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
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

                echo '========== SENDING EMAIL =========='

                emailext(
                    to: 'piyushkushwah4022@gmail.com',
                    from: 'piyushkushwah4022@gmail.com',
                    replyTo: 'piyushkushwah4022@gmail.com',
                    mimeType: 'text/html',

                    subject: "[${currentBuild.currentResult}] WebdriverIO Build #${env.BUILD_NUMBER}",

                    body: """
                    <html>
                    <body>

                    <h2>Automation Execution Report</h2>

                    <table border="1" cellpadding="8" cellspacing="0">
                        <tr>
                            <td><b>Job Name</b></td>
                            <td>${env.JOB_NAME}</td>
                        </tr>

                        <tr>
                            <td><b>Build Number</b></td>
                            <td>${env.BUILD_NUMBER}</td>
                        </tr>

                        <tr>
                            <td><b>Status</b></td>
                            <td>${currentBuild.currentResult}</td>
                        </tr>
                    </table>

                    <br>

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

                    <br>

                    <h3>This email was generated automatically by Jenkins.</h3>

                    </body>
                    </html>
                    """
                )

                echo '========== EMAIL SENT =========='
            }
        }
    }
}