pipeline{
  agent any
  tools {
    nodejs "node"
        }
    stages{
      stage('dependencies'){
        steps{
          echo 'installing your dependencies.....'
          echo 'installing nodejs.....'
          sh 'npm config ls'
          sh 'npm --v'
          echo 'installing cypress'
          sh 'npm install cypress --save-dev'
        }
      }
      stage('build'){
        steps{
          // Some example for node JS
          // sh 'npm install'
          // sh 'npm build'
          echo 'building your appliactions.....'
        } 
      }
      stage('test'){
        steps{
          echo 'testing your application.....'
        } 
      }
      stage('deploy'){
        steps{
          echo 'deployment in progress.....'
                   sh 'cypress -v'
        } 
      }
    }
  }
