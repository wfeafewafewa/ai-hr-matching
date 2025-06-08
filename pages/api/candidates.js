export default function handler(req, res) {
    const candidates = [
      {
        id: 1,
        name: '田中 太郎',
        age: 28,
        skills: ['React', 'Node.js', 'Python', 'AWS', 'TypeScript', 'Docker'],
        experience: '5年',
        location: '東京',
        currentRole: 'フルスタックエンジニア',
        education: '早稲田大学 理工学部',
        avatar: '👨‍💻',
        bio: 'スタートアップから大手企業まで幅広い開発経験を持つフルスタックエンジニア。特にWebアプリケーション開発に強み。',
        github: 'https://github.com/tanaka-taro',
        linkedin: 'https://linkedin.com/in/tanaka-taro'
      },
      {
        id: 2,
        name: '佐藤 花子',
        age: 26,
        skills: ['UI/UX', 'Figma', 'Adobe XD', 'フロントエンド', 'React', 'Vue.js'],
        experience: '4年',
        location: '大阪',
        currentRole: 'UI/UXデザイナー',
        education: '関西大学 総合情報学部',
        avatar: '👩‍🎨',
        bio: 'ユーザー中心設計を重視するUI/UXデザイナー。フロントエンド実装スキルも併せ持つ。',
        portfolio: 'https://hanako-portfolio.com'
      },
      {
        id: 3,
        name: '山田 次郎',
        age: 32,
        skills: ['データサイエンス', 'Python', 'ML', 'SQL', 'TensorFlow', 'PyTorch'],
        experience: '7年',
        location: '東京',
        currentRole: 'データサイエンティスト',
        education: '東京大学 情報理工学系研究科',
        avatar: '👨‍🔬',
        bio: '機械学習とビジネス分析の専門家。大規模データ処理とMLOpsに精通。',
        publications: ['機械学習による予測モデルの構築', 'ビッグデータ分析手法の研究']
      },
      {
        id: 4,
        name: '鈴木 美咲',
        age: 29,
        skills: ['プロダクトマネジメント', 'アジャイル', 'Scrum', 'データ分析', 'SQL'],
        experience: '6年',
        location: '東京',
        currentRole: 'プロダクトマネージャー',
        education: '慶應義塾大学 経済学部',
        avatar: '👩‍💼',
        bio: 'BtoCプロダクトの成長を牽引するプロダクトマネージャー。データドリブンな意思決定が得意。'
      },
      {
        id: 5,
        name: '高橋 健一',
        age: 35,
        skills: ['DevOps', 'AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Python'],
        experience: '10年',
        location: '東京',
        currentRole: 'DevOpsエンジニア',
        education: '東京工業大学 情報工学科',
        avatar: '👨‍🔧',
        bio: 'クラウドインフラとDevOpsのスペシャリスト。大規模システムの運用経験豊富。'
      }
    ];
  
    if (req.method === 'GET') {
      res.status(200).json(candidates);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }