// chapter01＿オオキド博士
let chapter01_story = 1;

$('#next_text_btn_01').click(function (){
        console.log(chapter01_story);
    if (chapter01_story === 1) {
        $('#conversation01').text("ポケモンの秘密はたくさんある・・・");
        chapter01_story = chapter01_story + 1;
    }else if (chapter01_story === 2){
        $('#conversation01').text("パートナーを選んでポケモンの世界へ飛び込もう！！");
        chapter01_story = chapter01_story + 1;
        console.log(chapter01_story);
    }else if (chapter01_story ===3){
        $('.cp_01_wrapper').hide();
        chapter01_story = chapter01_story + 1;
        $('.cp_02_wrapper').show();
        };
    });


//名前の入力
    //save
$("#save").on("click",function(){
    const name = $("#text_area").val();
    localStorage.setItem("myname",name);
    alert("保存しました")
    if(name===""){
        alert("名前を入力してください！！");
    }
    else {
        $('.cp_02_02_wrapper').hide();
        $('.cp_02_03_wrapper').show();
    };
});



    //clear クリックイベント
$("#clear").on("click",function(){
    localStorage.removeItem("myname");
    alert("削除しました");
    $("#text_area").val("");
});




// chapter02_ポケモン選択と名前入力
let chapter02_story = 1;
console.log(chapter02_story);
$('#next_text_btn_02').click(function (){
    if (chapter02_story === 1) {
        $('#conversation02').text("君の名前を教えてくれるかい？");
        chapter02_story = chapter02_story + 1;
        console.log(chapter02_story);
        
    }else if (chapter02_story === 2){
        $('.cp_02_01_wrapper').hide();
        $('.cp_02_02_wrapper').show();
        let yourname = localStorage.getItem("myname");
        console.log =(yourname);
        $('#conversation03').text("では、"+yourname+"君。ポケモンを選ぼう");
        chapter02_story = chapter02_story + 1;
        console.log(chapter02_story);
    }else if (chapter02_story ===3){
        // $('.cp_01_wrapper').hide();
        // $('.cp_02_wrapper').show();
        };
    });


//chaper02_終了
$('#next_text_btn_02_03').on("click",function(){
    $('cp_06_lose_wrapper').hide();
    $('cp_03_wrapper text_center').show();
});
// ポケモンの選択
    // ヒトカゲの処理
// $("#monster1").hover(
//     function(){
//     $("#monster1").css('width', '55%');},
//     function(){
//     $("#monster1").css('width', '50%');}
// );
$("#monster1").on("click",function(){
    $("#conversation_03_01").text("ヒトカゲ。君に決めた！");
    localStorage.setItem("pokemon","ヒトカゲ")
    $('.next_text_btn_03_01').show();
});
    // ゼニガメの処理
// $("#monster2").hover(
//     function(){
//     $("#monster2").css('width', '110%');},
//     // function(){
//     // $("#monster2").css('width', '50%');}
// );
$("#monster2").on("click",function(){
    $("#conversation_03_01").text("ゼニガメ。君に決めた！");
    localStorage.setItem("pokemon","ゼニガメ");
    $('.next_text_btn_03_01').show();
});
    //フシギダネの処理
// $("#monster3").hover(
//     function(){
//     $("#monster3").css('width', '55%');},
//     function(){
//     $("#monster3").css('width', '50%');}
// );
$("#monster3").on("click",function(){
    $("#conversation_03_01").text("フシギダネ。君に決めた！");
    localStorage.setItem("pokemon","フシギダネ");
    $('.next_text_btn_03_01').show();
});
// chapter03→chapter04
$("#next_text_btn_03_01").on("click",function(){
    $('.cp_03_wrapper').hide();
    $('.cp_04_01_wrapper').show();
});


// 別の画面
    // 戦いに行くを選択の場合
