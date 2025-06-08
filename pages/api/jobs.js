export default function handler(req, res) {
    const jobs = [
      {
        id: 1,
        title: 'シニアフルスタックエンジニア',
        company: '株式会社テックイノベーション',
        location: '東京',
        salary: '800-1200万円',
        requirements: ['React', 'Node.js', '5年以上の経験', 'TypeScript', 'AWS'],
        description: '急成長中のSaaS企業でプロダクト開発をリードするシニアエンジニアを募集。最新技術を使った開発環境で、チームマネジメントも経験できます。',
        companyLogo: '🏢',
        benefits: ['リモートワーク可', 'ストックオプション', '書籍購入支援'],
        type: 'fulltime'
      },
      {
        id: 2,
        title: 'UI/UXデザイナー',
        company: 'デザインラボ株式会社',
        location: '大阪',
        salary: '600-900万円',
        requirements: ['Figma', 'デザイン思考', '3年以上の経験', 'プロトタイピング'],
        description: 'ユーザー体験を重視するプロダクト開発チームで、デザインシステムの構築から実装まで幅広く担当いただきます。',
        companyLogo: '🎨',
        benefits: ['フレックスタイム', '勉強会参加支援', 'Mac支給'],
        type: 'fulltime'
      },
      {
        id: 3,
        title: 'データサイエンティスト',
        company: 'AI Solutions Inc.',
        location: '東京',
        salary: '900-1500万円',
        requirements: ['Python', '機械学習', 'SQL', '統計学', 'ビジネス理解'],
        description: 'AIを活用したビジネス課題解決に取り組むデータサイエンティストを募集。最先端の技術を使って社会にインパクトを与えるプロジェクトに参加できます。',
        companyLogo: '🤖',
        benefits: ['研究費支給', '学会参加支援', '論文執筆時間確保'],
        type: 'fulltime'
      }
    ];
  
    if (req.method === 'GET') {
      res.status(200).json(jobs);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }