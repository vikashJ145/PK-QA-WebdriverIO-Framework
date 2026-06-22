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

                // Archive Allure Results
                archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true

                // Generate Allure Report
                allure(
                    includeProperties: false,
                    jdk: '',
                    results: [[path: 'allure-results']]
                )

                echo "Sending Email..."

                emailext(
                    to: 'piyushkushwah4022@gmail.com',
                    mimeType: 'text/html',

                    subject: "WebdriverIO Build #${env.BUILD_NUMBER} - ${currentBuild.currentResult}",

                    body: """
                    <html>
                    <body>

                    <h2>Automation Execution Report</h2>

                    <table border="1" cellpadding="5" cellspacing="0">
                        <tr>
                            <td><b>Job Name</b></td>
                            <td>${env.JOB_NAME}</td>
                        </tr>

                        <tr>
                            <td><b>Build Number</b></td>
                            <td>${env.BUILD_NUMBER}</td>
                        </tr>

                        <tr>
                            <td><b>Build Status</b></td>
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

                    <p>Regards,<br>Jenkins Automation</p>

                    </body>
                    </html>
                    """
                )

                echo "EMAIL SENT SUCCESSFULLY"
            }
        }
    }
}