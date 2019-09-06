# 블록체인
## 1. truffle 설치
    > npm install -g truffle

### 1.1 init
    > mkdir <folder name>
    > cd <folder name>
    > truffle init

### 1.2 connect to ethereum client
    truffle-config.js
        / network 설정에서....
    * default 값은 ganache와 연결됨. (ganache설정확인!)

### 1.3 compile
    > truffle compile

### 1.4 migrate
    > truffle migrate
        : ganache에 배포됨. 

## 2. truffle suite boxes (예제 패키지) 

### 2.1 metacoin
    > mkdir metacoin
    > cd metacoin
    > truffle unbox metacoin

### 2.2 in truffle dev cli
    > truffle develop
        (develop)> compile
        (develop)> migrate
        (develop)> test
