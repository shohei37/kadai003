
//1.Save クリックイベント
$("#save").on("click",function(){
    const key = $("#key").val();
    const value = $("#memo").val();
    localStorage.setItem(key,value);
    const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>';
    $("#list").append(html);
});



//2.clear クリックイベント
$("#clear").on("click",function(){
    localStorage.clear();
    $("#list").empty();
});

//3.ページ読み込み：保存データ取得表示
for(let i=0; i<localStorage.length; i++){
    const key   = localStorage.key(i);
    const value = localStorage.getItem(key);
    const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>';
    $("#list").append(html);
}