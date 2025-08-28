const Policy = () => {
  return (
    <div className="flex justify-center mx-auto p-1 max-w-2xl">
      <main className="container m-1 text-gray-900 bg-white p-1">
        <h1 className="flex justify-center text-4xl p-1 mb-2 bg-blue-300">プライバシーポリシー</h1>

        <h2 className="text-2xl p-2">第1条（収集する情報）</h2>
        <p>当サービスでは、以下の情報を収集する場合があります。</p>
        <span>
          <ol className="p-1 list-disc">
            <li>デバイス情報（デバイスID、OS、モデル等）</li>
            <li>接続情報（IPアドレス、ログイン履歴、利用日時等）</li>
            <li>アプリ内で作成されるプレイヤーIDやゲームプレイデータ</li>
            <li>広告配信や利用状況分析のために、Google AdMob、Firebase Analytics 等の第三者サービスが自動的に収集する情報（広告ID等）</li>
          </ol>
        </span>
        <p>※当サービスは、氏名、住所、電話番号、マイナンバー等、ユーザーを直接特定できる個人情報を収集することはありません。</p>
        <p>※決済に関する情報は、Google Play Store、App Store等の決済システムを通じて処理され、当サービスが直接取得・保存することはありません。</p>
        <br />

        <h2 className="text-2xl p-2">第2条（利用目的）</h2>
        <p>収集した情報は、以下の目的で利用します。</p>
        <span>
          <ol className="p-1 list-disc">
            <li>当サービスの提供・運営・改善のため</li>
            <li>広告配信・利用状況の分析のため</li>
            <li>問い合わせ対応のため</li>
            <li>不正利用や利用規約違反の調査、セキュリティ対策のため</li>
            <li>サーバーメンテナンス、重要なお知らせ等の連絡のため</li>
          </ol>
        </span>
        <br />

        <h2 className="text-2xl p-2">第3条（第三者提供）</h2>
        <p>当サービスは、次の場合を除き、ユーザー情報を第三者に提供することはありません。</p>
        <span>
          <ol className="p-1 list-disc">
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要な場合であって、本人の同意を得ることが困難なとき</li>
            <li>公的機関から正当な手続きに基づき開示要請を受けたとき</li>
            <li>利用目的の達成に必要な範囲で業務を委託する場合（例：サーバー運用委託）</li>
          </ol>
        </span>
        <br />

        <h2 className="text-2xl p-2">第4条（未成年ユーザー）</h2>
        <p>当サービスは、13歳未満の児童から意図的に個人情報を収集することはありません。</p>
        <p>万一、誤って収集したことが判明した場合は速やかに削除します。</p>
        <br />

        <h2 className="text-2xl p-2">第5条（プライバシーポリシーの変更）</h2>
        <span>
          <ol className="p-1 list-disc">
            <li>本ポリシーの内容は、法令その他を除き、必要に応じて変更することがあります。</li>
            <li>重要な変更を行う場合は、アプリ内または公式サイト等でお知らせします。</li>
          </ol>
        </span>
        <br />

        <h2 className="text-2xl p-2">第6条（お問い合わせ先）</h2>
        <p>本ポリシーに関するお問い合わせは、以下のフォームよりお願いいたします。</p>
        <p>
          👉{" "}
          <a
            className="text-blue-500 hover:text-blue-400 hover-bg-gray-400"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc8-08poTvSQZ0yBYnWDEKTDO_2xI-KJfxwwKX8dQtOl4HAPw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            お問い合わせフォーム
          </a>
        </p>
        <br />

        <p>アプリ開発者：このはげーむ(KonohaGames)</p>
        <p>代表者：がずしげ(Gazushige)</p>
      </main>
    </div>
  );
};

export default Policy;
