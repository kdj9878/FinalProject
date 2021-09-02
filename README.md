
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
    <li> 일반 상품과 강의를 구분하여 판매할 수 있게 구성 </li>
    <li> 일반 회원은 구매만 가능, 관리자에게 승인을 받을 시 개인 상점 개설 가능 </li>
    <li> 장바구니에 담은 상품을 개별 혹은 한번에 선택하고 종합적인 가격을 확인할 수 있게 구현 </li>
    <li> 홈페이지 사용 시 불편사항이나 부적절한 사이트 이용을 하고 있는 회원을 관리자에게 신고할 수 있게 구현 </li> </
    <li> 메세지 기능을 통해서 회원들간의 활발한 소통을 추구 </li>
  </ul>
</div>
<div>
  <header> 구현 목표 </header>
  <ul>
    <li> 일반 회원 </li>
    <div>
      <span> * 기본적인 장바구니 기능 및 제품 구매 가능 </span> <br>
      <span> * Story 메뉴의 커뮤니티 게시판에서 회원들간의 원할한 소통 가능 </span> <br>
      <span> * 마이페이지에서 수강중인 동영상 강좌 시청 가능 </span>
    </div>
  </ul>
  <ul>
    <li> 판매자 회원 </li>
    <div>
      <span> * 판매자 신청을 통해 관리자로부터 승인을 받을 시 제품 등록 가능 </span> <br>
      <span> * 구매 수량, 제품을 받을 주소지 등 해당 제품을 구매한 회원의 주문 정보 확인 가능 </span>
    </div>
  </ul>
  <ul>
    <li> 관리자 </li>
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
![Alt Text](https://github.com/kdj9878/FinalProject/blob/master/erd)
