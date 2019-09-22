# expres + truffle meta conin example

## 개요

1. Node.js 의 프레임워크인 express 를 이용
2. truffle boxes의 meta coin 예제를 
3. web3를 통해
4. ganache 연결 



- 참고 : <https://www.trufflesuite.com/boxes/express-box>



## 순서

1. (terminal)>> mkdir express-truffle 
   				>> cd express-truffle 

2. (terminal)>> truffle unbox metacoin

3. (terminal)>> cd ..

   ​				>> express --view=ejs express-truffle

4. (terminal)>> cd express-truffle

   ​				>> npm install

5. (terminal)>> npm install web3

6. (terminal)>> npm install --save-dev nodemon

   - pakage.json 의 scripts 부분 수정 
     "strat" : "node ./bin/www" -> "nodemon ./bin/www"



## 셋팅

https://www.trufflesuite.com/boxes/express-box 의 예제를 다른폴더에 unbox하여

1. index.html 내용 복사후 index.ejs에 붙여넣기 
   - 하단의 <script src="javascript/accounts.js"></script> 의 src부분 
     javascript를 javascripts로 변경
2. public_static/javascript/accounts.js 를 
   public/javascrips/ 로 복사
3. public_static/stylesheets/app.css 를
   public/stylesheets/ 로 복사



## 코딩

1. 업로드되어있는 app.js의 내용을 그대로 복,붙



## 컨트랙트 컴파일 및 배포

1. 가나슈 실행 (port 8545로 변경)
2. express-truffle폴더 안에서
   - (terminal)>> truffle compile
   - (terminal)>> truffle migrate



## 실행

1. express-truffle 폴더 안에서
   - (terminal)>> npm start
2. localhost:3000 접속
   - 계좌 선택 후 submit 클릭
   - 다른계좌 선택 수 send 클릭
   - F5눌러서 send 대상계좌 선택 후 sumit 클릭 후 전송된 토큰 확인

