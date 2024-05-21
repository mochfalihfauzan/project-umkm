// ini id dari butoon
var btnAlatTulis = $("#semuaAlatTulisBtn");
var btnSemuaSendal = $("#semuaSendalBtn");
var btnBonusPromo = $("#bonusPromoBtn");

//ini id dari sebuah gambar
var semuaAlatTulisView = $("#semuaAlatTulisView");
var diskonPromoView = $("#promoDiskon");
var bonusPromoView = $("#promoBonus");

//utk mnyembunyikan item 
diskonPromoView.hide();
bonusPromoView.hide();

function showAlatTulis() {
    btnSemuaSendal.removeClass('aktif');
    btnBonusPromo.removeClass('aktif');
    btnAlatTulis.addClass('aktif');

    semuaAlatTulisView.show(1000);
    diskonPromoView.hide(1000);
    bonusPromoView.hide(1000);
}

function showSendal() {
    btnAlatTulis.removeClass('aktif');
    btnBonusPromo.removeClass('aktif');
    btnSemuaSendal.addClass('aktif');

    semuaAlatTulisView.hide(1000);
    bonusPromoView.hide(1000);
    diskonPromoView.show(1000);
}

function showTambahan() {
    btnAlatTulis.removeClass('aktif');
    btnSemuaSendal.removeClass('aktif');
    btnBonusPromo.addClass('aktif');

    semuaAlatTulisView.hide(1000);
    diskonPromoView.hide(1000);
    bonusPromoView.show(1000);
}


// typed .js
var typed = new Typed(".auto-input", {
    strings: ["Kaki Kreatif dan Coretan Kreatif"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})





function openWhatsApp() {
    window.location.href =
        "https://wa.me/62895414587000?text=saya ingin bertanya terkait produk"
}