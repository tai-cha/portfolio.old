export default {
  _list: [
    {
      id: 'toylabo-site',
      title: 'おもちゃLABO Webサイト',
      image: 'toylabo.png',
      url: null,
      description: "制作サークルおもちゃLABOのWEBサイト制作をしました。\n" +
        "初めて作ったサイトでしたが、カルーセルを導入したり、活動ログをjsonで記述できるようにしたりする中でHTMLやJSについて学びを得ました。\n" +
        "現在はサイトの公開はされていません。"
    }
  ],
  get(){
    return this._list
  }
}
