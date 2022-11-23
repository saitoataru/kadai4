$(".battle").on("click",function(){
    $('.cp_04_01_wrapper').hide();
    $('.cp_05_01_wrapper').show();
    let pokemon_name = localStorage.getItem("pokemon");
    $('.pokemonname').text(pokemon_name)
    console.log(pokemon_name)
    if(pokemon_name==="ヒトカゲ"){
        $(".yourpic").attr('src',"img/monster1.jpeg");
    }else if(pokemon_name==="ゼニガメ"){
        $(".yourpic").attr('src',"img/monster2.jpeg");
    }else if(pokemon_name==="フシギダネ"){
        $(".yourpic").attr('src',"img/monster3.jpeg");
}});

//ステージの進捗具合を制御
// let currentStage =1;

// console.log(pokemon_name);

// //プレーヤーの体力
let mymonsterHp=100;
let enemyHp=100;
//モンスターの種類を定義
// let pokemon_name = localStorage.getItem("pokemon");

// const pokemon_name = localStorage.getItem("pokemon");
//monsterの行動３パターン（攻撃・回復・XX）
$("#attack_click_1").click(function(){
    attackModel();
})
$("#attack_click_2").click(function(){
    recoveryModel();
})
$("#attack_click_3").click(function(){
    attackModel();
})

