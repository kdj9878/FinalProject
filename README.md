
<h3>솔데스크 최종 프로젝트(소상공인 장터)</h3>

기간 : 2021.07.31 ~ 2021.08.21(21일 간 일 8시간) <br>
환경 : Apache Tomcat 8.5, Chrome 브라우저 <br>
주제 : 인터넷 상에서 일반인의 개인 상점 개설 및 판매 <br>
개발 IDE : Eclipse <br>
개발 환경 : 전자정부 프레임워크 <br>
사용 언어 : JAVA(1.6), Oracle SQL(11g Express), HTML5, CSS3, JavaScript <br>
사용 기술 : JDBC, JQuery, Ajax, Open API(카카오, 도로명 주소), Coolsms API, Java Mail 라이브러리 <br>

<hr>

<h3>프로젝트 상세 내용</h3>
<h4> 주제 </h4>
<div>
  <span> 일반인의 개인 상점 오픈 및 판매 홈페이지 </span>
</div>
<div>
  <header> <h4> 목적</h4> </header>
  <ul>
    <li> 일반인도 승인을 얻으면 자신이 제작한 물품 혹은 동영상을 판매할 수 있도록 홈페이지 제작 </li>
    <li> 홈페이지 사용 시 불편사항이나 부적절한 사이트 이용을 하고 있는 회원을 관리자에게 신고할 수 있게 구현 </li>
    <li> Story 커뮤니티 및 메세지 기능을 통해서 회원들간의 활발한 소통을 추구 </li>
  </ul>
</div>
<div>
  <header> 구현 목표 </header>
  <ul>
    <li> 일반 회원 </li> <br>
    <div>
      <span> * 기본적인 장바구니 기능 및 제품 구매 가능 </span> <br>
      <span> * Story 메뉴의 커뮤니티 게시판에서 회원들간의 원할한 소통 가능 </span> <br>
      <span> * 메세지 기능을 통해서 회원들간의 소통 가능 및 관리자에게 불편사항 신고 가능 </span>
      <span> * 마이페이지에서 수강중인 동영상 강좌 시청 가능 </span>
    </div>
  </ul>
  <ul>
    <li> 판매자 회원 </li> <br>
    <div>
      <span> * 판매자 신청을 통해 관리자로부터 승인을 받을 시 제품 등록 가능 </span> <br>
      <span> * 상점 관리를 통해 본인이 판매 중인 제품 및 수업 관리 가능 </spam>
      <span> * 구매 수량, 제품을 받을 주소지 등 해당 제품을 구매한 회원의 주문 정보 확인 가능 </span>
    </div>
  </ul>
  <ul>
    <li> 관리자 </li> <br>
    <div>
      <span> * 회원 관리 시 아이디, 이름, 이메일 등을 구분하여 검색 가능 </span> <br>
      <span> * 상점 관리 시 판매자 신청을 한 회원의 정보를 확인 할 수 있고 수락 시 판매자 계정으로 전환 </span> <br>
      <span> * 적절하지 않은 상품을 판매하거나 신고사항으로 접수 된 판매자 계정 정지 가능 </span> <br>
      <span> * 회원들로부터 접수된 신고 내용 확인 가능 </span>
    </div>
  <ul>
</div>
 <hr>
    <h4> Exerd 테이블 명세 </h4>
