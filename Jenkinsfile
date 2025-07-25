pipeline {
    agent { label 'jenkins-slave' }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'echo "Build steps here"'
		sh 'npm install'
                // e.g. sh './build.sh' or 'make'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "Run tests"'
		sh 'npm test'
                // e.g. sh './run-tests.sh'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo "Deploy steps here"'
		sh 'npm start'
                // e.g. sh './deploy.sh'
            }
        }
    }
}