//mymonster_攻撃行動
function attackModel(){
    let pokemon_name = localStorage.getItem("pokemon");

    //ランダム数字=攻撃係数
    let a = Math.floor(Math.random()*5);
    // console.log(a);
    //攻撃の変数を入れておく
    // ヒトカゲの技
    let hitokage_waza=[
        {monstername:"ヒトカゲ",wazaname:"かえんほうしゃ",attack_val:30,pic:"img/monster1_waza1.jpeg"},
        {monstername:"ヒトカゲ",wazaname:"たいあたり",attack_val:20,pic:"img/monster1_waza2.jpeg"},
        {monstername:"ヒトカゲ",wazaname:"火の粉",attack_val:10,pic:"img/monster1_waza3.jpeg"},
        {monstername:"ヒトカゲ",wazaname:"ジタバタ",attack_val:5,pic:"img/monster1_waza4.jpeg"},
        {monstername:"ヒトカゲ",wazaname:"ミス",attack_val:0,pic:"img/monster1_waza4.jpeg"},
        ];
    // console.log(hitokage_waza[1].wazaname);
    // フシギダネの技
    let fushigidane_waza=[
        {monstername:"フシギダネ",wazaname:"たいあたり",attack_val:30,pic:"img/monster2_waza1.jpeg"},
        {monstername:"フシギダネ",wazaname:"葉っぱカッター",attack_val:20,pic:"img/monster2_waza2.jpeg"},
        {monstername:"フシギダネ",wazaname:"技3",attack_val:10,pic:"img/monster2_waza3.jpeg"},
        {monstername:"フシギダネ",wazaname:"技4",attack_val:5,pic:"img/monster2_waza4.jpeg"},
        {monstername:"フシギダネ",wazaname:"ミス",attack_val:0,pic:"img/monster2_waza4.jpeg"},
        ];
    // ゼニガメの技
    let zenigame_waza=[
        {monstername:"ゼニガメ",wazaname:"バブル",attack_val:30,pic:"img/monster3_waza1.jpeg"},
        {monstername:"ゼニガメ",wazaname:"波乗り",attack_val:20,pic:"img/monster3_waza2.jpeg"},
        {monstername:"ゼニガメ",wazaname:"泡でっぽう",attack_val:10,pic:"img/monster3_waza3.jpeg"},
        {monstername:"ゼニガメ",wazaname:"ジタバタ",attack_val:5,pic:"img/monster3_waza4.jpeg"},
        {monstername:"ゼニガメ",wazaname:"ミス",attack_val:0,pic:"img/monster3_waza4.jpeg"},
        ];
    if(a===1){
        if(pokemon_name==="ヒトカゲ"){
            enemyHp = enemyHp - hitokage_waza[a].attack_val;
            console.log(`ヒトカゲが${hitokage_waza[a].wazaname}を繰り出した!${hitokage_waza[a].attack_val}のダメージを与えた`)
            $(".comment_your").text(`ヒトカゲが${hitokage_waza[a].wazaname}を繰り出した!${hitokage_waza[a].attack_val}のダメージを与えた`);
            $(".enemyHp").text(enemyHp);
            console.log('src',hitokage_waza[a].pic);
            $(".yourpic").attr('src',hitokage_waza[a].pic);
            enemy_action();
        }else if(pokemon_name==="フシギダネ"){
            enemyHp = enemyHp - fushigidane_waza[a].attack_val;
            console.log(mymonsterHp)
            console.log(`フシギダネが${fushigidane_waza[a].wazaname}を繰り出した!${fushigidane_waza[a].attack_val}のダメージを与えた`)
            $(".comment_your").text(`フシギダネが${fushigidane_waza[a].wazaname}を繰り出した!${fushigidane_waza[a].attack_val}のダメージを与えた`);
            $(".enemyHp").text(enemyHp);
            enemy_action();
        }else if(pokemon_name==="ゼニガメ"){
            enemyHp = enemyHp - zenigame_waza[a].attack_val;
            console.log(`ゼニガメが${zenigame_waza[a].wazaname}を繰り出した!${zenigame_waza[a].attack_val}のダメージを与えた`)
            $(".comment_your").text(`ゼニガメが${zenigame_waza[a].wazaname}を繰り出した!${zenigame_waza[a].attack_val}のダメージを与えた`);
            $(".yourpic").attr('src',zenigame_waza[a].pic);
            $(".enemyHp").text(enemyHp);
            enemy_action();
        }
    }else if(a===2){
        if(pokemon_name==="ヒトカゲ"){
            enemyHp = enemyHp - hitokage_waza[a].attack_val;
            console.log(`ヒトカゲが${hitokage_waza[a].wazaname}を繰り出した!${hitokage_waza[a].attack_val}のダメージを与えた`)
            $(".comment_your").text(`ヒトカゲが${hitokage_waza[a].wazaname}を繰り出した!${hitokage_waza[a].attack_val}のダメージを与えた`);
            $(".yourpic").attr('src',hitokage_waza[a].pic);
            $(".enemyHp").text(enemyHp);
            enemy_action();
        }else if(pokemon_name==="フシギダネ"){
            enemyHp = enemyHp - fushigidane_waza[a].attack_val;
            console.log(`フシギダネが${fushigidane_waza[a].wazaname}を繰り出した!${fushigidane_waza[a].attack_val}のダメージを与えた`)
            $(".comment_your").text(`フシギダネが${fushigidane_waza[a].wazaname}を繰り出した!${fushigidane_waza[a].attack_val}のダメージを与えた`);
            $(".yourpic").attr('src',fushigidane_waza[a].pic);
            $(".enemyHp").text(enemyHp);
            enemy_action();
        }else if(pokemon_name==="ゼニガメ"){
            enemyHp = enemyHp - zenigame_waza[a].attack_val;
            console.log(`ゼニガメが${zenigame_waza[a].wazaname}を繰り出した!${zenigame_waza[a].attack_val}のダメージを与えた`)
            $(".comment_your").text(`ゼニガメが${zenigame_waza[a].wazaname}を繰り出した!${zenigame_waza[a].attack_val}のダメージを与えた`);
            $(".yourpic").attr('src',zenigame_waza[a].pic);
            $(".enemyHp").text(enemyHp);
            enemy_action();
        }
    }else if(a===3){
        if(pokemon_name==="ヒトカゲ"){
            enemyHp = enemyHp - hitokage_waza[a].attack_val;
            console.log(`ヒトカゲが${hitokage_waza[a].wazaname}を繰り出した!${hitokage_waza[a].attack_val}のダメージを与えた`)
            $(".comment_your").text(`ヒトカゲが${hitokage_waza[a].wazaname}を繰り出した!${hitokage_waza[a].attack_val}のダメージを与えた`);
            $(".yourpic").attr('src',hitokage_waza[a].pic);
            $(".enemyHp").text(enemyHp);
            enemy_action();
        }else if(pokemon_name==="フシギダネ"){
            enemyHp = enemyHp - fushigidane_waza[a].attack_val;
            console.log(`フシギダネが${fushigidane_waza[a].wazaname}を繰り出した!${fushigidane_waza[a].attack_val}のダメージを与えた`)
            $(".comment_your").text(`フシギダネが${hitokage_waza[a].wazaname}を繰り出した!${hitokage_waza[a].attack_val}のダメージを与えた`);
            $(".yourpic").attr('src',fushigidane_waza[a].pic);
            $(".enemyHp").text(enemyHp);
            enemy_action();
        }else if(pokemon_name==="ゼニガメ"){
            enemyHp = enemyHp - zenigame_waza[a].attack_val;
            console.log(`ゼニガメが${zenigame_waza[a].wazaname}を繰り出した!${zenigame_waza[a].attack_val}のダメージを与えた`)
            $(".comment_your").text(`ゼニガメが${hitokage_waza[a].wazaname}を繰り出した!${hitokage_waza[a].attack_val}のダメージを与えた`);
            $(".yourpic").attr('src',zenigame_waza[a].pic);
            $(".enemyHp").text(enemyHp);
            enemy_action();
        }
    }else if(a===4){
        if(pokemon_name==="ヒトカゲ"){
            enemyHp = enemyHp - hitokage_waza[a].attack_val;
            console.log(`ヒトカゲが${hitokage_waza[a].wazaname}を繰り出した!${hitokage_waza[a].attack_val}のダメージを与えた`)
            $(".comment_your").text(`ヒトカゲが${hitokage_waza[a].wazaname}を繰り出した!${hitokage_waza[a].attack_val}のダメージを与えた`);
            $(".yourpic").attr('src',hitokage_waza[a].pic);
            $(".enemyHp").text(enemyHp);
            enemy_action();
        }else if(pokemon_name==="フシギダネ"){
            enemyHp = enemyHp - fushigidane_waza[a].attack_val;
            console.log(`フシギダネが${fushigidane_waza[a].wazaname}を繰り出した!${fushigidane_waza[a].attack_val}のダメージを与えた`)
            $(".comment_your").text(`フシギダネが${fushigidane_waza[a].wazaname}を繰り出した!${hitokage_waza[a].attack_val}のダメージを与えた`);
            $(".yourpic").attr('src',fushigidane_waza[a].pic);
            $(".enemyHp").text(enemyHp);
            enemy_action();
        }else if(pokemon_name==="ゼニガメ"){
            enemyHp = enemyHp - zenigame_waza[a].attack_val;
            console.log(`ゼニガメが${zenigame_waza[a].wazaname}を繰り出した!${zenigame_waza[a].attack_val}のダメージを与えた`)
            $(".comment_your").text(`ゼニガメが${zenigame_waza[a].wazaname}を繰り出した!${hitokage_waza[a].attack_val}のダメージを与えた`);
            $(".yourpic").attr('src',zenigame_waza[a].pic);
            $(".enemyHp").text(enemyHp);
            enemy_action();
        }
    }else if(a===5){
        if(pokemon_name==="ヒトカゲ"){
            enemyHp = enemyHp - hitokage_waza[a].attack_val;
            console.log(`ヒトカゲが${hitokage_waza[a].wazaname}を繰り出した!${hitokage_waza[a].attack_val}のダメージを与えた`)
            $(".comment_your").text(`ヒトカゲが${hitokage_waza[a].wazaname}を繰り出した!${hitokage_waza[a].attack_val}のダメージを与えた`);
            $(".yourpic").attr('src',hitokage_waza[a].pic);
            $(".enemyHp").text(enemyHp);
            enemy_action();
        }else if(pokemon_name==="フシギダネ"){
            enemyHp = enemyHp - fushigidane_waza[a].attack_val;
            console.log(`フシギダネが${fushigidane_waza[a].wazaname}を繰り出した!${fushigidane_waza[a].attack_val}のダメージを与えた`)
            $(".comment_your").text(`フシギダネが${hitokage_waza[a].wazaname}を繰り出した!${hitokage_waza[a].attack_val}のダメージを与えた`);
            $(".yourpic").attr('src',fushigidane_waza[a].pic);
            $(".enemyHp").text(enemyHp);
            enemy_action();
        }else if(pokemon_name==="ゼニガメ"){
            enemyHp = enemyHp - zenigame_waza[a].attack_val;
            console.log(`ゼニガメが${zenigame_waza[a].wazaname}を繰り出した!${zenigame_waza[a].attack_val}のダメージを与えた`)
            $(".comment_your").text(`ゼニガメが${hitokage_waza[a].wazaname}を繰り出した!${hitokage_waza[a].attack_val}のダメージを与えた`);
            $(".yourpic").attr('src',zenigame_waza[a].pic);
            $(".enemyHp").text(enemyHp);
            enemy_action();
        }
    }
        validationHp();
        result_battle();
}

