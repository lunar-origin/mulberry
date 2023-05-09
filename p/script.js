// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "kannsei",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "kannsei",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "messageHandlers": {},
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "この実験はフルスクリーンで実行します。準備ができたら, 下の[フルスクリーンを許可する]を押して下さい。",
          "hint": "フルスクリーンを許可する",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "title": "本実験の内容",
              "content": "本実験の目的は，心をどのように捉えているか様々な角度から調査を行うことです。"
            },
            {
              "required": true,
              "type": "text",
              "title": "参加にあたって",
              "content": "実験内容は，あなたの日頃の考え方に関する質問と，心と身体に関する信念についての質問，2枚のリーフレットを見てもらった後，その内容に関する質問に答えて頂きます。最後に簡単なアンケートに答えてもらい、実験は終了します。\n所要時間は20分程度です。"
            },
            {
              "required": true,
              "type": "text",
              "content": "今回の実験によって得られたデータは全て統計的に処理すること，本実験以外の目的には使用しないこと，プライバシーの保護には十分配慮することを厳守いたします。"
            },
            {
              "required": true,
              "type": "text",
              "content": "また，実験に参加して頂くことによって発生する不利益は一切ございません。万が一，回答をやめたくなった場合は回答を中断して頂けます。その時点までに収集されたデータは本実験の終了後，速やかに破棄いたします。"
            },
            {
              "required": true,
              "type": "radio",
              "options": [
                {
                  "label": "上記の説明をよく読み，理解した上で，実験への参加に同意します。",
                  "coding": "informedConsent"
                }
              ],
              "label": "実験・調査への参加に同意頂けますか？同意頂ける方はチェックをして頂き，「次へ」ボタンを押して下さい。同意頂けない方は，ESCを押した後，ウィンドウを閉じて下さい。",
              "name": "esc"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "imformedConsent"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "事前に送られた実験依頼メールに記載してあります”割り当て番号”を入力して下さい。",
              "content": ""
            },
            {
              "required": true,
              "type": "input",
              "attributes": {
                "type": "number",
                "min": "1000",
                "max": "10000"
              },
              "help": "”割り当て番号”を半角数字で入力してください",
              "label": "割り当て番号",
              "name": "number"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "number"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "年齢を入力して下さい。"
            },
            {
              "required": true,
              "type": "input",
              "label": "年齢",
              "attributes": {
                "type": "number",
                "min": "18",
                "max": "99"
              },
              "help": "年齢を半角数字で入力してください",
              "name": "age"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "age"
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sequence",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題説明1",
                  "content": "はじめに，以下の質問項目に対して，自分の考え方や日頃の言動に最も該当するものを1つ選んで下さい。回答は選択肢のボタンをチェックすることで行って下さい。（「次へ」ボタン）"
                },
                {
                  "required": true,
                  "type": "image",
                  "width": "",
                  "height": "",
                  "src": "",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "intro1.PNG": "embedded\u002F223a7b2761516948e0e2414339a4d3d073182f30bbdaaa2a7746a4324772ba33.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "instruction_spi"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "全然当てはまらない",
                      "coding": "1"
                    },
                    {
                      "label": "あまり当てはまらない",
                      "coding": "2"
                    },
                    {
                      "label": "どちらとも言えない",
                      "coding": "3"
                    },
                    {
                      "label": "やや当てはまる",
                      "coding": "4"
                    },
                    {
                      "label": "当てはまる",
                      "coding": "5"
                    }
                  ],
                  "label": "1. 偶然とは思えない出来事を経験した。",
                  "name": "1."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　S1"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "全然当てはまらない",
                      "coding": "1"
                    },
                    {
                      "label": "あまり当てはまらない",
                      "coding": "2"
                    },
                    {
                      "label": "どちらとも言えない",
                      "coding": "3"
                    },
                    {
                      "label": "やや当てはまる",
                      "coding": "4"
                    },
                    {
                      "label": "当てはまる",
                      "coding": "5"
                    }
                  ],
                  "label": "2. 家族の幸福を願い，神仏などに祈ることがよくある。",
                  "name": "2."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　S2"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "全然当てはまらない",
                      "coding": "1"
                    },
                    {
                      "label": "あまり当てはまらない",
                      "coding": "2"
                    },
                    {
                      "label": "どちらとも言えない",
                      "coding": "3"
                    },
                    {
                      "label": "やや当てはまる",
                      "coding": "4"
                    },
                    {
                      "label": "当てはまる",
                      "coding": "5"
                    }
                  ],
                  "label": "3. 宿命や運命を感じる。",
                  "name": "3."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　S3"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "全然当てはまらない",
                      "coding": "1"
                    },
                    {
                      "label": "あまり当てはまらない",
                      "coding": "2"
                    },
                    {
                      "label": "どちらとも言えない",
                      "coding": "3"
                    },
                    {
                      "label": "やや当てはまる",
                      "coding": "4"
                    },
                    {
                      "label": "当てはまる",
                      "coding": "5"
                    }
                  ],
                  "label": "4. 天国・地獄などは迷信である。",
                  "name": "4."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　S4"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "全然当てはまらない",
                      "coding": "1"
                    },
                    {
                      "label": "あまり当てはまらない",
                      "coding": "2"
                    },
                    {
                      "label": "どちらとも言えない",
                      "coding": "3"
                    },
                    {
                      "label": "やや当てはまる",
                      "coding": "4"
                    },
                    {
                      "label": "当てはまる",
                      "coding": "5"
                    }
                  ],
                  "label": "5. 祖先や子孫と「見えない糸」でつながっている。",
                  "name": "5."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　S5"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "全然当てはまらない",
                      "coding": "1"
                    },
                    {
                      "label": "あまり当てはまらない",
                      "coding": "2"
                    },
                    {
                      "label": "どちらとも言えない",
                      "coding": "3"
                    },
                    {
                      "label": "やや当てはまる",
                      "coding": "4"
                    },
                    {
                      "label": "当てはまる",
                      "coding": "5"
                    }
                  ],
                  "label": "6. 目に見えない何かに守られている。",
                  "name": "6."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　S6"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "全然当てはまらない",
                      "coding": "1"
                    },
                    {
                      "label": "あまり当てはまらない",
                      "coding": "2"
                    },
                    {
                      "label": "どちらとも言えない",
                      "coding": "3"
                    },
                    {
                      "label": "やや当てはまる",
                      "coding": "4"
                    },
                    {
                      "label": "当てはまる",
                      "coding": "5"
                    }
                  ],
                  "label": "7. 自分は，大きな見えない力によって生かされている。",
                  "name": "7."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　S7"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sequence",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "課題説明2",
                  "content": "お疲れさまでした。\n次に，以下の質問文を読んで頂き， 最も当てはまると思う選択肢を選んで回答して下さい。回答は選択肢のボタンをチェックすることで行って下さい。（「次へ」ボタン）"
                },
                {
                  "required": true,
                  "type": "image",
                  "width": "",
                  "height": "",
                  "src": "",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "intro1.PNG": "embedded\u002F223a7b2761516948e0e2414339a4d3d073182f30bbdaaa2a7746a4324772ba33.PNG"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "instruction_dualism"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "まったくそう思わない",
                      "coding": "1"
                    },
                    {
                      "label": "あまりそう思わない",
                      "coding": "2"
                    },
                    {
                      "label": "どちらかと言えばそう思わない",
                      "coding": "3"
                    },
                    {
                      "label": "どちらでもない",
                      "coding": "4"
                    },
                    {
                      "label": "どちらかと言えばそう思う",
                      "coding": "5"
                    },
                    {
                      "label": "ややそう思う",
                      "coding": "6"
                    },
                    {
                      "label": "つよくそう思う",
                      "coding": "7"
                    }
                  ],
                  "label": "1. 心とは，脳のことである。",
                  "name": "1."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　D1"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "まったくそう思わない",
                      "coding": "1"
                    },
                    {
                      "label": "あまりそう思わない",
                      "coding": "2"
                    },
                    {
                      "label": "どちらかと言えばそう思わない",
                      "coding": "3"
                    },
                    {
                      "label": "どちらでもない",
                      "coding": "4"
                    },
                    {
                      "label": "どちらかと言えばそう思う",
                      "coding": "5"
                    },
                    {
                      "label": "ややそう思う",
                      "coding": "6"
                    },
                    {
                      "label": "つよくそう思う",
                      "coding": "7"
                    }
                  ],
                  "label": "2. 人は，魂または精神によって身体を動かしている。",
                  "name": "2."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　D2"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "まったくそう思わない",
                      "coding": "1"
                    },
                    {
                      "label": "あまりそう思わない",
                      "coding": "2"
                    },
                    {
                      "label": "どちらかと言えばそう思わない",
                      "coding": "3"
                    },
                    {
                      "label": "どちらでもない",
                      "coding": "4"
                    },
                    {
                      "label": "どちらかと言えばそう思う",
                      "coding": "5"
                    },
                    {
                      "label": "ややそう思う",
                      "coding": "6"
                    },
                    {
                      "label": "つよくそう思う",
                      "coding": "7"
                    }
                  ],
                  "label": "3. 将来的には，脳の活動を見ることで，他人が何を考えているかを正確に知ることができるようになるかもしれない。",
                  "name": "3."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　D3"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "まったくそう思わない",
                      "coding": "1"
                    },
                    {
                      "label": "あまりそう思わない",
                      "coding": "2"
                    },
                    {
                      "label": "どちらかと言えばそう思わない",
                      "coding": "3"
                    },
                    {
                      "label": "どちらでもない",
                      "coding": "4"
                    },
                    {
                      "label": "どちらかと言えばそう思う",
                      "coding": "5"
                    },
                    {
                      "label": "ややそう思う",
                      "coding": "6"
                    },
                    {
                      "label": "つよくそう思う",
                      "coding": "7"
                    }
                  ],
                  "label": "4. 心とは，魂のことである。",
                  "name": "4."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　D4"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "まったくそう思わない",
                      "coding": "1"
                    },
                    {
                      "label": "あまりそう思わない",
                      "coding": "2"
                    },
                    {
                      "label": "どちらかと言えばそう思わない",
                      "coding": "3"
                    },
                    {
                      "label": "どちらでもない",
                      "coding": "4"
                    },
                    {
                      "label": "どちらかと言えばそう思う",
                      "coding": "5"
                    },
                    {
                      "label": "ややそう思う",
                      "coding": "6"
                    },
                    {
                      "label": "つよくそう思う",
                      "coding": "7"
                    }
                  ],
                  "label": "5. 脳の変化によって，善人にも悪人にも完全に変わることができる。",
                  "name": "5."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　D5"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "まったくそう思わない",
                      "coding": "1"
                    },
                    {
                      "label": "あまりそう思わない",
                      "coding": "2"
                    },
                    {
                      "label": "どちらかと言えばそう思わない",
                      "coding": "3"
                    },
                    {
                      "label": "どちらでもない",
                      "coding": "4"
                    },
                    {
                      "label": "どちらかと言えばそう思う",
                      "coding": "5"
                    },
                    {
                      "label": "ややそう思う",
                      "coding": "6"
                    },
                    {
                      "label": "つよくそう思う",
                      "coding": "7"
                    }
                  ],
                  "label": "6. 本当の自分とは，脳ではなく，その人の魂によって決定される。",
                  "name": "6."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　D6"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "まったくそう思わない",
                      "coding": "1"
                    },
                    {
                      "label": "あまりそう思わない",
                      "coding": "2"
                    },
                    {
                      "label": "どちらかと言えばそう思わない",
                      "coding": "3"
                    },
                    {
                      "label": "どちらでもない",
                      "coding": "4"
                    },
                    {
                      "label": "どちらかと言えばそう思う",
                      "coding": "5"
                    },
                    {
                      "label": "ややそう思う",
                      "coding": "6"
                    },
                    {
                      "label": "つよくそう思う",
                      "coding": "7"
                    }
                  ],
                  "label": "7. 人の思考，性格，好み，選択はすべて脳機能の産物でしかない。",
                  "name": "7."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　D7"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "まったくそう思わない",
                      "coding": "1"
                    },
                    {
                      "label": "あまりそう思わない",
                      "coding": "2"
                    },
                    {
                      "label": "どちらかと言えばそう思わない",
                      "coding": "3"
                    },
                    {
                      "label": "どちらでもない",
                      "coding": "4"
                    },
                    {
                      "label": "どちらかと言えばそう思う",
                      "coding": "5"
                    },
                    {
                      "label": "ややそう思う",
                      "coding": "6"
                    },
                    {
                      "label": "つよくそう思う",
                      "coding": "7"
                    }
                  ],
                  "label": "8. 科学で説明できない心の側面は，魂で説明するのが最も適切だ。",
                  "name": "8."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　D8"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "まったくそう思わない",
                      "coding": "1"
                    },
                    {
                      "label": "あまりそう思わない",
                      "coding": "2"
                    },
                    {
                      "label": "どちらかと言えばそう思わない",
                      "coding": "3"
                    },
                    {
                      "label": "どちらでもない",
                      "coding": "4"
                    },
                    {
                      "label": "どちらかと言えばそう思う",
                      "coding": "5"
                    },
                    {
                      "label": "ややそう思う",
                      "coding": "6"
                    },
                    {
                      "label": "つよくそう思う",
                      "coding": "7"
                    }
                  ],
                  "label": "9. 将来は，脳の活動を見れば，その人の性格が分かるようになるかもしれない。",
                  "name": "9."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　D9"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "まったくそう思わない",
                      "coding": "1"
                    },
                    {
                      "label": "あまりそう思わない",
                      "coding": "2"
                    },
                    {
                      "label": "どちらかと言えばそう思わない",
                      "coding": "3"
                    },
                    {
                      "label": "どちらでもない",
                      "coding": "4"
                    },
                    {
                      "label": "どちらかと言えばそう思う",
                      "coding": "5"
                    },
                    {
                      "label": "ややそう思う",
                      "coding": "6"
                    },
                    {
                      "label": "つよくそう思う",
                      "coding": "7"
                    }
                  ],
                  "label": "10. 人の魂は死後も生き続ける。",
                  "name": "10."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　D10"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sequence",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "お疲れさまでした。\n次ページでは画面の左右に，文字フォントの異なる２枚のリーフレットが提示されます。 \nその後，以下の質問をしますので，リーフレットをよく読んで下さい。",
                  "title": "課題説明3"
                },
                {
                  "required": true,
                  "type": "text",
                  "title": "1. リーフレットのタイトルについて，空欄に当てはまるものを選んで下さい。",
                  "content": ""
                },
                {
                  "required": true,
                  "type": "text",
                  "title": " 「（　　）疲れていませんか？」",
                  "content": ""
                },
                {
                  "required": true,
                  "type": "text",
                  "title": " 2. 内容とマッチした文字フォントは，左右どちらのリーフレットだと感じましたか。",
                  "content": "それでは， 書かれている内容をイメージしながらよく読んで下さい。（「次へ」ボタン）"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "instruction_primeH1"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 300,
                  "top": 762,
                  "angle": 0,
                  "width": 60.5,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "text",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 275,
                  "top": 625,
                  "angle": 0,
                  "width": 232.47,
                  "height": 34.17,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "読み終えたらEnterを押してください\n※元のページには戻れません",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "14",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 275,
                  "top": 262,
                  "angle": 0,
                  "width": 190.14,
                  "height": 29.29,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "読み終えたらEnterで次に進みます\n※元のページには戻れません",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "12",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "image",
                  "left": -200,
                  "top": -25,
                  "angle": 0,
                  "width": 384,
                  "height": "350",
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"heartC.png\"] }"
                },
                {
                  "type": "image",
                  "left": 200,
                  "top": -25,
                  "angle": 0,
                  "width": 384,
                  "height": 345.6,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"heartM.png\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "大卒就職内定率　図.jpg": "embedded\u002F2f06ad83a895f565bb504bb3e1912a6cae68e13ece8eca282fb1d428aaf6ae3a.jpg",
                "統制プライム条件.png": "embedded\u002F97494ecedbd1159e89d7915e6e4cd418f46a94f5c9727b5d66fac9983b31cdf2.png",
                "brain1.png": "embedded\u002F295c80a1fe08bf7a7a0779cb75119d0d579ad4bc94a60bfc5371b1773cc8d4bc.png",
                "brainM.png": "embedded\u002F291fedc1cb74ba4afe8f8b8dc0361293d3ddd0317b8ab1b6c4bab7e29c79af37.png",
                "brainC.png": "embedded\u002Fc03fce11be622cc1b6e1141756d649a497bef14f747df734ee9cf1887a7d8efc.png",
                "heartC.png": "embedded\u002Fb62a8f131188595bbd65d808a1c85d7396575c6b288601e36d733758b9f78525.png",
                "heartM.png": "embedded\u002F1356dec4793636b01be30a650390f814c7fc37ed0d005164c98bd443f252b7e1.png"
              },
              "responses": {
                "keypress(Enter)": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Prime-H1"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "label": "1. リーフレットのタイトルについて，空欄に当てはまるものを選んで下さい。「（　　）疲れていませんか？」",
                  "options": [
                    {
                      "label": "脳",
                      "coding": "NG"
                    },
                    {
                      "label": "心",
                      "coding": "OK"
                    }
                  ],
                  "name": "1."
                },
                {
                  "required": true,
                  "type": "radio",
                  "label": " 2. 内容とマッチした文字フォントは，左右どちらのリーフレットだと感じましたか。",
                  "options": [
                    {
                      "label": "左",
                      "coding": "Kureyon"
                    },
                    {
                      "label": "右",
                      "coding": "Gosikku"
                    }
                  ],
                  "name": "2."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {
                "intro1.PNG": "embedded\u002F223a7b2761516948e0e2414339a4d3d073182f30bbdaaa2a7746a4324772ba33.PNG",
                "introduction F J.png": "embedded\u002F1f95975ddc6b4ca8e7bfd93cfc83c4bd879601fae0a279849cf5691462de6726.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Q"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sequence",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "お疲れさまでした。\n次ページでは簡単なアンケートに答えて頂きます。（「次へ」ボタン）",
                  "title": "アンケート"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "instruction_raidan"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "あなたが気分や対人関係について，深く悩んだり落ち込んだりした時を想像して下さい。次の項目にどの程度当てはまりますか。（「次へ」ボタン）"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "setumei"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "そう思わない",
                      "coding": "1"
                    },
                    {
                      "label": "あまりそう思わない",
                      "coding": "2"
                    },
                    {
                      "label": "少しそう思う",
                      "coding": "3"
                    },
                    {
                      "label": "そう思う",
                      "coding": "4"
                    }
                  ],
                  "label": "1. もし私が長期間，そのような状況で動揺していたら，専門家の助けを求めるかもしれない。",
                  "name": "1."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　B1"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "そう思わない",
                      "coding": "1"
                    },
                    {
                      "label": "あまりそう思わない",
                      "coding": "2"
                    },
                    {
                      "label": "少しそう思う",
                      "coding": "3"
                    },
                    {
                      "label": "そう思う",
                      "coding": "4"
                    }
                  ],
                  "label": "2. もし私が今，そのような重い葛藤を抱えていたら，専門家に相談することで楽になるだろうと信じている。",
                  "name": "2."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　B2"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "そう思わない",
                      "coding": "1"
                    },
                    {
                      "label": "あまりそう思わない",
                      "coding": "2"
                    },
                    {
                      "label": "少しそう思う",
                      "coding": "3"
                    },
                    {
                      "label": "そう思う",
                      "coding": "4"
                    }
                  ],
                  "label": "3. 私は将来，専門家に相談に行きたいと思う。",
                  "name": "3."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　B3"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "そう思わない",
                      "coding": "1"
                    },
                    {
                      "label": "あまりそう思わない",
                      "coding": "2"
                    },
                    {
                      "label": "少しそう思う",
                      "coding": "3"
                    },
                    {
                      "label": "そう思う",
                      "coding": "4"
                    }
                  ],
                  "label": "4. もし私がそのような状況にいたら，1人でそれを解決しようとせず，専門家と解決する方がいいと思う。",
                  "name": "4.-1"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　B4"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "label": "そう思わない",
                      "coding": "1"
                    },
                    {
                      "label": "あまりそう思わない",
                      "coding": "2"
                    },
                    {
                      "label": "少しそう思う",
                      "coding": "3"
                    },
                    {
                      "label": "そう思う",
                      "coding": "4"
                    }
                  ],
                  "label": "5. もし私がそのような状況にいたら，まずは専門家に相談しようと思う。",
                  "name": "5."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Questionnaire　B5"
            }
          ]
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "title": "",
              "content": "お疲れさまでした。本実験では，データをダウンロードし，(メールにて提出し)て頂いて，完了となります。\n次のページに，提出方法を記載しています。「提出方法へ」をクリックして下さい。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "提出方法へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Fin"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "本実験では，データをダウンロードし，実験実施者のメールアドレスまで添付・送信して頂いて，完了となります。\n",
              "title": "調査の完了"
            },
            {
              "required": true,
              "type": "text",
              "title": "提出方法について",
              "content": "ファイルの提出方法・データの保存に関する注意事項については，実験依頼メール（本実験URL記載メール）に記載してあります。お手数ですが，そちらをご参照の上，ファイルの提出をお願いいたします。"
            },
            {
              "required": true,
              "type": "text",
              "title": "ダウンロード方法",
              "content": "次のページにて、ダウンロードをすることができます。画面下にある「ダウンロードページへ」をクリックしてください。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "ダウンロードページへ →",
          "submitButtonPosition": "right",
          "files": {
            "S-inst.jpg": "embedded\u002F6514cc2d1bd65fc82862042d3e049ff7700c33ad5bf3a4c78c7321619790c355.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Download1"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "画面下にある「ダウンロードする」をクリックすると，画面上方に「Download data」というタグが表示されます。この「Download data」をクリックすると，csvファイルを保存できるようになりますので，保存して下さい。",
              "title": "ダウンロード方法"
            },
            {
              "required": true,
              "type": "image",
              "width": "",
              "height": "",
              "src": "${ this.files[\"プレゼンテーション1.jpg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "text",
              "content": "データのダウンロードが完了しましたら，×印をクリックし，本実験ページを終了して下さい。ご協力ありがとうございました。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "ダウンロードする →",
          "submitButtonPosition": "right",
          "files": {
            "プレゼンテーション1.jpg": "embedded\u002F869eb43127f5bb9b5fb4966f6047b6b4f4b6db4d4e201df7dce5b171f8939299.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Download"
        }
      ]
    }
  ]
})

// Let's go!
study.run()