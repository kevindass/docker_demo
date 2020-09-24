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
          echo 'check cypress version'
          sh 'cypress -v'
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
          echo 'App name: OpenUI5 sample Master Detail'
          echo 'App URL: https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/master-detail/'
          sh 'cypress run'
        } 
      }
      stage('deploy'){
        steps{
          echo 'deployment in progress.....'
        } 
      }
    }
  }