<img src="https://github.com/kdj9878/FinalProject/blob/master/ERD.png" alt="erd.png" >
    <hr>
    <h4> 구동 화면 </h4>
    <ul>
      <li> 메인 화면 </li>
      <img src="https://github.com/kdj9878/FinalProject/blob/master/%EC%B5%9C%EC%A2%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8(%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%AA%A8%EC%9D%8C)/%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4.png" alt="메인화면"> <br>
      <li> 로그인 화면 </li>
      <img src="https://github.com/kdj9878/FinalProject/blob/master/%EC%B5%9C%EC%A2%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8(%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%AA%A8%EC%9D%8C)/%EB%A1%9C%EA%B7%B8%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80.png" alt="로그인화면"> <br>
      <li> 회원가입 </li>
      <img src="https://github.com/kdj9878/FinalProject/blob/master/%EC%B5%9C%EC%A2%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8(%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%AA%A8%EC%9D%8C)/%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85.png" alt="회원가입"> <br>
      <li> 장바구니 및 마이페이지 </li>
      <img src="https://github.com/kdj9878/FinalProject/blob/master/%EC%B5%9C%EC%A2%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8(%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%AA%A8%EC%9D%8C)/%EC%9E%A5%EB%B0%94%EA%B5%AC%EB%8B%88%EB%B0%8F%EB%A7%88%EC%9D%B4%ED%8E%98%EC%9D%B4%EC%A7%80.png" alt="장바구니및마이페이지"> <br>
      <li> 메인 페이지 검색 </li>
      <img src="https://github.com/kdj9878/FinalProject/blob/master/%EC%B5%9C%EC%A2%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8(%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%AA%A8%EC%9D%8C)/%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80%EA%B2%80%EC%83%89.png" alt="메인페이지검색"> <br>
      <li> 제품 구매 </li>
      <img src="https://github.com/kdj9878/FinalProject/blob/master/%EC%B5%9C%EC%A2%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8(%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%AA%A8%EC%9D%8C)/%EC%A0%9C%ED%92%88%EA%B5%AC%EB%A7%A4.png" alt="제품구매"> <br>
      <li> 주문 정보 확인 </li>
     <img src="https://github.com/kdj9878/FinalProject/blob/master/%EC%B5%9C%EC%A2%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8(%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%AA%A8%EC%9D%8C)/%EC%A3%BC%EB%AC%B8%EC%A0%95%EB%B3%B4%ED%99%95%EC%9D%B8.png" alt="주문정보확인"> <br>
      <li> 동영상 강좌 </li>
      <img src="https://github.com/kdj9878/FinalProject/blob/master/%EC%B5%9C%EC%A2%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8(%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%AA%A8%EC%9D%8C)/%EB%8F%99%EC%98%81%EC%83%81%EA%B0%95%EC%A2%8C.png" alt="동영상강좌"> <br>
      <li> 동영상 시청 </li>
      <img src="https://github.com/kdj9878/FinalProject/blob/master/%EC%B5%9C%EC%A2%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8(%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%AA%A8%EC%9D%8C)/%EB%8F%99%EC%98%81%EC%83%81%EC%8B%9C%EC%B2%AD.png" alt="동영상시청"> <br>
      <li> 판매자 신청 </li>
      <img src="https://github.com/kdj9878/FinalProject/blob/master/%EC%B5%9C%EC%A2%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8(%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%AA%A8%EC%9D%8C)/%ED%8C%90%EB%A7%A4%EC%9E%90%EC%8B%A0%EC%B2%AD.png" alt="판매자신청">  <br>
      <li> 상점 관리 </li>
      <img src="https://github.com/kdj9878/FinalProject/blob/master/%EC%B5%9C%EC%A2%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8(%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%AA%A8%EC%9D%8C)/%EC%83%81%EC%A0%90%EA%B4%80%EB%A6%AC.png" alt="상점관리"> <br>
      <li> 커뮤니티 </li>
      <img src="https://github.com/kdj9878/FinalProject/blob/master/%EC%B5%9C%EC%A2%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8(%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%AA%A8%EC%9D%8C)/%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0.png" alt="커뮤니티">  <br>
      <li> 커뮤니티 댓글 </li>
      <img src="https://github.com/kdj9878/FinalProject/blob/master/%EC%B5%9C%EC%A2%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8(%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%AA%A8%EC%9D%8C)/%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0%EB%8C%93%EA%B8%80.png" alt="커뮤니티댓글">  <br>
      <li> 메세지 기능 </li>
      <img src="https://github.com/kdj9878/FinalProject/blob/master/%EC%B5%9C%EC%A2%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8(%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%AA%A8%EC%9D%8C)/%EB%A9%94%EC%84%B8%EC%A7%80%EA%B8%B0%EB%8A%A5.png" alt="메세지기능">  <br>
      <li> 불편 사항 신고 </li>
      <img src="https://github.com/kdj9878/FinalProject/blob/master/%EC%B5%9C%EC%A2%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8(%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%AA%A8%EC%9D%8C)/%EB%B6%88%ED%8E%B8%EC%82%AC%ED%95%AD%EC%8B%A0%EA%B3%A0.png" alt="불편사항신고">  <br>
      <li> 불편 사항 접수 </li>
      <img src="https://github.com/kdj9878/FinalProject/blob/master/%EC%B5%9C%EC%A2%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8(%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%AA%A8%EC%9D%8C)/%EB%B6%88%ED%8E%B8%EC%82%AC%ED%95%AD%EC%A0%91%EC%88%98.png" alt="불편사항신고">  <br>
    </ul>
