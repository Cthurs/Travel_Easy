Session.set('lang', 'eng');
Template.settingLang.events({
    'change #select_lang': function (evt) {
        var lang = '??';

        if (evt.target.value == 'eng') {
            lang = 'eng';
        }
        else if (evt.target.value == 'ja') {
            lang = 'ja';
        }
        else if (evt.target.value == 'gr') {
            lang = 'gr';
        }
        Session.set('lang', lang);
        // alert(Session.get('lang'));

    }
});

Template.showIcon.helpers({
    please: function () {
        var _country = Session.get('lang');
        var _a = LDB.find({country:_country}).fetch();

        var arrP = _a[0].answer;
        var P = String(arrP);
        // alert(P);
        return P;
    },
    _cancel:function () {
        var _country = Session.get('lang');
        var _a = LDB.find({country:_country}).fetch();

        var arrCan = _a[0].cancel;
        return arrCan;
    },

    _confirm:function () {
        var _country = Session.get('lang');
        var _a = LDB.find({country:_country}).fetch();

        var arrCon = _a[0].confirm;
        return arrCon;
    }
});
Template.where.helpers({
    _w_answer:function () {
        var _country = Session.get('lang');
        var _a = LDB.find({country:_country}).fetch();

        var arrW = _a[0].w_answer;
        return arrW;
    },
    _thanks:function () {
        var _country = Session.get('lang');
        var _a = LDB.find({country:_country}).fetch();

        var arrT = _a[0].thanks;
        return arrT;
    }
});
Template.times.helpers({
    _t_answer:function () {
        var _country = Session.get('lang');
        var _a = LDB.find({country:_country}).fetch();

        var arrT = _a[0].t_answer;
        return arrT;
    },
    _thanks:function () {
        var _country = Session.get('lang');
        var _a = LDB.find({country:_country}).fetch();

        var arrT = _a[0].thanks;
        return arrT;
    }
});
Template.money.helpers({
    _m_answer:function () {
        var _country = Session.get('lang');
        var _a = LDB.find({country:_country}).fetch();

        var arrM = _a[0].m_answer;
        return arrM;
    },
    
    _cost:function () {
        var _country = Session.get('lang');
        var _a = LDB.find({country:_country}).fetch();

        var arrC = _a[0].cost;
        return arrC;
    },
    _thanks:function () {
        var _country = Session.get('lang');
        var _a = LDB.find({country:_country}).fetch();

        var arrT = _a[0].thanks;
        return arrT;
    }
});

Template.thanks.helpers({
    _thanks:function () {
        var _country = Session.get('lang');
        var _a = LDB.find({country:_country}).fetch();

        var arrT = _a[0].thanks;
        return arrT;
    }
});