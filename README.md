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
    
    TIP) compile --all ( 코드 꼬였을때, )
         migrate --reset ( 다시~ )

### 2.3 cli 에서 metacoin 예제 다뤄보기
    - 계약 가져오기
    (develop)> let MyContract = await MetaCoin.deployed()
        ; 변수 할당 확인은 > MyContract 엔터 하면 구조체 출력.
    
    - 계좌 조회
    (develop)> let bal1 = await MyContract.getBalance(accounts[0])
    (develop)> let bal2 = await MyContract.getBalance(accounts[1])
    
    - 송금 (Contract 내부 함수 사용)
    (develop)> MyContract.sendCoin(accounts[1],500)
    (develop)> let recieved = await MyContract.getBalance(accounts[1])
    (develop)> recieved.toNumber() ; 하면 1번계정이 500 받았다고 나옴.


### 2.4 custom contract migrate.
    - contracts 폴더 안에 TestContrant.sol 생성
    - migrations 폴더 안에 3_deploy_testcontract.js 생성
    
    (develop)> compile ; 새파일에 대한 컴파일 성공.
    (develop)> migrate ; 
        // 오류 나면 compile --all & migrate --reset 으로 해결.


### 2.5 test at cli
    - test 폴더 안에 xxxx.js 있음
    (develop)> test 
        ;하면 xxxx.js 안의 내용이 실행됨.

### 2.6 TIP
    - contract 만들고
    - migration 등록 하고 
    - test 해보고
    - 배포~


## 3. truffle boxes (tutorialtoken) & web & ERC20coin

### 3.1 set tutorialtoken 
    > mkdir tutorialtoken
    > cd tutorialtoken
    > truffle tutorialtoken

### 3.2 env setting
    > npm install --save openzeppelin-solidity
    
    - 파일명 변경 : truffle.js -> truffle-config.js
    - compile버전 변경 : pragma ^0.5.8
    
    - tutorialToken.sol만들기
    - 2_deploy_tutorialtoken.js만들기

### 3.3 시작해보기
    > truffle compile
    > truffle migrate
    > npm run dev    ; (F12 눌러서 개발자 콘솔 확인.)

## 4. pet-shop
    예제 : https://www.trufflesuite.com/tutorials/pet-shop
### 4.1 unbox


## 5. test-net 연결 ropsten

### 5.1 infura 가입 및 api key
    1. https://infura.io/dashboard
    2. create new project
    3. view project -> end point :ropsten선택 -> key 복사

### 5.2 metamsk mnemonic 가져오기
    1. metamask -> 설정 -> security & privacy -> 시드단어보기 후 복사

### 5.3 truffle-config.js 수정
    1. > npm i truffle-hdwallet-provider
        ; 안되면 yarn add truffle-hdwallet-provider

```js
2. 코드 작성

var HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config();
 
// var infura_apikey = process.env.API_KEY;
// var mnemonic = process.env.MNEMONIC;

console.log("infura_apikey = ", infura_apikey);
console.log("mnemonic = ", mnemonic);
 
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
      network_id: 3
    }
  }
};

```

```
3.

```

