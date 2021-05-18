$(function() {

    // 인풋을 키보드를 눌렀을 때(keypress) 이벤트
    $('.input_area > input[type="text"]').keypress(function(event) {
        // if( $(this).val() == '') {
        //     return;
        // }

        // 엔터키(keyCode = 13)이고, 입력중인 input의 value(입력값이)가 있을 때의 경우가 동시 만족할 때
        if(event.keyCode == 13 && $(this).val().length != 0) {  
            // if( $(this).val() == '') {
            var _val = $(this).val(); // 입력중인 input의 value값을 담는 변수
            var _time; // 입력된 순간의 현재시간
            var _class = $(this).attr("class"); // 입력된 input의 클래스(my, your)를 알아내서 담는 변수

            // 입력된 순간의 현재시간 구하기
            var _date = new Date(); // Date객체(pc의 시간관련 정보를 담고 있는 오브젝트)
            var _hh = _date.getHours(); // 시 정보(24시)
            var _mm = _date.getMinutes(); // 분 정보
            var _apm = '오전'; // 오전, 오후 구분 변수
            if( _hh > 12 ) { // 만약 시간이 12시를 넘어 오후일 경우
                _apm = '오후';
                _hh -= 12; // 24시 -> 12시 형식으로
            }
            // 시간 포맷으로 형태를 바꿔서 변수 저장
            _time = _apm+' '+ _hh+':'+_mm;

            // 말풍선 태그를 append를 통해 동적 추가
            $('.chat_area').append('<div class="item '+_class+' on">\
                <div class="box">\
                    <p class="msg">'+_val+'</p>\
                    <span class="time">'+_time+'</span>\
                </div>\
            </div>');

            // 입력 후 input의 내용 초기화(삭제)
            $(this).val('');

        }
    })
})