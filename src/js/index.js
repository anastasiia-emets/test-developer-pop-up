
$(document).ready(function () {
    $('body').on('click', '.header__button-close', function () {
        $(this).closest('.header').hide();
    });
    PopUpHide();
    PopUpHide2();
});
$('.name').keyup(function () {
    this.value = this.value.replace(/[^а-я0-9\.]/g, '');
});
$('.phone').keyup(function () {
    this.value = this.value.replace(/[^0-9\.]/g, '');
});
$(function () {

    var addInput = '#input1';
    var n = 1;
    $(addInput).val(n);
    $('.main-block__plus').on('click', function () {
        $(addInput).val(++n);
    })
    $('.main-block__minus').on('click', function () {
        if (n >= 1) {
            $(addInput).val(--n);
        } else {
        }
    });
});

function PopUpShow() {
    $(".b-popup").show();

}
function PopUpHide() {
    $(".b-popup").hide();
}

$('.b-popup__email').on('blur', function () {
    let email = $(this).val();
    if (email.length > 0
        && (email.match(/.+?\@.+/g) || []).length !== 1) {
        console.log('invalid');
    } else {
        console.log('valid');
    }
});

(function () {
    $('.phone').attr("placeholder", $('.b-popup__select').val())
    $('.b-popup__select').on('change', function () {
        $('.phone').attr("placeholder", $('.b-popup__select').val())
    })
})()

$(document).mouseup(function (e) {
    var container = $(".b-popup");
    if (container.has(e.target).length === 0) {
        container.hide();
    }
});

function PopUpShow2() {
    $(".b-popup").hide();
    $(".b-popup2").show()

}
function PopUpHide2() {
    $(".b-popup2").hide();
}

$('form').submit(function () {

    var name = $(".name").val();
    if (name === '') {

        return false;
    }
    else { PopUpShow2(); }


});



function Download() {
    var inputs = $("#registration :input");

    var obj = $.map(inputs, function (n, i) {
        return { Key: n.name, Value: $(n).val() };
    });
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "scene.json");
    dlAnchorElem.click();
    PopUpHide2();
}


$("form").on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        type: $(this).prop('method'),
        url: $(this).prop('action'),
        data: $(this).serialize()
    }).done(function () {
        PopUpShow2();
    });
});

function updatePrice() {
    var price = $("#input1").val();
    var total = (parseFloat(price) + 1) * 10.99;
    console.log(total);
    $("#input2").empty()
    $('#input2').append(total + '$');
};