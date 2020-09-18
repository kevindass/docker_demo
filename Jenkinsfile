pipeline{
  agent any
  tools {
    nodejs "node"
        }
    stages{
      stage('dependencies'){
        steps{
          echo 'check & instal your dependencies.....'
          echo 'project path'
          sh 'pwd'
          sh 'npm config ls'
          echo 'check nodejs.....'
          sh 'npm --v'
          echo 'check uiveri5 version'
          sh 'uiveri5 -v'
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
        } 
      }
    }
  }