// 敵のアクション
function enemy_action(){
    let b = Math.floor(Math.random()*5);
    // varは使わない　let
    let enemy = [
        {wazaname:"回復",attack_val:30,pic:"img/enemy_1.jpeg"},
        {wazaname:"体あたり",attack_val:30,pic:"img/enemy_waza_1.jpeg"},
        {wazaname:"頭突き",attack_val:30,pic:"img/enemy_waza_2.jpeg"},
        {wazaname:"掻き乱す",attack_val:10,pic:"img/enemy_waza_3.jpeg"},
        {wazaname:"いあいぎり",attack_val:20,pic:"img/enemy_waza_3.jpeg"},
    ]
    if(b===1){
        if(enemyHp>=100){
            
            // 確認用console
            console.log("もう回復できない");
            $(".comment_enemy").text("回復を選択肢したが、もう回復できない");
            return enemyHp=100;
        }else if(enemy<100){
            // 確認用console
            console.log("敵は"+enemyHp);
            enemyHp = enemyHp + enemy[b].attack_val;
            // バトルコメント
            $(".comment_enemy").text(`敵の回復。${enemy[b].attack_val}"pt回復した`);
            // HP表示
            $(".enemyHp").text(enemyHp);
        }
    }else if(b===2){
        mymonsterHp = mymonsterHp - enemy[b].attack_val;
        console.log(`敵が${enemy[b].wazaname}を繰り出した!${enemy[b].attack_val}のダメージを与えた`)
        $(".comment_enemy").text(`敵が${enemy[b].wazaname}を繰り出した!${enemy[b].attack_val}のダメージを与えた`);
        // HP表示
        $(".yourHp").text(mymonsterHp);
        $(".enemypic").attr('src',enemy[b].pic);
    }else if(b===3){
        mymonsterHp = mymonsterHp - enemy[b].attack_val;
        console.log(`敵が${enemy[b].wazaname}を繰り出した!${enemy[b].attack_val}のダメージを与えた`)
        $(".comment_enemy").text(`敵が${enemy[b].wazaname}を繰り出した!${enemy[b].attack_val}のダメージを与えた`);
        // HP表示
        $(".yourHp").text(mymonsterHp);
        $(".enemypic").attr('src',enemy[b].pic);
    }else if(b===4){
        mymonsterHp = mymonsterHp - enemy[b].attack_val;
        console.log(`敵が${enemy[b].wazaname}を繰り出した!${enemy[b].attack_val}のダメージを与えた`)
        $(".comment_enemy").text(`敵が${enemy[b].wazaname}を繰り出した!${enemy[b].attack_val}のダメージを与えた`);
        // HP表示
        $(".yourHp").text(mymonsterHp);
        $(".enemypic").attr('src',enemy[b].pic);
    }else if(b===5){
        mymonsterHp = mymonsterHp - enemy[b].attack_val;
        console.log(`敵が${enemy[b].wazaname}を繰り出した!${enemy[b].attack_val}のダメージを与えた`)
        $(".comment_enemy").text(`敵が${enemy[b].wazaname}を繰り出した!${enemy[b].attack_val}のダメージを与えた`);
        // HP表示
        $(".yourHp").text(mymonsterHp);
        $(".enemypic").attr('src',enemy[b].pic);
    }    
    validationHp();
}

