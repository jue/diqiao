pipeline {
  agent any
  stages {
    stage('检出') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: env.GIT_BUILD_REF]],
        userRemoteConfigs: [[url: env.GIT_REPO_URL, credentialsId: env.CREDENTIALS_ID]]])
      }
    }
    stage('构建') {
      steps {
        echo '构建中...'
        sh '''npm install
npm run generate'''
        echo '构建完成.'
      }
    }
    stage('部署') {
      steps {
        echo '部署中...'
        sh '''cd ./dist
git init
git config user.name "xiangjianfeng"
git config user.email "i@xiangjianfeng.com"
git add .
git commit -m "自动部署"
git push --force --quiet "https://pt2ox9k4v5jy:c71bb9275360176bd366663880dc4dcb301a47ff@e.coding.net/nipao/diqiao/site.git" master:pages'''
        echo '部署完成'
      }
    }
  }
}