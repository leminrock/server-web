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
                sh 'cd server; npm run dev'
            }
        }
    }
}
