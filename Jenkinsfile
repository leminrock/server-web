pipeline {
    agent any

    stages {
        stage('ServerInstall') {
            steps {
                sh 'cd server; npm i'

            }
        }
        stage('ServerRun') {
            steps {
                sh 'cd server; PORT=8000 npm run dev'
            }
        }
    }
}
