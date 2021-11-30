(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["market"], {
    "010e": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("uz-latn", {
          months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
          monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
          weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
          weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
          weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm"
          },
          calendar: {
            sameDay: "[Bugun soat] LT [da]",
            nextDay: "[Ertaga] LT [da]",
            nextWeek: "dddd [kuni soat] LT [da]",
            lastDay: "[Kecha soat] LT [da]",
            lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
            sameElse: "L"
          },
          relativeTime: {
            future: "Yaqin %s ichida",
            past: "Bir necha %s oldin",
            s: "soniya",
            ss: "%d soniya",
            m: "bir daqiqa",
            mm: "%d daqiqa",
            h: "bir soat",
            hh: "%d soat",
            d: "bir kun",
            dd: "%d kun",
            M: "bir oy",
            MM: "%d oy",
            y: "bir yil",
            yy: "%d yil"
          },
          week: {
            dow: 1,
            doy: 7
          }
        });
        return t
      }))
    },
    "02fb": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("ml", {
          months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
          monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
          monthsParseExact: !0,
          weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
          weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
          weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
          longDateFormat: {
            LT: "A h:mm -നു",
            LTS: "A h:mm:ss -നു",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm -നു",
            LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
          },
          calendar: {
            sameDay: "[ഇന്ന്] LT",
            nextDay: "[നാളെ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ഇന്നലെ] LT",
            lastWeek: "[കഴിഞ്ഞ] dddd, LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s കഴിഞ്ഞ്",
            past: "%s മുൻപ്",
            s: "അൽപ നിമിഷങ്ങൾ",
            ss: "%d സെക്കൻഡ്",
            m: "ഒരു മിനിറ്റ്",
            mm: "%d മിനിറ്റ്",
            h: "ഒരു മണിക്കൂർ",
            hh: "%d മണിക്കൂർ",
            d: "ഒരു ദിവസം",
            dd: "%d ദിവസം",
            M: "ഒരു മാസം",
            MM: "%d മാസം",
            y: "ഒരു വർഷം",
            yy: "%d വർഷം"
          },
          meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
          meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
          },
          meridiem: function (e, t, a) {
            return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
          }
        });
        return t
      }))
    },
    "03ec": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("cv", {
          months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
          monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
          weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
          weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
          weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
            LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
            LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
          },
          calendar: {
            sameDay: "[Паян] LT [сехетре]",
            nextDay: "[Ыран] LT [сехетре]",
            lastDay: "[Ӗнер] LT [сехетре]",
            nextWeek: "[Ҫитес] dddd LT [сехетре]",
            lastWeek: "[Иртнӗ] dddd LT [сехетре]",
            sameElse: "L"
          },
          relativeTime: {
            future: function (e) {
              var t = /сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран";
              return e + t
            },
            past: "%s каялла",
            s: "пӗр-ик ҫеккунт",
            ss: "%d ҫеккунт",
            m: "пӗр минут",
            mm: "%d минут",
            h: "пӗр сехет",
            hh: "%d сехет",
            d: "пӗр кун",
            dd: "%d кун",
            M: "пӗр уйӑх",
            MM: "%d уйӑх",
            y: "пӗр ҫул",
            yy: "%d ҫул"
          },
          dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
          ordinal: "%d-мӗш",
          week: {
            dow: 1,
            doy: 7
          }
        });
        return t
      }))
    },
    "0558": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        function t(e) {
          return e % 100 === 11 || e % 10 !== 1
        }

        function a(e, a, n, r) {
          var i = e + " ";
          switch (n) {
            case "s":
              return a || r ? "nokkrar sekúndur" : "nokkrum sekúndum";
            case "ss":
              return t(e) ? i + (a || r ? "sekúndur" : "sekúndum") : i + "sekúnda";
            case "m":
              return a ? "mínúta" : "mínútu";
            case "mm":
              return t(e) ? i + (a || r ? "mínútur" : "mínútum") : a ? i + "mínúta" : i + "mínútu";
            case "hh":
              return t(e) ? i + (a || r ? "klukkustundir" : "klukkustundum") : i + "klukkustund";
            case "d":
              return a ? "dagur" : r ? "dag" : "degi";
            case "dd":
              return t(e) ? a ? i + "dagar" : i + (r ? "daga" : "dögum") : a ? i + "dagur" : i + (r ? "dag" : "degi");
            case "M":
              return a ? "mánuður" : r ? "mánuð" : "mánuði";
            case "MM":
              return t(e) ? a ? i + "mánuðir" : i + (r ? "mánuði" : "mánuðum") : a ? i + "mánuður" : i + (r ? "mánuð" : "mánuði");
            case "y":
              return a || r ? "ár" : "ári";
            case "yy":
              return t(e) ? i + (a || r ? "ár" : "árum") : i + (a || r ? "ár" : "ári")
          }
        }
        var n = e.defineLocale("is", {
          months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
          monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
          weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
          weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
          weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
          },
          calendar: {
            sameDay: "[í dag kl.] LT",
            nextDay: "[á morgun kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[í gær kl.] LT",
            lastWeek: "[síðasta] dddd [kl.] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "eftir %s",
            past: "fyrir %s síðan",
            s: a,
            ss: a,
            m: a,
            mm: a,
            h: "klukkustund",
            hh: a,
            d: a,
            dd: a,
            M: a,
            MM: a,
            y: a,
            yy: a
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return n
      }))
    },
    "0721": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("fo", {
          months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
          monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
          weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
          weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
          weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D. MMMM, YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Í dag kl.] LT",
            nextDay: "[Í morgin kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[Í gjár kl.] LT",
            lastWeek: "[síðstu] dddd [kl] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "um %s",
            past: "%s síðani",
            s: "fá sekund",
            ss: "%d sekundir",
            m: "ein minuttur",
            mm: "%d minuttir",
            h: "ein tími",
            hh: "%d tímar",
            d: "ein dagur",
            dd: "%d dagar",
            M: "ein mánaður",
            MM: "%d mánaðir",
            y: "eitt ár",
            yy: "%d ár"
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    "079e": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("ja", {
          eras: [{
            since: "2019-05-01",
            offset: 1,
            name: "令和",
            narrow: "㋿",
            abbr: "R"
          }, {
            since: "1989-01-08",
            until: "2019-04-30",
            offset: 1,
            name: "平成",
            narrow: "㍻",
            abbr: "H"
          }, {
            since: "1926-12-25",
            until: "1989-01-07",
            offset: 1,
            name: "昭和",
            narrow: "㍼",
            abbr: "S"
          }, {
            since: "1912-07-30",
            until: "1926-12-24",
            offset: 1,
            name: "大正",
            narrow: "㍽",
            abbr: "T"
          }, {
            since: "1873-01-01",
            until: "1912-07-29",
            offset: 6,
            name: "明治",
            narrow: "㍾",
            abbr: "M"
          }, {
            since: "0001-01-01",
            until: "1873-12-31",
            offset: 1,
            name: "西暦",
            narrow: "AD",
            abbr: "AD"
          }, {
            since: "0000-12-31",
            until: -1 / 0,
            offset: 1,
            name: "紀元前",
            narrow: "BC",
            abbr: "BC"
          }],
          eraYearOrdinalRegex: /(元|\d+)年/,
          eraYearOrdinalParse: function (e, t) {
            return "元" === t[1] ? 1 : parseInt(t[1] || e, 10)
          },
          months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
          weekdaysShort: "日_月_火_水_木_金_土".split("_"),
          weekdaysMin: "日_月_火_水_木_金_土".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日 dddd HH:mm",
            l: "YYYY/MM/DD",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日(ddd) HH:mm"
          },
          meridiemParse: /午前|午後/i,
          isPM: function (e) {
            return "午後" === e
          },
          meridiem: function (e, t, a) {
            return e < 12 ? "午前" : "午後"
          },
          calendar: {
            sameDay: "[今日] LT",
            nextDay: "[明日] LT",
            nextWeek: function (e) {
              return e.week() !== this.week() ? "[来週]dddd LT" : "dddd LT"
            },
            lastDay: "[昨日] LT",
            lastWeek: function (e) {
              return this.week() !== e.week() ? "[先週]dddd LT" : "dddd LT"
            },
            sameElse: "L"
          },
          dayOfMonthOrdinalParse: /\d{1,2}日/,
          ordinal: function (e, t) {
            switch (t) {
              case "y":
                return 1 === e ? "元年" : e + "年";
              case "d":
              case "D":
              case "DDD":
                return e + "日";
              default:
                return e
            }
          },
          relativeTime: {
            future: "%s後",
            past: "%s前",
            s: "数秒",
            ss: "%d秒",
            m: "1分",
            mm: "%d分",
            h: "1時間",
            hh: "%d時間",
            d: "1日",
            dd: "%d日",
            M: "1ヶ月",
            MM: "%dヶ月",
            y: "1年",
            yy: "%d年"
          }
        });
        return t
      }))
    },
    "0a3c": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
          a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
          r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          i = e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, n) {
              return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY h:mm A",
              LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
              sameDay: function () {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              },
              nextDay: function () {
                return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              },
              nextWeek: function () {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              },
              lastDay: function () {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              },
              lastWeek: function () {
                return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "en %s",
              past: "hace %s",
              s: "unos segundos",
              ss: "%d segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "una hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              M: "un mes",
              MM: "%d meses",
              y: "un año",
              yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
              dow: 1,
              doy: 4
            }
          });
        return i
      }))
    },
    "0a84": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("ar-ma", {
          months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
          monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
          weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
          },
          week: {
            dow: 6,
            doy: 12
          }
        });
        return t
      }))
    },
    "0caa": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, a, n) {
          var r = {
            s: ["thoddea sekondamni", "thodde sekond"],
            ss: [e + " sekondamni", e + " sekond"],
            m: ["eka mintan", "ek minut"],
            mm: [e + " mintamni", e + " mintam"],
            h: ["eka voran", "ek vor"],
            hh: [e + " voramni", e + " voram"],
            d: ["eka disan", "ek dis"],
            dd: [e + " disamni", e + " dis"],
            M: ["eka mhoinean", "ek mhoino"],
            MM: [e + " mhoineamni", e + " mhoine"],
            y: ["eka vorsan", "ek voros"],
            yy: [e + " vorsamni", e + " vorsam"]
          };
          return n ? r[a][0] : r[a][1]
        }
        var a = e.defineLocale("gom-latn", {
          months: {
            standalone: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
            format: "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),
            isFormat: /MMMM(\s)+D[oD]?/
          },
          monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
          monthsParseExact: !0,
          weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
          weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
          weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "A h:mm [vazta]",
            LTS: "A h:mm:ss [vazta]",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY A h:mm [vazta]",
            LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
            llll: "ddd, D MMM YYYY, A h:mm [vazta]"
          },
          calendar: {
            sameDay: "[Aiz] LT",
            nextDay: "[Faleam] LT",
            nextWeek: "[Fuddlo] dddd[,] LT",
            lastDay: "[Kal] LT",
            lastWeek: "[Fattlo] dddd[,] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s",
            past: "%s adim",
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er)/,
          ordinal: function (e, t) {
            switch (t) {
              case "D":
                return e + "er";
              default:
              case "M":
              case "Q":
              case "DDD":
              case "d":
              case "w":
              case "W":
                return e
            }
          },
          week: {
            dow: 1,
            doy: 4
          },
          meridiemParse: /rati|sokallim|donparam|sanje/,
          meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokallim" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
          },
          meridiem: function (e, t, a) {
            return e < 4 ? "rati" : e < 12 ? "sokallim" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
          }
        });
        return a
      }))
    },
    "0e49": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("fr-ch", {
          months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
          monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
          monthsParseExact: !0,
          weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
          weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Aujourd’hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
          ordinal: function (e, t) {
            switch (t) {
              default:
              case "M":
              case "Q":
              case "D":
              case "DDD":
              case "d":
                return e + (1 === e ? "er" : "e");
              case "w":
              case "W":
                return e + (1 === e ? "re" : "e")
            }
          },
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    "0e6b": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("en-au", {
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (e) {
            var t = e % 10,
              a = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + a
          },
          week: {
            dow: 0,
            doy: 4
          }
        });
        return t
      }))
    },
    "0e81": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
          },
          a = e.defineLocale("tr", {
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            meridiem: function (e, t, a) {
              return e < 12 ? a ? "öö" : "ÖÖ" : a ? "ös" : "ÖS"
            },
            meridiemParse: /öö|ÖÖ|ös|ÖS/,
            isPM: function (e) {
              return "ös" === e || "ÖS" === e
            },
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[bugün saat] LT",
              nextDay: "[yarın saat] LT",
              nextWeek: "[gelecek] dddd [saat] LT",
              lastDay: "[dün] LT",
              lastWeek: "[geçen] dddd [saat] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s sonra",
              past: "%s önce",
              s: "birkaç saniye",
              ss: "%d saniye",
              m: "bir dakika",
              mm: "%d dakika",
              h: "bir saat",
              hh: "%d saat",
              d: "bir gün",
              dd: "%d gün",
              M: "bir ay",
              MM: "%d ay",
              y: "bir yıl",
              yy: "%d yıl"
            },
            ordinal: function (e, a) {
              switch (a) {
                case "d":
                case "D":
                case "Do":
                case "DD":
                  return e;
                default:
                  if (0 === e) return e + "'ıncı";
                  var n = e % 10,
                    r = e % 100 - n,
                    i = e >= 100 ? 100 : null;
                  return e + (t[n] || t[r] || t[i])
              }
            },
            week: {
              dow: 1,
              doy: 7
            }
          });
        return a
      }))
    },
    "0f14": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("da", {
          months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
          monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
          weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
          weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
          weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
          },
          calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "på dddd [kl.] LT",
            lastDay: "[i går kl.] LT",
            lastWeek: "[i] dddd[s kl.] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "få sekunder",
            ss: "%d sekunder",
            m: "et minut",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dage",
            M: "en måned",
            MM: "%d måneder",
            y: "et år",
            yy: "%d år"
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    "0f38": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("tl-ph", {
          months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
          monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
          weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
          weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
          weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "MM/D/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY HH:mm",
            LLLL: "dddd, MMMM DD, YYYY HH:mm"
          },
          calendar: {
            sameDay: "LT [ngayong araw]",
            nextDay: "[Bukas ng] LT",
            nextWeek: "LT [sa susunod na] dddd",
            lastDay: "LT [kahapon]",
            lastWeek: "LT [noong nakaraang] dddd",
            sameElse: "L"
          },
          relativeTime: {
            future: "sa loob ng %s",
            past: "%s ang nakalipas",
            s: "ilang segundo",
            ss: "%d segundo",
            m: "isang minuto",
            mm: "%d minuto",
            h: "isang oras",
            hh: "%d oras",
            d: "isang araw",
            dd: "%d araw",
            M: "isang buwan",
            MM: "%d buwan",
            y: "isang taon",
            yy: "%d taon"
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: function (e) {
            return e
          },
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    "0ff2": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("eu", {
          months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
          monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
          monthsParseExact: !0,
          weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
          weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
          weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY[ko] MMMM[ren] D[a]",
            LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
            LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
            l: "YYYY-M-D",
            ll: "YYYY[ko] MMM D[a]",
            lll: "YYYY[ko] MMM D[a] HH:mm",
            llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
          },
          calendar: {
            sameDay: "[gaur] LT[etan]",
            nextDay: "[bihar] LT[etan]",
            nextWeek: "dddd LT[etan]",
            lastDay: "[atzo] LT[etan]",
            lastWeek: "[aurreko] dddd LT[etan]",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s barru",
            past: "duela %s",
            s: "segundo batzuk",
            ss: "%d segundo",
            m: "minutu bat",
            mm: "%d minutu",
            h: "ordu bat",
            hh: "%d ordu",
            d: "egun bat",
            dd: "%d egun",
            M: "hilabete bat",
            MM: "%d hilabete",
            y: "urte bat",
            yy: "%d urte"
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 7
          }
        });
        return t
      }))
    },
    "10e8": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("th", {
          months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
          monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
          monthsParseExact: !0,
          weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
          weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
          weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY เวลา H:mm",
            LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
          },
          meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
          isPM: function (e) {
            return "หลังเที่ยง" === e
          },
          meridiem: function (e, t, a) {
            return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
          },
          calendar: {
            sameDay: "[วันนี้ เวลา] LT",
            nextDay: "[พรุ่งนี้ เวลา] LT",
            nextWeek: "dddd[หน้า เวลา] LT",
            lastDay: "[เมื่อวานนี้ เวลา] LT",
            lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "อีก %s",
            past: "%sที่แล้ว",
            s: "ไม่กี่วินาที",
            ss: "%d วินาที",
            m: "1 นาที",
            mm: "%d นาที",
            h: "1 ชั่วโมง",
            hh: "%d ชั่วโมง",
            d: "1 วัน",
            dd: "%d วัน",
            M: "1 เดือน",
            MM: "%d เดือน",
            y: "1 ปี",
            yy: "%d ปี"
          }
        });
        return t
      }))
    },
    "13d5": function (e, t, a) {
      "use strict";
      var n = a("23e7"),
        r = a("d58f").left,
        i = a("a640"),
        s = a("ae40"),
        o = i("reduce"),
        d = s("reduce", {
          1: 0
        });
      n({
        target: "Array",
        proto: !0,
        forced: !o || !d
      }, {
        reduce: function (e) {
          return r(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
      })
    },
    "13e9": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            words: {
              ss: ["секунда", "секунде", "секунди"],
              m: ["један минут", "једне минуте"],
              mm: ["минут", "минуте", "минута"],
              h: ["један сат", "једног сата"],
              hh: ["сат", "сата", "сати"],
              dd: ["дан", "дана", "дана"],
              MM: ["месец", "месеца", "месеци"],
              yy: ["година", "године", "година"]
            },
            correctGrammaticalCase: function (e, t) {
              return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function (e, a, n) {
              var r = t.words[n];
              return 1 === n.length ? a ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
            }
          },
          a = e.defineLocale("sr-cyrl", {
            months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
            monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
            monthsParseExact: !0,
            weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
            weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
            weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
              sameDay: "[данас у] LT",
              nextDay: "[сутра у] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[у] [недељу] [у] LT";
                  case 3:
                    return "[у] [среду] [у] LT";
                  case 6:
                    return "[у] [суботу] [у] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[у] dddd [у] LT"
                }
              },
              lastDay: "[јуче у] LT",
              lastWeek: function () {
                var e = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];
                return e[this.day()]
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "за %s",
              past: "пре %s",
              s: "неколико секунди",
              ss: t.translate,
              m: t.translate,
              mm: t.translate,
              h: t.translate,
              hh: t.translate,
              d: "дан",
              dd: t.translate,
              M: "месец",
              MM: t.translate,
              y: "годину",
              yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
              dow: 1,
              doy: 7
            }
          });
        return a
      }))
    },
    "14c3": function (e, t, a) {
      var n = a("c6b6"),
        r = a("9263");
      e.exports = function (e, t) {
        var a = e.exec;
        if ("function" === typeof a) {
          var i = a.call(e, t);
          if ("object" !== typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
          return i
        }
        if ("RegExp" !== n(e)) throw TypeError("RegExp#exec called on incompatible receiver");
        return r.call(e, t)
      }
    },
    "167b": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("oc-lnc", {
          months: {
            standalone: "genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"),
            format: "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split("_"),
            isFormat: /D[oD]?(\s)+MMMM/
          },
          monthsShort: "gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"),
          monthsParseExact: !0,
          weekdays: "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"),
          weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
          weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [de] YYYY",
            ll: "D MMM YYYY",
            LLL: "D MMMM [de] YYYY [a] H:mm",
            lll: "D MMM YYYY, H:mm",
            LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
            llll: "ddd D MMM YYYY, H:mm"
          },
          calendar: {
            sameDay: "[uèi a] LT",
            nextDay: "[deman a] LT",
            nextWeek: "dddd [a] LT",
            lastDay: "[ièr a] LT",
            lastWeek: "dddd [passat a] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "d'aquí %s",
            past: "fa %s",
            s: "unas segondas",
            ss: "%d segondas",
            m: "una minuta",
            mm: "%d minutas",
            h: "una ora",
            hh: "%d oras",
            d: "un jorn",
            dd: "%d jorns",
            M: "un mes",
            MM: "%d meses",
            y: "un an",
            yy: "%d ans"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
          ordinal: function (e, t) {
            var a = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
            return "w" !== t && "W" !== t || (a = "a"), e + a
          },
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    "1b45": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("mt", {
          months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
          monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
          weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
          weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
          weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Illum fil-]LT",
            nextDay: "[Għada fil-]LT",
            nextWeek: "dddd [fil-]LT",
            lastDay: "[Il-bieraħ fil-]LT",
            lastWeek: "dddd [li għadda] [fil-]LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "f’ %s",
            past: "%s ilu",
            s: "ftit sekondi",
            ss: "%d sekondi",
            m: "minuta",
            mm: "%d minuti",
            h: "siegħa",
            hh: "%d siegħat",
            d: "ġurnata",
            dd: "%d ġranet",
            M: "xahar",
            MM: "%d xhur",
            y: "sena",
            yy: "%d sni"
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    "1cfd": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0"
          },
          a = function (e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
          },
          n = {
            s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
            m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
            h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
            d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
            M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
            y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
          },
          r = function (e) {
            return function (t, r, i, s) {
              var o = a(t),
                d = n[e][a(t)];
              return 2 === o && (d = d[r ? 0 : 1]), d.replace(/%d/i, t)
            }
          },
          i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
          s = e.defineLocale("ar-ly", {
            months: i,
            monthsShort: i,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "D/‏M/‏YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
              return "م" === e
            },
            meridiem: function (e, t, a) {
              return e < 12 ? "ص" : "م"
            },
            calendar: {
              sameDay: "[اليوم عند الساعة] LT",
              nextDay: "[غدًا عند الساعة] LT",
              nextWeek: "dddd [عند الساعة] LT",
              lastDay: "[أمس عند الساعة] LT",
              lastWeek: "dddd [عند الساعة] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "بعد %s",
              past: "منذ %s",
              s: r("s"),
              ss: r("s"),
              m: r("m"),
              mm: r("m"),
              h: r("h"),
              hh: r("h"),
              d: r("d"),
              dd: r("d"),
              M: r("M"),
              MM: r("M"),
              y: r("y"),
              yy: r("y")
            },
            preparse: function (e) {
              return e.replace(/،/g, ",")
            },
            postformat: function (e) {
              return e.replace(/\d/g, (function (e) {
                return t[e]
              })).replace(/,/g, "،")
            },
            week: {
              dow: 6,
              doy: 12
            }
          });
        return s
      }))
    },
    "1fc1": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t) {
          var a = e.split("_");
          return t % 10 === 1 && t % 100 !== 11 ? a[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? a[1] : a[2]
        }

        function a(e, a, n) {
          var r = {
            ss: a ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
            mm: a ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
            hh: a ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
            dd: "дзень_дні_дзён",
            MM: "месяц_месяцы_месяцаў",
            yy: "год_гады_гадоў"
          };
          return "m" === n ? a ? "хвіліна" : "хвіліну" : "h" === n ? a ? "гадзіна" : "гадзіну" : e + " " + t(r[n], +e)
        }
        var n = e.defineLocale("be", {
          months: {
            format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
            standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
          },
          monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
          weekdays: {
            format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
            standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
            isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
          },
          weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
          weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., HH:mm",
            LLLL: "dddd, D MMMM YYYY г., HH:mm"
          },
          calendar: {
            sameDay: "[Сёння ў] LT",
            nextDay: "[Заўтра ў] LT",
            lastDay: "[Учора ў] LT",
            nextWeek: function () {
              return "[У] dddd [ў] LT"
            },
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                  return "[У мінулую] dddd [ў] LT";
                case 1:
                case 2:
                case 4:
                  return "[У мінулы] dddd [ў] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "праз %s",
            past: "%s таму",
            s: "некалькі секунд",
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: "дзень",
            dd: a,
            M: "месяц",
            MM: a,
            y: "год",
            yy: a
          },
          meridiemParse: /ночы|раніцы|дня|вечара/,
          isPM: function (e) {
            return /^(дня|вечара)$/.test(e)
          },
          meridiem: function (e, t, a) {
            return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
          ordinal: function (e, t) {
            switch (t) {
              case "M":
              case "d":
              case "DDD":
              case "w":
              case "W":
                return e % 10 !== 2 && e % 10 !== 3 || e % 100 === 12 || e % 100 === 13 ? e + "-ы" : e + "-і";
              case "D":
                return e + "-га";
              default:
                return e
            }
          },
          week: {
            dow: 1,
            doy: 7
          }
        });
        return n
      }))
    },
    "201b": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("ka", {
          months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
          monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
          weekdays: {
            standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
            format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
            isFormat: /(წინა|შემდეგ)/
          },
          weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
          weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[დღეს] LT[-ზე]",
            nextDay: "[ხვალ] LT[-ზე]",
            lastDay: "[გუშინ] LT[-ზე]",
            nextWeek: "[შემდეგ] dddd LT[-ზე]",
            lastWeek: "[წინა] dddd LT-ზე",
            sameElse: "L"
          },
          relativeTime: {
            future: function (e) {
              return e.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, (function (e, t, a) {
                return "ი" === a ? t + "ში" : t + a + "ში"
              }))
            },
            past: function (e) {
              return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : e
            },
            s: "რამდენიმე წამი",
            ss: "%d წამი",
            m: "წუთი",
            mm: "%d წუთი",
            h: "საათი",
            hh: "%d საათი",
            d: "დღე",
            dd: "%d დღე",
            M: "თვე",
            MM: "%d თვე",
            y: "წელი",
            yy: "%d წელი"
          },
          dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
          ordinal: function (e) {
            return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 === 0 || e % 100 === 0 ? "მე-" + e : e + "-ე"
          },
          week: {
            dow: 1,
            doy: 7
          }
        });
        return t
      }))
    },
    "22f8": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("ko", {
          months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
          monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
          weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
          weekdaysShort: "일_월_화_수_목_금_토".split("_"),
          weekdaysMin: "일_월_화_수_목_금_토".split("_"),
          longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY년 MMMM D일",
            LLL: "YYYY년 MMMM D일 A h:mm",
            LLLL: "YYYY년 MMMM D일 dddd A h:mm",
            l: "YYYY.MM.DD.",
            ll: "YYYY년 MMMM D일",
            lll: "YYYY년 MMMM D일 A h:mm",
            llll: "YYYY년 MMMM D일 dddd A h:mm"
          },
          calendar: {
            sameDay: "오늘 LT",
            nextDay: "내일 LT",
            nextWeek: "dddd LT",
            lastDay: "어제 LT",
            lastWeek: "지난주 dddd LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s 후",
            past: "%s 전",
            s: "몇 초",
            ss: "%d초",
            m: "1분",
            mm: "%d분",
            h: "한 시간",
            hh: "%d시간",
            d: "하루",
            dd: "%d일",
            M: "한 달",
            MM: "%d달",
            y: "일 년",
            yy: "%d년"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
          ordinal: function (e, t) {
            switch (t) {
              case "d":
              case "D":
              case "DDD":
                return e + "일";
              case "M":
                return e + "월";
              case "w":
              case "W":
                return e + "주";
              default:
                return e
            }
          },
          meridiemParse: /오전|오후/,
          isPM: function (e) {
            return "오후" === e
          },
          meridiem: function (e, t, a) {
            return e < 12 ? "오전" : "오후"
          }
        });
        return t
      }))
    },
    2421: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠"
          },
          a = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
          },
          n = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"],
          r = e.defineLocale("ku", {
            months: n,
            monthsShort: n,
            weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
            weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /ئێواره‌|به‌یانی/,
            isPM: function (e) {
              return /ئێواره‌/.test(e)
            },
            meridiem: function (e, t, a) {
              return e < 12 ? "به‌یانی" : "ئێواره‌"
            },
            calendar: {
              sameDay: "[ئه‌مرۆ كاتژمێر] LT",
              nextDay: "[به‌یانی كاتژمێر] LT",
              nextWeek: "dddd [كاتژمێر] LT",
              lastDay: "[دوێنێ كاتژمێر] LT",
              lastWeek: "dddd [كاتژمێر] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "له‌ %s",
              past: "%s",
              s: "چه‌ند چركه‌یه‌ك",
              ss: "چركه‌ %d",
              m: "یه‌ك خوله‌ك",
              mm: "%d خوله‌ك",
              h: "یه‌ك كاتژمێر",
              hh: "%d كاتژمێر",
              d: "یه‌ك ڕۆژ",
              dd: "%d ڕۆژ",
              M: "یه‌ك مانگ",
              MM: "%d مانگ",
              y: "یه‌ك ساڵ",
              yy: "%d ساڵ"
            },
            preparse: function (e) {
              return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function (e) {
                return a[e]
              })).replace(/،/g, ",")
            },
            postformat: function (e) {
              return e.replace(/\d/g, (function (e) {
                return t[e]
              })).replace(/,/g, "،")
            },
            week: {
              dow: 6,
              doy: 12
            }
          });
        return r
      }))
    },
    2532: function (e, t, a) {
      "use strict";
      var n = a("23e7"),
        r = a("5a34"),
        i = a("1d80"),
        s = a("ab13");
      n({
        target: "String",
        proto: !0,
        forced: !s("includes")
      }, {
        includes: function (e) {
          return !!~String(i(this)).indexOf(r(e), arguments.length > 1 ? arguments[1] : void 0)
        }
      })
    },
    2554: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, a) {
          var n = e + " ";
          switch (a) {
            case "ss":
              return n += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi", n;
            case "m":
              return t ? "jedna minuta" : "jedne minute";
            case "mm":
              return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta", n;
            case "h":
              return t ? "jedan sat" : "jednog sata";
            case "hh":
              return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati", n;
            case "dd":
              return n += 1 === e ? "dan" : "dana", n;
            case "MM":
              return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci", n;
            case "yy":
              return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina", n
          }
        }
        var a = e.defineLocale("bs", {
          months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
          monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
          monthsParseExact: !0,
          weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
          weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[u] [nedjelju] [u] LT";
                case 3:
                  return "[u] [srijedu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT"
              }
            },
            lastDay: "[jučer u] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                  return "[prošlu] dddd [u] LT";
                case 6:
                  return "[prošle] [subote] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[prošli] dddd [u] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: "dan",
            dd: t,
            M: "mjesec",
            MM: t,
            y: "godinu",
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 7
          }
        });
        return a
      }))
    },
    "26f9": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
          ss: "sekundė_sekundžių_sekundes",
          m: "minutė_minutės_minutę",
          mm: "minutės_minučių_minutes",
          h: "valanda_valandos_valandą",
          hh: "valandos_valandų_valandas",
          d: "diena_dienos_dieną",
          dd: "dienos_dienų_dienas",
          M: "mėnuo_mėnesio_mėnesį",
          MM: "mėnesiai_mėnesių_mėnesius",
          y: "metai_metų_metus",
          yy: "metai_metų_metus"
        };

        function a(e, t, a, n) {
          return t ? "kelios sekundės" : n ? "kelių sekundžių" : "kelias sekundes"
        }

        function n(e, t, a, n) {
          return t ? i(a)[0] : n ? i(a)[1] : i(a)[2]
        }

        function r(e) {
          return e % 10 === 0 || e > 10 && e < 20
        }

        function i(e) {
          return t[e].split("_")
        }

        function s(e, t, a, s) {
          var o = e + " ";
          return 1 === e ? o + n(e, t, a[0], s) : t ? o + (r(e) ? i(a)[1] : i(a)[0]) : s ? o + i(a)[1] : o + (r(e) ? i(a)[1] : i(a)[2])
        }
        var o = e.defineLocale("lt", {
          months: {
            format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
            standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
          },
          monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
          weekdays: {
            format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
            standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
            isFormat: /dddd HH:mm/
          },
          weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
          weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY [m.] MMMM D [d.]",
            LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
            l: "YYYY-MM-DD",
            ll: "YYYY [m.] MMMM D [d.]",
            lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
          },
          calendar: {
            sameDay: "[Šiandien] LT",
            nextDay: "[Rytoj] LT",
            nextWeek: "dddd LT",
            lastDay: "[Vakar] LT",
            lastWeek: "[Praėjusį] dddd LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "po %s",
            past: "prieš %s",
            s: a,
            ss: s,
            m: n,
            mm: s,
            h: n,
            hh: s,
            d: n,
            dd: s,
            M: n,
            MM: s,
            y: n,
            yy: s
          },
          dayOfMonthOrdinalParse: /\d{1,2}-oji/,
          ordinal: function (e) {
            return e + "-oji"
          },
          week: {
            dow: 1,
            doy: 4
          }
        });
        return o
      }))
    },
    2909: function (e, t, a) {
      "use strict";
      a.d(t, "a", (function () {
        return d
      }));
      var n = a("6b75");

      function r(e) {
        if (Array.isArray(e)) return Object(n["a"])(e)
      }
      a("a4d3"), a("e01a"), a("d28b"), a("a630"), a("d3b7"), a("3ca3"), a("ddb0");

      function i(e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
      }
      var s = a("06c5");

      function o() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }

      function d(e) {
        return r(e) || i(e) || Object(s["a"])(e) || o()
      }
    },
    2921: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("vi", {
          months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
          monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
          monthsParseExact: !0,
          weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
          weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
          weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
          weekdaysParseExact: !0,
          meridiemParse: /sa|ch/i,
          isPM: function (e) {
            return /^ch$/i.test(e)
          },
          meridiem: function (e, t, a) {
            return e < 12 ? a ? "sa" : "SA" : a ? "ch" : "CH"
          },
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [năm] YYYY",
            LLL: "D MMMM [năm] YYYY HH:mm",
            LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
            l: "DD/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Hôm nay lúc] LT",
            nextDay: "[Ngày mai lúc] LT",
            nextWeek: "dddd [tuần tới lúc] LT",
            lastDay: "[Hôm qua lúc] LT",
            lastWeek: "dddd [tuần trước lúc] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s tới",
            past: "%s trước",
            s: "vài giây",
            ss: "%d giây",
            m: "một phút",
            mm: "%d phút",
            h: "một giờ",
            hh: "%d giờ",
            d: "một ngày",
            dd: "%d ngày",
            M: "một tháng",
            MM: "%d tháng",
            y: "một năm",
            yy: "%d năm"
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: function (e) {
            return e
          },
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    "293c": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            words: {
              ss: ["sekund", "sekunda", "sekundi"],
              m: ["jedan minut", "jednog minuta"],
              mm: ["minut", "minuta", "minuta"],
              h: ["jedan sat", "jednog sata"],
              hh: ["sat", "sata", "sati"],
              dd: ["dan", "dana", "dana"],
              MM: ["mjesec", "mjeseca", "mjeseci"],
              yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function (e, t) {
              return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function (e, a, n) {
              var r = t.words[n];
              return 1 === n.length ? a ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
            }
          },
          a = e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
              sameDay: "[danas u] LT",
              nextDay: "[sjutra u] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedjelju] [u] LT";
                  case 3:
                    return "[u] [srijedu] [u] LT";
                  case 6:
                    return "[u] [subotu] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT"
                }
              },
              lastDay: "[juče u] LT",
              lastWeek: function () {
                var e = ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                return e[this.day()]
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "za %s",
              past: "prije %s",
              s: "nekoliko sekundi",
              ss: t.translate,
              m: t.translate,
              mm: t.translate,
              h: t.translate,
              hh: t.translate,
              d: "dan",
              dd: t.translate,
              M: "mjesec",
              MM: t.translate,
              y: "godinu",
              yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
              dow: 1,
              doy: 7
            }
          });
        return a
      }))
    },
    "2bfb": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("af", {
          months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
          monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
          weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
          weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
          weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
          meridiemParse: /vm|nm/i,
          isPM: function (e) {
            return /^nm$/i.test(e)
          },
          meridiem: function (e, t, a) {
            return e < 12 ? a ? "vm" : "VM" : a ? "nm" : "NM"
          },
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Vandag om] LT",
            nextDay: "[Môre om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[Gister om] LT",
            lastWeek: "[Laas] dddd [om] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "oor %s",
            past: "%s gelede",
            s: "'n paar sekondes",
            ss: "%d sekondes",
            m: "'n minuut",
            mm: "%d minute",
            h: "'n uur",
            hh: "%d ure",
            d: "'n dag",
            dd: "%d dae",
            M: "'n maand",
            MM: "%d maande",
            y: "'n jaar",
            yy: "%d jaar"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function (e) {
            return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
          },
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    "2e8c": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("uz", {
          months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
          monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
          weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
          weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
          weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm"
          },
          calendar: {
            sameDay: "[Бугун соат] LT [да]",
            nextDay: "[Эртага] LT [да]",
            nextWeek: "dddd [куни соат] LT [да]",
            lastDay: "[Кеча соат] LT [да]",
            lastWeek: "[Утган] dddd [куни соат] LT [да]",
            sameElse: "L"
          },
          relativeTime: {
            future: "Якин %s ичида",
            past: "Бир неча %s олдин",
            s: "фурсат",
            ss: "%d фурсат",
            m: "бир дакика",
            mm: "%d дакика",
            h: "бир соат",
            hh: "%d соат",
            d: "бир кун",
            dd: "%d кун",
            M: "бир ой",
            MM: "%d ой",
            y: "бир йил",
            yy: "%d йил"
          },
          week: {
            dow: 1,
            doy: 7
          }
        });
        return t
      }))
    },
    "30ef": function (e, t, a) {
      /*!
       * Chart.js v2.9.3
       * https://www.chartjs.org
       * (c) 2019 Chart.js Contributors
       * Released under the MIT License
       */
      (function (t, n) {
        e.exports = n(function () {
          try {
            return a("c1df")
          } catch (e) {}
        }())
      })(0, (function (e) {
        "use strict";

        function t(e, t) {
          return t = {
            exports: {}
          }, e(t, t.exports), t.exports
        }

        function a(e) {
          return e && e["default"] || e
        }
        e = e && e.hasOwnProperty("default") ? e["default"] : e;
        var n = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
          },
          r = t((function (e) {
            var t = {};
            for (var a in n) n.hasOwnProperty(a) && (t[n[a]] = a);
            var r = e.exports = {
              rgb: {
                channels: 3,
                labels: "rgb"
              },
              hsl: {
                channels: 3,
                labels: "hsl"
              },
              hsv: {
                channels: 3,
                labels: "hsv"
              },
              hwb: {
                channels: 3,
                labels: "hwb"
              },
              cmyk: {
                channels: 4,
                labels: "cmyk"
              },
              xyz: {
                channels: 3,
                labels: "xyz"
              },
              lab: {
                channels: 3,
                labels: "lab"
              },
              lch: {
                channels: 3,
                labels: "lch"
              },
              hex: {
                channels: 1,
                labels: ["hex"]
              },
              keyword: {
                channels: 1,
                labels: ["keyword"]
              },
              ansi16: {
                channels: 1,
                labels: ["ansi16"]
              },
              ansi256: {
                channels: 1,
                labels: ["ansi256"]
              },
              hcg: {
                channels: 3,
                labels: ["h", "c", "g"]
              },
              apple: {
                channels: 3,
                labels: ["r16", "g16", "b16"]
              },
              gray: {
                channels: 1,
                labels: ["gray"]
              }
            };
            for (var i in r)
              if (r.hasOwnProperty(i)) {
                if (!("channels" in r[i])) throw new Error("missing channels property: " + i);
                if (!("labels" in r[i])) throw new Error("missing channel labels property: " + i);
                if (r[i].labels.length !== r[i].channels) throw new Error("channel and label counts mismatch: " + i);
                var s = r[i].channels,
                  o = r[i].labels;
                delete r[i].channels, delete r[i].labels, Object.defineProperty(r[i], "channels", {
                  value: s
                }), Object.defineProperty(r[i], "labels", {
                  value: o
                })
              }
            function d(e, t) {
              return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2) + Math.pow(e[2] - t[2], 2)
            }
            r.rgb.hsl = function (e) {
              var t, a, n, r = e[0] / 255,
                i = e[1] / 255,
                s = e[2] / 255,
                o = Math.min(r, i, s),
                d = Math.max(r, i, s),
                l = d - o;
              return d === o ? t = 0 : r === d ? t = (i - s) / l : i === d ? t = 2 + (s - r) / l : s === d && (t = 4 + (r - i) / l), t = Math.min(60 * t, 360), t < 0 && (t += 360), n = (o + d) / 2, a = d === o ? 0 : n <= .5 ? l / (d + o) : l / (2 - d - o), [t, 100 * a, 100 * n]
            }, r.rgb.hsv = function (e) {
              var t, a, n, r, i, s = e[0] / 255,
                o = e[1] / 255,
                d = e[2] / 255,
                l = Math.max(s, o, d),
                u = l - Math.min(s, o, d),
                c = function (e) {
                  return (l - e) / 6 / u + .5
                };
              return 0 === u ? r = i = 0 : (i = u / l, t = c(s), a = c(o), n = c(d), s === l ? r = n - a : o === l ? r = 1 / 3 + t - n : d === l && (r = 2 / 3 + a - t), r < 0 ? r += 1 : r > 1 && (r -= 1)), [360 * r, 100 * i, 100 * l]
            }, r.rgb.hwb = function (e) {
              var t = e[0],
                a = e[1],
                n = e[2],
                i = r.rgb.hsl(e)[0],
                s = 1 / 255 * Math.min(t, Math.min(a, n));
              return n = 1 - 1 / 255 * Math.max(t, Math.max(a, n)), [i, 100 * s, 100 * n]
            }, r.rgb.cmyk = function (e) {
              var t, a, n, r, i = e[0] / 255,
                s = e[1] / 255,
                o = e[2] / 255;
              return r = Math.min(1 - i, 1 - s, 1 - o), t = (1 - i - r) / (1 - r) || 0, a = (1 - s - r) / (1 - r) || 0, n = (1 - o - r) / (1 - r) || 0, [100 * t, 100 * a, 100 * n, 100 * r]
            }, r.rgb.keyword = function (e) {
              var a = t[e];
              if (a) return a;
              var r, i = 1 / 0;
              for (var s in n)
                if (n.hasOwnProperty(s)) {
                  var o = n[s],
                    l = d(e, o);
                  l < i && (i = l, r = s)
                } return r
            }, r.keyword.rgb = function (e) {
              return n[e]
            }, r.rgb.xyz = function (e) {
              var t = e[0] / 255,
                a = e[1] / 255,
                n = e[2] / 255;
              t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92, a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92;
              var r = .4124 * t + .3576 * a + .1805 * n,
                i = .2126 * t + .7152 * a + .0722 * n,
                s = .0193 * t + .1192 * a + .9505 * n;
              return [100 * r, 100 * i, 100 * s]
            }, r.rgb.lab = function (e) {
              var t, a, n, i = r.rgb.xyz(e),
                s = i[0],
                o = i[1],
                d = i[2];
              return s /= 95.047, o /= 100, d /= 108.883, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, d = d > .008856 ? Math.pow(d, 1 / 3) : 7.787 * d + 16 / 116, t = 116 * o - 16, a = 500 * (s - o), n = 200 * (o - d), [t, a, n]
            }, r.hsl.rgb = function (e) {
              var t, a, n, r, i, s = e[0] / 360,
                o = e[1] / 100,
                d = e[2] / 100;
              if (0 === o) return i = 255 * d, [i, i, i];
              a = d < .5 ? d * (1 + o) : d + o - d * o, t = 2 * d - a, r = [0, 0, 0];
              for (var l = 0; l < 3; l++) n = s + 1 / 3 * -(l - 1), n < 0 && n++, n > 1 && n--, i = 6 * n < 1 ? t + 6 * (a - t) * n : 2 * n < 1 ? a : 3 * n < 2 ? t + (a - t) * (2 / 3 - n) * 6 : t, r[l] = 255 * i;
              return r
            }, r.hsl.hsv = function (e) {
              var t, a, n = e[0],
                r = e[1] / 100,
                i = e[2] / 100,
                s = r,
                o = Math.max(i, .01);
              return i *= 2, r *= i <= 1 ? i : 2 - i, s *= o <= 1 ? o : 2 - o, a = (i + r) / 2, t = 0 === i ? 2 * s / (o + s) : 2 * r / (i + r), [n, 100 * t, 100 * a]
            }, r.hsv.rgb = function (e) {
              var t = e[0] / 60,
                a = e[1] / 100,
                n = e[2] / 100,
                r = Math.floor(t) % 6,
                i = t - Math.floor(t),
                s = 255 * n * (1 - a),
                o = 255 * n * (1 - a * i),
                d = 255 * n * (1 - a * (1 - i));
              switch (n *= 255, r) {
                case 0:
                  return [n, d, s];
                case 1:
                  return [o, n, s];
                case 2:
                  return [s, n, d];
                case 3:
                  return [s, o, n];
                case 4:
                  return [d, s, n];
                case 5:
                  return [n, s, o]
              }
            }, r.hsv.hsl = function (e) {
              var t, a, n, r = e[0],
                i = e[1] / 100,
                s = e[2] / 100,
                o = Math.max(s, .01);
              return n = (2 - i) * s, t = (2 - i) * o, a = i * o, a /= t <= 1 ? t : 2 - t, a = a || 0, n /= 2, [r, 100 * a, 100 * n]
            }, r.hwb.rgb = function (e) {
              var t, a, n, r, i, s, o, d = e[0] / 360,
                l = e[1] / 100,
                u = e[2] / 100,
                c = l + u;
              switch (c > 1 && (l /= c, u /= c), t = Math.floor(6 * d), a = 1 - u, n = 6 * d - t, 0 !== (1 & t) && (n = 1 - n), r = l + n * (a - l), t) {
                default:
                case 6:
                case 0:
                  i = a, s = r, o = l;
                  break;
                case 1:
                  i = r, s = a, o = l;
                  break;
                case 2:
                  i = l, s = a, o = r;
                  break;
                case 3:
                  i = l, s = r, o = a;
                  break;
                case 4:
                  i = r, s = l, o = a;
                  break;
                case 5:
                  i = a, s = l, o = r;
                  break
              }
              return [255 * i, 255 * s, 255 * o]
            }, r.cmyk.rgb = function (e) {
              var t, a, n, r = e[0] / 100,
                i = e[1] / 100,
                s = e[2] / 100,
                o = e[3] / 100;
              return t = 1 - Math.min(1, r * (1 - o) + o), a = 1 - Math.min(1, i * (1 - o) + o), n = 1 - Math.min(1, s * (1 - o) + o), [255 * t, 255 * a, 255 * n]
            }, r.xyz.rgb = function (e) {
              var t, a, n, r = e[0] / 100,
                i = e[1] / 100,
                s = e[2] / 100;
              return t = 3.2406 * r + -1.5372 * i + -.4986 * s, a = -.9689 * r + 1.8758 * i + .0415 * s, n = .0557 * r + -.204 * i + 1.057 * s, t = t > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : 12.92 * a, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, t = Math.min(Math.max(0, t), 1), a = Math.min(Math.max(0, a), 1), n = Math.min(Math.max(0, n), 1), [255 * t, 255 * a, 255 * n]
            }, r.xyz.lab = function (e) {
              var t, a, n, r = e[0],
                i = e[1],
                s = e[2];
              return r /= 95.047, i /= 100, s /= 108.883, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, t = 116 * i - 16, a = 500 * (r - i), n = 200 * (i - s), [t, a, n]
            }, r.lab.xyz = function (e) {
              var t, a, n, r = e[0],
                i = e[1],
                s = e[2];
              a = (r + 16) / 116, t = i / 500 + a, n = a - s / 200;
              var o = Math.pow(a, 3),
                d = Math.pow(t, 3),
                l = Math.pow(n, 3);
              return a = o > .008856 ? o : (a - 16 / 116) / 7.787, t = d > .008856 ? d : (t - 16 / 116) / 7.787, n = l > .008856 ? l : (n - 16 / 116) / 7.787, t *= 95.047, a *= 100, n *= 108.883, [t, a, n]
            }, r.lab.lch = function (e) {
              var t, a, n, r = e[0],
                i = e[1],
                s = e[2];
              return t = Math.atan2(s, i), a = 360 * t / 2 / Math.PI, a < 0 && (a += 360), n = Math.sqrt(i * i + s * s), [r, n, a]
            }, r.lch.lab = function (e) {
              var t, a, n, r = e[0],
                i = e[1],
                s = e[2];
              return n = s / 360 * 2 * Math.PI, t = i * Math.cos(n), a = i * Math.sin(n), [r, t, a]
            }, r.rgb.ansi16 = function (e) {
              var t = e[0],
                a = e[1],
                n = e[2],
                i = 1 in arguments ? arguments[1] : r.rgb.hsv(e)[2];
              if (i = Math.round(i / 50), 0 === i) return 30;
              var s = 30 + (Math.round(n / 255) << 2 | Math.round(a / 255) << 1 | Math.round(t / 255));
              return 2 === i && (s += 60), s
            }, r.hsv.ansi16 = function (e) {
              return r.rgb.ansi16(r.hsv.rgb(e), e[2])
            }, r.rgb.ansi256 = function (e) {
              var t = e[0],
                a = e[1],
                n = e[2];
              if (t === a && a === n) return t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232;
              var r = 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(a / 255 * 5) + Math.round(n / 255 * 5);
              return r
            }, r.ansi16.rgb = function (e) {
              var t = e % 10;
              if (0 === t || 7 === t) return e > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t];
              var a = .5 * (1 + ~~(e > 50)),
                n = (1 & t) * a * 255,
                r = (t >> 1 & 1) * a * 255,
                i = (t >> 2 & 1) * a * 255;
              return [n, r, i]
            }, r.ansi256.rgb = function (e) {
              if (e >= 232) {
                var t = 10 * (e - 232) + 8;
                return [t, t, t]
              }
              var a;
              e -= 16;
              var n = Math.floor(e / 36) / 5 * 255,
                r = Math.floor((a = e % 36) / 6) / 5 * 255,
                i = a % 6 / 5 * 255;
              return [n, r, i]
            }, r.rgb.hex = function (e) {
              var t = ((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2])),
                a = t.toString(16).toUpperCase();
              return "000000".substring(a.length) + a
            }, r.hex.rgb = function (e) {
              var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
              if (!t) return [0, 0, 0];
              var a = t[0];
              3 === t[0].length && (a = a.split("").map((function (e) {
                return e + e
              })).join(""));
              var n = parseInt(a, 16),
                r = n >> 16 & 255,
                i = n >> 8 & 255,
                s = 255 & n;
              return [r, i, s]
            }, r.rgb.hcg = function (e) {
              var t, a, n = e[0] / 255,
                r = e[1] / 255,
                i = e[2] / 255,
                s = Math.max(Math.max(n, r), i),
                o = Math.min(Math.min(n, r), i),
                d = s - o;
              return t = d < 1 ? o / (1 - d) : 0, a = d <= 0 ? 0 : s === n ? (r - i) / d % 6 : s === r ? 2 + (i - n) / d : 4 + (n - r) / d + 4, a /= 6, a %= 1, [360 * a, 100 * d, 100 * t]
            }, r.hsl.hcg = function (e) {
              var t = e[1] / 100,
                a = e[2] / 100,
                n = 1,
                r = 0;
              return n = a < .5 ? 2 * t * a : 2 * t * (1 - a), n < 1 && (r = (a - .5 * n) / (1 - n)), [e[0], 100 * n, 100 * r]
            }, r.hsv.hcg = function (e) {
              var t = e[1] / 100,
                a = e[2] / 100,
                n = t * a,
                r = 0;
              return n < 1 && (r = (a - n) / (1 - n)), [e[0], 100 * n, 100 * r]
            }, r.hcg.rgb = function (e) {
              var t = e[0] / 360,
                a = e[1] / 100,
                n = e[2] / 100;
              if (0 === a) return [255 * n, 255 * n, 255 * n];
              var r = [0, 0, 0],
                i = t % 1 * 6,
                s = i % 1,
                o = 1 - s,
                d = 0;
              switch (Math.floor(i)) {
                case 0:
                  r[0] = 1, r[1] = s, r[2] = 0;
                  break;
                case 1:
                  r[0] = o, r[1] = 1, r[2] = 0;
                  break;
                case 2:
                  r[0] = 0, r[1] = 1, r[2] = s;
                  break;
                case 3:
                  r[0] = 0, r[1] = o, r[2] = 1;
                  break;
                case 4:
                  r[0] = s, r[1] = 0, r[2] = 1;
                  break;
                default:
                  r[0] = 1, r[1] = 0, r[2] = o
              }
              return d = (1 - a) * n, [255 * (a * r[0] + d), 255 * (a * r[1] + d), 255 * (a * r[2] + d)]
            }, r.hcg.hsv = function (e) {
              var t = e[1] / 100,
                a = e[2] / 100,
                n = t + a * (1 - t),
                r = 0;
              return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n]
            }, r.hcg.hsl = function (e) {
              var t = e[1] / 100,
                a = e[2] / 100,
                n = a * (1 - t) + .5 * t,
                r = 0;
              return n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n]
            }, r.hcg.hwb = function (e) {
              var t = e[1] / 100,
                a = e[2] / 100,
                n = t + a * (1 - t);
              return [e[0], 100 * (n - t), 100 * (1 - n)]
            }, r.hwb.hcg = function (e) {
              var t = e[1] / 100,
                a = e[2] / 100,
                n = 1 - a,
                r = n - t,
                i = 0;
              return r < 1 && (i = (n - r) / (1 - r)), [e[0], 100 * r, 100 * i]
            }, r.apple.rgb = function (e) {
              return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255]
            }, r.rgb.apple = function (e) {
              return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535]
            }, r.gray.rgb = function (e) {
              return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255]
            }, r.gray.hsl = r.gray.hsv = function (e) {
              return [0, 0, e[0]]
            }, r.gray.hwb = function (e) {
              return [0, 100, e[0]]
            }, r.gray.cmyk = function (e) {
              return [0, 0, 0, e[0]]
            }, r.gray.lab = function (e) {
              return [e[0], 0, 0]
            }, r.gray.hex = function (e) {
              var t = 255 & Math.round(e[0] / 100 * 255),
                a = (t << 16) + (t << 8) + t,
                n = a.toString(16).toUpperCase();
              return "000000".substring(n.length) + n
            }, r.rgb.gray = function (e) {
              var t = (e[0] + e[1] + e[2]) / 3;
              return [t / 255 * 100]
            }
          }));
        r.rgb, r.hsl, r.hsv, r.hwb, r.cmyk, r.xyz, r.lab, r.lch, r.hex, r.keyword, r.ansi16, r.ansi256, r.hcg, r.apple, r.gray;

        function i() {
          for (var e = {}, t = Object.keys(r), a = t.length, n = 0; n < a; n++) e[t[n]] = {
            distance: -1,
            parent: null
          };
          return e
        }

        function s(e) {
          var t = i(),
            a = [e];
          t[e].distance = 0;
          while (a.length)
            for (var n = a.pop(), s = Object.keys(r[n]), o = s.length, d = 0; d < o; d++) {
              var l = s[d],
                u = t[l]; - 1 === u.distance && (u.distance = t[n].distance + 1, u.parent = n, a.unshift(l))
            }
          return t
        }

        function o(e, t) {
          return function (a) {
            return t(e(a))
          }
        }

        function d(e, t) {
          var a = [t[e].parent, e],
            n = r[t[e].parent][e],
            i = t[e].parent;
          while (t[i].parent) a.unshift(t[i].parent), n = o(r[t[i].parent][i], n), i = t[i].parent;
          return n.conversion = a, n
        }
        var l = function (e) {
            for (var t = s(e), a = {}, n = Object.keys(t), r = n.length, i = 0; i < r; i++) {
              var o = n[i],
                l = t[o];
              null !== l.parent && (a[o] = d(o, t))
            }
            return a
          },
          u = {},
          c = Object.keys(r);

        function _(e) {
          var t = function (t) {
            return void 0 === t || null === t ? t : (arguments.length > 1 && (t = Array.prototype.slice.call(arguments)), e(t))
          };
          return "conversion" in e && (t.conversion = e.conversion), t
        }

        function m(e) {
          var t = function (t) {
            if (void 0 === t || null === t) return t;
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
            var a = e(t);
            if ("object" === typeof a)
              for (var n = a.length, r = 0; r < n; r++) a[r] = Math.round(a[r]);
            return a
          };
          return "conversion" in e && (t.conversion = e.conversion), t
        }
        c.forEach((function (e) {
          u[e] = {}, Object.defineProperty(u[e], "channels", {
            value: r[e].channels
          }), Object.defineProperty(u[e], "labels", {
            value: r[e].labels
          });
          var t = l(e),
            a = Object.keys(t);
          a.forEach((function (a) {
            var n = t[a];
            u[e][a] = m(n), u[e][a].raw = _(n)
          }))
        }));
        var h = u,
          f = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
          },
          p = {
            getRgba: y,
            getHsla: M,
            getRgb: v,
            getHsl: L,
            getHwb: g,
            getAlpha: b,
            hexString: k,
            rgbString: Y,
            rgbaString: D,
            percentString: w,
            percentaString: x,
            hslString: T,
            hslaString: S,
            hwbString: H,
            keyword: j
          };

        function y(e) {
          if (e) {
            var t = /^#([a-fA-F0-9]{3,4})$/i,
              a = /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i,
              n = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
              r = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
              i = /(\w+)/,
              s = [0, 0, 0],
              o = 1,
              d = e.match(t),
              l = "";
            if (d) {
              d = d[1], l = d[3];
              for (var u = 0; u < s.length; u++) s[u] = parseInt(d[u] + d[u], 16);
              l && (o = Math.round(parseInt(l + l, 16) / 255 * 100) / 100)
            } else if (d = e.match(a)) {
              l = d[2], d = d[1];
              for (u = 0; u < s.length; u++) s[u] = parseInt(d.slice(2 * u, 2 * u + 2), 16);
              l && (o = Math.round(parseInt(l, 16) / 255 * 100) / 100)
            } else if (d = e.match(n)) {
              for (u = 0; u < s.length; u++) s[u] = parseInt(d[u + 1]);
              o = parseFloat(d[4])
            } else if (d = e.match(r)) {
              for (u = 0; u < s.length; u++) s[u] = Math.round(2.55 * parseFloat(d[u + 1]));
              o = parseFloat(d[4])
            } else if (d = e.match(i)) {
              if ("transparent" == d[1]) return [0, 0, 0, 0];
              if (s = f[d[1]], !s) return
            }
            for (u = 0; u < s.length; u++) s[u] = P(s[u], 0, 255);
            return o = o || 0 == o ? P(o, 0, 1) : 1, s[3] = o, s
          }
        }

        function M(e) {
          if (e) {
            var t = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
              a = e.match(t);
            if (a) {
              var n = parseFloat(a[4]),
                r = P(parseInt(a[1]), 0, 360),
                i = P(parseFloat(a[2]), 0, 100),
                s = P(parseFloat(a[3]), 0, 100),
                o = P(isNaN(n) ? 1 : n, 0, 1);
              return [r, i, s, o]
            }
          }
        }

        function g(e) {
          if (e) {
            var t = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
              a = e.match(t);
            if (a) {
              var n = parseFloat(a[4]),
                r = P(parseInt(a[1]), 0, 360),
                i = P(parseFloat(a[2]), 0, 100),
                s = P(parseFloat(a[3]), 0, 100),
                o = P(isNaN(n) ? 1 : n, 0, 1);
              return [r, i, s, o]
            }
          }
        }

        function v(e) {
          var t = y(e);
          return t && t.slice(0, 3)
        }

        function L(e) {
          var t = M(e);
          return t && t.slice(0, 3)
        }

        function b(e) {
          var t = y(e);
          return t || (t = M(e)) || (t = g(e)) ? t[3] : void 0
        }

        function k(e, t) {
          t = void 0 !== t && 3 === e.length ? t : e[3];
          return "#" + O(e[0]) + O(e[1]) + O(e[2]) + (t >= 0 && t < 1 ? O(Math.round(255 * t)) : "")
        }

        function Y(e, t) {
          return t < 1 || e[3] && e[3] < 1 ? D(e, t) : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
        }

        function D(e, t) {
          return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
        }

        function w(e, t) {
          if (t < 1 || e[3] && e[3] < 1) return x(e, t);
          var a = Math.round(e[0] / 255 * 100),
            n = Math.round(e[1] / 255 * 100),
            r = Math.round(e[2] / 255 * 100);
          return "rgb(" + a + "%, " + n + "%, " + r + "%)"
        }

        function x(e, t) {
          var a = Math.round(e[0] / 255 * 100),
            n = Math.round(e[1] / 255 * 100),
            r = Math.round(e[2] / 255 * 100);
          return "rgba(" + a + "%, " + n + "%, " + r + "%, " + (t || e[3] || 1) + ")"
        }

        function T(e, t) {
          return t < 1 || e[3] && e[3] < 1 ? S(e, t) : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
        }

        function S(e, t) {
          return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
        }

        function H(e, t) {
          return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")"
        }

        function j(e) {
          return A[e.slice(0, 3)]
        }

        function P(e, t, a) {
          return Math.min(Math.max(t, e), a)
        }

        function O(e) {
          var t = e.toString(16).toUpperCase();
          return t.length < 2 ? "0" + t : t
        }
        var A = {};
        for (var C in f) A[f[C]] = C;
        var F = function (e) {
          return e instanceof F ? e : this instanceof F ? (this.valid = !1, this.values = {
            rgb: [0, 0, 0],
            hsl: [0, 0, 0],
            hsv: [0, 0, 0],
            hwb: [0, 0, 0],
            cmyk: [0, 0, 0, 0],
            alpha: 1
          }, void("string" === typeof e ? (t = p.getRgba(e), t ? this.setValues("rgb", t) : (t = p.getHsla(e)) ? this.setValues("hsl", t) : (t = p.getHwb(e)) && this.setValues("hwb", t)) : "object" === typeof e && (t = e, void 0 !== t.r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new F(e);
          var t
        };
        F.prototype = {
          isValid: function () {
            return this.valid
          },
          rgb: function () {
            return this.setSpace("rgb", arguments)
          },
          hsl: function () {
            return this.setSpace("hsl", arguments)
          },
          hsv: function () {
            return this.setSpace("hsv", arguments)
          },
          hwb: function () {
            return this.setSpace("hwb", arguments)
          },
          cmyk: function () {
            return this.setSpace("cmyk", arguments)
          },
          rgbArray: function () {
            return this.values.rgb
          },
          hslArray: function () {
            return this.values.hsl
          },
          hsvArray: function () {
            return this.values.hsv
          },
          hwbArray: function () {
            var e = this.values;
            return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb
          },
          cmykArray: function () {
            return this.values.cmyk
          },
          rgbaArray: function () {
            var e = this.values;
            return e.rgb.concat([e.alpha])
          },
          hslaArray: function () {
            var e = this.values;
            return e.hsl.concat([e.alpha])
          },
          alpha: function (e) {
            return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this)
          },
          red: function (e) {
            return this.setChannel("rgb", 0, e)
          },
          green: function (e) {
            return this.setChannel("rgb", 1, e)
          },
          blue: function (e) {
            return this.setChannel("rgb", 2, e)
          },
          hue: function (e) {
            return e && (e %= 360, e = e < 0 ? 360 + e : e), this.setChannel("hsl", 0, e)
          },
          saturation: function (e) {
            return this.setChannel("hsl", 1, e)
          },
          lightness: function (e) {
            return this.setChannel("hsl", 2, e)
          },
          saturationv: function (e) {
            return this.setChannel("hsv", 1, e)
          },
          whiteness: function (e) {
            return this.setChannel("hwb", 1, e)
          },
          blackness: function (e) {
            return this.setChannel("hwb", 2, e)
          },
          value: function (e) {
            return this.setChannel("hsv", 2, e)
          },
          cyan: function (e) {
            return this.setChannel("cmyk", 0, e)
          },
          magenta: function (e) {
            return this.setChannel("cmyk", 1, e)
          },
          yellow: function (e) {
            return this.setChannel("cmyk", 2, e)
          },
          black: function (e) {
            return this.setChannel("cmyk", 3, e)
          },
          hexString: function () {
            return p.hexString(this.values.rgb)
          },
          rgbString: function () {
            return p.rgbString(this.values.rgb, this.values.alpha)
          },
          rgbaString: function () {
            return p.rgbaString(this.values.rgb, this.values.alpha)
          },
          percentString: function () {
            return p.percentString(this.values.rgb, this.values.alpha)
          },
          hslString: function () {
            return p.hslString(this.values.hsl, this.values.alpha)
          },
          hslaString: function () {
            return p.hslaString(this.values.hsl, this.values.alpha)
          },
          hwbString: function () {
            return p.hwbString(this.values.hwb, this.values.alpha)
          },
          keyword: function () {
            return p.keyword(this.values.rgb, this.values.alpha)
          },
          rgbNumber: function () {
            var e = this.values.rgb;
            return e[0] << 16 | e[1] << 8 | e[2]
          },
          luminosity: function () {
            for (var e = this.values.rgb, t = [], a = 0; a < e.length; a++) {
              var n = e[a] / 255;
              t[a] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
            }
            return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
          },
          contrast: function (e) {
            var t = this.luminosity(),
              a = e.luminosity();
            return t > a ? (t + .05) / (a + .05) : (a + .05) / (t + .05)
          },
          level: function (e) {
            var t = this.contrast(e);
            return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : ""
          },
          dark: function () {
            var e = this.values.rgb,
              t = (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3;
            return t < 128
          },
          light: function () {
            return !this.dark()
          },
          negate: function () {
            for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
            return this.setValues("rgb", e), this
          },
          lighten: function (e) {
            var t = this.values.hsl;
            return t[2] += t[2] * e, this.setValues("hsl", t), this
          },
          darken: function (e) {
            var t = this.values.hsl;
            return t[2] -= t[2] * e, this.setValues("hsl", t), this
          },
          saturate: function (e) {
            var t = this.values.hsl;
            return t[1] += t[1] * e, this.setValues("hsl", t), this
          },
          desaturate: function (e) {
            var t = this.values.hsl;
            return t[1] -= t[1] * e, this.setValues("hsl", t), this
          },
          whiten: function (e) {
            var t = this.values.hwb;
            return t[1] += t[1] * e, this.setValues("hwb", t), this
          },
          blacken: function (e) {
            var t = this.values.hwb;
            return t[2] += t[2] * e, this.setValues("hwb", t), this
          },
          greyscale: function () {
            var e = this.values.rgb,
              t = .3 * e[0] + .59 * e[1] + .11 * e[2];
            return this.setValues("rgb", [t, t, t]), this
          },
          clearer: function (e) {
            var t = this.values.alpha;
            return this.setValues("alpha", t - t * e), this
          },
          opaquer: function (e) {
            var t = this.values.alpha;
            return this.setValues("alpha", t + t * e), this
          },
          rotate: function (e) {
            var t = this.values.hsl,
              a = (t[0] + e) % 360;
            return t[0] = a < 0 ? 360 + a : a, this.setValues("hsl", t), this
          },
          mix: function (e, t) {
            var a = this,
              n = e,
              r = void 0 === t ? .5 : t,
              i = 2 * r - 1,
              s = a.alpha() - n.alpha(),
              o = ((i * s === -1 ? i : (i + s) / (1 + i * s)) + 1) / 2,
              d = 1 - o;
            return this.rgb(o * a.red() + d * n.red(), o * a.green() + d * n.green(), o * a.blue() + d * n.blue()).alpha(a.alpha() * r + n.alpha() * (1 - r))
          },
          toJSON: function () {
            return this.rgb()
          },
          clone: function () {
            var e, t, a = new F,
              n = this.values,
              r = a.values;
            for (var i in n) n.hasOwnProperty(i) && (e = n[i], t = {}.toString.call(e), "[object Array]" === t ? r[i] = e.slice(0) : "[object Number]" === t ? r[i] = e : console.error("unexpected color value:", e));
            return a
          }
        }, F.prototype.spaces = {
          rgb: ["red", "green", "blue"],
          hsl: ["hue", "saturation", "lightness"],
          hsv: ["hue", "saturation", "value"],
          hwb: ["hue", "whiteness", "blackness"],
          cmyk: ["cyan", "magenta", "yellow", "black"]
        }, F.prototype.maxes = {
          rgb: [255, 255, 255],
          hsl: [360, 100, 100],
          hsv: [360, 100, 100],
          hwb: [360, 100, 100],
          cmyk: [100, 100, 100, 100]
        }, F.prototype.getValues = function (e) {
          for (var t = this.values, a = {}, n = 0; n < e.length; n++) a[e.charAt(n)] = t[e][n];
          return 1 !== t.alpha && (a.a = t.alpha), a
        }, F.prototype.setValues = function (e, t) {
          var a, n, r = this.values,
            i = this.spaces,
            s = this.maxes,
            o = 1;
          if (this.valid = !0, "alpha" === e) o = t;
          else if (t.length) r[e] = t.slice(0, e.length), o = t[e.length];
          else if (void 0 !== t[e.charAt(0)]) {
            for (a = 0; a < e.length; a++) r[e][a] = t[e.charAt(a)];
            o = t.a
          } else if (void 0 !== t[i[e][0]]) {
            var d = i[e];
            for (a = 0; a < e.length; a++) r[e][a] = t[d[a]];
            o = t.alpha
          }
          if (r.alpha = Math.max(0, Math.min(1, void 0 === o ? r.alpha : o)), "alpha" === e) return !1;
          for (a = 0; a < e.length; a++) n = Math.max(0, Math.min(s[e][a], r[e][a])), r[e][a] = Math.round(n);
          for (var l in i) l !== e && (r[l] = h[e][l](r[e]));
          return !0
        }, F.prototype.setSpace = function (e, t) {
          var a = t[0];
          return void 0 === a ? this.getValues(e) : ("number" === typeof a && (a = Array.prototype.slice.call(t)), this.setValues(e, a), this)
        }, F.prototype.setChannel = function (e, t, a) {
          var n = this.values[e];
          return void 0 === a ? n[t] : (a === n[t] || (n[t] = a, this.setValues(e, n)), this)
        }, "undefined" !== typeof window && (window.Color = F);
        var E = F,
          W = {
            noop: function () {},
            uid: function () {
              var e = 0;
              return function () {
                return e++
              }
            }(),
            isNullOrUndef: function (e) {
              return null === e || "undefined" === typeof e
            },
            isArray: function (e) {
              if (Array.isArray && Array.isArray(e)) return !0;
              var t = Object.prototype.toString.call(e);
              return "[object" === t.substr(0, 7) && "Array]" === t.substr(-6)
            },
            isObject: function (e) {
              return null !== e && "[object Object]" === Object.prototype.toString.call(e)
            },
            isFinite: function (e) {
              return ("number" === typeof e || e instanceof Number) && isFinite(e)
            },
            valueOrDefault: function (e, t) {
              return "undefined" === typeof e ? t : e
            },
            valueAtIndexOrDefault: function (e, t, a) {
              return W.valueOrDefault(W.isArray(e) ? e[t] : e, a)
            },
            callback: function (e, t, a) {
              if (e && "function" === typeof e.call) return e.apply(a, t)
            },
            each: function (e, t, a, n) {
              var r, i, s;
              if (W.isArray(e))
                if (i = e.length, n)
                  for (r = i - 1; r >= 0; r--) t.call(a, e[r], r);
                else
                  for (r = 0; r < i; r++) t.call(a, e[r], r);
              else if (W.isObject(e))
                for (s = Object.keys(e), i = s.length, r = 0; r < i; r++) t.call(a, e[s[r]], s[r])
            },
            arrayEquals: function (e, t) {
              var a, n, r, i;
              if (!e || !t || e.length !== t.length) return !1;
              for (a = 0, n = e.length; a < n; ++a)
                if (r = e[a], i = t[a], r instanceof Array && i instanceof Array) {
                  if (!W.arrayEquals(r, i)) return !1
                } else if (r !== i) return !1;
              return !0
            },
            clone: function (e) {
              if (W.isArray(e)) return e.map(W.clone);
              if (W.isObject(e)) {
                for (var t = {}, a = Object.keys(e), n = a.length, r = 0; r < n; ++r) t[a[r]] = W.clone(e[a[r]]);
                return t
              }
              return e
            },
            _merger: function (e, t, a, n) {
              var r = t[e],
                i = a[e];
              W.isObject(r) && W.isObject(i) ? W.merge(r, i, n) : t[e] = W.clone(i)
            },
            _mergerIf: function (e, t, a) {
              var n = t[e],
                r = a[e];
              W.isObject(n) && W.isObject(r) ? W.mergeIf(n, r) : t.hasOwnProperty(e) || (t[e] = W.clone(r))
            },
            merge: function (e, t, a) {
              var n, r, i, s, o, d = W.isArray(t) ? t : [t],
                l = d.length;
              if (!W.isObject(e)) return e;
              for (a = a || {}, n = a.merger || W._merger, r = 0; r < l; ++r)
                if (t = d[r], W.isObject(t))
                  for (i = Object.keys(t), o = 0, s = i.length; o < s; ++o) n(i[o], e, t, a);
              return e
            },
            mergeIf: function (e, t) {
              return W.merge(e, t, {
                merger: W._mergerIf
              })
            },
            extend: Object.assign || function (e) {
              return W.merge(e, [].slice.call(arguments, 1), {
                merger: function (e, t, a) {
                  t[e] = a[e]
                }
              })
            },
            inherits: function (e) {
              var t = this,
                a = e && e.hasOwnProperty("constructor") ? e.constructor : function () {
                  return t.apply(this, arguments)
                },
                n = function () {
                  this.constructor = a
                };
              return n.prototype = t.prototype, a.prototype = new n, a.extend = W.inherits, e && W.extend(a.prototype, e), a.__super__ = t.prototype, a
            },
            _deprecated: function (e, t, a, n) {
              void 0 !== t && console.warn(e + ': "' + a + '" is deprecated. Please use "' + n + '" instead')
            }
          },
          I = W;
        W.callCallback = W.callback, W.indexOf = function (e, t, a) {
          return Array.prototype.indexOf.call(e, t, a)
        }, W.getValueOrDefault = W.valueOrDefault, W.getValueAtIndexOrDefault = W.valueAtIndexOrDefault;
        var z = {
            linear: function (e) {
              return e
            },
            easeInQuad: function (e) {
              return e * e
            },
            easeOutQuad: function (e) {
              return -e * (e - 2)
            },
            easeInOutQuad: function (e) {
              return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
            },
            easeInCubic: function (e) {
              return e * e * e
            },
            easeOutCubic: function (e) {
              return (e -= 1) * e * e + 1
            },
            easeInOutCubic: function (e) {
              return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
            },
            easeInQuart: function (e) {
              return e * e * e * e
            },
            easeOutQuart: function (e) {
              return -((e -= 1) * e * e * e - 1)
            },
            easeInOutQuart: function (e) {
              return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
            },
            easeInQuint: function (e) {
              return e * e * e * e * e
            },
            easeOutQuint: function (e) {
              return (e -= 1) * e * e * e * e + 1
            },
            easeInOutQuint: function (e) {
              return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
            },
            easeInSine: function (e) {
              return 1 - Math.cos(e * (Math.PI / 2))
            },
            easeOutSine: function (e) {
              return Math.sin(e * (Math.PI / 2))
            },
            easeInOutSine: function (e) {
              return -.5 * (Math.cos(Math.PI * e) - 1)
            },
            easeInExpo: function (e) {
              return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
            },
            easeOutExpo: function (e) {
              return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
            },
            easeInOutExpo: function (e) {
              return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))
            },
            easeInCirc: function (e) {
              return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)
            },
            easeOutCirc: function (e) {
              return Math.sqrt(1 - (e -= 1) * e)
            },
            easeInOutCirc: function (e) {
              return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            },
            easeInElastic: function (e) {
              var t = 1.70158,
                a = 0,
                n = 1;
              return 0 === e ? 0 : 1 === e ? 1 : (a || (a = .3), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a))
            },
            easeOutElastic: function (e) {
              var t = 1.70158,
                a = 0,
                n = 1;
              return 0 === e ? 0 : 1 === e ? 1 : (a || (a = .3), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / a) + 1)
            },
            easeInOutElastic: function (e) {
              var t = 1.70158,
                a = 0,
                n = 1;
              return 0 === e ? 0 : 2 === (e /= .5) ? 1 : (a || (a = .45), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a) * -.5 : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a) * .5 + 1)
            },
            easeInBack: function (e) {
              var t = 1.70158;
              return e * e * ((t + 1) * e - t)
            },
            easeOutBack: function (e) {
              var t = 1.70158;
              return (e -= 1) * e * ((t + 1) * e + t) + 1
            },
            easeInOutBack: function (e) {
              var t = 1.70158;
              return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
            },
            easeInBounce: function (e) {
              return 1 - z.easeOutBounce(1 - e)
            },
            easeOutBounce: function (e) {
              return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            },
            easeInOutBounce: function (e) {
              return e < .5 ? .5 * z.easeInBounce(2 * e) : .5 * z.easeOutBounce(2 * e - 1) + .5
            }
          },
          N = {
            effects: z
          };
        I.easingEffects = z;
        var R = Math.PI,
          V = R / 180,
          B = 2 * R,
          J = R / 2,
          U = R / 4,
          G = 2 * R / 3,
          q = {
            clear: function (e) {
              e.ctx.clearRect(0, 0, e.width, e.height)
            },
            roundedRect: function (e, t, a, n, r, i) {
              if (i) {
                var s = Math.min(i, r / 2, n / 2),
                  o = t + s,
                  d = a + s,
                  l = t + n - s,
                  u = a + r - s;
                e.moveTo(t, d), o < l && d < u ? (e.arc(o, d, s, -R, -J), e.arc(l, d, s, -J, 0), e.arc(l, u, s, 0, J), e.arc(o, u, s, J, R)) : o < l ? (e.moveTo(o, a), e.arc(l, d, s, -J, J), e.arc(o, d, s, J, R + J)) : d < u ? (e.arc(o, d, s, -R, 0), e.arc(o, u, s, 0, R)) : e.arc(o, d, s, -R, R), e.closePath(), e.moveTo(t, a)
              } else e.rect(t, a, n, r)
            },
            drawPoint: function (e, t, a, n, r, i) {
              var s, o, d, l, u, c = (i || 0) * V;
              if (t && "object" === typeof t && (s = t.toString(), "[object HTMLImageElement]" === s || "[object HTMLCanvasElement]" === s)) return e.save(), e.translate(n, r), e.rotate(c), e.drawImage(t, -t.width / 2, -t.height / 2, t.width, t.height), void e.restore();
              if (!(isNaN(a) || a <= 0)) {
                switch (e.beginPath(), t) {
                  default:
                    e.arc(n, r, a, 0, B), e.closePath();
                    break;
                  case "triangle":
                    e.moveTo(n + Math.sin(c) * a, r - Math.cos(c) * a), c += G, e.lineTo(n + Math.sin(c) * a, r - Math.cos(c) * a), c += G, e.lineTo(n + Math.sin(c) * a, r - Math.cos(c) * a), e.closePath();
                    break;
                  case "rectRounded":
                    u = .516 * a, l = a - u, o = Math.cos(c + U) * l, d = Math.sin(c + U) * l, e.arc(n - o, r - d, u, c - R, c - J), e.arc(n + d, r - o, u, c - J, c), e.arc(n + o, r + d, u, c, c + J), e.arc(n - d, r + o, u, c + J, c + R), e.closePath();
                    break;
                  case "rect":
                    if (!i) {
                      l = Math.SQRT1_2 * a, e.rect(n - l, r - l, 2 * l, 2 * l);
                      break
                    }
                    c += U;
                  case "rectRot":
                    o = Math.cos(c) * a, d = Math.sin(c) * a, e.moveTo(n - o, r - d), e.lineTo(n + d, r - o), e.lineTo(n + o, r + d), e.lineTo(n - d, r + o), e.closePath();
                    break;
                  case "crossRot":
                    c += U;
                  case "cross":
                    o = Math.cos(c) * a, d = Math.sin(c) * a, e.moveTo(n - o, r - d), e.lineTo(n + o, r + d), e.moveTo(n + d, r - o), e.lineTo(n - d, r + o);
                    break;
                  case "star":
                    o = Math.cos(c) * a, d = Math.sin(c) * a, e.moveTo(n - o, r - d), e.lineTo(n + o, r + d), e.moveTo(n + d, r - o), e.lineTo(n - d, r + o), c += U, o = Math.cos(c) * a, d = Math.sin(c) * a, e.moveTo(n - o, r - d), e.lineTo(n + o, r + d), e.moveTo(n + d, r - o), e.lineTo(n - d, r + o);
                    break;
                  case "line":
                    o = Math.cos(c) * a, d = Math.sin(c) * a, e.moveTo(n - o, r - d), e.lineTo(n + o, r + d);
                    break;
                  case "dash":
                    e.moveTo(n, r), e.lineTo(n + Math.cos(c) * a, r + Math.sin(c) * a);
                    break
                }
                e.fill(), e.stroke()
              }
            },
            _isPointInArea: function (e, t) {
              var a = 1e-6;
              return e.x > t.left - a && e.x < t.right + a && e.y > t.top - a && e.y < t.bottom + a
            },
            clipArea: function (e, t) {
              e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip()
            },
            unclipArea: function (e) {
              e.restore()
            },
            lineTo: function (e, t, a, n) {
              var r = a.steppedLine;
              if (r) {
                if ("middle" === r) {
                  var i = (t.x + a.x) / 2;
                  e.lineTo(i, n ? a.y : t.y), e.lineTo(i, n ? t.y : a.y)
                } else "after" === r && !n || "after" !== r && n ? e.lineTo(t.x, a.y) : e.lineTo(a.x, t.y);
                e.lineTo(a.x, a.y)
              } else a.tension ? e.bezierCurveTo(n ? t.controlPointPreviousX : t.controlPointNextX, n ? t.controlPointPreviousY : t.controlPointNextY, n ? a.controlPointNextX : a.controlPointPreviousX, n ? a.controlPointNextY : a.controlPointPreviousY, a.x, a.y) : e.lineTo(a.x, a.y)
            }
          },
          $ = q;
        I.clear = q.clear, I.drawRoundedRectangle = function (e) {
          e.beginPath(), q.roundedRect.apply(q, arguments)
        };
        var K = {
          _set: function (e, t) {
            return I.merge(this[e] || (this[e] = {}), t)
          }
        };
        K._set("global", {
          defaultColor: "rgba(0,0,0,0.1)",
          defaultFontColor: "#666",
          defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          defaultFontSize: 12,
          defaultFontStyle: "normal",
          defaultLineHeight: 1.2,
          showLines: !0
        });
        var Q = K,
          Z = I.valueOrDefault;

        function X(e) {
          return !e || I.isNullOrUndef(e.size) || I.isNullOrUndef(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family
        }
        var ee = {
            toLineHeight: function (e, t) {
              var a = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
              if (!a || "normal" === a[1]) return 1.2 * t;
              switch (e = +a[2], a[3]) {
                case "px":
                  return e;
                case "%":
                  e /= 100;
                  break
              }
              return t * e
            },
            toPadding: function (e) {
              var t, a, n, r;
              return I.isObject(e) ? (t = +e.top || 0, a = +e.right || 0, n = +e.bottom || 0, r = +e.left || 0) : t = a = n = r = +e || 0, {
                top: t,
                right: a,
                bottom: n,
                left: r,
                height: t + n,
                width: r + a
              }
            },
            _parseFont: function (e) {
              var t = Q.global,
                a = Z(e.fontSize, t.defaultFontSize),
                n = {
                  family: Z(e.fontFamily, t.defaultFontFamily),
                  lineHeight: I.options.toLineHeight(Z(e.lineHeight, t.defaultLineHeight), a),
                  size: a,
                  style: Z(e.fontStyle, t.defaultFontStyle),
                  weight: null,
                  string: ""
                };
              return n.string = X(n), n
            },
            resolve: function (e, t, a, n) {
              var r, i, s, o = !0;
              for (r = 0, i = e.length; r < i; ++r)
                if (s = e[r], void 0 !== s && (void 0 !== t && "function" === typeof s && (s = s(t), o = !1), void 0 !== a && I.isArray(s) && (s = s[a], o = !1), void 0 !== s)) return n && !o && (n.cacheable = !1), s
            }
          },
          te = {
            _factorize: function (e) {
              var t, a = [],
                n = Math.sqrt(e);
              for (t = 1; t < n; t++) e % t === 0 && (a.push(t), a.push(e / t));
              return n === (0 | n) && a.push(n), a.sort((function (e, t) {
                return e - t
              })).pop(), a
            },
            log10: Math.log10 || function (e) {
              var t = Math.log(e) * Math.LOG10E,
                a = Math.round(t),
                n = e === Math.pow(10, a);
              return n ? a : t
            }
          },
          ae = te;
        I.log10 = te.log10;
        var ne = function (e, t) {
            return {
              x: function (a) {
                return e + e + t - a
              },
              setWidth: function (e) {
                t = e
              },
              textAlign: function (e) {
                return "center" === e ? e : "right" === e ? "left" : "right"
              },
              xPlus: function (e, t) {
                return e - t
              },
              leftForLtr: function (e, t) {
                return e - t
              }
            }
          },
          re = function () {
            return {
              x: function (e) {
                return e
              },
              setWidth: function (e) {},
              textAlign: function (e) {
                return e
              },
              xPlus: function (e, t) {
                return e + t
              },
              leftForLtr: function (e, t) {
                return e
              }
            }
          },
          ie = function (e, t, a) {
            return e ? ne(t, a) : re()
          },
          se = function (e, t) {
            var a, n;
            "ltr" !== t && "rtl" !== t || (a = e.canvas.style, n = [a.getPropertyValue("direction"), a.getPropertyPriority("direction")], a.setProperty("direction", t, "important"), e.prevTextDirection = n)
          },
          oe = function (e) {
            var t = e.prevTextDirection;
            void 0 !== t && (delete e.prevTextDirection, e.canvas.style.setProperty("direction", t[0], t[1]))
          },
          de = {
            getRtlAdapter: ie,
            overrideTextDirection: se,
            restoreTextDirection: oe
          },
          le = I,
          ue = N,
          ce = $,
          _e = ee,
          me = ae,
          he = de;

        function fe(e, t, a, n) {
          var r, i, s, o, d, l, u, c, _, m = Object.keys(a);
          for (r = 0, i = m.length; r < i; ++r)
            if (s = m[r], l = a[s], t.hasOwnProperty(s) || (t[s] = l), o = t[s], o !== l && "_" !== s[0]) {
              if (e.hasOwnProperty(s) || (e[s] = o), d = e[s], u = typeof l, u === typeof d)
                if ("string" === u) {
                  if (c = E(d), c.valid && (_ = E(l), _.valid)) {
                    t[s] = _.mix(c, n).rgbString();
                    continue
                  }
                } else if (le.isFinite(d) && le.isFinite(l)) {
                t[s] = d + (l - d) * n;
                continue
              }
              t[s] = l
            }
        }
        le.easing = ue, le.canvas = ce, le.options = _e, le.math = me, le.rtl = he;
        var pe = function (e) {
          le.extend(this, e), this.initialize.apply(this, arguments)
        };
        le.extend(pe.prototype, {
          _type: void 0,
          initialize: function () {
            this.hidden = !1
          },
          pivot: function () {
            var e = this;
            return e._view || (e._view = le.extend({}, e._model)), e._start = {}, e
          },
          transition: function (e) {
            var t = this,
              a = t._model,
              n = t._start,
              r = t._view;
            return a && 1 !== e ? (r || (r = t._view = {}), n || (n = t._start = {}), fe(n, r, a, e), t) : (t._view = le.extend({}, a), t._start = null, t)
          },
          tooltipPosition: function () {
            return {
              x: this._model.x,
              y: this._model.y
            }
          },
          hasValue: function () {
            return le.isNumber(this._model.x) && le.isNumber(this._model.y)
          }
        }), pe.extend = le.inherits;
        var ye = pe,
          Me = ye.extend({
            chart: null,
            currentStep: 0,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null
          }),
          ge = Me;
        Object.defineProperty(Me.prototype, "animationObject", {
          get: function () {
            return this
          }
        }), Object.defineProperty(Me.prototype, "chartInstance", {
          get: function () {
            return this.chart
          },
          set: function (e) {
            this.chart = e
          }
        }), Q._set("global", {
          animation: {
            duration: 1e3,
            easing: "easeOutQuart",
            onProgress: le.noop,
            onComplete: le.noop
          }
        });
        var ve = {
            animations: [],
            request: null,
            addAnimation: function (e, t, a, n) {
              var r, i, s = this.animations;
              for (t.chart = e, t.startTime = Date.now(), t.duration = a, n || (e.animating = !0), r = 0, i = s.length; r < i; ++r)
                if (s[r].chart === e) return void(s[r] = t);
              s.push(t), 1 === s.length && this.requestAnimationFrame()
            },
            cancelAnimation: function (e) {
              var t = le.findIndex(this.animations, (function (t) {
                return t.chart === e
              })); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1)
            },
            requestAnimationFrame: function () {
              var e = this;
              null === e.request && (e.request = le.requestAnimFrame.call(window, (function () {
                e.request = null, e.startDigest()
              })))
            },
            startDigest: function () {
              var e = this;
              e.advance(), e.animations.length > 0 && e.requestAnimationFrame()
            },
            advance: function () {
              var e, t, a, n, r = this.animations,
                i = 0;
              while (i < r.length) e = r[i], t = e.chart, a = e.numSteps, n = Math.floor((Date.now() - e.startTime) / e.duration * a) + 1, e.currentStep = Math.min(n, a), le.callback(e.render, [t, e], t), le.callback(e.onAnimationProgress, [e], t), e.currentStep >= a ? (le.callback(e.onAnimationComplete, [e], t), t.animating = !1, r.splice(i, 1)) : ++i
            }
          },
          Le = le.options.resolve,
          be = ["push", "pop", "shift", "splice", "unshift"];

        function ke(e, t) {
          e._chartjs ? e._chartjs.listeners.push(t) : (Object.defineProperty(e, "_chartjs", {
            configurable: !0,
            enumerable: !1,
            value: {
              listeners: [t]
            }
          }), be.forEach((function (t) {
            var a = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
              n = e[t];
            Object.defineProperty(e, t, {
              configurable: !0,
              enumerable: !1,
              value: function () {
                var t = Array.prototype.slice.call(arguments),
                  r = n.apply(this, t);
                return le.each(e._chartjs.listeners, (function (e) {
                  "function" === typeof e[a] && e[a].apply(e, t)
                })), r
              }
            })
          })))
        }

        function Ye(e, t) {
          var a = e._chartjs;
          if (a) {
            var n = a.listeners,
              r = n.indexOf(t); - 1 !== r && n.splice(r, 1), n.length > 0 || (be.forEach((function (t) {
              delete e[t]
            })), delete e._chartjs)
          }
        }
        var De = function (e, t) {
          this.initialize(e, t)
        };
        le.extend(De.prototype, {
          datasetElementType: null,
          dataElementType: null,
          _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"],
          _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"],
          initialize: function (e, t) {
            var a = this;
            a.chart = e, a.index = t, a.linkScales(), a.addElements(), a._type = a.getMeta().type
          },
          updateIndex: function (e) {
            this.index = e
          },
          linkScales: function () {
            var e = this,
              t = e.getMeta(),
              a = e.chart,
              n = a.scales,
              r = e.getDataset(),
              i = a.options.scales;
            null !== t.xAxisID && t.xAxisID in n && !r.xAxisID || (t.xAxisID = r.xAxisID || i.xAxes[0].id), null !== t.yAxisID && t.yAxisID in n && !r.yAxisID || (t.yAxisID = r.yAxisID || i.yAxes[0].id)
          },
          getDataset: function () {
            return this.chart.data.datasets[this.index]
          },
          getMeta: function () {
            return this.chart.getDatasetMeta(this.index)
          },
          getScaleForId: function (e) {
            return this.chart.scales[e]
          },
          _getValueScaleId: function () {
            return this.getMeta().yAxisID
          },
          _getIndexScaleId: function () {
            return this.getMeta().xAxisID
          },
          _getValueScale: function () {
            return this.getScaleForId(this._getValueScaleId())
          },
          _getIndexScale: function () {
            return this.getScaleForId(this._getIndexScaleId())
          },
          reset: function () {
            this._update(!0)
          },
          destroy: function () {
            this._data && Ye(this._data, this)
          },
          createMetaDataset: function () {
            var e = this,
              t = e.datasetElementType;
            return t && new t({
              _chart: e.chart,
              _datasetIndex: e.index
            })
          },
          createMetaData: function (e) {
            var t = this,
              a = t.dataElementType;
            return a && new a({
              _chart: t.chart,
              _datasetIndex: t.index,
              _index: e
            })
          },
          addElements: function () {
            var e, t, a = this,
              n = a.getMeta(),
              r = a.getDataset().data || [],
              i = n.data;
            for (e = 0, t = r.length; e < t; ++e) i[e] = i[e] || a.createMetaData(e);
            n.dataset = n.dataset || a.createMetaDataset()
          },
          addElementAndReset: function (e) {
            var t = this.createMetaData(e);
            this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0)
          },
          buildOrUpdateElements: function () {
            var e = this,
              t = e.getDataset(),
              a = t.data || (t.data = []);
            e._data !== a && (e._data && Ye(e._data, e), a && Object.isExtensible(a) && ke(a, e), e._data = a), e.resyncElements()
          },
          _configure: function () {
            var e = this;
            e._config = le.merge({}, [e.chart.options.datasets[e._type], e.getDataset()], {
              merger: function (e, t, a) {
                "_meta" !== e && "data" !== e && le._merger(e, t, a)
              }
            })
          },
          _update: function (e) {
            var t = this;
            t._configure(), t._cachedDataOpts = null, t.update(e)
          },
          update: le.noop,
          transition: function (e) {
            for (var t = this.getMeta(), a = t.data || [], n = a.length, r = 0; r < n; ++r) a[r].transition(e);
            t.dataset && t.dataset.transition(e)
          },
          draw: function () {
            var e = this.getMeta(),
              t = e.data || [],
              a = t.length,
              n = 0;
            for (e.dataset && e.dataset.draw(); n < a; ++n) t[n].draw()
          },
          getStyle: function (e) {
            var t, a = this,
              n = a.getMeta(),
              r = n.dataset;
            return a._configure(), r && void 0 === e ? t = a._resolveDatasetElementOptions(r || {}) : (e = e || 0, t = a._resolveDataElementOptions(n.data[e] || {}, e)), !1 !== t.fill && null !== t.fill || (t.backgroundColor = t.borderColor), t
          },
          _resolveDatasetElementOptions: function (e, t) {
            var a, n, r, i, s = this,
              o = s.chart,
              d = s._config,
              l = e.custom || {},
              u = o.options.elements[s.datasetElementType.prototype._type] || {},
              c = s._datasetElementOptions,
              _ = {},
              m = {
                chart: o,
                dataset: s.getDataset(),
                datasetIndex: s.index,
                hover: t
              };
            for (a = 0, n = c.length; a < n; ++a) r = c[a], i = t ? "hover" + r.charAt(0).toUpperCase() + r.slice(1) : r, _[r] = Le([l[i], d[i], u[i]], m);
            return _
          },
          _resolveDataElementOptions: function (e, t) {
            var a = this,
              n = e && e.custom,
              r = a._cachedDataOpts;
            if (r && !n) return r;
            var i, s, o, d, l = a.chart,
              u = a._config,
              c = l.options.elements[a.dataElementType.prototype._type] || {},
              _ = a._dataElementOptions,
              m = {},
              h = {
                chart: l,
                dataIndex: t,
                dataset: a.getDataset(),
                datasetIndex: a.index
              },
              f = {
                cacheable: !n
              };
            if (n = n || {}, le.isArray(_))
              for (s = 0, o = _.length; s < o; ++s) d = _[s], m[d] = Le([n[d], u[d], c[d]], h, t, f);
            else
              for (i = Object.keys(_), s = 0, o = i.length; s < o; ++s) d = i[s], m[d] = Le([n[d], u[_[d]], u[d], c[d]], h, t, f);
            return f.cacheable && (a._cachedDataOpts = Object.freeze(m)), m
          },
          removeHoverStyle: function (e) {
            le.merge(e._model, e.$previousStyle || {}), delete e.$previousStyle
          },
          setHoverStyle: function (e) {
            var t = this.chart.data.datasets[e._datasetIndex],
              a = e._index,
              n = e.custom || {},
              r = e._model,
              i = le.getHoverColor;
            e.$previousStyle = {
              backgroundColor: r.backgroundColor,
              borderColor: r.borderColor,
              borderWidth: r.borderWidth
            }, r.backgroundColor = Le([n.hoverBackgroundColor, t.hoverBackgroundColor, i(r.backgroundColor)], void 0, a), r.borderColor = Le([n.hoverBorderColor, t.hoverBorderColor, i(r.borderColor)], void 0, a), r.borderWidth = Le([n.hoverBorderWidth, t.hoverBorderWidth, r.borderWidth], void 0, a)
          },
          _removeDatasetHoverStyle: function () {
            var e = this.getMeta().dataset;
            e && this.removeHoverStyle(e)
          },
          _setDatasetHoverStyle: function () {
            var e, t, a, n, r, i, s = this.getMeta().dataset,
              o = {};
            if (s) {
              for (i = s._model, r = this._resolveDatasetElementOptions(s, !0), n = Object.keys(r), e = 0, t = n.length; e < t; ++e) a = n[e], o[a] = i[a], i[a] = r[a];
              s.$previousStyle = o
            }
          },
          resyncElements: function () {
            var e = this,
              t = e.getMeta(),
              a = e.getDataset().data,
              n = t.data.length,
              r = a.length;
            r < n ? t.data.splice(r, n - r) : r > n && e.insertElements(n, r - n)
          },
          insertElements: function (e, t) {
            for (var a = 0; a < t; ++a) this.addElementAndReset(e + a)
          },
          onDataPush: function () {
            var e = arguments.length;
            this.insertElements(this.getDataset().data.length - e, e)
          },
          onDataPop: function () {
            this.getMeta().data.pop()
          },
          onDataShift: function () {
            this.getMeta().data.shift()
          },
          onDataSplice: function (e, t) {
            this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2)
          },
          onDataUnshift: function () {
            this.insertElements(0, arguments.length)
          }
        }), De.extend = le.inherits;
        var we = De,
          xe = 2 * Math.PI;

        function Te(e, t) {
          var a = t.startAngle,
            n = t.endAngle,
            r = t.pixelMargin,
            i = r / t.outerRadius,
            s = t.x,
            o = t.y;
          e.beginPath(), e.arc(s, o, t.outerRadius, a - i, n + i), t.innerRadius > r ? (i = r / t.innerRadius, e.arc(s, o, t.innerRadius - r, n + i, a - i, !0)) : e.arc(s, o, r, n + Math.PI / 2, a - Math.PI / 2), e.closePath(), e.clip()
        }

        function Se(e, t, a, n) {
          var r, i = a.endAngle;
          for (n && (a.endAngle = a.startAngle + xe, Te(e, a), a.endAngle = i, a.endAngle === a.startAngle && a.fullCircles && (a.endAngle += xe, a.fullCircles--)), e.beginPath(), e.arc(a.x, a.y, a.innerRadius, a.startAngle + xe, a.startAngle, !0), r = 0; r < a.fullCircles; ++r) e.stroke();
          for (e.beginPath(), e.arc(a.x, a.y, t.outerRadius, a.startAngle, a.startAngle + xe), r = 0; r < a.fullCircles; ++r) e.stroke()
        }

        function He(e, t, a) {
          var n = "inner" === t.borderAlign;
          n ? (e.lineWidth = 2 * t.borderWidth, e.lineJoin = "round") : (e.lineWidth = t.borderWidth, e.lineJoin = "bevel"), a.fullCircles && Se(e, t, a, n), n && Te(e, a), e.beginPath(), e.arc(a.x, a.y, t.outerRadius, a.startAngle, a.endAngle), e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0), e.closePath(), e.stroke()
        }
        Q._set("global", {
          elements: {
            arc: {
              backgroundColor: Q.global.defaultColor,
              borderColor: "#fff",
              borderWidth: 2,
              borderAlign: "center"
            }
          }
        });
        var je = ye.extend({
            _type: "arc",
            inLabelRange: function (e) {
              var t = this._view;
              return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2)
            },
            inRange: function (e, t) {
              var a = this._view;
              if (a) {
                var n = le.getAngleFromPoint(a, {
                    x: e,
                    y: t
                  }),
                  r = n.angle,
                  i = n.distance,
                  s = a.startAngle,
                  o = a.endAngle;
                while (o < s) o += xe;
                while (r > o) r -= xe;
                while (r < s) r += xe;
                var d = r >= s && r <= o,
                  l = i >= a.innerRadius && i <= a.outerRadius;
                return d && l
              }
              return !1
            },
            getCenterPoint: function () {
              var e = this._view,
                t = (e.startAngle + e.endAngle) / 2,
                a = (e.innerRadius + e.outerRadius) / 2;
              return {
                x: e.x + Math.cos(t) * a,
                y: e.y + Math.sin(t) * a
              }
            },
            getArea: function () {
              var e = this._view;
              return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
            },
            tooltipPosition: function () {
              var e = this._view,
                t = e.startAngle + (e.endAngle - e.startAngle) / 2,
                a = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
              return {
                x: e.x + Math.cos(t) * a,
                y: e.y + Math.sin(t) * a
              }
            },
            draw: function () {
              var e, t = this._chart.ctx,
                a = this._view,
                n = "inner" === a.borderAlign ? .33 : 0,
                r = {
                  x: a.x,
                  y: a.y,
                  innerRadius: a.innerRadius,
                  outerRadius: Math.max(a.outerRadius - n, 0),
                  pixelMargin: n,
                  startAngle: a.startAngle,
                  endAngle: a.endAngle,
                  fullCircles: Math.floor(a.circumference / xe)
                };
              if (t.save(), t.fillStyle = a.backgroundColor, t.strokeStyle = a.borderColor, r.fullCircles) {
                for (r.endAngle = r.startAngle + xe, t.beginPath(), t.arc(r.x, r.y, r.outerRadius, r.startAngle, r.endAngle), t.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0), t.closePath(), e = 0; e < r.fullCircles; ++e) t.fill();
                r.endAngle = r.startAngle + a.circumference % xe
              }
              t.beginPath(), t.arc(r.x, r.y, r.outerRadius, r.startAngle, r.endAngle), t.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0), t.closePath(), t.fill(), a.borderWidth && He(t, a, r), t.restore()
            }
          }),
          Pe = le.valueOrDefault,
          Oe = Q.global.defaultColor;
        Q._set("global", {
          elements: {
            line: {
              tension: .4,
              backgroundColor: Oe,
              borderWidth: 3,
              borderColor: Oe,
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: "miter",
              capBezierPoints: !0,
              fill: !0
            }
          }
        });
        var Ae = ye.extend({
            _type: "line",
            draw: function () {
              var e, t, a, n = this,
                r = n._view,
                i = n._chart.ctx,
                s = r.spanGaps,
                o = n._children.slice(),
                d = Q.global,
                l = d.elements.line,
                u = -1,
                c = n._loop;
              if (o.length) {
                if (n._loop) {
                  for (e = 0; e < o.length; ++e)
                    if (t = le.previousItem(o, e), !o[e]._view.skip && t._view.skip) {
                      o = o.slice(e).concat(o.slice(0, e)), c = s;
                      break
                    } c && o.push(o[0])
                }
                for (i.save(), i.lineCap = r.borderCapStyle || l.borderCapStyle, i.setLineDash && i.setLineDash(r.borderDash || l.borderDash), i.lineDashOffset = Pe(r.borderDashOffset, l.borderDashOffset), i.lineJoin = r.borderJoinStyle || l.borderJoinStyle, i.lineWidth = Pe(r.borderWidth, l.borderWidth), i.strokeStyle = r.borderColor || d.defaultColor, i.beginPath(), a = o[0]._view, a.skip || (i.moveTo(a.x, a.y), u = 0), e = 1; e < o.length; ++e) a = o[e]._view, t = -1 === u ? le.previousItem(o, e) : o[u], a.skip || (u !== e - 1 && !s || -1 === u ? i.moveTo(a.x, a.y) : le.canvas.lineTo(i, t._view, a), u = e);
                c && i.closePath(), i.stroke(), i.restore()
              }
            }
          }),
          Ce = le.valueOrDefault,
          Fe = Q.global.defaultColor;

        function Ee(e) {
          var t = this._view;
          return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius
        }

        function We(e) {
          var t = this._view;
          return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius
        }
        Q._set("global", {
          elements: {
            point: {
              radius: 3,
              pointStyle: "circle",
              backgroundColor: Fe,
              borderColor: Fe,
              borderWidth: 1,
              hitRadius: 1,
              hoverRadius: 4,
              hoverBorderWidth: 1
            }
          }
        });
        var Ie = ye.extend({
            _type: "point",
            inRange: function (e, t) {
              var a = this._view;
              return !!a && Math.pow(e - a.x, 2) + Math.pow(t - a.y, 2) < Math.pow(a.hitRadius + a.radius, 2)
            },
            inLabelRange: Ee,
            inXRange: Ee,
            inYRange: We,
            getCenterPoint: function () {
              var e = this._view;
              return {
                x: e.x,
                y: e.y
              }
            },
            getArea: function () {
              return Math.PI * Math.pow(this._view.radius, 2)
            },
            tooltipPosition: function () {
              var e = this._view;
              return {
                x: e.x,
                y: e.y,
                padding: e.radius + e.borderWidth
              }
            },
            draw: function (e) {
              var t = this._view,
                a = this._chart.ctx,
                n = t.pointStyle,
                r = t.rotation,
                i = t.radius,
                s = t.x,
                o = t.y,
                d = Q.global,
                l = d.defaultColor;
              t.skip || (void 0 === e || le.canvas._isPointInArea(t, e)) && (a.strokeStyle = t.borderColor || l, a.lineWidth = Ce(t.borderWidth, d.elements.point.borderWidth), a.fillStyle = t.backgroundColor || l, le.canvas.drawPoint(a, n, i, s, o, r))
            }
          }),
          ze = Q.global.defaultColor;

        function Ne(e) {
          return e && void 0 !== e.width
        }

        function Re(e) {
          var t, a, n, r, i;
          return Ne(e) ? (i = e.width / 2, t = e.x - i, a = e.x + i, n = Math.min(e.y, e.base), r = Math.max(e.y, e.base)) : (i = e.height / 2, t = Math.min(e.x, e.base), a = Math.max(e.x, e.base), n = e.y - i, r = e.y + i), {
            left: t,
            top: n,
            right: a,
            bottom: r
          }
        }

        function Ve(e, t, a) {
          return e === t ? a : e === a ? t : e
        }

        function Be(e) {
          var t = e.borderSkipped,
            a = {};
          return t ? (e.horizontal ? e.base > e.x && (t = Ve(t, "left", "right")) : e.base < e.y && (t = Ve(t, "bottom", "top")), a[t] = !0, a) : a
        }

        function Je(e, t, a) {
          var n, r, i, s, o = e.borderWidth,
            d = Be(e);
          return le.isObject(o) ? (n = +o.top || 0, r = +o.right || 0, i = +o.bottom || 0, s = +o.left || 0) : n = r = i = s = +o || 0, {
            t: d.top || n < 0 ? 0 : n > a ? a : n,
            r: d.right || r < 0 ? 0 : r > t ? t : r,
            b: d.bottom || i < 0 ? 0 : i > a ? a : i,
            l: d.left || s < 0 ? 0 : s > t ? t : s
          }
        }

        function Ue(e) {
          var t = Re(e),
            a = t.right - t.left,
            n = t.bottom - t.top,
            r = Je(e, a / 2, n / 2);
          return {
            outer: {
              x: t.left,
              y: t.top,
              w: a,
              h: n
            },
            inner: {
              x: t.left + r.l,
              y: t.top + r.t,
              w: a - r.l - r.r,
              h: n - r.t - r.b
            }
          }
        }

        function Ge(e, t, a) {
          var n = null === t,
            r = null === a,
            i = !(!e || n && r) && Re(e);
          return i && (n || t >= i.left && t <= i.right) && (r || a >= i.top && a <= i.bottom)
        }
        Q._set("global", {
          elements: {
            rectangle: {
              backgroundColor: ze,
              borderColor: ze,
              borderSkipped: "bottom",
              borderWidth: 0
            }
          }
        });
        var qe = ye.extend({
            _type: "rectangle",
            draw: function () {
              var e = this._chart.ctx,
                t = this._view,
                a = Ue(t),
                n = a.outer,
                r = a.inner;
              e.fillStyle = t.backgroundColor, e.fillRect(n.x, n.y, n.w, n.h), n.w === r.w && n.h === r.h || (e.save(), e.beginPath(), e.rect(n.x, n.y, n.w, n.h), e.clip(), e.fillStyle = t.borderColor, e.rect(r.x, r.y, r.w, r.h), e.fill("evenodd"), e.restore())
            },
            height: function () {
              var e = this._view;
              return e.base - e.y
            },
            inRange: function (e, t) {
              return Ge(this._view, e, t)
            },
            inLabelRange: function (e, t) {
              var a = this._view;
              return Ne(a) ? Ge(a, e, null) : Ge(a, null, t)
            },
            inXRange: function (e) {
              return Ge(this._view, e, null)
            },
            inYRange: function (e) {
              return Ge(this._view, null, e)
            },
            getCenterPoint: function () {
              var e, t, a = this._view;
              return Ne(a) ? (e = a.x, t = (a.y + a.base) / 2) : (e = (a.x + a.base) / 2, t = a.y), {
                x: e,
                y: t
              }
            },
            getArea: function () {
              var e = this._view;
              return Ne(e) ? e.width * Math.abs(e.y - e.base) : e.height * Math.abs(e.x - e.base)
            },
            tooltipPosition: function () {
              var e = this._view;
              return {
                x: e.x,
                y: e.y
              }
            }
          }),
          $e = {},
          Ke = je,
          Qe = Ae,
          Ze = Ie,
          Xe = qe;
        $e.Arc = Ke, $e.Line = Qe, $e.Point = Ze, $e.Rectangle = Xe;
        var et = le._deprecated,
          tt = le.valueOrDefault;

        function at(e, t) {
          var a, n, r, i, s = e._length;
          for (r = 1, i = t.length; r < i; ++r) s = Math.min(s, Math.abs(t[r] - t[r - 1]));
          for (r = 0, i = e.getTicks().length; r < i; ++r) n = e.getPixelForTick(r), s = r > 0 ? Math.min(s, Math.abs(n - a)) : s, a = n;
          return s
        }

        function nt(e, t, a) {
          var n, r, i = a.barThickness,
            s = t.stackCount,
            o = t.pixels[e],
            d = le.isNullOrUndef(i) ? at(t.scale, t.pixels) : -1;
          return le.isNullOrUndef(i) ? (n = d * a.categoryPercentage, r = a.barPercentage) : (n = i * s, r = 1), {
            chunk: n / s,
            ratio: r,
            start: o - n / 2
          }
        }

        function rt(e, t, a) {
          var n, r, i = t.pixels,
            s = i[e],
            o = e > 0 ? i[e - 1] : null,
            d = e < i.length - 1 ? i[e + 1] : null,
            l = a.categoryPercentage;
          return null === o && (o = s - (null === d ? t.end - t.start : d - s)), null === d && (d = s + s - o), n = s - (s - Math.min(o, d)) / 2 * l, r = Math.abs(d - o) / 2 * l, {
            chunk: r / t.stackCount,
            ratio: a.barPercentage,
            start: n
          }
        }
        Q._set("bar", {
          hover: {
            mode: "label"
          },
          scales: {
            xAxes: [{
              type: "category",
              offset: !0,
              gridLines: {
                offsetGridLines: !0
              }
            }],
            yAxes: [{
              type: "linear"
            }]
          }
        }), Q._set("global", {
          datasets: {
            bar: {
              categoryPercentage: .8,
              barPercentage: .9
            }
          }
        });
        var it = we.extend({
            dataElementType: $e.Rectangle,
            _dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"],
            initialize: function () {
              var e, t, a = this;
              we.prototype.initialize.apply(a, arguments), e = a.getMeta(), e.stack = a.getDataset().stack, e.bar = !0, t = a._getIndexScale().options, et("bar chart", t.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), et("bar chart", t.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), et("bar chart", t.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), et("bar chart", a._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), et("bar chart", t.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness")
            },
            update: function (e) {
              var t, a, n = this,
                r = n.getMeta().data;
              for (n._ruler = n.getRuler(), t = 0, a = r.length; t < a; ++t) n.updateElement(r[t], t, e)
            },
            updateElement: function (e, t, a) {
              var n = this,
                r = n.getMeta(),
                i = n.getDataset(),
                s = n._resolveDataElementOptions(e, t);
              e._xScale = n.getScaleForId(r.xAxisID), e._yScale = n.getScaleForId(r.yAxisID), e._datasetIndex = n.index, e._index = t, e._model = {
                backgroundColor: s.backgroundColor,
                borderColor: s.borderColor,
                borderSkipped: s.borderSkipped,
                borderWidth: s.borderWidth,
                datasetLabel: i.label,
                label: n.chart.data.labels[t]
              }, le.isArray(i.data[t]) && (e._model.borderSkipped = null), n._updateElementGeometry(e, t, a, s), e.pivot()
            },
            _updateElementGeometry: function (e, t, a, n) {
              var r = this,
                i = e._model,
                s = r._getValueScale(),
                o = s.getBasePixel(),
                d = s.isHorizontal(),
                l = r._ruler || r.getRuler(),
                u = r.calculateBarValuePixels(r.index, t, n),
                c = r.calculateBarIndexPixels(r.index, t, l, n);
              i.horizontal = d, i.base = a ? o : u.base, i.x = d ? a ? o : u.head : c.center, i.y = d ? c.center : a ? o : u.head, i.height = d ? c.size : void 0, i.width = d ? void 0 : c.size
            },
            _getStacks: function (e) {
              var t, a, n = this,
                r = n._getIndexScale(),
                i = r._getMatchingVisibleMetas(n._type),
                s = r.options.stacked,
                o = i.length,
                d = [];
              for (t = 0; t < o; ++t)
                if (a = i[t], (!1 === s || -1 === d.indexOf(a.stack) || void 0 === s && void 0 === a.stack) && d.push(a.stack), a.index === e) break;
              return d
            },
            getStackCount: function () {
              return this._getStacks().length
            },
            getStackIndex: function (e, t) {
              var a = this._getStacks(e),
                n = void 0 !== t ? a.indexOf(t) : -1;
              return -1 === n ? a.length - 1 : n
            },
            getRuler: function () {
              var e, t, a = this,
                n = a._getIndexScale(),
                r = [];
              for (e = 0, t = a.getMeta().data.length; e < t; ++e) r.push(n.getPixelForValue(null, e, a.index));
              return {
                pixels: r,
                start: n._startPixel,
                end: n._endPixel,
                stackCount: a.getStackCount(),
                scale: n
              }
            },
            calculateBarValuePixels: function (e, t, a) {
              var n, r, i, s, o, d, l, u = this,
                c = u.chart,
                _ = u._getValueScale(),
                m = _.isHorizontal(),
                h = c.data.datasets,
                f = _._getMatchingVisibleMetas(u._type),
                p = _._parseValue(h[e].data[t]),
                y = a.minBarLength,
                M = _.options.stacked,
                g = u.getMeta().stack,
                v = void 0 === p.start ? 0 : p.max >= 0 && p.min >= 0 ? p.min : p.max,
                L = void 0 === p.start ? p.end : p.max >= 0 && p.min >= 0 ? p.max - p.min : p.min - p.max,
                b = f.length;
              if (M || void 0 === M && void 0 !== g)
                for (n = 0; n < b; ++n) {
                  if (r = f[n], r.index === e) break;
                  r.stack === g && (l = _._parseValue(h[r.index].data[t]), i = void 0 === l.start ? l.end : l.min >= 0 && l.max >= 0 ? l.max : l.min, (p.min < 0 && i < 0 || p.max >= 0 && i > 0) && (v += i))
                }
              return s = _.getPixelForValue(v), o = _.getPixelForValue(v + L), d = o - s, void 0 !== y && Math.abs(d) < y && (d = y, o = L >= 0 && !m || L < 0 && m ? s - y : s + y), {
                size: d,
                base: s,
                head: o,
                center: o + d / 2
              }
            },
            calculateBarIndexPixels: function (e, t, a, n) {
              var r = this,
                i = "flex" === n.barThickness ? rt(t, a, n) : nt(t, a, n),
                s = r.getStackIndex(e, r.getMeta().stack),
                o = i.start + i.chunk * s + i.chunk / 2,
                d = Math.min(tt(n.maxBarThickness, 1 / 0), i.chunk * i.ratio);
              return {
                base: o - d / 2,
                head: o + d / 2,
                center: o,
                size: d
              }
            },
            draw: function () {
              var e = this,
                t = e.chart,
                a = e._getValueScale(),
                n = e.getMeta().data,
                r = e.getDataset(),
                i = n.length,
                s = 0;
              for (le.canvas.clipArea(t.ctx, t.chartArea); s < i; ++s) {
                var o = a._parseValue(r.data[s]);
                isNaN(o.min) || isNaN(o.max) || n[s].draw()
              }
              le.canvas.unclipArea(t.ctx)
            },
            _resolveDataElementOptions: function () {
              var e = this,
                t = le.extend({}, we.prototype._resolveDataElementOptions.apply(e, arguments)),
                a = e._getIndexScale().options,
                n = e._getValueScale().options;
              return t.barPercentage = tt(a.barPercentage, t.barPercentage), t.barThickness = tt(a.barThickness, t.barThickness), t.categoryPercentage = tt(a.categoryPercentage, t.categoryPercentage), t.maxBarThickness = tt(a.maxBarThickness, t.maxBarThickness), t.minBarLength = tt(n.minBarLength, t.minBarLength), t
            }
          }),
          st = le.valueOrDefault,
          ot = le.options.resolve;
        Q._set("bubble", {
          hover: {
            mode: "single"
          },
          scales: {
            xAxes: [{
              type: "linear",
              position: "bottom",
              id: "x-axis-0"
            }],
            yAxes: [{
              type: "linear",
              position: "left",
              id: "y-axis-0"
            }]
          },
          tooltips: {
            callbacks: {
              title: function () {
                return ""
              },
              label: function (e, t) {
                var a = t.datasets[e.datasetIndex].label || "",
                  n = t.datasets[e.datasetIndex].data[e.index];
                return a + ": (" + e.xLabel + ", " + e.yLabel + ", " + n.r + ")"
              }
            }
          }
        });
        var dt = we.extend({
            dataElementType: $e.Point,
            _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"],
            update: function (e) {
              var t = this,
                a = t.getMeta(),
                n = a.data;
              le.each(n, (function (a, n) {
                t.updateElement(a, n, e)
              }))
            },
            updateElement: function (e, t, a) {
              var n = this,
                r = n.getMeta(),
                i = e.custom || {},
                s = n.getScaleForId(r.xAxisID),
                o = n.getScaleForId(r.yAxisID),
                d = n._resolveDataElementOptions(e, t),
                l = n.getDataset().data[t],
                u = n.index,
                c = a ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" === typeof l ? l : NaN, t, u),
                _ = a ? o.getBasePixel() : o.getPixelForValue(l, t, u);
              e._xScale = s, e._yScale = o, e._options = d, e._datasetIndex = u, e._index = t, e._model = {
                backgroundColor: d.backgroundColor,
                borderColor: d.borderColor,
                borderWidth: d.borderWidth,
                hitRadius: d.hitRadius,
                pointStyle: d.pointStyle,
                rotation: d.rotation,
                radius: a ? 0 : d.radius,
                skip: i.skip || isNaN(c) || isNaN(_),
                x: c,
                y: _
              }, e.pivot()
            },
            setHoverStyle: function (e) {
              var t = e._model,
                a = e._options,
                n = le.getHoverColor;
              e.$previousStyle = {
                backgroundColor: t.backgroundColor,
                borderColor: t.borderColor,
                borderWidth: t.borderWidth,
                radius: t.radius
              }, t.backgroundColor = st(a.hoverBackgroundColor, n(a.backgroundColor)), t.borderColor = st(a.hoverBorderColor, n(a.borderColor)), t.borderWidth = st(a.hoverBorderWidth, a.borderWidth), t.radius = a.radius + a.hoverRadius
            },
            _resolveDataElementOptions: function (e, t) {
              var a = this,
                n = a.chart,
                r = a.getDataset(),
                i = e.custom || {},
                s = r.data[t] || {},
                o = we.prototype._resolveDataElementOptions.apply(a, arguments),
                d = {
                  chart: n,
                  dataIndex: t,
                  dataset: r,
                  datasetIndex: a.index
                };
              return a._cachedDataOpts === o && (o = le.extend({}, o)), o.radius = ot([i.radius, s.r, a._config.radius, n.options.elements.point.radius], d, t), o
            }
          }),
          lt = le.valueOrDefault,
          ut = Math.PI,
          ct = 2 * ut,
          _t = ut / 2;
        Q._set("doughnut", {
          animation: {
            animateRotate: !0,
            animateScale: !1
          },
          hover: {
            mode: "single"
          },
          legendCallback: function (e) {
            var t, a, n, r, i = document.createElement("ul"),
              s = e.data,
              o = s.datasets,
              d = s.labels;
            if (i.setAttribute("class", e.id + "-legend"), o.length)
              for (t = 0, a = o[0].data.length; t < a; ++t) n = i.appendChild(document.createElement("li")), r = n.appendChild(document.createElement("span")), r.style.backgroundColor = o[0].backgroundColor[t], d[t] && n.appendChild(document.createTextNode(d[t]));
            return i.outerHTML
          },
          legend: {
            labels: {
              generateLabels: function (e) {
                var t = e.data;
                return t.labels.length && t.datasets.length ? t.labels.map((function (a, n) {
                  var r = e.getDatasetMeta(0),
                    i = r.controller.getStyle(n);
                  return {
                    text: a,
                    fillStyle: i.backgroundColor,
                    strokeStyle: i.borderColor,
                    lineWidth: i.borderWidth,
                    hidden: isNaN(t.datasets[0].data[n]) || r.data[n].hidden,
                    index: n
                  }
                })) : []
              }
            },
            onClick: function (e, t) {
              var a, n, r, i = t.index,
                s = this.chart;
              for (a = 0, n = (s.data.datasets || []).length; a < n; ++a) r = s.getDatasetMeta(a), r.data[i] && (r.data[i].hidden = !r.data[i].hidden);
              s.update()
            }
          },
          cutoutPercentage: 50,
          rotation: -_t,
          circumference: ct,
          tooltips: {
            callbacks: {
              title: function () {
                return ""
              },
              label: function (e, t) {
                var a = t.labels[e.index],
                  n = ": " + t.datasets[e.datasetIndex].data[e.index];
                return le.isArray(a) ? (a = a.slice(), a[0] += n) : a += n, a
              }
            }
          }
        });
        var mt = we.extend({
          dataElementType: $e.Arc,
          linkScales: le.noop,
          _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
          getRingIndex: function (e) {
            for (var t = 0, a = 0; a < e; ++a) this.chart.isDatasetVisible(a) && ++t;
            return t
          },
          update: function (e) {
            var t, a, n, r, i = this,
              s = i.chart,
              o = s.chartArea,
              d = s.options,
              l = 1,
              u = 1,
              c = 0,
              _ = 0,
              m = i.getMeta(),
              h = m.data,
              f = d.cutoutPercentage / 100 || 0,
              p = d.circumference,
              y = i._getRingWeight(i.index);
            if (p < ct) {
              var M = d.rotation % ct;
              M += M >= ut ? -ct : M < -ut ? ct : 0;
              var g = M + p,
                v = Math.cos(M),
                L = Math.sin(M),
                b = Math.cos(g),
                k = Math.sin(g),
                Y = M <= 0 && g >= 0 || g >= ct,
                D = M <= _t && g >= _t || g >= ct + _t,
                w = M === -ut || g >= ut,
                x = M <= -_t && g >= -_t || g >= ut + _t,
                T = w ? -1 : Math.min(v, v * f, b, b * f),
                S = x ? -1 : Math.min(L, L * f, k, k * f),
                H = Y ? 1 : Math.max(v, v * f, b, b * f),
                j = D ? 1 : Math.max(L, L * f, k, k * f);
              l = (H - T) / 2, u = (j - S) / 2, c = -(H + T) / 2, _ = -(j + S) / 2
            }
            for (n = 0, r = h.length; n < r; ++n) h[n]._options = i._resolveDataElementOptions(h[n], n);
            for (s.borderWidth = i.getMaxBorderWidth(), t = (o.right - o.left - s.borderWidth) / l, a = (o.bottom - o.top - s.borderWidth) / u, s.outerRadius = Math.max(Math.min(t, a) / 2, 0), s.innerRadius = Math.max(s.outerRadius * f, 0), s.radiusLength = (s.outerRadius - s.innerRadius) / (i._getVisibleDatasetWeightTotal() || 1), s.offsetX = c * s.outerRadius, s.offsetY = _ * s.outerRadius, m.total = i.calculateTotal(), i.outerRadius = s.outerRadius - s.radiusLength * i._getRingWeightOffset(i.index), i.innerRadius = Math.max(i.outerRadius - s.radiusLength * y, 0), n = 0, r = h.length; n < r; ++n) i.updateElement(h[n], n, e)
          },
          updateElement: function (e, t, a) {
            var n = this,
              r = n.chart,
              i = r.chartArea,
              s = r.options,
              o = s.animation,
              d = (i.left + i.right) / 2,
              l = (i.top + i.bottom) / 2,
              u = s.rotation,
              c = s.rotation,
              _ = n.getDataset(),
              m = a && o.animateRotate || e.hidden ? 0 : n.calculateCircumference(_.data[t]) * (s.circumference / ct),
              h = a && o.animateScale ? 0 : n.innerRadius,
              f = a && o.animateScale ? 0 : n.outerRadius,
              p = e._options || {};
            le.extend(e, {
              _datasetIndex: n.index,
              _index: t,
              _model: {
                backgroundColor: p.backgroundColor,
                borderColor: p.borderColor,
                borderWidth: p.borderWidth,
                borderAlign: p.borderAlign,
                x: d + r.offsetX,
                y: l + r.offsetY,
                startAngle: u,
                endAngle: c,
                circumference: m,
                outerRadius: f,
                innerRadius: h,
                label: le.valueAtIndexOrDefault(_.label, t, r.data.labels[t])
              }
            });
            var y = e._model;
            a && o.animateRotate || (y.startAngle = 0 === t ? s.rotation : n.getMeta().data[t - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), e.pivot()
          },
          calculateTotal: function () {
            var e, t = this.getDataset(),
              a = this.getMeta(),
              n = 0;
            return le.each(a.data, (function (a, r) {
              e = t.data[r], isNaN(e) || a.hidden || (n += Math.abs(e))
            })), n
          },
          calculateCircumference: function (e) {
            var t = this.getMeta().total;
            return t > 0 && !isNaN(e) ? ct * (Math.abs(e) / t) : 0
          },
          getMaxBorderWidth: function (e) {
            var t, a, n, r, i, s, o, d, l = this,
              u = 0,
              c = l.chart;
            if (!e)
              for (t = 0, a = c.data.datasets.length; t < a; ++t)
                if (c.isDatasetVisible(t)) {
                  n = c.getDatasetMeta(t), e = n.data, t !== l.index && (i = n.controller);
                  break
                } if (!e) return 0;
            for (t = 0, a = e.length; t < a; ++t) r = e[t], i ? (i._configure(), s = i._resolveDataElementOptions(r, t)) : s = r._options, "inner" !== s.borderAlign && (o = s.borderWidth, d = s.hoverBorderWidth, u = o > u ? o : u, u = d > u ? d : u);
            return u
          },
          setHoverStyle: function (e) {
            var t = e._model,
              a = e._options,
              n = le.getHoverColor;
            e.$previousStyle = {
              backgroundColor: t.backgroundColor,
              borderColor: t.borderColor,
              borderWidth: t.borderWidth
            }, t.backgroundColor = lt(a.hoverBackgroundColor, n(a.backgroundColor)), t.borderColor = lt(a.hoverBorderColor, n(a.borderColor)), t.borderWidth = lt(a.hoverBorderWidth, a.borderWidth)
          },
          _getRingWeightOffset: function (e) {
            for (var t = 0, a = 0; a < e; ++a) this.chart.isDatasetVisible(a) && (t += this._getRingWeight(a));
            return t
          },
          _getRingWeight: function (e) {
            return Math.max(lt(this.chart.data.datasets[e].weight, 1), 0)
          },
          _getVisibleDatasetWeightTotal: function () {
            return this._getRingWeightOffset(this.chart.data.datasets.length)
          }
        });
        Q._set("horizontalBar", {
          hover: {
            mode: "index",
            axis: "y"
          },
          scales: {
            xAxes: [{
              type: "linear",
              position: "bottom"
            }],
            yAxes: [{
              type: "category",
              position: "left",
              offset: !0,
              gridLines: {
                offsetGridLines: !0
              }
            }]
          },
          elements: {
            rectangle: {
              borderSkipped: "left"
            }
          },
          tooltips: {
            mode: "index",
            axis: "y"
          }
        }), Q._set("global", {
          datasets: {
            horizontalBar: {
              categoryPercentage: .8,
              barPercentage: .9
            }
          }
        });
        var ht = it.extend({
            _getValueScaleId: function () {
              return this.getMeta().xAxisID
            },
            _getIndexScaleId: function () {
              return this.getMeta().yAxisID
            }
          }),
          ft = le.valueOrDefault,
          pt = le.options.resolve,
          yt = le.canvas._isPointInArea;

        function Mt(e, t) {
          var a = e && e.options.ticks || {},
            n = a.reverse,
            r = void 0 === a.min ? t : 0,
            i = void 0 === a.max ? t : 0;
          return {
            start: n ? i : r,
            end: n ? r : i
          }
        }

        function gt(e, t, a) {
          var n = a / 2,
            r = Mt(e, n),
            i = Mt(t, n);
          return {
            top: i.end,
            right: r.end,
            bottom: i.start,
            left: r.start
          }
        }

        function vt(e) {
          var t, a, n, r;
          return le.isObject(e) ? (t = e.top, a = e.right, n = e.bottom, r = e.left) : t = a = n = r = e, {
            top: t,
            right: a,
            bottom: n,
            left: r
          }
        }
        Q._set("line", {
          showLines: !0,
          spanGaps: !1,
          hover: {
            mode: "label"
          },
          scales: {
            xAxes: [{
              type: "category",
              id: "x-axis-0"
            }],
            yAxes: [{
              type: "linear",
              id: "y-axis-0"
            }]
          }
        });
        var Lt = we.extend({
            datasetElementType: $e.Line,
            dataElementType: $e.Point,
            _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"],
            _dataElementOptions: {
              backgroundColor: "pointBackgroundColor",
              borderColor: "pointBorderColor",
              borderWidth: "pointBorderWidth",
              hitRadius: "pointHitRadius",
              hoverBackgroundColor: "pointHoverBackgroundColor",
              hoverBorderColor: "pointHoverBorderColor",
              hoverBorderWidth: "pointHoverBorderWidth",
              hoverRadius: "pointHoverRadius",
              pointStyle: "pointStyle",
              radius: "pointRadius",
              rotation: "pointRotation"
            },
            update: function (e) {
              var t, a, n = this,
                r = n.getMeta(),
                i = r.dataset,
                s = r.data || [],
                o = n.chart.options,
                d = n._config,
                l = n._showLine = ft(d.showLine, o.showLines);
              for (n._xScale = n.getScaleForId(r.xAxisID), n._yScale = n.getScaleForId(r.yAxisID), l && (void 0 !== d.tension && void 0 === d.lineTension && (d.lineTension = d.tension), i._scale = n._yScale, i._datasetIndex = n.index, i._children = s, i._model = n._resolveDatasetElementOptions(i), i.pivot()), t = 0, a = s.length; t < a; ++t) n.updateElement(s[t], t, e);
              for (l && 0 !== i._model.tension && n.updateBezierControlPoints(), t = 0, a = s.length; t < a; ++t) s[t].pivot()
            },
            updateElement: function (e, t, a) {
              var n, r, i = this,
                s = i.getMeta(),
                o = e.custom || {},
                d = i.getDataset(),
                l = i.index,
                u = d.data[t],
                c = i._xScale,
                _ = i._yScale,
                m = s.dataset._model,
                h = i._resolveDataElementOptions(e, t);
              n = c.getPixelForValue("object" === typeof u ? u : NaN, t, l), r = a ? _.getBasePixel() : i.calculatePointY(u, t, l), e._xScale = c, e._yScale = _, e._options = h, e._datasetIndex = l, e._index = t, e._model = {
                x: n,
                y: r,
                skip: o.skip || isNaN(n) || isNaN(r),
                radius: h.radius,
                pointStyle: h.pointStyle,
                rotation: h.rotation,
                backgroundColor: h.backgroundColor,
                borderColor: h.borderColor,
                borderWidth: h.borderWidth,
                tension: ft(o.tension, m ? m.tension : 0),
                steppedLine: !!m && m.steppedLine,
                hitRadius: h.hitRadius
              }
            },
            _resolveDatasetElementOptions: function (e) {
              var t = this,
                a = t._config,
                n = e.custom || {},
                r = t.chart.options,
                i = r.elements.line,
                s = we.prototype._resolveDatasetElementOptions.apply(t, arguments);
              return s.spanGaps = ft(a.spanGaps, r.spanGaps), s.tension = ft(a.lineTension, i.tension), s.steppedLine = pt([n.steppedLine, a.steppedLine, i.stepped]), s.clip = vt(ft(a.clip, gt(t._xScale, t._yScale, s.borderWidth))), s
            },
            calculatePointY: function (e, t, a) {
              var n, r, i, s, o, d, l, u = this,
                c = u.chart,
                _ = u._yScale,
                m = 0,
                h = 0;
              if (_.options.stacked) {
                for (o = +_.getRightValue(e), d = c._getSortedVisibleDatasetMetas(), l = d.length, n = 0; n < l; ++n) {
                  if (i = d[n], i.index === a) break;
                  r = c.data.datasets[i.index], "line" === i.type && i.yAxisID === _.id && (s = +_.getRightValue(r.data[t]), s < 0 ? h += s || 0 : m += s || 0)
                }
                return o < 0 ? _.getPixelForValue(h + o) : _.getPixelForValue(m + o)
              }
              return _.getPixelForValue(e)
            },
            updateBezierControlPoints: function () {
              var e, t, a, n, r = this,
                i = r.chart,
                s = r.getMeta(),
                o = s.dataset._model,
                d = i.chartArea,
                l = s.data || [];

              function u(e, t, a) {
                return Math.max(Math.min(e, a), t)
              }
              if (o.spanGaps && (l = l.filter((function (e) {
                  return !e._model.skip
                }))), "monotone" === o.cubicInterpolationMode) le.splineCurveMonotone(l);
              else
                for (e = 0, t = l.length; e < t; ++e) a = l[e]._model, n = le.splineCurve(le.previousItem(l, e)._model, a, le.nextItem(l, e)._model, o.tension), a.controlPointPreviousX = n.previous.x, a.controlPointPreviousY = n.previous.y, a.controlPointNextX = n.next.x, a.controlPointNextY = n.next.y;
              if (i.options.elements.line.capBezierPoints)
                for (e = 0, t = l.length; e < t; ++e) a = l[e]._model, yt(a, d) && (e > 0 && yt(l[e - 1]._model, d) && (a.controlPointPreviousX = u(a.controlPointPreviousX, d.left, d.right), a.controlPointPreviousY = u(a.controlPointPreviousY, d.top, d.bottom)), e < l.length - 1 && yt(l[e + 1]._model, d) && (a.controlPointNextX = u(a.controlPointNextX, d.left, d.right), a.controlPointNextY = u(a.controlPointNextY, d.top, d.bottom)))
            },
            draw: function () {
              var e, t = this,
                a = t.chart,
                n = t.getMeta(),
                r = n.data || [],
                i = a.chartArea,
                s = a.canvas,
                o = 0,
                d = r.length;
              for (t._showLine && (e = n.dataset._model.clip, le.canvas.clipArea(a.ctx, {
                  left: !1 === e.left ? 0 : i.left - e.left,
                  right: !1 === e.right ? s.width : i.right + e.right,
                  top: !1 === e.top ? 0 : i.top - e.top,
                  bottom: !1 === e.bottom ? s.height : i.bottom + e.bottom
                }), n.dataset.draw(), le.canvas.unclipArea(a.ctx)); o < d; ++o) r[o].draw(i)
            },
            setHoverStyle: function (e) {
              var t = e._model,
                a = e._options,
                n = le.getHoverColor;
              e.$previousStyle = {
                backgroundColor: t.backgroundColor,
                borderColor: t.borderColor,
                borderWidth: t.borderWidth,
                radius: t.radius
              }, t.backgroundColor = ft(a.hoverBackgroundColor, n(a.backgroundColor)), t.borderColor = ft(a.hoverBorderColor, n(a.borderColor)), t.borderWidth = ft(a.hoverBorderWidth, a.borderWidth), t.radius = ft(a.hoverRadius, a.radius)
            }
          }),
          bt = le.options.resolve;
        Q._set("polarArea", {
          scale: {
            type: "radialLinear",
            angleLines: {
              display: !1
            },
            gridLines: {
              circular: !0
            },
            pointLabels: {
              display: !1
            },
            ticks: {
              beginAtZero: !0
            }
          },
          animation: {
            animateRotate: !0,
            animateScale: !0
          },
          startAngle: -.5 * Math.PI,
          legendCallback: function (e) {
            var t, a, n, r, i = document.createElement("ul"),
              s = e.data,
              o = s.datasets,
              d = s.labels;
            if (i.setAttribute("class", e.id + "-legend"), o.length)
              for (t = 0, a = o[0].data.length; t < a; ++t) n = i.appendChild(document.createElement("li")), r = n.appendChild(document.createElement("span")), r.style.backgroundColor = o[0].backgroundColor[t], d[t] && n.appendChild(document.createTextNode(d[t]));
            return i.outerHTML
          },
          legend: {
            labels: {
              generateLabels: function (e) {
                var t = e.data;
                return t.labels.length && t.datasets.length ? t.labels.map((function (a, n) {
                  var r = e.getDatasetMeta(0),
                    i = r.controller.getStyle(n);
                  return {
                    text: a,
                    fillStyle: i.backgroundColor,
                    strokeStyle: i.borderColor,
                    lineWidth: i.borderWidth,
                    hidden: isNaN(t.datasets[0].data[n]) || r.data[n].hidden,
                    index: n
                  }
                })) : []
              }
            },
            onClick: function (e, t) {
              var a, n, r, i = t.index,
                s = this.chart;
              for (a = 0, n = (s.data.datasets || []).length; a < n; ++a) r = s.getDatasetMeta(a), r.data[i].hidden = !r.data[i].hidden;
              s.update()
            }
          },
          tooltips: {
            callbacks: {
              title: function () {
                return ""
              },
              label: function (e, t) {
                return t.labels[e.index] + ": " + e.yLabel
              }
            }
          }
        });
        var kt = we.extend({
          dataElementType: $e.Arc,
          linkScales: le.noop,
          _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
          _getIndexScaleId: function () {
            return this.chart.scale.id
          },
          _getValueScaleId: function () {
            return this.chart.scale.id
          },
          update: function (e) {
            var t, a, n, r = this,
              i = r.getDataset(),
              s = r.getMeta(),
              o = r.chart.options.startAngle || 0,
              d = r._starts = [],
              l = r._angles = [],
              u = s.data;
            for (r._updateRadius(), s.count = r.countVisibleElements(), t = 0, a = i.data.length; t < a; t++) d[t] = o, n = r._computeAngle(t), l[t] = n, o += n;
            for (t = 0, a = u.length; t < a; ++t) u[t]._options = r._resolveDataElementOptions(u[t], t), r.updateElement(u[t], t, e)
          },
          _updateRadius: function () {
            var e = this,
              t = e.chart,
              a = t.chartArea,
              n = t.options,
              r = Math.min(a.right - a.left, a.bottom - a.top);
            t.outerRadius = Math.max(r / 2, 0), t.innerRadius = Math.max(n.cutoutPercentage ? t.outerRadius / 100 * n.cutoutPercentage : 1, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), e.outerRadius = t.outerRadius - t.radiusLength * e.index, e.innerRadius = e.outerRadius - t.radiusLength
          },
          updateElement: function (e, t, a) {
            var n = this,
              r = n.chart,
              i = n.getDataset(),
              s = r.options,
              o = s.animation,
              d = r.scale,
              l = r.data.labels,
              u = d.xCenter,
              c = d.yCenter,
              _ = s.startAngle,
              m = e.hidden ? 0 : d.getDistanceFromCenterForValue(i.data[t]),
              h = n._starts[t],
              f = h + (e.hidden ? 0 : n._angles[t]),
              p = o.animateScale ? 0 : d.getDistanceFromCenterForValue(i.data[t]),
              y = e._options || {};
            le.extend(e, {
              _datasetIndex: n.index,
              _index: t,
              _scale: d,
              _model: {
                backgroundColor: y.backgroundColor,
                borderColor: y.borderColor,
                borderWidth: y.borderWidth,
                borderAlign: y.borderAlign,
                x: u,
                y: c,
                innerRadius: 0,
                outerRadius: a ? p : m,
                startAngle: a && o.animateRotate ? _ : h,
                endAngle: a && o.animateRotate ? _ : f,
                label: le.valueAtIndexOrDefault(l, t, l[t])
              }
            }), e.pivot()
          },
          countVisibleElements: function () {
            var e = this.getDataset(),
              t = this.getMeta(),
              a = 0;
            return le.each(t.data, (function (t, n) {
              isNaN(e.data[n]) || t.hidden || a++
            })), a
          },
          setHoverStyle: function (e) {
            var t = e._model,
              a = e._options,
              n = le.getHoverColor,
              r = le.valueOrDefault;
            e.$previousStyle = {
              backgroundColor: t.backgroundColor,
              borderColor: t.borderColor,
              borderWidth: t.borderWidth
            }, t.backgroundColor = r(a.hoverBackgroundColor, n(a.backgroundColor)), t.borderColor = r(a.hoverBorderColor, n(a.borderColor)), t.borderWidth = r(a.hoverBorderWidth, a.borderWidth)
          },
          _computeAngle: function (e) {
            var t = this,
              a = this.getMeta().count,
              n = t.getDataset(),
              r = t.getMeta();
            if (isNaN(n.data[e]) || r.data[e].hidden) return 0;
            var i = {
              chart: t.chart,
              dataIndex: e,
              dataset: n,
              datasetIndex: t.index
            };
            return bt([t.chart.options.elements.arc.angle, 2 * Math.PI / a], i, e)
          }
        });
        Q._set("pie", le.clone(Q.doughnut)), Q._set("pie", {
          cutoutPercentage: 0
        });
        var Yt = mt,
          Dt = le.valueOrDefault;
        Q._set("radar", {
          spanGaps: !1,
          scale: {
            type: "radialLinear"
          },
          elements: {
            line: {
              fill: "start",
              tension: 0
            }
          }
        });
        var wt = we.extend({
          datasetElementType: $e.Line,
          dataElementType: $e.Point,
          linkScales: le.noop,
          _datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"],
          _dataElementOptions: {
            backgroundColor: "pointBackgroundColor",
            borderColor: "pointBorderColor",
            borderWidth: "pointBorderWidth",
            hitRadius: "pointHitRadius",
            hoverBackgroundColor: "pointHoverBackgroundColor",
            hoverBorderColor: "pointHoverBorderColor",
            hoverBorderWidth: "pointHoverBorderWidth",
            hoverRadius: "pointHoverRadius",
            pointStyle: "pointStyle",
            radius: "pointRadius",
            rotation: "pointRotation"
          },
          _getIndexScaleId: function () {
            return this.chart.scale.id
          },
          _getValueScaleId: function () {
            return this.chart.scale.id
          },
          update: function (e) {
            var t, a, n = this,
              r = n.getMeta(),
              i = r.dataset,
              s = r.data || [],
              o = n.chart.scale,
              d = n._config;
            for (void 0 !== d.tension && void 0 === d.lineTension && (d.lineTension = d.tension), i._scale = o, i._datasetIndex = n.index, i._children = s, i._loop = !0, i._model = n._resolveDatasetElementOptions(i), i.pivot(), t = 0, a = s.length; t < a; ++t) n.updateElement(s[t], t, e);
            for (n.updateBezierControlPoints(), t = 0, a = s.length; t < a; ++t) s[t].pivot()
          },
          updateElement: function (e, t, a) {
            var n = this,
              r = e.custom || {},
              i = n.getDataset(),
              s = n.chart.scale,
              o = s.getPointPositionForValue(t, i.data[t]),
              d = n._resolveDataElementOptions(e, t),
              l = n.getMeta().dataset._model,
              u = a ? s.xCenter : o.x,
              c = a ? s.yCenter : o.y;
            e._scale = s, e._options = d, e._datasetIndex = n.index, e._index = t, e._model = {
              x: u,
              y: c,
              skip: r.skip || isNaN(u) || isNaN(c),
              radius: d.radius,
              pointStyle: d.pointStyle,
              rotation: d.rotation,
              backgroundColor: d.backgroundColor,
              borderColor: d.borderColor,
              borderWidth: d.borderWidth,
              tension: Dt(r.tension, l ? l.tension : 0),
              hitRadius: d.hitRadius
            }
          },
          _resolveDatasetElementOptions: function () {
            var e = this,
              t = e._config,
              a = e.chart.options,
              n = we.prototype._resolveDatasetElementOptions.apply(e, arguments);
            return n.spanGaps = Dt(t.spanGaps, a.spanGaps), n.tension = Dt(t.lineTension, a.elements.line.tension), n
          },
          updateBezierControlPoints: function () {
            var e, t, a, n, r = this,
              i = r.getMeta(),
              s = r.chart.chartArea,
              o = i.data || [];

            function d(e, t, a) {
              return Math.max(Math.min(e, a), t)
            }
            for (i.dataset._model.spanGaps && (o = o.filter((function (e) {
                return !e._model.skip
              }))), e = 0, t = o.length; e < t; ++e) a = o[e]._model, n = le.splineCurve(le.previousItem(o, e, !0)._model, a, le.nextItem(o, e, !0)._model, a.tension), a.controlPointPreviousX = d(n.previous.x, s.left, s.right), a.controlPointPreviousY = d(n.previous.y, s.top, s.bottom), a.controlPointNextX = d(n.next.x, s.left, s.right), a.controlPointNextY = d(n.next.y, s.top, s.bottom)
          },
          setHoverStyle: function (e) {
            var t = e._model,
              a = e._options,
              n = le.getHoverColor;
            e.$previousStyle = {
              backgroundColor: t.backgroundColor,
              borderColor: t.borderColor,
              borderWidth: t.borderWidth,
              radius: t.radius
            }, t.backgroundColor = Dt(a.hoverBackgroundColor, n(a.backgroundColor)), t.borderColor = Dt(a.hoverBorderColor, n(a.borderColor)), t.borderWidth = Dt(a.hoverBorderWidth, a.borderWidth), t.radius = Dt(a.hoverRadius, a.radius)
          }
        });
        Q._set("scatter", {
          hover: {
            mode: "single"
          },
          scales: {
            xAxes: [{
              id: "x-axis-1",
              type: "linear",
              position: "bottom"
            }],
            yAxes: [{
              id: "y-axis-1",
              type: "linear",
              position: "left"
            }]
          },
          tooltips: {
            callbacks: {
              title: function () {
                return ""
              },
              label: function (e) {
                return "(" + e.xLabel + ", " + e.yLabel + ")"
              }
            }
          }
        }), Q._set("global", {
          datasets: {
            scatter: {
              showLine: !1
            }
          }
        });
        var xt = Lt,
          Tt = {
            bar: it,
            bubble: dt,
            doughnut: mt,
            horizontalBar: ht,
            line: Lt,
            polarArea: kt,
            pie: Yt,
            radar: wt,
            scatter: xt
          };

        function St(e, t) {
          return e.native ? {
            x: e.x,
            y: e.y
          } : le.getRelativePosition(e, t)
        }

        function Ht(e, t) {
          var a, n, r, i, s, o, d = e._getSortedVisibleDatasetMetas();
          for (n = 0, i = d.length; n < i; ++n)
            for (a = d[n].data, r = 0, s = a.length; r < s; ++r) o = a[r], o._view.skip || t(o)
        }

        function jt(e, t) {
          var a = [];
          return Ht(e, (function (e) {
            e.inRange(t.x, t.y) && a.push(e)
          })), a
        }

        function Pt(e, t, a, n) {
          var r = Number.POSITIVE_INFINITY,
            i = [];
          return Ht(e, (function (e) {
            if (!a || e.inRange(t.x, t.y)) {
              var s = e.getCenterPoint(),
                o = n(t, s);
              o < r ? (i = [e], r = o) : o === r && i.push(e)
            }
          })), i
        }

        function Ot(e) {
          var t = -1 !== e.indexOf("x"),
            a = -1 !== e.indexOf("y");
          return function (e, n) {
            var r = t ? Math.abs(e.x - n.x) : 0,
              i = a ? Math.abs(e.y - n.y) : 0;
            return Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2))
          }
        }

        function At(e, t, a) {
          var n = St(t, e);
          a.axis = a.axis || "x";
          var r = Ot(a.axis),
            i = a.intersect ? jt(e, n) : Pt(e, n, !1, r),
            s = [];
          return i.length ? (e._getSortedVisibleDatasetMetas().forEach((function (e) {
            var t = e.data[i[0]._index];
            t && !t._view.skip && s.push(t)
          })), s) : []
        }
        var Ct = {
            modes: {
              single: function (e, t) {
                var a = St(t, e),
                  n = [];
                return Ht(e, (function (e) {
                  if (e.inRange(a.x, a.y)) return n.push(e), n
                })), n.slice(0, 1)
              },
              label: At,
              index: At,
              dataset: function (e, t, a) {
                var n = St(t, e);
                a.axis = a.axis || "xy";
                var r = Ot(a.axis),
                  i = a.intersect ? jt(e, n) : Pt(e, n, !1, r);
                return i.length > 0 && (i = e.getDatasetMeta(i[0]._datasetIndex).data), i
              },
              "x-axis": function (e, t) {
                return At(e, t, {
                  intersect: !1
                })
              },
              point: function (e, t) {
                var a = St(t, e);
                return jt(e, a)
              },
              nearest: function (e, t, a) {
                var n = St(t, e);
                a.axis = a.axis || "xy";
                var r = Ot(a.axis);
                return Pt(e, n, a.intersect, r)
              },
              x: function (e, t, a) {
                var n = St(t, e),
                  r = [],
                  i = !1;
                return Ht(e, (function (e) {
                  e.inXRange(n.x) && r.push(e), e.inRange(n.x, n.y) && (i = !0)
                })), a.intersect && !i && (r = []), r
              },
              y: function (e, t, a) {
                var n = St(t, e),
                  r = [],
                  i = !1;
                return Ht(e, (function (e) {
                  e.inYRange(n.y) && r.push(e), e.inRange(n.x, n.y) && (i = !0)
                })), a.intersect && !i && (r = []), r
              }
            }
          },
          Ft = le.extend;

        function Et(e, t) {
          return le.where(e, (function (e) {
            return e.pos === t
          }))
        }

        function Wt(e, t) {
          return e.sort((function (e, a) {
            var n = t ? a : e,
              r = t ? e : a;
            return n.weight === r.weight ? n.index - r.index : n.weight - r.weight
          }))
        }

        function It(e) {
          var t, a, n, r = [];
          for (t = 0, a = (e || []).length; t < a; ++t) n = e[t], r.push({
            index: t,
            box: n,
            pos: n.position,
            horizontal: n.isHorizontal(),
            weight: n.weight
          });
          return r
        }

        function zt(e, t) {
          var a, n, r;
          for (a = 0, n = e.length; a < n; ++a) r = e[a], r.width = r.horizontal ? r.box.fullWidth && t.availableWidth : t.vBoxMaxWidth, r.height = r.horizontal && t.hBoxMaxHeight
        }

        function Nt(e) {
          var t = It(e),
            a = Wt(Et(t, "left"), !0),
            n = Wt(Et(t, "right")),
            r = Wt(Et(t, "top"), !0),
            i = Wt(Et(t, "bottom"));
          return {
            leftAndTop: a.concat(r),
            rightAndBottom: n.concat(i),
            chartArea: Et(t, "chartArea"),
            vertical: a.concat(n),
            horizontal: r.concat(i)
          }
        }

        function Rt(e, t, a, n) {
          return Math.max(e[a], t[a]) + Math.max(e[n], t[n])
        }

        function Vt(e, t, a) {
          var n, r, i = a.box,
            s = e.maxPadding;
          if (a.size && (e[a.pos] -= a.size), a.size = a.horizontal ? i.height : i.width, e[a.pos] += a.size, i.getPadding) {
            var o = i.getPadding();
            s.top = Math.max(s.top, o.top), s.left = Math.max(s.left, o.left), s.bottom = Math.max(s.bottom, o.bottom), s.right = Math.max(s.right, o.right)
          }
          if (n = t.outerWidth - Rt(s, e, "left", "right"), r = t.outerHeight - Rt(s, e, "top", "bottom"), n !== e.w || r !== e.h) return e.w = n, e.h = r, a.horizontal ? n !== e.w : r !== e.h
        }

        function Bt(e) {
          var t = e.maxPadding;

          function a(a) {
            var n = Math.max(t[a] - e[a], 0);
            return e[a] += n, n
          }
          e.y += a("top"), e.x += a("left"), a("right"), a("bottom")
        }

        function Jt(e, t) {
          var a = t.maxPadding;

          function n(e) {
            var n = {
              left: 0,
              top: 0,
              right: 0,
              bottom: 0
            };
            return e.forEach((function (e) {
              n[e] = Math.max(t[e], a[e])
            })), n
          }
          return n(e ? ["left", "right"] : ["top", "bottom"])
        }

        function Ut(e, t, a) {
          var n, r, i, s, o, d, l = [];
          for (n = 0, r = e.length; n < r; ++n) i = e[n], s = i.box, s.update(i.width || t.w, i.height || t.h, Jt(i.horizontal, t)), Vt(t, a, i) && (d = !0, l.length && (o = !0)), s.fullWidth || l.push(i);
          return o && Ut(l, t, a) || d
        }

        function Gt(e, t, a) {
          var n, r, i, s, o = a.padding,
            d = t.x,
            l = t.y;
          for (n = 0, r = e.length; n < r; ++n) i = e[n], s = i.box, i.horizontal ? (s.left = s.fullWidth ? o.left : t.left, s.right = s.fullWidth ? a.outerWidth - o.right : t.left + t.w, s.top = l, s.bottom = l + s.height, s.width = s.right - s.left, l = s.bottom) : (s.left = d, s.right = d + s.width, s.top = t.top, s.bottom = t.top + t.h, s.height = s.bottom - s.top, d = s.right);
          t.x = d, t.y = l
        }
        Q._set("global", {
          layout: {
            padding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        });
        var qt = {
            defaults: {},
            addBox: function (e, t) {
              e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function () {
                return [{
                  z: 0,
                  draw: function () {
                    t.draw.apply(t, arguments)
                  }
                }]
              }, e.boxes.push(t)
            },
            removeBox: function (e, t) {
              var a = e.boxes ? e.boxes.indexOf(t) : -1; - 1 !== a && e.boxes.splice(a, 1)
            },
            configure: function (e, t, a) {
              for (var n, r = ["fullWidth", "position", "weight"], i = r.length, s = 0; s < i; ++s) n = r[s], a.hasOwnProperty(n) && (t[n] = a[n])
            },
            update: function (e, t, a) {
              if (e) {
                var n = e.options.layout || {},
                  r = le.options.toPadding(n.padding),
                  i = t - r.width,
                  s = a - r.height,
                  o = Nt(e.boxes),
                  d = o.vertical,
                  l = o.horizontal,
                  u = Object.freeze({
                    outerWidth: t,
                    outerHeight: a,
                    padding: r,
                    availableWidth: i,
                    vBoxMaxWidth: i / 2 / d.length,
                    hBoxMaxHeight: s / 2
                  }),
                  c = Ft({
                    maxPadding: Ft({}, r),
                    w: i,
                    h: s,
                    x: r.left,
                    y: r.top
                  }, r);
                zt(d.concat(l), u), Ut(d, c, u), Ut(l, c, u) && Ut(d, c, u), Bt(c), Gt(o.leftAndTop, c, u), c.x += c.w, c.y += c.h, Gt(o.rightAndBottom, c, u), e.chartArea = {
                  left: c.left,
                  top: c.top,
                  right: c.left + c.w,
                  bottom: c.top + c.h
                }, le.each(o.chartArea, (function (t) {
                  var a = t.box;
                  Ft(a, e.chartArea), a.update(c.w, c.h)
                }))
              }
            }
          },
          $t = {
            acquireContext: function (e) {
              return e && e.canvas && (e = e.canvas), e && e.getContext("2d") || null
            }
          },
          Kt = "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n",
          Qt = Object.freeze({
            __proto__: null,
            default: Kt
          }),
          Zt = a(Qt),
          Xt = "$chartjs",
          ea = "chartjs-",
          ta = ea + "size-monitor",
          aa = ea + "render-monitor",
          na = ea + "render-animation",
          ra = ["animationstart", "webkitAnimationStart"],
          ia = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout"
          };

        function sa(e, t) {
          var a = le.getStyle(e, t),
            n = a && a.match(/^(\d+)(\.\d+)?px$/);
          return n ? Number(n[1]) : void 0
        }

        function oa(e, t) {
          var a = e.style,
            n = e.getAttribute("height"),
            r = e.getAttribute("width");
          if (e[Xt] = {
              initial: {
                height: n,
                width: r,
                style: {
                  display: a.display,
                  height: a.height,
                  width: a.width
                }
              }
            }, a.display = a.display || "block", null === r || "" === r) {
            var i = sa(e, "width");
            void 0 !== i && (e.width = i)
          }
          if (null === n || "" === n)
            if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2);
            else {
              var s = sa(e, "height");
              void 0 !== i && (e.height = s)
            } return e
        }
        var da = function () {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0
                }
              });
              window.addEventListener("e", null, t)
            } catch (a) {}
            return e
          }(),
          la = !!da && {
            passive: !0
          };

        function ua(e, t, a) {
          e.addEventListener(t, a, la)
        }

        function ca(e, t, a) {
          e.removeEventListener(t, a, la)
        }

        function _a(e, t, a, n, r) {
          return {
            type: e,
            chart: t,
            native: r || null,
            x: void 0 !== a ? a : null,
            y: void 0 !== n ? n : null
          }
        }

        function ma(e, t) {
          var a = ia[e.type] || e.type,
            n = le.getRelativePosition(e, t);
          return _a(a, t, n.x, n.y, e)
        }

        function ha(e, t) {
          var a = !1,
            n = [];
          return function () {
            n = Array.prototype.slice.call(arguments), t = t || this, a || (a = !0, le.requestAnimFrame.call(window, (function () {
              a = !1, e.apply(t, n)
            })))
          }
        }

        function fa(e) {
          var t = document.createElement("div");
          return t.className = e || "", t
        }

        function pa(e) {
          var t = 1e6,
            a = fa(ta),
            n = fa(ta + "-expand"),
            r = fa(ta + "-shrink");
          n.appendChild(fa()), r.appendChild(fa()), a.appendChild(n), a.appendChild(r), a._reset = function () {
            n.scrollLeft = t, n.scrollTop = t, r.scrollLeft = t, r.scrollTop = t
          };
          var i = function () {
            a._reset(), e()
          };
          return ua(n, "scroll", i.bind(n, "expand")), ua(r, "scroll", i.bind(r, "shrink")), a
        }

        function ya(e, t) {
          var a = e[Xt] || (e[Xt] = {}),
            n = a.renderProxy = function (e) {
              e.animationName === na && t()
            };
          le.each(ra, (function (t) {
            ua(e, t, n)
          })), a.reflow = !!e.offsetParent, e.classList.add(aa)
        }

        function Ma(e) {
          var t = e[Xt] || {},
            a = t.renderProxy;
          a && (le.each(ra, (function (t) {
            ca(e, t, a)
          })), delete t.renderProxy), e.classList.remove(aa)
        }

        function ga(e, t, a) {
          var n = e[Xt] || (e[Xt] = {}),
            r = n.resizer = pa(ha((function () {
              if (n.resizer) {
                var r = a.options.maintainAspectRatio && e.parentNode,
                  i = r ? r.clientWidth : 0;
                t(_a("resize", a)), r && r.clientWidth < i && a.canvas && t(_a("resize", a))
              }
            })));
          ya(e, (function () {
            if (n.resizer) {
              var t = e.parentNode;
              t && t !== r.parentNode && t.insertBefore(r, t.firstChild), r._reset()
            }
          }))
        }

        function va(e) {
          var t = e[Xt] || {},
            a = t.resizer;
          delete t.resizer, Ma(e), a && a.parentNode && a.parentNode.removeChild(a)
        }

        function La(e, t) {
          var a = e[Xt] || (e[Xt] = {});
          if (!a.containsStyles) {
            a.containsStyles = !0, t = "/* Chart.js */\n" + t;
            var n = document.createElement("style");
            n.setAttribute("type", "text/css"), n.appendChild(document.createTextNode(t)), e.appendChild(n)
          }
        }
        var ba = {
          disableCSSInjection: !1,
          _enabled: "undefined" !== typeof window && "undefined" !== typeof document,
          _ensureLoaded: function (e) {
            if (!this.disableCSSInjection) {
              var t = e.getRootNode ? e.getRootNode() : document,
                a = t.host ? t : document.head;
              La(a, Zt)
            }
          },
          acquireContext: function (e, t) {
            "string" === typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas);
            var a = e && e.getContext && e.getContext("2d");
            return a && a.canvas === e ? (this._ensureLoaded(e), oa(e, t), a) : null
          },
          releaseContext: function (e) {
            var t = e.canvas;
            if (t[Xt]) {
              var a = t[Xt].initial;
              ["height", "width"].forEach((function (e) {
                var n = a[e];
                le.isNullOrUndef(n) ? t.removeAttribute(e) : t.setAttribute(e, n)
              })), le.each(a.style || {}, (function (e, a) {
                t.style[a] = e
              })), t.width = t.width, delete t[Xt]
            }
          },
          addEventListener: function (e, t, a) {
            var n = e.canvas;
            if ("resize" !== t) {
              var r = a[Xt] || (a[Xt] = {}),
                i = r.proxies || (r.proxies = {}),
                s = i[e.id + "_" + t] = function (t) {
                  a(ma(t, e))
                };
              ua(n, t, s)
            } else ga(n, a, e)
          },
          removeEventListener: function (e, t, a) {
            var n = e.canvas;
            if ("resize" !== t) {
              var r = a[Xt] || {},
                i = r.proxies || {},
                s = i[e.id + "_" + t];
              s && ca(n, t, s)
            } else va(n)
          }
        };
        le.addEvent = ua, le.removeEvent = ca;
        var ka = ba._enabled ? ba : $t,
          Ya = le.extend({
            initialize: function () {},
            acquireContext: function () {},
            releaseContext: function () {},
            addEventListener: function () {},
            removeEventListener: function () {}
          }, ka);
        Q._set("global", {
          plugins: {}
        });
        var Da = {
            _plugins: [],
            _cacheId: 0,
            register: function (e) {
              var t = this._plugins;
              [].concat(e).forEach((function (e) {
                -1 === t.indexOf(e) && t.push(e)
              })), this._cacheId++
            },
            unregister: function (e) {
              var t = this._plugins;
              [].concat(e).forEach((function (e) {
                var a = t.indexOf(e); - 1 !== a && t.splice(a, 1)
              })), this._cacheId++
            },
            clear: function () {
              this._plugins = [], this._cacheId++
            },
            count: function () {
              return this._plugins.length
            },
            getAll: function () {
              return this._plugins
            },
            notify: function (e, t, a) {
              var n, r, i, s, o, d = this.descriptors(e),
                l = d.length;
              for (n = 0; n < l; ++n)
                if (r = d[n], i = r.plugin, o = i[t], "function" === typeof o && (s = [e].concat(a || []), s.push(r.options), !1 === o.apply(i, s))) return !1;
              return !0
            },
            descriptors: function (e) {
              var t = e.$plugins || (e.$plugins = {});
              if (t.id === this._cacheId) return t.descriptors;
              var a = [],
                n = [],
                r = e && e.config || {},
                i = r.options && r.options.plugins || {};
              return this._plugins.concat(r.plugins || []).forEach((function (e) {
                var t = a.indexOf(e);
                if (-1 === t) {
                  var r = e.id,
                    s = i[r];
                  !1 !== s && (!0 === s && (s = le.clone(Q.global.plugins[r])), a.push(e), n.push({
                    plugin: e,
                    options: s || {}
                  }))
                }
              })), t.descriptors = n, t.id = this._cacheId, n
            },
            _invalidate: function (e) {
              delete e.$plugins
            }
          },
          wa = {
            constructors: {},
            defaults: {},
            registerScaleType: function (e, t, a) {
              this.constructors[e] = t, this.defaults[e] = le.clone(a)
            },
            getScaleConstructor: function (e) {
              return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0
            },
            getScaleDefaults: function (e) {
              return this.defaults.hasOwnProperty(e) ? le.merge({}, [Q.scale, this.defaults[e]]) : {}
            },
            updateScaleDefaults: function (e, t) {
              var a = this;
              a.defaults.hasOwnProperty(e) && (a.defaults[e] = le.extend(a.defaults[e], t))
            },
            addScalesToLayout: function (e) {
              le.each(e.scales, (function (t) {
                t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, qt.addBox(e, t)
              }))
            }
          },
          xa = le.valueOrDefault,
          Ta = le.rtl.getRtlAdapter;
        Q._set("global", {
          tooltips: {
            enabled: !0,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: !0,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: !0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            callbacks: {
              beforeTitle: le.noop,
              title: function (e, t) {
                var a = "",
                  n = t.labels,
                  r = n ? n.length : 0;
                if (e.length > 0) {
                  var i = e[0];
                  i.label ? a = i.label : i.xLabel ? a = i.xLabel : r > 0 && i.index < r && (a = n[i.index])
                }
                return a
              },
              afterTitle: le.noop,
              beforeBody: le.noop,
              beforeLabel: le.noop,
              label: function (e, t) {
                var a = t.datasets[e.datasetIndex].label || "";
                return a && (a += ": "), le.isNullOrUndef(e.value) ? a += e.yLabel : a += e.value, a
              },
              labelColor: function (e, t) {
                var a = t.getDatasetMeta(e.datasetIndex),
                  n = a.data[e.index],
                  r = n._view;
                return {
                  borderColor: r.borderColor,
                  backgroundColor: r.backgroundColor
                }
              },
              labelTextColor: function () {
                return this._options.bodyFontColor
              },
              afterLabel: le.noop,
              afterBody: le.noop,
              beforeFooter: le.noop,
              footer: le.noop,
              afterFooter: le.noop
            }
          }
        });
        var Sa = {
          average: function (e) {
            if (!e.length) return !1;
            var t, a, n = 0,
              r = 0,
              i = 0;
            for (t = 0, a = e.length; t < a; ++t) {
              var s = e[t];
              if (s && s.hasValue()) {
                var o = s.tooltipPosition();
                n += o.x, r += o.y, ++i
              }
            }
            return {
              x: n / i,
              y: r / i
            }
          },
          nearest: function (e, t) {
            var a, n, r, i = t.x,
              s = t.y,
              o = Number.POSITIVE_INFINITY;
            for (a = 0, n = e.length; a < n; ++a) {
              var d = e[a];
              if (d && d.hasValue()) {
                var l = d.getCenterPoint(),
                  u = le.distanceBetweenPoints(t, l);
                u < o && (o = u, r = d)
              }
            }
            if (r) {
              var c = r.tooltipPosition();
              i = c.x, s = c.y
            }
            return {
              x: i,
              y: s
            }
          }
        };

        function Ha(e, t) {
          return t && (le.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
        }

        function ja(e) {
          return ("string" === typeof e || e instanceof String) && e.indexOf("\n") > -1 ? e.split("\n") : e
        }

        function Pa(e) {
          var t = e._xScale,
            a = e._yScale || e._scale,
            n = e._index,
            r = e._datasetIndex,
            i = e._chart.getDatasetMeta(r).controller,
            s = i._getIndexScale(),
            o = i._getValueScale();
          return {
            xLabel: t ? t.getLabelForIndex(n, r) : "",
            yLabel: a ? a.getLabelForIndex(n, r) : "",
            label: s ? "" + s.getLabelForIndex(n, r) : "",
            value: o ? "" + o.getLabelForIndex(n, r) : "",
            index: n,
            datasetIndex: r,
            x: e._model.x,
            y: e._model.y
          }
        }

        function Oa(e) {
          var t = Q.global;
          return {
            xPadding: e.xPadding,
            yPadding: e.yPadding,
            xAlign: e.xAlign,
            yAlign: e.yAlign,
            rtl: e.rtl,
            textDirection: e.textDirection,
            bodyFontColor: e.bodyFontColor,
            _bodyFontFamily: xa(e.bodyFontFamily, t.defaultFontFamily),
            _bodyFontStyle: xa(e.bodyFontStyle, t.defaultFontStyle),
            _bodyAlign: e.bodyAlign,
            bodyFontSize: xa(e.bodyFontSize, t.defaultFontSize),
            bodySpacing: e.bodySpacing,
            titleFontColor: e.titleFontColor,
            _titleFontFamily: xa(e.titleFontFamily, t.defaultFontFamily),
            _titleFontStyle: xa(e.titleFontStyle, t.defaultFontStyle),
            titleFontSize: xa(e.titleFontSize, t.defaultFontSize),
            _titleAlign: e.titleAlign,
            titleSpacing: e.titleSpacing,
            titleMarginBottom: e.titleMarginBottom,
            footerFontColor: e.footerFontColor,
            _footerFontFamily: xa(e.footerFontFamily, t.defaultFontFamily),
            _footerFontStyle: xa(e.footerFontStyle, t.defaultFontStyle),
            footerFontSize: xa(e.footerFontSize, t.defaultFontSize),
            _footerAlign: e.footerAlign,
            footerSpacing: e.footerSpacing,
            footerMarginTop: e.footerMarginTop,
            caretSize: e.caretSize,
            cornerRadius: e.cornerRadius,
            backgroundColor: e.backgroundColor,
            opacity: 0,
            legendColorBackground: e.multiKeyBackground,
            displayColors: e.displayColors,
            borderColor: e.borderColor,
            borderWidth: e.borderWidth
          }
        }

        function Aa(e, t) {
          var a = e._chart.ctx,
            n = 2 * t.yPadding,
            r = 0,
            i = t.body,
            s = i.reduce((function (e, t) {
              return e + t.before.length + t.lines.length + t.after.length
            }), 0);
          s += t.beforeBody.length + t.afterBody.length;
          var o = t.title.length,
            d = t.footer.length,
            l = t.titleFontSize,
            u = t.bodyFontSize,
            c = t.footerFontSize;
          n += o * l, n += o ? (o - 1) * t.titleSpacing : 0, n += o ? t.titleMarginBottom : 0, n += s * u, n += s ? (s - 1) * t.bodySpacing : 0, n += d ? t.footerMarginTop : 0, n += d * c, n += d ? (d - 1) * t.footerSpacing : 0;
          var _ = 0,
            m = function (e) {
              r = Math.max(r, a.measureText(e).width + _)
            };
          return a.font = le.fontString(l, t._titleFontStyle, t._titleFontFamily), le.each(t.title, m), a.font = le.fontString(u, t._bodyFontStyle, t._bodyFontFamily), le.each(t.beforeBody.concat(t.afterBody), m), _ = t.displayColors ? u + 2 : 0, le.each(i, (function (e) {
            le.each(e.before, m), le.each(e.lines, m), le.each(e.after, m)
          })), _ = 0, a.font = le.fontString(c, t._footerFontStyle, t._footerFontFamily), le.each(t.footer, m), r += 2 * t.xPadding, {
            width: r,
            height: n
          }
        }

        function Ca(e, t) {
          var a, n, r, i, s, o = e._model,
            d = e._chart,
            l = e._chart.chartArea,
            u = "center",
            c = "center";
          o.y < t.height ? c = "top" : o.y > d.height - t.height && (c = "bottom");
          var _ = (l.left + l.right) / 2,
            m = (l.top + l.bottom) / 2;
          "center" === c ? (a = function (e) {
            return e <= _
          }, n = function (e) {
            return e > _
          }) : (a = function (e) {
            return e <= t.width / 2
          }, n = function (e) {
            return e >= d.width - t.width / 2
          }), r = function (e) {
            return e + t.width + o.caretSize + o.caretPadding > d.width
          }, i = function (e) {
            return e - t.width - o.caretSize - o.caretPadding < 0
          }, s = function (e) {
            return e <= m ? "top" : "bottom"
          }, a(o.x) ? (u = "left", r(o.x) && (u = "center", c = s(o.y))) : n(o.x) && (u = "right", i(o.x) && (u = "center", c = s(o.y)));
          var h = e._options;
          return {
            xAlign: h.xAlign ? h.xAlign : u,
            yAlign: h.yAlign ? h.yAlign : c
          }
        }

        function Fa(e, t, a, n) {
          var r = e.x,
            i = e.y,
            s = e.caretSize,
            o = e.caretPadding,
            d = e.cornerRadius,
            l = a.xAlign,
            u = a.yAlign,
            c = s + o,
            _ = d + o;
          return "right" === l ? r -= t.width : "center" === l && (r -= t.width / 2, r + t.width > n.width && (r = n.width - t.width), r < 0 && (r = 0)), "top" === u ? i += c : i -= "bottom" === u ? t.height + c : t.height / 2, "center" === u ? "left" === l ? r += c : "right" === l && (r -= c) : "left" === l ? r -= _ : "right" === l && (r += _), {
            x: r,
            y: i
          }
        }

        function Ea(e, t) {
          return "center" === t ? e.x + e.width / 2 : "right" === t ? e.x + e.width - e.xPadding : e.x + e.xPadding
        }

        function Wa(e) {
          return Ha([], ja(e))
        }
        var Ia = ye.extend({
            initialize: function () {
              this._model = Oa(this._options), this._lastActive = []
            },
            getTitle: function () {
              var e = this,
                t = e._options,
                a = t.callbacks,
                n = a.beforeTitle.apply(e, arguments),
                r = a.title.apply(e, arguments),
                i = a.afterTitle.apply(e, arguments),
                s = [];
              return s = Ha(s, ja(n)), s = Ha(s, ja(r)), s = Ha(s, ja(i)), s
            },
            getBeforeBody: function () {
              return Wa(this._options.callbacks.beforeBody.apply(this, arguments))
            },
            getBody: function (e, t) {
              var a = this,
                n = a._options.callbacks,
                r = [];
              return le.each(e, (function (e) {
                var i = {
                  before: [],
                  lines: [],
                  after: []
                };
                Ha(i.before, ja(n.beforeLabel.call(a, e, t))), Ha(i.lines, n.label.call(a, e, t)), Ha(i.after, ja(n.afterLabel.call(a, e, t))), r.push(i)
              })), r
            },
            getAfterBody: function () {
              return Wa(this._options.callbacks.afterBody.apply(this, arguments))
            },
            getFooter: function () {
              var e = this,
                t = e._options.callbacks,
                a = t.beforeFooter.apply(e, arguments),
                n = t.footer.apply(e, arguments),
                r = t.afterFooter.apply(e, arguments),
                i = [];
              return i = Ha(i, ja(a)), i = Ha(i, ja(n)), i = Ha(i, ja(r)), i
            },
            update: function (e) {
              var t, a, n = this,
                r = n._options,
                i = n._model,
                s = n._model = Oa(r),
                o = n._active,
                d = n._data,
                l = {
                  xAlign: i.xAlign,
                  yAlign: i.yAlign
                },
                u = {
                  x: i.x,
                  y: i.y
                },
                c = {
                  width: i.width,
                  height: i.height
                },
                _ = {
                  x: i.caretX,
                  y: i.caretY
                };
              if (o.length) {
                s.opacity = 1;
                var m = [],
                  h = [];
                _ = Sa[r.position].call(n, o, n._eventPosition);
                var f = [];
                for (t = 0, a = o.length; t < a; ++t) f.push(Pa(o[t]));
                r.filter && (f = f.filter((function (e) {
                  return r.filter(e, d)
                }))), r.itemSort && (f = f.sort((function (e, t) {
                  return r.itemSort(e, t, d)
                }))), le.each(f, (function (e) {
                  m.push(r.callbacks.labelColor.call(n, e, n._chart)), h.push(r.callbacks.labelTextColor.call(n, e, n._chart))
                })), s.title = n.getTitle(f, d), s.beforeBody = n.getBeforeBody(f, d), s.body = n.getBody(f, d), s.afterBody = n.getAfterBody(f, d), s.footer = n.getFooter(f, d), s.x = _.x, s.y = _.y, s.caretPadding = r.caretPadding, s.labelColors = m, s.labelTextColors = h, s.dataPoints = f, c = Aa(this, s), l = Ca(this, c), u = Fa(s, c, l, n._chart)
              } else s.opacity = 0;
              return s.xAlign = l.xAlign, s.yAlign = l.yAlign, s.x = u.x, s.y = u.y, s.width = c.width, s.height = c.height, s.caretX = _.x, s.caretY = _.y, n._model = s, e && r.custom && r.custom.call(n, s), n
            },
            drawCaret: function (e, t) {
              var a = this._chart.ctx,
                n = this._view,
                r = this.getCaretPosition(e, t, n);
              a.lineTo(r.x1, r.y1), a.lineTo(r.x2, r.y2), a.lineTo(r.x3, r.y3)
            },
            getCaretPosition: function (e, t, a) {
              var n, r, i, s, o, d, l = a.caretSize,
                u = a.cornerRadius,
                c = a.xAlign,
                _ = a.yAlign,
                m = e.x,
                h = e.y,
                f = t.width,
                p = t.height;
              if ("center" === _) o = h + p / 2, "left" === c ? (n = m, r = n - l, i = n, s = o + l, d = o - l) : (n = m + f, r = n + l, i = n, s = o - l, d = o + l);
              else if ("left" === c ? (r = m + u + l, n = r - l, i = r + l) : "right" === c ? (r = m + f - u - l, n = r - l, i = r + l) : (r = a.caretX, n = r - l, i = r + l), "top" === _) s = h, o = s - l, d = s;
              else {
                s = h + p, o = s + l, d = s;
                var y = i;
                i = n, n = y
              }
              return {
                x1: n,
                x2: r,
                x3: i,
                y1: s,
                y2: o,
                y3: d
              }
            },
            drawTitle: function (e, t, a) {
              var n, r, i, s = t.title,
                o = s.length;
              if (o) {
                var d = Ta(t.rtl, t.x, t.width);
                for (e.x = Ea(t, t._titleAlign), a.textAlign = d.textAlign(t._titleAlign), a.textBaseline = "middle", n = t.titleFontSize, r = t.titleSpacing, a.fillStyle = t.titleFontColor, a.font = le.fontString(n, t._titleFontStyle, t._titleFontFamily), i = 0; i < o; ++i) a.fillText(s[i], d.x(e.x), e.y + n / 2), e.y += n + r, i + 1 === o && (e.y += t.titleMarginBottom - r)
              }
            },
            drawBody: function (e, t, a) {
              var n, r, i, s, o, d, l, u, c = t.bodyFontSize,
                _ = t.bodySpacing,
                m = t._bodyAlign,
                h = t.body,
                f = t.displayColors,
                p = 0,
                y = f ? Ea(t, "left") : 0,
                M = Ta(t.rtl, t.x, t.width),
                g = function (t) {
                  a.fillText(t, M.x(e.x + p), e.y + c / 2), e.y += c + _
                },
                v = M.textAlign(m);
              for (a.textAlign = m, a.textBaseline = "middle", a.font = le.fontString(c, t._bodyFontStyle, t._bodyFontFamily), e.x = Ea(t, v), a.fillStyle = t.bodyFontColor, le.each(t.beforeBody, g), p = f && "right" !== v ? "center" === m ? c / 2 + 1 : c + 2 : 0, o = 0, l = h.length; o < l; ++o) {
                for (n = h[o], r = t.labelTextColors[o], i = t.labelColors[o], a.fillStyle = r, le.each(n.before, g), s = n.lines, d = 0, u = s.length; d < u; ++d) {
                  if (f) {
                    var L = M.x(y);
                    a.fillStyle = t.legendColorBackground, a.fillRect(M.leftForLtr(L, c), e.y, c, c), a.lineWidth = 1, a.strokeStyle = i.borderColor, a.strokeRect(M.leftForLtr(L, c), e.y, c, c), a.fillStyle = i.backgroundColor, a.fillRect(M.leftForLtr(M.xPlus(L, 1), c - 2), e.y + 1, c - 2, c - 2), a.fillStyle = r
                  }
                  g(s[d])
                }
                le.each(n.after, g)
              }
              p = 0, le.each(t.afterBody, g), e.y -= _
            },
            drawFooter: function (e, t, a) {
              var n, r, i = t.footer,
                s = i.length;
              if (s) {
                var o = Ta(t.rtl, t.x, t.width);
                for (e.x = Ea(t, t._footerAlign), e.y += t.footerMarginTop, a.textAlign = o.textAlign(t._footerAlign), a.textBaseline = "middle", n = t.footerFontSize, a.fillStyle = t.footerFontColor, a.font = le.fontString(n, t._footerFontStyle, t._footerFontFamily), r = 0; r < s; ++r) a.fillText(i[r], o.x(e.x), e.y + n / 2), e.y += n + t.footerSpacing
              }
            },
            drawBackground: function (e, t, a, n) {
              a.fillStyle = t.backgroundColor, a.strokeStyle = t.borderColor, a.lineWidth = t.borderWidth;
              var r = t.xAlign,
                i = t.yAlign,
                s = e.x,
                o = e.y,
                d = n.width,
                l = n.height,
                u = t.cornerRadius;
              a.beginPath(), a.moveTo(s + u, o), "top" === i && this.drawCaret(e, n), a.lineTo(s + d - u, o), a.quadraticCurveTo(s + d, o, s + d, o + u), "center" === i && "right" === r && this.drawCaret(e, n), a.lineTo(s + d, o + l - u), a.quadraticCurveTo(s + d, o + l, s + d - u, o + l), "bottom" === i && this.drawCaret(e, n), a.lineTo(s + u, o + l), a.quadraticCurveTo(s, o + l, s, o + l - u), "center" === i && "left" === r && this.drawCaret(e, n), a.lineTo(s, o + u), a.quadraticCurveTo(s, o, s + u, o), a.closePath(), a.fill(), t.borderWidth > 0 && a.stroke()
            },
            draw: function () {
              var e = this._chart.ctx,
                t = this._view;
              if (0 !== t.opacity) {
                var a = {
                    width: t.width,
                    height: t.height
                  },
                  n = {
                    x: t.x,
                    y: t.y
                  },
                  r = Math.abs(t.opacity < .001) ? 0 : t.opacity,
                  i = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
                this._options.enabled && i && (e.save(), e.globalAlpha = r, this.drawBackground(n, t, e, a), n.y += t.yPadding, le.rtl.overrideTextDirection(e, t.textDirection), this.drawTitle(n, t, e), this.drawBody(n, t, e), this.drawFooter(n, t, e), le.rtl.restoreTextDirection(e, t.textDirection), e.restore())
              }
            },
            handleEvent: function (e) {
              var t = this,
                a = t._options,
                n = !1;
              return t._lastActive = t._lastActive || [], "mouseout" === e.type ? t._active = [] : (t._active = t._chart.getElementsAtEventForMode(e, a.mode, a), a.reverse && t._active.reverse()), n = !le.arrayEquals(t._active, t._lastActive), n && (t._lastActive = t._active, (a.enabled || a.custom) && (t._eventPosition = {
                x: e.x,
                y: e.y
              }, t.update(!0), t.pivot())), n
            }
          }),
          za = Sa,
          Na = Ia;
        Na.positioners = za;
        var Ra = le.valueOrDefault;

        function Va() {
          return le.merge({}, [].slice.call(arguments), {
            merger: function (e, t, a, n) {
              if ("xAxes" === e || "yAxes" === e) {
                var r, i, s, o = a[e].length;
                for (t[e] || (t[e] = []), r = 0; r < o; ++r) s = a[e][r], i = Ra(s.type, "xAxes" === e ? "category" : "linear"), r >= t[e].length && t[e].push({}), !t[e][r].type || s.type && s.type !== t[e][r].type ? le.merge(t[e][r], [wa.getScaleDefaults(i), s]) : le.merge(t[e][r], s)
              } else le._merger(e, t, a, n)
            }
          })
        }

        function Ba() {
          return le.merge({}, [].slice.call(arguments), {
            merger: function (e, t, a, n) {
              var r = t[e] || {},
                i = a[e];
              "scales" === e ? t[e] = Va(r, i) : "scale" === e ? t[e] = le.merge(r, [wa.getScaleDefaults(i.type), i]) : le._merger(e, t, a, n)
            }
          })
        }

        function Ja(e) {
          e = e || {};
          var t = e.data = e.data || {};
          return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = Ba(Q.global, Q[e.type], e.options || {}), e
        }

        function Ua(e) {
          var t = e.options;
          le.each(e.scales, (function (t) {
            qt.removeBox(e, t)
          })), t = Ba(Q.global, Q[e.config.type], t), e.options = e.config.options = t, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = t.tooltips, e.tooltip.initialize()
        }

        function Ga(e, t, a) {
          var n, r = function (e) {
            return e.id === n
          };
          do {
            n = t + a++
          } while (le.findIndex(e, r) >= 0);
          return n
        }

        function qa(e) {
          return "top" === e || "bottom" === e
        }

        function $a(e, t) {
          return function (a, n) {
            return a[e] === n[e] ? a[t] - n[t] : a[e] - n[e]
          }
        }
        Q._set("global", {
          elements: {},
          events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
          hover: {
            onHover: null,
            mode: "nearest",
            intersect: !0,
            animationDuration: 400
          },
          onClick: null,
          maintainAspectRatio: !0,
          responsive: !0,
          responsiveAnimationDuration: 0
        });
        var Ka = function (e, t) {
          return this.construct(e, t), this
        };
        le.extend(Ka.prototype, {
          construct: function (e, t) {
            var a = this;
            t = Ja(t);
            var n = Ya.acquireContext(e, t),
              r = n && n.canvas,
              i = r && r.height,
              s = r && r.width;
            a.id = le.uid(), a.ctx = n, a.canvas = r, a.config = t, a.width = s, a.height = i, a.aspectRatio = i ? s / i : null, a.options = t.options, a._bufferedRender = !1, a._layers = [], a.chart = a, a.controller = a, Ka.instances[a.id] = a, Object.defineProperty(a, "data", {
              get: function () {
                return a.config.data
              },
              set: function (e) {
                a.config.data = e
              }
            }), n && r ? (a.initialize(), a.update()) : console.error("Failed to create chart: can't acquire context from the given item")
          },
          initialize: function () {
            var e = this;
            return Da.notify(e, "beforeInit"), le.retinaScale(e, e.options.devicePixelRatio), e.bindEvents(), e.options.responsive && e.resize(!0), e.initToolTip(), Da.notify(e, "afterInit"), e
          },
          clear: function () {
            return le.canvas.clear(this), this
          },
          stop: function () {
            return ve.cancelAnimation(this), this
          },
          resize: function (e) {
            var t = this,
              a = t.options,
              n = t.canvas,
              r = a.maintainAspectRatio && t.aspectRatio || null,
              i = Math.max(0, Math.floor(le.getMaximumWidth(n))),
              s = Math.max(0, Math.floor(r ? i / r : le.getMaximumHeight(n)));
            if ((t.width !== i || t.height !== s) && (n.width = t.width = i, n.height = t.height = s, n.style.width = i + "px", n.style.height = s + "px", le.retinaScale(t, a.devicePixelRatio), !e)) {
              var o = {
                width: i,
                height: s
              };
              Da.notify(t, "resize", [o]), a.onResize && a.onResize(t, o), t.stop(), t.update({
                duration: a.responsiveAnimationDuration
              })
            }
          },
          ensureScalesHaveIDs: function () {
            var e = this.options,
              t = e.scales || {},
              a = e.scale;
            le.each(t.xAxes, (function (e, a) {
              e.id || (e.id = Ga(t.xAxes, "x-axis-", a))
            })), le.each(t.yAxes, (function (e, a) {
              e.id || (e.id = Ga(t.yAxes, "y-axis-", a))
            })), a && (a.id = a.id || "scale")
          },
          buildOrUpdateScales: function () {
            var e = this,
              t = e.options,
              a = e.scales || {},
              n = [],
              r = Object.keys(a).reduce((function (e, t) {
                return e[t] = !1, e
              }), {});
            t.scales && (n = n.concat((t.scales.xAxes || []).map((function (e) {
              return {
                options: e,
                dtype: "category",
                dposition: "bottom"
              }
            })), (t.scales.yAxes || []).map((function (e) {
              return {
                options: e,
                dtype: "linear",
                dposition: "left"
              }
            })))), t.scale && n.push({
              options: t.scale,
              dtype: "radialLinear",
              isDefault: !0,
              dposition: "chartArea"
            }), le.each(n, (function (t) {
              var n = t.options,
                i = n.id,
                s = Ra(n.type, t.dtype);
              qa(n.position) !== qa(t.dposition) && (n.position = t.dposition), r[i] = !0;
              var o = null;
              if (i in a && a[i].type === s) o = a[i], o.options = n, o.ctx = e.ctx, o.chart = e;
              else {
                var d = wa.getScaleConstructor(s);
                if (!d) return;
                o = new d({
                  id: i,
                  type: s,
                  options: n,
                  ctx: e.ctx,
                  chart: e
                }), a[o.id] = o
              }
              o.mergeTicksOptions(), t.isDefault && (e.scale = o)
            })), le.each(r, (function (e, t) {
              e || delete a[t]
            })), e.scales = a, wa.addScalesToLayout(this)
          },
          buildOrUpdateControllers: function () {
            var e, t, a = this,
              n = [],
              r = a.data.datasets;
            for (e = 0, t = r.length; e < t; e++) {
              var i = r[e],
                s = a.getDatasetMeta(e),
                o = i.type || a.config.type;
              if (s.type && s.type !== o && (a.destroyDatasetMeta(e), s = a.getDatasetMeta(e)), s.type = o, s.order = i.order || 0, s.index = e, s.controller) s.controller.updateIndex(e), s.controller.linkScales();
              else {
                var d = Tt[s.type];
                if (void 0 === d) throw new Error('"' + s.type + '" is not a chart type.');
                s.controller = new d(a, e), n.push(s.controller)
              }
            }
            return n
          },
          resetElements: function () {
            var e = this;
            le.each(e.data.datasets, (function (t, a) {
              e.getDatasetMeta(a).controller.reset()
            }), e)
          },
          reset: function () {
            this.resetElements(), this.tooltip.initialize()
          },
          update: function (e) {
            var t, a, n = this;
            if (e && "object" === typeof e || (e = {
                duration: e,
                lazy: arguments[1]
              }), Ua(n), Da._invalidate(n), !1 !== Da.notify(n, "beforeUpdate")) {
              n.tooltip._data = n.data;
              var r = n.buildOrUpdateControllers();
              for (t = 0, a = n.data.datasets.length; t < a; t++) n.getDatasetMeta(t).controller.buildOrUpdateElements();
              n.updateLayout(), n.options.animation && n.options.animation.duration && le.each(r, (function (e) {
                e.reset()
              })), n.updateDatasets(), n.tooltip.initialize(), n.lastActive = [], Da.notify(n, "afterUpdate"), n._layers.sort($a("z", "_idx")), n._bufferedRender ? n._bufferedRequest = {
                duration: e.duration,
                easing: e.easing,
                lazy: e.lazy
              } : n.render(e)
            }
          },
          updateLayout: function () {
            var e = this;
            !1 !== Da.notify(e, "beforeLayout") && (qt.update(this, this.width, this.height), e._layers = [], le.each(e.boxes, (function (t) {
              t._configure && t._configure(), e._layers.push.apply(e._layers, t._layers())
            }), e), e._layers.forEach((function (e, t) {
              e._idx = t
            })), Da.notify(e, "afterScaleUpdate"), Da.notify(e, "afterLayout"))
          },
          updateDatasets: function () {
            var e = this;
            if (!1 !== Da.notify(e, "beforeDatasetsUpdate")) {
              for (var t = 0, a = e.data.datasets.length; t < a; ++t) e.updateDataset(t);
              Da.notify(e, "afterDatasetsUpdate")
            }
          },
          updateDataset: function (e) {
            var t = this,
              a = t.getDatasetMeta(e),
              n = {
                meta: a,
                index: e
              };
            !1 !== Da.notify(t, "beforeDatasetUpdate", [n]) && (a.controller._update(), Da.notify(t, "afterDatasetUpdate", [n]))
          },
          render: function (e) {
            var t = this;
            e && "object" === typeof e || (e = {
              duration: e,
              lazy: arguments[1]
            });
            var a = t.options.animation,
              n = Ra(e.duration, a && a.duration),
              r = e.lazy;
            if (!1 !== Da.notify(t, "beforeRender")) {
              var i = function (e) {
                Da.notify(t, "afterRender"), le.callback(a && a.onComplete, [e], t)
              };
              if (a && n) {
                var s = new ge({
                  numSteps: n / 16.66,
                  easing: e.easing || a.easing,
                  render: function (e, t) {
                    var a = le.easing.effects[t.easing],
                      n = t.currentStep,
                      r = n / t.numSteps;
                    e.draw(a(r), r, n)
                  },
                  onAnimationProgress: a.onProgress,
                  onAnimationComplete: i
                });
                ve.addAnimation(t, s, n, r)
              } else t.draw(), i(new ge({
                numSteps: 0,
                chart: t
              }));
              return t
            }
          },
          draw: function (e) {
            var t, a, n = this;
            if (n.clear(), le.isNullOrUndef(e) && (e = 1), n.transition(e), !(n.width <= 0 || n.height <= 0) && !1 !== Da.notify(n, "beforeDraw", [e])) {
              for (a = n._layers, t = 0; t < a.length && a[t].z <= 0; ++t) a[t].draw(n.chartArea);
              for (n.drawDatasets(e); t < a.length; ++t) a[t].draw(n.chartArea);
              n._drawTooltip(e), Da.notify(n, "afterDraw", [e])
            }
          },
          transition: function (e) {
            for (var t = this, a = 0, n = (t.data.datasets || []).length; a < n; ++a) t.isDatasetVisible(a) && t.getDatasetMeta(a).controller.transition(e);
            t.tooltip.transition(e)
          },
          _getSortedDatasetMetas: function (e) {
            var t, a, n = this,
              r = n.data.datasets || [],
              i = [];
            for (t = 0, a = r.length; t < a; ++t) e && !n.isDatasetVisible(t) || i.push(n.getDatasetMeta(t));
            return i.sort($a("order", "index")), i
          },
          _getSortedVisibleDatasetMetas: function () {
            return this._getSortedDatasetMetas(!0)
          },
          drawDatasets: function (e) {
            var t, a, n = this;
            if (!1 !== Da.notify(n, "beforeDatasetsDraw", [e])) {
              for (t = n._getSortedVisibleDatasetMetas(), a = t.length - 1; a >= 0; --a) n.drawDataset(t[a], e);
              Da.notify(n, "afterDatasetsDraw", [e])
            }
          },
          drawDataset: function (e, t) {
            var a = this,
              n = {
                meta: e,
                index: e.index,
                easingValue: t
              };
            !1 !== Da.notify(a, "beforeDatasetDraw", [n]) && (e.controller.draw(t), Da.notify(a, "afterDatasetDraw", [n]))
          },
          _drawTooltip: function (e) {
            var t = this,
              a = t.tooltip,
              n = {
                tooltip: a,
                easingValue: e
              };
            !1 !== Da.notify(t, "beforeTooltipDraw", [n]) && (a.draw(), Da.notify(t, "afterTooltipDraw", [n]))
          },
          getElementAtEvent: function (e) {
            return Ct.modes.single(this, e)
          },
          getElementsAtEvent: function (e) {
            return Ct.modes.label(this, e, {
              intersect: !0
            })
          },
          getElementsAtXAxis: function (e) {
            return Ct.modes["x-axis"](this, e, {
              intersect: !0
            })
          },
          getElementsAtEventForMode: function (e, t, a) {
            var n = Ct.modes[t];
            return "function" === typeof n ? n(this, e, a) : []
          },
          getDatasetAtEvent: function (e) {
            return Ct.modes.dataset(this, e, {
              intersect: !0
            })
          },
          getDatasetMeta: function (e) {
            var t = this,
              a = t.data.datasets[e];
            a._meta || (a._meta = {});
            var n = a._meta[t.id];
            return n || (n = a._meta[t.id] = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null,
              order: a.order || 0,
              index: e
            }), n
          },
          getVisibleDatasetCount: function () {
            for (var e = 0, t = 0, a = this.data.datasets.length; t < a; ++t) this.isDatasetVisible(t) && e++;
            return e
          },
          isDatasetVisible: function (e) {
            var t = this.getDatasetMeta(e);
            return "boolean" === typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden
          },
          generateLegend: function () {
            return this.options.legendCallback(this)
          },
          destroyDatasetMeta: function (e) {
            var t = this.id,
              a = this.data.datasets[e],
              n = a._meta && a._meta[t];
            n && (n.controller.destroy(), delete a._meta[t])
          },
          destroy: function () {
            var e, t, a = this,
              n = a.canvas;
            for (a.stop(), e = 0, t = a.data.datasets.length; e < t; ++e) a.destroyDatasetMeta(e);
            n && (a.unbindEvents(), le.canvas.clear(a), Ya.releaseContext(a.ctx), a.canvas = null, a.ctx = null), Da.notify(a, "destroy"), delete Ka.instances[a.id]
          },
          toBase64Image: function () {
            return this.canvas.toDataURL.apply(this.canvas, arguments)
          },
          initToolTip: function () {
            var e = this;
            e.tooltip = new Na({
              _chart: e,
              _chartInstance: e,
              _data: e.data,
              _options: e.options.tooltips
            }, e)
          },
          bindEvents: function () {
            var e = this,
              t = e._listeners = {},
              a = function () {
                e.eventHandler.apply(e, arguments)
              };
            le.each(e.options.events, (function (n) {
              Ya.addEventListener(e, n, a), t[n] = a
            })), e.options.responsive && (a = function () {
              e.resize()
            }, Ya.addEventListener(e, "resize", a), t.resize = a)
          },
          unbindEvents: function () {
            var e = this,
              t = e._listeners;
            t && (delete e._listeners, le.each(t, (function (t, a) {
              Ya.removeEventListener(e, a, t)
            })))
          },
          updateHoverStyle: function (e, t, a) {
            var n, r, i, s = a ? "set" : "remove";
            for (r = 0, i = e.length; r < i; ++r) n = e[r], n && this.getDatasetMeta(n._datasetIndex).controller[s + "HoverStyle"](n);
            "dataset" === t && this.getDatasetMeta(e[0]._datasetIndex).controller["_" + s + "DatasetHoverStyle"]()
          },
          eventHandler: function (e) {
            var t = this,
              a = t.tooltip;
            if (!1 !== Da.notify(t, "beforeEvent", [e])) {
              t._bufferedRender = !0, t._bufferedRequest = null;
              var n = t.handleEvent(e);
              a && (n = a._start ? a.handleEvent(e) : n | a.handleEvent(e)), Da.notify(t, "afterEvent", [e]);
              var r = t._bufferedRequest;
              return r ? t.render(r) : n && !t.animating && (t.stop(), t.render({
                duration: t.options.hover.animationDuration,
                lazy: !0
              })), t._bufferedRender = !1, t._bufferedRequest = null, t
            }
          },
          handleEvent: function (e) {
            var t = this,
              a = t.options || {},
              n = a.hover,
              r = !1;
            return t.lastActive = t.lastActive || [], "mouseout" === e.type ? t.active = [] : t.active = t.getElementsAtEventForMode(e, n.mode, n), le.callback(a.onHover || a.hover.onHover, [e.native, t.active], t), "mouseup" !== e.type && "click" !== e.type || a.onClick && a.onClick.call(t, e.native, t.active), t.lastActive.length && t.updateHoverStyle(t.lastActive, n.mode, !1), t.active.length && n.mode && t.updateHoverStyle(t.active, n.mode, !0), r = !le.arrayEquals(t.active, t.lastActive), t.lastActive = t.active, r
          }
        }), Ka.instances = {};
        var Qa = Ka;
        Ka.Controller = Ka, Ka.types = {}, le.configMerge = Ba, le.scaleMerge = Va;
        var Za = function () {
          function e(e, t, a) {
            var n;
            return "string" === typeof e ? (n = parseInt(e, 10), -1 !== e.indexOf("%") && (n = n / 100 * t.parentNode[a])) : n = e, n
          }

          function t(e) {
            return void 0 !== e && null !== e && "none" !== e
          }

          function a(a, n, r) {
            var i = document.defaultView,
              s = le._getParentNode(a),
              o = i.getComputedStyle(a)[n],
              d = i.getComputedStyle(s)[n],
              l = t(o),
              u = t(d),
              c = Number.POSITIVE_INFINITY;
            return l || u ? Math.min(l ? e(o, a, r) : c, u ? e(d, s, r) : c) : "none"
          }
          le.where = function (e, t) {
            if (le.isArray(e) && Array.prototype.filter) return e.filter(t);
            var a = [];
            return le.each(e, (function (e) {
              t(e) && a.push(e)
            })), a
          }, le.findIndex = Array.prototype.findIndex ? function (e, t, a) {
            return e.findIndex(t, a)
          } : function (e, t, a) {
            a = void 0 === a ? e : a;
            for (var n = 0, r = e.length; n < r; ++n)
              if (t.call(a, e[n], n, e)) return n;
            return -1
          }, le.findNextWhere = function (e, t, a) {
            le.isNullOrUndef(a) && (a = -1);
            for (var n = a + 1; n < e.length; n++) {
              var r = e[n];
              if (t(r)) return r
            }
          }, le.findPreviousWhere = function (e, t, a) {
            le.isNullOrUndef(a) && (a = e.length);
            for (var n = a - 1; n >= 0; n--) {
              var r = e[n];
              if (t(r)) return r
            }
          }, le.isNumber = function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
          }, le.almostEquals = function (e, t, a) {
            return Math.abs(e - t) < a
          }, le.almostWhole = function (e, t) {
            var a = Math.round(e);
            return a - t <= e && a + t >= e
          }, le.max = function (e) {
            return e.reduce((function (e, t) {
              return isNaN(t) ? e : Math.max(e, t)
            }), Number.NEGATIVE_INFINITY)
          }, le.min = function (e) {
            return e.reduce((function (e, t) {
              return isNaN(t) ? e : Math.min(e, t)
            }), Number.POSITIVE_INFINITY)
          }, le.sign = Math.sign ? function (e) {
            return Math.sign(e)
          } : function (e) {
            return e = +e, 0 === e || isNaN(e) ? e : e > 0 ? 1 : -1
          }, le.toRadians = function (e) {
            return e * (Math.PI / 180)
          }, le.toDegrees = function (e) {
            return e * (180 / Math.PI)
          }, le._decimalPlaces = function (e) {
            if (le.isFinite(e)) {
              var t = 1,
                a = 0;
              while (Math.round(e * t) / t !== e) t *= 10, a++;
              return a
            }
          }, le.getAngleFromPoint = function (e, t) {
            var a = t.x - e.x,
              n = t.y - e.y,
              r = Math.sqrt(a * a + n * n),
              i = Math.atan2(n, a);
            return i < -.5 * Math.PI && (i += 2 * Math.PI), {
              angle: i,
              distance: r
            }
          }, le.distanceBetweenPoints = function (e, t) {
            return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          }, le.aliasPixel = function (e) {
            return e % 2 === 0 ? 0 : .5
          }, le._alignPixel = function (e, t, a) {
            var n = e.currentDevicePixelRatio,
              r = a / 2;
            return Math.round((t - r) * n) / n + r
          }, le.splineCurve = function (e, t, a, n) {
            var r = e.skip ? t : e,
              i = t,
              s = a.skip ? t : a,
              o = Math.sqrt(Math.pow(i.x - r.x, 2) + Math.pow(i.y - r.y, 2)),
              d = Math.sqrt(Math.pow(s.x - i.x, 2) + Math.pow(s.y - i.y, 2)),
              l = o / (o + d),
              u = d / (o + d);
            l = isNaN(l) ? 0 : l, u = isNaN(u) ? 0 : u;
            var c = n * l,
              _ = n * u;
            return {
              previous: {
                x: i.x - c * (s.x - r.x),
                y: i.y - c * (s.y - r.y)
              },
              next: {
                x: i.x + _ * (s.x - r.x),
                y: i.y + _ * (s.y - r.y)
              }
            }
          }, le.EPSILON = Number.EPSILON || 1e-14, le.splineCurveMonotone = function (e) {
            var t, a, n, r, i, s, o, d, l, u = (e || []).map((function (e) {
                return {
                  model: e._model,
                  deltaK: 0,
                  mK: 0
                }
              })),
              c = u.length;
            for (t = 0; t < c; ++t)
              if (n = u[t], !n.model.skip) {
                if (a = t > 0 ? u[t - 1] : null, r = t < c - 1 ? u[t + 1] : null, r && !r.model.skip) {
                  var _ = r.model.x - n.model.x;
                  n.deltaK = 0 !== _ ? (r.model.y - n.model.y) / _ : 0
                }!a || a.model.skip ? n.mK = n.deltaK : !r || r.model.skip ? n.mK = a.deltaK : this.sign(a.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (a.deltaK + n.deltaK) / 2
              } for (t = 0; t < c - 1; ++t) n = u[t], r = u[t + 1], n.model.skip || r.model.skip || (le.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = r.mK = 0 : (i = n.mK / n.deltaK, s = r.mK / n.deltaK, d = Math.pow(i, 2) + Math.pow(s, 2), d <= 9 || (o = 3 / Math.sqrt(d), n.mK = i * o * n.deltaK, r.mK = s * o * n.deltaK)));
            for (t = 0; t < c; ++t) n = u[t], n.model.skip || (a = t > 0 ? u[t - 1] : null, r = t < c - 1 ? u[t + 1] : null, a && !a.model.skip && (l = (n.model.x - a.model.x) / 3, n.model.controlPointPreviousX = n.model.x - l, n.model.controlPointPreviousY = n.model.y - l * n.mK), r && !r.model.skip && (l = (r.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + l, n.model.controlPointNextY = n.model.y + l * n.mK))
          }, le.nextItem = function (e, t, a) {
            return a ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]
          }, le.previousItem = function (e, t, a) {
            return a ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1]
          }, le.niceNum = function (e, t) {
            var a, n = Math.floor(le.log10(e)),
              r = e / Math.pow(10, n);
            return a = t ? r < 1.5 ? 1 : r < 3 ? 2 : r < 7 ? 5 : 10 : r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10, a * Math.pow(10, n)
          }, le.requestAnimFrame = function () {
            return "undefined" === typeof window ? function (e) {
              e()
            } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
              return window.setTimeout(e, 1e3 / 60)
            }
          }(), le.getRelativePosition = function (e, t) {
            var a, n, r = e.originalEvent || e,
              i = e.target || e.srcElement,
              s = i.getBoundingClientRect(),
              o = r.touches;
            o && o.length > 0 ? (a = o[0].clientX, n = o[0].clientY) : (a = r.clientX, n = r.clientY);
            var d = parseFloat(le.getStyle(i, "padding-left")),
              l = parseFloat(le.getStyle(i, "padding-top")),
              u = parseFloat(le.getStyle(i, "padding-right")),
              c = parseFloat(le.getStyle(i, "padding-bottom")),
              _ = s.right - s.left - d - u,
              m = s.bottom - s.top - l - c;
            return a = Math.round((a - s.left - d) / _ * i.width / t.currentDevicePixelRatio), n = Math.round((n - s.top - l) / m * i.height / t.currentDevicePixelRatio), {
              x: a,
              y: n
            }
          }, le.getConstraintWidth = function (e) {
            return a(e, "max-width", "clientWidth")
          }, le.getConstraintHeight = function (e) {
            return a(e, "max-height", "clientHeight")
          }, le._calculatePadding = function (e, t, a) {
            return t = le.getStyle(e, t), t.indexOf("%") > -1 ? a * parseInt(t, 10) / 100 : parseInt(t, 10)
          }, le._getParentNode = function (e) {
            var t = e.parentNode;
            return t && "[object ShadowRoot]" === t.toString() && (t = t.host), t
          }, le.getMaximumWidth = function (e) {
            var t = le._getParentNode(e);
            if (!t) return e.clientWidth;
            var a = t.clientWidth,
              n = le._calculatePadding(t, "padding-left", a),
              r = le._calculatePadding(t, "padding-right", a),
              i = a - n - r,
              s = le.getConstraintWidth(e);
            return isNaN(s) ? i : Math.min(i, s)
          }, le.getMaximumHeight = function (e) {
            var t = le._getParentNode(e);
            if (!t) return e.clientHeight;
            var a = t.clientHeight,
              n = le._calculatePadding(t, "padding-top", a),
              r = le._calculatePadding(t, "padding-bottom", a),
              i = a - n - r,
              s = le.getConstraintHeight(e);
            return isNaN(s) ? i : Math.min(i, s)
          }, le.getStyle = function (e, t) {
            return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t)
          }, le.retinaScale = function (e, t) {
            var a = e.currentDevicePixelRatio = t || "undefined" !== typeof window && window.devicePixelRatio || 1;
            if (1 !== a) {
              var n = e.canvas,
                r = e.height,
                i = e.width;
              n.height = r * a, n.width = i * a, e.ctx.scale(a, a), n.style.height || n.style.width || (n.style.height = r + "px", n.style.width = i + "px")
            }
          }, le.fontString = function (e, t, a) {
            return t + " " + e + "px " + a
          }, le.longestText = function (e, t, a, n) {
            n = n || {};
            var r = n.data = n.data || {},
              i = n.garbageCollect = n.garbageCollect || [];
            n.font !== t && (r = n.data = {}, i = n.garbageCollect = [], n.font = t), e.font = t;
            var s, o, d, l, u, c = 0,
              _ = a.length;
            for (s = 0; s < _; s++)
              if (l = a[s], void 0 !== l && null !== l && !0 !== le.isArray(l)) c = le.measureText(e, r, i, c, l);
              else if (le.isArray(l))
              for (o = 0, d = l.length; o < d; o++) u = l[o], void 0 === u || null === u || le.isArray(u) || (c = le.measureText(e, r, i, c, u));
            var m = i.length / 2;
            if (m > a.length) {
              for (s = 0; s < m; s++) delete r[i[s]];
              i.splice(0, m)
            }
            return c
          }, le.measureText = function (e, t, a, n, r) {
            var i = t[r];
            return i || (i = t[r] = e.measureText(r).width, a.push(r)), i > n && (n = i), n
          }, le.numberOfLabelLines = function (e) {
            var t = 1;
            return le.each(e, (function (e) {
              le.isArray(e) && e.length > t && (t = e.length)
            })), t
          }, le.color = E ? function (e) {
            return e instanceof CanvasGradient && (e = Q.global.defaultColor), E(e)
          } : function (e) {
            return console.error("Color.js not found!"), e
          }, le.getHoverColor = function (e) {
            return e instanceof CanvasPattern || e instanceof CanvasGradient ? e : le.color(e).saturate(.5).darken(.1).rgbString()
          }
        };

        function Xa() {
          throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
        }

        function en(e) {
          this.options = e || {}
        }
        le.extend(en.prototype, {
          formats: Xa,
          parse: Xa,
          format: Xa,
          add: Xa,
          diff: Xa,
          startOf: Xa,
          endOf: Xa,
          _create: function (e) {
            return e
          }
        }), en.override = function (e) {
          le.extend(en.prototype, e)
        };
        var tn = en,
          an = {
            _date: tn
          },
          nn = {
            formatters: {
              values: function (e) {
                return le.isArray(e) ? e : "" + e
              },
              linear: function (e, t, a) {
                var n = a.length > 3 ? a[2] - a[1] : a[1] - a[0];
                Math.abs(n) > 1 && e !== Math.floor(e) && (n = e - Math.floor(e));
                var r = le.log10(Math.abs(n)),
                  i = "";
                if (0 !== e) {
                  var s = Math.max(Math.abs(a[0]), Math.abs(a[a.length - 1]));
                  if (s < 1e-4) {
                    var o = le.log10(Math.abs(e)),
                      d = Math.floor(o) - Math.floor(r);
                    d = Math.max(Math.min(d, 20), 0), i = e.toExponential(d)
                  } else {
                    var l = -1 * Math.floor(r);
                    l = Math.max(Math.min(l, 20), 0), i = e.toFixed(l)
                  }
                } else i = "0";
                return i
              },
              logarithmic: function (e, t, a) {
                var n = e / Math.pow(10, Math.floor(le.log10(e)));
                return 0 === e ? "0" : 1 === n || 2 === n || 5 === n || 0 === t || t === a.length - 1 ? e.toExponential() : ""
              }
            }
          },
          rn = le.isArray,
          sn = le.isNullOrUndef,
          on = le.valueOrDefault,
          dn = le.valueAtIndexOrDefault;

        function ln(e, t) {
          for (var a = [], n = e.length / t, r = 0, i = e.length; r < i; r += n) a.push(e[Math.floor(r)]);
          return a
        }

        function un(e, t, a) {
          var n, r = e.getTicks().length,
            i = Math.min(t, r - 1),
            s = e.getPixelForTick(i),
            o = e._startPixel,
            d = e._endPixel,
            l = 1e-6;
          if (!(a && (n = 1 === r ? Math.max(s - o, d - s) : 0 === t ? (e.getPixelForTick(1) - s) / 2 : (s - e.getPixelForTick(i - 1)) / 2, s += i < t ? n : -n, s < o - l || s > d + l))) return s
        }

        function cn(e, t) {
          le.each(e, (function (e) {
            var a, n = e.gc,
              r = n.length / 2;
            if (r > t) {
              for (a = 0; a < r; ++a) delete e.data[n[a]];
              n.splice(0, r)
            }
          }))
        }

        function _n(e, t, a, n) {
          var r, i, s, o, d, l, u, c, _, m, h, f, p, y = a.length,
            M = [],
            g = [],
            v = [];
          for (r = 0; r < y; ++r) {
            if (o = a[r].label, d = a[r].major ? t.major : t.minor, e.font = l = d.string, u = n[l] = n[l] || {
                data: {},
                gc: []
              }, c = d.lineHeight, _ = m = 0, sn(o) || rn(o)) {
              if (rn(o))
                for (i = 0, s = o.length; i < s; ++i) h = o[i], sn(h) || rn(h) || (_ = le.measureText(e, u.data, u.gc, _, h), m += c)
            } else _ = le.measureText(e, u.data, u.gc, _, o), m = c;
            M.push(_), g.push(m), v.push(c / 2)
          }

          function L(e) {
            return {
              width: M[e] || 0,
              height: g[e] || 0,
              offset: v[e] || 0
            }
          }
          return cn(n, y), f = M.indexOf(Math.max.apply(null, M)), p = g.indexOf(Math.max.apply(null, g)), {
            first: L(0),
            last: L(y - 1),
            widest: L(f),
            highest: L(p)
          }
        }

        function mn(e) {
          return e.drawTicks ? e.tickMarkLength : 0
        }

        function hn(e) {
          var t, a;
          return e.display ? (t = le.options._parseFont(e), a = le.options.toPadding(e.padding), t.lineHeight + a.height) : 0
        }

        function fn(e, t) {
          return le.extend(le.options._parseFont({
            fontFamily: on(t.fontFamily, e.fontFamily),
            fontSize: on(t.fontSize, e.fontSize),
            fontStyle: on(t.fontStyle, e.fontStyle),
            lineHeight: on(t.lineHeight, e.lineHeight)
          }), {
            color: le.options.resolve([t.fontColor, e.fontColor, Q.global.defaultFontColor])
          })
        }

        function pn(e) {
          var t = fn(e, e.minor),
            a = e.major.enabled ? fn(e, e.major) : t;
          return {
            minor: t,
            major: a
          }
        }

        function yn(e) {
          var t, a, n, r = [];
          for (a = 0, n = e.length; a < n; ++a) t = e[a], "undefined" !== typeof t._index && r.push(t);
          return r
        }

        function Mn(e) {
          var t, a, n = e.length;
          if (n < 2) return !1;
          for (a = e[0], t = 1; t < n; ++t)
            if (e[t] - e[t - 1] !== a) return !1;
          return a
        }

        function gn(e, t, a, n) {
          var r, i, s, o, d = Mn(e),
            l = (t.length - 1) / n;
          if (!d) return Math.max(l, 1);
          for (r = le.math._factorize(d), s = 0, o = r.length - 1; s < o; s++)
            if (i = r[s], i > l) return i;
          return Math.max(l, 1)
        }

        function vn(e) {
          var t, a, n = [];
          for (t = 0, a = e.length; t < a; t++) e[t].major && n.push(t);
          return n
        }

        function Ln(e, t, a) {
          var n, r, i = 0,
            s = t[0];
          for (a = Math.ceil(a), n = 0; n < e.length; n++) r = e[n], n === s ? (r._index = n, i++, s = t[i * a]) : delete r.label
        }

        function bn(e, t, a, n) {
          var r, i, s, o, d = on(a, 0),
            l = Math.min(on(n, e.length), e.length),
            u = 0;
          t = Math.ceil(t), n && (r = n - a, t = r / Math.floor(r / t)), o = d;
          while (o < 0) u++, o = Math.round(d + u * t);
          for (i = Math.max(d, 0); i < l; i++) s = e[i], i === o ? (s._index = i, u++, o = Math.round(d + u * t)) : delete s.label
        }
        Q._set("scale", {
          display: !0,
          position: "left",
          offset: !1,
          gridLines: {
            display: !0,
            color: "rgba(0,0,0,0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0
          },
          scaleLabel: {
            display: !1,
            labelString: "",
            padding: {
              top: 4,
              bottom: 4
            }
          },
          ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 0,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: nn.formatters.values,
            minor: {},
            major: {}
          }
        });
        var kn = ye.extend({
          zeroLineIndex: 0,
          getPadding: function () {
            var e = this;
            return {
              left: e.paddingLeft || 0,
              top: e.paddingTop || 0,
              right: e.paddingRight || 0,
              bottom: e.paddingBottom || 0
            }
          },
          getTicks: function () {
            return this._ticks
          },
          _getLabels: function () {
            var e = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels || []
          },
          mergeTicksOptions: function () {},
          beforeUpdate: function () {
            le.callback(this.options.beforeUpdate, [this])
          },
          update: function (e, t, a) {
            var n, r, i, s, o, d = this,
              l = d.options.ticks,
              u = l.sampleSize;
            if (d.beforeUpdate(), d.maxWidth = e, d.maxHeight = t, d.margins = le.extend({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
              }, a), d._ticks = null, d.ticks = null, d._labelSizes = null, d._maxLabelLines = 0, d.longestLabelWidth = 0, d.longestTextCache = d.longestTextCache || {}, d._gridLineItems = null, d._labelItems = null, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), s = d.buildTicks() || [], s = d.afterBuildTicks(s) || s, (!s || !s.length) && d.ticks)
              for (s = [], n = 0, r = d.ticks.length; n < r; ++n) s.push({
                value: d.ticks[n],
                major: !1
              });
            return d._ticks = s, o = u < s.length, i = d._convertTicksToLabels(o ? ln(s, u) : s), d._configure(), d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d._ticksToDraw = l.display && (l.autoSkip || "auto" === l.source) ? d._autoSkip(s) : s, o && (i = d._convertTicksToLabels(d._ticksToDraw)), d.ticks = i, d.afterUpdate(), d.minSize
          },
          _configure: function () {
            var e, t, a = this,
              n = a.options.ticks.reverse;
            a.isHorizontal() ? (e = a.left, t = a.right) : (e = a.top, t = a.bottom, n = !n), a._startPixel = e, a._endPixel = t, a._reversePixels = n, a._length = t - e
          },
          afterUpdate: function () {
            le.callback(this.options.afterUpdate, [this])
          },
          beforeSetDimensions: function () {
            le.callback(this.options.beforeSetDimensions, [this])
          },
          setDimensions: function () {
            var e = this;
            e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0
          },
          afterSetDimensions: function () {
            le.callback(this.options.afterSetDimensions, [this])
          },
          beforeDataLimits: function () {
            le.callback(this.options.beforeDataLimits, [this])
          },
          determineDataLimits: le.noop,
          afterDataLimits: function () {
            le.callback(this.options.afterDataLimits, [this])
          },
          beforeBuildTicks: function () {
            le.callback(this.options.beforeBuildTicks, [this])
          },
          buildTicks: le.noop,
          afterBuildTicks: function (e) {
            var t = this;
            return rn(e) && e.length ? le.callback(t.options.afterBuildTicks, [t, e]) : (t.ticks = le.callback(t.options.afterBuildTicks, [t, t.ticks]) || t.ticks, e)
          },
          beforeTickToLabelConversion: function () {
            le.callback(this.options.beforeTickToLabelConversion, [this])
          },
          convertTicksToLabels: function () {
            var e = this,
              t = e.options.ticks;
            e.ticks = e.ticks.map(t.userCallback || t.callback, this)
          },
          afterTickToLabelConversion: function () {
            le.callback(this.options.afterTickToLabelConversion, [this])
          },
          beforeCalculateTickRotation: function () {
            le.callback(this.options.beforeCalculateTickRotation, [this])
          },
          calculateTickRotation: function () {
            var e, t, a, n, r, i, s, o = this,
              d = o.options,
              l = d.ticks,
              u = o.getTicks().length,
              c = l.minRotation || 0,
              _ = l.maxRotation,
              m = c;
            !o._isVisible() || !l.display || c >= _ || u <= 1 || !o.isHorizontal() ? o.labelRotation = c : (e = o._getLabelSizes(), t = e.widest.width, a = e.highest.height - e.highest.offset, n = Math.min(o.maxWidth, o.chart.width - t), r = d.offset ? o.maxWidth / u : n / (u - 1), t + 6 > r && (r = n / (u - (d.offset ? .5 : 1)), i = o.maxHeight - mn(d.gridLines) - l.padding - hn(d.scaleLabel), s = Math.sqrt(t * t + a * a), m = le.toDegrees(Math.min(Math.asin(Math.min((e.highest.height + 6) / r, 1)), Math.asin(Math.min(i / s, 1)) - Math.asin(a / s))), m = Math.max(c, Math.min(_, m))), o.labelRotation = m)
          },
          afterCalculateTickRotation: function () {
            le.callback(this.options.afterCalculateTickRotation, [this])
          },
          beforeFit: function () {
            le.callback(this.options.beforeFit, [this])
          },
          fit: function () {
            var e = this,
              t = e.minSize = {
                width: 0,
                height: 0
              },
              a = e.chart,
              n = e.options,
              r = n.ticks,
              i = n.scaleLabel,
              s = n.gridLines,
              o = e._isVisible(),
              d = "bottom" === n.position,
              l = e.isHorizontal();
            if (l ? t.width = e.maxWidth : o && (t.width = mn(s) + hn(i)), l ? o && (t.height = mn(s) + hn(i)) : t.height = e.maxHeight, r.display && o) {
              var u = pn(r),
                c = e._getLabelSizes(),
                _ = c.first,
                m = c.last,
                h = c.widest,
                f = c.highest,
                p = .4 * u.minor.lineHeight,
                y = r.padding;
              if (l) {
                var M = 0 !== e.labelRotation,
                  g = le.toRadians(e.labelRotation),
                  v = Math.cos(g),
                  L = Math.sin(g),
                  b = L * h.width + v * (f.height - (M ? f.offset : 0)) + (M ? 0 : p);
                t.height = Math.min(e.maxHeight, t.height + b + y);
                var k, Y, D = e.getPixelForTick(0) - e.left,
                  w = e.right - e.getPixelForTick(e.getTicks().length - 1);
                M ? (k = d ? v * _.width + L * _.offset : L * (_.height - _.offset), Y = d ? L * (m.height - m.offset) : v * m.width + L * m.offset) : (k = _.width / 2, Y = m.width / 2), e.paddingLeft = Math.max((k - D) * e.width / (e.width - D), 0) + 3, e.paddingRight = Math.max((Y - w) * e.width / (e.width - w), 0) + 3
              } else {
                var x = r.mirror ? 0 : h.width + y + p;
                t.width = Math.min(e.maxWidth, t.width + x), e.paddingTop = _.height / 2, e.paddingBottom = m.height / 2
              }
            }
            e.handleMargins(), l ? (e.width = e._length = a.width - e.margins.left - e.margins.right, e.height = t.height) : (e.width = t.width, e.height = e._length = a.height - e.margins.top - e.margins.bottom)
          },
          handleMargins: function () {
            var e = this;
            e.margins && (e.margins.left = Math.max(e.paddingLeft, e.margins.left), e.margins.top = Math.max(e.paddingTop, e.margins.top), e.margins.right = Math.max(e.paddingRight, e.margins.right), e.margins.bottom = Math.max(e.paddingBottom, e.margins.bottom))
          },
          afterFit: function () {
            le.callback(this.options.afterFit, [this])
          },
          isHorizontal: function () {
            var e = this.options.position;
            return "top" === e || "bottom" === e
          },
          isFullWidth: function () {
            return this.options.fullWidth
          },
          getRightValue: function (e) {
            if (sn(e)) return NaN;
            if (("number" === typeof e || e instanceof Number) && !isFinite(e)) return NaN;
            if (e)
              if (this.isHorizontal()) {
                if (void 0 !== e.x) return this.getRightValue(e.x)
              } else if (void 0 !== e.y) return this.getRightValue(e.y);
            return e
          },
          _convertTicksToLabels: function (e) {
            var t, a, n, r = this;
            for (r.ticks = e.map((function (e) {
                return e.value
              })), r.beforeTickToLabelConversion(), t = r.convertTicksToLabels(e) || r.ticks, r.afterTickToLabelConversion(), a = 0, n = e.length; a < n; ++a) e[a].label = t[a];
            return t
          },
          _getLabelSizes: function () {
            var e = this,
              t = e._labelSizes;
            return t || (e._labelSizes = t = _n(e.ctx, pn(e.options.ticks), e.getTicks(), e.longestTextCache), e.longestLabelWidth = t.widest.width), t
          },
          _parseValue: function (e) {
            var t, a, n, r;
            return rn(e) ? (t = +this.getRightValue(e[0]), a = +this.getRightValue(e[1]), n = Math.min(t, a), r = Math.max(t, a)) : (e = +this.getRightValue(e), t = void 0, a = e, n = e, r = e), {
              min: n,
              max: r,
              start: t,
              end: a
            }
          },
          _getScaleLabel: function (e) {
            var t = this._parseValue(e);
            return void 0 !== t.start ? "[" + t.start + ", " + t.end + "]" : +this.getRightValue(e)
          },
          getLabelForIndex: le.noop,
          getPixelForValue: le.noop,
          getValueForPixel: le.noop,
          getPixelForTick: function (e) {
            var t = this,
              a = t.options.offset,
              n = t._ticks.length,
              r = 1 / Math.max(n - (a ? 0 : 1), 1);
            return e < 0 || e > n - 1 ? null : t.getPixelForDecimal(e * r + (a ? r / 2 : 0))
          },
          getPixelForDecimal: function (e) {
            var t = this;
            return t._reversePixels && (e = 1 - e), t._startPixel + e * t._length
          },
          getDecimalForPixel: function (e) {
            var t = (e - this._startPixel) / this._length;
            return this._reversePixels ? 1 - t : t
          },
          getBasePixel: function () {
            return this.getPixelForValue(this.getBaseValue())
          },
          getBaseValue: function () {
            var e = this,
              t = e.min,
              a = e.max;
            return e.beginAtZero ? 0 : t < 0 && a < 0 ? a : t > 0 && a > 0 ? t : 0
          },
          _autoSkip: function (e) {
            var t, a, n, r, i = this,
              s = i.options.ticks,
              o = i._length,
              d = s.maxTicksLimit || o / i._tickSize() + 1,
              l = s.major.enabled ? vn(e) : [],
              u = l.length,
              c = l[0],
              _ = l[u - 1];
            if (u > d) return Ln(e, l, u / d), yn(e);
            if (n = gn(l, e, o, d), u > 0) {
              for (t = 0, a = u - 1; t < a; t++) bn(e, n, l[t], l[t + 1]);
              return r = u > 1 ? (_ - c) / (u - 1) : null, bn(e, n, le.isNullOrUndef(r) ? 0 : c - r, c), bn(e, n, _, le.isNullOrUndef(r) ? e.length : _ + r), yn(e)
            }
            return bn(e, n), yn(e)
          },
          _tickSize: function () {
            var e = this,
              t = e.options.ticks,
              a = le.toRadians(e.labelRotation),
              n = Math.abs(Math.cos(a)),
              r = Math.abs(Math.sin(a)),
              i = e._getLabelSizes(),
              s = t.autoSkipPadding || 0,
              o = i ? i.widest.width + s : 0,
              d = i ? i.highest.height + s : 0;
            return e.isHorizontal() ? d * n > o * r ? o / n : d / r : d * r < o * n ? d / n : o / r
          },
          _isVisible: function () {
            var e, t, a, n = this,
              r = n.chart,
              i = n.options.display;
            if ("auto" !== i) return !!i;
            for (e = 0, t = r.data.datasets.length; e < t; ++e)
              if (r.isDatasetVisible(e) && (a = r.getDatasetMeta(e), a.xAxisID === n.id || a.yAxisID === n.id)) return !0;
            return !1
          },
          _computeGridLineItems: function (e) {
            var t, a, n, r, i, s, o, d, l, u, c, _, m, h, f, p, y, M = this,
              g = M.chart,
              v = M.options,
              L = v.gridLines,
              b = v.position,
              k = L.offsetGridLines,
              Y = M.isHorizontal(),
              D = M._ticksToDraw,
              w = D.length + (k ? 1 : 0),
              x = mn(L),
              T = [],
              S = L.drawBorder ? dn(L.lineWidth, 0, 0) : 0,
              H = S / 2,
              j = le._alignPixel,
              P = function (e) {
                return j(g, e, S)
              };
            for ("top" === b ? (t = P(M.bottom), o = M.bottom - x, l = t - H, c = P(e.top) + H, m = e.bottom) : "bottom" === b ? (t = P(M.top), c = e.top, m = P(e.bottom) - H, o = t + H, l = M.top + x) : "left" === b ? (t = P(M.right), s = M.right - x, d = t - H, u = P(e.left) + H, _ = e.right) : (t = P(M.left), u = e.left, _ = P(e.right) - H, s = t + H, d = M.left + x), a = 0; a < w; ++a) n = D[a] || {}, sn(n.label) && a < D.length || (a === M.zeroLineIndex && v.offset === k ? (h = L.zeroLineWidth, f = L.zeroLineColor, p = L.zeroLineBorderDash || [], y = L.zeroLineBorderDashOffset || 0) : (h = dn(L.lineWidth, a, 1), f = dn(L.color, a, "rgba(0,0,0,0.1)"), p = L.borderDash || [], y = L.borderDashOffset || 0), r = un(M, n._index || a, k), void 0 !== r && (i = j(g, r, h), Y ? s = d = u = _ = i : o = l = c = m = i, T.push({
              tx1: s,
              ty1: o,
              tx2: d,
              ty2: l,
              x1: u,
              y1: c,
              x2: _,
              y2: m,
              width: h,
              color: f,
              borderDash: p,
              borderDashOffset: y
            })));
            return T.ticksLength = w, T.borderValue = t, T
          },
          _computeLabelItems: function () {
            var e, t, a, n, r, i, s, o, d, l, u, c, _ = this,
              m = _.options,
              h = m.ticks,
              f = m.position,
              p = h.mirror,
              y = _.isHorizontal(),
              M = _._ticksToDraw,
              g = pn(h),
              v = h.padding,
              L = mn(m.gridLines),
              b = -le.toRadians(_.labelRotation),
              k = [];
            for ("top" === f ? (i = _.bottom - L - v, s = b ? "left" : "center") : "bottom" === f ? (i = _.top + L + v, s = b ? "right" : "center") : "left" === f ? (r = _.right - (p ? 0 : L) - v, s = p ? "left" : "right") : (r = _.left + (p ? 0 : L) + v, s = p ? "right" : "left"), e = 0, t = M.length; e < t; ++e) a = M[e], n = a.label, sn(n) || (o = _.getPixelForTick(a._index || e) + h.labelOffset, d = a.major ? g.major : g.minor, l = d.lineHeight, u = rn(n) ? n.length : 1, y ? (r = o, c = "top" === f ? ((b ? 1 : .5) - u) * l : (b ? 0 : .5) * l) : (i = o, c = (1 - u) * l / 2), k.push({
              x: r,
              y: i,
              rotation: b,
              label: n,
              font: d,
              textOffset: c,
              textAlign: s
            }));
            return k
          },
          _drawGrid: function (e) {
            var t = this,
              a = t.options.gridLines;
            if (a.display) {
              var n, r, i, s, o, d = t.ctx,
                l = t.chart,
                u = le._alignPixel,
                c = a.drawBorder ? dn(a.lineWidth, 0, 0) : 0,
                _ = t._gridLineItems || (t._gridLineItems = t._computeGridLineItems(e));
              for (i = 0, s = _.length; i < s; ++i) o = _[i], n = o.width, r = o.color, n && r && (d.save(), d.lineWidth = n, d.strokeStyle = r, d.setLineDash && (d.setLineDash(o.borderDash), d.lineDashOffset = o.borderDashOffset), d.beginPath(), a.drawTicks && (d.moveTo(o.tx1, o.ty1), d.lineTo(o.tx2, o.ty2)), a.drawOnChartArea && (d.moveTo(o.x1, o.y1), d.lineTo(o.x2, o.y2)), d.stroke(), d.restore());
              if (c) {
                var m, h, f, p, y = c,
                  M = dn(a.lineWidth, _.ticksLength - 1, 1),
                  g = _.borderValue;
                t.isHorizontal() ? (m = u(l, t.left, y) - y / 2, h = u(l, t.right, M) + M / 2, f = p = g) : (f = u(l, t.top, y) - y / 2, p = u(l, t.bottom, M) + M / 2, m = h = g), d.lineWidth = c, d.strokeStyle = dn(a.color, 0), d.beginPath(), d.moveTo(m, f), d.lineTo(h, p), d.stroke()
              }
            }
          },
          _drawLabels: function () {
            var e = this,
              t = e.options.ticks;
            if (t.display) {
              var a, n, r, i, s, o, d, l, u = e.ctx,
                c = e._labelItems || (e._labelItems = e._computeLabelItems());
              for (a = 0, r = c.length; a < r; ++a) {
                if (s = c[a], o = s.font, u.save(), u.translate(s.x, s.y), u.rotate(s.rotation), u.font = o.string, u.fillStyle = o.color, u.textBaseline = "middle", u.textAlign = s.textAlign, d = s.label, l = s.textOffset, rn(d))
                  for (n = 0, i = d.length; n < i; ++n) u.fillText("" + d[n], 0, l), l += o.lineHeight;
                else u.fillText(d, 0, l);
                u.restore()
              }
            }
          },
          _drawTitle: function () {
            var e = this,
              t = e.ctx,
              a = e.options,
              n = a.scaleLabel;
            if (n.display) {
              var r, i, s = on(n.fontColor, Q.global.defaultFontColor),
                o = le.options._parseFont(n),
                d = le.options.toPadding(n.padding),
                l = o.lineHeight / 2,
                u = a.position,
                c = 0;
              if (e.isHorizontal()) r = e.left + e.width / 2, i = "bottom" === u ? e.bottom - l - d.bottom : e.top + l + d.top;
              else {
                var _ = "left" === u;
                r = _ ? e.left + l + d.top : e.right - l - d.top, i = e.top + e.height / 2, c = _ ? -.5 * Math.PI : .5 * Math.PI
              }
              t.save(), t.translate(r, i), t.rotate(c), t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = s, t.font = o.string, t.fillText(n.labelString, 0, 0), t.restore()
            }
          },
          draw: function (e) {
            var t = this;
            t._isVisible() && (t._drawGrid(e), t._drawTitle(), t._drawLabels())
          },
          _layers: function () {
            var e = this,
              t = e.options,
              a = t.ticks && t.ticks.z || 0,
              n = t.gridLines && t.gridLines.z || 0;
            return e._isVisible() && a !== n && e.draw === e._draw ? [{
              z: n,
              draw: function () {
                e._drawGrid.apply(e, arguments), e._drawTitle.apply(e, arguments)
              }
            }, {
              z: a,
              draw: function () {
                e._drawLabels.apply(e, arguments)
              }
            }] : [{
              z: a,
              draw: function () {
                e.draw.apply(e, arguments)
              }
            }]
          },
          _getMatchingVisibleMetas: function (e) {
            var t = this,
              a = t.isHorizontal();
            return t.chart._getSortedVisibleDatasetMetas().filter((function (n) {
              return (!e || n.type === e) && (a ? n.xAxisID === t.id : n.yAxisID === t.id)
            }))
          }
        });
        kn.prototype._draw = kn.prototype.draw;
        var Yn = kn,
          Dn = le.isNullOrUndef,
          wn = {
            position: "bottom"
          },
          xn = Yn.extend({
            determineDataLimits: function () {
              var e, t = this,
                a = t._getLabels(),
                n = t.options.ticks,
                r = n.min,
                i = n.max,
                s = 0,
                o = a.length - 1;
              void 0 !== r && (e = a.indexOf(r), e >= 0 && (s = e)), void 0 !== i && (e = a.indexOf(i), e >= 0 && (o = e)), t.minIndex = s, t.maxIndex = o, t.min = a[s], t.max = a[o]
            },
            buildTicks: function () {
              var e = this,
                t = e._getLabels(),
                a = e.minIndex,
                n = e.maxIndex;
              e.ticks = 0 === a && n === t.length - 1 ? t : t.slice(a, n + 1)
            },
            getLabelForIndex: function (e, t) {
              var a = this,
                n = a.chart;
              return n.getDatasetMeta(t).controller._getValueScaleId() === a.id ? a.getRightValue(n.data.datasets[t].data[e]) : a._getLabels()[e]
            },
            _configure: function () {
              var e = this,
                t = e.options.offset,
                a = e.ticks;
              Yn.prototype._configure.call(e), e.isHorizontal() || (e._reversePixels = !e._reversePixels), a && (e._startValue = e.minIndex - (t ? .5 : 0), e._valueRange = Math.max(a.length - (t ? 0 : 1), 1))
            },
            getPixelForValue: function (e, t, a) {
              var n, r, i, s = this;
              return Dn(t) || Dn(a) || (e = s.chart.data.datasets[a].data[t]), Dn(e) || (n = s.isHorizontal() ? e.x : e.y), (void 0 !== n || void 0 !== e && isNaN(t)) && (r = s._getLabels(), e = le.valueOrDefault(n, e), i = r.indexOf(e), t = -1 !== i ? i : t, isNaN(t) && (t = e)), s.getPixelForDecimal((t - s._startValue) / s._valueRange)
            },
            getPixelForTick: function (e) {
              var t = this.ticks;
              return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e], e + this.minIndex)
            },
            getValueForPixel: function (e) {
              var t = this,
                a = Math.round(t._startValue + t.getDecimalForPixel(e) * t._valueRange);
              return Math.min(Math.max(a, 0), t.ticks.length - 1)
            },
            getBasePixel: function () {
              return this.bottom
            }
          }),
          Tn = wn;
        xn._defaults = Tn;
        var Sn = le.noop,
          Hn = le.isNullOrUndef;

        function jn(e, t) {
          var a, n, r, i, s = [],
            o = 1e-14,
            d = e.stepSize,
            l = d || 1,
            u = e.maxTicks - 1,
            c = e.min,
            _ = e.max,
            m = e.precision,
            h = t.min,
            f = t.max,
            p = le.niceNum((f - h) / u / l) * l;
          if (p < o && Hn(c) && Hn(_)) return [h, f];
          i = Math.ceil(f / p) - Math.floor(h / p), i > u && (p = le.niceNum(i * p / u / l) * l), d || Hn(m) ? a = Math.pow(10, le._decimalPlaces(p)) : (a = Math.pow(10, m), p = Math.ceil(p * a) / a), n = Math.floor(h / p) * p, r = Math.ceil(f / p) * p, d && (!Hn(c) && le.almostWhole(c / p, p / 1e3) && (n = c), !Hn(_) && le.almostWhole(_ / p, p / 1e3) && (r = _)), i = (r - n) / p, i = le.almostEquals(i, Math.round(i), p / 1e3) ? Math.round(i) : Math.ceil(i), n = Math.round(n * a) / a, r = Math.round(r * a) / a, s.push(Hn(c) ? n : c);
          for (var y = 1; y < i; ++y) s.push(Math.round((n + y * p) * a) / a);
          return s.push(Hn(_) ? r : _), s
        }
        var Pn = Yn.extend({
            getRightValue: function (e) {
              return "string" === typeof e ? +e : Yn.prototype.getRightValue.call(this, e)
            },
            handleTickRangeOptions: function () {
              var e = this,
                t = e.options,
                a = t.ticks;
              if (a.beginAtZero) {
                var n = le.sign(e.min),
                  r = le.sign(e.max);
                n < 0 && r < 0 ? e.max = 0 : n > 0 && r > 0 && (e.min = 0)
              }
              var i = void 0 !== a.min || void 0 !== a.suggestedMin,
                s = void 0 !== a.max || void 0 !== a.suggestedMax;
              void 0 !== a.min ? e.min = a.min : void 0 !== a.suggestedMin && (null === e.min ? e.min = a.suggestedMin : e.min = Math.min(e.min, a.suggestedMin)), void 0 !== a.max ? e.max = a.max : void 0 !== a.suggestedMax && (null === e.max ? e.max = a.suggestedMax : e.max = Math.max(e.max, a.suggestedMax)), i !== s && e.min >= e.max && (i ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, a.beginAtZero || e.min--)
            },
            getTickLimit: function () {
              var e, t = this,
                a = t.options.ticks,
                n = a.stepSize,
                r = a.maxTicksLimit;
              return n ? e = Math.ceil(t.max / n) - Math.floor(t.min / n) + 1 : (e = t._computeTickLimit(), r = r || 11), r && (e = Math.min(r, e)), e
            },
            _computeTickLimit: function () {
              return Number.POSITIVE_INFINITY
            },
            handleDirectionalChanges: Sn,
            buildTicks: function () {
              var e = this,
                t = e.options,
                a = t.ticks,
                n = e.getTickLimit();
              n = Math.max(2, n);
              var r = {
                  maxTicks: n,
                  min: a.min,
                  max: a.max,
                  precision: a.precision,
                  stepSize: le.valueOrDefault(a.fixedStepSize, a.stepSize)
                },
                i = e.ticks = jn(r, e);
              e.handleDirectionalChanges(), e.max = le.max(i), e.min = le.min(i), a.reverse ? (i.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max)
            },
            convertTicksToLabels: function () {
              var e = this;
              e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), Yn.prototype.convertTicksToLabels.call(e)
            },
            _configure: function () {
              var e, t = this,
                a = t.getTicks(),
                n = t.min,
                r = t.max;
              Yn.prototype._configure.call(t), t.options.offset && a.length && (e = (r - n) / Math.max(a.length - 1, 1) / 2, n -= e, r += e), t._startValue = n, t._endValue = r, t._valueRange = r - n
            }
          }),
          On = {
            position: "left",
            ticks: {
              callback: nn.formatters.linear
            }
          },
          An = 0,
          Cn = 1;

        function Fn(e, t, a) {
          var n = [a.type, void 0 === t && void 0 === a.stack ? a.index : "", a.stack].join(".");
          return void 0 === e[n] && (e[n] = {
            pos: [],
            neg: []
          }), e[n]
        }

        function En(e, t, a, n) {
          var r, i, s = e.options,
            o = s.stacked,
            d = Fn(t, o, a),
            l = d.pos,
            u = d.neg,
            c = n.length;
          for (r = 0; r < c; ++r) i = e._parseValue(n[r]), isNaN(i.min) || isNaN(i.max) || a.data[r].hidden || (l[r] = l[r] || 0, u[r] = u[r] || 0, s.relativePoints ? l[r] = 100 : i.min < 0 || i.max < 0 ? u[r] += i.min : l[r] += i.max)
        }

        function Wn(e, t, a) {
          var n, r, i = a.length;
          for (n = 0; n < i; ++n) r = e._parseValue(a[n]), isNaN(r.min) || isNaN(r.max) || t.data[n].hidden || (e.min = Math.min(e.min, r.min), e.max = Math.max(e.max, r.max))
        }
        var In = Pn.extend({
            determineDataLimits: function () {
              var e, t, a, n, r = this,
                i = r.options,
                s = r.chart,
                o = s.data.datasets,
                d = r._getMatchingVisibleMetas(),
                l = i.stacked,
                u = {},
                c = d.length;
              if (r.min = Number.POSITIVE_INFINITY, r.max = Number.NEGATIVE_INFINITY, void 0 === l)
                for (e = 0; !l && e < c; ++e) t = d[e], l = void 0 !== t.stack;
              for (e = 0; e < c; ++e) t = d[e], a = o[t.index].data, l ? En(r, u, t, a) : Wn(r, t, a);
              le.each(u, (function (e) {
                n = e.pos.concat(e.neg), r.min = Math.min(r.min, le.min(n)), r.max = Math.max(r.max, le.max(n))
              })), r.min = le.isFinite(r.min) && !isNaN(r.min) ? r.min : An, r.max = le.isFinite(r.max) && !isNaN(r.max) ? r.max : Cn, r.handleTickRangeOptions()
            },
            _computeTickLimit: function () {
              var e, t = this;
              return t.isHorizontal() ? Math.ceil(t.width / 40) : (e = le.options._parseFont(t.options.ticks), Math.ceil(t.height / e.lineHeight))
            },
            handleDirectionalChanges: function () {
              this.isHorizontal() || this.ticks.reverse()
            },
            getLabelForIndex: function (e, t) {
              return this._getScaleLabel(this.chart.data.datasets[t].data[e])
            },
            getPixelForValue: function (e) {
              var t = this;
              return t.getPixelForDecimal((+t.getRightValue(e) - t._startValue) / t._valueRange)
            },
            getValueForPixel: function (e) {
              return this._startValue + this.getDecimalForPixel(e) * this._valueRange
            },
            getPixelForTick: function (e) {
              var t = this.ticksAsNumbers;
              return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e])
            }
          }),
          zn = On;
        In._defaults = zn;
        var Nn = le.valueOrDefault,
          Rn = le.math.log10;

        function Vn(e, t) {
          var a, n, r = [],
            i = Nn(e.min, Math.pow(10, Math.floor(Rn(t.min)))),
            s = Math.floor(Rn(t.max)),
            o = Math.ceil(t.max / Math.pow(10, s));
          0 === i ? (a = Math.floor(Rn(t.minNotZero)), n = Math.floor(t.minNotZero / Math.pow(10, a)), r.push(i), i = n * Math.pow(10, a)) : (a = Math.floor(Rn(i)), n = Math.floor(i / Math.pow(10, a)));
          var d = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
          do {
            r.push(i), ++n, 10 === n && (n = 1, ++a, d = a >= 0 ? 1 : d), i = Math.round(n * Math.pow(10, a) * d) / d
          } while (a < s || a === s && n < o);
          var l = Nn(e.max, i);
          return r.push(l), r
        }
        var Bn = {
          position: "left",
          ticks: {
            callback: nn.formatters.logarithmic
          }
        };

        function Jn(e, t) {
          return le.isFinite(e) && e >= 0 ? e : t
        }
        var Un = Yn.extend({
            determineDataLimits: function () {
              var e, t, a, n, r, i, s = this,
                o = s.options,
                d = s.chart,
                l = d.data.datasets,
                u = s.isHorizontal();

              function c(e) {
                return u ? e.xAxisID === s.id : e.yAxisID === s.id
              }
              s.min = Number.POSITIVE_INFINITY, s.max = Number.NEGATIVE_INFINITY, s.minNotZero = Number.POSITIVE_INFINITY;
              var _ = o.stacked;
              if (void 0 === _)
                for (e = 0; e < l.length; e++)
                  if (t = d.getDatasetMeta(e), d.isDatasetVisible(e) && c(t) && void 0 !== t.stack) {
                    _ = !0;
                    break
                  } if (o.stacked || _) {
                var m = {};
                for (e = 0; e < l.length; e++) {
                  t = d.getDatasetMeta(e);
                  var h = [t.type, void 0 === o.stacked && void 0 === t.stack ? e : "", t.stack].join(".");
                  if (d.isDatasetVisible(e) && c(t))
                    for (void 0 === m[h] && (m[h] = []), n = l[e].data, r = 0, i = n.length; r < i; r++) {
                      var f = m[h];
                      a = s._parseValue(n[r]), isNaN(a.min) || isNaN(a.max) || t.data[r].hidden || a.min < 0 || a.max < 0 || (f[r] = f[r] || 0, f[r] += a.max)
                    }
                }
                le.each(m, (function (e) {
                  if (e.length > 0) {
                    var t = le.min(e),
                      a = le.max(e);
                    s.min = Math.min(s.min, t), s.max = Math.max(s.max, a)
                  }
                }))
              } else
                for (e = 0; e < l.length; e++)
                  if (t = d.getDatasetMeta(e), d.isDatasetVisible(e) && c(t))
                    for (n = l[e].data, r = 0, i = n.length; r < i; r++) a = s._parseValue(n[r]), isNaN(a.min) || isNaN(a.max) || t.data[r].hidden || a.min < 0 || a.max < 0 || (s.min = Math.min(a.min, s.min), s.max = Math.max(a.max, s.max), 0 !== a.min && (s.minNotZero = Math.min(a.min, s.minNotZero)));
              s.min = le.isFinite(s.min) ? s.min : null, s.max = le.isFinite(s.max) ? s.max : null, s.minNotZero = le.isFinite(s.minNotZero) ? s.minNotZero : null, this.handleTickRangeOptions()
            },
            handleTickRangeOptions: function () {
              var e = this,
                t = e.options.ticks,
                a = 1,
                n = 10;
              e.min = Jn(t.min, e.min), e.max = Jn(t.max, e.max), e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(Rn(e.min)) - 1), e.max = Math.pow(10, Math.floor(Rn(e.max)) + 1)) : (e.min = a, e.max = n)), null === e.min && (e.min = Math.pow(10, Math.floor(Rn(e.max)) - 1)), null === e.max && (e.max = 0 !== e.min ? Math.pow(10, Math.floor(Rn(e.min)) + 1) : n), null === e.minNotZero && (e.min > 0 ? e.minNotZero = e.min : e.max < 1 ? e.minNotZero = Math.pow(10, Math.floor(Rn(e.max))) : e.minNotZero = a)
            },
            buildTicks: function () {
              var e = this,
                t = e.options.ticks,
                a = !e.isHorizontal(),
                n = {
                  min: Jn(t.min),
                  max: Jn(t.max)
                },
                r = e.ticks = Vn(n, e);
              e.max = le.max(r), e.min = le.min(r), t.reverse ? (a = !a, e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max), a && r.reverse()
            },
            convertTicksToLabels: function () {
              this.tickValues = this.ticks.slice(), Yn.prototype.convertTicksToLabels.call(this)
            },
            getLabelForIndex: function (e, t) {
              return this._getScaleLabel(this.chart.data.datasets[t].data[e])
            },
            getPixelForTick: function (e) {
              var t = this.tickValues;
              return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e])
            },
            _getFirstTickValue: function (e) {
              var t = Math.floor(Rn(e)),
                a = Math.floor(e / Math.pow(10, t));
              return a * Math.pow(10, t)
            },
            _configure: function () {
              var e = this,
                t = e.min,
                a = 0;
              Yn.prototype._configure.call(e), 0 === t && (t = e._getFirstTickValue(e.minNotZero), a = Nn(e.options.ticks.fontSize, Q.global.defaultFontSize) / e._length), e._startValue = Rn(t), e._valueOffset = a, e._valueRange = (Rn(e.max) - Rn(t)) / (1 - a)
            },
            getPixelForValue: function (e) {
              var t = this,
                a = 0;
              return e = +t.getRightValue(e), e > t.min && e > 0 && (a = (Rn(e) - t._startValue) / t._valueRange + t._valueOffset), t.getPixelForDecimal(a)
            },
            getValueForPixel: function (e) {
              var t = this,
                a = t.getDecimalForPixel(e);
              return 0 === a && 0 === t.min ? 0 : Math.pow(10, t._startValue + (a - t._valueOffset) * t._valueRange)
            }
          }),
          Gn = Bn;
        Un._defaults = Gn;
        var qn = le.valueOrDefault,
          $n = le.valueAtIndexOrDefault,
          Kn = le.options.resolve,
          Qn = {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {
              display: !0,
              color: "rgba(0,0,0,0.1)",
              lineWidth: 1,
              borderDash: [],
              borderDashOffset: 0
            },
            gridLines: {
              circular: !1
            },
            ticks: {
              showLabelBackdrop: !0,
              backdropColor: "rgba(255,255,255,0.75)",
              backdropPaddingY: 2,
              backdropPaddingX: 2,
              callback: nn.formatters.linear
            },
            pointLabels: {
              display: !0,
              fontSize: 10,
              callback: function (e) {
                return e
              }
            }
          };

        function Zn(e) {
          var t = e.ticks;
          return t.display && e.display ? qn(t.fontSize, Q.global.defaultFontSize) + 2 * t.backdropPaddingY : 0
        }

        function Xn(e, t, a) {
          return le.isArray(a) ? {
            w: le.longestText(e, e.font, a),
            h: a.length * t
          } : {
            w: e.measureText(a).width,
            h: t
          }
        }

        function er(e, t, a, n, r) {
          return e === n || e === r ? {
            start: t - a / 2,
            end: t + a / 2
          } : e < n || e > r ? {
            start: t - a,
            end: t
          } : {
            start: t,
            end: t + a
          }
        }

        function tr(e) {
          var t, a, n, r = le.options._parseFont(e.options.pointLabels),
            i = {
              l: 0,
              r: e.width,
              t: 0,
              b: e.height - e.paddingTop
            },
            s = {};
          e.ctx.font = r.string, e._pointLabelSizes = [];
          var o = e.chart.data.labels.length;
          for (t = 0; t < o; t++) {
            n = e.getPointPosition(t, e.drawingArea + 5), a = Xn(e.ctx, r.lineHeight, e.pointLabels[t]), e._pointLabelSizes[t] = a;
            var d = e.getIndexAngle(t),
              l = le.toDegrees(d) % 360,
              u = er(l, n.x, a.w, 0, 180),
              c = er(l, n.y, a.h, 90, 270);
            u.start < i.l && (i.l = u.start, s.l = d), u.end > i.r && (i.r = u.end, s.r = d), c.start < i.t && (i.t = c.start, s.t = d), c.end > i.b && (i.b = c.end, s.b = d)
          }
          e.setReductions(e.drawingArea, i, s)
        }

        function ar(e) {
          return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right"
        }

        function nr(e, t, a, n) {
          var r, i, s = a.y + n / 2;
          if (le.isArray(t))
            for (r = 0, i = t.length; r < i; ++r) e.fillText(t[r], a.x, s), s += n;
          else e.fillText(t, a.x, s)
        }

        function rr(e, t, a) {
          90 === e || 270 === e ? a.y -= t.h / 2 : (e > 270 || e < 90) && (a.y -= t.h)
        }

        function ir(e) {
          var t = e.ctx,
            a = e.options,
            n = a.pointLabels,
            r = Zn(a),
            i = e.getDistanceFromCenterForValue(a.ticks.reverse ? e.min : e.max),
            s = le.options._parseFont(n);
          t.save(), t.font = s.string, t.textBaseline = "middle";
          for (var o = e.chart.data.labels.length - 1; o >= 0; o--) {
            var d = 0 === o ? r / 2 : 0,
              l = e.getPointPosition(o, i + d + 5),
              u = $n(n.fontColor, o, Q.global.defaultFontColor);
            t.fillStyle = u;
            var c = e.getIndexAngle(o),
              _ = le.toDegrees(c);
            t.textAlign = ar(_), rr(_, e._pointLabelSizes[o], l), nr(t, e.pointLabels[o], l, s.lineHeight)
          }
          t.restore()
        }

        function sr(e, t, a, n) {
          var r, i = e.ctx,
            s = t.circular,
            o = e.chart.data.labels.length,
            d = $n(t.color, n - 1),
            l = $n(t.lineWidth, n - 1);
          if ((s || o) && d && l) {
            if (i.save(), i.strokeStyle = d, i.lineWidth = l, i.setLineDash && (i.setLineDash(t.borderDash || []), i.lineDashOffset = t.borderDashOffset || 0), i.beginPath(), s) i.arc(e.xCenter, e.yCenter, a, 0, 2 * Math.PI);
            else {
              r = e.getPointPosition(0, a), i.moveTo(r.x, r.y);
              for (var u = 1; u < o; u++) r = e.getPointPosition(u, a), i.lineTo(r.x, r.y)
            }
            i.closePath(), i.stroke(), i.restore()
          }
        }

        function or(e) {
          return le.isNumber(e) ? e : 0
        }
        var dr = Pn.extend({
            setDimensions: function () {
              var e = this;
              e.width = e.maxWidth, e.height = e.maxHeight, e.paddingTop = Zn(e.options) / 2, e.xCenter = Math.floor(e.width / 2), e.yCenter = Math.floor((e.height - e.paddingTop) / 2), e.drawingArea = Math.min(e.height - e.paddingTop, e.width) / 2
            },
            determineDataLimits: function () {
              var e = this,
                t = e.chart,
                a = Number.POSITIVE_INFINITY,
                n = Number.NEGATIVE_INFINITY;
              le.each(t.data.datasets, (function (r, i) {
                if (t.isDatasetVisible(i)) {
                  var s = t.getDatasetMeta(i);
                  le.each(r.data, (function (t, r) {
                    var i = +e.getRightValue(t);
                    isNaN(i) || s.data[r].hidden || (a = Math.min(i, a), n = Math.max(i, n))
                  }))
                }
              })), e.min = a === Number.POSITIVE_INFINITY ? 0 : a, e.max = n === Number.NEGATIVE_INFINITY ? 0 : n, e.handleTickRangeOptions()
            },
            _computeTickLimit: function () {
              return Math.ceil(this.drawingArea / Zn(this.options))
            },
            convertTicksToLabels: function () {
              var e = this;
              Pn.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map((function () {
                var t = le.callback(e.options.pointLabels.callback, arguments, e);
                return t || 0 === t ? t : ""
              }))
            },
            getLabelForIndex: function (e, t) {
              return +this.getRightValue(this.chart.data.datasets[t].data[e])
            },
            fit: function () {
              var e = this,
                t = e.options;
              t.display && t.pointLabels.display ? tr(e) : e.setCenterPoint(0, 0, 0, 0)
            },
            setReductions: function (e, t, a) {
              var n = this,
                r = t.l / Math.sin(a.l),
                i = Math.max(t.r - n.width, 0) / Math.sin(a.r),
                s = -t.t / Math.cos(a.t),
                o = -Math.max(t.b - (n.height - n.paddingTop), 0) / Math.cos(a.b);
              r = or(r), i = or(i), s = or(s), o = or(o), n.drawingArea = Math.min(Math.floor(e - (r + i) / 2), Math.floor(e - (s + o) / 2)), n.setCenterPoint(r, i, s, o)
            },
            setCenterPoint: function (e, t, a, n) {
              var r = this,
                i = r.width - t - r.drawingArea,
                s = e + r.drawingArea,
                o = a + r.drawingArea,
                d = r.height - r.paddingTop - n - r.drawingArea;
              r.xCenter = Math.floor((s + i) / 2 + r.left), r.yCenter = Math.floor((o + d) / 2 + r.top + r.paddingTop)
            },
            getIndexAngle: function (e) {
              var t = this.chart,
                a = 360 / t.data.labels.length,
                n = t.options || {},
                r = n.startAngle || 0,
                i = (e * a + r) % 360;
              return (i < 0 ? i + 360 : i) * Math.PI * 2 / 360
            },
            getDistanceFromCenterForValue: function (e) {
              var t = this;
              if (le.isNullOrUndef(e)) return NaN;
              var a = t.drawingArea / (t.max - t.min);
              return t.options.ticks.reverse ? (t.max - e) * a : (e - t.min) * a
            },
            getPointPosition: function (e, t) {
              var a = this,
                n = a.getIndexAngle(e) - Math.PI / 2;
              return {
                x: Math.cos(n) * t + a.xCenter,
                y: Math.sin(n) * t + a.yCenter
              }
            },
            getPointPositionForValue: function (e, t) {
              return this.getPointPosition(e, this.getDistanceFromCenterForValue(t))
            },
            getBasePosition: function (e) {
              var t = this,
                a = t.min,
                n = t.max;
              return t.getPointPositionForValue(e || 0, t.beginAtZero ? 0 : a < 0 && n < 0 ? n : a > 0 && n > 0 ? a : 0)
            },
            _drawGrid: function () {
              var e, t, a, n = this,
                r = n.ctx,
                i = n.options,
                s = i.gridLines,
                o = i.angleLines,
                d = qn(o.lineWidth, s.lineWidth),
                l = qn(o.color, s.color);
              if (i.pointLabels.display && ir(n), s.display && le.each(n.ticks, (function (e, a) {
                  0 !== a && (t = n.getDistanceFromCenterForValue(n.ticksAsNumbers[a]), sr(n, s, t, a))
                })), o.display && d && l) {
                for (r.save(), r.lineWidth = d, r.strokeStyle = l, r.setLineDash && (r.setLineDash(Kn([o.borderDash, s.borderDash, []])), r.lineDashOffset = Kn([o.borderDashOffset, s.borderDashOffset, 0])), e = n.chart.data.labels.length - 1; e >= 0; e--) t = n.getDistanceFromCenterForValue(i.ticks.reverse ? n.min : n.max), a = n.getPointPosition(e, t), r.beginPath(), r.moveTo(n.xCenter, n.yCenter), r.lineTo(a.x, a.y), r.stroke();
                r.restore()
              }
            },
            _drawLabels: function () {
              var e = this,
                t = e.ctx,
                a = e.options,
                n = a.ticks;
              if (n.display) {
                var r, i, s = e.getIndexAngle(0),
                  o = le.options._parseFont(n),
                  d = qn(n.fontColor, Q.global.defaultFontColor);
                t.save(), t.font = o.string, t.translate(e.xCenter, e.yCenter), t.rotate(s), t.textAlign = "center", t.textBaseline = "middle", le.each(e.ticks, (function (a, s) {
                  (0 !== s || n.reverse) && (r = e.getDistanceFromCenterForValue(e.ticksAsNumbers[s]), n.showLabelBackdrop && (i = t.measureText(a).width, t.fillStyle = n.backdropColor, t.fillRect(-i / 2 - n.backdropPaddingX, -r - o.size / 2 - n.backdropPaddingY, i + 2 * n.backdropPaddingX, o.size + 2 * n.backdropPaddingY)), t.fillStyle = d, t.fillText(a, 0, -r))
                })), t.restore()
              }
            },
            _drawTitle: le.noop
          }),
          lr = Qn;
        dr._defaults = lr;
        var ur = le._deprecated,
          cr = le.options.resolve,
          _r = le.valueOrDefault,
          mr = Number.MIN_SAFE_INTEGER || -9007199254740991,
          hr = Number.MAX_SAFE_INTEGER || 9007199254740991,
          fr = {
            millisecond: {
              common: !0,
              size: 1,
              steps: 1e3
            },
            second: {
              common: !0,
              size: 1e3,
              steps: 60
            },
            minute: {
              common: !0,
              size: 6e4,
              steps: 60
            },
            hour: {
              common: !0,
              size: 36e5,
              steps: 24
            },
            day: {
              common: !0,
              size: 864e5,
              steps: 30
            },
            week: {
              common: !1,
              size: 6048e5,
              steps: 4
            },
            month: {
              common: !0,
              size: 2628e6,
              steps: 12
            },
            quarter: {
              common: !1,
              size: 7884e6,
              steps: 4
            },
            year: {
              common: !0,
              size: 3154e7
            }
          },
          pr = Object.keys(fr);

        function yr(e, t) {
          return e - t
        }

        function Mr(e) {
          var t, a, n, r = {},
            i = [];
          for (t = 0, a = e.length; t < a; ++t) n = e[t], r[n] || (r[n] = !0, i.push(n));
          return i
        }

        function gr(e) {
          return le.valueOrDefault(e.time.min, e.ticks.min)
        }

        function vr(e) {
          return le.valueOrDefault(e.time.max, e.ticks.max)
        }

        function Lr(e, t, a, n) {
          if ("linear" === n || !e.length) return [{
            time: t,
            pos: 0
          }, {
            time: a,
            pos: 1
          }];
          var r, i, s, o, d, l = [],
            u = [t];
          for (r = 0, i = e.length; r < i; ++r) o = e[r], o > t && o < a && u.push(o);
          for (u.push(a), r = 0, i = u.length; r < i; ++r) d = u[r + 1], s = u[r - 1], o = u[r], void 0 !== s && void 0 !== d && Math.round((d + s) / 2) === o || l.push({
            time: o,
            pos: r / (i - 1)
          });
          return l
        }

        function br(e, t, a) {
          var n, r, i, s = 0,
            o = e.length - 1;
          while (s >= 0 && s <= o) {
            if (n = s + o >> 1, r = e[n - 1] || null, i = e[n], !r) return {
              lo: null,
              hi: i
            };
            if (i[t] < a) s = n + 1;
            else {
              if (!(r[t] > a)) return {
                lo: r,
                hi: i
              };
              o = n - 1
            }
          }
          return {
            lo: i,
            hi: null
          }
        }

        function kr(e, t, a, n) {
          var r = br(e, t, a),
            i = r.lo ? r.hi ? r.lo : e[e.length - 2] : e[0],
            s = r.lo ? r.hi ? r.hi : e[e.length - 1] : e[1],
            o = s[t] - i[t],
            d = o ? (a - i[t]) / o : 0,
            l = (s[n] - i[n]) * d;
          return i[n] + l
        }

        function Yr(e, t) {
          var a = e._adapter,
            n = e.options.time,
            r = n.parser,
            i = r || n.format,
            s = t;
          return "function" === typeof r && (s = r(s)), le.isFinite(s) || (s = "string" === typeof i ? a.parse(s, i) : a.parse(s)), null !== s ? +s : (r || "function" !== typeof i || (s = i(t), le.isFinite(s) || (s = a.parse(s))), s)
        }

        function Dr(e, t) {
          if (le.isNullOrUndef(t)) return null;
          var a = e.options.time,
            n = Yr(e, e.getRightValue(t));
          return null === n || a.round && (n = +e._adapter.startOf(n, a.round)), n
        }

        function wr(e, t, a, n) {
          var r, i, s, o = pr.length;
          for (r = pr.indexOf(e); r < o - 1; ++r)
            if (i = fr[pr[r]], s = i.steps ? i.steps : hr, i.common && Math.ceil((a - t) / (s * i.size)) <= n) return pr[r];
          return pr[o - 1]
        }

        function xr(e, t, a, n, r) {
          var i, s;
          for (i = pr.length - 1; i >= pr.indexOf(a); i--)
            if (s = pr[i], fr[s].common && e._adapter.diff(r, n, s) >= t - 1) return s;
          return pr[a ? pr.indexOf(a) : 0]
        }

        function Tr(e) {
          for (var t = pr.indexOf(e) + 1, a = pr.length; t < a; ++t)
            if (fr[pr[t]].common) return pr[t]
        }

        function Sr(e, t, a, n) {
          var r, i = e._adapter,
            s = e.options,
            o = s.time,
            d = o.unit || wr(o.minUnit, t, a, n),
            l = cr([o.stepSize, o.unitStepSize, 1]),
            u = "week" === d && o.isoWeekday,
            c = t,
            _ = [];
          if (u && (c = +i.startOf(c, "isoWeek", u)), c = +i.startOf(c, u ? "day" : d), i.diff(a, t, d) > 1e5 * l) throw t + " and " + a + " are too far apart with stepSize of " + l + " " + d;
          for (r = c; r < a; r = +i.add(r, l, d)) _.push(r);
          return r !== a && "ticks" !== s.bounds || _.push(r), _
        }

        function Hr(e, t, a, n, r) {
          var i, s, o = 0,
            d = 0;
          return r.offset && t.length && (i = kr(e, "time", t[0], "pos"), o = 1 === t.length ? 1 - i : (kr(e, "time", t[1], "pos") - i) / 2, s = kr(e, "time", t[t.length - 1], "pos"), d = 1 === t.length ? s : (s - kr(e, "time", t[t.length - 2], "pos")) / 2), {
            start: o,
            end: d,
            factor: 1 / (o + 1 + d)
          }
        }

        function jr(e, t, a, n) {
          var r, i, s = e._adapter,
            o = +s.startOf(t[0].value, n),
            d = t[t.length - 1].value;
          for (r = o; r <= d; r = +s.add(r, 1, n)) i = a[r], i >= 0 && (t[i].major = !0);
          return t
        }

        function Pr(e, t, a) {
          var n, r, i = [],
            s = {},
            o = t.length;
          for (n = 0; n < o; ++n) r = t[n], s[r] = n, i.push({
            value: r,
            major: !1
          });
          return 0 !== o && a ? jr(e, i, s, a) : i
        }
        var Or = {
            position: "bottom",
            distribution: "linear",
            bounds: "data",
            adapters: {},
            time: {
              parser: !1,
              unit: !1,
              round: !1,
              displayFormat: !1,
              isoWeekday: !1,
              minUnit: "millisecond",
              displayFormats: {}
            },
            ticks: {
              autoSkip: !1,
              source: "auto",
              major: {
                enabled: !1
              }
            }
          },
          Ar = Yn.extend({
            initialize: function () {
              this.mergeTicksOptions(), Yn.prototype.initialize.call(this)
            },
            update: function () {
              var e = this,
                t = e.options,
                a = t.time || (t.time = {}),
                n = e._adapter = new an._date(t.adapters.date);
              return ur("time scale", a.format, "time.format", "time.parser"), ur("time scale", a.min, "time.min", "ticks.min"), ur("time scale", a.max, "time.max", "ticks.max"), le.mergeIf(a.displayFormats, n.formats()), Yn.prototype.update.apply(e, arguments)
            },
            getRightValue: function (e) {
              return e && void 0 !== e.t && (e = e.t), Yn.prototype.getRightValue.call(this, e)
            },
            determineDataLimits: function () {
              var e, t, a, n, r, i, s, o = this,
                d = o.chart,
                l = o._adapter,
                u = o.options,
                c = u.time.unit || "day",
                _ = hr,
                m = mr,
                h = [],
                f = [],
                p = [],
                y = o._getLabels();
              for (e = 0, a = y.length; e < a; ++e) p.push(Dr(o, y[e]));
              for (e = 0, a = (d.data.datasets || []).length; e < a; ++e)
                if (d.isDatasetVisible(e))
                  if (r = d.data.datasets[e].data, le.isObject(r[0]))
                    for (f[e] = [], t = 0, n = r.length; t < n; ++t) i = Dr(o, r[t]), h.push(i), f[e][t] = i;
                  else f[e] = p.slice(0), s || (h = h.concat(p), s = !0);
              else f[e] = [];
              p.length && (_ = Math.min(_, p[0]), m = Math.max(m, p[p.length - 1])), h.length && (h = a > 1 ? Mr(h).sort(yr) : h.sort(yr), _ = Math.min(_, h[0]), m = Math.max(m, h[h.length - 1])), _ = Dr(o, gr(u)) || _, m = Dr(o, vr(u)) || m, _ = _ === hr ? +l.startOf(Date.now(), c) : _, m = m === mr ? +l.endOf(Date.now(), c) + 1 : m, o.min = Math.min(_, m), o.max = Math.max(_ + 1, m), o._table = [], o._timestamps = {
                data: h,
                datasets: f,
                labels: p
              }
            },
            buildTicks: function () {
              var e, t, a, n = this,
                r = n.min,
                i = n.max,
                s = n.options,
                o = s.ticks,
                d = s.time,
                l = n._timestamps,
                u = [],
                c = n.getLabelCapacity(r),
                _ = o.source,
                m = s.distribution;
              for (l = "data" === _ || "auto" === _ && "series" === m ? l.data : "labels" === _ ? l.labels : Sr(n, r, i, c), "ticks" === s.bounds && l.length && (r = l[0], i = l[l.length - 1]), r = Dr(n, gr(s)) || r, i = Dr(n, vr(s)) || i, e = 0, t = l.length; e < t; ++e) a = l[e], a >= r && a <= i && u.push(a);
              return n.min = r, n.max = i, n._unit = d.unit || (o.autoSkip ? wr(d.minUnit, n.min, n.max, c) : xr(n, u.length, d.minUnit, n.min, n.max)), n._majorUnit = o.major.enabled && "year" !== n._unit ? Tr(n._unit) : void 0, n._table = Lr(n._timestamps.data, r, i, m), n._offsets = Hr(n._table, u, r, i, s), o.reverse && u.reverse(), Pr(n, u, n._majorUnit)
            },
            getLabelForIndex: function (e, t) {
              var a = this,
                n = a._adapter,
                r = a.chart.data,
                i = a.options.time,
                s = r.labels && e < r.labels.length ? r.labels[e] : "",
                o = r.datasets[t].data[e];
              return le.isObject(o) && (s = a.getRightValue(o)), i.tooltipFormat ? n.format(Yr(a, s), i.tooltipFormat) : "string" === typeof s ? s : n.format(Yr(a, s), i.displayFormats.datetime)
            },
            tickFormatFunction: function (e, t, a, n) {
              var r = this,
                i = r._adapter,
                s = r.options,
                o = s.time.displayFormats,
                d = o[r._unit],
                l = r._majorUnit,
                u = o[l],
                c = a[t],
                _ = s.ticks,
                m = l && u && c && c.major,
                h = i.format(e, n || (m ? u : d)),
                f = m ? _.major : _.minor,
                p = cr([f.callback, f.userCallback, _.callback, _.userCallback]);
              return p ? p(h, t, a) : h
            },
            convertTicksToLabels: function (e) {
              var t, a, n = [];
              for (t = 0, a = e.length; t < a; ++t) n.push(this.tickFormatFunction(e[t].value, t, e));
              return n
            },
            getPixelForOffset: function (e) {
              var t = this,
                a = t._offsets,
                n = kr(t._table, "time", e, "pos");
              return t.getPixelForDecimal((a.start + n) * a.factor)
            },
            getPixelForValue: function (e, t, a) {
              var n = this,
                r = null;
              if (void 0 !== t && void 0 !== a && (r = n._timestamps.datasets[a][t]), null === r && (r = Dr(n, e)), null !== r) return n.getPixelForOffset(r)
            },
            getPixelForTick: function (e) {
              var t = this.getTicks();
              return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null
            },
            getValueForPixel: function (e) {
              var t = this,
                a = t._offsets,
                n = t.getDecimalForPixel(e) / a.factor - a.end,
                r = kr(t._table, "pos", n, "time");
              return t._adapter._create(r)
            },
            _getLabelSize: function (e) {
              var t = this,
                a = t.options.ticks,
                n = t.ctx.measureText(e).width,
                r = le.toRadians(t.isHorizontal() ? a.maxRotation : a.minRotation),
                i = Math.cos(r),
                s = Math.sin(r),
                o = _r(a.fontSize, Q.global.defaultFontSize);
              return {
                w: n * i + o * s,
                h: n * s + o * i
              }
            },
            getLabelWidth: function (e) {
              return this._getLabelSize(e).w
            },
            getLabelCapacity: function (e) {
              var t = this,
                a = t.options.time,
                n = a.displayFormats,
                r = n[a.unit] || n.millisecond,
                i = t.tickFormatFunction(e, 0, Pr(t, [e], t._majorUnit), r),
                s = t._getLabelSize(i),
                o = Math.floor(t.isHorizontal() ? t.width / s.w : t.height / s.h);
              return t.options.offset && o--, o > 0 ? o : 1
            }
          }),
          Cr = Or;
        Ar._defaults = Cr;
        var Fr = {
            category: xn,
            linear: In,
            logarithmic: Un,
            radialLinear: dr,
            time: Ar
          },
          Er = {
            datetime: "MMM D, YYYY, h:mm:ss a",
            millisecond: "h:mm:ss.SSS a",
            second: "h:mm:ss a",
            minute: "h:mm a",
            hour: "hA",
            day: "MMM D",
            week: "ll",
            month: "MMM YYYY",
            quarter: "[Q]Q - YYYY",
            year: "YYYY"
          };
        an._date.override("function" === typeof e ? {
          _id: "moment",
          formats: function () {
            return Er
          },
          parse: function (t, a) {
            return "string" === typeof t && "string" === typeof a ? t = e(t, a) : t instanceof e || (t = e(t)), t.isValid() ? t.valueOf() : null
          },
          format: function (t, a) {
            return e(t).format(a)
          },
          add: function (t, a, n) {
            return e(t).add(a, n).valueOf()
          },
          diff: function (t, a, n) {
            return e(t).diff(e(a), n)
          },
          startOf: function (t, a, n) {
            return t = e(t), "isoWeek" === a ? t.isoWeekday(n).valueOf() : t.startOf(a).valueOf()
          },
          endOf: function (t, a) {
            return e(t).endOf(a).valueOf()
          },
          _create: function (t) {
            return e(t)
          }
        } : {}), Q._set("global", {
          plugins: {
            filler: {
              propagate: !0
            }
          }
        });
        var Wr = {
          dataset: function (e) {
            var t = e.fill,
              a = e.chart,
              n = a.getDatasetMeta(t),
              r = n && a.isDatasetVisible(t),
              i = r && n.dataset._children || [],
              s = i.length || 0;
            return s ? function (e, t) {
              return t < s && i[t]._view || null
            } : null
          },
          boundary: function (e) {
            var t = e.boundary,
              a = t ? t.x : null,
              n = t ? t.y : null;
            return le.isArray(t) ? function (e, a) {
              return t[a]
            } : function (e) {
              return {
                x: null === a ? e.x : a,
                y: null === n ? e.y : n
              }
            }
          }
        };

        function Ir(e, t, a) {
          var n, r = e._model || {},
            i = r.fill;
          if (void 0 === i && (i = !!r.backgroundColor), !1 === i || null === i) return !1;
          if (!0 === i) return "origin";
          if (n = parseFloat(i, 10), isFinite(n) && Math.floor(n) === n) return "-" !== i[0] && "+" !== i[0] || (n = t + n), !(n === t || n < 0 || n >= a) && n;
          switch (i) {
            case "bottom":
              return "start";
            case "top":
              return "end";
            case "zero":
              return "origin";
            case "origin":
            case "start":
            case "end":
              return i;
            default:
              return !1
          }
        }

        function zr(e) {
          var t, a = e.el._model || {},
            n = e.el._scale || {},
            r = e.fill,
            i = null;
          if (isFinite(r)) return null;
          if ("start" === r ? i = void 0 === a.scaleBottom ? n.bottom : a.scaleBottom : "end" === r ? i = void 0 === a.scaleTop ? n.top : a.scaleTop : void 0 !== a.scaleZero ? i = a.scaleZero : n.getBasePixel && (i = n.getBasePixel()), void 0 !== i && null !== i) {
            if (void 0 !== i.x && void 0 !== i.y) return i;
            if (le.isFinite(i)) return t = n.isHorizontal(), {
              x: t ? i : null,
              y: t ? null : i
            }
          }
          return null
        }

        function Nr(e) {
          var t, a, n, r, i, s = e.el._scale,
            o = s.options,
            d = s.chart.data.labels.length,
            l = e.fill,
            u = [];
          if (!d) return null;
          for (t = o.ticks.reverse ? s.max : s.min, a = o.ticks.reverse ? s.min : s.max, n = s.getPointPositionForValue(0, t), r = 0; r < d; ++r) i = "start" === l || "end" === l ? s.getPointPositionForValue(r, "start" === l ? t : a) : s.getBasePosition(r), o.gridLines.circular && (i.cx = n.x, i.cy = n.y, i.angle = s.getIndexAngle(r) - Math.PI / 2), u.push(i);
          return u
        }

        function Rr(e) {
          var t = e.el._scale || {};
          return t.getPointPositionForValue ? Nr(e) : zr(e)
        }

        function Vr(e, t, a) {
          var n, r = e[t],
            i = r.fill,
            s = [t];
          if (!a) return i;
          while (!1 !== i && -1 === s.indexOf(i)) {
            if (!isFinite(i)) return i;
            if (n = e[i], !n) return !1;
            if (n.visible) return i;
            s.push(i), i = n.fill
          }
          return !1
        }

        function Br(e) {
          var t = e.fill,
            a = "dataset";
          return !1 === t ? null : (isFinite(t) || (a = "boundary"), Wr[a](e))
        }

        function Jr(e) {
          return e && !e.skip
        }

        function Ur(e, t, a, n, r) {
          var i, s, o, d;
          if (n && r) {
            for (e.moveTo(t[0].x, t[0].y), i = 1; i < n; ++i) le.canvas.lineTo(e, t[i - 1], t[i]);
            if (void 0 === a[0].angle)
              for (e.lineTo(a[r - 1].x, a[r - 1].y), i = r - 1; i > 0; --i) le.canvas.lineTo(e, a[i], a[i - 1], !0);
            else
              for (s = a[0].cx, o = a[0].cy, d = Math.sqrt(Math.pow(a[0].x - s, 2) + Math.pow(a[0].y - o, 2)), i = r - 1; i > 0; --i) e.arc(s, o, d, a[i].angle, a[i - 1].angle, !0)
          }
        }

        function Gr(e, t, a, n, r, i) {
          var s, o, d, l, u, c, _, m, h = t.length,
            f = n.spanGaps,
            p = [],
            y = [],
            M = 0,
            g = 0;
          for (e.beginPath(), s = 0, o = h; s < o; ++s) d = s % h, l = t[d]._view, u = a(l, d, n), c = Jr(l), _ = Jr(u), i && void 0 === m && c && (m = s + 1, o = h + m), c && _ ? (M = p.push(l), g = y.push(u)) : M && g && (f ? (c && p.push(l), _ && y.push(u)) : (Ur(e, p, y, M, g), M = g = 0, p = [], y = []));
          Ur(e, p, y, M, g), e.closePath(), e.fillStyle = r, e.fill()
        }
        var qr = {
            id: "filler",
            afterDatasetsUpdate: function (e, t) {
              var a, n, r, i, s = (e.data.datasets || []).length,
                o = t.propagate,
                d = [];
              for (n = 0; n < s; ++n) a = e.getDatasetMeta(n), r = a.dataset, i = null, r && r._model && r instanceof $e.Line && (i = {
                visible: e.isDatasetVisible(n),
                fill: Ir(r, n, s),
                chart: e,
                el: r
              }), a.$filler = i, d.push(i);
              for (n = 0; n < s; ++n) i = d[n], i && (i.fill = Vr(d, n, o), i.boundary = Rr(i), i.mapper = Br(i))
            },
            beforeDatasetsDraw: function (e) {
              var t, a, n, r, i, s, o, d = e._getSortedVisibleDatasetMetas(),
                l = e.ctx;
              for (a = d.length - 1; a >= 0; --a) t = d[a].$filler, t && t.visible && (n = t.el, r = n._view, i = n._children || [], s = t.mapper, o = r.backgroundColor || Q.global.defaultColor, s && o && i.length && (le.canvas.clipArea(l, e.chartArea), Gr(l, i, s, r, o, n._loop), le.canvas.unclipArea(l)))
            }
          },
          $r = le.rtl.getRtlAdapter,
          Kr = le.noop,
          Qr = le.valueOrDefault;

        function Zr(e, t) {
          return e.usePointStyle && e.boxWidth > t ? t : e.boxWidth
        }
        Q._set("global", {
          legend: {
            display: !0,
            position: "top",
            align: "center",
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function (e, t) {
              var a = t.datasetIndex,
                n = this.chart,
                r = n.getDatasetMeta(a);
              r.hidden = null === r.hidden ? !n.data.datasets[a].hidden : null, n.update()
            },
            onHover: null,
            onLeave: null,
            labels: {
              boxWidth: 40,
              padding: 10,
              generateLabels: function (e) {
                var t = e.data.datasets,
                  a = e.options.legend || {},
                  n = a.labels && a.labels.usePointStyle;
                return e._getSortedDatasetMetas().map((function (a) {
                  var r = a.controller.getStyle(n ? 0 : void 0);
                  return {
                    text: t[a.index].label,
                    fillStyle: r.backgroundColor,
                    hidden: !e.isDatasetVisible(a.index),
                    lineCap: r.borderCapStyle,
                    lineDash: r.borderDash,
                    lineDashOffset: r.borderDashOffset,
                    lineJoin: r.borderJoinStyle,
                    lineWidth: r.borderWidth,
                    strokeStyle: r.borderColor,
                    pointStyle: r.pointStyle,
                    rotation: r.rotation,
                    datasetIndex: a.index
                  }
                }), this)
              }
            }
          },
          legendCallback: function (e) {
            var t, a, n, r, i = document.createElement("ul"),
              s = e.data.datasets;
            for (i.setAttribute("class", e.id + "-legend"), t = 0, a = s.length; t < a; t++) n = i.appendChild(document.createElement("li")), r = n.appendChild(document.createElement("span")), r.style.backgroundColor = s[t].backgroundColor, s[t].label && n.appendChild(document.createTextNode(s[t].label));
            return i.outerHTML
          }
        });
        var Xr = ye.extend({
          initialize: function (e) {
            var t = this;
            le.extend(t, e), t.legendHitBoxes = [], t._hoveredItem = null, t.doughnutMode = !1
          },
          beforeUpdate: Kr,
          update: function (e, t, a) {
            var n = this;
            return n.beforeUpdate(), n.maxWidth = e, n.maxHeight = t, n.margins = a, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
          },
          afterUpdate: Kr,
          beforeSetDimensions: Kr,
          setDimensions: function () {
            var e = this;
            e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
              width: 0,
              height: 0
            }
          },
          afterSetDimensions: Kr,
          beforeBuildLabels: Kr,
          buildLabels: function () {
            var e = this,
              t = e.options.labels || {},
              a = le.callback(t.generateLabels, [e.chart], e) || [];
            t.filter && (a = a.filter((function (a) {
              return t.filter(a, e.chart.data)
            }))), e.options.reverse && a.reverse(), e.legendItems = a
          },
          afterBuildLabels: Kr,
          beforeFit: Kr,
          fit: function () {
            var e = this,
              t = e.options,
              a = t.labels,
              n = t.display,
              r = e.ctx,
              i = le.options._parseFont(a),
              s = i.size,
              o = e.legendHitBoxes = [],
              d = e.minSize,
              l = e.isHorizontal();
            if (l ? (d.width = e.maxWidth, d.height = n ? 10 : 0) : (d.width = n ? 10 : 0, d.height = e.maxHeight), n) {
              if (r.font = i.string, l) {
                var u = e.lineWidths = [0],
                  c = 0;
                r.textAlign = "left", r.textBaseline = "middle", le.each(e.legendItems, (function (e, t) {
                  var n = Zr(a, s),
                    i = n + s / 2 + r.measureText(e.text).width;
                  (0 === t || u[u.length - 1] + i + 2 * a.padding > d.width) && (c += s + a.padding, u[u.length - (t > 0 ? 0 : 1)] = 0), o[t] = {
                    left: 0,
                    top: 0,
                    width: i,
                    height: s
                  }, u[u.length - 1] += i + a.padding
                })), d.height += c
              } else {
                var _ = a.padding,
                  m = e.columnWidths = [],
                  h = e.columnHeights = [],
                  f = a.padding,
                  p = 0,
                  y = 0;
                le.each(e.legendItems, (function (e, t) {
                  var n = Zr(a, s),
                    i = n + s / 2 + r.measureText(e.text).width;
                  t > 0 && y + s + 2 * _ > d.height && (f += p + a.padding, m.push(p), h.push(y), p = 0, y = 0), p = Math.max(p, i), y += s + _, o[t] = {
                    left: 0,
                    top: 0,
                    width: i,
                    height: s
                  }
                })), f += p, m.push(p), h.push(y), d.width += f
              }
              e.width = d.width, e.height = d.height
            } else e.width = d.width = e.height = d.height = 0
          },
          afterFit: Kr,
          isHorizontal: function () {
            return "top" === this.options.position || "bottom" === this.options.position
          },
          draw: function () {
            var e = this,
              t = e.options,
              a = t.labels,
              n = Q.global,
              r = n.defaultColor,
              i = n.elements.line,
              s = e.height,
              o = e.columnHeights,
              d = e.width,
              l = e.lineWidths;
            if (t.display) {
              var u, c = $r(t.rtl, e.left, e.minSize.width),
                _ = e.ctx,
                m = Qr(a.fontColor, n.defaultFontColor),
                h = le.options._parseFont(a),
                f = h.size;
              _.textAlign = c.textAlign("left"), _.textBaseline = "middle", _.lineWidth = .5, _.strokeStyle = m, _.fillStyle = m, _.font = h.string;
              var p = Zr(a, f),
                y = e.legendHitBoxes,
                M = function (e, t, n) {
                  if (!(isNaN(p) || p <= 0)) {
                    _.save();
                    var s = Qr(n.lineWidth, i.borderWidth);
                    if (_.fillStyle = Qr(n.fillStyle, r), _.lineCap = Qr(n.lineCap, i.borderCapStyle), _.lineDashOffset = Qr(n.lineDashOffset, i.borderDashOffset), _.lineJoin = Qr(n.lineJoin, i.borderJoinStyle), _.lineWidth = s, _.strokeStyle = Qr(n.strokeStyle, r), _.setLineDash && _.setLineDash(Qr(n.lineDash, i.borderDash)), a && a.usePointStyle) {
                      var o = p * Math.SQRT2 / 2,
                        d = c.xPlus(e, p / 2),
                        l = t + f / 2;
                      le.canvas.drawPoint(_, n.pointStyle, o, d, l, n.rotation)
                    } else _.fillRect(c.leftForLtr(e, p), t, p, f), 0 !== s && _.strokeRect(c.leftForLtr(e, p), t, p, f);
                    _.restore()
                  }
                },
                g = function (e, t, a, n) {
                  var r = f / 2,
                    i = c.xPlus(e, p + r),
                    s = t + r;
                  _.fillText(a.text, i, s), a.hidden && (_.beginPath(), _.lineWidth = 2, _.moveTo(i, s), _.lineTo(c.xPlus(i, n), s), _.stroke())
                },
                v = function (e, n) {
                  switch (t.align) {
                    case "start":
                      return a.padding;
                    case "end":
                      return e - n;
                    default:
                      return (e - n + a.padding) / 2
                  }
                },
                L = e.isHorizontal();
              u = L ? {
                x: e.left + v(d, l[0]),
                y: e.top + a.padding,
                line: 0
              } : {
                x: e.left + a.padding,
                y: e.top + v(s, o[0]),
                line: 0
              }, le.rtl.overrideTextDirection(e.ctx, t.textDirection);
              var b = f + a.padding;
              le.each(e.legendItems, (function (t, n) {
                var r = _.measureText(t.text).width,
                  i = p + f / 2 + r,
                  m = u.x,
                  h = u.y;
                c.setWidth(e.minSize.width), L ? n > 0 && m + i + a.padding > e.left + e.minSize.width && (h = u.y += b, u.line++, m = u.x = e.left + v(d, l[u.line])) : n > 0 && h + b > e.top + e.minSize.height && (m = u.x = m + e.columnWidths[u.line] + a.padding, u.line++, h = u.y = e.top + v(s, o[u.line]));
                var k = c.x(m);
                M(k, h, t), y[n].left = c.leftForLtr(k, y[n].width), y[n].top = h, g(k, h, t, r), L ? u.x += i + a.padding : u.y += b
              })), le.rtl.restoreTextDirection(e.ctx, t.textDirection)
            }
          },
          _getLegendItemAt: function (e, t) {
            var a, n, r, i = this;
            if (e >= i.left && e <= i.right && t >= i.top && t <= i.bottom)
              for (r = i.legendHitBoxes, a = 0; a < r.length; ++a)
                if (n = r[a], e >= n.left && e <= n.left + n.width && t >= n.top && t <= n.top + n.height) return i.legendItems[a];
            return null
          },
          handleEvent: function (e) {
            var t, a = this,
              n = a.options,
              r = "mouseup" === e.type ? "click" : e.type;
            if ("mousemove" === r) {
              if (!n.onHover && !n.onLeave) return
            } else {
              if ("click" !== r) return;
              if (!n.onClick) return
            }
            t = a._getLegendItemAt(e.x, e.y), "click" === r ? t && n.onClick && n.onClick.call(a, e.native, t) : (n.onLeave && t !== a._hoveredItem && (a._hoveredItem && n.onLeave.call(a, e.native, a._hoveredItem), a._hoveredItem = t), n.onHover && t && n.onHover.call(a, e.native, t))
          }
        });

        function ei(e, t) {
          var a = new Xr({
            ctx: e.ctx,
            options: t,
            chart: e
          });
          qt.configure(e, a, t), qt.addBox(e, a), e.legend = a
        }
        var ti = {
            id: "legend",
            _element: Xr,
            beforeInit: function (e) {
              var t = e.options.legend;
              t && ei(e, t)
            },
            beforeUpdate: function (e) {
              var t = e.options.legend,
                a = e.legend;
              t ? (le.mergeIf(t, Q.global.legend), a ? (qt.configure(e, a, t), a.options = t) : ei(e, t)) : a && (qt.removeBox(e, a), delete e.legend)
            },
            afterEvent: function (e, t) {
              var a = e.legend;
              a && a.handleEvent(t)
            }
          },
          ai = le.noop;
        Q._set("global", {
          title: {
            display: !1,
            fontStyle: "bold",
            fullWidth: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3
          }
        });
        var ni = ye.extend({
          initialize: function (e) {
            var t = this;
            le.extend(t, e), t.legendHitBoxes = []
          },
          beforeUpdate: ai,
          update: function (e, t, a) {
            var n = this;
            return n.beforeUpdate(), n.maxWidth = e, n.maxHeight = t, n.margins = a, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
          },
          afterUpdate: ai,
          beforeSetDimensions: ai,
          setDimensions: function () {
            var e = this;
            e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
              width: 0,
              height: 0
            }
          },
          afterSetDimensions: ai,
          beforeBuildLabels: ai,
          buildLabels: ai,
          afterBuildLabels: ai,
          beforeFit: ai,
          fit: function () {
            var e, t, a = this,
              n = a.options,
              r = a.minSize = {},
              i = a.isHorizontal();
            n.display ? (e = le.isArray(n.text) ? n.text.length : 1, t = e * le.options._parseFont(n).lineHeight + 2 * n.padding, a.width = r.width = i ? a.maxWidth : t, a.height = r.height = i ? t : a.maxHeight) : a.width = r.width = a.height = r.height = 0
          },
          afterFit: ai,
          isHorizontal: function () {
            var e = this.options.position;
            return "top" === e || "bottom" === e
          },
          draw: function () {
            var e = this,
              t = e.ctx,
              a = e.options;
            if (a.display) {
              var n, r, i, s = le.options._parseFont(a),
                o = s.lineHeight,
                d = o / 2 + a.padding,
                l = 0,
                u = e.top,
                c = e.left,
                _ = e.bottom,
                m = e.right;
              t.fillStyle = le.valueOrDefault(a.fontColor, Q.global.defaultFontColor), t.font = s.string, e.isHorizontal() ? (r = c + (m - c) / 2, i = u + d, n = m - c) : (r = "left" === a.position ? c + d : m - d, i = u + (_ - u) / 2, n = _ - u, l = Math.PI * ("left" === a.position ? -.5 : .5)), t.save(), t.translate(r, i), t.rotate(l), t.textAlign = "center", t.textBaseline = "middle";
              var h = a.text;
              if (le.isArray(h))
                for (var f = 0, p = 0; p < h.length; ++p) t.fillText(h[p], 0, f, n), f += o;
              else t.fillText(h, 0, 0, n);
              t.restore()
            }
          }
        });

        function ri(e, t) {
          var a = new ni({
            ctx: e.ctx,
            options: t,
            chart: e
          });
          qt.configure(e, a, t), qt.addBox(e, a), e.titleBlock = a
        }
        var ii = {
            id: "title",
            _element: ni,
            beforeInit: function (e) {
              var t = e.options.title;
              t && ri(e, t)
            },
            beforeUpdate: function (e) {
              var t = e.options.title,
                a = e.titleBlock;
              t ? (le.mergeIf(t, Q.global.title), a ? (qt.configure(e, a, t), a.options = t) : ri(e, t)) : a && (qt.removeBox(e, a), delete e.titleBlock)
            }
          },
          si = {},
          oi = qr,
          di = ti,
          li = ii;
        for (var ui in si.filler = oi, si.legend = di, si.title = li, Qa.helpers = le, Za(), Qa._adapters = an, Qa.Animation = ge, Qa.animationService = ve, Qa.controllers = Tt, Qa.DatasetController = we, Qa.defaults = Q, Qa.Element = ye, Qa.elements = $e, Qa.Interaction = Ct, Qa.layouts = qt, Qa.platform = Ya, Qa.plugins = Da, Qa.Scale = Yn, Qa.scaleService = wa, Qa.Ticks = nn, Qa.Tooltip = Na, Qa.helpers.each(Fr, (function (e, t) {
            Qa.scaleService.registerScaleType(t, e, e._defaults)
          })), si) si.hasOwnProperty(ui) && Qa.plugins.register(si[ui]);
        Qa.platform.initialize();
        var ci = Qa;
        return "undefined" !== typeof window && (window.Chart = Qa), Qa.Chart = Qa, Qa.Legend = si.legend._element, Qa.Title = si.title._element, Qa.pluginService = Qa.plugins, Qa.PluginBase = Qa.Element.extend({}), Qa.canvasHelpers = Qa.helpers.canvas, Qa.layoutService = Qa.layouts, Qa.LinearScaleBase = Pn, Qa.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], (function (e) {
          Qa[e] = function (t, a) {
            return new Qa(t, Qa.helpers.merge(a || {}, {
              type: e.charAt(0).toLowerCase() + e.slice(1)
            }))
          }
        })), ci
      }))
    },
    3886: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("en-ca", {
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "YYYY-MM-DD",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (e) {
            var t = e % 10,
              a = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + a
          }
        });
        return t
      }))
    },
    "39a6": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("en-gb", {
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (e) {
            var t = e % 10,
              a = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + a
          },
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    "39bd": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
          },
          a = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
          };

        function n(e, t, a, n) {
          var r = "";
          if (t) switch (a) {
            case "s":
              r = "काही सेकंद";
              break;
            case "ss":
              r = "%d सेकंद";
              break;
            case "m":
              r = "एक मिनिट";
              break;
            case "mm":
              r = "%d मिनिटे";
              break;
            case "h":
              r = "एक तास";
              break;
            case "hh":
              r = "%d तास";
              break;
            case "d":
              r = "एक दिवस";
              break;
            case "dd":
              r = "%d दिवस";
              break;
            case "M":
              r = "एक महिना";
              break;
            case "MM":
              r = "%d महिने";
              break;
            case "y":
              r = "एक वर्ष";
              break;
            case "yy":
              r = "%d वर्षे";
              break
          } else switch (a) {
            case "s":
              r = "काही सेकंदां";
              break;
            case "ss":
              r = "%d सेकंदां";
              break;
            case "m":
              r = "एका मिनिटा";
              break;
            case "mm":
              r = "%d मिनिटां";
              break;
            case "h":
              r = "एका तासा";
              break;
            case "hh":
              r = "%d तासां";
              break;
            case "d":
              r = "एका दिवसा";
              break;
            case "dd":
              r = "%d दिवसां";
              break;
            case "M":
              r = "एका महिन्या";
              break;
            case "MM":
              r = "%d महिन्यां";
              break;
            case "y":
              r = "एका वर्षा";
              break;
            case "yy":
              r = "%d वर्षां";
              break
          }
          return r.replace(/%d/i, e)
        }
        var r = e.defineLocale("mr", {
          months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
          monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
          monthsParseExact: !0,
          weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
          weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
          weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
          longDateFormat: {
            LT: "A h:mm वाजता",
            LTS: "A h:mm:ss वाजता",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm वाजता",
            LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
          },
          calendar: {
            sameDay: "[आज] LT",
            nextDay: "[उद्या] LT",
            nextWeek: "dddd, LT",
            lastDay: "[काल] LT",
            lastWeek: "[मागील] dddd, LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%sमध्ये",
            past: "%sपूर्वी",
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n
          },
          preparse: function (e) {
            return e.replace(/[१२३४५६७८९०]/g, (function (e) {
              return a[e]
            }))
          },
          postformat: function (e) {
            return e.replace(/\d/g, (function (e) {
              return t[e]
            }))
          },
          meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
          meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "पहाटे" === t || "सकाळी" === t ? e : "दुपारी" === t || "सायंकाळी" === t || "रात्री" === t ? e >= 12 ? e : e + 12 : void 0
          },
          meridiem: function (e, t, a) {
            return e >= 0 && e < 6 ? "पहाटे" : e < 12 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
          },
          week: {
            dow: 0,
            doy: 6
          }
        });
        return r
      }))
    },
    "3a39": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
          },
          a = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
          },
          n = e.defineLocale("ne", {
            months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
            monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
            monthsParseExact: !0,
            weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "Aको h:mm बजे",
              LTS: "Aको h:mm:ss बजे",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, Aको h:mm बजे",
              LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
            },
            preparse: function (e) {
              return e.replace(/[१२३४५६७८९०]/g, (function (e) {
                return a[e]
              }))
            },
            postformat: function (e) {
              return e.replace(/\d/g, (function (e) {
                return t[e]
              }))
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function (e, t) {
              return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, a) {
              return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
            },
            calendar: {
              sameDay: "[आज] LT",
              nextDay: "[भोलि] LT",
              nextWeek: "[आउँदो] dddd[,] LT",
              lastDay: "[हिजो] LT",
              lastWeek: "[गएको] dddd[,] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%sमा",
              past: "%s अगाडि",
              s: "केही क्षण",
              ss: "%d सेकेण्ड",
              m: "एक मिनेट",
              mm: "%d मिनेट",
              h: "एक घण्टा",
              hh: "%d घण्टा",
              d: "एक दिन",
              dd: "%d दिन",
              M: "एक महिना",
              MM: "%d महिना",
              y: "एक बर्ष",
              yy: "%d बर्ष"
            },
            week: {
              dow: 0,
              doy: 6
            }
          });
        return n
      }))
    },
    "3a6c": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("zh-mo", {
          months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
          monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
          weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
          weekdaysMin: "日_一_二_三_四_五_六".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日dddd HH:mm",
            l: "D/M/YYYY",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日dddd HH:mm"
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
          },
          meridiem: function (e, t, a) {
            var n = 100 * e + t;
            return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上"
          },
          calendar: {
            sameDay: "[今天] LT",
            nextDay: "[明天] LT",
            nextWeek: "[下]dddd LT",
            lastDay: "[昨天] LT",
            lastWeek: "[上]dddd LT",
            sameElse: "L"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
          ordinal: function (e, t) {
            switch (t) {
              case "d":
              case "D":
              case "DDD":
                return e + "日";
              case "M":
                return e + "月";
              case "w":
              case "W":
                return e + "週";
              default:
                return e
            }
          },
          relativeTime: {
            future: "%s內",
            past: "%s前",
            s: "幾秒",
            ss: "%d 秒",
            m: "1 分鐘",
            mm: "%d 分鐘",
            h: "1 小時",
            hh: "%d 小時",
            d: "1 天",
            dd: "%d 天",
            M: "1 個月",
            MM: "%d 個月",
            y: "1 年",
            yy: "%d 年"
          }
        });
        return t
      }))
    },
    "3b1b": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            0: "-ум",
            1: "-ум",
            2: "-юм",
            3: "-юм",
            4: "-ум",
            5: "-ум",
            6: "-ум",
            7: "-ум",
            8: "-ум",
            9: "-ум",
            10: "-ум",
            12: "-ум",
            13: "-ум",
            20: "-ум",
            30: "-юм",
            40: "-ум",
            50: "-ум",
            60: "-ум",
            70: "-ум",
            80: "-ум",
            90: "-ум",
            100: "-ум"
          },
          a = e.defineLocale("tg", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
            weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
            weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Имрӯз соати] LT",
              nextDay: "[Пагоҳ соати] LT",
              lastDay: "[Дирӯз соати] LT",
              nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
              lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "баъди %s",
              past: "%s пеш",
              s: "якчанд сония",
              m: "як дақиқа",
              mm: "%d дақиқа",
              h: "як соат",
              hh: "%d соат",
              d: "як рӯз",
              dd: "%d рӯз",
              M: "як моҳ",
              MM: "%d моҳ",
              y: "як сол",
              yy: "%d сол"
            },
            meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
            meridiemHour: function (e, t) {
              return 12 === e && (e = 0), "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? e >= 11 ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, a) {
              return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
            ordinal: function (e) {
              var a = e % 10,
                n = e >= 100 ? 100 : null;
              return e + (t[e] || t[a] || t[n])
            },
            week: {
              dow: 1,
              doy: 7
            }
          });
        return a
      }))
    },
    "3c0d": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
          a = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
          n = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i],
          r = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;

        function i(e) {
          return e > 1 && e < 5 && 1 !== ~~(e / 10)
        }

        function s(e, t, a, n) {
          var r = e + " ";
          switch (a) {
            case "s":
              return t || n ? "pár sekund" : "pár sekundami";
            case "ss":
              return t || n ? r + (i(e) ? "sekundy" : "sekund") : r + "sekundami";
            case "m":
              return t ? "minuta" : n ? "minutu" : "minutou";
            case "mm":
              return t || n ? r + (i(e) ? "minuty" : "minut") : r + "minutami";
            case "h":
              return t ? "hodina" : n ? "hodinu" : "hodinou";
            case "hh":
              return t || n ? r + (i(e) ? "hodiny" : "hodin") : r + "hodinami";
            case "d":
              return t || n ? "den" : "dnem";
            case "dd":
              return t || n ? r + (i(e) ? "dny" : "dní") : r + "dny";
            case "M":
              return t || n ? "měsíc" : "měsícem";
            case "MM":
              return t || n ? r + (i(e) ? "měsíce" : "měsíců") : r + "měsíci";
            case "y":
              return t || n ? "rok" : "rokem";
            case "yy":
              return t || n ? r + (i(e) ? "roky" : "let") : r + "lety"
          }
        }
        var o = e.defineLocale("cs", {
          months: t,
          monthsShort: a,
          monthsRegex: r,
          monthsShortRegex: r,
          monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
          monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
          monthsParse: n,
          longMonthsParse: n,
          shortMonthsParse: n,
          weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
          weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
          weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
            l: "D. M. YYYY"
          },
          calendar: {
            sameDay: "[dnes v] LT",
            nextDay: "[zítra v] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[v neděli v] LT";
                case 1:
                case 2:
                  return "[v] dddd [v] LT";
                case 3:
                  return "[ve středu v] LT";
                case 4:
                  return "[ve čtvrtek v] LT";
                case 5:
                  return "[v pátek v] LT";
                case 6:
                  return "[v sobotu v] LT"
              }
            },
            lastDay: "[včera v] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[minulou neděli v] LT";
                case 1:
                case 2:
                  return "[minulé] dddd [v] LT";
                case 3:
                  return "[minulou středu v] LT";
                case 4:
                case 5:
                  return "[minulý] dddd [v] LT";
                case 6:
                  return "[minulou sobotu v] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "za %s",
            past: "před %s",
            s: s,
            ss: s,
            m: s,
            mm: s,
            h: s,
            hh: s,
            d: s,
            dd: s,
            M: s,
            MM: s,
            y: s,
            yy: s
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return o
      }))
    },
    "3de5": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "௧",
            2: "௨",
            3: "௩",
            4: "௪",
            5: "௫",
            6: "௬",
            7: "௭",
            8: "௮",
            9: "௯",
            0: "௦"
          },
          a = {
            "௧": "1",
            "௨": "2",
            "௩": "3",
            "௪": "4",
            "௫": "5",
            "௬": "6",
            "௭": "7",
            "௮": "8",
            "௯": "9",
            "௦": "0"
          },
          n = e.defineLocale("ta", {
            months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
            weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, HH:mm",
              LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
              sameDay: "[இன்று] LT",
              nextDay: "[நாளை] LT",
              nextWeek: "dddd, LT",
              lastDay: "[நேற்று] LT",
              lastWeek: "[கடந்த வாரம்] dddd, LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s இல்",
              past: "%s முன்",
              s: "ஒரு சில விநாடிகள்",
              ss: "%d விநாடிகள்",
              m: "ஒரு நிமிடம்",
              mm: "%d நிமிடங்கள்",
              h: "ஒரு மணி நேரம்",
              hh: "%d மணி நேரம்",
              d: "ஒரு நாள்",
              dd: "%d நாட்கள்",
              M: "ஒரு மாதம்",
              MM: "%d மாதங்கள்",
              y: "ஒரு வருடம்",
              yy: "%d ஆண்டுகள்"
            },
            dayOfMonthOrdinalParse: /\d{1,2}வது/,
            ordinal: function (e) {
              return e + "வது"
            },
            preparse: function (e) {
              return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, (function (e) {
                return a[e]
              }))
            },
            postformat: function (e) {
              return e.replace(/\d/g, (function (e) {
                return t[e]
              }))
            },
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function (e, t, a) {
              return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
            },
            meridiemHour: function (e, t) {
              return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t || "நண்பகல்" === t && e >= 10 ? e : e + 12
            },
            week: {
              dow: 0,
              doy: 6
            }
          });
        return n
      }))
    },
    "3e92": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "೧",
            2: "೨",
            3: "೩",
            4: "೪",
            5: "೫",
            6: "೬",
            7: "೭",
            8: "೮",
            9: "೯",
            0: "೦"
          },
          a = {
            "೧": "1",
            "೨": "2",
            "೩": "3",
            "೪": "4",
            "೫": "5",
            "೬": "6",
            "೭": "7",
            "೮": "8",
            "೯": "9",
            "೦": "0"
          },
          n = e.defineLocale("kn", {
            months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
            monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
            monthsParseExact: !0,
            weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
            weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
            weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
            longDateFormat: {
              LT: "A h:mm",
              LTS: "A h:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm",
              LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
              sameDay: "[ಇಂದು] LT",
              nextDay: "[ನಾಳೆ] LT",
              nextWeek: "dddd, LT",
              lastDay: "[ನಿನ್ನೆ] LT",
              lastWeek: "[ಕೊನೆಯ] dddd, LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s ನಂತರ",
              past: "%s ಹಿಂದೆ",
              s: "ಕೆಲವು ಕ್ಷಣಗಳು",
              ss: "%d ಸೆಕೆಂಡುಗಳು",
              m: "ಒಂದು ನಿಮಿಷ",
              mm: "%d ನಿಮಿಷ",
              h: "ಒಂದು ಗಂಟೆ",
              hh: "%d ಗಂಟೆ",
              d: "ಒಂದು ದಿನ",
              dd: "%d ದಿನ",
              M: "ಒಂದು ತಿಂಗಳು",
              MM: "%d ತಿಂಗಳು",
              y: "ಒಂದು ವರ್ಷ",
              yy: "%d ವರ್ಷ"
            },
            preparse: function (e) {
              return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, (function (e) {
                return a[e]
              }))
            },
            postformat: function (e) {
              return e.replace(/\d/g, (function (e) {
                return t[e]
              }))
            },
            meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
            meridiemHour: function (e, t) {
              return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, a) {
              return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
            ordinal: function (e) {
              return e + "ನೇ"
            },
            week: {
              dow: 0,
              doy: 6
            }
          });
        return n
      }))
    },
    "423e": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("ar-kw", {
          months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
          monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
          weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
          weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
          },
          week: {
            dow: 0,
            doy: 12
          }
        });
        return t
      }))
    },
    "440c": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, a, n) {
          var r = {
            m: ["eng Minutt", "enger Minutt"],
            h: ["eng Stonn", "enger Stonn"],
            d: ["een Dag", "engem Dag"],
            M: ["ee Mount", "engem Mount"],
            y: ["ee Joer", "engem Joer"]
          };
          return t ? r[a][0] : r[a][1]
        }

        function a(e) {
          var t = e.substr(0, e.indexOf(" "));
          return r(t) ? "a " + e : "an " + e
        }

        function n(e) {
          var t = e.substr(0, e.indexOf(" "));
          return r(t) ? "viru " + e : "virun " + e
        }

        function r(e) {
          if (e = parseInt(e, 10), isNaN(e)) return !1;
          if (e < 0) return !0;
          if (e < 10) return 4 <= e && e <= 7;
          if (e < 100) {
            var t = e % 10,
              a = e / 10;
            return r(0 === t ? a : t)
          }
          if (e < 1e4) {
            while (e >= 10) e /= 10;
            return r(e)
          }
          return e /= 1e3, r(e)
        }
        var i = e.defineLocale("lb", {
          months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
          monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
          monthsParseExact: !0,
          weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
          weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm [Auer]",
            LTS: "H:mm:ss [Auer]",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm [Auer]",
            LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
          },
          calendar: {
            sameDay: "[Haut um] LT",
            sameElse: "L",
            nextDay: "[Muer um] LT",
            nextWeek: "dddd [um] LT",
            lastDay: "[Gëschter um] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 2:
                case 4:
                  return "[Leschten] dddd [um] LT";
                default:
                  return "[Leschte] dddd [um] LT"
              }
            }
          },
          relativeTime: {
            future: a,
            past: n,
            s: "e puer Sekonnen",
            ss: "%d Sekonnen",
            m: t,
            mm: "%d Minutten",
            h: t,
            hh: "%d Stonnen",
            d: t,
            dd: "%d Deeg",
            M: t,
            MM: "%d Méint",
            y: t,
            yy: "%d Joer"
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return i
      }))
    },
    "44e7": function (e, t, a) {
      var n = a("861d"),
        r = a("c6b6"),
        i = a("b622"),
        s = i("match");
      e.exports = function (e) {
        var t;
        return n(e) && (void 0 !== (t = e[s]) ? !!t : "RegExp" == r(e))
      }
    },
    "466d": function (e, t, a) {
      "use strict";
      var n = a("d784"),
        r = a("825a"),
        i = a("50c4"),
        s = a("1d80"),
        o = a("8aa5"),
        d = a("14c3");
      n("match", 1, (function (e, t, a) {
        return [function (t) {
          var a = s(this),
            n = void 0 == t ? void 0 : t[e];
          return void 0 !== n ? n.call(t, a) : new RegExp(t)[e](String(a))
        }, function (e) {
          var n = a(t, e, this);
          if (n.done) return n.value;
          var s = r(e),
            l = String(this);
          if (!s.global) return d(s, l);
          var u = s.unicode;
          s.lastIndex = 0;
          var c, _ = [],
            m = 0;
          while (null !== (c = d(s, l))) {
            var h = String(c[0]);
            _[m] = h, "" === h && (s.lastIndex = o(l, i(s.lastIndex), u)), m++
          }
          return 0 === m ? null : _
        }]
      }))
    },
    4678: function (e, t, a) {
      var n = {
        "./af": "2bfb",
        "./af.js": "2bfb",
        "./ar": "8e73",
        "./ar-dz": "a356",
        "./ar-dz.js": "a356",
        "./ar-kw": "423e",
        "./ar-kw.js": "423e",
        "./ar-ly": "1cfd",
        "./ar-ly.js": "1cfd",
        "./ar-ma": "0a84",
        "./ar-ma.js": "0a84",
        "./ar-sa": "8230",
        "./ar-sa.js": "8230",
        "./ar-tn": "6d83",
        "./ar-tn.js": "6d83",
        "./ar.js": "8e73",
        "./az": "485c",
        "./az.js": "485c",
        "./be": "1fc1",
        "./be.js": "1fc1",
        "./bg": "84aa",
        "./bg.js": "84aa",
        "./bm": "a7fa",
        "./bm.js": "a7fa",
        "./bn": "9043",
        "./bn.js": "9043",
        "./bo": "d26a",
        "./bo.js": "d26a",
        "./br": "6887",
        "./br.js": "6887",
        "./bs": "2554",
        "./bs.js": "2554",
        "./ca": "d716",
        "./ca.js": "d716",
        "./cs": "3c0d",
        "./cs.js": "3c0d",
        "./cv": "03ec",
        "./cv.js": "03ec",
        "./cy": "9797",
        "./cy.js": "9797",
        "./da": "0f14",
        "./da.js": "0f14",
        "./de": "b469",
        "./de-at": "b3eb",
        "./de-at.js": "b3eb",
        "./de-ch": "bb71",
        "./de-ch.js": "bb71",
        "./de.js": "b469",
        "./dv": "598a",
        "./dv.js": "598a",
        "./el": "8d47",
        "./el.js": "8d47",
        "./en-au": "0e6b",
        "./en-au.js": "0e6b",
        "./en-ca": "3886",
        "./en-ca.js": "3886",
        "./en-gb": "39a6",
        "./en-gb.js": "39a6",
        "./en-ie": "e1d3",
        "./en-ie.js": "e1d3",
        "./en-il": "7333",
        "./en-il.js": "7333",
        "./en-in": "ec2e",
        "./en-in.js": "ec2e",
        "./en-nz": "6f50",
        "./en-nz.js": "6f50",
        "./en-sg": "b7e9",
        "./en-sg.js": "b7e9",
        "./eo": "65db",
        "./eo.js": "65db",
        "./es": "898b",
        "./es-do": "0a3c",
        "./es-do.js": "0a3c",
        "./es-us": "55c9",
        "./es-us.js": "55c9",
        "./es.js": "898b",
        "./et": "ec18",
        "./et.js": "ec18",
        "./eu": "0ff2",
        "./eu.js": "0ff2",
        "./fa": "8df48",
        "./fa.js": "8df48",
        "./fi": "81e9",
        "./fi.js": "81e9",
        "./fil": "d69a",
        "./fil.js": "d69a",
        "./fo": "0721",
        "./fo.js": "0721",
        "./fr": "9f26",
        "./fr-ca": "d9f8",
        "./fr-ca.js": "d9f8",
        "./fr-ch": "0e49",
        "./fr-ch.js": "0e49",
        "./fr.js": "9f26",
        "./fy": "7118",
        "./fy.js": "7118",
        "./ga": "5120",
        "./ga.js": "5120",
        "./gd": "f6b46",
        "./gd.js": "f6b46",
        "./gl": "8840",
        "./gl.js": "8840",
        "./gom-deva": "aaf2",
        "./gom-deva.js": "aaf2",
        "./gom-latn": "0caa",
        "./gom-latn.js": "0caa",
        "./gu": "e0c5",
        "./gu.js": "e0c5",
        "./he": "c7aa",
        "./he.js": "c7aa",
        "./hi": "dc4d",
        "./hi.js": "dc4d",
        "./hr": "4ba9",
        "./hr.js": "4ba9",
        "./hu": "5b14",
        "./hu.js": "5b14",
        "./hy-am": "d6b6",
        "./hy-am.js": "d6b6",
        "./id": "5038",
        "./id.js": "5038",
        "./is": "0558",
        "./is.js": "0558",
        "./it": "6e98",
        "./it-ch": "6f12",
        "./it-ch.js": "6f12",
        "./it.js": "6e98",
        "./ja": "079e",
        "./ja.js": "079e",
        "./jv": "b540",
        "./jv.js": "b540",
        "./ka": "201b",
        "./ka.js": "201b",
        "./kk": "6d79",
        "./kk.js": "6d79",
        "./km": "e81d",
        "./km.js": "e81d",
        "./kn": "3e92",
        "./kn.js": "3e92",
        "./ko": "22f8",
        "./ko.js": "22f8",
        "./ku": "2421",
        "./ku.js": "2421",
        "./ky": "9609",
        "./ky.js": "9609",
        "./lb": "440c",
        "./lb.js": "440c",
        "./lo": "b29d",
        "./lo.js": "b29d",
        "./lt": "26f9",
        "./lt.js": "26f9",
        "./lv": "b97c",
        "./lv.js": "b97c",
        "./me": "293c",
        "./me.js": "293c",
        "./mi": "688b",
        "./mi.js": "688b",
        "./mk": "6909",
        "./mk.js": "6909",
        "./ml": "02fb",
        "./ml.js": "02fb",
        "./mn": "958b",
        "./mn.js": "958b",
        "./mr": "39bd",
        "./mr.js": "39bd",
        "./ms": "ebe4",
        "./ms-my": "6403",
        "./ms-my.js": "6403",
        "./ms.js": "ebe4",
        "./mt": "1b45",
        "./mt.js": "1b45",
        "./my": "8689",
        "./my.js": "8689",
        "./nb": "6ce3",
        "./nb.js": "6ce3",
        "./ne": "3a39",
        "./ne.js": "3a39",
        "./nl": "facd",
        "./nl-be": "db29",
        "./nl-be.js": "db29",
        "./nl.js": "facd",
        "./nn": "b84c",
        "./nn.js": "b84c",
        "./oc-lnc": "167b",
        "./oc-lnc.js": "167b",
        "./pa-in": "f3ff",
        "./pa-in.js": "f3ff",
        "./pl": "8d57",
        "./pl.js": "8d57",
        "./pt": "f260",
        "./pt-br": "d2d4",
        "./pt-br.js": "d2d4",
        "./pt.js": "f260",
        "./ro": "972c",
        "./ro.js": "972c",
        "./ru": "957c",
        "./ru.js": "957c",
        "./sd": "6784",
        "./sd.js": "6784",
        "./se": "ffff",
        "./se.js": "ffff",
        "./si": "eda5",
        "./si.js": "eda5",
        "./sk": "7be6",
        "./sk.js": "7be6",
        "./sl": "8155",
        "./sl.js": "8155",
        "./sq": "c8f3",
        "./sq.js": "c8f3",
        "./sr": "cf1e",
        "./sr-cyrl": "13e9",
        "./sr-cyrl.js": "13e9",
        "./sr.js": "cf1e",
        "./ss": "52bd",
        "./ss.js": "52bd",
        "./sv": "5fbd",
        "./sv.js": "5fbd",
        "./sw": "74dc",
        "./sw.js": "74dc",
        "./ta": "3de5",
        "./ta.js": "3de5",
        "./te": "5cbb",
        "./te.js": "5cbb",
        "./tet": "576c",
        "./tet.js": "576c",
        "./tg": "3b1b",
        "./tg.js": "3b1b",
        "./th": "10e8",
        "./th.js": "10e8",
        "./tk": "5aff",
        "./tk.js": "5aff",
        "./tl-ph": "0f38",
        "./tl-ph.js": "0f38",
        "./tlh": "cf755",
        "./tlh.js": "cf755",
        "./tr": "0e81",
        "./tr.js": "0e81",
        "./tzl": "cf51",
        "./tzl.js": "cf51",
        "./tzm": "c109",
        "./tzm-latn": "b53d",
        "./tzm-latn.js": "b53d",
        "./tzm.js": "c109",
        "./ug-cn": "6117",
        "./ug-cn.js": "6117",
        "./uk": "ada2",
        "./uk.js": "ada2",
        "./ur": "5294",
        "./ur.js": "5294",
        "./uz": "2e8c",
        "./uz-latn": "010e",
        "./uz-latn.js": "010e",
        "./uz.js": "2e8c",
        "./vi": "2921",
        "./vi.js": "2921",
        "./x-pseudo": "fd7e",
        "./x-pseudo.js": "fd7e",
        "./yo": "7f33",
        "./yo.js": "7f33",
        "./zh-cn": "5c3a",
        "./zh-cn.js": "5c3a",
        "./zh-hk": "49ab",
        "./zh-hk.js": "49ab",
        "./zh-mo": "3a6c",
        "./zh-mo.js": "3a6c",
        "./zh-tw": "90ea",
        "./zh-tw.js": "90ea"
      };

      function r(e) {
        var t = i(e);
        return a(t)
      }

      function i(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return n[e]
      }
      r.keys = function () {
        return Object.keys(n)
      }, r.resolve = i, e.exports = r, r.id = "4678"
    },
    "485c": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı"
          },
          a = e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[bugün saat] LT",
              nextDay: "[sabah saat] LT",
              nextWeek: "[gələn həftə] dddd [saat] LT",
              lastDay: "[dünən] LT",
              lastWeek: "[keçən həftə] dddd [saat] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s sonra",
              past: "%s əvvəl",
              s: "birneçə saniyə",
              ss: "%d saniyə",
              m: "bir dəqiqə",
              mm: "%d dəqiqə",
              h: "bir saat",
              hh: "%d saat",
              d: "bir gün",
              dd: "%d gün",
              M: "bir ay",
              MM: "%d ay",
              y: "bir il",
              yy: "%d il"
            },
            meridiemParse: /gecə|səhər|gündüz|axşam/,
            isPM: function (e) {
              return /^(gündüz|axşam)$/.test(e)
            },
            meridiem: function (e, t, a) {
              return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
            ordinal: function (e) {
              if (0 === e) return e + "-ıncı";
              var a = e % 10,
                n = e % 100 - a,
                r = e >= 100 ? 100 : null;
              return e + (t[a] || t[n] || t[r])
            },
            week: {
              dow: 1,
              doy: 7
            }
          });
        return a
      }))
    },
    "49ab": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("zh-hk", {
          months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
          monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
          weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
          weekdaysMin: "日_一_二_三_四_五_六".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日dddd HH:mm",
            l: "YYYY/M/D",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日dddd HH:mm"
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
          },
          meridiem: function (e, t, a) {
            var n = 100 * e + t;
            return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1200 ? "上午" : 1200 === n ? "中午" : n < 1800 ? "下午" : "晚上"
          },
          calendar: {
            sameDay: "[今天]LT",
            nextDay: "[明天]LT",
            nextWeek: "[下]ddddLT",
            lastDay: "[昨天]LT",
            lastWeek: "[上]ddddLT",
            sameElse: "L"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
          ordinal: function (e, t) {
            switch (t) {
              case "d":
              case "D":
              case "DDD":
                return e + "日";
              case "M":
                return e + "月";
              case "w":
              case "W":
                return e + "週";
              default:
                return e
            }
          },
          relativeTime: {
            future: "%s後",
            past: "%s前",
            s: "幾秒",
            ss: "%d 秒",
            m: "1 分鐘",
            mm: "%d 分鐘",
            h: "1 小時",
            hh: "%d 小時",
            d: "1 天",
            dd: "%d 天",
            M: "1 個月",
            MM: "%d 個月",
            y: "1 年",
            yy: "%d 年"
          }
        });
        return t
      }))
    },
    "4ba9": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, a) {
          var n = e + " ";
          switch (a) {
            case "ss":
              return n += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi", n;
            case "m":
              return t ? "jedna minuta" : "jedne minute";
            case "mm":
              return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta", n;
            case "h":
              return t ? "jedan sat" : "jednog sata";
            case "hh":
              return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati", n;
            case "dd":
              return n += 1 === e ? "dan" : "dana", n;
            case "MM":
              return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci", n;
            case "yy":
              return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina", n
          }
        }
        var a = e.defineLocale("hr", {
          months: {
            format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
            standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
          },
          monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
          monthsParseExact: !0,
          weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
          weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "Do MMMM YYYY",
            LLL: "Do MMMM YYYY H:mm",
            LLLL: "dddd, Do MMMM YYYY H:mm"
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[u] [nedjelju] [u] LT";
                case 3:
                  return "[u] [srijedu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT"
              }
            },
            lastDay: "[jučer u] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[prošlu] [nedjelju] [u] LT";
                case 3:
                  return "[prošlu] [srijedu] [u] LT";
                case 6:
                  return "[prošle] [subote] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[prošli] dddd [u] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: "dan",
            dd: t,
            M: "mjesec",
            MM: t,
            y: "godinu",
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 7
          }
        });
        return a
      }))
    },
    "4d63": function (e, t, a) {
      var n = a("83ab"),
        r = a("da84"),
        i = a("94ca"),
        s = a("7156"),
        o = a("9bf2").f,
        d = a("241c").f,
        l = a("44e7"),
        u = a("ad6d"),
        c = a("9f7f"),
        _ = a("6eeb"),
        m = a("d039"),
        h = a("69f3").set,
        f = a("2626"),
        p = a("b622"),
        y = p("match"),
        M = r.RegExp,
        g = M.prototype,
        v = /a/g,
        L = /a/g,
        b = new M(v) !== v,
        k = c.UNSUPPORTED_Y,
        Y = n && i("RegExp", !b || k || m((function () {
          return L[y] = !1, M(v) != v || M(L) == L || "/a/i" != M(v, "i")
        })));
      if (Y) {
        var D = function (e, t) {
            var a, n = this instanceof D,
              r = l(e),
              i = void 0 === t;
            if (!n && r && e.constructor === D && i) return e;
            b ? r && !i && (e = e.source) : e instanceof D && (i && (t = u.call(e)), e = e.source), k && (a = !!t && t.indexOf("y") > -1, a && (t = t.replace(/y/g, "")));
            var o = s(b ? new M(e, t) : M(e, t), n ? this : g, D);
            return k && a && h(o, {
              sticky: a
            }), o
          },
          w = function (e) {
            e in D || o(D, e, {
              configurable: !0,
              get: function () {
                return M[e]
              },
              set: function (t) {
                M[e] = t
              }
            })
          },
          x = d(M),
          T = 0;
        while (x.length > T) w(x[T++]);
        g.constructor = D, D.prototype = g, _(r, "RegExp", D)
      }
      f("RegExp")
    },
    5038: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("id", {
          months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
          monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
          weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
          weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
          weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
          },
          meridiemParse: /pagi|siang|sore|malam/,
          meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
          },
          meridiem: function (e, t, a) {
            return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
          },
          calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Besok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kemarin pukul] LT",
            lastWeek: "dddd [lalu pukul] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "dalam %s",
            past: "%s yang lalu",
            s: "beberapa detik",
            ss: "%d detik",
            m: "semenit",
            mm: "%d menit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
          },
          week: {
            dow: 0,
            doy: 6
          }
        });
        return t
      }))
    },
    5120: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig"],
          a = ["Ean", "Feabh", "Márt", "Aib", "Beal", "Meith", "Iúil", "Lún", "M.F.", "D.F.", "Samh", "Noll"],
          n = ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"],
          r = ["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"],
          i = ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"],
          s = e.defineLocale("ga", {
            months: t,
            monthsShort: a,
            monthsParseExact: !0,
            weekdays: n,
            weekdaysShort: r,
            weekdaysMin: i,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Inniu ag] LT",
              nextDay: "[Amárach ag] LT",
              nextWeek: "dddd [ag] LT",
              lastDay: "[Inné ag] LT",
              lastWeek: "dddd [seo caite] [ag] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "i %s",
              past: "%s ó shin",
              s: "cúpla soicind",
              ss: "%d soicind",
              m: "nóiméad",
              mm: "%d nóiméad",
              h: "uair an chloig",
              hh: "%d uair an chloig",
              d: "lá",
              dd: "%d lá",
              M: "mí",
              MM: "%d míonna",
              y: "bliain",
              yy: "%d bliain"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (e) {
              var t = 1 === e ? "d" : e % 10 === 2 ? "na" : "mh";
              return e + t
            },
            week: {
              dow: 1,
              doy: 4
            }
          });
        return s
      }))
    },
    5294: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
          a = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"],
          n = e.defineLocale("ur", {
            months: t,
            monthsShort: t,
            weekdays: a,
            weekdaysShort: a,
            weekdaysMin: a,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function (e) {
              return "شام" === e
            },
            meridiem: function (e, t, a) {
              return e < 12 ? "صبح" : "شام"
            },
            calendar: {
              sameDay: "[آج بوقت] LT",
              nextDay: "[کل بوقت] LT",
              nextWeek: "dddd [بوقت] LT",
              lastDay: "[گذشتہ روز بوقت] LT",
              lastWeek: "[گذشتہ] dddd [بوقت] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s بعد",
              past: "%s قبل",
              s: "چند سیکنڈ",
              ss: "%d سیکنڈ",
              m: "ایک منٹ",
              mm: "%d منٹ",
              h: "ایک گھنٹہ",
              hh: "%d گھنٹے",
              d: "ایک دن",
              dd: "%d دن",
              M: "ایک ماہ",
              MM: "%d ماہ",
              y: "ایک سال",
              yy: "%d سال"
            },
            preparse: function (e) {
              return e.replace(/،/g, ",")
            },
            postformat: function (e) {
              return e.replace(/,/g, "،")
            },
            week: {
              dow: 1,
              doy: 4
            }
          });
        return n
      }))
    },
    "52bd": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("ss", {
          months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
          monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
          weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
          weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
          weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
          },
          calendar: {
            sameDay: "[Namuhla nga] LT",
            nextDay: "[Kusasa nga] LT",
            nextWeek: "dddd [nga] LT",
            lastDay: "[Itolo nga] LT",
            lastWeek: "dddd [leliphelile] [nga] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "nga %s",
            past: "wenteka nga %s",
            s: "emizuzwana lomcane",
            ss: "%d mzuzwana",
            m: "umzuzu",
            mm: "%d emizuzu",
            h: "lihora",
            hh: "%d emahora",
            d: "lilanga",
            dd: "%d emalanga",
            M: "inyanga",
            MM: "%d tinyanga",
            y: "umnyaka",
            yy: "%d iminyaka"
          },
          meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
          meridiem: function (e, t, a) {
            return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
          },
          meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: "%d",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    5319: function (e, t, a) {
      "use strict";
      var n = a("d784"),
        r = a("825a"),
        i = a("7b0b"),
        s = a("50c4"),
        o = a("a691"),
        d = a("1d80"),
        l = a("8aa5"),
        u = a("14c3"),
        c = Math.max,
        _ = Math.min,
        m = Math.floor,
        h = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        f = /\$([$&'`]|\d\d?)/g,
        p = function (e) {
          return void 0 === e ? e : String(e)
        };
      n("replace", 2, (function (e, t, a, n) {
        var y = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
          M = n.REPLACE_KEEPS_$0,
          g = y ? "$" : "$0";
        return [function (a, n) {
          var r = d(this),
            i = void 0 == a ? void 0 : a[e];
          return void 0 !== i ? i.call(a, r, n) : t.call(String(r), a, n)
        }, function (e, n) {
          if (!y && M || "string" === typeof n && -1 === n.indexOf(g)) {
            var i = a(t, e, this, n);
            if (i.done) return i.value
          }
          var d = r(e),
            m = String(this),
            h = "function" === typeof n;
          h || (n = String(n));
          var f = d.global;
          if (f) {
            var L = d.unicode;
            d.lastIndex = 0
          }
          var b = [];
          while (1) {
            var k = u(d, m);
            if (null === k) break;
            if (b.push(k), !f) break;
            var Y = String(k[0]);
            "" === Y && (d.lastIndex = l(m, s(d.lastIndex), L))
          }
          for (var D = "", w = 0, x = 0; x < b.length; x++) {
            k = b[x];
            for (var T = String(k[0]), S = c(_(o(k.index), m.length), 0), H = [], j = 1; j < k.length; j++) H.push(p(k[j]));
            var P = k.groups;
            if (h) {
              var O = [T].concat(H, S, m);
              void 0 !== P && O.push(P);
              var A = String(n.apply(void 0, O))
            } else A = v(T, m, S, H, P, n);
            S >= w && (D += m.slice(w, S) + A, w = S + T.length)
          }
          return D + m.slice(w)
        }];

        function v(e, a, n, r, s, o) {
          var d = n + e.length,
            l = r.length,
            u = f;
          return void 0 !== s && (s = i(s), u = h), t.call(o, u, (function (t, i) {
            var o;
            switch (i.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return e;
              case "`":
                return a.slice(0, n);
              case "'":
                return a.slice(d);
              case "<":
                o = s[i.slice(1, -1)];
                break;
              default:
                var u = +i;
                if (0 === u) return t;
                if (u > l) {
                  var c = m(u / 10);
                  return 0 === c ? t : c <= l ? void 0 === r[c - 1] ? i.charAt(1) : r[c - 1] + i.charAt(1) : t
                }
                o = r[u - 1]
            }
            return void 0 === o ? "" : o
          }))
        }
      }))
    },
    "55c9": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
          a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
          r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          i = e.defineLocale("es-us", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, n) {
              return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "MM/DD/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY h:mm A",
              LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
              sameDay: function () {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              },
              nextDay: function () {
                return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              },
              nextWeek: function () {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              },
              lastDay: function () {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              },
              lastWeek: function () {
                return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "en %s",
              past: "hace %s",
              s: "unos segundos",
              ss: "%d segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "una hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              M: "un mes",
              MM: "%d meses",
              y: "un año",
              yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
              dow: 0,
              doy: 6
            }
          });
        return i
      }))
    },
    "576c": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("tet", {
          months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
          monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
          weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
          weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
          weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Ohin iha] LT",
            nextDay: "[Aban iha] LT",
            nextWeek: "dddd [iha] LT",
            lastDay: "[Horiseik iha] LT",
            lastWeek: "dddd [semana kotuk] [iha] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "iha %s",
            past: "%s liuba",
            s: "segundu balun",
            ss: "segundu %d",
            m: "minutu ida",
            mm: "minutu %d",
            h: "oras ida",
            hh: "oras %d",
            d: "loron ida",
            dd: "loron %d",
            M: "fulan ida",
            MM: "fulan %d",
            y: "tinan ida",
            yy: "tinan %d"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (e) {
            var t = e % 10,
              a = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + a
          },
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    5899: function (e, t) {
      e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
    },
    "58a8": function (e, t, a) {
      var n = a("1d80"),
        r = a("5899"),
        i = "[" + r + "]",
        s = RegExp("^" + i + i + "*"),
        o = RegExp(i + i + "*$"),
        d = function (e) {
          return function (t) {
            var a = String(n(t));
            return 1 & e && (a = a.replace(s, "")), 2 & e && (a = a.replace(o, "")), a
          }
        };
      e.exports = {
        start: d(1),
        end: d(2),
        trim: d(3)
      }
    },
    "598a": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
          a = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"],
          n = e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: a,
            weekdaysShort: a,
            weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "D/M/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /މކ|މފ/,
            isPM: function (e) {
              return "މފ" === e
            },
            meridiem: function (e, t, a) {
              return e < 12 ? "މކ" : "މފ"
            },
            calendar: {
              sameDay: "[މިއަދު] LT",
              nextDay: "[މާދަމާ] LT",
              nextWeek: "dddd LT",
              lastDay: "[އިއްޔެ] LT",
              lastWeek: "[ފާއިތުވި] dddd LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "ތެރޭގައި %s",
              past: "ކުރިން %s",
              s: "ސިކުންތުކޮޅެއް",
              ss: "d% ސިކުންތު",
              m: "މިނިޓެއް",
              mm: "މިނިޓު %d",
              h: "ގަޑިއިރެއް",
              hh: "ގަޑިއިރު %d",
              d: "ދުވަހެއް",
              dd: "ދުވަސް %d",
              M: "މަހެއް",
              MM: "މަސް %d",
              y: "އަހަރެއް",
              yy: "އަހަރު %d"
            },
            preparse: function (e) {
              return e.replace(/،/g, ",")
            },
            postformat: function (e) {
              return e.replace(/,/g, "،")
            },
            week: {
              dow: 7,
              doy: 12
            }
          });
        return n
      }))
    },
    "5a34": function (e, t, a) {
      var n = a("44e7");
      e.exports = function (e) {
        if (n(e)) throw TypeError("The method doesn't accept regular expressions");
        return e
      }
    },
    "5aff": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "'inji",
            5: "'inji",
            8: "'inji",
            70: "'inji",
            80: "'inji",
            2: "'nji",
            7: "'nji",
            20: "'nji",
            50: "'nji",
            3: "'ünji",
            4: "'ünji",
            100: "'ünji",
            6: "'njy",
            9: "'unjy",
            10: "'unjy",
            30: "'unjy",
            60: "'ynjy",
            90: "'ynjy"
          },
          a = e.defineLocale("tk", {
            months: "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split("_"),
            monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"),
            weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"),
            weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),
            weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[bugün sagat] LT",
              nextDay: "[ertir sagat] LT",
              nextWeek: "[indiki] dddd [sagat] LT",
              lastDay: "[düýn] LT",
              lastWeek: "[geçen] dddd [sagat] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s soň",
              past: "%s öň",
              s: "birnäçe sekunt",
              m: "bir minut",
              mm: "%d minut",
              h: "bir sagat",
              hh: "%d sagat",
              d: "bir gün",
              dd: "%d gün",
              M: "bir aý",
              MM: "%d aý",
              y: "bir ýyl",
              yy: "%d ýyl"
            },
            ordinal: function (e, a) {
              switch (a) {
                case "d":
                case "D":
                case "Do":
                case "DD":
                  return e;
                default:
                  if (0 === e) return e + "'unjy";
                  var n = e % 10,
                    r = e % 100 - n,
                    i = e >= 100 ? 100 : null;
                  return e + (t[n] || t[r] || t[i])
              }
            },
            week: {
              dow: 1,
              doy: 7
            }
          });
        return a
      }))
    },
    "5b14": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");

        function a(e, t, a, n) {
          var r = e;
          switch (a) {
            case "s":
              return n || t ? "néhány másodperc" : "néhány másodperce";
            case "ss":
              return r + (n || t) ? " másodperc" : " másodperce";
            case "m":
              return "egy" + (n || t ? " perc" : " perce");
            case "mm":
              return r + (n || t ? " perc" : " perce");
            case "h":
              return "egy" + (n || t ? " óra" : " órája");
            case "hh":
              return r + (n || t ? " óra" : " órája");
            case "d":
              return "egy" + (n || t ? " nap" : " napja");
            case "dd":
              return r + (n || t ? " nap" : " napja");
            case "M":
              return "egy" + (n || t ? " hónap" : " hónapja");
            case "MM":
              return r + (n || t ? " hónap" : " hónapja");
            case "y":
              return "egy" + (n || t ? " év" : " éve");
            case "yy":
              return r + (n || t ? " év" : " éve")
          }
          return ""
        }

        function n(e) {
          return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]"
        }
        var r = e.defineLocale("hu", {
          months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
          monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
          weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
          weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
          weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY. MMMM D.",
            LLL: "YYYY. MMMM D. H:mm",
            LLLL: "YYYY. MMMM D., dddd H:mm"
          },
          meridiemParse: /de|du/i,
          isPM: function (e) {
            return "u" === e.charAt(1).toLowerCase()
          },
          meridiem: function (e, t, a) {
            return e < 12 ? !0 === a ? "de" : "DE" : !0 === a ? "du" : "DU"
          },
          calendar: {
            sameDay: "[ma] LT[-kor]",
            nextDay: "[holnap] LT[-kor]",
            nextWeek: function () {
              return n.call(this, !0)
            },
            lastDay: "[tegnap] LT[-kor]",
            lastWeek: function () {
              return n.call(this, !1)
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "%s múlva",
            past: "%s",
            s: a,
            ss: a,
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: a,
            dd: a,
            M: a,
            MM: a,
            y: a,
            yy: a
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return r
      }))
    },
    "5c3a": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("zh-cn", {
          months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
          monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
          weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
          weekdaysMin: "日_一_二_三_四_五_六".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日Ah点mm分",
            LLLL: "YYYY年M月D日ddddAh点mm分",
            l: "YYYY/M/D",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日dddd HH:mm"
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
          },
          meridiem: function (e, t, a) {
            var n = 100 * e + t;
            return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上"
          },
          calendar: {
            sameDay: "[今天]LT",
            nextDay: "[明天]LT",
            nextWeek: function (e) {
              return e.week() !== this.week() ? "[下]dddLT" : "[本]dddLT"
            },
            lastDay: "[昨天]LT",
            lastWeek: function (e) {
              return this.week() !== e.week() ? "[上]dddLT" : "[本]dddLT"
            },
            sameElse: "L"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
          ordinal: function (e, t) {
            switch (t) {
              case "d":
              case "D":
              case "DDD":
                return e + "日";
              case "M":
                return e + "月";
              case "w":
              case "W":
                return e + "周";
              default:
                return e
            }
          },
          relativeTime: {
            future: "%s后",
            past: "%s前",
            s: "几秒",
            ss: "%d 秒",
            m: "1 分钟",
            mm: "%d 分钟",
            h: "1 小时",
            hh: "%d 小时",
            d: "1 天",
            dd: "%d 天",
            M: "1 个月",
            MM: "%d 个月",
            y: "1 年",
            yy: "%d 年"
          },
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    "5cbb": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("te", {
          months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
          monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
          monthsParseExact: !0,
          weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
          weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
          weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
          longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
          },
          calendar: {
            sameDay: "[నేడు] LT",
            nextDay: "[రేపు] LT",
            nextWeek: "dddd, LT",
            lastDay: "[నిన్న] LT",
            lastWeek: "[గత] dddd, LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s లో",
            past: "%s క్రితం",
            s: "కొన్ని క్షణాలు",
            ss: "%d సెకన్లు",
            m: "ఒక నిమిషం",
            mm: "%d నిమిషాలు",
            h: "ఒక గంట",
            hh: "%d గంటలు",
            d: "ఒక రోజు",
            dd: "%d రోజులు",
            M: "ఒక నెల",
            MM: "%d నెలలు",
            y: "ఒక సంవత్సరం",
            yy: "%d సంవత్సరాలు"
          },
          dayOfMonthOrdinalParse: /\d{1,2}వ/,
          ordinal: "%dవ",
          meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
          meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
          },
          meridiem: function (e, t, a) {
            return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
          },
          week: {
            dow: 0,
            doy: 6
          }
        });
        return t
      }))
    },
    "5fbd": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("sv", {
          months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
          monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
          weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
          weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
          weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd D MMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Idag] LT",
            nextDay: "[Imorgon] LT",
            lastDay: "[Igår] LT",
            nextWeek: "[På] dddd LT",
            lastWeek: "[I] dddd[s] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "om %s",
            past: "för %s sedan",
            s: "några sekunder",
            ss: "%d sekunder",
            m: "en minut",
            mm: "%d minuter",
            h: "en timme",
            hh: "%d timmar",
            d: "en dag",
            dd: "%d dagar",
            M: "en månad",
            MM: "%d månader",
            y: "ett år",
            yy: "%d år"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
          ordinal: function (e) {
            var t = e % 10,
              a = 1 === ~~(e % 100 / 10) ? ":e" : 1 === t || 2 === t ? ":a" : ":e";
            return e + a
          },
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    6062: function (e, t, a) {
      "use strict";
      var n = a("6d61"),
        r = a("6566");
      e.exports = n("Set", (function (e) {
        return function () {
          return e(this, arguments.length ? arguments[0] : void 0)
        }
      }), r)
    },
    6117: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js language configuration
        var t = e.defineLocale("ug-cn", {
          months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
          monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
          weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
          weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
          weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
            LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
            LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
          },
          meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
          meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12
          },
          meridiem: function (e, t, a) {
            var n = 100 * e + t;
            return n < 600 ? "يېرىم كېچە" : n < 900 ? "سەھەر" : n < 1130 ? "چۈشتىن بۇرۇن" : n < 1230 ? "چۈش" : n < 1800 ? "چۈشتىن كېيىن" : "كەچ"
          },
          calendar: {
            sameDay: "[بۈگۈن سائەت] LT",
            nextDay: "[ئەتە سائەت] LT",
            nextWeek: "[كېلەركى] dddd [سائەت] LT",
            lastDay: "[تۆنۈگۈن] LT",
            lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s كېيىن",
            past: "%s بۇرۇن",
            s: "نەچچە سېكونت",
            ss: "%d سېكونت",
            m: "بىر مىنۇت",
            mm: "%d مىنۇت",
            h: "بىر سائەت",
            hh: "%d سائەت",
            d: "بىر كۈن",
            dd: "%d كۈن",
            M: "بىر ئاي",
            MM: "%d ئاي",
            y: "بىر يىل",
            yy: "%d يىل"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
          ordinal: function (e, t) {
            switch (t) {
              case "d":
              case "D":
              case "DDD":
                return e + "-كۈنى";
              case "w":
              case "W":
                return e + "-ھەپتە";
              default:
                return e
            }
          },
          preparse: function (e) {
            return e.replace(/،/g, ",")
          },
          postformat: function (e) {
            return e.replace(/,/g, "،")
          },
          week: {
            dow: 1,
            doy: 7
          }
        });
        return t
      }))
    },
    "62e4": function (e, t) {
      e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
          enumerable: !0,
          get: function () {
            return e.l
          }
        }), Object.defineProperty(e, "id", {
          enumerable: !0,
          get: function () {
            return e.i
          }
        }), e.webpackPolyfill = 1), e
      }
    },
    6403: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("ms-my", {
          months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
          monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
          weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
          weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
          weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
          },
          meridiemParse: /pagi|tengahari|petang|malam/,
          meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
          },
          meridiem: function (e, t, a) {
            return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
          },
          calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            ss: "%d saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
          },
          week: {
            dow: 1,
            doy: 7
          }
        });
        return t
      }))
    },
    6566: function (e, t, a) {
      "use strict";
      var n = a("9bf2").f,
        r = a("7c73"),
        i = a("e2cc"),
        s = a("0366"),
        o = a("19aa"),
        d = a("2266"),
        l = a("7dd0"),
        u = a("2626"),
        c = a("83ab"),
        _ = a("f183").fastKey,
        m = a("69f3"),
        h = m.set,
        f = m.getterFor;
      e.exports = {
        getConstructor: function (e, t, a, l) {
          var u = e((function (e, n) {
              o(e, u, t), h(e, {
                type: t,
                index: r(null),
                first: void 0,
                last: void 0,
                size: 0
              }), c || (e.size = 0), void 0 != n && d(n, e[l], e, a)
            })),
            m = f(t),
            p = function (e, t, a) {
              var n, r, i = m(e),
                s = y(e, t);
              return s ? s.value = a : (i.last = s = {
                index: r = _(t, !0),
                key: t,
                value: a,
                previous: n = i.last,
                next: void 0,
                removed: !1
              }, i.first || (i.first = s), n && (n.next = s), c ? i.size++ : e.size++, "F" !== r && (i.index[r] = s)), e
            },
            y = function (e, t) {
              var a, n = m(e),
                r = _(t);
              if ("F" !== r) return n.index[r];
              for (a = n.first; a; a = a.next)
                if (a.key == t) return a
            };
          return i(u.prototype, {
            clear: function () {
              var e = this,
                t = m(e),
                a = t.index,
                n = t.first;
              while (n) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete a[n.index], n = n.next;
              t.first = t.last = void 0, c ? t.size = 0 : e.size = 0
            },
            delete: function (e) {
              var t = this,
                a = m(t),
                n = y(t, e);
              if (n) {
                var r = n.next,
                  i = n.previous;
                delete a.index[n.index], n.removed = !0, i && (i.next = r), r && (r.previous = i), a.first == n && (a.first = r), a.last == n && (a.last = i), c ? a.size-- : t.size--
              }
              return !!n
            },
            forEach: function (e) {
              var t, a = m(this),
                n = s(e, arguments.length > 1 ? arguments[1] : void 0, 3);
              while (t = t ? t.next : a.first) {
                n(t.value, t.key, this);
                while (t && t.removed) t = t.previous
              }
            },
            has: function (e) {
              return !!y(this, e)
            }
          }), i(u.prototype, a ? {
            get: function (e) {
              var t = y(this, e);
              return t && t.value
            },
            set: function (e, t) {
              return p(this, 0 === e ? 0 : e, t)
            }
          } : {
            add: function (e) {
              return p(this, e = 0 === e ? 0 : e, e)
            }
          }), c && n(u.prototype, "size", {
            get: function () {
              return m(this).size
            }
          }), u
        },
        setStrong: function (e, t, a) {
          var n = t + " Iterator",
            r = f(t),
            i = f(n);
          l(e, t, (function (e, t) {
            h(this, {
              type: n,
              target: e,
              state: r(e),
              kind: t,
              last: void 0
            })
          }), (function () {
            var e = i(this),
              t = e.kind,
              a = e.last;
            while (a && a.removed) a = a.previous;
            return e.target && (e.last = a = a ? a.next : e.state.first) ? "keys" == t ? {
              value: a.key,
              done: !1
            } : "values" == t ? {
              value: a.value,
              done: !1
            } : {
              value: [a.key, a.value],
              done: !1
            } : (e.target = void 0, {
              value: void 0,
              done: !0
            })
          }), a ? "entries" : "values", !a, !0), u(t)
        }
      }
    },
    "65db": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("eo", {
          months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
          monthsShort: "jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split("_"),
          weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
          weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
          weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "[la] D[-an de] MMMM, YYYY",
            LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
            LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
            llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm"
          },
          meridiemParse: /[ap]\.t\.m/i,
          isPM: function (e) {
            return "p" === e.charAt(0).toLowerCase()
          },
          meridiem: function (e, t, a) {
            return e > 11 ? a ? "p.t.m." : "P.T.M." : a ? "a.t.m." : "A.T.M."
          },
          calendar: {
            sameDay: "[Hodiaŭ je] LT",
            nextDay: "[Morgaŭ je] LT",
            nextWeek: "dddd[n je] LT",
            lastDay: "[Hieraŭ je] LT",
            lastWeek: "[pasintan] dddd[n je] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "post %s",
            past: "antaŭ %s",
            s: "kelkaj sekundoj",
            ss: "%d sekundoj",
            m: "unu minuto",
            mm: "%d minutoj",
            h: "unu horo",
            hh: "%d horoj",
            d: "unu tago",
            dd: "%d tagoj",
            M: "unu monato",
            MM: "%d monatoj",
            y: "unu jaro",
            yy: "%d jaroj"
          },
          dayOfMonthOrdinalParse: /\d{1,2}a/,
          ordinal: "%da",
          week: {
            dow: 1,
            doy: 7
          }
        });
        return t
      }))
    },
    6784: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
          a = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"],
          n = e.defineLocale("sd", {
            months: t,
            monthsShort: t,
            weekdays: a,
            weekdaysShort: a,
            weekdaysMin: a,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function (e) {
              return "شام" === e
            },
            meridiem: function (e, t, a) {
              return e < 12 ? "صبح" : "شام"
            },
            calendar: {
              sameDay: "[اڄ] LT",
              nextDay: "[سڀاڻي] LT",
              nextWeek: "dddd [اڳين هفتي تي] LT",
              lastDay: "[ڪالهه] LT",
              lastWeek: "[گزريل هفتي] dddd [تي] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s پوء",
              past: "%s اڳ",
              s: "چند سيڪنڊ",
              ss: "%d سيڪنڊ",
              m: "هڪ منٽ",
              mm: "%d منٽ",
              h: "هڪ ڪلاڪ",
              hh: "%d ڪلاڪ",
              d: "هڪ ڏينهن",
              dd: "%d ڏينهن",
              M: "هڪ مهينو",
              MM: "%d مهينا",
              y: "هڪ سال",
              yy: "%d سال"
            },
            preparse: function (e) {
              return e.replace(/،/g, ",")
            },
            postformat: function (e) {
              return e.replace(/,/g, "،")
            },
            week: {
              dow: 1,
              doy: 4
            }
          });
        return n
      }))
    },
    6887: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, a) {
          var n = {
            mm: "munutenn",
            MM: "miz",
            dd: "devezh"
          };
          return e + " " + r(n[a], e)
        }

        function a(e) {
          switch (n(e)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
              return e + " bloaz";
            default:
              return e + " vloaz"
          }
        }

        function n(e) {
          return e > 9 ? n(e % 10) : e
        }

        function r(e, t) {
          return 2 === t ? i(e) : e
        }

        function i(e) {
          var t = {
            m: "v",
            b: "v",
            d: "z"
          };
          return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
        }
        var s = [/^gen/i, /^c[ʼ\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i],
          o = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
          d = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
          l = /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
          u = [/^sul/i, /^lun/i, /^meurzh/i, /^merc[ʼ\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i],
          c = [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
          _ = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i],
          m = e.defineLocale("br", {
            months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParse: _,
            fullWeekdaysParse: u,
            shortWeekdaysParse: c,
            minWeekdaysParse: _,
            monthsRegex: o,
            monthsShortRegex: o,
            monthsStrictRegex: d,
            monthsShortStrictRegex: l,
            monthsParse: s,
            longMonthsParse: s,
            shortMonthsParse: s,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [a viz] MMMM YYYY",
              LLL: "D [a viz] MMMM YYYY HH:mm",
              LLLL: "dddd, D [a viz] MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Hiziv da] LT",
              nextDay: "[Warcʼhoazh da] LT",
              nextWeek: "dddd [da] LT",
              lastDay: "[Decʼh da] LT",
              lastWeek: "dddd [paset da] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "a-benn %s",
              past: "%s ʼzo",
              s: "un nebeud segondennoù",
              ss: "%d eilenn",
              m: "ur vunutenn",
              mm: t,
              h: "un eur",
              hh: "%d eur",
              d: "un devezh",
              dd: t,
              M: "ur miz",
              MM: t,
              y: "ur bloaz",
              yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function (e) {
              var t = 1 === e ? "añ" : "vet";
              return e + t
            },
            week: {
              dow: 1,
              doy: 4
            },
            meridiemParse: /a.m.|g.m./,
            isPM: function (e) {
              return "g.m." === e
            },
            meridiem: function (e, t, a) {
              return e < 12 ? "a.m." : "g.m."
            }
          });
        return m
      }))
    },
    "688b": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("mi", {
          months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
          monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
          monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
          weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
          weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
          weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [i] HH:mm",
            LLLL: "dddd, D MMMM YYYY [i] HH:mm"
          },
          calendar: {
            sameDay: "[i teie mahana, i] LT",
            nextDay: "[apopo i] LT",
            nextWeek: "dddd [i] LT",
            lastDay: "[inanahi i] LT",
            lastWeek: "dddd [whakamutunga i] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "i roto i %s",
            past: "%s i mua",
            s: "te hēkona ruarua",
            ss: "%d hēkona",
            m: "he meneti",
            mm: "%d meneti",
            h: "te haora",
            hh: "%d haora",
            d: "he ra",
            dd: "%d ra",
            M: "he marama",
            MM: "%d marama",
            y: "he tau",
            yy: "%d tau"
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    6909: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("mk", {
          months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
          monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
          weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
          weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
          weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
          },
          calendar: {
            sameDay: "[Денес во] LT",
            nextDay: "[Утре во] LT",
            nextWeek: "[Во] dddd [во] LT",
            lastDay: "[Вчера во] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                case 6:
                  return "[Изминатата] dddd [во] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[Изминатиот] dddd [во] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "за %s",
            past: "пред %s",
            s: "неколку секунди",
            ss: "%d секунди",
            m: "една минута",
            mm: "%d минути",
            h: "еден час",
            hh: "%d часа",
            d: "еден ден",
            dd: "%d дена",
            M: "еден месец",
            MM: "%d месеци",
            y: "една година",
            yy: "%d години"
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
          ordinal: function (e) {
            var t = e % 10,
              a = e % 100;
            return 0 === e ? e + "-ев" : 0 === a ? e + "-ен" : a > 10 && a < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
          },
          week: {
            dow: 1,
            doy: 7
          }
        });
        return t
      }))
    },
    "6ce3": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("nb", {
          months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
          monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
          monthsParseExact: !0,
          weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
          weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
          weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
          },
          calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[i går kl.] LT",
            lastWeek: "[forrige] dddd [kl.] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "noen sekunder",
            ss: "%d sekunder",
            m: "ett minutt",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dager",
            M: "en måned",
            MM: "%d måneder",
            y: "ett år",
            yy: "%d år"
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    "6d61": function (e, t, a) {
      "use strict";
      var n = a("23e7"),
        r = a("da84"),
        i = a("94ca"),
        s = a("6eeb"),
        o = a("f183"),
        d = a("2266"),
        l = a("19aa"),
        u = a("861d"),
        c = a("d039"),
        _ = a("1c7e"),
        m = a("d44e"),
        h = a("7156");
      e.exports = function (e, t, a) {
        var f = -1 !== e.indexOf("Map"),
          p = -1 !== e.indexOf("Weak"),
          y = f ? "set" : "add",
          M = r[e],
          g = M && M.prototype,
          v = M,
          L = {},
          b = function (e) {
            var t = g[e];
            s(g, e, "add" == e ? function (e) {
              return t.call(this, 0 === e ? 0 : e), this
            } : "delete" == e ? function (e) {
              return !(p && !u(e)) && t.call(this, 0 === e ? 0 : e)
            } : "get" == e ? function (e) {
              return p && !u(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
            } : "has" == e ? function (e) {
              return !(p && !u(e)) && t.call(this, 0 === e ? 0 : e)
            } : function (e, a) {
              return t.call(this, 0 === e ? 0 : e, a), this
            })
          };
        if (i(e, "function" != typeof M || !(p || g.forEach && !c((function () {
            (new M).entries().next()
          }))))) v = a.getConstructor(t, e, f, y), o.REQUIRED = !0;
        else if (i(e, !0)) {
          var k = new v,
            Y = k[y](p ? {} : -0, 1) != k,
            D = c((function () {
              k.has(1)
            })),
            w = _((function (e) {
              new M(e)
            })),
            x = !p && c((function () {
              var e = new M,
                t = 5;
              while (t--) e[y](t, t);
              return !e.has(-0)
            }));
          w || (v = t((function (t, a) {
            l(t, v, e);
            var n = h(new M, t, v);
            return void 0 != a && d(a, n[y], n, f), n
          })), v.prototype = g, g.constructor = v), (D || x) && (b("delete"), b("has"), f && b("get")), (x || Y) && b(y), p && g.clear && delete g.clear
        }
        return L[e] = v, n({
          global: !0,
          forced: v != M
        }, L), m(v, e), p || a.setStrong(v, e, f), v
      }
    },
    "6d79": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            0: "-ші",
            1: "-ші",
            2: "-ші",
            3: "-ші",
            4: "-ші",
            5: "-ші",
            6: "-шы",
            7: "-ші",
            8: "-ші",
            9: "-шы",
            10: "-шы",
            20: "-шы",
            30: "-шы",
            40: "-шы",
            50: "-ші",
            60: "-шы",
            70: "-ші",
            80: "-ші",
            90: "-шы",
            100: "-ші"
          },
          a = e.defineLocale("kk", {
            months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
            monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
            weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
            weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
            weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Бүгін сағат] LT",
              nextDay: "[Ертең сағат] LT",
              nextWeek: "dddd [сағат] LT",
              lastDay: "[Кеше сағат] LT",
              lastWeek: "[Өткен аптаның] dddd [сағат] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s ішінде",
              past: "%s бұрын",
              s: "бірнеше секунд",
              ss: "%d секунд",
              m: "бір минут",
              mm: "%d минут",
              h: "бір сағат",
              hh: "%d сағат",
              d: "бір күн",
              dd: "%d күн",
              M: "бір ай",
              MM: "%d ай",
              y: "бір жыл",
              yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
            ordinal: function (e) {
              var a = e % 10,
                n = e >= 100 ? 100 : null;
              return e + (t[e] || t[a] || t[n])
            },
            week: {
              dow: 1,
              doy: 7
            }
          });
        return a
      }))
    },
    "6d83": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("ar-tn", {
          months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
          monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
          },
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    "6e98": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("it", {
          months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
          monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
          weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
          weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
          weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: function () {
              return "[Oggi a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
            },
            nextDay: function () {
              return "[Domani a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
            },
            nextWeek: function () {
              return "dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
            },
            lastDay: function () {
              return "[Ieri a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
            },
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[La scorsa] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT";
                default:
                  return "[Lo scorso] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "tra %s",
            past: "%s fa",
            s: "alcuni secondi",
            ss: "%d secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni"
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    "6f12": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("it-ch", {
          months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
          monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
          weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
          weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
          weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Oggi alle] LT",
            nextDay: "[Domani alle] LT",
            nextWeek: "dddd [alle] LT",
            lastDay: "[Ieri alle] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[la scorsa] dddd [alle] LT";
                default:
                  return "[lo scorso] dddd [alle] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: function (e) {
              return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
            },
            past: "%s fa",
            s: "alcuni secondi",
            ss: "%d secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni"
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    "6f50": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("en-nz", {
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (e) {
            var t = e % 10,
              a = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + a
          },
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    7118: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
          a = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
          n = e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function (e, n) {
              return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[hjoed om] LT",
              nextDay: "[moarn om] LT",
              nextWeek: "dddd [om] LT",
              lastDay: "[juster om] LT",
              lastWeek: "[ôfrûne] dddd [om] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "oer %s",
              past: "%s lyn",
              s: "in pear sekonden",
              ss: "%d sekonden",
              m: "ien minút",
              mm: "%d minuten",
              h: "ien oere",
              hh: "%d oeren",
              d: "ien dei",
              dd: "%d dagen",
              M: "ien moanne",
              MM: "%d moannen",
              y: "ien jier",
              yy: "%d jierren"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
              return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
              dow: 1,
              doy: 4
            }
          });
        return n
      }))
    },
    7156: function (e, t, a) {
      var n = a("861d"),
        r = a("d2bb");
      e.exports = function (e, t, a) {
        var i, s;
        return r && "function" == typeof (i = t.constructor) && i !== a && n(s = i.prototype) && s !== a.prototype && r(e, s), e
      }
    },
    7333: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("en-il", {
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (e) {
            var t = e % 10,
              a = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + a
          }
        });
        return t
      }))
    },
    "74dc": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("sw", {
          months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
          monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
          weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
          weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
          weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "hh:mm A",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[leo saa] LT",
            nextDay: "[kesho saa] LT",
            nextWeek: "[wiki ijayo] dddd [saat] LT",
            lastDay: "[jana] LT",
            lastWeek: "[wiki iliyopita] dddd [saat] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s baadaye",
            past: "tokea %s",
            s: "hivi punde",
            ss: "sekunde %d",
            m: "dakika moja",
            mm: "dakika %d",
            h: "saa limoja",
            hh: "masaa %d",
            d: "siku moja",
            dd: "siku %d",
            M: "mwezi mmoja",
            MM: "miezi %d",
            y: "mwaka mmoja",
            yy: "miaka %d"
          },
          week: {
            dow: 1,
            doy: 7
          }
        });
        return t
      }))
    },
    "7be6": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
          a = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");

        function n(e) {
          return e > 1 && e < 5
        }

        function r(e, t, a, r) {
          var i = e + " ";
          switch (a) {
            case "s":
              return t || r ? "pár sekúnd" : "pár sekundami";
            case "ss":
              return t || r ? i + (n(e) ? "sekundy" : "sekúnd") : i + "sekundami";
            case "m":
              return t ? "minúta" : r ? "minútu" : "minútou";
            case "mm":
              return t || r ? i + (n(e) ? "minúty" : "minút") : i + "minútami";
            case "h":
              return t ? "hodina" : r ? "hodinu" : "hodinou";
            case "hh":
              return t || r ? i + (n(e) ? "hodiny" : "hodín") : i + "hodinami";
            case "d":
              return t || r ? "deň" : "dňom";
            case "dd":
              return t || r ? i + (n(e) ? "dni" : "dní") : i + "dňami";
            case "M":
              return t || r ? "mesiac" : "mesiacom";
            case "MM":
              return t || r ? i + (n(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
            case "y":
              return t || r ? "rok" : "rokom";
            case "yy":
              return t || r ? i + (n(e) ? "roky" : "rokov") : i + "rokmi"
          }
        }
        var i = e.defineLocale("sk", {
          months: t,
          monthsShort: a,
          weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
          weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
          weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm"
          },
          calendar: {
            sameDay: "[dnes o] LT",
            nextDay: "[zajtra o] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[v nedeľu o] LT";
                case 1:
                case 2:
                  return "[v] dddd [o] LT";
                case 3:
                  return "[v stredu o] LT";
                case 4:
                  return "[vo štvrtok o] LT";
                case 5:
                  return "[v piatok o] LT";
                case 6:
                  return "[v sobotu o] LT"
              }
            },
            lastDay: "[včera o] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[minulú nedeľu o] LT";
                case 1:
                case 2:
                  return "[minulý] dddd [o] LT";
                case 3:
                  return "[minulú stredu o] LT";
                case 4:
                case 5:
                  return "[minulý] dddd [o] LT";
                case 6:
                  return "[minulú sobotu o] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "za %s",
            past: "pred %s",
            s: r,
            ss: r,
            m: r,
            mm: r,
            h: r,
            hh: r,
            d: r,
            dd: r,
            M: r,
            MM: r,
            y: r,
            yy: r
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return i
      }))
    },
    "7f33": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("yo", {
          months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
          monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
          weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
          weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
          weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
          },
          calendar: {
            sameDay: "[Ònì ni] LT",
            nextDay: "[Ọ̀la ni] LT",
            nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
            lastDay: "[Àna ni] LT",
            lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "ní %s",
            past: "%s kọjá",
            s: "ìsẹjú aayá die",
            ss: "aayá %d",
            m: "ìsẹjú kan",
            mm: "ìsẹjú %d",
            h: "wákati kan",
            hh: "wákati %d",
            d: "ọjọ́ kan",
            dd: "ọjọ́ %d",
            M: "osù kan",
            MM: "osù %d",
            y: "ọdún kan",
            yy: "ọdún %d"
          },
          dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
          ordinal: "ọjọ́ %d",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    8155: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, a, n) {
          var r = e + " ";
          switch (a) {
            case "s":
              return t || n ? "nekaj sekund" : "nekaj sekundami";
            case "ss":
              return r += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || n ? "sekundi" : "sekundah" : e < 5 ? t || n ? "sekunde" : "sekundah" : "sekund", r;
            case "m":
              return t ? "ena minuta" : "eno minuto";
            case "mm":
              return r += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || n ? "minuti" : "minutama" : e < 5 ? t || n ? "minute" : "minutami" : t || n ? "minut" : "minutami", r;
            case "h":
              return t ? "ena ura" : "eno uro";
            case "hh":
              return r += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || n ? "uri" : "urama" : e < 5 ? t || n ? "ure" : "urami" : t || n ? "ur" : "urami", r;
            case "d":
              return t || n ? "en dan" : "enim dnem";
            case "dd":
              return r += 1 === e ? t || n ? "dan" : "dnem" : 2 === e ? t || n ? "dni" : "dnevoma" : t || n ? "dni" : "dnevi", r;
            case "M":
              return t || n ? "en mesec" : "enim mesecem";
            case "MM":
              return r += 1 === e ? t || n ? "mesec" : "mesecem" : 2 === e ? t || n ? "meseca" : "mesecema" : e < 5 ? t || n ? "mesece" : "meseci" : t || n ? "mesecev" : "meseci", r;
            case "y":
              return t || n ? "eno leto" : "enim letom";
            case "yy":
              return r += 1 === e ? t || n ? "leto" : "letom" : 2 === e ? t || n ? "leti" : "letoma" : e < 5 ? t || n ? "leta" : "leti" : t || n ? "let" : "leti", r
          }
        }
        var a = e.defineLocale("sl", {
          months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
          monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
          monthsParseExact: !0,
          weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
          weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
          weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD. MM. YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
          },
          calendar: {
            sameDay: "[danes ob] LT",
            nextDay: "[jutri ob] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[v] [nedeljo] [ob] LT";
                case 3:
                  return "[v] [sredo] [ob] LT";
                case 6:
                  return "[v] [soboto] [ob] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[v] dddd [ob] LT"
              }
            },
            lastDay: "[včeraj ob] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[prejšnjo] [nedeljo] [ob] LT";
                case 3:
                  return "[prejšnjo] [sredo] [ob] LT";
                case 6:
                  return "[prejšnjo] [soboto] [ob] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[prejšnji] dddd [ob] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "čez %s",
            past: "pred %s",
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 7
          }
        });
        return a
      }))
    },
    "81d5": function (e, t, a) {
      "use strict";
      var n = a("7b0b"),
        r = a("23cb"),
        i = a("50c4");
      e.exports = function (e) {
        var t = n(this),
          a = i(t.length),
          s = arguments.length,
          o = r(s > 1 ? arguments[1] : void 0, a),
          d = s > 2 ? arguments[2] : void 0,
          l = void 0 === d ? a : r(d, a);
        while (l > o) t[o++] = e;
        return t
      }
    },
    "81e9": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
          a = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9]];

        function n(e, t, a, n) {
          var i = "";
          switch (a) {
            case "s":
              return n ? "muutaman sekunnin" : "muutama sekunti";
            case "ss":
              i = n ? "sekunnin" : "sekuntia";
              break;
            case "m":
              return n ? "minuutin" : "minuutti";
            case "mm":
              i = n ? "minuutin" : "minuuttia";
              break;
            case "h":
              return n ? "tunnin" : "tunti";
            case "hh":
              i = n ? "tunnin" : "tuntia";
              break;
            case "d":
              return n ? "päivän" : "päivä";
            case "dd":
              i = n ? "päivän" : "päivää";
              break;
            case "M":
              return n ? "kuukauden" : "kuukausi";
            case "MM":
              i = n ? "kuukauden" : "kuukautta";
              break;
            case "y":
              return n ? "vuoden" : "vuosi";
            case "yy":
              i = n ? "vuoden" : "vuotta";
              break
          }
          return i = r(e, n) + " " + i, i
        }

        function r(e, n) {
          return e < 10 ? n ? a[e] : t[e] : e
        }
        var i = e.defineLocale("fi", {
          months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
          monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
          weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
          weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
          weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "Do MMMM[ta] YYYY",
            LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
            LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
            l: "D.M.YYYY",
            ll: "Do MMM YYYY",
            lll: "Do MMM YYYY, [klo] HH.mm",
            llll: "ddd, Do MMM YYYY, [klo] HH.mm"
          },
          calendar: {
            sameDay: "[tänään] [klo] LT",
            nextDay: "[huomenna] [klo] LT",
            nextWeek: "dddd [klo] LT",
            lastDay: "[eilen] [klo] LT",
            lastWeek: "[viime] dddd[na] [klo] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s päästä",
            past: "%s sitten",
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return i
      }))
    },
    8230: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠"
          },
          a = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
          },
          n = e.defineLocale("ar-sa", {
            months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
              return "م" === e
            },
            meridiem: function (e, t, a) {
              return e < 12 ? "ص" : "م"
            },
            calendar: {
              sameDay: "[اليوم على الساعة] LT",
              nextDay: "[غدا على الساعة] LT",
              nextWeek: "dddd [على الساعة] LT",
              lastDay: "[أمس على الساعة] LT",
              lastWeek: "dddd [على الساعة] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              ss: "%d ثانية",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات"
            },
            preparse: function (e) {
              return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function (e) {
                return a[e]
              })).replace(/،/g, ",")
            },
            postformat: function (e) {
              return e.replace(/\d/g, (function (e) {
                return t[e]
              })).replace(/,/g, "،")
            },
            week: {
              dow: 0,
              doy: 6
            }
          });
        return n
      }))
    },
    "84aa": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("bg", {
          months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
          monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
          weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
          weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
          weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
          },
          calendar: {
            sameDay: "[Днес в] LT",
            nextDay: "[Утре в] LT",
            nextWeek: "dddd [в] LT",
            lastDay: "[Вчера в] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                case 6:
                  return "[Миналата] dddd [в] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[Миналия] dddd [в] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "след %s",
            past: "преди %s",
            s: "няколко секунди",
            ss: "%d секунди",
            m: "минута",
            mm: "%d минути",
            h: "час",
            hh: "%d часа",
            d: "ден",
            dd: "%d дена",
            M: "месец",
            MM: "%d месеца",
            y: "година",
            yy: "%d години"
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
          ordinal: function (e) {
            var t = e % 10,
              a = e % 100;
            return 0 === e ? e + "-ев" : 0 === a ? e + "-ен" : a > 10 && a < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
          },
          week: {
            dow: 1,
            doy: 7
          }
        });
        return t
      }))
    },
    8689: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "၁",
            2: "၂",
            3: "၃",
            4: "၄",
            5: "၅",
            6: "၆",
            7: "၇",
            8: "၈",
            9: "၉",
            0: "၀"
          },
          a = {
            "၁": "1",
            "၂": "2",
            "၃": "3",
            "၄": "4",
            "၅": "5",
            "၆": "6",
            "၇": "7",
            "၈": "8",
            "၉": "9",
            "၀": "0"
          },
          n = e.defineLocale("my", {
            months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
            monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[ယနေ.] LT [မှာ]",
              nextDay: "[မနက်ဖြန်] LT [မှာ]",
              nextWeek: "dddd LT [မှာ]",
              lastDay: "[မနေ.က] LT [မှာ]",
              lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
              sameElse: "L"
            },
            relativeTime: {
              future: "လာမည့် %s မှာ",
              past: "လွန်ခဲ့သော %s က",
              s: "စက္ကန်.အနည်းငယ်",
              ss: "%d စက္ကန့်",
              m: "တစ်မိနစ်",
              mm: "%d မိနစ်",
              h: "တစ်နာရီ",
              hh: "%d နာရီ",
              d: "တစ်ရက်",
              dd: "%d ရက်",
              M: "တစ်လ",
              MM: "%d လ",
              y: "တစ်နှစ်",
              yy: "%d နှစ်"
            },
            preparse: function (e) {
              return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, (function (e) {
                return a[e]
              }))
            },
            postformat: function (e) {
              return e.replace(/\d/g, (function (e) {
                return t[e]
              }))
            },
            week: {
              dow: 1,
              doy: 4
            }
          });
        return n
      }))
    },
    8840: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("gl", {
          months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
          monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
          monthsParseExact: !0,
          weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
          weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
          weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
          },
          calendar: {
            sameDay: function () {
              return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
            },
            nextDay: function () {
              return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
            },
            nextWeek: function () {
              return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
            },
            lastDay: function () {
              return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
            },
            lastWeek: function () {
              return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
            },
            sameElse: "L"
          },
          relativeTime: {
            future: function (e) {
              return 0 === e.indexOf("un") ? "n" + e : "en " + e
            },
            past: "hai %s",
            s: "uns segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "unha hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un ano",
            yy: "%d anos"
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    "898b": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
          a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
          r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          i = e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, n) {
              return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY H:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
              sameDay: function () {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              },
              nextDay: function () {
                return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              },
              nextWeek: function () {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              },
              lastDay: function () {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              },
              lastWeek: function () {
                return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "en %s",
              past: "hace %s",
              s: "unos segundos",
              ss: "%d segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "una hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              M: "un mes",
              MM: "%d meses",
              y: "un año",
              yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
              dow: 1,
              doy: 4
            },
            invalidDate: "Fecha invalida"
          });
        return i
      }))
    },
    "8aa5": function (e, t, a) {
      "use strict";
      var n = a("6547").charAt;
      e.exports = function (e, t, a) {
        return t + (a ? n(e, t).length : 1)
      }
    },
    "8d47": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        function t(e) {
          return "undefined" !== typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
        }
        var a = e.defineLocale("el", {
          monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
          monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
          months: function (e, t) {
            return e ? "string" === typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
          },
          monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
          weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
          weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
          weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
          meridiem: function (e, t, a) {
            return e > 11 ? a ? "μμ" : "ΜΜ" : a ? "πμ" : "ΠΜ"
          },
          isPM: function (e) {
            return "μ" === (e + "").toLowerCase()[0]
          },
          meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
          },
          calendarEl: {
            sameDay: "[Σήμερα {}] LT",
            nextDay: "[Αύριο {}] LT",
            nextWeek: "dddd [{}] LT",
            lastDay: "[Χθες {}] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 6:
                  return "[το προηγούμενο] dddd [{}] LT";
                default:
                  return "[την προηγούμενη] dddd [{}] LT"
              }
            },
            sameElse: "L"
          },
          calendar: function (e, a) {
            var n = this._calendarEl[e],
              r = a && a.hours();
            return t(n) && (n = n.apply(a)), n.replace("{}", r % 12 === 1 ? "στη" : "στις")
          },
          relativeTime: {
            future: "σε %s",
            past: "%s πριν",
            s: "λίγα δευτερόλεπτα",
            ss: "%d δευτερόλεπτα",
            m: "ένα λεπτό",
            mm: "%d λεπτά",
            h: "μία ώρα",
            hh: "%d ώρες",
            d: "μία μέρα",
            dd: "%d μέρες",
            M: "ένας μήνας",
            MM: "%d μήνες",
            y: "ένας χρόνος",
            yy: "%d χρόνια"
          },
          dayOfMonthOrdinalParse: /\d{1,2}η/,
          ordinal: "%dη",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return a
      }))
    },
    "8d57": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
          a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");

        function n(e) {
          return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 !== 1
        }

        function r(e, t, a) {
          var r = e + " ";
          switch (a) {
            case "ss":
              return r + (n(e) ? "sekundy" : "sekund");
            case "m":
              return t ? "minuta" : "minutę";
            case "mm":
              return r + (n(e) ? "minuty" : "minut");
            case "h":
              return t ? "godzina" : "godzinę";
            case "hh":
              return r + (n(e) ? "godziny" : "godzin");
            case "MM":
              return r + (n(e) ? "miesiące" : "miesięcy");
            case "yy":
              return r + (n(e) ? "lata" : "lat")
          }
        }
        var i = e.defineLocale("pl", {
          months: function (e, n) {
            return e ? "" === n ? "(" + a[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(n) ? a[e.month()] : t[e.month()] : t
          },
          monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
          weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
          weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
          weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Dziś o] LT",
            nextDay: "[Jutro o] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[W niedzielę o] LT";
                case 2:
                  return "[We wtorek o] LT";
                case 3:
                  return "[W środę o] LT";
                case 6:
                  return "[W sobotę o] LT";
                default:
                  return "[W] dddd [o] LT"
              }
            },
            lastDay: "[Wczoraj o] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[W zeszłą niedzielę o] LT";
                case 3:
                  return "[W zeszłą środę o] LT";
                case 6:
                  return "[W zeszłą sobotę o] LT";
                default:
                  return "[W zeszły] dddd [o] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "za %s",
            past: "%s temu",
            s: "kilka sekund",
            ss: r,
            m: r,
            mm: r,
            h: r,
            hh: r,
            d: "1 dzień",
            dd: "%d dni",
            M: "miesiąc",
            MM: r,
            y: "rok",
            yy: r
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return i
      }))
    },
    "8df48": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "۱",
            2: "۲",
            3: "۳",
            4: "۴",
            5: "۵",
            6: "۶",
            7: "۷",
            8: "۸",
            9: "۹",
            0: "۰"
          },
          a = {
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9",
            "۰": "0"
          },
          n = e.defineLocale("fa", {
            months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function (e) {
              return /بعد از ظهر/.test(e)
            },
            meridiem: function (e, t, a) {
              return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
            },
            calendar: {
              sameDay: "[امروز ساعت] LT",
              nextDay: "[فردا ساعت] LT",
              nextWeek: "dddd [ساعت] LT",
              lastDay: "[دیروز ساعت] LT",
              lastWeek: "dddd [پیش] [ساعت] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "در %s",
              past: "%s پیش",
              s: "چند ثانیه",
              ss: "%d ثانیه",
              m: "یک دقیقه",
              mm: "%d دقیقه",
              h: "یک ساعت",
              hh: "%d ساعت",
              d: "یک روز",
              dd: "%d روز",
              M: "یک ماه",
              MM: "%d ماه",
              y: "یک سال",
              yy: "%d سال"
            },
            preparse: function (e) {
              return e.replace(/[۰-۹]/g, (function (e) {
                return a[e]
              })).replace(/،/g, ",")
            },
            postformat: function (e) {
              return e.replace(/\d/g, (function (e) {
                return t[e]
              })).replace(/,/g, "،")
            },
            dayOfMonthOrdinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: {
              dow: 6,
              doy: 12
            }
          });
        return n
      }))
    },
    "8e73": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠"
          },
          a = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
          },
          n = function (e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
          },
          r = {
            s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
            m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
            h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
            d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
            M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
            y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
          },
          i = function (e) {
            return function (t, a, i, s) {
              var o = n(t),
                d = r[e][n(t)];
              return 2 === o && (d = d[a ? 0 : 1]), d.replace(/%d/i, t)
            }
          },
          s = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
          o = e.defineLocale("ar", {
            months: s,
            monthsShort: s,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "D/‏M/‏YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
              return "م" === e
            },
            meridiem: function (e, t, a) {
              return e < 12 ? "ص" : "م"
            },
            calendar: {
              sameDay: "[اليوم عند الساعة] LT",
              nextDay: "[غدًا عند الساعة] LT",
              nextWeek: "dddd [عند الساعة] LT",
              lastDay: "[أمس عند الساعة] LT",
              lastWeek: "dddd [عند الساعة] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "بعد %s",
              past: "منذ %s",
              s: i("s"),
              ss: i("s"),
              m: i("m"),
              mm: i("m"),
              h: i("h"),
              hh: i("h"),
              d: i("d"),
              dd: i("d"),
              M: i("M"),
              MM: i("M"),
              y: i("y"),
              yy: i("y")
            },
            preparse: function (e) {
              return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function (e) {
                return a[e]
              })).replace(/،/g, ",")
            },
            postformat: function (e) {
              return e.replace(/\d/g, (function (e) {
                return t[e]
              })).replace(/,/g, "،")
            },
            week: {
              dow: 6,
              doy: 12
            }
          });
        return o
      }))
    },
    9043: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "১",
            2: "২",
            3: "৩",
            4: "৪",
            5: "৫",
            6: "৬",
            7: "৭",
            8: "৮",
            9: "৯",
            0: "০"
          },
          a = {
            "১": "1",
            "২": "2",
            "৩": "3",
            "৪": "4",
            "৫": "5",
            "৬": "6",
            "৭": "7",
            "৮": "8",
            "৯": "9",
            "০": "0"
          },
          n = e.defineLocale("bn", {
            months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
            weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
            weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
            longDateFormat: {
              LT: "A h:mm সময়",
              LTS: "A h:mm:ss সময়",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm সময়",
              LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
            },
            calendar: {
              sameDay: "[আজ] LT",
              nextDay: "[আগামীকাল] LT",
              nextWeek: "dddd, LT",
              lastDay: "[গতকাল] LT",
              lastWeek: "[গত] dddd, LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s পরে",
              past: "%s আগে",
              s: "কয়েক সেকেন্ড",
              ss: "%d সেকেন্ড",
              m: "এক মিনিট",
              mm: "%d মিনিট",
              h: "এক ঘন্টা",
              hh: "%d ঘন্টা",
              d: "এক দিন",
              dd: "%d দিন",
              M: "এক মাস",
              MM: "%d মাস",
              y: "এক বছর",
              yy: "%d বছর"
            },
            preparse: function (e) {
              return e.replace(/[১২৩৪৫৬৭৮৯০]/g, (function (e) {
                return a[e]
              }))
            },
            postformat: function (e) {
              return e.replace(/\d/g, (function (e) {
                return t[e]
              }))
            },
            meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
            meridiemHour: function (e, t) {
              return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
            },
            meridiem: function (e, t, a) {
              return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
            },
            week: {
              dow: 0,
              doy: 6
            }
          });
        return n
      }))
    },
    "90ea": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("zh-tw", {
          months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
          monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
          weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
          weekdaysMin: "日_一_二_三_四_五_六".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日dddd HH:mm",
            l: "YYYY/M/D",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日dddd HH:mm"
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
          },
          meridiem: function (e, t, a) {
            var n = 100 * e + t;
            return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上"
          },
          calendar: {
            sameDay: "[今天] LT",
            nextDay: "[明天] LT",
            nextWeek: "[下]dddd LT",
            lastDay: "[昨天] LT",
            lastWeek: "[上]dddd LT",
            sameElse: "L"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
          ordinal: function (e, t) {
            switch (t) {
              case "d":
              case "D":
              case "DDD":
                return e + "日";
              case "M":
                return e + "月";
              case "w":
              case "W":
                return e + "週";
              default:
                return e
            }
          },
          relativeTime: {
            future: "%s後",
            past: "%s前",
            s: "幾秒",
            ss: "%d 秒",
            m: "1 分鐘",
            mm: "%d 分鐘",
            h: "1 小時",
            hh: "%d 小時",
            d: "1 天",
            dd: "%d 天",
            M: "1 個月",
            MM: "%d 個月",
            y: "1 年",
            yy: "%d 年"
          }
        });
        return t
      }))
    },
    9263: function (e, t, a) {
      "use strict";
      var n = a("ad6d"),
        r = a("9f7f"),
        i = RegExp.prototype.exec,
        s = String.prototype.replace,
        o = i,
        d = function () {
          var e = /a/,
            t = /b*/g;
          return i.call(e, "a"), i.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
        }(),
        l = r.UNSUPPORTED_Y || r.BROKEN_CARET,
        u = void 0 !== /()??/.exec("")[1],
        c = d || u || l;
      c && (o = function (e) {
        var t, a, r, o, c = this,
          _ = l && c.sticky,
          m = n.call(c),
          h = c.source,
          f = 0,
          p = e;
        return _ && (m = m.replace("y", ""), -1 === m.indexOf("g") && (m += "g"), p = String(e).slice(c.lastIndex), c.lastIndex > 0 && (!c.multiline || c.multiline && "\n" !== e[c.lastIndex - 1]) && (h = "(?: " + h + ")", p = " " + p, f++), a = new RegExp("^(?:" + h + ")", m)), u && (a = new RegExp("^" + h + "$(?!\\s)", m)), d && (t = c.lastIndex), r = i.call(_ ? a : c, p), _ ? r ? (r.input = r.input.slice(f), r[0] = r[0].slice(f), r.index = c.lastIndex, c.lastIndex += r[0].length) : c.lastIndex = 0 : d && r && (c.lastIndex = c.global ? r.index + r[0].length : t), u && r && r.length > 1 && s.call(r[0], a, (function () {
          for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
        })), r
      }), e.exports = o
    },
    "957c": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t) {
          var a = e.split("_");
          return t % 10 === 1 && t % 100 !== 11 ? a[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? a[1] : a[2]
        }

        function a(e, a, n) {
          var r = {
            ss: a ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
            mm: a ? "минута_минуты_минут" : "минуту_минуты_минут",
            hh: "час_часа_часов",
            dd: "день_дня_дней",
            MM: "месяц_месяца_месяцев",
            yy: "год_года_лет"
          };
          return "m" === n ? a ? "минута" : "минуту" : e + " " + t(r[n], +e)
        }
        var n = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
          r = e.defineLocale("ru", {
            months: {
              format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
              standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
            },
            monthsShort: {
              format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
              standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
            },
            weekdays: {
              standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
              format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
              isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/
            },
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
            monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY г.",
              LLL: "D MMMM YYYY г., H:mm",
              LLLL: "dddd, D MMMM YYYY г., H:mm"
            },
            calendar: {
              sameDay: "[Сегодня, в] LT",
              nextDay: "[Завтра, в] LT",
              lastDay: "[Вчера, в] LT",
              nextWeek: function (e) {
                if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                switch (this.day()) {
                  case 0:
                    return "[В следующее] dddd, [в] LT";
                  case 1:
                  case 2:
                  case 4:
                    return "[В следующий] dddd, [в] LT";
                  case 3:
                  case 5:
                  case 6:
                    return "[В следующую] dddd, [в] LT"
                }
              },
              lastWeek: function (e) {
                if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                switch (this.day()) {
                  case 0:
                    return "[В прошлое] dddd, [в] LT";
                  case 1:
                  case 2:
                  case 4:
                    return "[В прошлый] dddd, [в] LT";
                  case 3:
                  case 5:
                  case 6:
                    return "[В прошлую] dddd, [в] LT"
                }
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "через %s",
              past: "%s назад",
              s: "несколько секунд",
              ss: a,
              m: a,
              mm: a,
              h: "час",
              hh: a,
              d: "день",
              dd: a,
              M: "месяц",
              MM: a,
              y: "год",
              yy: a
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function (e) {
              return /^(дня|вечера)$/.test(e)
            },
            meridiem: function (e, t, a) {
              return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function (e, t) {
              switch (t) {
                case "M":
                case "d":
                case "DDD":
                  return e + "-й";
                case "D":
                  return e + "-го";
                case "w":
                case "W":
                  return e + "-я";
                default:
                  return e
              }
            },
            week: {
              dow: 1,
              doy: 4
            }
          });
        return r
      }))
    },
    "958b": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, a, n) {
          switch (a) {
            case "s":
              return t ? "хэдхэн секунд" : "хэдхэн секундын";
            case "ss":
              return e + (t ? " секунд" : " секундын");
            case "m":
            case "mm":
              return e + (t ? " минут" : " минутын");
            case "h":
            case "hh":
              return e + (t ? " цаг" : " цагийн");
            case "d":
            case "dd":
              return e + (t ? " өдөр" : " өдрийн");
            case "M":
            case "MM":
              return e + (t ? " сар" : " сарын");
            case "y":
            case "yy":
              return e + (t ? " жил" : " жилийн");
            default:
              return e
          }
        }
        var a = e.defineLocale("mn", {
          months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
          monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
          monthsParseExact: !0,
          weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
          weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
          weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY оны MMMMын D",
            LLL: "YYYY оны MMMMын D HH:mm",
            LLLL: "dddd, YYYY оны MMMMын D HH:mm"
          },
          meridiemParse: /ҮӨ|ҮХ/i,
          isPM: function (e) {
            return "ҮХ" === e
          },
          meridiem: function (e, t, a) {
            return e < 12 ? "ҮӨ" : "ҮХ"
          },
          calendar: {
            sameDay: "[Өнөөдөр] LT",
            nextDay: "[Маргааш] LT",
            nextWeek: "[Ирэх] dddd LT",
            lastDay: "[Өчигдөр] LT",
            lastWeek: "[Өнгөрсөн] dddd LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s дараа",
            past: "%s өмнө",
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
          ordinal: function (e, t) {
            switch (t) {
              case "d":
              case "D":
              case "DDD":
                return e + " өдөр";
              default:
                return e
            }
          }
        });
        return a
      }))
    },
    9609: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            0: "-чү",
            1: "-чи",
            2: "-чи",
            3: "-чү",
            4: "-чү",
            5: "-чи",
            6: "-чы",
            7: "-чи",
            8: "-чи",
            9: "-чу",
            10: "-чу",
            20: "-чы",
            30: "-чу",
            40: "-чы",
            50: "-чү",
            60: "-чы",
            70: "-чи",
            80: "-чи",
            90: "-чу",
            100: "-чү"
          },
          a = e.defineLocale("ky", {
            months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
            monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
            weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
            weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Бүгүн саат] LT",
              nextDay: "[Эртең саат] LT",
              nextWeek: "dddd [саат] LT",
              lastDay: "[Кечээ саат] LT",
              lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s ичинде",
              past: "%s мурун",
              s: "бирнече секунд",
              ss: "%d секунд",
              m: "бир мүнөт",
              mm: "%d мүнөт",
              h: "бир саат",
              hh: "%d саат",
              d: "бир күн",
              dd: "%d күн",
              M: "бир ай",
              MM: "%d ай",
              y: "бир жыл",
              yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
            ordinal: function (e) {
              var a = e % 10,
                n = e >= 100 ? 100 : null;
              return e + (t[e] || t[a] || t[n])
            },
            week: {
              dow: 1,
              doy: 7
            }
          });
        return a
      }))
    },
    "972c": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, a) {
          var n = {
              ss: "secunde",
              mm: "minute",
              hh: "ore",
              dd: "zile",
              MM: "luni",
              yy: "ani"
            },
            r = " ";
          return (e % 100 >= 20 || e >= 100 && e % 100 === 0) && (r = " de "), e + r + n[a]
        }
        var a = e.defineLocale("ro", {
          months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
          monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
          monthsParseExact: !0,
          weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
          weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
          weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
          },
          calendar: {
            sameDay: "[azi la] LT",
            nextDay: "[mâine la] LT",
            nextWeek: "dddd [la] LT",
            lastDay: "[ieri la] LT",
            lastWeek: "[fosta] dddd [la] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "peste %s",
            past: "%s în urmă",
            s: "câteva secunde",
            ss: t,
            m: "un minut",
            mm: t,
            h: "o oră",
            hh: t,
            d: "o zi",
            dd: t,
            M: "o lună",
            MM: t,
            y: "un an",
            yy: t
          },
          week: {
            dow: 1,
            doy: 7
          }
        });
        return a
      }))
    },
    9797: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("cy", {
          months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
          monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
          weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
          weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
          weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Heddiw am] LT",
            nextDay: "[Yfory am] LT",
            nextWeek: "dddd [am] LT",
            lastDay: "[Ddoe am] LT",
            lastWeek: "dddd [diwethaf am] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "mewn %s",
            past: "%s yn ôl",
            s: "ychydig eiliadau",
            ss: "%d eiliad",
            m: "munud",
            mm: "%d munud",
            h: "awr",
            hh: "%d awr",
            d: "diwrnod",
            dd: "%d diwrnod",
            M: "mis",
            MM: "%d mis",
            y: "blwyddyn",
            yy: "%d flynedd"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
          ordinal: function (e) {
            var t = e,
              a = "",
              n = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
            return t > 20 ? a = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (a = n[t]), e + a
          },
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    "99af": function (e, t, a) {
      "use strict";
      var n = a("23e7"),
        r = a("d039"),
        i = a("e8b5"),
        s = a("861d"),
        o = a("7b0b"),
        d = a("50c4"),
        l = a("8418"),
        u = a("65f0"),
        c = a("1dde"),
        _ = a("b622"),
        m = a("2d00"),
        h = _("isConcatSpreadable"),
        f = 9007199254740991,
        p = "Maximum allowed index exceeded",
        y = m >= 51 || !r((function () {
          var e = [];
          return e[h] = !1, e.concat()[0] !== e
        })),
        M = c("concat"),
        g = function (e) {
          if (!s(e)) return !1;
          var t = e[h];
          return void 0 !== t ? !!t : i(e)
        },
        v = !y || !M;
      n({
        target: "Array",
        proto: !0,
        forced: v
      }, {
        concat: function (e) {
          var t, a, n, r, i, s = o(this),
            c = u(s, 0),
            _ = 0;
          for (t = -1, n = arguments.length; t < n; t++)
            if (i = -1 === t ? s : arguments[t], g(i)) {
              if (r = d(i.length), _ + r > f) throw TypeError(p);
              for (a = 0; a < r; a++, _++) a in i && l(c, _, i[a])
            } else {
              if (_ >= f) throw TypeError(p);
              l(c, _++, i)
            } return c.length = _, c
        }
      })
    },
    "9f26": function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
          a = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
          n = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
          r = [/^janv/i, /^févr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^août/i, /^sept/i, /^oct/i, /^nov/i, /^déc/i],
          i = e.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsRegex: n,
            monthsShortRegex: n,
            monthsStrictRegex: t,
            monthsShortStrictRegex: a,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Aujourd’hui à] LT",
              nextDay: "[Demain à] LT",
              nextWeek: "dddd [à] LT",
              lastDay: "[Hier à] LT",
              lastWeek: "dddd [dernier à] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "dans %s",
              past: "il y a %s",
              s: "quelques secondes",
              ss: "%d secondes",
              m: "une minute",
              mm: "%d minutes",
              h: "une heure",
              hh: "%d heures",
              d: "un jour",
              dd: "%d jours",
              M: "un mois",
              MM: "%d mois",
              y: "un an",
              yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function (e, t) {
              switch (t) {
                case "D":
                  return e + (1 === e ? "er" : "");
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                  return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                  return e + (1 === e ? "re" : "e")
              }
            },
            week: {
              dow: 1,
              doy: 4
            }
          });
        return i
      }))
    },
    "9f7f": function (e, t, a) {
      "use strict";
      var n = a("d039");

      function r(e, t) {
        return RegExp(e, t)
      }
      t.UNSUPPORTED_Y = n((function () {
        var e = r("a", "y");
        return e.lastIndex = 2, null != e.exec("abcd")
      })), t.BROKEN_CARET = n((function () {
        var e = r("^r", "gy");
        return e.lastIndex = 2, null != e.exec("str")
      }))
    },
    a356: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = function (e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
          },
          a = {
            s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
            m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
            h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
            d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
            M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
            y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
          },
          n = function (e) {
            return function (n, r, i, s) {
              var o = t(n),
                d = a[e][t(n)];
              return 2 === o && (d = d[r ? 0 : 1]), d.replace(/%d/i, n)
            }
          },
          r = ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
          i = e.defineLocale("ar-dz", {
            months: r,
            monthsShort: r,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "D/‏M/‏YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
              return "م" === e
            },
            meridiem: function (e, t, a) {
              return e < 12 ? "ص" : "م"
            },
            calendar: {
              sameDay: "[اليوم عند الساعة] LT",
              nextDay: "[غدًا عند الساعة] LT",
              nextWeek: "dddd [عند الساعة] LT",
              lastDay: "[أمس عند الساعة] LT",
              lastWeek: "dddd [عند الساعة] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "بعد %s",
              past: "منذ %s",
              s: n("s"),
              ss: n("s"),
              m: n("m"),
              mm: n("m"),
              h: n("h"),
              hh: n("h"),
              d: n("d"),
              dd: n("d"),
              M: n("M"),
              MM: n("M"),
              y: n("y"),
              yy: n("y")
            },
            postformat: function (e) {
              return e.replace(/,/g, "،")
            },
            week: {
              dow: 0,
              doy: 4
            }
          });
        return i
      }))
    },
    a7fa: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("bm", {
          months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
          monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
          weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
          weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
          weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "MMMM [tile] D [san] YYYY",
            LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
            LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
          },
          calendar: {
            sameDay: "[Bi lɛrɛ] LT",
            nextDay: "[Sini lɛrɛ] LT",
            nextWeek: "dddd [don lɛrɛ] LT",
            lastDay: "[Kunu lɛrɛ] LT",
            lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s kɔnɔ",
            past: "a bɛ %s bɔ",
            s: "sanga dama dama",
            ss: "sekondi %d",
            m: "miniti kelen",
            mm: "miniti %d",
            h: "lɛrɛ kelen",
            hh: "lɛrɛ %d",
            d: "tile kelen",
            dd: "tile %d",
            M: "kalo kelen",
            MM: "kalo %d",
            y: "san kelen",
            yy: "san %d"
          },
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    a9e3: function (e, t, a) {
      "use strict";
      var n = a("83ab"),
        r = a("da84"),
        i = a("94ca"),
        s = a("6eeb"),
        o = a("5135"),
        d = a("c6b6"),
        l = a("7156"),
        u = a("c04e"),
        c = a("d039"),
        _ = a("7c73"),
        m = a("241c").f,
        h = a("06cf").f,
        f = a("9bf2").f,
        p = a("58a8").trim,
        y = "Number",
        M = r[y],
        g = M.prototype,
        v = d(_(g)) == y,
        L = function (e) {
          var t, a, n, r, i, s, o, d, l = u(e, !1);
          if ("string" == typeof l && l.length > 2)
            if (l = p(l), t = l.charCodeAt(0), 43 === t || 45 === t) {
              if (a = l.charCodeAt(2), 88 === a || 120 === a) return NaN
            } else if (48 === t) {
            switch (l.charCodeAt(1)) {
              case 66:
              case 98:
                n = 2, r = 49;
                break;
              case 79:
              case 111:
                n = 8, r = 55;
                break;
              default:
                return +l
            }
            for (i = l.slice(2), s = i.length, o = 0; o < s; o++)
              if (d = i.charCodeAt(o), d < 48 || d > r) return NaN;
            return parseInt(i, n)
          }
          return +l
        };
      if (i(y, !M(" 0o1") || !M("0b1") || M("+0x1"))) {
        for (var b, k = function (e) {
            var t = arguments.length < 1 ? 0 : e,
              a = this;
            return a instanceof k && (v ? c((function () {
              g.valueOf.call(a)
            })) : d(a) != y) ? l(new M(L(t)), a, k) : L(t)
          }, Y = n ? m(M) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), D = 0; Y.length > D; D++) o(M, b = Y[D]) && !o(k, b) && f(k, b, h(M, b));
        k.prototype = g, g.constructor = k, s(r, y, k)
      }
    },
    aaf2: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, a, n) {
          var r = {
            s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
            ss: [e + " सॅकंडांनी", e + " सॅकंड"],
            m: ["एका मिणटान", "एक मिनूट"],
            mm: [e + " मिणटांनी", e + " मिणटां"],
            h: ["एका वरान", "एक वर"],
            hh: [e + " वरांनी", e + " वरां"],
            d: ["एका दिसान", "एक दीस"],
            dd: [e + " दिसांनी", e + " दीस"],
            M: ["एका म्हयन्यान", "एक म्हयनो"],
            MM: [e + " म्हयन्यानी", e + " म्हयने"],
            y: ["एका वर्सान", "एक वर्स"],
            yy: [e + " वर्सांनी", e + " वर्सां"]
          };
          return n ? r[a][0] : r[a][1]
        }
        var a = e.defineLocale("gom-deva", {
          months: {
            standalone: "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
            format: "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split("_"),
            isFormat: /MMMM(\s)+D[oD]?/
          },
          monthsShort: "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
          monthsParseExact: !0,
          weekdays: "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split("_"),
          weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),
          weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "A h:mm [वाजतां]",
            LTS: "A h:mm:ss [वाजतां]",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY A h:mm [वाजतां]",
            LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
            llll: "ddd, D MMM YYYY, A h:mm [वाजतां]"
          },
          calendar: {
            sameDay: "[आयज] LT",
            nextDay: "[फाल्यां] LT",
            nextWeek: "[फुडलो] dddd[,] LT",
            lastDay: "[काल] LT",
            lastWeek: "[फाटलो] dddd[,] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s",
            past: "%s आदीं",
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
          ordinal: function (e, t) {
            switch (t) {
              case "D":
                return e + "वेर";
              default:
              case "M":
              case "Q":
              case "DDD":
              case "d":
              case "w":
              case "W":
                return e
            }
          },
          week: {
            dow: 1,
            doy: 4
          },
          meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
          meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "राती" === t ? e < 4 ? e : e + 12 : "सकाळीं" === t ? e : "दनपारां" === t ? e > 12 ? e : e + 12 : "सांजे" === t ? e + 12 : void 0
          },
          meridiem: function (e, t, a) {
            return e < 4 ? "राती" : e < 12 ? "सकाळीं" : e < 16 ? "दनपारां" : e < 20 ? "सांजे" : "राती"
          }
        });
        return a
      }))
    },
    ab13: function (e, t, a) {
      var n = a("b622"),
        r = n("match");
      e.exports = function (e) {
        var t = /./;
        try {
          "/./" [e](t)
        } catch (a) {
          try {
            return t[r] = !1, "/./" [e](t)
          } catch (n) {}
        }
        return !1
      }
    },
    ac1f: function (e, t, a) {
      "use strict";
      var n = a("23e7"),
        r = a("9263");
      n({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== r
      }, {
        exec: r
      })
    },
    ada2: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t) {
          var a = e.split("_");
          return t % 10 === 1 && t % 100 !== 11 ? a[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? a[1] : a[2]
        }

        function a(e, a, n) {
          var r = {
            ss: a ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
            mm: a ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
            hh: a ? "година_години_годин" : "годину_години_годин",
            dd: "день_дні_днів",
            MM: "місяць_місяці_місяців",
            yy: "рік_роки_років"
          };
          return "m" === n ? a ? "хвилина" : "хвилину" : "h" === n ? a ? "година" : "годину" : e + " " + t(r[n], +e)
        }

        function n(e, t) {
          var a, n = {
            nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
            accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
            genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
          };
          return !0 === e ? n["nominative"].slice(1, 7).concat(n["nominative"].slice(0, 1)) : e ? (a = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative", n[a][e.day()]) : n["nominative"]
        }

        function r(e) {
          return function () {
            return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
          }
        }
        var i = e.defineLocale("uk", {
          months: {
            format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
            standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
          },
          monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
          weekdays: n,
          weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY р.",
            LLL: "D MMMM YYYY р., HH:mm",
            LLLL: "dddd, D MMMM YYYY р., HH:mm"
          },
          calendar: {
            sameDay: r("[Сьогодні "),
            nextDay: r("[Завтра "),
            lastDay: r("[Вчора "),
            nextWeek: r("[У] dddd ["),
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                  return r("[Минулої] dddd [").call(this);
                case 1:
                case 2:
                case 4:
                  return r("[Минулого] dddd [").call(this)
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "за %s",
            past: "%s тому",
            s: "декілька секунд",
            ss: a,
            m: a,
            mm: a,
            h: "годину",
            hh: a,
            d: "день",
            dd: a,
            M: "місяць",
            MM: a,
            y: "рік",
            yy: a
          },
          meridiemParse: /ночі|ранку|дня|вечора/,
          isPM: function (e) {
            return /^(дня|вечора)$/.test(e)
          },
          meridiem: function (e, t, a) {
            return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
          ordinal: function (e, t) {
            switch (t) {
              case "M":
              case "d":
              case "DDD":
              case "w":
              case "W":
                return e + "-й";
              case "D":
                return e + "-го";
              default:
                return e
            }
          },
          week: {
            dow: 1,
            doy: 7
          }
        });
        return i
      }))
    },
    b29d: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("lo", {
          months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
          monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
          weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
          weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
          weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "ວັນdddd D MMMM YYYY HH:mm"
          },
          meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
          isPM: function (e) {
            return "ຕອນແລງ" === e
          },
          meridiem: function (e, t, a) {
            return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
          },
          calendar: {
            sameDay: "[ມື້ນີ້ເວລາ] LT",
            nextDay: "[ມື້ອື່ນເວລາ] LT",
            nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
            lastDay: "[ມື້ວານນີ້ເວລາ] LT",
            lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "ອີກ %s",
            past: "%sຜ່ານມາ",
            s: "ບໍ່ເທົ່າໃດວິນາທີ",
            ss: "%d ວິນາທີ",
            m: "1 ນາທີ",
            mm: "%d ນາທີ",
            h: "1 ຊົ່ວໂມງ",
            hh: "%d ຊົ່ວໂມງ",
            d: "1 ມື້",
            dd: "%d ມື້",
            M: "1 ເດືອນ",
            MM: "%d ເດືອນ",
            y: "1 ປີ",
            yy: "%d ປີ"
          },
          dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
          ordinal: function (e) {
            return "ທີ່" + e
          }
        });
        return t
      }))
    },
    b3eb: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, a, n) {
          var r = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [e + " Tage", e + " Tagen"],
            w: ["eine Woche", "einer Woche"],
            M: ["ein Monat", "einem Monat"],
            MM: [e + " Monate", e + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [e + " Jahre", e + " Jahren"]
          };
          return t ? r[a][0] : r[a][1]
        }
        var a = e.defineLocale("de-at", {
          months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
          monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
          monthsParseExact: !0,
          weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
          weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
          },
          relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: t,
            mm: "%d Minuten",
            h: t,
            hh: "%d Stunden",
            d: t,
            dd: t,
            w: t,
            ww: "%d Wochen",
            M: t,
            MM: t,
            y: t,
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return a
      }))
    },
    b469: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, a, n) {
          var r = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [e + " Tage", e + " Tagen"],
            w: ["eine Woche", "einer Woche"],
            M: ["ein Monat", "einem Monat"],
            MM: [e + " Monate", e + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [e + " Jahre", e + " Jahren"]
          };
          return t ? r[a][0] : r[a][1]
        }
        var a = e.defineLocale("de", {
          months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
          monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
          monthsParseExact: !0,
          weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
          weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
          },
          relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: t,
            mm: "%d Minuten",
            h: t,
            hh: "%d Stunden",
            d: t,
            dd: t,
            w: t,
            ww: "%d Wochen",
            M: t,
            MM: t,
            y: t,
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return a
      }))
    },
    b53d: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("tzm-latn", {
          months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
          monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
          weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
          weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
          weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[asdkh g] LT",
            nextDay: "[aska g] LT",
            nextWeek: "dddd [g] LT",
            lastDay: "[assant g] LT",
            lastWeek: "dddd [g] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "dadkh s yan %s",
            past: "yan %s",
            s: "imik",
            ss: "%d imik",
            m: "minuḍ",
            mm: "%d minuḍ",
            h: "saɛa",
            hh: "%d tassaɛin",
            d: "ass",
            dd: "%d ossan",
            M: "ayowr",
            MM: "%d iyyirn",
            y: "asgas",
            yy: "%d isgasn"
          },
          week: {
            dow: 6,
            doy: 12
          }
        });
        return t
      }))
    },
    b540: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("jv", {
          months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
          monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
          weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
          weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
          weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
          },
          meridiemParse: /enjing|siyang|sonten|ndalu/,
          meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
          },
          meridiem: function (e, t, a) {
            return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
          },
          calendar: {
            sameDay: "[Dinten puniko pukul] LT",
            nextDay: "[Mbenjang pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kala wingi pukul] LT",
            lastWeek: "dddd [kepengker pukul] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "wonten ing %s",
            past: "%s ingkang kepengker",
            s: "sawetawis detik",
            ss: "%d detik",
            m: "setunggal menit",
            mm: "%d menit",
            h: "setunggal jam",
            hh: "%d jam",
            d: "sedinten",
            dd: "%d dinten",
            M: "sewulan",
            MM: "%d wulan",
            y: "setaun",
            yy: "%d taun"
          },
          week: {
            dow: 1,
            doy: 7
          }
        });
        return t
      }))
    },
    b7e9: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("en-sg", {
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (e) {
            var t = e % 10,
              a = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + a
          },
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    b84c: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("nn", {
          months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
          monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
          monthsParseExact: !0,
          weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
          weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"),
          weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
          },
          calendar: {
            sameDay: "[I dag klokka] LT",
            nextDay: "[I morgon klokka] LT",
            nextWeek: "dddd [klokka] LT",
            lastDay: "[I går klokka] LT",
            lastWeek: "[Føregåande] dddd [klokka] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "om %s",
            past: "%s sidan",
            s: "nokre sekund",
            ss: "%d sekund",
            m: "eit minutt",
            mm: "%d minutt",
            h: "ein time",
            hh: "%d timar",
            d: "ein dag",
            dd: "%d dagar",
            M: "ein månad",
            MM: "%d månader",
            y: "eit år",
            yy: "%d år"
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    b97c: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
          ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
          m: "minūtes_minūtēm_minūte_minūtes".split("_"),
          mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
          h: "stundas_stundām_stunda_stundas".split("_"),
          hh: "stundas_stundām_stunda_stundas".split("_"),
          d: "dienas_dienām_diena_dienas".split("_"),
          dd: "dienas_dienām_diena_dienas".split("_"),
          M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
          MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
          y: "gada_gadiem_gads_gadi".split("_"),
          yy: "gada_gadiem_gads_gadi".split("_")
        };

        function a(e, t, a) {
          return a ? t % 10 === 1 && t % 100 !== 11 ? e[2] : e[3] : t % 10 === 1 && t % 100 !== 11 ? e[0] : e[1]
        }

        function n(e, n, r) {
          return e + " " + a(t[r], e, n)
        }

        function r(e, n, r) {
          return a(t[r], e, n)
        }

        function i(e, t) {
          return t ? "dažas sekundes" : "dažām sekundēm"
        }
        var s = e.defineLocale("lv", {
          months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
          monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
          weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
          weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
          weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY.",
            LL: "YYYY. [gada] D. MMMM",
            LLL: "YYYY. [gada] D. MMMM, HH:mm",
            LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
          },
          calendar: {
            sameDay: "[Šodien pulksten] LT",
            nextDay: "[Rīt pulksten] LT",
            nextWeek: "dddd [pulksten] LT",
            lastDay: "[Vakar pulksten] LT",
            lastWeek: "[Pagājušā] dddd [pulksten] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "pēc %s",
            past: "pirms %s",
            s: i,
            ss: n,
            m: r,
            mm: n,
            h: r,
            hh: n,
            d: r,
            dd: n,
            M: r,
            MM: n,
            y: r,
            yy: n
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return s
      }))
    },
    bb2f: function (e, t, a) {
      var n = a("d039");
      e.exports = !n((function () {
        return Object.isExtensible(Object.preventExtensions({}))
      }))
    },
    bb71: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, a, n) {
          var r = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [e + " Tage", e + " Tagen"],
            w: ["eine Woche", "einer Woche"],
            M: ["ein Monat", "einem Monat"],
            MM: [e + " Monate", e + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [e + " Jahre", e + " Jahren"]
          };
          return t ? r[a][0] : r[a][1]
        }
        var a = e.defineLocale("de-ch", {
          months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
          monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
          monthsParseExact: !0,
          weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
          weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
          },
          relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: t,
            mm: "%d Minuten",
            h: t,
            hh: "%d Stunden",
            d: t,
            dd: t,
            w: t,
            ww: "%d Wochen",
            M: t,
            MM: t,
            y: t,
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return a
      }))
    },
    c109: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("tzm", {
          months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
          monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
          weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
          weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
          weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
            nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
            nextWeek: "dddd [ⴴ] LT",
            lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
            lastWeek: "dddd [ⴴ] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
            past: "ⵢⴰⵏ %s",
            s: "ⵉⵎⵉⴽ",
            ss: "%d ⵉⵎⵉⴽ",
            m: "ⵎⵉⵏⵓⴺ",
            mm: "%d ⵎⵉⵏⵓⴺ",
            h: "ⵙⴰⵄⴰ",
            hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
            d: "ⴰⵙⵙ",
            dd: "%d oⵙⵙⴰⵏ",
            M: "ⴰⵢoⵓⵔ",
            MM: "%d ⵉⵢⵢⵉⵔⵏ",
            y: "ⴰⵙⴳⴰⵙ",
            yy: "%d ⵉⵙⴳⴰⵙⵏ"
          },
          week: {
            dow: 6,
            doy: 12
          }
        });
        return t
      }))
    },
    c1df: function (e, t, a) {
      (function (e) {
        var t; //! moment.js
        //! version : 2.27.0
        //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
        //! license : MIT
        //! momentjs.com
        (function (t, a) {
          e.exports = a()
        })(0, (function () {
          "use strict";
          var n, r;

          function i() {
            return n.apply(null, arguments)
          }

          function s(e) {
            n = e
          }

          function o(e) {
            return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
          }

          function d(e) {
            return null != e && "[object Object]" === Object.prototype.toString.call(e)
          }

          function l(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
          }

          function u(e) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
            var t;
            for (t in e)
              if (l(e, t)) return !1;
            return !0
          }

          function c(e) {
            return void 0 === e
          }

          function _(e) {
            return "number" === typeof e || "[object Number]" === Object.prototype.toString.call(e)
          }

          function m(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
          }

          function h(e, t) {
            var a, n = [];
            for (a = 0; a < e.length; ++a) n.push(t(e[a], a));
            return n
          }

          function f(e, t) {
            for (var a in t) l(t, a) && (e[a] = t[a]);
            return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e
          }

          function p(e, t, a, n) {
            return qa(e, t, a, n, !0).utc()
          }

          function y() {
            return {
              empty: !1,
              unusedTokens: [],
              unusedInput: [],
              overflow: -2,
              charsLeftOver: 0,
              nullInput: !1,
              invalidEra: null,
              invalidMonth: null,
              invalidFormat: !1,
              userInvalidated: !1,
              iso: !1,
              parsedDateParts: [],
              era: null,
              meridiem: null,
              rfc2822: !1,
              weekdayMismatch: !1
            }
          }

          function M(e) {
            return null == e._pf && (e._pf = y()), e._pf
          }

          function g(e) {
            if (null == e._isValid) {
              var t = M(e),
                a = r.call(t.parsedDateParts, (function (e) {
                  return null != e
                })),
                n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && a);
              if (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return n;
              e._isValid = n
            }
            return e._isValid
          }

          function v(e) {
            var t = p(NaN);
            return null != e ? f(M(t), e) : M(t).userInvalidated = !0, t
          }
          r = Array.prototype.some ? Array.prototype.some : function (e) {
            var t, a = Object(this),
              n = a.length >>> 0;
            for (t = 0; t < n; t++)
              if (t in a && e.call(this, a[t], t, a)) return !0;
            return !1
          };
          var L = i.momentProperties = [],
            b = !1;

          function k(e, t) {
            var a, n, r;
            if (c(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), c(t._i) || (e._i = t._i), c(t._f) || (e._f = t._f), c(t._l) || (e._l = t._l), c(t._strict) || (e._strict = t._strict), c(t._tzm) || (e._tzm = t._tzm), c(t._isUTC) || (e._isUTC = t._isUTC), c(t._offset) || (e._offset = t._offset), c(t._pf) || (e._pf = M(t)), c(t._locale) || (e._locale = t._locale), L.length > 0)
              for (a = 0; a < L.length; a++) n = L[a], r = t[n], c(r) || (e[n] = r);
            return e
          }

          function Y(e) {
            k(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === b && (b = !0, i.updateOffset(this), b = !1)
          }

          function D(e) {
            return e instanceof Y || null != e && null != e._isAMomentObject
          }

          function w(e) {
            !1 === i.suppressDeprecationWarnings && "undefined" !== typeof console && console.warn && console.warn("Deprecation warning: " + e)
          }

          function x(e, t) {
            var a = !0;
            return f((function () {
              if (null != i.deprecationHandler && i.deprecationHandler(null, e), a) {
                var n, r, s, o = [];
                for (r = 0; r < arguments.length; r++) {
                  if (n = "", "object" === typeof arguments[r]) {
                    for (s in n += "\n[" + r + "] ", arguments[0]) l(arguments[0], s) && (n += s + ": " + arguments[0][s] + ", ");
                    n = n.slice(0, -2)
                  } else n = arguments[r];
                  o.push(n)
                }
                w(e + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack), a = !1
              }
              return t.apply(this, arguments)
            }), t)
          }
          var T, S = {};

          function H(e, t) {
            null != i.deprecationHandler && i.deprecationHandler(e, t), S[e] || (w(t), S[e] = !0)
          }

          function j(e) {
            return "undefined" !== typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
          }

          function P(e) {
            var t, a;
            for (a in e) l(e, a) && (t = e[a], j(t) ? this[a] = t : this["_" + a] = t);
            this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
          }

          function O(e, t) {
            var a, n = f({}, e);
            for (a in t) l(t, a) && (d(e[a]) && d(t[a]) ? (n[a] = {}, f(n[a], e[a]), f(n[a], t[a])) : null != t[a] ? n[a] = t[a] : delete n[a]);
            for (a in e) l(e, a) && !l(t, a) && d(e[a]) && (n[a] = f({}, n[a]));
            return n
          }

          function A(e) {
            null != e && this.set(e)
          }
          i.suppressDeprecationWarnings = !1, i.deprecationHandler = null, T = Object.keys ? Object.keys : function (e) {
            var t, a = [];
            for (t in e) l(e, t) && a.push(t);
            return a
          };
          var C = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          };

          function F(e, t, a) {
            var n = this._calendar[e] || this._calendar["sameElse"];
            return j(n) ? n.call(t, a) : n
          }

          function E(e, t, a) {
            var n = "" + Math.abs(e),
              r = t - n.length,
              i = e >= 0;
            return (i ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + n
          }
          var W = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            I = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            z = {},
            N = {};

          function R(e, t, a, n) {
            var r = n;
            "string" === typeof n && (r = function () {
              return this[n]()
            }), e && (N[e] = r), t && (N[t[0]] = function () {
              return E(r.apply(this, arguments), t[1], t[2])
            }), a && (N[a] = function () {
              return this.localeData().ordinal(r.apply(this, arguments), e)
            })
          }

          function V(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
          }

          function B(e) {
            var t, a, n = e.match(W);
            for (t = 0, a = n.length; t < a; t++) N[n[t]] ? n[t] = N[n[t]] : n[t] = V(n[t]);
            return function (t) {
              var r, i = "";
              for (r = 0; r < a; r++) i += j(n[r]) ? n[r].call(t, e) : n[r];
              return i
            }
          }

          function J(e, t) {
            return e.isValid() ? (t = U(t, e.localeData()), z[t] = z[t] || B(t), z[t](e)) : e.localeData().invalidDate()
          }

          function U(e, t) {
            var a = 5;

            function n(e) {
              return t.longDateFormat(e) || e
            }
            I.lastIndex = 0;
            while (a >= 0 && I.test(e)) e = e.replace(I, n), I.lastIndex = 0, a -= 1;
            return e
          }
          var G = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
          };

          function q(e) {
            var t = this._longDateFormat[e],
              a = this._longDateFormat[e.toUpperCase()];
            return t || !a ? t : (this._longDateFormat[e] = a.match(W).map((function (e) {
              return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e
            })).join(""), this._longDateFormat[e])
          }
          var $ = "Invalid date";

          function K() {
            return this._invalidDate
          }
          var Q = "%d",
            Z = /\d{1,2}/;

          function X(e) {
            return this._ordinal.replace("%d", e)
          }
          var ee = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            w: "a week",
            ww: "%d weeks",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          };

          function te(e, t, a, n) {
            var r = this._relativeTime[a];
            return j(r) ? r(e, t, a, n) : r.replace(/%d/i, e)
          }

          function ae(e, t) {
            var a = this._relativeTime[e > 0 ? "future" : "past"];
            return j(a) ? a(t) : a.replace(/%s/i, t)
          }
          var ne = {};

          function re(e, t) {
            var a = e.toLowerCase();
            ne[a] = ne[a + "s"] = ne[t] = e
          }

          function ie(e) {
            return "string" === typeof e ? ne[e] || ne[e.toLowerCase()] : void 0
          }

          function se(e) {
            var t, a, n = {};
            for (a in e) l(e, a) && (t = ie(a), t && (n[t] = e[a]));
            return n
          }
          var oe = {};

          function de(e, t) {
            oe[e] = t
          }

          function le(e) {
            var t, a = [];
            for (t in e) l(e, t) && a.push({
              unit: t,
              priority: oe[t]
            });
            return a.sort((function (e, t) {
              return e.priority - t.priority
            })), a
          }

          function ue(e) {
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
          }

          function ce(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
          }

          function _e(e) {
            var t = +e,
              a = 0;
            return 0 !== t && isFinite(t) && (a = ce(t)), a
          }

          function me(e, t) {
            return function (a) {
              return null != a ? (fe(this, e, a), i.updateOffset(this, t), this) : he(this, e)
            }
          }

          function he(e, t) {
            return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
          }

          function fe(e, t, a) {
            e.isValid() && !isNaN(a) && ("FullYear" === t && ue(e.year()) && 1 === e.month() && 29 === e.date() ? (a = _e(a), e._d["set" + (e._isUTC ? "UTC" : "") + t](a, e.month(), tt(a, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](a))
          }

          function pe(e) {
            return e = ie(e), j(this[e]) ? this[e]() : this
          }

          function ye(e, t) {
            if ("object" === typeof e) {
              e = se(e);
              var a, n = le(e);
              for (a = 0; a < n.length; a++) this[n[a].unit](e[n[a].unit])
            } else if (e = ie(e), j(this[e])) return this[e](t);
            return this
          }
          var Me, ge = /\d/,
            ve = /\d\d/,
            Le = /\d{3}/,
            be = /\d{4}/,
            ke = /[+-]?\d{6}/,
            Ye = /\d\d?/,
            De = /\d\d\d\d?/,
            we = /\d\d\d\d\d\d?/,
            xe = /\d{1,3}/,
            Te = /\d{1,4}/,
            Se = /[+-]?\d{1,6}/,
            He = /\d+/,
            je = /[+-]?\d+/,
            Pe = /Z|[+-]\d\d:?\d\d/gi,
            Oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
            Ae = /[+-]?\d+(\.\d{1,3})?/,
            Ce = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

          function Fe(e, t, a) {
            Me[e] = j(t) ? t : function (e, n) {
              return e && a ? a : t
            }
          }

          function Ee(e, t) {
            return l(Me, e) ? Me[e](t._strict, t._locale) : new RegExp(We(e))
          }

          function We(e) {
            return Ie(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function (e, t, a, n, r) {
              return t || a || n || r
            })))
          }

          function Ie(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
          }
          Me = {};
          var ze = {};

          function Ne(e, t) {
            var a, n = t;
            for ("string" === typeof e && (e = [e]), _(t) && (n = function (e, a) {
                a[t] = _e(e)
              }), a = 0; a < e.length; a++) ze[e[a]] = n
          }

          function Re(e, t) {
            Ne(e, (function (e, a, n, r) {
              n._w = n._w || {}, t(e, n._w, n, r)
            }))
          }

          function Ve(e, t, a) {
            null != t && l(ze, e) && ze[e](t, a._a, a, e)
          }
          var Be, Je = 0,
            Ue = 1,
            Ge = 2,
            qe = 3,
            $e = 4,
            Ke = 5,
            Qe = 6,
            Ze = 7,
            Xe = 8;

          function et(e, t) {
            return (e % t + t) % t
          }

          function tt(e, t) {
            if (isNaN(e) || isNaN(t)) return NaN;
            var a = et(t, 12);
            return e += (t - a) / 12, 1 === a ? ue(e) ? 29 : 28 : 31 - a % 7 % 2
          }
          Be = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
            var t;
            for (t = 0; t < this.length; ++t)
              if (this[t] === e) return t;
            return -1
          }, R("M", ["MM", 2], "Mo", (function () {
            return this.month() + 1
          })), R("MMM", 0, 0, (function (e) {
            return this.localeData().monthsShort(this, e)
          })), R("MMMM", 0, 0, (function (e) {
            return this.localeData().months(this, e)
          })), re("month", "M"), de("month", 8), Fe("M", Ye), Fe("MM", Ye, ve), Fe("MMM", (function (e, t) {
            return t.monthsShortRegex(e)
          })), Fe("MMMM", (function (e, t) {
            return t.monthsRegex(e)
          })), Ne(["M", "MM"], (function (e, t) {
            t[Ue] = _e(e) - 1
          })), Ne(["MMM", "MMMM"], (function (e, t, a, n) {
            var r = a._locale.monthsParse(e, n, a._strict);
            null != r ? t[Ue] = r : M(a).invalidMonth = e
          }));
          var at = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            nt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            rt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            it = Ce,
            st = Ce;

          function ot(e, t) {
            return e ? o(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || rt).test(t) ? "format" : "standalone"][e.month()] : o(this._months) ? this._months : this._months["standalone"]
          }

          function dt(e, t) {
            return e ? o(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[rt.test(t) ? "format" : "standalone"][e.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"]
          }

          function lt(e, t, a) {
            var n, r, i, s = e.toLocaleLowerCase();
            if (!this._monthsParse)
              for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) i = p([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(i, "").toLocaleLowerCase();
            return a ? "MMM" === t ? (r = Be.call(this._shortMonthsParse, s), -1 !== r ? r : null) : (r = Be.call(this._longMonthsParse, s), -1 !== r ? r : null) : "MMM" === t ? (r = Be.call(this._shortMonthsParse, s), -1 !== r ? r : (r = Be.call(this._longMonthsParse, s), -1 !== r ? r : null)) : (r = Be.call(this._longMonthsParse, s), -1 !== r ? r : (r = Be.call(this._shortMonthsParse, s), -1 !== r ? r : null))
          }

          function ut(e, t, a) {
            var n, r, i;
            if (this._monthsParseExact) return lt.call(this, e, t, a);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
              if (r = p([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), a || this._monthsParse[n] || (i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(i.replace(".", ""), "i")), a && "MMMM" === t && this._longMonthsParse[n].test(e)) return n;
              if (a && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
              if (!a && this._monthsParse[n].test(e)) return n
            }
          }

          function ct(e, t) {
            var a;
            if (!e.isValid()) return e;
            if ("string" === typeof t)
              if (/^\d+$/.test(t)) t = _e(t);
              else if (t = e.localeData().monthsParse(t), !_(t)) return e;
            return a = Math.min(e.date(), tt(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a), e
          }

          function _t(e) {
            return null != e ? (ct(this, e), i.updateOffset(this, !0), this) : he(this, "Month")
          }

          function mt() {
            return tt(this.year(), this.month())
          }

          function ht(e) {
            return this._monthsParseExact ? (l(this, "_monthsRegex") || pt.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = it), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
          }

          function ft(e) {
            return this._monthsParseExact ? (l(this, "_monthsRegex") || pt.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = st), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
          }

          function pt() {
            function e(e, t) {
              return t.length - e.length
            }
            var t, a, n = [],
              r = [],
              i = [];
            for (t = 0; t < 12; t++) a = p([2e3, t]), n.push(this.monthsShort(a, "")), r.push(this.months(a, "")), i.push(this.months(a, "")), i.push(this.monthsShort(a, ""));
            for (n.sort(e), r.sort(e), i.sort(e), t = 0; t < 12; t++) n[t] = Ie(n[t]), r[t] = Ie(r[t]);
            for (t = 0; t < 24; t++) i[t] = Ie(i[t]);
            this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
          }

          function yt(e) {
            return ue(e) ? 366 : 365
          }
          R("Y", 0, 0, (function () {
            var e = this.year();
            return e <= 9999 ? E(e, 4) : "+" + e
          })), R(0, ["YY", 2], 0, (function () {
            return this.year() % 100
          })), R(0, ["YYYY", 4], 0, "year"), R(0, ["YYYYY", 5], 0, "year"), R(0, ["YYYYYY", 6, !0], 0, "year"), re("year", "y"), de("year", 1), Fe("Y", je), Fe("YY", Ye, ve), Fe("YYYY", Te, be), Fe("YYYYY", Se, ke), Fe("YYYYYY", Se, ke), Ne(["YYYYY", "YYYYYY"], Je), Ne("YYYY", (function (e, t) {
            t[Je] = 2 === e.length ? i.parseTwoDigitYear(e) : _e(e)
          })), Ne("YY", (function (e, t) {
            t[Je] = i.parseTwoDigitYear(e)
          })), Ne("Y", (function (e, t) {
            t[Je] = parseInt(e, 10)
          })), i.parseTwoDigitYear = function (e) {
            return _e(e) + (_e(e) > 68 ? 1900 : 2e3)
          };
          var Mt = me("FullYear", !0);

          function gt() {
            return ue(this.year())
          }

          function vt(e, t, a, n, r, i, s) {
            var o;
            return e < 100 && e >= 0 ? (o = new Date(e + 400, t, a, n, r, i, s), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, a, n, r, i, s), o
          }

          function Lt(e) {
            var t, a;
            return e < 100 && e >= 0 ? (a = Array.prototype.slice.call(arguments), a[0] = e + 400, t = new Date(Date.UTC.apply(null, a)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t
          }

          function bt(e, t, a) {
            var n = 7 + t - a,
              r = (7 + Lt(e, 0, n).getUTCDay() - t) % 7;
            return -r + n - 1
          }

          function kt(e, t, a, n, r) {
            var i, s, o = (7 + a - n) % 7,
              d = bt(e, n, r),
              l = 1 + 7 * (t - 1) + o + d;
            return l <= 0 ? (i = e - 1, s = yt(i) + l) : l > yt(e) ? (i = e + 1, s = l - yt(e)) : (i = e, s = l), {
              year: i,
              dayOfYear: s
            }
          }

          function Yt(e, t, a) {
            var n, r, i = bt(e.year(), t, a),
              s = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
            return s < 1 ? (r = e.year() - 1, n = s + Dt(r, t, a)) : s > Dt(e.year(), t, a) ? (n = s - Dt(e.year(), t, a), r = e.year() + 1) : (r = e.year(), n = s), {
              week: n,
              year: r
            }
          }

          function Dt(e, t, a) {
            var n = bt(e, t, a),
              r = bt(e + 1, t, a);
            return (yt(e) - n + r) / 7
          }

          function wt(e) {
            return Yt(e, this._week.dow, this._week.doy).week
          }
          R("w", ["ww", 2], "wo", "week"), R("W", ["WW", 2], "Wo", "isoWeek"), re("week", "w"), re("isoWeek", "W"), de("week", 5), de("isoWeek", 5), Fe("w", Ye), Fe("ww", Ye, ve), Fe("W", Ye), Fe("WW", Ye, ve), Re(["w", "ww", "W", "WW"], (function (e, t, a, n) {
            t[n.substr(0, 1)] = _e(e)
          }));
          var xt = {
            dow: 0,
            doy: 6
          };

          function Tt() {
            return this._week.dow
          }

          function St() {
            return this._week.doy
          }

          function Ht(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d")
          }

          function jt(e) {
            var t = Yt(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d")
          }

          function Pt(e, t) {
            return "string" !== typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" === typeof e ? e : null) : parseInt(e, 10)
          }

          function Ot(e, t) {
            return "string" === typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
          }

          function At(e, t) {
            return e.slice(t, 7).concat(e.slice(0, t))
          }
          R("d", 0, "do", "day"), R("dd", 0, 0, (function (e) {
            return this.localeData().weekdaysMin(this, e)
          })), R("ddd", 0, 0, (function (e) {
            return this.localeData().weekdaysShort(this, e)
          })), R("dddd", 0, 0, (function (e) {
            return this.localeData().weekdays(this, e)
          })), R("e", 0, 0, "weekday"), R("E", 0, 0, "isoWeekday"), re("day", "d"), re("weekday", "e"), re("isoWeekday", "E"), de("day", 11), de("weekday", 11), de("isoWeekday", 11), Fe("d", Ye), Fe("e", Ye), Fe("E", Ye), Fe("dd", (function (e, t) {
            return t.weekdaysMinRegex(e)
          })), Fe("ddd", (function (e, t) {
            return t.weekdaysShortRegex(e)
          })), Fe("dddd", (function (e, t) {
            return t.weekdaysRegex(e)
          })), Re(["dd", "ddd", "dddd"], (function (e, t, a, n) {
            var r = a._locale.weekdaysParse(e, n, a._strict);
            null != r ? t.d = r : M(a).invalidWeekday = e
          })), Re(["d", "e", "E"], (function (e, t, a, n) {
            t[n] = _e(e)
          }));
          var Ct = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            Ft = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            Et = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            Wt = Ce,
            It = Ce,
            zt = Ce;

          function Nt(e, t) {
            var a = o(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
            return !0 === e ? At(a, this._week.dow) : e ? a[e.day()] : a
          }

          function Rt(e) {
            return !0 === e ? At(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
          }

          function Vt(e) {
            return !0 === e ? At(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
          }

          function Bt(e, t, a) {
            var n, r, i, s = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
              for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) i = p([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(i, "").toLocaleLowerCase();
            return a ? "dddd" === t ? (r = Be.call(this._weekdaysParse, s), -1 !== r ? r : null) : "ddd" === t ? (r = Be.call(this._shortWeekdaysParse, s), -1 !== r ? r : null) : (r = Be.call(this._minWeekdaysParse, s), -1 !== r ? r : null) : "dddd" === t ? (r = Be.call(this._weekdaysParse, s), -1 !== r ? r : (r = Be.call(this._shortWeekdaysParse, s), -1 !== r ? r : (r = Be.call(this._minWeekdaysParse, s), -1 !== r ? r : null))) : "ddd" === t ? (r = Be.call(this._shortWeekdaysParse, s), -1 !== r ? r : (r = Be.call(this._weekdaysParse, s), -1 !== r ? r : (r = Be.call(this._minWeekdaysParse, s), -1 !== r ? r : null))) : (r = Be.call(this._minWeekdaysParse, s), -1 !== r ? r : (r = Be.call(this._weekdaysParse, s), -1 !== r ? r : (r = Be.call(this._shortWeekdaysParse, s), -1 !== r ? r : null)))
          }

          function Jt(e, t, a) {
            var n, r, i;
            if (this._weekdaysParseExact) return Bt.call(this, e, t, a);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
              if (r = p([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = new RegExp(i.replace(".", ""), "i")), a && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;
              if (a && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;
              if (a && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;
              if (!a && this._weekdaysParse[n].test(e)) return n
            }
          }

          function Ut(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (e = Pt(e, this.localeData()), this.add(e - t, "d")) : t
          }

          function Gt(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d")
          }

          function qt(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
              var t = Ot(e, this.localeData());
              return this.day(this.day() % 7 ? t : t - 7)
            }
            return this.day() || 7
          }

          function $t(e) {
            return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Zt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Wt), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
          }

          function Kt(e) {
            return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Zt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = It), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
          }

          function Qt(e) {
            return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Zt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = zt), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
          }

          function Zt() {
            function e(e, t) {
              return t.length - e.length
            }
            var t, a, n, r, i, s = [],
              o = [],
              d = [],
              l = [];
            for (t = 0; t < 7; t++) a = p([2e3, 1]).day(t), n = Ie(this.weekdaysMin(a, "")), r = Ie(this.weekdaysShort(a, "")), i = Ie(this.weekdays(a, "")), s.push(n), o.push(r), d.push(i), l.push(n), l.push(r), l.push(i);
            s.sort(e), o.sort(e), d.sort(e), l.sort(e), this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
          }

          function Xt() {
            return this.hours() % 12 || 12
          }

          function ea() {
            return this.hours() || 24
          }

          function ta(e, t) {
            R(e, 0, 0, (function () {
              return this.localeData().meridiem(this.hours(), this.minutes(), t)
            }))
          }

          function aa(e, t) {
            return t._meridiemParse
          }

          function na(e) {
            return "p" === (e + "").toLowerCase().charAt(0)
          }
          R("H", ["HH", 2], 0, "hour"), R("h", ["hh", 2], 0, Xt), R("k", ["kk", 2], 0, ea), R("hmm", 0, 0, (function () {
            return "" + Xt.apply(this) + E(this.minutes(), 2)
          })), R("hmmss", 0, 0, (function () {
            return "" + Xt.apply(this) + E(this.minutes(), 2) + E(this.seconds(), 2)
          })), R("Hmm", 0, 0, (function () {
            return "" + this.hours() + E(this.minutes(), 2)
          })), R("Hmmss", 0, 0, (function () {
            return "" + this.hours() + E(this.minutes(), 2) + E(this.seconds(), 2)
          })), ta("a", !0), ta("A", !1), re("hour", "h"), de("hour", 13), Fe("a", aa), Fe("A", aa), Fe("H", Ye), Fe("h", Ye), Fe("k", Ye), Fe("HH", Ye, ve), Fe("hh", Ye, ve), Fe("kk", Ye, ve), Fe("hmm", De), Fe("hmmss", we), Fe("Hmm", De), Fe("Hmmss", we), Ne(["H", "HH"], qe), Ne(["k", "kk"], (function (e, t, a) {
            var n = _e(e);
            t[qe] = 24 === n ? 0 : n
          })), Ne(["a", "A"], (function (e, t, a) {
            a._isPm = a._locale.isPM(e), a._meridiem = e
          })), Ne(["h", "hh"], (function (e, t, a) {
            t[qe] = _e(e), M(a).bigHour = !0
          })), Ne("hmm", (function (e, t, a) {
            var n = e.length - 2;
            t[qe] = _e(e.substr(0, n)), t[$e] = _e(e.substr(n)), M(a).bigHour = !0
          })), Ne("hmmss", (function (e, t, a) {
            var n = e.length - 4,
              r = e.length - 2;
            t[qe] = _e(e.substr(0, n)), t[$e] = _e(e.substr(n, 2)), t[Ke] = _e(e.substr(r)), M(a).bigHour = !0
          })), Ne("Hmm", (function (e, t, a) {
            var n = e.length - 2;
            t[qe] = _e(e.substr(0, n)), t[$e] = _e(e.substr(n))
          })), Ne("Hmmss", (function (e, t, a) {
            var n = e.length - 4,
              r = e.length - 2;
            t[qe] = _e(e.substr(0, n)), t[$e] = _e(e.substr(n, 2)), t[Ke] = _e(e.substr(r))
          }));
          var ra = /[ap]\.?m?\.?/i,
            ia = me("Hours", !0);

          function sa(e, t, a) {
            return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM"
          }
          var oa, da = {
              calendar: C,
              longDateFormat: G,
              invalidDate: $,
              ordinal: Q,
              dayOfMonthOrdinalParse: Z,
              relativeTime: ee,
              months: at,
              monthsShort: nt,
              week: xt,
              weekdays: Ct,
              weekdaysMin: Et,
              weekdaysShort: Ft,
              meridiemParse: ra
            },
            la = {},
            ua = {};

          function ca(e, t) {
            var a, n = Math.min(e.length, t.length);
            for (a = 0; a < n; a += 1)
              if (e[a] !== t[a]) return a;
            return n
          }

          function _a(e) {
            return e ? e.toLowerCase().replace("_", "-") : e
          }

          function ma(e) {
            var t, a, n, r, i = 0;
            while (i < e.length) {
              r = _a(e[i]).split("-"), t = r.length, a = _a(e[i + 1]), a = a ? a.split("-") : null;
              while (t > 0) {
                if (n = ha(r.slice(0, t).join("-")), n) return n;
                if (a && a.length >= t && ca(r, a) >= t - 1) break;
                t--
              }
              i++
            }
            return oa
          }

          function ha(n) {
            var r = null;
            if (void 0 === la[n] && "undefined" !== typeof e && e && e.exports) try {
              r = oa._abbr, t, a("4678")("./" + n), fa(r)
            } catch (i) {
              la[n] = null
            }
            return la[n]
          }

          function fa(e, t) {
            var a;
            return e && (a = c(t) ? Ma(e) : pa(e, t), a ? oa = a : "undefined" !== typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), oa._abbr
          }

          function pa(e, t) {
            if (null !== t) {
              var a, n = da;
              if (t.abbr = e, null != la[e]) H("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = la[e]._config;
              else if (null != t.parentLocale)
                if (null != la[t.parentLocale]) n = la[t.parentLocale]._config;
                else {
                  if (a = ha(t.parentLocale), null == a) return ua[t.parentLocale] || (ua[t.parentLocale] = []), ua[t.parentLocale].push({
                    name: e,
                    config: t
                  }), null;
                  n = a._config
                } return la[e] = new A(O(n, t)), ua[e] && ua[e].forEach((function (e) {
                pa(e.name, e.config)
              })), fa(e), la[e]
            }
            return delete la[e], null
          }

          function ya(e, t) {
            if (null != t) {
              var a, n, r = da;
              null != la[e] && null != la[e].parentLocale ? la[e].set(O(la[e]._config, t)) : (n = ha(e), null != n && (r = n._config), t = O(r, t), null == n && (t.abbr = e), a = new A(t), a.parentLocale = la[e], la[e] = a), fa(e)
            } else null != la[e] && (null != la[e].parentLocale ? (la[e] = la[e].parentLocale, e === fa() && fa(e)) : null != la[e] && delete la[e]);
            return la[e]
          }

          function Ma(e) {
            var t;
            if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return oa;
            if (!o(e)) {
              if (t = ha(e), t) return t;
              e = [e]
            }
            return ma(e)
          }

          function ga() {
            return T(la)
          }

          function va(e) {
            var t, a = e._a;
            return a && -2 === M(e).overflow && (t = a[Ue] < 0 || a[Ue] > 11 ? Ue : a[Ge] < 1 || a[Ge] > tt(a[Je], a[Ue]) ? Ge : a[qe] < 0 || a[qe] > 24 || 24 === a[qe] && (0 !== a[$e] || 0 !== a[Ke] || 0 !== a[Qe]) ? qe : a[$e] < 0 || a[$e] > 59 ? $e : a[Ke] < 0 || a[Ke] > 59 ? Ke : a[Qe] < 0 || a[Qe] > 999 ? Qe : -1, M(e)._overflowDayOfYear && (t < Je || t > Ge) && (t = Ge), M(e)._overflowWeeks && -1 === t && (t = Ze), M(e)._overflowWeekday && -1 === t && (t = Xe), M(e).overflow = t), e
          }
          var La = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            ba = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            ka = /Z|[+-]\d\d(?::?\d\d)?/,
            Ya = [
              ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
              ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
              ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
              ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
              ["YYYY-DDD", /\d{4}-\d{3}/],
              ["YYYY-MM", /\d{4}-\d\d/, !1],
              ["YYYYYYMMDD", /[+-]\d{10}/],
              ["YYYYMMDD", /\d{8}/],
              ["GGGG[W]WWE", /\d{4}W\d{3}/],
              ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
              ["YYYYDDD", /\d{7}/],
              ["YYYYMM", /\d{6}/, !1],
              ["YYYY", /\d{4}/, !1]
            ],
            Da = [
              ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
              ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
              ["HH:mm:ss", /\d\d:\d\d:\d\d/],
              ["HH:mm", /\d\d:\d\d/],
              ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
              ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
              ["HHmmss", /\d\d\d\d\d\d/],
              ["HHmm", /\d\d\d\d/],
              ["HH", /\d\d/]
            ],
            wa = /^\/?Date\((-?\d+)/i,
            xa = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
            Ta = {
              UT: 0,
              GMT: 0,
              EDT: -240,
              EST: -300,
              CDT: -300,
              CST: -360,
              MDT: -360,
              MST: -420,
              PDT: -420,
              PST: -480
            };

          function Sa(e) {
            var t, a, n, r, i, s, o = e._i,
              d = La.exec(o) || ba.exec(o);
            if (d) {
              for (M(e).iso = !0, t = 0, a = Ya.length; t < a; t++)
                if (Ya[t][1].exec(d[1])) {
                  r = Ya[t][0], n = !1 !== Ya[t][2];
                  break
                } if (null == r) return void(e._isValid = !1);
              if (d[3]) {
                for (t = 0, a = Da.length; t < a; t++)
                  if (Da[t][1].exec(d[3])) {
                    i = (d[2] || " ") + Da[t][0];
                    break
                  } if (null == i) return void(e._isValid = !1)
              }
              if (!n && null != i) return void(e._isValid = !1);
              if (d[4]) {
                if (!ka.exec(d[4])) return void(e._isValid = !1);
                s = "Z"
              }
              e._f = r + (i || "") + (s || ""), Na(e)
            } else e._isValid = !1
          }

          function Ha(e, t, a, n, r, i) {
            var s = [ja(e), nt.indexOf(t), parseInt(a, 10), parseInt(n, 10), parseInt(r, 10)];
            return i && s.push(parseInt(i, 10)), s
          }

          function ja(e) {
            var t = parseInt(e, 10);
            return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
          }

          function Pa(e) {
            return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
          }

          function Oa(e, t, a) {
            if (e) {
              var n = Ft.indexOf(e),
                r = new Date(t[0], t[1], t[2]).getDay();
              if (n !== r) return M(a).weekdayMismatch = !0, a._isValid = !1, !1
            }
            return !0
          }

          function Aa(e, t, a) {
            if (e) return Ta[e];
            if (t) return 0;
            var n = parseInt(a, 10),
              r = n % 100,
              i = (n - r) / 100;
            return 60 * i + r
          }

          function Ca(e) {
            var t, a = xa.exec(Pa(e._i));
            if (a) {
              if (t = Ha(a[4], a[3], a[2], a[5], a[6], a[7]), !Oa(a[1], t, e)) return;
              e._a = t, e._tzm = Aa(a[8], a[9], a[10]), e._d = Lt.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), M(e).rfc2822 = !0
            } else e._isValid = !1
          }

          function Fa(e) {
            var t = wa.exec(e._i);
            null === t ? (Sa(e), !1 === e._isValid && (delete e._isValid, Ca(e), !1 === e._isValid && (delete e._isValid, e._strict ? e._isValid = !1 : i.createFromInputFallback(e)))) : e._d = new Date(+t[1])
          }

          function Ea(e, t, a) {
            return null != e ? e : null != t ? t : a
          }

          function Wa(e) {
            var t = new Date(i.now());
            return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
          }

          function Ia(e) {
            var t, a, n, r, i, s = [];
            if (!e._d) {
              for (n = Wa(e), e._w && null == e._a[Ge] && null == e._a[Ue] && za(e), null != e._dayOfYear && (i = Ea(e._a[Je], n[Je]), (e._dayOfYear > yt(i) || 0 === e._dayOfYear) && (M(e)._overflowDayOfYear = !0), a = Lt(i, 0, e._dayOfYear), e._a[Ue] = a.getUTCMonth(), e._a[Ge] = a.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = s[t] = n[t];
              for (; t < 7; t++) e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
              24 === e._a[qe] && 0 === e._a[$e] && 0 === e._a[Ke] && 0 === e._a[Qe] && (e._nextDay = !0, e._a[qe] = 0), e._d = (e._useUTC ? Lt : vt).apply(null, s), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[qe] = 24), e._w && "undefined" !== typeof e._w.d && e._w.d !== r && (M(e).weekdayMismatch = !0)
            }
          }

          function za(e) {
            var t, a, n, r, i, s, o, d, l;
            t = e._w, null != t.GG || null != t.W || null != t.E ? (i = 1, s = 4, a = Ea(t.GG, e._a[Je], Yt($a(), 1, 4).year), n = Ea(t.W, 1), r = Ea(t.E, 1), (r < 1 || r > 7) && (d = !0)) : (i = e._locale._week.dow, s = e._locale._week.doy, l = Yt($a(), i, s), a = Ea(t.gg, e._a[Je], l.year), n = Ea(t.w, l.week), null != t.d ? (r = t.d, (r < 0 || r > 6) && (d = !0)) : null != t.e ? (r = t.e + i, (t.e < 0 || t.e > 6) && (d = !0)) : r = i), n < 1 || n > Dt(a, i, s) ? M(e)._overflowWeeks = !0 : null != d ? M(e)._overflowWeekday = !0 : (o = kt(a, n, r, i, s), e._a[Je] = o.year, e._dayOfYear = o.dayOfYear)
          }

          function Na(e) {
            if (e._f !== i.ISO_8601)
              if (e._f !== i.RFC_2822) {
                e._a = [], M(e).empty = !0;
                var t, a, n, r, s, o, d = "" + e._i,
                  l = d.length,
                  u = 0;
                for (n = U(e._f, e._locale).match(W) || [], t = 0; t < n.length; t++) r = n[t], a = (d.match(Ee(r, e)) || [])[0], a && (s = d.substr(0, d.indexOf(a)), s.length > 0 && M(e).unusedInput.push(s), d = d.slice(d.indexOf(a) + a.length), u += a.length), N[r] ? (a ? M(e).empty = !1 : M(e).unusedTokens.push(r), Ve(r, a, e)) : e._strict && !a && M(e).unusedTokens.push(r);
                M(e).charsLeftOver = l - u, d.length > 0 && M(e).unusedInput.push(d), e._a[qe] <= 12 && !0 === M(e).bigHour && e._a[qe] > 0 && (M(e).bigHour = void 0), M(e).parsedDateParts = e._a.slice(0), M(e).meridiem = e._meridiem, e._a[qe] = Ra(e._locale, e._a[qe], e._meridiem), o = M(e).era, null !== o && (e._a[Je] = e._locale.erasConvertYear(o, e._a[Je])), Ia(e), va(e)
              } else Ca(e);
            else Sa(e)
          }

          function Ra(e, t, a) {
            var n;
            return null == a ? t : null != e.meridiemHour ? e.meridiemHour(t, a) : null != e.isPM ? (n = e.isPM(a), n && t < 12 && (t += 12), n || 12 !== t || (t = 0), t) : t
          }

          function Va(e) {
            var t, a, n, r, i, s, o = !1;
            if (0 === e._f.length) return M(e).invalidFormat = !0, void(e._d = new Date(NaN));
            for (r = 0; r < e._f.length; r++) i = 0, s = !1, t = k({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], Na(t), g(t) && (s = !0), i += M(t).charsLeftOver, i += 10 * M(t).unusedTokens.length, M(t).score = i, o ? i < n && (n = i, a = t) : (null == n || i < n || s) && (n = i, a = t, s && (o = !0));
            f(e, a || t)
          }

          function Ba(e) {
            if (!e._d) {
              var t = se(e._i),
                a = void 0 === t.day ? t.date : t.day;
              e._a = h([t.year, t.month, a, t.hour, t.minute, t.second, t.millisecond], (function (e) {
                return e && parseInt(e, 10)
              })), Ia(e)
            }
          }

          function Ja(e) {
            var t = new Y(va(Ua(e)));
            return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
          }

          function Ua(e) {
            var t = e._i,
              a = e._f;
            return e._locale = e._locale || Ma(e._l), null === t || void 0 === a && "" === t ? v({
              nullInput: !0
            }) : ("string" === typeof t && (e._i = t = e._locale.preparse(t)), D(t) ? new Y(va(t)) : (m(t) ? e._d = t : o(a) ? Va(e) : a ? Na(e) : Ga(e), g(e) || (e._d = null), e))
          }

          function Ga(e) {
            var t = e._i;
            c(t) ? e._d = new Date(i.now()) : m(t) ? e._d = new Date(t.valueOf()) : "string" === typeof t ? Fa(e) : o(t) ? (e._a = h(t.slice(0), (function (e) {
              return parseInt(e, 10)
            })), Ia(e)) : d(t) ? Ba(e) : _(t) ? e._d = new Date(t) : i.createFromInputFallback(e)
          }

          function qa(e, t, a, n, r) {
            var i = {};
            return !0 !== t && !1 !== t || (n = t, t = void 0), !0 !== a && !1 !== a || (n = a, a = void 0), (d(e) && u(e) || o(e) && 0 === e.length) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = r, i._l = a, i._i = e, i._f = t, i._strict = n, Ja(i)
          }

          function $a(e, t, a, n) {
            return qa(e, t, a, n, !1)
          }
          i.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function (e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
          })), i.ISO_8601 = function () {}, i.RFC_2822 = function () {};
          var Ka = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function () {
              var e = $a.apply(null, arguments);
              return this.isValid() && e.isValid() ? e < this ? this : e : v()
            })),
            Qa = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function () {
              var e = $a.apply(null, arguments);
              return this.isValid() && e.isValid() ? e > this ? this : e : v()
            }));

          function Za(e, t) {
            var a, n;
            if (1 === t.length && o(t[0]) && (t = t[0]), !t.length) return $a();
            for (a = t[0], n = 1; n < t.length; ++n) t[n].isValid() && !t[n][e](a) || (a = t[n]);
            return a
          }

          function Xa() {
            var e = [].slice.call(arguments, 0);
            return Za("isBefore", e)
          }

          function en() {
            var e = [].slice.call(arguments, 0);
            return Za("isAfter", e)
          }
          var tn = function () {
              return Date.now ? Date.now() : +new Date
            },
            an = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

          function nn(e) {
            var t, a, n = !1;
            for (t in e)
              if (l(e, t) && (-1 === Be.call(an, t) || null != e[t] && isNaN(e[t]))) return !1;
            for (a = 0; a < an.length; ++a)
              if (e[an[a]]) {
                if (n) return !1;
                parseFloat(e[an[a]]) !== _e(e[an[a]]) && (n = !0)
              } return !0
          }

          function rn() {
            return this._isValid
          }

          function sn() {
            return Sn(NaN)
          }

          function on(e) {
            var t = se(e),
              a = t.year || 0,
              n = t.quarter || 0,
              r = t.month || 0,
              i = t.week || t.isoWeek || 0,
              s = t.day || 0,
              o = t.hour || 0,
              d = t.minute || 0,
              l = t.second || 0,
              u = t.millisecond || 0;
            this._isValid = nn(t), this._milliseconds = +u + 1e3 * l + 6e4 * d + 1e3 * o * 60 * 60, this._days = +s + 7 * i, this._months = +r + 3 * n + 12 * a, this._data = {}, this._locale = Ma(), this._bubble()
          }

          function dn(e) {
            return e instanceof on
          }

          function ln(e) {
            return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
          }

          function un(e, t, a) {
            var n, r = Math.min(e.length, t.length),
              i = Math.abs(e.length - t.length),
              s = 0;
            for (n = 0; n < r; n++)(a && e[n] !== t[n] || !a && _e(e[n]) !== _e(t[n])) && s++;
            return s + i
          }

          function cn(e, t) {
            R(e, 0, 0, (function () {
              var e = this.utcOffset(),
                a = "+";
              return e < 0 && (e = -e, a = "-"), a + E(~~(e / 60), 2) + t + E(~~e % 60, 2)
            }))
          }
          cn("Z", ":"), cn("ZZ", ""), Fe("Z", Oe), Fe("ZZ", Oe), Ne(["Z", "ZZ"], (function (e, t, a) {
            a._useUTC = !0, a._tzm = mn(Oe, e)
          }));
          var _n = /([\+\-]|\d\d)/gi;

          function mn(e, t) {
            var a, n, r, i = (t || "").match(e);
            return null === i ? null : (a = i[i.length - 1] || [], n = (a + "").match(_n) || ["-", 0, 0], r = 60 * n[1] + _e(n[2]), 0 === r ? 0 : "+" === n[0] ? r : -r)
          }

          function hn(e, t) {
            var a, n;
            return t._isUTC ? (a = t.clone(), n = (D(e) || m(e) ? e.valueOf() : $a(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + n), i.updateOffset(a, !1), a) : $a(e).local()
          }

          function fn(e) {
            return -Math.round(e._d.getTimezoneOffset())
          }

          function pn(e, t, a) {
            var n, r = this._offset || 0;
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
              if ("string" === typeof e) {
                if (e = mn(Oe, e), null === e) return this
              } else Math.abs(e) < 16 && !a && (e *= 60);
              return !this._isUTC && t && (n = fn(this)), this._offset = e, this._isUTC = !0, null != n && this.add(n, "m"), r !== e && (!t || this._changeInProgress ? An(this, Sn(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this
            }
            return this._isUTC ? r : fn(this)
          }

          function yn(e, t) {
            return null != e ? ("string" !== typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
          }

          function Mn(e) {
            return this.utcOffset(0, e)
          }

          function gn(e) {
            return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(fn(this), "m")), this
          }

          function vn() {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" === typeof this._i) {
              var e = mn(Pe, this._i);
              null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
            }
            return this
          }

          function Ln(e) {
            return !!this.isValid() && (e = e ? $a(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0)
          }

          function bn() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
          }

          function kn() {
            if (!c(this._isDSTShifted)) return this._isDSTShifted;
            var e, t = {};
            return k(t, this), t = Ua(t), t._a ? (e = t._isUTC ? p(t._a) : $a(t._a), this._isDSTShifted = this.isValid() && un(t._a, e.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
          }

          function Yn() {
            return !!this.isValid() && !this._isUTC
          }

          function Dn() {
            return !!this.isValid() && this._isUTC
          }

          function wn() {
            return !!this.isValid() && (this._isUTC && 0 === this._offset)
          }
          i.updateOffset = function () {};
          var xn = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
            Tn = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

          function Sn(e, t) {
            var a, n, r, i = e,
              s = null;
            return dn(e) ? i = {
              ms: e._milliseconds,
              d: e._days,
              M: e._months
            } : _(e) || !isNaN(+e) ? (i = {}, t ? i[t] = +e : i.milliseconds = +e) : (s = xn.exec(e)) ? (a = "-" === s[1] ? -1 : 1, i = {
              y: 0,
              d: _e(s[Ge]) * a,
              h: _e(s[qe]) * a,
              m: _e(s[$e]) * a,
              s: _e(s[Ke]) * a,
              ms: _e(ln(1e3 * s[Qe])) * a
            }) : (s = Tn.exec(e)) ? (a = "-" === s[1] ? -1 : 1, i = {
              y: Hn(s[2], a),
              M: Hn(s[3], a),
              w: Hn(s[4], a),
              d: Hn(s[5], a),
              h: Hn(s[6], a),
              m: Hn(s[7], a),
              s: Hn(s[8], a)
            }) : null == i ? i = {} : "object" === typeof i && ("from" in i || "to" in i) && (r = Pn($a(i.from), $a(i.to)), i = {}, i.ms = r.milliseconds, i.M = r.months), n = new on(i), dn(e) && l(e, "_locale") && (n._locale = e._locale), dn(e) && l(e, "_isValid") && (n._isValid = e._isValid), n
          }

          function Hn(e, t) {
            var a = e && parseFloat(e.replace(",", "."));
            return (isNaN(a) ? 0 : a) * t
          }

          function jn(e, t) {
            var a = {};
            return a.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(a.months, "M").isAfter(t) && --a.months, a.milliseconds = +t - +e.clone().add(a.months, "M"), a
          }

          function Pn(e, t) {
            var a;
            return e.isValid() && t.isValid() ? (t = hn(t, e), e.isBefore(t) ? a = jn(e, t) : (a = jn(t, e), a.milliseconds = -a.milliseconds, a.months = -a.months), a) : {
              milliseconds: 0,
              months: 0
            }
          }

          function On(e, t) {
            return function (a, n) {
              var r, i;
              return null === n || isNaN(+n) || (H(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = a, a = n, n = i), r = Sn(a, n), An(this, r, e), this
            }
          }

          function An(e, t, a, n) {
            var r = t._milliseconds,
              s = ln(t._days),
              o = ln(t._months);
            e.isValid() && (n = null == n || n, o && ct(e, he(e, "Month") + o * a), s && fe(e, "Date", he(e, "Date") + s * a), r && e._d.setTime(e._d.valueOf() + r * a), n && i.updateOffset(e, s || o))
          }
          Sn.fn = on.prototype, Sn.invalid = sn;
          var Cn = On(1, "add"),
            Fn = On(-1, "subtract");

          function En(e) {
            return "string" === typeof e || e instanceof String
          }

          function Wn(e) {
            return D(e) || m(e) || En(e) || _(e) || zn(e) || In(e) || null === e || void 0 === e
          }

          function In(e) {
            var t, a, n = d(e) && !u(e),
              r = !1,
              i = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"];
            for (t = 0; t < i.length; t += 1) a = i[t], r = r || l(e, a);
            return n && r
          }

          function zn(e) {
            var t = o(e),
              a = !1;
            return t && (a = 0 === e.filter((function (t) {
              return !_(t) && En(e)
            })).length), t && a
          }

          function Nn(e) {
            var t, a, n = d(e) && !u(e),
              r = !1,
              i = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
            for (t = 0; t < i.length; t += 1) a = i[t], r = r || l(e, a);
            return n && r
          }

          function Rn(e, t) {
            var a = e.diff(t, "days", !0);
            return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse"
          }

          function Vn(e, t) {
            1 === arguments.length && (Wn(arguments[0]) ? (e = arguments[0], t = void 0) : Nn(arguments[0]) && (t = arguments[0], e = void 0));
            var a = e || $a(),
              n = hn(a, this).startOf("day"),
              r = i.calendarFormat(this, n) || "sameElse",
              s = t && (j(t[r]) ? t[r].call(this, a) : t[r]);
            return this.format(s || this.localeData().calendar(r, this, $a(a)))
          }

          function Bn() {
            return new Y(this)
          }

          function Jn(e, t) {
            var a = D(e) ? e : $a(e);
            return !(!this.isValid() || !a.isValid()) && (t = ie(t) || "millisecond", "millisecond" === t ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf())
          }

          function Un(e, t) {
            var a = D(e) ? e : $a(e);
            return !(!this.isValid() || !a.isValid()) && (t = ie(t) || "millisecond", "millisecond" === t ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf())
          }

          function Gn(e, t, a, n) {
            var r = D(e) ? e : $a(e),
              i = D(t) ? t : $a(t);
            return !!(this.isValid() && r.isValid() && i.isValid()) && (n = n || "()", ("(" === n[0] ? this.isAfter(r, a) : !this.isBefore(r, a)) && (")" === n[1] ? this.isBefore(i, a) : !this.isAfter(i, a)))
          }

          function qn(e, t) {
            var a, n = D(e) ? e : $a(e);
            return !(!this.isValid() || !n.isValid()) && (t = ie(t) || "millisecond", "millisecond" === t ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf()))
          }

          function $n(e, t) {
            return this.isSame(e, t) || this.isAfter(e, t)
          }

          function Kn(e, t) {
            return this.isSame(e, t) || this.isBefore(e, t)
          }

          function Qn(e, t, a) {
            var n, r, i;
            if (!this.isValid()) return NaN;
            if (n = hn(e, this), !n.isValid()) return NaN;
            switch (r = 6e4 * (n.utcOffset() - this.utcOffset()), t = ie(t), t) {
              case "year":
                i = Zn(this, n) / 12;
                break;
              case "month":
                i = Zn(this, n);
                break;
              case "quarter":
                i = Zn(this, n) / 3;
                break;
              case "second":
                i = (this - n) / 1e3;
                break;
              case "minute":
                i = (this - n) / 6e4;
                break;
              case "hour":
                i = (this - n) / 36e5;
                break;
              case "day":
                i = (this - n - r) / 864e5;
                break;
              case "week":
                i = (this - n - r) / 6048e5;
                break;
              default:
                i = this - n
            }
            return a ? i : ce(i)
          }

          function Zn(e, t) {
            if (e.date() < t.date()) return -Zn(t, e);
            var a, n, r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
              i = e.clone().add(r, "months");
            return t - i < 0 ? (a = e.clone().add(r - 1, "months"), n = (t - i) / (i - a)) : (a = e.clone().add(r + 1, "months"), n = (t - i) / (a - i)), -(r + n) || 0
          }

          function Xn() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
          }

          function er(e) {
            if (!this.isValid()) return null;
            var t = !0 !== e,
              a = t ? this.clone().utc() : this;
            return a.year() < 0 || a.year() > 9999 ? J(a, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : j(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", J(a, "Z")) : J(a, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
          }

          function tr() {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var e, t, a, n, r = "moment",
              i = "";
            return this.isLocal() || (r = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", i = "Z"), e = "[" + r + '("]', t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", n = i + '[")]', this.format(e + t + a + n)
          }

          function ar(e) {
            e || (e = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat);
            var t = J(this, e);
            return this.localeData().postformat(t)
          }

          function nr(e, t) {
            return this.isValid() && (D(e) && e.isValid() || $a(e).isValid()) ? Sn({
              to: this,
              from: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
          }

          function rr(e) {
            return this.from($a(), e)
          }

          function ir(e, t) {
            return this.isValid() && (D(e) && e.isValid() || $a(e).isValid()) ? Sn({
              from: this,
              to: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
          }

          function sr(e) {
            return this.to($a(), e)
          }

          function or(e) {
            var t;
            return void 0 === e ? this._locale._abbr : (t = Ma(e), null != t && (this._locale = t), this)
          }
          i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
          var dr = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function (e) {
            return void 0 === e ? this.localeData() : this.locale(e)
          }));

          function lr() {
            return this._locale
          }
          var ur = 1e3,
            cr = 60 * ur,
            _r = 60 * cr,
            mr = 3506328 * _r;

          function hr(e, t) {
            return (e % t + t) % t
          }

          function fr(e, t, a) {
            return e < 100 && e >= 0 ? new Date(e + 400, t, a) - mr : new Date(e, t, a).valueOf()
          }

          function pr(e, t, a) {
            return e < 100 && e >= 0 ? Date.UTC(e + 400, t, a) - mr : Date.UTC(e, t, a)
          }

          function yr(e) {
            var t, a;
            if (e = ie(e), void 0 === e || "millisecond" === e || !this.isValid()) return this;
            switch (a = this._isUTC ? pr : fr, e) {
              case "year":
                t = a(this.year(), 0, 1);
                break;
              case "quarter":
                t = a(this.year(), this.month() - this.month() % 3, 1);
                break;
              case "month":
                t = a(this.year(), this.month(), 1);
                break;
              case "week":
                t = a(this.year(), this.month(), this.date() - this.weekday());
                break;
              case "isoWeek":
                t = a(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
              case "day":
              case "date":
                t = a(this.year(), this.month(), this.date());
                break;
              case "hour":
                t = this._d.valueOf(), t -= hr(t + (this._isUTC ? 0 : this.utcOffset() * cr), _r);
                break;
              case "minute":
                t = this._d.valueOf(), t -= hr(t, cr);
                break;
              case "second":
                t = this._d.valueOf(), t -= hr(t, ur);
                break
            }
            return this._d.setTime(t), i.updateOffset(this, !0), this
          }

          function Mr(e) {
            var t, a;
            if (e = ie(e), void 0 === e || "millisecond" === e || !this.isValid()) return this;
            switch (a = this._isUTC ? pr : fr, e) {
              case "year":
                t = a(this.year() + 1, 0, 1) - 1;
                break;
              case "quarter":
                t = a(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
              case "month":
                t = a(this.year(), this.month() + 1, 1) - 1;
                break;
              case "week":
                t = a(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
              case "isoWeek":
                t = a(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
              case "day":
              case "date":
                t = a(this.year(), this.month(), this.date() + 1) - 1;
                break;
              case "hour":
                t = this._d.valueOf(), t += _r - hr(t + (this._isUTC ? 0 : this.utcOffset() * cr), _r) - 1;
                break;
              case "minute":
                t = this._d.valueOf(), t += cr - hr(t, cr) - 1;
                break;
              case "second":
                t = this._d.valueOf(), t += ur - hr(t, ur) - 1;
                break
            }
            return this._d.setTime(t), i.updateOffset(this, !0), this
          }

          function gr() {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
          }

          function vr() {
            return Math.floor(this.valueOf() / 1e3)
          }

          function Lr() {
            return new Date(this.valueOf())
          }

          function br() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
          }

          function kr() {
            var e = this;
            return {
              years: e.year(),
              months: e.month(),
              date: e.date(),
              hours: e.hours(),
              minutes: e.minutes(),
              seconds: e.seconds(),
              milliseconds: e.milliseconds()
            }
          }

          function Yr() {
            return this.isValid() ? this.toISOString() : null
          }

          function Dr() {
            return g(this)
          }

          function wr() {
            return f({}, M(this))
          }

          function xr() {
            return M(this).overflow
          }

          function Tr() {
            return {
              input: this._i,
              format: this._f,
              locale: this._locale,
              isUTC: this._isUTC,
              strict: this._strict
            }
          }

          function Sr(e, t) {
            var a, n, r, s = this._eras || Ma("en")._eras;
            for (a = 0, n = s.length; a < n; ++a) {
              switch (typeof s[a].since) {
                case "string":
                  r = i(s[a].since).startOf("day"), s[a].since = r.valueOf();
                  break
              }
              switch (typeof s[a].until) {
                case "undefined":
                  s[a].until = 1 / 0;
                  break;
                case "string":
                  r = i(s[a].until).startOf("day").valueOf(), s[a].until = r.valueOf();
                  break
              }
            }
            return s
          }

          function Hr(e, t, a) {
            var n, r, i, s, o, d = this.eras();
            for (e = e.toUpperCase(), n = 0, r = d.length; n < r; ++n)
              if (i = d[n].name.toUpperCase(), s = d[n].abbr.toUpperCase(), o = d[n].narrow.toUpperCase(), a) switch (t) {
                case "N":
                case "NN":
                case "NNN":
                  if (s === e) return d[n];
                  break;
                case "NNNN":
                  if (i === e) return d[n];
                  break;
                case "NNNNN":
                  if (o === e) return d[n];
                  break
              } else if ([i, s, o].indexOf(e) >= 0) return d[n]
          }

          function jr(e, t) {
            var a = e.since <= e.until ? 1 : -1;
            return void 0 === t ? i(e.since).year() : i(e.since).year() + (t - e.offset) * a
          }

          function Pr() {
            var e, t, a, n = this.localeData().eras();
            for (e = 0, t = n.length; e < t; ++e) {
              if (a = this.startOf("day").valueOf(), n[e].since <= a && a <= n[e].until) return n[e].name;
              if (n[e].until <= a && a <= n[e].since) return n[e].name
            }
            return ""
          }

          function Or() {
            var e, t, a, n = this.localeData().eras();
            for (e = 0, t = n.length; e < t; ++e) {
              if (a = this.startOf("day").valueOf(), n[e].since <= a && a <= n[e].until) return n[e].narrow;
              if (n[e].until <= a && a <= n[e].since) return n[e].narrow
            }
            return ""
          }

          function Ar() {
            var e, t, a, n = this.localeData().eras();
            for (e = 0, t = n.length; e < t; ++e) {
              if (a = this.startOf("day").valueOf(), n[e].since <= a && a <= n[e].until) return n[e].abbr;
              if (n[e].until <= a && a <= n[e].since) return n[e].abbr
            }
            return ""
          }

          function Cr() {
            var e, t, a, n, r = this.localeData().eras();
            for (e = 0, t = r.length; e < t; ++e)
              if (a = r[e].since <= r[e].until ? 1 : -1, n = this.startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since) return (this.year() - i(r[e].since).year()) * a + r[e].offset;
            return this.year()
          }

          function Fr(e) {
            return l(this, "_erasNameRegex") || Vr.call(this), e ? this._erasNameRegex : this._erasRegex
          }

          function Er(e) {
            return l(this, "_erasAbbrRegex") || Vr.call(this), e ? this._erasAbbrRegex : this._erasRegex
          }

          function Wr(e) {
            return l(this, "_erasNarrowRegex") || Vr.call(this), e ? this._erasNarrowRegex : this._erasRegex
          }

          function Ir(e, t) {
            return t.erasAbbrRegex(e)
          }

          function zr(e, t) {
            return t.erasNameRegex(e)
          }

          function Nr(e, t) {
            return t.erasNarrowRegex(e)
          }

          function Rr(e, t) {
            return t._eraYearOrdinalRegex || He
          }

          function Vr() {
            var e, t, a = [],
              n = [],
              r = [],
              i = [],
              s = this.eras();
            for (e = 0, t = s.length; e < t; ++e) n.push(Ie(s[e].name)), a.push(Ie(s[e].abbr)), r.push(Ie(s[e].narrow)), i.push(Ie(s[e].name)), i.push(Ie(s[e].abbr)), i.push(Ie(s[e].narrow));
            this._erasRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + r.join("|") + ")", "i")
          }

          function Br(e, t) {
            R(0, [e, e.length], 0, t)
          }

          function Jr(e) {
            return Qr.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
          }

          function Ur(e) {
            return Qr.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
          }

          function Gr() {
            return Dt(this.year(), 1, 4)
          }

          function qr() {
            return Dt(this.isoWeekYear(), 1, 4)
          }

          function $r() {
            var e = this.localeData()._week;
            return Dt(this.year(), e.dow, e.doy)
          }

          function Kr() {
            var e = this.localeData()._week;
            return Dt(this.weekYear(), e.dow, e.doy)
          }

          function Qr(e, t, a, n, r) {
            var i;
            return null == e ? Yt(this, n, r).year : (i = Dt(e, n, r), t > i && (t = i), Zr.call(this, e, t, a, n, r))
          }

          function Zr(e, t, a, n, r) {
            var i = kt(e, t, a, n, r),
              s = Lt(i.year, 0, i.dayOfYear);
            return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
          }

          function Xr(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
          }
          R("N", 0, 0, "eraAbbr"), R("NN", 0, 0, "eraAbbr"), R("NNN", 0, 0, "eraAbbr"), R("NNNN", 0, 0, "eraName"), R("NNNNN", 0, 0, "eraNarrow"), R("y", ["y", 1], "yo", "eraYear"), R("y", ["yy", 2], 0, "eraYear"), R("y", ["yyy", 3], 0, "eraYear"), R("y", ["yyyy", 4], 0, "eraYear"), Fe("N", Ir), Fe("NN", Ir), Fe("NNN", Ir), Fe("NNNN", zr), Fe("NNNNN", Nr), Ne(["N", "NN", "NNN", "NNNN", "NNNNN"], (function (e, t, a, n) {
            var r = a._locale.erasParse(e, n, a._strict);
            r ? M(a).era = r : M(a).invalidEra = e
          })), Fe("y", He), Fe("yy", He), Fe("yyy", He), Fe("yyyy", He), Fe("yo", Rr), Ne(["y", "yy", "yyy", "yyyy"], Je), Ne(["yo"], (function (e, t, a, n) {
            var r;
            a._locale._eraYearOrdinalRegex && (r = e.match(a._locale._eraYearOrdinalRegex)), a._locale.eraYearOrdinalParse ? t[Je] = a._locale.eraYearOrdinalParse(e, r) : t[Je] = parseInt(e, 10)
          })), R(0, ["gg", 2], 0, (function () {
            return this.weekYear() % 100
          })), R(0, ["GG", 2], 0, (function () {
            return this.isoWeekYear() % 100
          })), Br("gggg", "weekYear"), Br("ggggg", "weekYear"), Br("GGGG", "isoWeekYear"), Br("GGGGG", "isoWeekYear"), re("weekYear", "gg"), re("isoWeekYear", "GG"), de("weekYear", 1), de("isoWeekYear", 1), Fe("G", je), Fe("g", je), Fe("GG", Ye, ve), Fe("gg", Ye, ve), Fe("GGGG", Te, be), Fe("gggg", Te, be), Fe("GGGGG", Se, ke), Fe("ggggg", Se, ke), Re(["gggg", "ggggg", "GGGG", "GGGGG"], (function (e, t, a, n) {
            t[n.substr(0, 2)] = _e(e)
          })), Re(["gg", "GG"], (function (e, t, a, n) {
            t[n] = i.parseTwoDigitYear(e)
          })), R("Q", 0, "Qo", "quarter"), re("quarter", "Q"), de("quarter", 7), Fe("Q", ge), Ne("Q", (function (e, t) {
            t[Ue] = 3 * (_e(e) - 1)
          })), R("D", ["DD", 2], "Do", "date"), re("date", "D"), de("date", 9), Fe("D", Ye), Fe("DD", Ye, ve), Fe("Do", (function (e, t) {
            return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
          })), Ne(["D", "DD"], Ge), Ne("Do", (function (e, t) {
            t[Ge] = _e(e.match(Ye)[0])
          }));
          var ei = me("Date", !0);

          function ti(e) {
            var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d")
          }
          R("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), re("dayOfYear", "DDD"), de("dayOfYear", 4), Fe("DDD", xe), Fe("DDDD", Le), Ne(["DDD", "DDDD"], (function (e, t, a) {
            a._dayOfYear = _e(e)
          })), R("m", ["mm", 2], 0, "minute"), re("minute", "m"), de("minute", 14), Fe("m", Ye), Fe("mm", Ye, ve), Ne(["m", "mm"], $e);
          var ai = me("Minutes", !1);
          R("s", ["ss", 2], 0, "second"), re("second", "s"), de("second", 15), Fe("s", Ye), Fe("ss", Ye, ve), Ne(["s", "ss"], Ke);
          var ni, ri, ii = me("Seconds", !1);
          for (R("S", 0, 0, (function () {
              return ~~(this.millisecond() / 100)
            })), R(0, ["SS", 2], 0, (function () {
              return ~~(this.millisecond() / 10)
            })), R(0, ["SSS", 3], 0, "millisecond"), R(0, ["SSSS", 4], 0, (function () {
              return 10 * this.millisecond()
            })), R(0, ["SSSSS", 5], 0, (function () {
              return 100 * this.millisecond()
            })), R(0, ["SSSSSS", 6], 0, (function () {
              return 1e3 * this.millisecond()
            })), R(0, ["SSSSSSS", 7], 0, (function () {
              return 1e4 * this.millisecond()
            })), R(0, ["SSSSSSSS", 8], 0, (function () {
              return 1e5 * this.millisecond()
            })), R(0, ["SSSSSSSSS", 9], 0, (function () {
              return 1e6 * this.millisecond()
            })), re("millisecond", "ms"), de("millisecond", 16), Fe("S", xe, ge), Fe("SS", xe, ve), Fe("SSS", xe, Le), ni = "SSSS"; ni.length <= 9; ni += "S") Fe(ni, He);

          function si(e, t) {
            t[Qe] = _e(1e3 * ("0." + e))
          }
          for (ni = "S"; ni.length <= 9; ni += "S") Ne(ni, si);

          function oi() {
            return this._isUTC ? "UTC" : ""
          }

          function di() {
            return this._isUTC ? "Coordinated Universal Time" : ""
          }
          ri = me("Milliseconds", !1), R("z", 0, 0, "zoneAbbr"), R("zz", 0, 0, "zoneName");
          var li = Y.prototype;

          function ui(e) {
            return $a(1e3 * e)
          }

          function ci() {
            return $a.apply(null, arguments).parseZone()
          }

          function _i(e) {
            return e
          }
          li.add = Cn, li.calendar = Vn, li.clone = Bn, li.diff = Qn, li.endOf = Mr, li.format = ar, li.from = nr, li.fromNow = rr, li.to = ir, li.toNow = sr, li.get = pe, li.invalidAt = xr, li.isAfter = Jn, li.isBefore = Un, li.isBetween = Gn, li.isSame = qn, li.isSameOrAfter = $n, li.isSameOrBefore = Kn, li.isValid = Dr, li.lang = dr, li.locale = or, li.localeData = lr, li.max = Qa, li.min = Ka, li.parsingFlags = wr, li.set = ye, li.startOf = yr, li.subtract = Fn, li.toArray = br, li.toObject = kr, li.toDate = Lr, li.toISOString = er, li.inspect = tr, "undefined" !== typeof Symbol && null != Symbol.for && (li[Symbol.for("nodejs.util.inspect.custom")] = function () {
            return "Moment<" + this.format() + ">"
          }), li.toJSON = Yr, li.toString = Xn, li.unix = vr, li.valueOf = gr, li.creationData = Tr, li.eraName = Pr, li.eraNarrow = Or, li.eraAbbr = Ar, li.eraYear = Cr, li.year = Mt, li.isLeapYear = gt, li.weekYear = Jr, li.isoWeekYear = Ur, li.quarter = li.quarters = Xr, li.month = _t, li.daysInMonth = mt, li.week = li.weeks = Ht, li.isoWeek = li.isoWeeks = jt, li.weeksInYear = $r, li.weeksInWeekYear = Kr, li.isoWeeksInYear = Gr, li.isoWeeksInISOWeekYear = qr, li.date = ei, li.day = li.days = Ut, li.weekday = Gt, li.isoWeekday = qt, li.dayOfYear = ti, li.hour = li.hours = ia, li.minute = li.minutes = ai, li.second = li.seconds = ii, li.millisecond = li.milliseconds = ri, li.utcOffset = pn, li.utc = Mn, li.local = gn, li.parseZone = vn, li.hasAlignedHourOffset = Ln, li.isDST = bn, li.isLocal = Yn, li.isUtcOffset = Dn, li.isUtc = wn, li.isUTC = wn, li.zoneAbbr = oi, li.zoneName = di, li.dates = x("dates accessor is deprecated. Use date instead.", ei), li.months = x("months accessor is deprecated. Use month instead", _t), li.years = x("years accessor is deprecated. Use year instead", Mt), li.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", yn), li.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", kn);
          var mi = A.prototype;

          function hi(e, t, a, n) {
            var r = Ma(),
              i = p().set(n, t);
            return r[a](i, e)
          }

          function fi(e, t, a) {
            if (_(e) && (t = e, e = void 0), e = e || "", null != t) return hi(e, t, a, "month");
            var n, r = [];
            for (n = 0; n < 12; n++) r[n] = hi(e, n, a, "month");
            return r
          }

          function pi(e, t, a, n) {
            "boolean" === typeof e ? (_(t) && (a = t, t = void 0), t = t || "") : (t = e, a = t, e = !1, _(t) && (a = t, t = void 0), t = t || "");
            var r, i = Ma(),
              s = e ? i._week.dow : 0,
              o = [];
            if (null != a) return hi(t, (a + s) % 7, n, "day");
            for (r = 0; r < 7; r++) o[r] = hi(t, (r + s) % 7, n, "day");
            return o
          }

          function yi(e, t) {
            return fi(e, t, "months")
          }

          function Mi(e, t) {
            return fi(e, t, "monthsShort")
          }

          function gi(e, t, a) {
            return pi(e, t, a, "weekdays")
          }

          function vi(e, t, a) {
            return pi(e, t, a, "weekdaysShort")
          }

          function Li(e, t, a) {
            return pi(e, t, a, "weekdaysMin")
          }
          mi.calendar = F, mi.longDateFormat = q, mi.invalidDate = K, mi.ordinal = X, mi.preparse = _i, mi.postformat = _i, mi.relativeTime = te, mi.pastFuture = ae, mi.set = P, mi.eras = Sr, mi.erasParse = Hr, mi.erasConvertYear = jr, mi.erasAbbrRegex = Er, mi.erasNameRegex = Fr, mi.erasNarrowRegex = Wr, mi.months = ot, mi.monthsShort = dt, mi.monthsParse = ut, mi.monthsRegex = ft, mi.monthsShortRegex = ht, mi.week = wt, mi.firstDayOfYear = St, mi.firstDayOfWeek = Tt, mi.weekdays = Nt, mi.weekdaysMin = Vt, mi.weekdaysShort = Rt, mi.weekdaysParse = Jt, mi.weekdaysRegex = $t, mi.weekdaysShortRegex = Kt, mi.weekdaysMinRegex = Qt, mi.isPM = na, mi.meridiem = sa, fa("en", {
            eras: [{
              since: "0001-01-01",
              until: 1 / 0,
              offset: 1,
              name: "Anno Domini",
              narrow: "AD",
              abbr: "AD"
            }, {
              since: "0000-12-31",
              until: -1 / 0,
              offset: 1,
              name: "Before Christ",
              narrow: "BC",
              abbr: "BC"
            }],
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
              var t = e % 10,
                a = 1 === _e(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
              return e + a
            }
          }), i.lang = x("moment.lang is deprecated. Use moment.locale instead.", fa), i.langData = x("moment.langData is deprecated. Use moment.localeData instead.", Ma);
          var bi = Math.abs;

          function ki() {
            var e = this._data;
            return this._milliseconds = bi(this._milliseconds), this._days = bi(this._days), this._months = bi(this._months), e.milliseconds = bi(e.milliseconds), e.seconds = bi(e.seconds), e.minutes = bi(e.minutes), e.hours = bi(e.hours), e.months = bi(e.months), e.years = bi(e.years), this
          }

          function Yi(e, t, a, n) {
            var r = Sn(t, a);
            return e._milliseconds += n * r._milliseconds, e._days += n * r._days, e._months += n * r._months, e._bubble()
          }

          function Di(e, t) {
            return Yi(this, e, t, 1)
          }

          function wi(e, t) {
            return Yi(this, e, t, -1)
          }

          function xi(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e)
          }

          function Ti() {
            var e, t, a, n, r, i = this._milliseconds,
              s = this._days,
              o = this._months,
              d = this._data;
            return i >= 0 && s >= 0 && o >= 0 || i <= 0 && s <= 0 && o <= 0 || (i += 864e5 * xi(Hi(o) + s), s = 0, o = 0), d.milliseconds = i % 1e3, e = ce(i / 1e3), d.seconds = e % 60, t = ce(e / 60), d.minutes = t % 60, a = ce(t / 60), d.hours = a % 24, s += ce(a / 24), r = ce(Si(s)), o += r, s -= xi(Hi(r)), n = ce(o / 12), o %= 12, d.days = s, d.months = o, d.years = n, this
          }

          function Si(e) {
            return 4800 * e / 146097
          }

          function Hi(e) {
            return 146097 * e / 4800
          }

          function ji(e) {
            if (!this.isValid()) return NaN;
            var t, a, n = this._milliseconds;
            if (e = ie(e), "month" === e || "quarter" === e || "year" === e) switch (t = this._days + n / 864e5, a = this._months + Si(t), e) {
              case "month":
                return a;
              case "quarter":
                return a / 3;
              case "year":
                return a / 12
            } else switch (t = this._days + Math.round(Hi(this._months)), e) {
              case "week":
                return t / 7 + n / 6048e5;
              case "day":
                return t + n / 864e5;
              case "hour":
                return 24 * t + n / 36e5;
              case "minute":
                return 1440 * t + n / 6e4;
              case "second":
                return 86400 * t + n / 1e3;
              case "millisecond":
                return Math.floor(864e5 * t) + n;
              default:
                throw new Error("Unknown unit " + e)
            }
          }

          function Pi() {
            return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * _e(this._months / 12) : NaN
          }

          function Oi(e) {
            return function () {
              return this.as(e)
            }
          }
          var Ai = Oi("ms"),
            Ci = Oi("s"),
            Fi = Oi("m"),
            Ei = Oi("h"),
            Wi = Oi("d"),
            Ii = Oi("w"),
            zi = Oi("M"),
            Ni = Oi("Q"),
            Ri = Oi("y");

          function Vi() {
            return Sn(this)
          }

          function Bi(e) {
            return e = ie(e), this.isValid() ? this[e + "s"]() : NaN
          }

          function Ji(e) {
            return function () {
              return this.isValid() ? this._data[e] : NaN
            }
          }
          var Ui = Ji("milliseconds"),
            Gi = Ji("seconds"),
            qi = Ji("minutes"),
            $i = Ji("hours"),
            Ki = Ji("days"),
            Qi = Ji("months"),
            Zi = Ji("years");

          function Xi() {
            return ce(this.days() / 7)
          }
          var es = Math.round,
            ts = {
              ss: 44,
              s: 45,
              m: 45,
              h: 22,
              d: 26,
              w: null,
              M: 11
            };

          function as(e, t, a, n, r) {
            return r.relativeTime(t || 1, !!a, e, n)
          }

          function ns(e, t, a, n) {
            var r = Sn(e).abs(),
              i = es(r.as("s")),
              s = es(r.as("m")),
              o = es(r.as("h")),
              d = es(r.as("d")),
              l = es(r.as("M")),
              u = es(r.as("w")),
              c = es(r.as("y")),
              _ = i <= a.ss && ["s", i] || i < a.s && ["ss", i] || s <= 1 && ["m"] || s < a.m && ["mm", s] || o <= 1 && ["h"] || o < a.h && ["hh", o] || d <= 1 && ["d"] || d < a.d && ["dd", d];
            return null != a.w && (_ = _ || u <= 1 && ["w"] || u < a.w && ["ww", u]), _ = _ || l <= 1 && ["M"] || l < a.M && ["MM", l] || c <= 1 && ["y"] || ["yy", c], _[2] = t, _[3] = +e > 0, _[4] = n, as.apply(null, _)
          }

          function rs(e) {
            return void 0 === e ? es : "function" === typeof e && (es = e, !0)
          }

          function is(e, t) {
            return void 0 !== ts[e] && (void 0 === t ? ts[e] : (ts[e] = t, "s" === e && (ts.ss = t - 1), !0))
          }

          function ss(e, t) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var a, n, r = !1,
              i = ts;
            return "object" === typeof e && (t = e, e = !1), "boolean" === typeof e && (r = e), "object" === typeof t && (i = Object.assign({}, ts, t), null != t.s && null == t.ss && (i.ss = t.s - 1)), a = this.localeData(), n = ns(this, !r, i, a), r && (n = a.pastFuture(+this, n)), a.postformat(n)
          }
          var os = Math.abs;

          function ds(e) {
            return (e > 0) - (e < 0) || +e
          }

          function ls() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e, t, a, n, r, i, s, o, d = os(this._milliseconds) / 1e3,
              l = os(this._days),
              u = os(this._months),
              c = this.asSeconds();
            return c ? (e = ce(d / 60), t = ce(e / 60), d %= 60, e %= 60, a = ce(u / 12), u %= 12, n = d ? d.toFixed(3).replace(/\.?0+$/, "") : "", r = c < 0 ? "-" : "", i = ds(this._months) !== ds(c) ? "-" : "", s = ds(this._days) !== ds(c) ? "-" : "", o = ds(this._milliseconds) !== ds(c) ? "-" : "", r + "P" + (a ? i + a + "Y" : "") + (u ? i + u + "M" : "") + (l ? s + l + "D" : "") + (t || e || d ? "T" : "") + (t ? o + t + "H" : "") + (e ? o + e + "M" : "") + (d ? o + n + "S" : "")) : "P0D"
          }
          var us = on.prototype;
          return us.isValid = rn, us.abs = ki, us.add = Di, us.subtract = wi, us.as = ji, us.asMilliseconds = Ai, us.asSeconds = Ci, us.asMinutes = Fi, us.asHours = Ei, us.asDays = Wi, us.asWeeks = Ii, us.asMonths = zi, us.asQuarters = Ni, us.asYears = Ri, us.valueOf = Pi, us._bubble = Ti, us.clone = Vi, us.get = Bi, us.milliseconds = Ui, us.seconds = Gi, us.minutes = qi, us.hours = $i, us.days = Ki, us.weeks = Xi, us.months = Qi, us.years = Zi, us.humanize = ss, us.toISOString = ls, us.toString = ls, us.toJSON = ls, us.locale = or, us.localeData = lr, us.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ls), us.lang = dr, R("X", 0, 0, "unix"), R("x", 0, 0, "valueOf"), Fe("x", je), Fe("X", Ae), Ne("X", (function (e, t, a) {
              a._d = new Date(1e3 * parseFloat(e))
            })), Ne("x", (function (e, t, a) {
              a._d = new Date(_e(e))
            })),
            //! moment.js
            i.version = "2.27.0", s($a), i.fn = li, i.min = Xa, i.max = en, i.now = tn, i.utc = p, i.unix = ui, i.months = yi, i.isDate = m, i.locale = fa, i.invalid = v, i.duration = Sn, i.isMoment = D, i.weekdays = gi, i.parseZone = ci, i.localeData = Ma, i.isDuration = dn, i.monthsShort = Mi, i.weekdaysMin = Li, i.defineLocale = pa, i.updateLocale = ya, i.locales = ga, i.weekdaysShort = vi, i.normalizeUnits = ie, i.relativeTimeRounding = rs, i.relativeTimeThreshold = is, i.calendarFormat = Rn, i.prototype = li, i.HTML5_FMT = {
              DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
              DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
              DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
              DATE: "YYYY-MM-DD",
              TIME: "HH:mm",
              TIME_SECONDS: "HH:mm:ss",
              TIME_MS: "HH:mm:ss.SSS",
              WEEK: "GGGG-[W]WW",
              MONTH: "YYYY-MM"
            }, i
        }))
      }).call(this, a("62e4")(e))
    },
    c7aa: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("he", {
          months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
          monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
          weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
          weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
          weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [ב]MMMM YYYY",
            LLL: "D [ב]MMMM YYYY HH:mm",
            LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
            l: "D/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[היום ב־]LT",
            nextDay: "[מחר ב־]LT",
            nextWeek: "dddd [בשעה] LT",
            lastDay: "[אתמול ב־]LT",
            lastWeek: "[ביום] dddd [האחרון בשעה] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "בעוד %s",
            past: "לפני %s",
            s: "מספר שניות",
            ss: "%d שניות",
            m: "דקה",
            mm: "%d דקות",
            h: "שעה",
            hh: function (e) {
              return 2 === e ? "שעתיים" : e + " שעות"
            },
            d: "יום",
            dd: function (e) {
              return 2 === e ? "יומיים" : e + " ימים"
            },
            M: "חודש",
            MM: function (e) {
              return 2 === e ? "חודשיים" : e + " חודשים"
            },
            y: "שנה",
            yy: function (e) {
              return 2 === e ? "שנתיים" : e % 10 === 0 && 10 !== e ? e + " שנה" : e + " שנים"
            }
          },
          meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
          isPM: function (e) {
            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
          },
          meridiem: function (e, t, a) {
            return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? a ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? a ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
          }
        });
        return t
      }))
    },
    c8f3: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("sq", {
          months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
          monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
          weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
          weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
          weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
          weekdaysParseExact: !0,
          meridiemParse: /PD|MD/,
          isPM: function (e) {
            return "M" === e.charAt(0)
          },
          meridiem: function (e, t, a) {
            return e < 12 ? "PD" : "MD"
          },
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Sot në] LT",
            nextDay: "[Nesër në] LT",
            nextWeek: "dddd [në] LT",
            lastDay: "[Dje në] LT",
            lastWeek: "dddd [e kaluar në] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "në %s",
            past: "%s më parë",
            s: "disa sekonda",
            ss: "%d sekonda",
            m: "një minutë",
            mm: "%d minuta",
            h: "një orë",
            hh: "%d orë",
            d: "një ditë",
            dd: "%d ditë",
            M: "një muaj",
            MM: "%d muaj",
            y: "një vit",
            yy: "%d vite"
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    caad: function (e, t, a) {
      "use strict";
      var n = a("23e7"),
        r = a("4d64").includes,
        i = a("44d2"),
        s = a("ae40"),
        o = s("indexOf", {
          ACCESSORS: !0,
          1: 0
        });
      n({
        target: "Array",
        proto: !0,
        forced: !o
      }, {
        includes: function (e) {
          return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
      }), i("includes")
    },
    cb29: function (e, t, a) {
      var n = a("23e7"),
        r = a("81d5"),
        i = a("44d2");
      n({
        target: "Array",
        proto: !0
      }, {
        fill: r
      }), i("fill")
    },
    cf1e: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            words: {
              ss: ["sekunda", "sekunde", "sekundi"],
              m: ["jedan minut", "jedne minute"],
              mm: ["minut", "minute", "minuta"],
              h: ["jedan sat", "jednog sata"],
              hh: ["sat", "sata", "sati"],
              dd: ["dan", "dana", "dana"],
              MM: ["mesec", "meseca", "meseci"],
              yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function (e, t) {
              return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function (e, a, n) {
              var r = t.words[n];
              return 1 === n.length ? a ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
            }
          },
          a = e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
              sameDay: "[danas u] LT",
              nextDay: "[sutra u] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedelju] [u] LT";
                  case 3:
                    return "[u] [sredu] [u] LT";
                  case 6:
                    return "[u] [subotu] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT"
                }
              },
              lastDay: "[juče u] LT",
              lastWeek: function () {
                var e = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                return e[this.day()]
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "za %s",
              past: "pre %s",
              s: "nekoliko sekundi",
              ss: t.translate,
              m: t.translate,
              mm: t.translate,
              h: t.translate,
              hh: t.translate,
              d: "dan",
              dd: t.translate,
              M: "mesec",
              MM: t.translate,
              y: "godinu",
              yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
              dow: 1,
              doy: 7
            }
          });
        return a
      }))
    },
    cf51: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("tzl", {
          months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
          monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
          weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
          weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
          weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM [dallas] YYYY",
            LLL: "D. MMMM [dallas] YYYY HH.mm",
            LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
          },
          meridiemParse: /d\'o|d\'a/i,
          isPM: function (e) {
            return "d'o" === e.toLowerCase()
          },
          meridiem: function (e, t, a) {
            return e > 11 ? a ? "d'o" : "D'O" : a ? "d'a" : "D'A"
          },
          calendar: {
            sameDay: "[oxhi à] LT",
            nextDay: "[demà à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[ieiri à] LT",
            lastWeek: "[sür el] dddd [lasteu à] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "osprei %s",
            past: "ja%s",
            s: a,
            ss: a,
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: a,
            dd: a,
            M: a,
            MM: a,
            y: a,
            yy: a
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        });

        function a(e, t, a, n) {
          var r = {
            s: ["viensas secunds", "'iensas secunds"],
            ss: [e + " secunds", e + " secunds"],
            m: ["'n míut", "'iens míut"],
            mm: [e + " míuts", e + " míuts"],
            h: ["'n þora", "'iensa þora"],
            hh: [e + " þoras", e + " þoras"],
            d: ["'n ziua", "'iensa ziua"],
            dd: [e + " ziuas", e + " ziuas"],
            M: ["'n mes", "'iens mes"],
            MM: [e + " mesen", e + " mesen"],
            y: ["'n ar", "'iens ar"],
            yy: [e + " ars", e + " ars"]
          };
          return n || t ? r[a][0] : r[a][1]
        }
        return t
      }))
    },
    cf755: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

        function a(e) {
          var t = e;
          return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq", t
        }

        function n(e) {
          var t = e;
          return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret", t
        }

        function r(e, t, a, n) {
          var r = i(e);
          switch (a) {
            case "ss":
              return r + " lup";
            case "mm":
              return r + " tup";
            case "hh":
              return r + " rep";
            case "dd":
              return r + " jaj";
            case "MM":
              return r + " jar";
            case "yy":
              return r + " DIS"
          }
        }

        function i(e) {
          var a = Math.floor(e % 1e3 / 100),
            n = Math.floor(e % 100 / 10),
            r = e % 10,
            i = "";
          return a > 0 && (i += t[a] + "vatlh"), n > 0 && (i += ("" !== i ? " " : "") + t[n] + "maH"), r > 0 && (i += ("" !== i ? " " : "") + t[r]), "" === i ? "pagh" : i
        }
        var s = e.defineLocale("tlh", {
          months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
          monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
          monthsParseExact: !0,
          weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
          weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
          weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[DaHjaj] LT",
            nextDay: "[wa’leS] LT",
            nextWeek: "LLL",
            lastDay: "[wa’Hu’] LT",
            lastWeek: "LLL",
            sameElse: "L"
          },
          relativeTime: {
            future: a,
            past: n,
            s: "puS lup",
            ss: r,
            m: "wa’ tup",
            mm: r,
            h: "wa’ rep",
            hh: r,
            d: "wa’ jaj",
            dd: r,
            M: "wa’ jar",
            MM: r,
            y: "wa’ DIS",
            yy: r
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return s
      }))
    },
    d26a: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "༡",
            2: "༢",
            3: "༣",
            4: "༤",
            5: "༥",
            6: "༦",
            7: "༧",
            8: "༨",
            9: "༩",
            0: "༠"
          },
          a = {
            "༡": "1",
            "༢": "2",
            "༣": "3",
            "༤": "4",
            "༥": "5",
            "༦": "6",
            "༧": "7",
            "༨": "8",
            "༩": "9",
            "༠": "0"
          },
          n = e.defineLocale("bo", {
            months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            monthsShort: "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split("_"),
            monthsShortRegex: /^(ཟླ་\d{1,2})/,
            monthsParseExact: !0,
            weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
            weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),
            longDateFormat: {
              LT: "A h:mm",
              LTS: "A h:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm",
              LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
              sameDay: "[དི་རིང] LT",
              nextDay: "[སང་ཉིན] LT",
              nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
              lastDay: "[ཁ་སང] LT",
              lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s ལ་",
              past: "%s སྔན་ལ",
              s: "ལམ་སང",
              ss: "%d སྐར་ཆ།",
              m: "སྐར་མ་གཅིག",
              mm: "%d སྐར་མ",
              h: "ཆུ་ཚོད་གཅིག",
              hh: "%d ཆུ་ཚོད",
              d: "ཉིན་གཅིག",
              dd: "%d ཉིན་",
              M: "ཟླ་བ་གཅིག",
              MM: "%d ཟླ་བ",
              y: "ལོ་གཅིག",
              yy: "%d ལོ"
            },
            preparse: function (e) {
              return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, (function (e) {
                return a[e]
              }))
            },
            postformat: function (e) {
              return e.replace(/\d/g, (function (e) {
                return t[e]
              }))
            },
            meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
            meridiemHour: function (e, t) {
              return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
            },
            meridiem: function (e, t, a) {
              return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
            },
            week: {
              dow: 0,
              doy: 6
            }
          });
        return n
      }))
    },
    d2d4: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("pt-br", {
          months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
          monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
          weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
          weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
          weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
          },
          calendar: {
            sameDay: "[Hoje às] LT",
            nextDay: "[Amanhã às] LT",
            nextWeek: "dddd [às] LT",
            lastDay: "[Ontem às] LT",
            lastWeek: function () {
              return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "em %s",
            past: "há %s",
            s: "poucos segundos",
            ss: "%d segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº"
        });
        return t
      }))
    },
    d58f: function (e, t, a) {
      var n = a("1c0b"),
        r = a("7b0b"),
        i = a("44ad"),
        s = a("50c4"),
        o = function (e) {
          return function (t, a, o, d) {
            n(a);
            var l = r(t),
              u = i(l),
              c = s(l.length),
              _ = e ? c - 1 : 0,
              m = e ? -1 : 1;
            if (o < 2)
              while (1) {
                if (_ in u) {
                  d = u[_], _ += m;
                  break
                }
                if (_ += m, e ? _ < 0 : c <= _) throw TypeError("Reduce of empty array with no initial value")
              }
            for (; e ? _ >= 0 : c > _; _ += m) _ in u && (d = a(d, u[_], _, l));
            return d
          }
        };
      e.exports = {
        left: o(!1),
        right: o(!0)
      }
    },
    d69a: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("fil", {
          months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
          monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
          weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
          weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
          weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "MM/D/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY HH:mm",
            LLLL: "dddd, MMMM DD, YYYY HH:mm"
          },
          calendar: {
            sameDay: "LT [ngayong araw]",
            nextDay: "[Bukas ng] LT",
            nextWeek: "LT [sa susunod na] dddd",
            lastDay: "LT [kahapon]",
            lastWeek: "LT [noong nakaraang] dddd",
            sameElse: "L"
          },
          relativeTime: {
            future: "sa loob ng %s",
            past: "%s ang nakalipas",
            s: "ilang segundo",
            ss: "%d segundo",
            m: "isang minuto",
            mm: "%d minuto",
            h: "isang oras",
            hh: "%d oras",
            d: "isang araw",
            dd: "%d araw",
            M: "isang buwan",
            MM: "%d buwan",
            y: "isang taon",
            yy: "%d taon"
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: function (e) {
            return e
          },
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    d6b6: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("hy-am", {
          months: {
            format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
            standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
          },
          monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
          weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
          weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
          weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY թ.",
            LLL: "D MMMM YYYY թ., HH:mm",
            LLLL: "dddd, D MMMM YYYY թ., HH:mm"
          },
          calendar: {
            sameDay: "[այսօր] LT",
            nextDay: "[վաղը] LT",
            lastDay: "[երեկ] LT",
            nextWeek: function () {
              return "dddd [օրը ժամը] LT"
            },
            lastWeek: function () {
              return "[անցած] dddd [օրը ժամը] LT"
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "%s հետո",
            past: "%s առաջ",
            s: "մի քանի վայրկյան",
            ss: "%d վայրկյան",
            m: "րոպե",
            mm: "%d րոպե",
            h: "ժամ",
            hh: "%d ժամ",
            d: "օր",
            dd: "%d օր",
            M: "ամիս",
            MM: "%d ամիս",
            y: "տարի",
            yy: "%d տարի"
          },
          meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
          isPM: function (e) {
            return /^(ցերեկվա|երեկոյան)$/.test(e)
          },
          meridiem: function (e) {
            return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
          },
          dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
          ordinal: function (e, t) {
            switch (t) {
              case "DDD":
              case "w":
              case "W":
              case "DDDo":
                return 1 === e ? e + "-ին" : e + "-րդ";
              default:
                return e
            }
          },
          week: {
            dow: 1,
            doy: 7
          }
        });
        return t
      }))
    },
    d716: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("ca", {
          months: {
            standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
            format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
            isFormat: /D[oD]?(\s)+MMMM/
          },
          monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
          monthsParseExact: !0,
          weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
          weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
          weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [de] YYYY",
            ll: "D MMM YYYY",
            LLL: "D MMMM [de] YYYY [a les] H:mm",
            lll: "D MMM YYYY, H:mm",
            LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
            llll: "ddd D MMM YYYY, H:mm"
          },
          calendar: {
            sameDay: function () {
              return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            nextDay: function () {
              return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            nextWeek: function () {
              return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            lastDay: function () {
              return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            lastWeek: function () {
              return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "d'aquí %s",
            past: "fa %s",
            s: "uns segons",
            ss: "%d segons",
            m: "un minut",
            mm: "%d minuts",
            h: "una hora",
            hh: "%d hores",
            d: "un dia",
            dd: "%d dies",
            M: "un mes",
            MM: "%d mesos",
            y: "un any",
            yy: "%d anys"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
          ordinal: function (e, t) {
            var a = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
            return "w" !== t && "W" !== t || (a = "a"), e + a
          },
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    d784: function (e, t, a) {
      "use strict";
      a("ac1f");
      var n = a("6eeb"),
        r = a("d039"),
        i = a("b622"),
        s = a("9263"),
        o = a("9112"),
        d = i("species"),
        l = !r((function () {
          var e = /./;
          return e.exec = function () {
            var e = [];
            return e.groups = {
              a: "7"
            }, e
          }, "7" !== "".replace(e, "$<a>")
        })),
        u = function () {
          return "$0" === "a".replace(/./, "$0")
        }(),
        c = i("replace"),
        _ = function () {
          return !!/./ [c] && "" === /./ [c]("a", "$0")
        }(),
        m = !r((function () {
          var e = /(?:)/,
            t = e.exec;
          e.exec = function () {
            return t.apply(this, arguments)
          };
          var a = "ab".split(e);
          return 2 !== a.length || "a" !== a[0] || "b" !== a[1]
        }));
      e.exports = function (e, t, a, c) {
        var h = i(e),
          f = !r((function () {
            var t = {};
            return t[h] = function () {
              return 7
            }, 7 != "" [e](t)
          })),
          p = f && !r((function () {
            var t = !1,
              a = /a/;
            return "split" === e && (a = {}, a.constructor = {}, a.constructor[d] = function () {
              return a
            }, a.flags = "", a[h] = /./ [h]), a.exec = function () {
              return t = !0, null
            }, a[h](""), !t
          }));
        if (!f || !p || "replace" === e && (!l || !u || _) || "split" === e && !m) {
          var y = /./ [h],
            M = a(h, "" [e], (function (e, t, a, n, r) {
              return t.exec === s ? f && !r ? {
                done: !0,
                value: y.call(t, a, n)
              } : {
                done: !0,
                value: e.call(a, t, n)
              } : {
                done: !1
              }
            }), {
              REPLACE_KEEPS_$0: u,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: _
            }),
            g = M[0],
            v = M[1];
          n(String.prototype, e, g), n(RegExp.prototype, h, 2 == t ? function (e, t) {
            return v.call(e, this, t)
          } : function (e) {
            return v.call(e, this)
          })
        }
        c && o(RegExp.prototype[h], "sham", !0)
      }
    },
    d9f8: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("fr-ca", {
          months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
          monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
          monthsParseExact: !0,
          weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
          weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Aujourd’hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
          ordinal: function (e, t) {
            switch (t) {
              default:
              case "M":
              case "Q":
              case "D":
              case "DDD":
              case "d":
                return e + (1 === e ? "er" : "e");
              case "w":
              case "W":
                return e + (1 === e ? "re" : "e")
            }
          }
        });
        return t
      }))
    },
    db29: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
          a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
          n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
          r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
          i = e.defineLocale("nl-be", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (e, n) {
              return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[vandaag om] LT",
              nextDay: "[morgen om] LT",
              nextWeek: "dddd [om] LT",
              lastDay: "[gisteren om] LT",
              lastWeek: "[afgelopen] dddd [om] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "over %s",
              past: "%s geleden",
              s: "een paar seconden",
              ss: "%d seconden",
              m: "één minuut",
              mm: "%d minuten",
              h: "één uur",
              hh: "%d uur",
              d: "één dag",
              dd: "%d dagen",
              M: "één maand",
              MM: "%d maanden",
              y: "één jaar",
              yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
              return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
              dow: 1,
              doy: 4
            }
          });
        return i
      }))
    },
    dc4d: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
          },
          a = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
          },
          n = e.defineLocale("hi", {
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
              LT: "A h:mm बजे",
              LTS: "A h:mm:ss बजे",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm बजे",
              LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            calendar: {
              sameDay: "[आज] LT",
              nextDay: "[कल] LT",
              nextWeek: "dddd, LT",
              lastDay: "[कल] LT",
              lastWeek: "[पिछले] dddd, LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s में",
              past: "%s पहले",
              s: "कुछ ही क्षण",
              ss: "%d सेकंड",
              m: "एक मिनट",
              mm: "%d मिनट",
              h: "एक घंटा",
              hh: "%d घंटे",
              d: "एक दिन",
              dd: "%d दिन",
              M: "एक महीने",
              MM: "%d महीने",
              y: "एक वर्ष",
              yy: "%d वर्ष"
            },
            preparse: function (e) {
              return e.replace(/[१२३४५६७८९०]/g, (function (e) {
                return a[e]
              }))
            },
            postformat: function (e) {
              return e.replace(/\d/g, (function (e) {
                return t[e]
              }))
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function (e, t) {
              return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, a) {
              return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
            },
            week: {
              dow: 0,
              doy: 6
            }
          });
        return n
      }))
    },
    e0c5: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "૧",
            2: "૨",
            3: "૩",
            4: "૪",
            5: "૫",
            6: "૬",
            7: "૭",
            8: "૮",
            9: "૯",
            0: "૦"
          },
          a = {
            "૧": "1",
            "૨": "2",
            "૩": "3",
            "૪": "4",
            "૫": "5",
            "૬": "6",
            "૭": "7",
            "૮": "8",
            "૯": "9",
            "૦": "0"
          },
          n = e.defineLocale("gu", {
            months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
            monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
            monthsParseExact: !0,
            weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
            weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
            weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
            longDateFormat: {
              LT: "A h:mm વાગ્યે",
              LTS: "A h:mm:ss વાગ્યે",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm વાગ્યે",
              LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
            },
            calendar: {
              sameDay: "[આજ] LT",
              nextDay: "[કાલે] LT",
              nextWeek: "dddd, LT",
              lastDay: "[ગઇકાલે] LT",
              lastWeek: "[પાછલા] dddd, LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s મા",
              past: "%s પહેલા",
              s: "અમુક પળો",
              ss: "%d સેકંડ",
              m: "એક મિનિટ",
              mm: "%d મિનિટ",
              h: "એક કલાક",
              hh: "%d કલાક",
              d: "એક દિવસ",
              dd: "%d દિવસ",
              M: "એક મહિનો",
              MM: "%d મહિનો",
              y: "એક વર્ષ",
              yy: "%d વર્ષ"
            },
            preparse: function (e) {
              return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, (function (e) {
                return a[e]
              }))
            },
            postformat: function (e) {
              return e.replace(/\d/g, (function (e) {
                return t[e]
              }))
            },
            meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
            meridiemHour: function (e, t) {
              return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, a) {
              return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
            },
            week: {
              dow: 0,
              doy: 6
            }
          });
        return n
      }))
    },
    e1d3: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("en-ie", {
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (e) {
            var t = e % 10,
              a = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + a
          },
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    e81d: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "១",
            2: "២",
            3: "៣",
            4: "៤",
            5: "៥",
            6: "៦",
            7: "៧",
            8: "៨",
            9: "៩",
            0: "០"
          },
          a = {
            "១": "1",
            "២": "2",
            "៣": "3",
            "៤": "4",
            "៥": "5",
            "៦": "6",
            "៧": "7",
            "៨": "8",
            "៩": "9",
            "០": "0"
          },
          n = e.defineLocale("km", {
            months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /ព្រឹក|ល្ងាច/,
            isPM: function (e) {
              return "ល្ងាច" === e
            },
            meridiem: function (e, t, a) {
              return e < 12 ? "ព្រឹក" : "ល្ងាច"
            },
            calendar: {
              sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
              nextDay: "[ស្អែក ម៉ោង] LT",
              nextWeek: "dddd [ម៉ោង] LT",
              lastDay: "[ម្សិលមិញ ម៉ោង] LT",
              lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%sទៀត",
              past: "%sមុន",
              s: "ប៉ុន្មានវិនាទី",
              ss: "%d វិនាទី",
              m: "មួយនាទី",
              mm: "%d នាទី",
              h: "មួយម៉ោង",
              hh: "%d ម៉ោង",
              d: "មួយថ្ងៃ",
              dd: "%d ថ្ងៃ",
              M: "មួយខែ",
              MM: "%d ខែ",
              y: "មួយឆ្នាំ",
              yy: "%d ឆ្នាំ"
            },
            dayOfMonthOrdinalParse: /ទី\d{1,2}/,
            ordinal: "ទី%d",
            preparse: function (e) {
              return e.replace(/[១២៣៤៥៦៧៨៩០]/g, (function (e) {
                return a[e]
              }))
            },
            postformat: function (e) {
              return e.replace(/\d/g, (function (e) {
                return t[e]
              }))
            },
            week: {
              dow: 1,
              doy: 4
            }
          });
        return n
      }))
    },
    e88b: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "market"
          }, [a("b-container", [e.dataLoaded ? e._e() : a("div", {
            staticClass: "text-center text-danger my-2 mt-5"
          }, [a("b-spinner", {
            staticClass: "align-middle"
          }), e._v(" Loading... ")], 1), a("b-row", {
            staticClass: "text-center"
          }, [e.dataLoaded ? a("b-col", {
            staticClass: "mt-2",
            attrs: {
              lg: "3"
            }
          }, [a("h5", [e._v("Market")]), a("MarketSearch", {
            attrs: {
              options: e.supportedTokens
            },
            model: {
              value: e.activeToken,
              callback: function (t) {
                e.activeToken = t
              },
              expression: "activeToken"
            }
          })], 1) : e._e(), e.dataLoaded ? a("b-col", {
            attrs: {
              lg: "9"
            }
          }, [a("b-row", [a("b-col", {
            staticClass: "mt-2"
          }, [a("h5", [e._v("Bid")]), e._v(" " + e._s(e.tokenData.metrics.highestBid) + " "), a("br"), e._v(" $" + e._s((e.tokenData.metrics.highestBid * e.prices.hive_price).toFixed(3)) + " ")]), a("b-col", {
            staticClass: "mt-2"
          }, [a("h5", [e._v("Ask")]), e._v(" " + e._s(e.tokenData.metrics.lowestAsk) + " "), a("br"), e._v(" $" + e._s((e.tokenData.metrics.lowestAsk * e.prices.hive_price).toFixed(3)) + " ")]), a("b-col", {
            staticClass: "mt-2"
          }, [a("h5", [e._v("Last")]), e._v(" " + e._s(e.tokenData.metrics.lastDayPrice) + " "), a("br"), e._v(" $" + e._s((e.tokenData.metrics.lastDayPrice * e.prices.hive_price).toFixed(3)) + " ")]), a("b-col", {
            staticClass: "mt-2"
          }, [a("h5", [e._v("24h Volume")]), e._v(" " + e._s(e.tokenData.metrics.volume) + " "), a("br"), e._v(" $" + e._s((e.tokenData.metrics.volume * e.prices.hive_price).toFixed(3)) + " ")])], 1)], 1) : e._e()], 1), e.dataLoaded ? a("div", {
            staticClass: "marketChart mt-3 mb-3"
          }, [e.showChart.depth ? a("DepthChart", {
            attrs: {
              data: e.chartData
            }
          }) : e._e(), e.showChart.candle ? a("CandleChart", {
            attrs: {
              data: e.candleChartData
            }
          }) : e._e(), e.showChart.volume ? a("VolumeChart", {
            attrs: {
              data: e.volumeChartData
            }
          }) : e._e(), a("div", {
            staticClass: "mt-2 text-center"
          }, [a("b-button", {
            attrs: {
              variant: "info",
              size: "sm"
            },
            on: {
              click: function (t) {
                return t.preventDefault(), e.toggleChart("candle")
              }
            }
          }, [e._v("Candlestick")]), e._v(" "), a("b-button", {
            attrs: {
              variant: "info",
              size: "sm"
            },
            on: {
              click: function (t) {
                return t.preventDefault(), e.toggleChart("depth")
              }
            }
          }, [e._v("Depth")]), e._v(" "), a("b-button", {
            attrs: {
              variant: "info",
              size: "sm"
            },
            on: {
              click: function (t) {
                return t.preventDefault(), e.toggleChart("volume")
              }
            }
          }, [e._v("Volume")])], 1)], 1) : e._e(), e.dataLoaded ? a("div", {
            staticClass: "tradeForms"
          }, [a("b-row", [a("b-col", {
            staticClass: "mt-3",
            attrs: {
              md: "6"
            }
          }, [a("h4", [e._v("Buy " + e._s(e.token))]), a("b-form", {
            staticClass: "form-horizontal",
            on: {
              submit: function (t) {
                return t.preventDefault(), e.requestJson("buy")
              }
            }
          }, [a("b-form-group", {
            attrs: {
              label: "Order Type",
              "label-cols-sm": "4"
            }
          }, [a("b-form-radio-group", {
            attrs: {
              id: "buy-order-types",
              options: e.orderTypes,
              buttons: "",
              "button-variant": "outline-warning"
            },
            model: {
              value: e.buyOrderType,
              callback: function (t) {
                e.buyOrderType = t
              },
              expression: "buyOrderType"
            }
          })], 1), a("b-form-group", {
            attrs: {
              for: "buyPrice",
              "label-cols-sm": "4",
              label: "Price"
            }
          }, [a("b-input-group", {
            scopedSlots: e._u([{
              key: "append",
              fn: function () {
                return [a("b-input-group-text", [e._v("HIVE/" + e._s(e.token))])]
              },
              proxy: !0
            }], null, !1, 4165705535)
          }, [a("b-form-input", {
            ref: "buyPrice",
            attrs: {
              id: "buyPrice",
              type: "number",
              step: "any",
              required: "",
              placeholder: "0",
              min: "0",
              disabled: "market" === e.buyOrderType
            },
            model: {
              value: e.buyPrice,
              callback: function (t) {
                e.buyPrice = e._n(t)
              },
              expression: "buyPrice"
            }
          })], 1)], 1), a("b-form-group", {
            attrs: {
              for: "buyQuantity",
              "label-cols-sm": "4",
              label: "Quantity"
            }
          }, [a("b-input-group", {
            attrs: {
              append: e.token
            }
          }, [a("b-form-input", {
            ref: "buyQuantity",
            attrs: {
              id: "buyQuantity",
              type: "number",
              step: "any",
              required: "",
              placeholder: "0",
              min: "0",
              disabled: "market" === e.buyOrderType
            },
            model: {
              value: e.buyQuantity,
              callback: function (t) {
                e.buyQuantity = e._n(t)
              },
              expression: "buyQuantity"
            }
          })], 1)], 1), a("b-form-group", {
            attrs: {
              for: "buyTotal",
              "label-cols-sm": "4",
              label: "Total"
            }
          }, [a("b-input-group", {
            attrs: {
              append: "HIVE"
            }
          }, [a("b-form-input", {
            ref: "buyTotal",
            attrs: {
              id: "buyTotal",
              type: "number",
              step: "any",
              required: "",
              placeholder: "0",
              readonly: "limit" === e.buyOrderType
            },
            model: {
              value: e.buyTotal,
              callback: function (t) {
                e.buyTotal = e._n(t)
              },
              expression: "buyTotal"
            }
          })], 1)], 1), a("div", {
            staticClass: "text-right"
          }, [a("b-button", {
            attrs: {
              type: "submit",
              variant: "success",
              disabled: !e.isAuthenticated || e.buyTotal > e.balance.hivep
            }
          }, [e._v("Buy")])], 1)], 1)], 1), a("b-col", {
            staticClass: "mt-3",
            attrs: {
              md: "6"
            }
          }, [a("h4", [e._v("Sell " + e._s(e.token))]), a("b-form", {
            staticClass: "form-horizontal",
            on: {
              submit: function (t) {
                return t.preventDefault(), e.requestJson("sell")
              }
            }
          }, [a("b-form-group", {
            attrs: {
              label: "Order Type",
              "label-cols-sm": "4"
            }
          }, [a("b-form-radio-group", {
            attrs: {
              id: "sell-order-types",
              options: e.orderTypes,
              buttons: "",
              "button-variant": "outline-warning"
            },
            model: {
              value: e.sellOrderType,
              callback: function (t) {
                e.sellOrderType = t
              },
              expression: "sellOrderType"
            }
          })], 1), a("b-form-group", {
            attrs: {
              for: "sellPrice",
              "label-cols-sm": "4",
              label: "Price"
            }
          }, [a("b-input-group", {
            scopedSlots: e._u([{
              key: "append",
              fn: function () {
                return [a("b-input-group-text", [e._v("HIVE/" + e._s(e.token))])]
              },
              proxy: !0
            }], null, !1, 4165705535)
          }, [a("b-form-input", {
            ref: "sellPrice",
            attrs: {
              id: "sellPrice",
              type: "number",
              step: "any",
              required: "",
              placeholder: "0",
              min: "0",
              disabled: "market" === e.sellOrderType
            },
            model: {
              value: e.sellPrice,
              callback: function (t) {
                e.sellPrice = e._n(t)
              },
              expression: "sellPrice"
            }
          })], 1)], 1), a("b-form-group", {
            attrs: {
              for: "sellQuantity",
              "label-cols-sm": "4",
              label: "Quantity"
            }
          }, [a("b-input-group", {
            attrs: {
              append: e.token
            }
          }, [a("b-form-input", {
            ref: "sellQuantity",
            attrs: {
              id: "sellQuantity",
              type: "number",
              step: "any",
              required: "",
              placeholder: "0",
              min: "0"
            },
            model: {
              value: e.sellQuantity,
              callback: function (t) {
                e.sellQuantity = e._n(t)
              },
              expression: "sellQuantity"
            }
          })], 1)], 1), a("b-form-group", {
            attrs: {
              for: "sellTotal",
              "label-cols-sm": "4",
              label: "Total"
            }
          }, [a("b-input-group", {
            attrs: {
              append: "HIVE"
            }
          }, [a("b-form-input", {
            ref: "sellTotal",
            attrs: {
              id: "sellTotal",
              type: "number",
              required: "",
              placeholder: "0",
              readonly: "",
              disabled: "market" === e.sellOrderType
            },
            model: {
              value: e.sellTotal,
              callback: function (t) {
                e.sellTotal = e._n(t)
              },
              expression: "sellTotal"
            }
          })], 1)], 1), a("div", {
            staticClass: "text-right"
          }, [a("b-button", {
            attrs: {
              type: "submit",
              variant: "danger",
              disabled: !e.isAuthenticated || e.sellQuantity > e.balance.token
            }
          }, [e._v("Sell")])], 1)], 1)], 1)], 1), e.isAuthenticated ? a("div", {
            staticClass: "text-center mt-3"
          }, [a("p", [e._v(" Balance: "), a("a", {
            attrs: {
              href: "#"
            },
            on: {
              click: function (e) {
                e.preventDefault()
              }
            }
          }, [e._v(e._s(this.balance.hivep))]), e._v(" SWAP.HIVE and "), a("a", {
            attrs: {
              href: "#"
            },
            on: {
              click: function (e) {
                e.preventDefault()
              }
            }
          }, [e._v(e._s(this.balance.token))]), e._v(" " + e._s(this.token) + " ")])]) : e._e()], 1) : e._e(), e.dataLoaded ? a("div", {
            staticClass: "marketOrders"
          }, [a("b-row", [a("b-col", {
            staticClass: "mt-3",
            attrs: {
              md: "6"
            }
          }, [a("h4", [e._v("Buy Orders")]), a("b-table-lite", {
            attrs: {
              striped: "",
              hover: "",
              responsive: "",
              borderless: "",
              items: e.tokenData.buyBook.slice(0, 15),
              fields: e.tokenData.buyBookFields
            },
            scopedSlots: e._u([{
              key: "head(hive_volume)",
              fn: function () {
                return [e._v("TOTAL HIVE")]
              },
              proxy: !0
            }, {
              key: "head(quantity)",
              fn: function () {
                return [e._v(e._s(e.token))]
              },
              proxy: !0
            }, {
              key: "cell(price)",
              fn: function (t) {
                return [a("a", {
                  attrs: {
                    href: "#"
                  },
                  on: {
                    click: function (a) {
                      return a.preventDefault(), e.fillPrice(t.item.price)
                    }
                  }
                }, [e._v(e._s(t.item.price.toFixed(6)))])]
              }
            }], null, !1, 1607555378)
          })], 1), a("b-col", {
            staticClass: "mt-3",
            attrs: {
              md: "6"
            }
          }, [a("h4", [e._v("Sell Orders")]), a("b-table-lite", {
            attrs: {
              striped: "",
              hover: "",
              responsive: "",
              borderless: "",
              items: e.tokenData.sellBook.slice(0, 15),
              fields: e.tokenData.sellBookFields
            },
            scopedSlots: e._u([{
              key: "head(hive_volume)",
              fn: function () {
                return [e._v("TOTAL HIVE")]
              },
              proxy: !0
            }, {
              key: "head(quantity)",
              fn: function () {
                return [e._v(e._s(e.token))]
              },
              proxy: !0
            }, {
              key: "cell(price)",
              fn: function (t) {
                return [a("a", {
                  attrs: {
                    href: "#"
                  },
                  on: {
                    click: function (a) {
                      return a.preventDefault(), e.fillPrice(t.item.price)
                    }
                  }
                }, [e._v(e._s(t.item.price.toFixed(6)))])]
              }
            }], null, !1, 1607555378)
          })], 1)], 1)], 1) : e._e(), e.isAuthenticated && e.dataLoaded ? a("div", {
            staticClass: "openOrders mt-3"
          }, [a("h4", [e._v("Open Orders")]), a("b-table", {
            staticClass: "mt-3",
            attrs: {
              striped: "",
              hover: "",
              responsive: "",
              borderless: "",
              items: e.tokenData.openOrders,
              fields: e.tokenData.openOrdersFields,
              "show-empty": ""
            },
            scopedSlots: e._u([{
              key: "head(quantity)",
              fn: function () {
                return [e._v(e._s(e.token))]
              },
              proxy: !0
            }, {
              key: "empty",
              fn: function () {
                return [a("p", {
                  staticClass: "m-0"
                }, [e._v("No open orders found.")])]
              },
              proxy: !0
            }, {
              key: "cell(checkbox)",
              fn: function (t) {
                return [a("b-form-checkbox", {
                  attrs: {
                    size: "sm",
                    value: t.item.txId
                  },
                  model: {
                    value: e.selectedOpenOrders,
                    callback: function (t) {
                      e.selectedOpenOrders = t
                    },
                    expression: "selectedOpenOrders"
                  }
                })]
              }
            }, {
              key: "cell(type)",
              fn: function (t) {
                return [a("span", {
                  class: {
                    "text-danger": "SELL" === t.item.type, "text-success": "BUY" === t.item.type
                  }
                }, [e._v(e._s(t.item.type))])]
              }
            }, {
              key: "cell(txId)",
              fn: function (t) {
                return [a("b-button", {
                  attrs: {
                    variant: "danger",
                    size: "sm"
                  },
                  on: {
                    click: function (a) {
                      return e.cancelOrder(t.item.type, t.item.txId)
                    }
                  }
                }, [e._v("Cancel")])]
              }
            }], null, !1, 507037864)
          }), e.selectedOpenOrders.length > 0 ? a("b-button", {
            attrs: {
              variant: "danger",
              size: "sm"
            },
            on: {
              click: function (t) {
                return t.preventDefault(), e.cancelMultipleOrders(t)
              }
            }
          }, [e._v("Cancel Multiple")]) : e._e()], 1) : e._e(), e.dataLoaded ? a("div", {
            staticClass: "tradesHistory mt-3"
          }, [a("h4", [e._v("Trade History")]), a("b-table-lite", {
            staticClass: "mt-3",
            attrs: {
              striped: "",
              hover: "",
              responsive: "",
              borderless: "",
              items: e.tokenData.tradesHistory.slice(0, 30).reverse(),
              fields: e.tokenData.tradesHistoryFields
            },
            scopedSlots: e._u([{
              key: "head(quantity)",
              fn: function () {
                return [e._v(e._s(e.token))]
              },
              proxy: !0
            }, {
              key: "empty",
              fn: function () {
                return [a("p", {
                  staticClass: "m-0"
                }, [e._v("No open orders found.")])]
              },
              proxy: !0
            }, {
              key: "cell(type)",
              fn: function (t) {
                return [a("span", {
                  class: {
                    "text-danger": "SELL" === t.item.type, "text-success": "BUY" === t.item.type
                  }
                }, [e._v(e._s(t.item.type))])]
              }
            }], null, !1, 2983163601)
          })], 1) : e._e(), a("Ads")], 1)], 1)
        },
        r = [],
        i = (a("99af"), a("cb29"), a("4de4"), a("7db0"), a("4160"), a("caad"), a("d81d"), a("13d5"), a("fb6a"), a("a9e3"), a("b680"), a("b64b"), a("d3b7"), a("6062"), a("2532"), a("3ca3"), a("159b"), a("ddb0"), a("2909")),
        s = a("5530"),
        o = (a("96cf"), a("1da1")),
        d = a("2f62"),
        l = a("188d");
      var u = a("30ef"),
        c = a.n(u);

      function _(e, t) {
        return {
          render: function (e) {
            return e("div", {
              style: this.styles,
              class: this.cssClasses
            }, [e("canvas", {
              attrs: {
                id: this.chartId,
                width: this.width,
                height: this.height
              },
              ref: "canvas"
            })])
          },
          props: {
            chartId: {
              default: e,
              type: String
            },
            width: {
              default: 400,
              type: Number
            },
            height: {
              default: 400,
              type: Number
            },
            cssClasses: {
              type: String,
              default: ""
            },
            styles: {
              type: Object
            },
            plugins: {
              type: Array,
              default: function () {
                return []
              }
            }
          },
          data: function () {
            return {
              _chart: null,
              _plugins: this.plugins
            }
          },
          methods: {
            addPlugin: function (e) {
              this.$data._plugins.push(e)
            },
            generateLegend: function () {
              if (this.$data._chart) return this.$data._chart.generateLegend()
            },
            renderChart: function (e, a) {
              this.$data._chart && this.$data._chart.destroy(), this.$data._chart = new c.a(this.$refs.canvas.getContext("2d"), {
                type: t,
                data: e,
                options: a,
                plugins: this.$data._plugins
              })
            }
          },
          beforeDestroy: function () {
            this.$data._chart && this.$data._chart.destroy()
          }
        }
      }
      var m, h, f = _("bar-chart", "bar"),
        p = (_("horizontalbar-chart", "horizontalBar"), _("doughnut-chart", "doughnut"), _("line-chart", "line")),
        y = (_("pie-chart", "pie"), _("polar-chart", "polarArea"), _("radar-chart", "radar"), _("bubble-chart", "bubble"), _("scatter-chart", "scatter"), {
          name: "Chart",
          extends: p,
          props: {
            data: Object
          },
          data: function () {
            return {
              options: {
                responsive: !0,
                maintainAspectRatio: !1,
                elements: {
                  line: {
                    tension: 0
                  }
                },
                legend: {
                  display: !1,
                  labels: {
                    fontColor: "#F6B352"
                  }
                },
                scales: {
                  yAxes: [{
                    ticks: {
                      fontColor: "#F6B352"
                    }
                  }],
                  xAxes: [{
                    ticks: {
                      fontColor: "#F6B352"
                    }
                  }]
                }
              }
            }
          },
          mounted: function () {
            this.renderChart(this.data, this.options)
          }
        }),
        M = y,
        g = a("2877"),
        v = Object(g["a"])(M, m, h, !1, null, null, null),
        L = v.exports;
      const b = c.a.helpers,
        k = {
          position: "left",
          ticks: {
            callback: c.a.Ticks.formatters.linear
          }
        },
        Y = c.a.scaleService.getScaleConstructor("linear").extend({
          _parseValue(e) {
            let t, a, n, r;
            return "undefined" !== typeof e.c ? (t = +this.getRightValue(e.l), a = +this.getRightValue(e.h), n = Math.min(t, a), r = Math.max(t, a)) : (e = +this.getRightValue(e.y), t = void 0, a = e, n = e, r = e), {
              min: n,
              max: r,
              start: t,
              end: a
            }
          },
          determineDataLimits() {
            const e = this,
              t = e.chart,
              a = t.data,
              n = a.datasets,
              r = e.isHorizontal();

            function i(t) {
              return r ? t.xAxisID === e.id : t.yAxisID === e.id
            }
            e.min = null, e.max = null, b.each(n, (a, n) => {
              const r = t.getDatasetMeta(n);
              t.isDatasetVisible(n) && i(r) && b.each(a.data, (t, a) => {
                const n = e._parseValue(t);
                isNaN(n.min) || isNaN(n.max) || r.data[a].hidden || ((null === e.min || n.min < e.min) && (e.min = n.min), (null === e.max || e.max < n.max) && (e.max = n.max))
              })
            });
            const s = .05 * (e.max - e.min);
            e.min -= s, e.max += s, this.handleTickRangeOptions()
          }
        });
      c.a.scaleService.registerScaleType("financialLinear", Y, k);
      const D = c.a.helpers;
      c.a.defaults.financial = {
        label: "",
        hover: {
          mode: "label"
        },
        scales: {
          xAxes: [{
            type: "time",
            distribution: "series",
            offset: !0,
            ticks: {
              major: {
                enabled: !0,
                fontStyle: "bold"
              },
              source: "data",
              maxRotation: 0,
              autoSkip: !0,
              autoSkipPadding: 75,
              sampleSize: 100
            }
          }],
          yAxes: [{
            type: "financialLinear"
          }]
        },
        tooltips: {
          intersect: !1,
          mode: "index",
          callbacks: {
            label(e, t) {
              const a = t.datasets[e.datasetIndex],
                n = a.data[e.index];
              if (!D.isNullOrUndef(n.y)) return c.a.defaults.global.tooltips.callbacks.label(e, t);
              const r = n.o,
                i = n.h,
                s = n.l,
                o = n.c;
              return "O: " + r + "  H: " + i + "  L: " + s + "  C: " + o
            }
          }
        }
      };
      const w = c.a.controllers.bar.extend({
        dataElementType: c.a.elements.Financial,
        _updateElementGeometry(e, t, a, n) {
          const r = this,
            i = e._model,
            s = r._getValueScale(),
            o = s.getBasePixel(),
            d = s.isHorizontal(),
            l = r._ruler || r.getRuler(),
            u = r.calculateBarValuePixels(r.index, t, n),
            c = r.calculateBarIndexPixels(r.index, t, l, n),
            _ = r.chart,
            m = _.data.datasets,
            h = m[r.index].data[t];
          i.horizontal = d, i.base = a ? o : u.base, i.x = d ? a ? o : u.head : c.center, i.y = d ? c.center : a ? o : u.head, i.height = d ? c.size : void 0, i.width = d ? void 0 : c.size, i.candleOpen = s.getPixelForValue(Number(h.o)), i.candleHigh = s.getPixelForValue(Number(h.h)), i.candleLow = s.getPixelForValue(Number(h.l)), i.candleClose = s.getPixelForValue(Number(h.c))
        },
        draw() {
          const e = this.chart.chart.ctx,
            t = this.getMeta().data,
            a = this.getDataset(),
            n = t.length;
          let r, i = 0;
          for (c.a.canvasHelpers.clipArea(e, this.chart.chartArea); i < n; ++i) r = a.data[i].o, null === r || void 0 === r || isNaN(r) || t[i].draw();
          c.a.canvasHelpers.unclipArea(e)
        }
      });
      var x = w;
      const T = c.a.helpers,
        S = c.a.defaults.global;

      function H(e) {
        return void 0 !== e._view.width
      }

      function j(e) {
        const t = e._view,
          a = t.width / 2,
          n = t.x - a,
          r = t.x + a,
          i = t.candleHigh,
          s = t.candleLow;
        return {
          left: n,
          top: i,
          right: r,
          bottom: s
        }
      }
      S.elements.financial = {
        color: {
          up: "rgba(80, 160, 115, 1)",
          down: "rgba(215, 85, 65, 1)",
          unchanged: "rgba(90, 90, 90, 1)"
        }
      };
      const P = c.a.Element.extend({
        height() {
          const e = this._view;
          return e.base - e.y
        },
        inRange(e, t) {
          let a = !1;
          if (this._view) {
            const n = j(this);
            a = e >= n.left && e <= n.right && t >= n.top && t <= n.bottom
          }
          return a
        },
        inLabelRange(e, t) {
          const a = this;
          if (!a._view) return !1;
          let n = !1;
          const r = j(a);
          return n = H(a) ? e >= r.left && e <= r.right : t >= r.top && t <= r.bottom, n
        },
        inXRange(e) {
          const t = j(this);
          return e >= t.left && e <= t.right
        },
        inYRange(e) {
          const t = j(this);
          return e >= t.top && e <= t.bottom
        },
        getCenterPoint() {
          const e = this._view;
          return {
            x: e.x,
            y: (e.candleHigh + e.candleLow) / 2
          }
        },
        getArea() {
          const e = this._view;
          return e.width * Math.abs(e.y - e.base)
        },
        tooltipPosition() {
          const e = this._view;
          return {
            x: e.x,
            y: (e.candleOpen + e.candleClose) / 2
          }
        },
        hasValue() {
          const e = this._model;
          return T.isNumber(e.x) && T.isNumber(e.candleOpen) && T.isNumber(e.candleHigh) && T.isNumber(e.candleLow) && T.isNumber(e.candleClose)
        }
      });
      var O = P;
      const A = c.a.helpers,
        C = c.a.defaults.global;
      C.elements.candlestick = A.merge({}, [C.elements.financial, {
        borderColor: C.elements.financial.color.unchanged,
        borderWidth: 1
      }]);
      const F = O.extend({
        draw() {
          const e = this._chart.ctx,
            t = this._view,
            a = t.x,
            n = t.candleOpen,
            r = t.candleHigh,
            i = t.candleLow,
            s = t.candleClose;
          let o, d = t.borderColor;
          "string" === typeof d && (d = {
            up: d,
            down: d,
            unchanged: d
          }), s < n ? (o = A.getValueOrDefault(d ? d.up : void 0, C.elements.candlestick.borderColor), e.fillStyle = A.getValueOrDefault(t.color ? t.color.up : void 0, C.elements.candlestick.color.up)) : s > n ? (o = A.getValueOrDefault(d ? d.down : void 0, C.elements.candlestick.borderColor), e.fillStyle = A.getValueOrDefault(t.color ? t.color.down : void 0, C.elements.candlestick.color.down)) : (o = A.getValueOrDefault(d ? d.unchanged : void 0, C.elements.candlestick.borderColor), e.fillStyle = A.getValueOrDefault(t.color ? t.color.unchanged : void 0, C.elements.candlestick.color.unchanged)), e.lineWidth = A.getValueOrDefault(t.borderWidth, C.elements.candlestick.borderWidth), e.strokeStyle = A.getValueOrDefault(o, C.elements.candlestick.borderColor), e.beginPath(), e.moveTo(a, r), e.lineTo(a, Math.min(n, s)), e.moveTo(a, i), e.lineTo(a, Math.max(n, s)), e.stroke(), e.fillRect(a - t.width / 2, s, t.width, n - s), e.strokeRect(a - t.width / 2, s, t.width, n - s), e.closePath()
        }
      });
      var E = F;
      c.a.defaults.candlestick = c.a.helpers.merge({}, c.a.defaults.financial), c.a.defaults._set("global", {
        datasets: {
          candlestick: c.a.defaults.global.datasets.bar
        }
      });
      c.a.controllers.candlestick = x.extend({
        dataElementType: E,
        updateElement(e, t, a) {
          const n = this,
            r = n.getMeta(),
            i = n.getDataset(),
            s = n._resolveDataElementOptions(e, t);
          e._xScale = n.getScaleForId(r.xAxisID), e._yScale = n.getScaleForId(r.yAxisID), e._datasetIndex = n.index, e._index = t, e._model = {
            datasetLabel: i.label || "",
            color: i.color,
            borderColor: i.borderColor,
            borderWidth: i.borderWidth
          }, n._updateElementGeometry(e, t, a, s), e.pivot()
        }
      });
      const W = c.a.helpers,
        I = c.a.defaults.global;
      I.elements.ohlc = W.merge({}, [I.elements.financial, {
        lineWidth: 2,
        armLength: null,
        armLengthRatio: .8
      }]);
      const z = O.extend({
        draw() {
          const e = this._chart.ctx,
            t = this._view,
            a = t.x,
            n = t.candleOpen,
            r = t.candleHigh,
            i = t.candleLow,
            s = t.candleClose,
            o = W.getValueOrDefault(t.armLengthRatio, I.elements.ohlc.armLengthRatio);
          let d = W.getValueOrDefault(t.armLength, I.elements.ohlc.armLength);
          null === d && (d = t.width * o * .5), e.strokeStyle = s < n ? W.getValueOrDefault(t.color ? t.color.up : void 0, I.elements.ohlc.color.up) : s > n ? W.getValueOrDefault(t.color ? t.color.down : void 0, I.elements.ohlc.color.down) : W.getValueOrDefault(t.color ? t.color.unchanged : void 0, I.elements.ohlc.color.unchanged), e.lineWidth = W.getValueOrDefault(t.lineWidth, I.elements.ohlc.lineWidth), e.beginPath(), e.moveTo(a, r), e.lineTo(a, i), e.moveTo(a - d, n), e.lineTo(a, n), e.moveTo(a + d, s), e.lineTo(a, s), e.stroke()
        }
      });
      var N = z;
      c.a.defaults.ohlc = c.a.helpers.merge({}, c.a.defaults.financial), c.a.defaults._set("global", {
        datasets: {
          ohlc: {
            barPercentage: 1,
            categoryPercentage: 1
          }
        }
      });
      c.a.controllers.ohlc = x.extend({
        dataElementType: N,
        updateElement(e, t, a) {
          const n = this,
            r = n.getMeta(),
            i = n.getDataset(),
            s = n._resolveDataElementOptions(e, t);
          e._xScale = n.getScaleForId(r.xAxisID), e._yScale = n.getScaleForId(r.yAxisID), e._datasetIndex = n.index, e._index = t, e._model = {
            datasetLabel: i.label || "",
            lineWidth: i.lineWidth,
            armLength: i.armLength,
            armLengthRatio: i.armLengthRatio,
            color: i.color
          }, n._updateElementGeometry(e, t, a, s), e.pivot()
        }
      });
      var R, V, B, J, U = _("candlestick-chart", "candlestick"),
        G = {
          extends: U,
          props: {
            data: Object
          },
          data: function () {
            return {
              options: {
                responsive: !0,
                maintainAspectRatio: !1,
                legend: {
                  display: !1
                },
                scales: {
                  yAxes: [{
                    ticks: {
                      fontColor: "#F6B352"
                    }
                  }],
                  xAxes: [{
                    ticks: {
                      fontColor: "#F6B352"
                    }
                  }]
                }
              }
            }
          },
          mounted: function () {
            this.renderChart(this.data, this.options)
          }
        },
        q = G,
        $ = Object(g["a"])(q, R, V, !1, null, null, null),
        K = $.exports,
        Q = {
          name: "BarChart",
          extends: f,
          props: {
            data: Object
          },
          data: function () {
            return {
              options: {
                responsive: !0,
                maintainAspectRatio: !1,
                tooltips: {
                  mode: "index",
                  intersect: !1
                }
              }
            }
          },
          mounted: function () {
            this.renderChart(this.data, this.options)
          }
        },
        Z = Q,
        X = Object(g["a"])(Z, B, J, !1, null, null, null),
        ee = X.exports,
        te = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "search-select"
          }, [a("input", {
            ref: "input",
            staticClass: "form-control",
            attrs: {
              autocomplete: "off",
              tabindex: "0"
            },
            domProps: {
              value: e.searchText
            },
            on: {
              input: function (t) {
                e.searchText = t.target.value
              },
              focus: function (t) {
                return t.preventDefault(), e.openOptions(t)
              },
              keyup: [function (t) {
                return !t.type.indexOf("key") && e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"]) ? null : e.closeOptions(t)
              }, function (t) {
                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : (t.preventDefault(), e.enterItem(t))
              }],
              blur: e.blurInput,
              keydown: [function (t) {
                if (!t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter")) return null;
                t.preventDefault()
              }, function (t) {
                return !t.type.indexOf("key") && e._k(t.keyCode, "delete", [8, 46], t.key, ["Backspace", "Delete", "Del"]) ? null : e.deleteTextOrItem(t)
              }]
            }
          }), a("div", {
            staticClass: "text",
            class: e.textClass
          }, [e._v(e._s(e.inputText))]), a("div", {
            ref: "menu",
            staticClass: "menu",
            class: e.menuClass,
            style: e.menuStyle,
            attrs: {
              tabindex: "-1"
            }
          }, [e.filteredOptions.length > 0 ? a("div", {
            staticClass: "action-bar text-center"
          }, [a("button", {
            staticClass: "btn action-button",
            on: {
              mousedown: e.mousedownItem,
              click: function (t) {
                e.sortBy = "volume"
              }
            }
          }, [e._v("24h Volume")]), a("button", {
            staticClass: "btn action-button",
            on: {
              mousedown: e.mousedownItem,
              click: function (t) {
                e.sortBy = "change"
              }
            }
          }, [e._v("24h Change")])]) : e._e(), e._l(e.filteredOptions, (function (t, n) {
            return a("div", {
              key: n,
              staticClass: "item",
              on: {
                click: function (a) {
                  return a.stopPropagation(), e.selectItem(t)
                },
                mousedown: e.mousedownItem,
                mouseenter: function (t) {
                  return e.pointerSet(n)
                }
              }
            }, [a("div", {
              staticClass: "row"
            }, [a("div", {
              staticClass: "col text-left"
            }, [e._v(" " + e._s(t.text) + " "), a("br"), a("span", {
              staticClass: "small"
            }, [e._v(e._s(t.data.volume))])]), a("div", {
              staticClass: "col text-right"
            }, [a("span", {
              staticClass: "small",
              class: {
                "text-danger": t.data.change < 0, "text-success": t.data.change > 0
              }
            }, [e._v(e._s(t.data.change.toFixed(2)) + "%")]), a("br"), a("span", {
              staticClass: "small"
            }, [e._v(e._s(t.data.price))])])])])
          }))], 2)])
        },
        ae = [];
      a("4d63"), a("ac1f"), a("25f0"), a("466d"), a("5319"), a("a4d3"), a("e01a"), a("d28b");

      function ne(e) {
        return ne = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, ne(e)
      }
      var re = {
          name: "MarketSearch",
          props: {
            options: {
              type: Array
            },
            placeholder: {
              type: String,
              default: ""
            },
            value: {
              type: [String, Number, Object, Boolean]
            }
          },
          data: function () {
            return {
              searchText: "",
              showMenu: !1,
              mousedownState: !1,
              pointer: null,
              sortBy: ""
            }
          },
          computed: {
            filteredOptions: function () {
              var e = this,
                t = this.options;
              return "volume" === this.sortBy && (t = t.sort((function (e, t) {
                return t.data.volume - e.data.volume
              }))), "change" === this.sortBy && (t = t.sort((function (e, t) {
                return t.data.change - e.data.change
              }))), this.searchText ? (t = t.filter((function (t) {
                try {
                  return t.text.match(e.escapedRegExp(e.searchText))
                } catch (a) {
                  return !0
                }
              })), t) : t
            },
            selectedOption: function () {
              var e = this;
              return this.options.find((function (t) {
                return t.value === e.optionValue(e.value)
              }))
            },
            inputText: function () {
              if (this.searchText) return "";
              var e = this.placeholder;
              return this.selectedOption.text && (e = this.selectedOption.text), e
            },
            textClass: function () {
              return !this.selectedOption && this.placeholder ? "default" : ""
            },
            menuClass: function () {
              return {
                visible: this.showMenu,
                hidden: !this.showMenu
              }
            },
            menuStyle: function () {
              return {
                display: this.showMenu ? "block" : "none"
              }
            }
          },
          watch: {},
          methods: {
            deleteTextOrItem: function () {
              !this.searchText && this.selectedOption && (this.selectItem({}), this.openOptions())
            },
            openOptions: function () {
              this.$refs.input.focus(), this.searchText = "", this.showMenu = !0, this.mousedownState = !1
            },
            blurInput: function () {
              this.mousedownState || (this.searchText = "", this.closeOptions())
            },
            closeOptions: function () {
              this.showMenu = !1
            },
            selectItem: function (e) {
              this.searchText = "", this.closeOptions(), "object" === ne(this.value) && this.value ? this.$emit("input", e) : (this.$emit("input", e.value), e.value === e.text && (this.searchText = e.value))
            },
            enterItem: function () {
              var e = this.filteredOptions[this.pointer];
              e && this.selectItem(e)
            },
            pointerSet: function (e) {
              this.pointer = e
            },
            mousedownItem: function () {
              this.mousedownState = !0
            },
            optionValue: function (e) {
              return "object" === ne(e) && null !== e ? e.value : e
            },
            escapedRegExp: function (e) {
              return new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i")
            }
          }
        },
        ie = re,
        se = Object(g["a"])(ie, te, ae, !1, null, null, null),
        oe = se.exports,
        de = a("b555"),
        le = a("81f6"),
        ue = {
          name: "Market",
          components: {
            Ads: de["a"],
            CandleChart: K,
            DepthChart: L,
            VolumeChart: ee,
            MarketSearch: oe
          },
          data: function () {
            return {
              activeToken: null,
              buyPrice: 0,
              buyTotal: 0,
              buyOrderType: "limit",
              sellPrice: 0,
              sellTotal: 0,
              sellOrderType: "limit",
              buyQuantity: 0,
              sellQuantity: 0,
              balance: {
                hivep: 0,
                token: 0
              },
              dataLoaded: !1,
              chartData: {},
              tokenData: {
                metrics: null,
                buyBook: [],
                sellBook: [],
                openOrders: [],
                tradesHistory: [],
                buyBookFields: [{
                  key: "hive_volume",
                  label: "TOTAL"
                }, {
                  key: "total",
                  label: "HIVE"
                }, {
                  key: "quantity",
                  label: null
                }, {
                  key: "price",
                  label: "BID"
                }],
                sellBookFields: [{
                  key: "price",
                  label: "ASK"
                }, {
                  key: "quantity",
                  label: null
                }, {
                  key: "total",
                  label: "HIVE"
                }, {
                  key: "hive_volume",
                  label: "TOTAL"
                }],
                openOrdersFields: [{
                  key: "checkbox",
                  label: ""
                }, {
                  key: "date",
                  label: "DATE"
                }, {
                  key: "type",
                  label: "TYPE"
                }, {
                  key: "quantity",
                  label: null
                }, {
                  key: "price",
                  label: "PRICE"
                }, {
                  key: "total",
                  label: "TOTAL HIVE"
                }, {
                  key: "txId",
                  label: ""
                }],
                tradesHistoryFields: [{
                  key: "date",
                  label: "DATE"
                }, {
                  key: "type",
                  label: "TYPE"
                }, {
                  key: "quantity",
                  label: null
                }, {
                  key: "price",
                  label: "PRICE"
                }, {
                  key: "total",
                  label: "TOTAL HIVE"
                }]
              },
              candleChartData: {},
              candleChartDataOptions: {},
              volumeChartData: {},
              showChart: {
                depth: !1,
                candle: !0,
                volume: !1
              },
              selectedOpenOrders: [],
              orderTypes: [{
                text: "LIMIT",
                value: "limit"
              }, {
                text: "MARKET",
                value: "market"
              }]
            }
          },
          created: function () {
            var e = this;
            return Object(o["a"])(regeneratorRuntime.mark((function t() {
              var a, n;
              return regeneratorRuntime.wrap((function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    a = e.$route.params || e.token, n = a.token, e.SET_TOKEN(n || "LEO"), e.activeToken = e.token;
                  case 3:
                  case "end":
                    return t.stop()
                }
              }), t)
            })))()
          },
          watch: {
            activeToken: function (e) {
              var t = this;
              return Object(o["a"])(regeneratorRuntime.mark((function a() {
                var n;
                return regeneratorRuntime.wrap((function (a) {
                  while (1) switch (a.prev = a.next) {
                    case 0:
                      return n = t.$route.params.token, n !== e && t.$router.push({
                        name: "market",
                        params: {
                          token: e
                        }
                      }), t.SET_TOKEN(e), a.next = 5, t.loadMarket();
                    case 5:
                    case "end":
                      return a.stop()
                  }
                }), a)
              })))()
            },
            isAuthenticated: function (e) {
              var t = this;
              return Object(o["a"])(regeneratorRuntime.mark((function a() {
                return regeneratorRuntime.wrap((function (a) {
                  while (1) switch (a.prev = a.next) {
                    case 0:
                      if (!e) {
                        a.next = 5;
                        break
                      }
                      return a.next = 3, t.getBalance();
                    case 3:
                      return a.next = 5, t.getOrders();
                    case 5:
                    case "end":
                      return a.stop()
                  }
                }), a)
              })))()
            },
            buyPrice: function () {
              this.buyTotal = (this.buyQuantity * this.buyPrice).toFixed(8)
            },
            buyQuantity: function () {
              "market" !== this.buyOrderType && (this.buyTotal = (this.buyQuantity * this.buyPrice).toFixed(8))
            },
            buyOrderType: function (e) {
              this.buyPrice = 0, this.buyQuantity = 0, this.buyTotal = 0, "market" === e && this.$refs.buyTotal.focus()
            },
            sellOrderType: function (e) {
              this.sellPrice = 0, this.sellQuantity = 0, this.sellTotal = 0, "market" === e && this.$refs.sellQuantity.focus()
            },
            sellPrice: function () {
              this.sellTotal = (this.sellQuantity * this.sellPrice).toFixed(8)
            },
            buyTotal: function (e) {
              var t = e,
                a = 0;
              if ("market" === this.buyOrderType) {
                for (var n = 0; n < this.tokenData.sellBook.length; n += 1) {
                  var r = this.tokenData.sellBook[n],
                    i = r.quantity,
                    s = r.price,
                    o = i * s;
                  o > t ? (a += t / s, t = 0) : (a += i, t -= o)
                }
                this.buyQuantity = a.toFixed(8)
              }
            },
            sellQuantity: function (e) {
              var t = e,
                a = 0;
              if ("market" === this.sellOrderType) {
                for (var n = 0; n < this.tokenData.buyBook.length; n += 1) {
                  var r = this.tokenData.buyBook[n],
                    i = r.quantity,
                    s = r.price;
                  i < t ? (a += i * s, t -= i) : (a += t * s, t = 0)
                }
                this.sellTotal = a.toFixed(8)
              } else this.sellTotal = (this.sellQuantity * this.sellPrice).toFixed(8)
            }
          },
          computed: Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({}, Object(d["c"])("market", ["token", "buy_book", "sell_book", "buy_orders", "sell_orders", "trade_history", "market_history"])), Object(d["c"])("wallet", ["wallet"])), Object(d["c"])("user", ["username", "isAuthenticated"])), Object(d["c"])("token", ["tokens", "prices", "metrics"])), {}, {
            supportedTokens: function () {
              return this.metrics.filter((function (e) {
                return "SWAP.HIVE" !== e.symbol
              })).map((function (e) {
                return {
                  value: e.symbol,
                  text: e.symbol,
                  data: {
                    volume: parseFloat(e.volume),
                    price: parseFloat(e.lastPrice),
                    change: parseFloat(e.priceChangePercent)
                  }
                }
              }))
            }
          }),
          mounted: function () {
            var e = this;
            le["a"].$on("TRANSACTION_BROADCASTED", Object(o["a"])(regeneratorRuntime.mark((function t() {
              return regeneratorRuntime.wrap((function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    return e.dataLoaded = !1, t.next = 3, l["utils"].sleep(1e4);
                  case 3:
                    return t.next = 5, e.loadMarket();
                  case 5:
                    e.dataLoaded = !0;
                  case 6:
                  case "end":
                    return t.stop()
                }
              }), t)
            }))))
          },
          methods: Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({}, Object(d["b"])("market", ["fetchMarketOrders", "fetchUserOrders", "fetchTradeHistory", "fetchMarketHistory"])), Object(d["b"])("wallet", ["fetchWallet", "requestCancelOrder", "requestCancelOrders", "requestCustomJson"])), Object(d["b"])("token", ["fetchTokens", "fetchPrices", "fetchMetrics"])), Object(d["d"])("market", ["SET_TOKEN"])), {}, {
            round: function (e, t) {
              var a = Math.pow(10, t),
                n = e * a;
              return Math.round(n) / a
            },
            toggleChart: function (e) {
              var t = this;
              Object.keys(this.showChart).forEach((function (e) {
                t.showChart[e] = !1
              })), this.showChart[e] = !0
            },
            fillPrice: function (e) {
              this.buyPrice = e, this.sellPrice = e
            },
            processOrderBook: function (e) {
              var t = this,
                a = 0,
                n = 0;
              return e.map((function (e) {
                var a = t.round(parseFloat(e.price), 8),
                  n = t.round(parseFloat(e.quantity), 8);
                return {
                  price: a,
                  quantity: n,
                  total: t.round(a * n, 6)
                }
              })).reduce((function (e, r) {
                var i = e.find((function (e) {
                  return e.price === r.price
                }));
                return a += r.quantity, n += r.total, i ? (i.volume = t.round(a, 8), i.hive_volume = t.round(n, 5)) : e.push(Object(s["a"])(Object(s["a"])({}, r), {}, {
                  volume: t.round(a, 8),
                  hive_volume: t.round(n, 5)
                })), e
              }), [])
            },
            produceChart: function (e, t) {
              var a = e.map((function (e) {
                  return e.volume
                })),
                n = t.map((function (e) {
                  return e.volume
                }));
              a.reverse();
              var r = Object(i["a"])(new Set(e.map((function (e) {
                  return parseFloat(e.price)
                })))),
                s = Object(i["a"])(new Set(t.map((function (e) {
                  return parseFloat(e.price)
                }))));
              r.reverse(), this.chartData = {
                labels: r.concat(s),
                datasets: [{
                  label: "Buy",
                  borderColor: "#3ac569",
                  backgroundColor: "#56A902",
                  data: a
                }, {
                  label: "Sell",
                  borderColor: "#f94e3f",
                  backgroundColor: "#ff5f2e",
                  data: new Array(a.length).fill(null).concat(n)
                }]
              }
            },
            getMarketData: function () {
              var e = this;
              return Object(o["a"])(regeneratorRuntime.mark((function t() {
                return regeneratorRuntime.wrap((function (t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, e.fetchMarketOrders(e.token);
                    case 2:
                      e.tokenData.buyBook = e.processOrderBook(e.buy_book), e.tokenData.sellBook = e.processOrderBook(e.sell_book);
                    case 4:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            getTradesHistory: function () {
              var e = this;
              return Object(o["a"])(regeneratorRuntime.mark((function t() {
                return regeneratorRuntime.wrap((function (t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, e.fetchTradeHistory(e.token);
                    case 2:
                      e.tokenData.tradesHistory = e.trade_history;
                    case 3:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            getMertrics: function () {
              var e = this;
              return Object(o["a"])(regeneratorRuntime.mark((function t() {
                return regeneratorRuntime.wrap((function (t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, e.fetchMetrics();
                    case 2:
                      e.tokenData.metrics = e.metrics.find((function (t) {
                        return t.symbol === e.token
                      }));
                    case 3:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            getBalance: function () {
              var e = this;
              return Object(o["a"])(regeneratorRuntime.mark((function t() {
                var a, n;
                return regeneratorRuntime.wrap((function (t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, e.fetchWallet(e.username);
                    case 2:
                      a = e.wallet.find((function (e) {
                        return "SWAP.HIVE" === e.symbol
                      })), n = e.wallet.find((function (t) {
                        return t.symbol === e.token
                      })), e.balance.hivep = a ? parseFloat(a.balance) : 0, e.balance.token = n ? parseFloat(n.balance) : 0;
                    case 6:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            getOrders: function () {
              var e = this;
              return Object(o["a"])(regeneratorRuntime.mark((function t() {
                return regeneratorRuntime.wrap((function (t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, e.fetchUserOrders({
                        username: e.username,
                        symbol: e.token
                      });
                    case 2:
                      e.tokenData.openOrders = [].concat(Object(i["a"])(e.buy_orders), Object(i["a"])(e.sell_orders));
                    case 3:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            loadMarket: function () {
              var e = this;
              return Object(o["a"])(regeneratorRuntime.mark((function t() {
                var a;
                return regeneratorRuntime.wrap((function (t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      return e.dataLoaded = !1, a = [e.fetchPrices(), e.getMertrics(), e.getMarketData(), e.getTradesHistory(), e.fetchMarketHistory()], (!e.tokens || e.tokens.length <= 0) && a.push(e.fetchTokens()), t.next = 5, Promise.all(a);
                    case 5:
                      if (!e.isAuthenticated) {
                        t.next = 8;
                        break
                      }
                      return t.next = 8, Promise.all([e.getBalance(), e.getOrders()]);
                    case 8:
                      e.dataLoaded = !0, e.produceChart(e.tokenData.buyBook, e.tokenData.sellBook), e.produceCandleChart(), e.produceVolumeChart();
                    case 12:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            produceCandleChart: function () {
              var e = this.market_history.slice(0, 60).map((function (e) {
                return {
                  t: new Date(1e3 * e.timestamp).getTime(),
                  o: Number(e.openPrice),
                  c: Number(e.closePrice),
                  l: Number(e.lowestPrice),
                  h: Number(e.highestPrice)
                }
              }));
              this.candleChartData = {
                datasets: [{
                  label: this.token,
                  data: e
                }]
              }
            },
            produceVolumeChart: function () {
              var e = this.market_history.sort((function (e, t) {
                return t.timestamp - e.timestamp
              })).slice(0, 30);
              e.reverse(), this.volumeChartData = {
                labels: e.map((function (e) {
                  return new Date(1e3 * e.timestamp).toLocaleDateString()
                })),
                datasets: [{
                  label: "SWAP.HIVE",
                  backgroundColor: "rgb(153, 102, 255)",
                  data: e.map((function (e) {
                    return Number(e.volumeSteem)
                  }))
                }, {
                  label: this.token,
                  backgroundColor: "rgb(255, 159, 64)",
                  data: e.map((function (e) {
                    return Number(e.volumeToken)
                  }))
                }]
              }
            },
            requestJson: function (e) {
              var t = "buy" === e ? this.buyOrderType : this.sellOrderType,
                a = "buy" === e ? this.buyPrice : this.sellPrice,
                n = "buy" === e ? this.buyQuantity : this.sellQuantity;
              if (("limit" !== t || !(a <= 0 || n <= 0)) && ("market" !== t || !("buy" === e && this.buyTotal <= 0 || "sell" === e && n <= 0))) {
                var r = JSON.stringify({
                  contractName: "market",
                  contractAction: e,
                  contractPayload: {
                    symbol: this.token,
                    quantity: "".concat(n),
                    price: "".concat(a)
                  }
                });
                "buy" === e && "market" === t && (r = JSON.stringify({
                  contractName: "market",
                  contractAction: "marketBuy",
                  contractPayload: {
                    symbol: this.token,
                    quantity: "".concat(this.buyTotal)
                  }
                })), "sell" === e && "market" === t && (r = JSON.stringify({
                  contractName: "market",
                  contractAction: "marketSell",
                  contractPayload: {
                    symbol: this.token,
                    quantity: "".concat(n)
                  }
                }));
                var i = "buy" === e ? "Buy ".concat(this.token) : "Sell ".concat(this.token);
                this.requestCustomJson({
                  json: r,
                  message: i
                })
              }
            },
            cancelOrder: function (e, t) {
              return this.requestCancelOrder({
                type: e,
                id: t
              })
            },
            cancelMultipleOrders: function () {
              var e = this,
                t = this.tokenData.openOrders.filter((function (t) {
                  return e.selectedOpenOrders.includes(t.txId)
                }));
              return this.requestCancelOrders(t)
            }
          })
        },
        ce = ue,
        _e = Object(g["a"])(ce, n, r, !1, null, null, null);
      t["default"] = _e.exports
    },
    ebe4: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("ms", {
          months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
          monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
          weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
          weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
          weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
          },
          meridiemParse: /pagi|tengahari|petang|malam/,
          meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
          },
          meridiem: function (e, t, a) {
            return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
          },
          calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            ss: "%d saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
          },
          week: {
            dow: 1,
            doy: 7
          }
        });
        return t
      }))
    },
    ec18: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, a, n) {
          var r = {
            s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
            ss: [e + "sekundi", e + "sekundit"],
            m: ["ühe minuti", "üks minut"],
            mm: [e + " minuti", e + " minutit"],
            h: ["ühe tunni", "tund aega", "üks tund"],
            hh: [e + " tunni", e + " tundi"],
            d: ["ühe päeva", "üks päev"],
            M: ["kuu aja", "kuu aega", "üks kuu"],
            MM: [e + " kuu", e + " kuud"],
            y: ["ühe aasta", "aasta", "üks aasta"],
            yy: [e + " aasta", e + " aastat"]
          };
          return t ? r[a][2] ? r[a][2] : r[a][1] : n ? r[a][0] : r[a][1]
        }
        var a = e.defineLocale("et", {
          months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
          monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
          weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
          weekdaysShort: "P_E_T_K_N_R_L".split("_"),
          weekdaysMin: "P_E_T_K_N_R_L".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
          },
          calendar: {
            sameDay: "[Täna,] LT",
            nextDay: "[Homme,] LT",
            nextWeek: "[Järgmine] dddd LT",
            lastDay: "[Eile,] LT",
            lastWeek: "[Eelmine] dddd LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s pärast",
            past: "%s tagasi",
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: "%d päeva",
            M: t,
            MM: t,
            y: t,
            yy: t
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return a
      }))
    },
    ec2e: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("en-in", {
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (e) {
            var t = e % 10,
              a = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + a
          },
          week: {
            dow: 0,
            doy: 6
          }
        });
        return t
      }))
    },
    eda5: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("si", {
          months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
          monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
          weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
          weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
          weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "a h:mm",
            LTS: "a h:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY MMMM D",
            LLL: "YYYY MMMM D, a h:mm",
            LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
          },
          calendar: {
            sameDay: "[අද] LT[ට]",
            nextDay: "[හෙට] LT[ට]",
            nextWeek: "dddd LT[ට]",
            lastDay: "[ඊයේ] LT[ට]",
            lastWeek: "[පසුගිය] dddd LT[ට]",
            sameElse: "L"
          },
          relativeTime: {
            future: "%sකින්",
            past: "%sකට පෙර",
            s: "තත්පර කිහිපය",
            ss: "තත්පර %d",
            m: "මිනිත්තුව",
            mm: "මිනිත්තු %d",
            h: "පැය",
            hh: "පැය %d",
            d: "දිනය",
            dd: "දින %d",
            M: "මාසය",
            MM: "මාස %d",
            y: "වසර",
            yy: "වසර %d"
          },
          dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
          ordinal: function (e) {
            return e + " වැනි"
          },
          meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
          isPM: function (e) {
            return "ප.ව." === e || "පස් වරු" === e
          },
          meridiem: function (e, t, a) {
            return e > 11 ? a ? "ප.ව." : "පස් වරු" : a ? "පෙ.ව." : "පෙර වරු"
          }
        });
        return t
      }))
    },
    f183: function (e, t, a) {
      var n = a("d012"),
        r = a("861d"),
        i = a("5135"),
        s = a("9bf2").f,
        o = a("90e3"),
        d = a("bb2f"),
        l = o("meta"),
        u = 0,
        c = Object.isExtensible || function () {
          return !0
        },
        _ = function (e) {
          s(e, l, {
            value: {
              objectID: "O" + ++u,
              weakData: {}
            }
          })
        },
        m = function (e, t) {
          if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
          if (!i(e, l)) {
            if (!c(e)) return "F";
            if (!t) return "E";
            _(e)
          }
          return e[l].objectID
        },
        h = function (e, t) {
          if (!i(e, l)) {
            if (!c(e)) return !0;
            if (!t) return !1;
            _(e)
          }
          return e[l].weakData
        },
        f = function (e) {
          return d && p.REQUIRED && c(e) && !i(e, l) && _(e), e
        },
        p = e.exports = {
          REQUIRED: !1,
          fastKey: m,
          getWeakData: h,
          onFreeze: f
        };
      n[l] = !0
    },
    f260: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("pt", {
          months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
          monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
          weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
          weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
          weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
          },
          calendar: {
            sameDay: "[Hoje às] LT",
            nextDay: "[Amanhã às] LT",
            nextWeek: "dddd [às] LT",
            lastDay: "[Ontem às] LT",
            lastWeek: function () {
              return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "em %s",
            past: "há %s",
            s: "segundos",
            ss: "%d segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    f3ff: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "੧",
            2: "੨",
            3: "੩",
            4: "੪",
            5: "੫",
            6: "੬",
            7: "੭",
            8: "੮",
            9: "੯",
            0: "੦"
          },
          a = {
            "੧": "1",
            "੨": "2",
            "੩": "3",
            "੪": "4",
            "੫": "5",
            "੬": "6",
            "੭": "7",
            "੮": "8",
            "੯": "9",
            "੦": "0"
          },
          n = e.defineLocale("pa-in", {
            months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
            weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            longDateFormat: {
              LT: "A h:mm ਵਜੇ",
              LTS: "A h:mm:ss ਵਜੇ",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
              LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
            },
            calendar: {
              sameDay: "[ਅਜ] LT",
              nextDay: "[ਕਲ] LT",
              nextWeek: "[ਅਗਲਾ] dddd, LT",
              lastDay: "[ਕਲ] LT",
              lastWeek: "[ਪਿਛਲੇ] dddd, LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s ਵਿੱਚ",
              past: "%s ਪਿਛਲੇ",
              s: "ਕੁਝ ਸਕਿੰਟ",
              ss: "%d ਸਕਿੰਟ",
              m: "ਇਕ ਮਿੰਟ",
              mm: "%d ਮਿੰਟ",
              h: "ਇੱਕ ਘੰਟਾ",
              hh: "%d ਘੰਟੇ",
              d: "ਇੱਕ ਦਿਨ",
              dd: "%d ਦਿਨ",
              M: "ਇੱਕ ਮਹੀਨਾ",
              MM: "%d ਮਹੀਨੇ",
              y: "ਇੱਕ ਸਾਲ",
              yy: "%d ਸਾਲ"
            },
            preparse: function (e) {
              return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, (function (e) {
                return a[e]
              }))
            },
            postformat: function (e) {
              return e.replace(/\d/g, (function (e) {
                return t[e]
              }))
            },
            meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
            meridiemHour: function (e, t) {
              return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, a) {
              return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
            },
            week: {
              dow: 0,
              doy: 6
            }
          });
        return n
      }))
    },
    f6b46: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
          a = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
          n = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
          r = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
          i = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
          s = e.defineLocale("gd", {
            months: t,
            monthsShort: a,
            monthsParseExact: !0,
            weekdays: n,
            weekdaysShort: r,
            weekdaysMin: i,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[An-diugh aig] LT",
              nextDay: "[A-màireach aig] LT",
              nextWeek: "dddd [aig] LT",
              lastDay: "[An-dè aig] LT",
              lastWeek: "dddd [seo chaidh] [aig] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "ann an %s",
              past: "bho chionn %s",
              s: "beagan diogan",
              ss: "%d diogan",
              m: "mionaid",
              mm: "%d mionaidean",
              h: "uair",
              hh: "%d uairean",
              d: "latha",
              dd: "%d latha",
              M: "mìos",
              MM: "%d mìosan",
              y: "bliadhna",
              yy: "%d bliadhna"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (e) {
              var t = 1 === e ? "d" : e % 10 === 2 ? "na" : "mh";
              return e + t
            },
            week: {
              dow: 1,
              doy: 4
            }
          });
        return s
      }))
    },
    facd: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
          a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
          n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
          r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
          i = e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (e, n) {
              return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[vandaag om] LT",
              nextDay: "[morgen om] LT",
              nextWeek: "dddd [om] LT",
              lastDay: "[gisteren om] LT",
              lastWeek: "[afgelopen] dddd [om] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "over %s",
              past: "%s geleden",
              s: "een paar seconden",
              ss: "%d seconden",
              m: "één minuut",
              mm: "%d minuten",
              h: "één uur",
              hh: "%d uur",
              d: "één dag",
              dd: "%d dagen",
              M: "één maand",
              MM: "%d maanden",
              y: "één jaar",
              yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
              return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
              dow: 1,
              doy: 4
            }
          });
        return i
      }))
    },
    fd7e: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("x-pseudo", {
          months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
          monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
          monthsParseExact: !0,
          weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
          weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
          weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
          },
          calendar: {
            sameDay: "[T~ódá~ý át] LT",
            nextDay: "[T~ómó~rró~w át] LT",
            nextWeek: "dddd [át] LT",
            lastDay: "[Ý~ést~érdá~ý át] LT",
            lastWeek: "[L~ást] dddd [át] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "í~ñ %s",
            past: "%s á~gó",
            s: "á ~féw ~sécó~ñds",
            ss: "%d s~écóñ~ds",
            m: "á ~míñ~úté",
            mm: "%d m~íñú~tés",
            h: "á~ñ hó~úr",
            hh: "%d h~óúrs",
            d: "á ~dáý",
            dd: "%d d~áýs",
            M: "á ~móñ~th",
            MM: "%d m~óñt~hs",
            y: "á ~ýéár",
            yy: "%d ý~éárs"
          },
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function (e) {
            var t = e % 10,
              a = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + a
          },
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    },
    ffff: function (e, t, a) {
      (function (e, t) {
        t(a("c1df"))
      })(0, (function (e) {
        "use strict";
        //! moment.js locale configuration
        var t = e.defineLocale("se", {
          months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
          monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
          weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
          weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
          weekdaysMin: "s_v_m_g_d_b_L".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "MMMM D. [b.] YYYY",
            LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
            LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
          },
          calendar: {
            sameDay: "[otne ti] LT",
            nextDay: "[ihttin ti] LT",
            nextWeek: "dddd [ti] LT",
            lastDay: "[ikte ti] LT",
            lastWeek: "[ovddit] dddd [ti] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s geažes",
            past: "maŋit %s",
            s: "moadde sekunddat",
            ss: "%d sekunddat",
            m: "okta minuhta",
            mm: "%d minuhtat",
            h: "okta diimmu",
            hh: "%d diimmut",
            d: "okta beaivi",
            dd: "%d beaivvit",
            M: "okta mánnu",
            MM: "%d mánut",
            y: "okta jahki",
            yy: "%d jagit"
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        });
        return t
      }))
    }
  }
]); // JavaScript Document