function validationJudge(){
    if(playerHp<=0){
        console.log('負け');
        loseRoute();
    } else if(mymonsterHp<=0){

    }
}
// 勝負結果
///命名規則を統一してやってみる
function result_battle(){
    if(mymonsterHp <= 0){
        console.log("負け");
        $(".cp_05_01_wrapper").fadeOut(1000);
        $(".cp_06_lose_wrapper").fadeIn(500);
    } else if(enemyHp <= 0){
        console.log("勝ち");
        $(".cp_05_01_wrapper").fadeOut(1000);
        $(".cp_06_win_wrapper").fadeIn(500);
    }else if(mymonsterHp<=0&&enemyHp<=0){
        console.log("引き分け");
    }
}


// HP
function validationHp () {
        $('#player_current_hp03').css('width', mymonsterHp + '%');
        $('#applicant_current_hp03').css('width', enemyHp+ '%'); 
};
//btn押したら
$('#btn_win').on("click",function(){
    console.log("ok");
    $('.cp_06_win_wrapper').hide();
    $('.cp_03_wrapper').show();
    return mymonsterHp=100;
    return enemyHp=100;

});
$('#btn_lose').on("click",function(){
    console.log("ok");
    $('.cp_06_lose_wrapper').hide();
    $('.cp_03_wrapper').show();
    return mymonsterHp=100;
    return enemyHp=100;
});