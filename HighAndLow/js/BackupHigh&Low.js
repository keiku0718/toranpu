
        class Card{
            constructor(type , num){
                this.type = type;
                this.num = num;
            }
        }

        const cards = [];
         //images配列要素数
        let num = 0;
        //トランプ画像をimages配列に格納
        //裏面、ダイヤ、ハート、クラブ、スペード
        const images = [
            {src: 'images/playingcard_png/type-B/back.png'}
            ,{src: 'images/playingcard_png/type-B/d01.png'}
            ,{src: 'images/playingcard_png/type-B/d02.png'}
            ,{src: 'images/playingcard_png/type-B/d03.png'}
            ,{src: 'images/playingcard_png/type-B/d04.png'}
            ,{src: 'images/playingcard_png/type-B/d05.png'}
            ,{src: 'images/playingcard_png/type-B/d06.png'}
            ,{src: 'images/playingcard_png/type-B/d07.png'}
            ,{src: 'images/playingcard_png/type-B/d08.png'}
            ,{src: 'images/playingcard_png/type-B/d09.png'}
            ,{src: 'images/playingcard_png/type-B/d10.png'}
            ,{src: 'images/playingcard_png/type-B/d11.png'}
            ,{src: 'images/playingcard_png/type-B/d12.png'}
            ,{src: 'images/playingcard_png/type-B/d13.png'}
            ,{src: 'images/playingcard_png/type-B/h01.png'}
            ,{src: 'images/playingcard_png/type-B/h02.png'}
            ,{src: 'images/playingcard_png/type-B/h03.png'}
            ,{src: 'images/playingcard_png/type-B/h04.png'}
            ,{src: 'images/playingcard_png/type-B/h05.png'}
            ,{src: 'images/playingcard_png/type-B/h06.png'}
            ,{src: 'images/playingcard_png/type-B/h07.png'}
            ,{src: 'images/playingcard_png/type-B/h08.png'}
            ,{src: 'images/playingcard_png/type-B/h09.png'}
            ,{src: 'images/playingcard_png/type-B/h10.png'}
            ,{src: 'images/playingcard_png/type-B/h11.png'}
            ,{src: 'images/playingcard_png/type-B/h12.png'}
            ,{src: 'images/playingcard_png/type-B/h13.png'}
            ,{src: 'images/playingcard_png/type-B/k01.png'}
            ,{src: 'images/playingcard_png/type-B/k02.png'}
            ,{src: 'images/playingcard_png/type-B/k03.png'}
            ,{src: 'images/playingcard_png/type-B/k04.png'}
            ,{src: 'images/playingcard_png/type-B/k05.png'}
            ,{src: 'images/playingcard_png/type-B/k06.png'}
            ,{src: 'images/playingcard_png/type-B/k07.png'}
            ,{src: 'images/playingcard_png/type-B/k08.png'}
            ,{src: 'images/playingcard_png/type-B/k09.png'}
            ,{src: 'images/playingcard_png/type-B/k10.png'}
            ,{src: 'images/playingcard_png/type-B/k11.png'}
            ,{src: 'images/playingcard_png/type-B/k12.png'}
            ,{src: 'images/playingcard_png/type-B/k13.png'}
            ,{src: 'images/playingcard_png/type-B/s01.png'}
            ,{src: 'images/playingcard_png/type-B/s02.png'}
            ,{src: 'images/playingcard_png/type-B/s03.png'}
            ,{src: 'images/playingcard_png/type-B/s04.png'}
            ,{src: 'images/playingcard_png/type-B/s05.png'}
            ,{src: 'images/playingcard_png/type-B/s06.png'}
            ,{src: 'images/playingcard_png/type-B/s07.png'}
            ,{src: 'images/playingcard_png/type-B/s08.png'}
            ,{src: 'images/playingcard_png/type-B/s09.png'}
            ,{src: 'images/playingcard_png/type-B/s10.png'}
            ,{src: 'images/playingcard_png/type-B/s11.png'}
            ,{src: 'images/playingcard_png/type-B/s12.png'}
            ,{src: 'images/playingcard_png/type-B/s13.png'}
        ]; 
        //トランプマーク　ダイヤ、ハート、クラブ、スペード
        const card_type = [0 , 13 , 26 , 39];
        let count = 0;
        let but_cnt  = 0;
        let success = 0;
        let miss = 0;
        let ans_flg = false;
        //カードを並べる数
        let set_count = 2;
        const test_but = document.getElementById('test_but');
        //console.log(test_but);
        const high_but = document.getElementById('high_but');
        const low_but = document.getElementById('low_but');

         //トランプマーク毎数字生成
        for(let i = 0 ; i < card_type.length ; i++){
            for(let j = 1 ; j <= 13 ; j++){
                cards[count] = new Card(card_type[i] , j);
                //console.log(cards[count]);
                //console.log(count + ' type:' + card_type[i] + ' num:' + j);
                count++
            }
        }

        //シャッフルする関数
        function shuffle(){
            let i = cards.length;
            //ランダムな位置と入れ替え
            while(i){
                let swap_idx = Math.floor(Math.random()*i--);
                //console.log();
                let tmp = cards[i];
                cards[i] = cards[swap_idx];
                cards[swap_idx] = tmp;
            }
        }


        //tableタグでカードを並べる
        const table = document.getElementById('table');
        //console.log(table);
        count = 0;

        //1行but_cnt+1列で並べる関数
        function card_set(){           
            for(let i = 0 ; i < set_count ; i++){
                let td = document.createElement('td'); 
                let d_card = cards[count];
                //console.log(count + ":" +d_card.isOpen);
                //console.log(cards[count] + ":" + d_card);
                td.classList.add('card');
                td.setAttribute('id' , count);

                if(count !== 0){
                    //裏で表示
                    td.innerHTML = '<img src = ' + images[0].src
                                        + ' width = "90px" height = "130px">';  

                }else{
                    // console.log(d_card.type +'+'+ d_card.num +'=');
                    // console.log(d_card.type + d_card.num);
                    //始めの１枚は表で表示
                    td.innerHTML = '<img src = ' + images[d_card.type + d_card.num].src
                                        + ' width = "90px" height = "130px">'; 
                 }

                //tdタグ閉じる
                tr.appendChild(td);
                count++;
                //console.log("i = " + i + " , count = " + count);
            }    
        }   


        //カードシャッフル
        shuffle();
        //カード並べる
        let tr = document.createElement('tr'); 
        card_set();
        table.appendChild(tr);
        //console.log(count +":"+ document.getElementById(count - 1));


        //highボタンクリック時
        high_but.addEventListener('click' , () => {
            if(miss > 2) return;
            
            if(cards[count - 2].num <= cards[count - 1].num){
                success++;
                console.log("success:" + success);
                let message = document.getElementById("message");
                message.innerHTML = "おめと！！！";

            }else{
                miss++;
                console.log("falt:" + miss);
                let message = document.getElementById("message");
                message.innerHTML = "ざんねん！";

            }

            open_cards();

            if(miss === 3){
                console.log("GAME OVER\nresult\n" + success + " successful!");
                // alert("GAME OVER\n-- result --\n" + success + " successful!");
                let message = document.getElementById("message");
                message.innerHTML = "げーむ　おーばー";
                let result = document.getElementById("result");
                result.innerHTML = "きろく　" + success + "かい";


                let reset = document.getElementById("reset");
                reset.innerHTML = "<input type = \"button\" onclick = \"location.href = \'play.html\'\" value = \"Continuity\">";

            }

        })


        //lowボタンクリック時
        low_but.addEventListener('click' , () => {
            if(miss > 2) return;

            if(cards[count - 2].num <= cards[count - 1].num){
                miss++;
                console.log("falt:" + miss);
                let message = document.getElementById("message");
                message.innerHTML = "ざんねん！";

            }else{
                success++;
                console.log("success:" + success);
                let message = document.getElementById("message");
                message.innerHTML = "おめと！！！";
            }
                
            open_cards();

            if(miss === 3){
                console.log("GAME OVER\nresult\n" + success + " successful!");
                // alert("GAME OVER\n-- result --\n" + success + " successful!");
                let text = document.getElementById("message");
                text.innerHTML = "げーむ　おーばー";

                let reset = document.getElementById("reset");
                reset.innerHTML = "<input type = \"button\" onclick = \"location.href = \'play.html\'\" value = \"Continuity\">";

            }
        })


        //ボタンクリック時次のカード表示
        function open_cards(){
            but_cnt++;

            set_count = 1;
            //console.log('but_cnt = ' + but_cnt);
            //console.log(document.getElementById(count - 1));

            if(count === but_cnt + 1){
                let el = document.getElementById(count - 1); 
                //console.log(el);
                let d_card = cards[count - 1];
                // console.log(d_card.type +'+'+ d_card.num +'=');
                // console.log(d_card.type + d_card.num);
                //表で表示
                el.innerHTML = '<img src = ' + images[d_card.type + d_card.num].src
                                        + ' width = "90px" height = "130px">';
            }

            if(but_cnt % 5 == 0){
                table.appendChild(tr);
                tr = document.createElement('tr'); 
                td = document.createElement('td');
                tr.appendChild(td);
                card_set();
                table.appendChild(tr);
            }else{
                card_set();
            }

        }





/*デバック用*****************************
        //testボタンクリック時次のカード表示
        test_but.addEventListener('click' , () => {
            but_cnt++;
            set_count = 1;
            //console.log('but_cnt = ' + but_cnt);
            //console.log(document.getElementById(count - 1));

            if(count === but_cnt + 1){
                let el = document.getElementById(count - 1); 
                //console.log(el);
                let d_card = cards[count - 1];
                // console.log(d_card.type +'+'+ d_card.num +'=');
                // console.log(d_card.type + d_card.num);
                //表で表示
                el.innerHTML = '<img src = ' + images[d_card.type + d_card.num].src
                                        + ' width = "90px" height = "130px">';
            }

            if(but_cnt % 5 == 0){
                table.appendChild(tr);
                tr = document.createElement('tr'); 
                td = document.createElement('td');
                tr.appendChild(td);
                card_set();
                table.appendChild(tr);
            }else{
                card_set();
            }

        })
**************************/
