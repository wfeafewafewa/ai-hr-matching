// pages/api/ai-matching-real.js
export default async function handler(req, res) {
    console.log('🚀 AI分析API呼び出し開始');
    console.log('Method:', req.method);
    console.log('Body:', req.body);
  
    if (req.method !== 'POST') {
      console.log('❌ 不正なメソッド');
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    try {
      // 環境変数確認
      console.log('🔑 APIキー確認:', process.env.OPENAI_API_KEY ? '設定済み' : '未設定');
      
      if (!process.env.OPENAI_API_KEY) {
        console.log('❌ OpenAI APIキーが設定されていません');
        return res.status(500).json({
          success: false,
          error: 'OpenAI APIキーが設定されていません。.env.localファイルを確認してください。'
        });
      }
  
      const { candidate, job } = req.body;
      console.log('📝 候補者:', candidate?.name);
      console.log('🏢 求人:', job?.title);
  
      // OpenAI SDKの動的インポート（エラー回避）
      let openai;
      try {
        const OpenAI = (await import('openai')).default;
        openai = new OpenAI({
          apiKey: process.env.OPENAI_API_KEY,
        });
        console.log('✅ OpenAI SDK初期化成功');
      } catch (importError) {
        console.log('❌ OpenAI SDK初期化エラー:', importError.message);
        return res.status(500).json({
          success: false,
          error: 'OpenAI SDKの初期化に失敗しました。npm install openaiを実行してください。'
        });
      }
  
      const prompt = `
  あなたは優秀な人材マッチングAIアナリストです。以下の候補者と求人のマッチング分析を行ってください。
  
  【候補者情報】
  名前: ${candidate.name || '未設定'}
  スキル: ${candidate.skills?.join(', ') || '未設定'}
  経験年数: ${candidate.experience || '未設定'}年
  
  【求人情報】
  職種: ${job.title || '未設定'}
  必須スキル: ${job.requiredSkills?.join(', ') || '未設定'}
  
  以下のJSON形式で回答してください：
  {
    "matchScore": 85,
    "strengths": [
      "React/Next.jsの実務経験が豊富",
      "チームリーダー経験がある"
    ],
    "concerns": [
      "AWS経験がやや不足"
    ],
    "recommendation": "この候補者は技術スキルが高く、即戦力として活躍できると考えられます。",
    "growthPotential": "非常に高い",
    "cultureFit": "チーム協調性があり、企業文化にマッチする可能性が高い",
    "nextSteps": [
      "技術面接でスキル確認",
      "過去のプロジェクト事例の詳細ヒアリング"
    ]
  }
  `;
  
      console.log('🤖 OpenAI API呼び出し開始');
      
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "あなたは経験豊富な人材マッチング専門家です。必ずJSON形式で回答してください。"
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 1500,
      });
  
      console.log('✅ OpenAI API呼び出し成功');
      const aiResponse = completion.choices[0].message.content;
      console.log('🤖 AI回答:', aiResponse);
  
      // JSONパース処理
      let parsedResponse;
      try {
        // JSON部分のみを抽出
        const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          parsedResponse = JSON.parse(jsonMatch[0]);
        } else {
          parsedResponse = JSON.parse(aiResponse);
        }
        console.log('✅ JSON解析成功:', parsedResponse);
      } catch (parseError) {
        console.log('❌ JSON解析エラー:', parseError.message);
        console.log('原文:', aiResponse);
        
        // フォールバック
        parsedResponse = {
          matchScore: 75,
          strengths: ["技術スキルが適合", "経験年数が要件を満たしている"],
          concerns: ["詳細スキルの確認が必要"],
          recommendation: "総合的に良好な候補者です。面接での詳細確認をお勧めします。",
          growthPotential: "高い",
          cultureFit: "良好",
          nextSteps: ["技術面接実施", "詳細スキル確認"]
        };
      }
  
      console.log('🎉 AI分析完了');
      res.status(200).json({
        success: true,
        analysis: parsedResponse,
        timestamp: new Date().toISOString(),
        model: "gpt-4"
      });
  
    } catch (error) {
      console.error('❌ 全般エラー:', error);
      console.error('エラー詳細:', error.message);
      console.error('エラースタック:', error.stack);
      
      res.status(500).json({
        success: false,
        error: 'AI分析中にエラーが発生しました',
        details: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }