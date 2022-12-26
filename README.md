# newyear

- 새해인사앱

- 구현 주소 :https://port-0-newyear-422t024lbonwoan.gksl2.cloudtype.app/

- 삭제 시 비밀번호 입력 방법에 대한 수정(2022.12.23)


 1. 기존에는 비밀번호 입력란이 댓글 상자 안에 들어 있어음
  
  
![image 1](https://user-images.githubusercontent.com/113665653/209295064-45dc9260-744a-4ec2-9df1-6a5b6277ade7.png)


  2. 첫번째 방법(현재 적용)
   - submit 버튼 외에 별도의 버튼을 만들어 놓고 비밀번호 란과 submit 버튼 숨김
   - 별도로 만들어 놓은 버튼을 클릭하면 해당 버튼을 숨기고 submit 버튼과 비밀번호란을 보임
   - 현재 코드 주석처리되어 있음
   
   
  3. 두번째 방법(현재 코드 주석 처리)
   - 삭제 버튼 클릭 시 prompt창 생성, 비밀번호를 입력.
   - 입력된 비밀번호를 post 방식으로 서버로 발송
   - form을 별도로 생성하여 별도 생성한 form을 발송하는 형식
   
  4. 세번째 방법(현재 코드 주석 처리)
   - 삭제 버튼 클릭 시 prompt창 생성, 비밀번호를 입력.
   - 비밀번호를 post 방식으로 요청(fetch 활용)
   - 입력된 비밀번호와 받아온 비밀번호를 비교하여 확인
   - 비교 결과에 따라 서비스 구현
   
![Frame 1](https://user-images.githubusercontent.com/113665653/209268837-72f27a29-f59b-4473-8053-1c0e0e879ce6.jpg)
