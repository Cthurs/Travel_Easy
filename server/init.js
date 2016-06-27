Meteor.startup(function () {
    if(LDB.find({}).count()==0){
        LDB.insert({
            country:'eng',
            answer:'Could you answer my Icon?',
            cancel:'CANCEL',
            confirm:'CONFIRM',
            t_answer:'Please inform date and time',
            w_answer:'Please draw a map',
            m_answer:'Please input cost',
            cost:'Input cost',
            thanks:'Thank You'
        });

        LDB.insert({
            country:'ja',
            answer:'あたのコをおえくださいが?',
            cancel:'キャンセル',
            confirm:'確認',
            t_answer:'お願い入力日付と時刻',
            w_answer:'マップを描画してください。',
            m_answer:'入力してくださいコスト',
            cost:'チケットください',
            thanks:'ありがとう'
        });

        LDB.insert({
            country:'gr',
            answer:'la rispondere alla mia Icona?',
            cancel:'ANNULLA',
            confirm:'CONFERMARE',
            t_answer:'Si prega di data e ora di ingresso',
            w_answer:'Si prega di disegnare una mappa',
            m_answer:'Si prega di costo dingresso',
            cost:'Imp t questo st',
            thanks:'Teyan k così'
        });
    }
    if (TE.find({part: 'main'}).count() == 0) {
        TE.insert({part: "main", name: 'location_on', sect: 'where'});
        TE.insert({part: "main", name: 'schedule', sect: 'times'});
        TE.insert({part: "main", name: 'attach_money', sect: 'money'});

        //'어디' 섹션
        TE.insert({part: "sub", name: 'wc', sect: 'where'}); // 화장실 아이콘
        TE.insert({part: "sub", name: 'local_gas_station', sect: 'where'}); // 주유소 아이콘
        TE.insert({part: "sub", name: 'local_parking', sect: 'where'}); // 주차장 아이콘
        TE.insert({part: "sub", name: 'local_post_office', sect: 'where'}); // 우체국 아이콘
        TE.insert({part: "sub", name: 'fitness_center', sect: 'where'}); // 피트니스센터(헬스장) 아이콘
        TE.insert({part: "sub", name: 'wifi', sect: 'where'}); // 와이파이 아이콘
        TE.insert({part: "sub", name: 'local_pharmacy', sect: 'where'}); // 약국 아이콘
        TE.insert({part: "sub", name: 'smoking_rooms', sect: 'where'}); // 흡연실 아이콘

        //'언제' 섹션
        TE.insert({part: "sub", name: 'flight_land', sect: 'times'}); // 비행기착륙 아이콘
        TE.insert({part: "sub", name: 'flight_takeoff', sect: 'times'}); //비행기이륙 아이콘
        TE.insert({part: "sub", name: 'directions_bus', sect: 'times'}); // 버스 아이콘
        TE.insert({part: "sub", name: 'build', sect: 'times'}); // 스패너 아이콘(고치기)
        TE.insert({part: "sub", name: 'directions_boat', sect: 'times'}); // 배 아이콘
        TE.insert({part: "sub", name: 'directions_subway', sect: 'times'}); // 지하철 아이콘
        TE.insert({part: "sub", name: 'movie', sect: 'times'}); // 영화 아이콘
        TE.insert({part: "sub", name: 'call', sect: 'times'}); // 전화 아이콘

        //'얼마' 섹션
        TE.insert({part: "sub", name: 'hotel', sect: 'money'}); //호텔(숙식) 아이콘
        TE.insert({part: "sub", name: 'local_bar', sect: 'money'}); // 칵테일(술) 아이콘
        TE.insert({part: "sub", name: 'local_cafe', sect: 'money'}); // 커피 아이콘
        TE.insert({part: "sub", name: 'restaurant', sect: 'money'}); // 레스토랑(먹는것) 아이콘
        TE.insert({part: "sub", name: 'local_florist', sect: 'money'}); // 꽃 아이콘
        TE.insert({part: "sub", name: 'local_hospital', sect: 'money'}); // 의료비 아이콘
        TE.insert({part: "sub", name: 'motorcycle', sect: 'money'}); // 오토바이 아이콘
        TE.insert({part: "sub", name: 'local_taxi', sect: 'money'}); // 택시 아이콘

    }
});