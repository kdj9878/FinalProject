$(document).ready(function(){
	var jsonObject = new Object();
	jsonObject.data = {};
	var checkList = [];
	var priceArray = [];
	var checkValue;
	
	
	$('input[name="payRadio"]').change(function() {
	    $('input[name="payRadio"]').each(function() {
	        var value = $(this).val();
			var checked = $(this).prop('checked');
			if(checked){
				checkValue = value;
			}
	    });
});
	
	//수량이 변했을 때 해당 제품의 총 금액이 바뀜
	$('.quantidey').on("propertychange change keyup paste", function(){
		var quantidey = $(this);
		var price = quantidey.next();
		var sumPrice = price.next();
		var priceValue = quantidey.val()*price.val();
		sumPrice.val(priceValue);
		sumPrice.attr('value', priceValue);
		
		var listCheckbox = quantidey.parent().prev().children().children().next().children('.listCheckbox');
		$(listCheckbox).attr('value2', priceValue);
		$(listCheckbox).attr('value3', quantidey.val());
	})
	
	//체크 박스 선택 시 해당 제품의 정보들이 checkList 배열에 담김
	$('.listCheckbox').change(function(event){
		var checkbox = $(this);
		var storeName = $(this).parent().prev().text();
		var productName = $(this).parent().parent().next().text();
		var productPhoto = $(this).attr('value4');
		var o_o_nop = $(this).attr('value5');
		var quantideyBox = checkbox.parent().parent().parent().next().children('.quantidey');
		var defaultprice = Number(checkbox.attr('defaultValue'));
		var o_no = checkbox.attr('value1');
		var o_quantidey = Number(checkbox.attr('value3'));
		var sum = (defaultprice*o_quantidey);
		
		if(checkbox.is(":checked")){
			data = {
				s_name : storeName,
				p_price : sum,
				p_name : productName,
				p_photo : productPhoto,
				o_no : o_no,
				o_quantidey : o_quantidey,
				o_o_nop : o_o_nop
			}
			checkList.push(data);
			jsonObject.data = checkList;
			
			$.each(checkbox, function(i, item){
			
			var price = {index : o_o_nop, value : $(item).attr('value2')}
			priceArray.push(price);			
			})
			quantideyBox.attr('readonly', true);
			console.log(jsonObject.data)
		}
		else{
			
			checkList.pop();
			for(i = 0; i < priceArray.length; i++){
				if(priceArray[i].index == o_o_nop){
					console.log(o_o_nop)
					priceArray.splice(i, 1);
					i--;
				}
			}
			
			quantideyBox.attr('readonly', false);
			console.log(jsonObject.data)
		}
		
		var sum = 0;
		for(i=0;i<priceArray.length;i++){
			sum +=  Number(priceArray[i].value);
		}
		$('#resultPrice').children().text(sum);
	})
	
	$('.allCheckBox').click(function(event){
		var checked = $('.allCheckBox').is(":checked");
		//체크되면 true 체크 안되어 있으면 false가 담김
		if(checked){
			var inputValue = $('input:checkbox');
			inputValue.prop("checked",true);
			//모든 체크 박스들을 선택해서 담음
			
			$.each(inputValue, function(index, item){
				var value1 = $(item).attr('value1');//제품 번호
				var value2 = $(item).attr('defaultValue');//제품 개당 가격
				var value3 = $(item).attr('value3');//제품 수량
				var o_o_nop = $(item).attr('value5');//주문 고유 PK
				var storeName = $(item).parent().prev().text();//상점 이름
				var productName = $(item).parent().parent().next().text();//제품 이름
				var productPhoto = $(item).attr('value4');//제품 사진
				var sum = Number(value2)*Number(value3);//총합 가격
				
				//value2 속성(개당 가격)에 총합 가격을 담음
				$(value2).attr('value2', sum);
							
				
					temp = {
						s_name : storeName,
						p_price : sum,
						p_name : productName,
						p_photo : productPhoto,
						o_quantidey : value3,
						o_no : value1,
						o_o_nop : o_o_nop
												
					}
					//checkList 배열에 각각의 상품을 오브젝트 형태로 push
					checkList.push(temp);
					//priceArray 배열에 총합 가격을 push
					var price = {index : o_o_nop, value : $(item).attr('value2')}
					priceArray.push(price);
				})
				//배열의 첫 번째 값에 전체 선택 버튼 객체가 들어가 있으므로
				//shift를 통해서 배열 첫 번째 값 제거
				checkList.shift();
				priceArray.shift();
				
				//json객체에 checkList를 담음
				jsonObject.data = checkList;
				
				//제품 선택 버튼을 클릭할 경우 수량을 바꾸지 못하게
				//readonly 속성을 부여함
				$('.quantidey').attr('readonly', true);
				
				var synthesisPrice = 0;
				for(i=0; i<priceArray.length;i++){
					synthesisPrice += Number(priceArray[i].value);
				}
				//총합 가격을 나타내는 부분
				$('#resultPrice').children().text(synthesisPrice);
				console.log(jsonObject)
			}
		else {
			var inputValue = $('input:checkbox');
			inputValue.prop('checked',false);
			checkList = [];
			priceArray = [];
			jsonObject.data = {};
			$('#resultPrice').children().empty();
			$('.quantidey').attr('readonly', false);
		}
		
		
	})
	
	
	$('.btn').on("click",function(){
		if(checkValue=="kakao"){
			var o = confirm("카카오 페이 결제를 하시겠습니까?");
			if(o){
				var submitData = JSON.stringify(jsonObject);
				var m_name = $('#m_name').val();
				var roadFullAddr = $('#roadFullAddr').val();
				var addrDetail = $('#addrDetail').val();
				var zipNo = $('#zipNo').val();
				var ss = $('#ss').text();
				
				$.ajax({
						url : "submitOrder.do",
						method : "POST",
						data : {
							checkList : submitData,
							m_name : m_name,
							roadFullAddr : roadFullAddr,
							addrDetail : addrDetail,
							zipNo : zipNo
						},
						traditional : true
					})
						.done(function(data){
						if(data){
							location.href="/jk/order.do2?name="+m_name+"&price="+ss;
						}
						else{
							alert("Model에서 문제가 생겼어");
						}
					})
				
						}
		}
		else{
			let o = confirm("주문을 확정하시겠습니까??");
			if(o){
			if(checkList.length==0){
				alert("제품을 선택해주세요");
			}
			else{
				var submitData = JSON.stringify(jsonObject);
				var m_name = $('#m_name').val();
				var roadFullAddr = $('#roadFullAddr').val();
				var addrDetail = $('#addrDetail').val();
				var zipNo = $('#zipNo').val();
					console.log(checkValue);
				if((m_name=="")||(roadFullAddr=="")||(addrDetail=="")||(checkValue==undefined)){
					alert("입력되지 않은 값이 있습니다.");
					return false;
				}
				else{
					$.ajax({
						url : "submitOrder.do",
						method : "POST",
						data : {
							checkList : submitData,
							m_name : m_name,
							roadFullAddr : roadFullAddr,
							addrDetail : addrDetail,
							zipNo : zipNo
						},
						traditional : true
					})
					.done(function(data){
						if(data){
							alert("구매가 완료되었습니다.");
							location.href="/jk/common/toOrderPage.go"
						}
						else{
							alert("Model에서 문제가 생겼어");
						}
					})
					.fail(function(){
						alert("로그인을 해주세요");
						location.href="/jk/common/login.main"
					})					
				}
			}			
		}
		else{
			return false;
		}			
		}
		
	})
	




			
})




