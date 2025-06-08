import React, { useState, useEffect } from 'react';
import { Search, Users, Building, Brain, Star, MessageCircle, Shield, Filter, Plus, Eye, Heart, Send, Bell, Menu, X, Settings, ChevronDown, Calendar, Mail, Phone } from 'lucide-react';

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#F8FAFC',
    fontFamily: '"Noto Sans JP", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  navbar: {
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #E2E8F0',
    padding: '0 16px',
    position: 'sticky',
    top: 0,
    zIndex: 40,
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(255, 255, 255, 0.95)'
  },
  navContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px'
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  logoIcon: {
    padding: '8px',
    background: 'linear-gradient(135deg, #2C7BE5 0%, #5C6AC4 100%)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(44, 123, 229, 0.3)'
  },
  logoText: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#1F2937'
  },
  logoSubtext: {
    fontSize: '12px',
    color: '#6B7280'
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  notificationBtn: {
    padding: '8px',
    color: '#6B7280',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.2s'
  },
  badge: {
    position: 'absolute',
    top: '-4px',
    right: '-4px',
    backgroundColor: '#EF4444',
    color: 'white',
    fontSize: '10px',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'pulse 2s infinite'
  },
  select: {
    appearance: 'none',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E2E8F0',
    borderRadius: '8px',
    padding: '8px 32px 8px 12px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  avatar: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #2C7BE5 0%, #5C6AC4 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '14px',
    boxShadow: '0 4px 8px rgba(44, 123, 229, 0.3)'
  },
  mainContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '24px 16px',
    display: 'flex',
    gap: '24px'
  },
  sidebar: {
    width: '256px',
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    border: '1px solid #E2E8F0',
    height: 'fit-content',
    padding: '24px'
  },
  sidebarButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderRadius: '8px',
    textAlign: 'left',
    fontWeight: '600',
    transition: 'all 0.2s',
    marginBottom: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px'
  },
  sidebarButtonActive: {
    background: 'linear-gradient(135deg, #EBF4FF 0%, #F3F0FF 100%)',
    color: '#2C7BE5',
    border: '1px solid #BFDBFE',
    boxShadow: '0 1px 3px rgba(44, 123, 229, 0.1)'
  },
  sidebarButtonInactive: {
    backgroundColor: 'transparent',
    color: '#374151',
    border: '1px solid transparent'
  },
  content: {
    flex: 1,
    minWidth: 0
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    marginBottom: '24px'
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    border: '1px solid #E2E8F0',
    transition: 'all 0.2s',
    cursor: 'pointer'
  },
  statCardHover: {
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-2px)'
  },
  statCardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  statNumber: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: '4px'
  },
  statLabel: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: '4px'
  },
  statTrend: {
    fontSize: '12px',
    color: '#10B981',
    marginTop: '4px'
  },
  statIcon: {
    padding: '12px',
    borderRadius: '8px'
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    border: '1px solid #E2E8F0',
    marginBottom: '24px'
  },
  sectionHeader: {
    padding: '24px',
    borderBottom: '1px solid #E2E8F0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  sectionTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  sectionTitleText: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1F2937',
    margin: 0
  },
  sectionSubtitle: {
    fontSize: '14px',
    color: '#6B7280',
    margin: 0
  },
  gradientIcon: {
    padding: '8px',
    background: 'linear-gradient(135deg, #8B5CF6 0%, #2C7BE5 100%)',
    borderRadius: '8px'
  },
  liveIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    backgroundColor: '#D1FAE5',
    color: '#065F46',
    fontSize: '12px',
    fontWeight: '600',
    borderRadius: '20px'
  },
  liveDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#10B981',
    borderRadius: '50%',
    animation: 'pulse 2s infinite'
  },
  primaryButton: {
    padding: '8px 16px',
    background: 'linear-gradient(135deg, #8B5CF6 0%, #2C7BE5 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: '0 2px 4px rgba(139, 92, 246, 0.3)'
  },
  matchingGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '24px',
    padding: '24px'
  },
  matchCard: {
    border: '1px solid #E2E8F0',
    borderRadius: '12px',
    padding: '24px',
    background: 'linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)',
    transition: 'all 0.2s'
  },
  matchCardHover: {
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-4px)'
  },
  candidateHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px'
  },
  candidateInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  candidateAvatar: {
    fontSize: '32px'
  },
  candidateName: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1F2937',
    margin: 0
  },
  candidateRole: {
    fontSize: '14px',
    color: '#6B7280',
    fontWeight: '500',
    margin: 0
  },
  candidateDetails: {
    fontSize: '12px',
    color: '#9CA3AF',
    margin: 0
  },
  scoreChip: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '8px 12px',
    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    color: 'white',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 'bold',
    boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)'
  },
  skillsContainer: {
    marginBottom: '16px'
  },
  skillsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '8px'
  },
  skillChip: {
    padding: '6px 12px',
    backgroundColor: '#EBF4FF',
    color: '#2C7BE5',
    fontSize: '12px',
    fontWeight: '600',
    borderRadius: '20px',
    border: '1px solid #BFDBFE'
  },
  aiAnalysis: {
    backgroundColor: '#F3F4F6',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '16px',
    borderLeft: '4px solid #8B5CF6'
  },
  aiAnalysisTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  aiAnalysisText: {
    fontSize: '14px',
    color: '#6B7280',
    lineHeight: '1.4'
  },
  actionButtons: {
    display: 'flex',
    gap: '12px'
  },
  actionButtonPrimary: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '12px 16px',
    background: 'linear-gradient(135deg, #2C7BE5 0%, #1E40AF 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: '0 2px 8px rgba(44, 123, 229, 0.3)'
  },
  actionButtonSecondary: {
    padding: '12px',
    border: '1px solid #E2E8F0',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionButtonSuccess: {
    padding: '12px',
    backgroundColor: '#10B981',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)'
  },
  loading: {
    textAlign: 'center',
    padding: '48px'
  },
  spinner: {
    display: 'inline-block',
    width: '48px',
    height: '48px',
    border: '3px solid #E2E8F0',
    borderTop: '3px solid #8B5CF6',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginBottom: '16px'
  },
  loadingText: {
    fontSize: '18px',
    color: '#6B7280',
    marginBottom: '8px'
  },
  loadingSubtext: {
    fontSize: '14px',
    color: '#9CA3AF'
  },
  modal: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50,
    padding: '16px'
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    maxWidth: '1024px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto'
  },
  modalHeader: {
    padding: '32px',
    borderBottom: '1px solid #E2E8F0',
    background: 'linear-gradient(135deg, #EBF4FF 0%, #F3F0FF 100%)'
  }
};

// キーフレームアニメーション用のCSSを動的に追加
if (typeof window !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `;
  document.head.appendChild(styleSheet);
}

const HRMatchingSystem = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [aiMatches, setAiMatches] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ AI分析用のstate（コンポーネント内に正しく配置）
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);

  useEffect(() => {
    fetchCandidates();
    fetchJobs();
    generateMockAiMatches();
  }, []);

  const fetchCandidates = async () => {
    try {
      const response = await fetch('/api/candidates');
      const data = await response.json();
      setCandidates(data);
    } catch (error) {
      console.error('候補者データの取得に失敗:', error);
    }
  };

  const fetchJobs = async () => {
    try {
      const response = await fetch('/api/jobs');
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('求人データの取得に失敗:', error);
    }
  };

  // ✅ AI分析実行関数（コンポーネント内に正しく配置）
  const performAIAnalysis = async (candidate, job) => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setAiAnalysis(null);
    
    // プログレスバーアニメーション
    const progressInterval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + Math.random() * 15;
      });
    }, 300);

    try {
      const response = await fetch('/api/ai-matching-real', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ candidate, job })
      });

      const result = await response.json();
      
      if (result.success) {
        setAnalysisProgress(100);
        setTimeout(() => {
          setAiAnalysis(result.analysis);
          setIsAnalyzing(false);
          clearInterval(progressInterval);
        }, 800);
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('AI Analysis Error:', error);
      setIsAnalyzing(false);
      clearInterval(progressInterval);
      alert('AI分析中にエラーが発生しました: ' + error.message);
    }
  };

  // ✅ AI分析結果表示コンポーネント（コンポーネント内に正しく配置）
  const renderAIAnalysisResult = (analysis) => {
    if (!analysis) return null;

    return (
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '25px',
        borderRadius: '15px',
        color: 'white',
        margin: '20px 0',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '15px',
            fontSize: '24px'
          }}>
            🤖
          </div>
          <div>
            <h3 style={{ margin: '0', fontSize: '20px', fontWeight: 'bold' }}>GPT-4 AI分析結果</h3>
            <p style={{ margin: '5px 0 0 0', opacity: '0.9', fontSize: '14px' }}>
              OpenAI GPT-4による高精度マッチング分析
            </p>
          </div>
        </div>

        {/* マッチスコア */}
        <div style={{ 
          background: 'rgba(255,255,255,0.15)', 
          padding: '20px', 
          borderRadius: '12px',
          marginBottom: '20px',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>🎯 適合度スコア</span>
            <span style={{ 
              fontSize: '28px', 
              fontWeight: 'bold',
              color: analysis.matchScore >= 80 ? '#4ade80' : 
                     analysis.matchScore >= 60 ? '#fbbf24' : '#f87171',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              {analysis.matchScore}%
            </span>
          </div>
          <div style={{
            width: '100%',
            height: '12px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '6px',
            overflow: 'hidden',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
          }}>
            <div style={{
              width: `${analysis.matchScore}%`,
              height: '100%',
              background: `linear-gradient(90deg, ${
                analysis.matchScore >= 80 ? '#4ade80, #22c55e' : 
                analysis.matchScore >= 60 ? '#fbbf24, #f59e0b' : '#f87171, #ef4444'
              })`,
              borderRadius: '6px',
              transition: 'width 2s ease-out',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
            }}></div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          {/* 強み */}
          <div style={{ 
            background: 'rgba(255,255,255,0.15)', 
            padding: '20px', 
            borderRadius: '12px',
            border: '1px solid rgba(76, 222, 128, 0.3)'
          }}>
            <h4 style={{ margin: '0 0 15px 0', color: '#4ade80', fontSize: '16px', fontWeight: 'bold' }}>
              ✅ 強み・アピールポイント
            </h4>
            <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none' }}>
              {analysis.strengths && analysis.strengths.map((strength, index) => (
                <li key={index} style={{ 
                  marginBottom: '8px', 
                  fontSize: '14px', 
                  lineHeight: '1.4',
                  paddingLeft: '20px',
                  position: 'relative'
                }}>
                  <span style={{ position: 'absolute', left: '0', color: '#4ade80' }}>▶</span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          {/* 懸念点 */}
          <div style={{ 
            background: 'rgba(255,255,255,0.15)', 
            padding: '20px', 
            borderRadius: '12px',
            border: '1px solid rgba(251, 191, 36, 0.3)'
          }}>
            <h4 style={{ margin: '0 0 15px 0', color: '#fbbf24', fontSize: '16px', fontWeight: 'bold' }}>
              ⚠️ 懸念点・改善点
            </h4>
            <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none' }}>
              {analysis.concerns && analysis.concerns.map((concern, index) => (
                <li key={index} style={{ 
                  marginBottom: '8px', 
                  fontSize: '14px', 
                  lineHeight: '1.4',
                  paddingLeft: '20px',
                  position: 'relative'
                }}>
                  <span style={{ position: 'absolute', left: '0', color: '#fbbf24' }}>▶</span>
                  {concern}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 推奨理由 */}
        <div style={{ 
          background: 'rgba(255,255,255,0.15)', 
          padding: '20px', 
          borderRadius: '12px',
          marginBottom: '20px',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <h4 style={{ margin: '0 0 15px 0', fontSize: '16px', fontWeight: 'bold' }}>
            💡 AI総合評価・推奨理由
          </h4>
          <p style={{ 
            margin: '0', 
            fontSize: '15px', 
            lineHeight: '1.6',
            fontWeight: '500'
          }}>
            {analysis.recommendation}
          </p>
        </div>

        {/* 追加情報 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
          <div style={{ 
            background: 'rgba(255,255,255,0.15)', 
            padding: '15px', 
            borderRadius: '10px',
            textAlign: 'center',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <div style={{ fontSize: '13px', opacity: '0.8', marginBottom: '5px' }}>🚀 成長ポテンシャル</div>
            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
              {analysis.growthPotential}
            </div>
          </div>
          <div style={{ 
            background: 'rgba(255,255,255,0.15)', 
            padding: '15px', 
            borderRadius: '10px',
            textAlign: 'center',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <div style={{ fontSize: '13px', opacity: '0.8', marginBottom: '5px' }}>🎯 企業文化適合性</div>
            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
              {analysis.cultureFit}
            </div>
          </div>
        </div>

        {/* 次のステップ */}
        {analysis.nextSteps && analysis.nextSteps.length > 0 && (
          <div style={{ 
            background: 'rgba(255,255,255,0.15)', 
            padding: '20px', 
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <h4 style={{ margin: '0 0 15px 0', fontSize: '16px', fontWeight: 'bold' }}>
              📋 推奨される次のステップ
            </h4>
            <ul style={{ margin: '0', paddingLeft: '0', listStyle: 'none' }}>
              {analysis.nextSteps.map((step, index) => (
                <li key={index} style={{ 
                  marginBottom: '10px', 
                  fontSize: '14px',
                  lineHeight: '1.4',
                  paddingLeft: '25px',
                  position: 'relative'
                }}>
                  <span style={{ 
                    position: 'absolute', 
                    left: '0', 
                    top: '0',
                    width: '18px',
                    height: '18px',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  // ✅ AI分析中の表示コンポーネント（コンポーネント内に正しく配置）
  const renderAIAnalysisLoader = (progress) => (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px',
      borderRadius: '15px',
      color: 'white',
      textAlign: 'center',
      margin: '20px 0',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        border: '6px solid rgba(255,255,255,0.3)',
        borderTop: '6px solid white',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 25px auto'
      }}></div>
      
      <h3 style={{ margin: '0 0 10px 0', fontSize: '22px' }}>🤖 GPT-4 AI分析中...</h3>
      <p style={{ margin: '0 0 25px 0', opacity: '0.9', fontSize: '16px' }}>
        OpenAI GPT-4が候補者とのマッチング度を詳細分析しています
      </p>
      
      <div style={{
        width: '100%',
        maxWidth: '300px',
        height: '12px',
        background: 'rgba(255,255,255,0.2)',
        borderRadius: '6px',
        overflow: 'hidden',
        margin: '0 auto',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #4ade80, #22c55e)',
          borderRadius: '6px',
          transition: 'width 0.3s ease'
        }}></div>
      </div>
      
      <p style={{ margin: '15px 0 0 0', fontSize: '14px', opacity: '0.8' }}>
        {progress < 25 ? 'スキル分析中...' :
         progress < 50 ? '経験値評価中...' :
         progress < 75 ? '適合度計算中...' : 
         progress < 95 ? '推奨理由生成中...' : '最終結果準備中...'}
      </p>
    </div>
  );

  const generateMockAiMatches = () => {
    const mockMatches = [
      {
        id: 1,
        candidate: {
          id: 1,
          name: '田中 太郎',
          currentRole: 'フルスタックエンジニア',
          skills: ['React', 'Node.js', 'Python', 'AWS'],
          experience: '5年',
          location: '東京',
          avatar: '👨‍💻',
          age: 28,
          education: '早稲田大学 理工学部'
        },
        score: 95,
        reason: 'フルスタック開発経験が豊富で、要求されるReact/Node.jsスキルに完全マッチ。AWS経験もあり即戦力として期待できます。',
        matchedJob: 'シニアフルスタックエンジニア'
      },
      {
        id: 2,
        candidate: {
          id: 2,
          name: '佐藤 花子',
          currentRole: 'UI/UXデザイナー',
          skills: ['UI/UX', 'Figma', 'React', 'フロントエンド'],
          experience: '4年',
          location: '大阪',
          avatar: '👩‍🎨',
          age: 26,
          education: '関西大学 総合情報学部'
        },
        score: 88,
        reason: 'デザイン思考に長けており、ユーザー体験の向上に貢献できます。フロントエンド知識もあり開発チームとの連携が期待できます。',
        matchedJob: 'UI/UXデザイナー'
      }
    ];
    setAiMatches(mockMatches);
  };

  const Dashboard = () => (
    <div>
      {/* 統計カード */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statCardContent}>
            <div>
              <div style={styles.statLabel}>総候補者数</div>
              <div style={styles.statNumber}>{candidates.length || 0}</div>
              <div style={styles.statTrend}>↑ +12% 先月比</div>
            </div>
            <div style={{...styles.statIcon, backgroundColor: '#EBF4FF'}}>
              <Users style={{color: '#2C7BE5'}} size={28} />
            </div>
          </div>
        </div>
        
        <div style={styles.statCard}>
          <div style={styles.statCardContent}>
            <div>
              <div style={styles.statLabel}>アクティブ求人</div>
              <div style={styles.statNumber}>{jobs.length || 0}</div>
              <div style={styles.statTrend}>↑ +8% 先月比</div>
            </div>
            <div style={{...styles.statIcon, backgroundColor: '#D1FAE5'}}>
              <Building style={{color: '#10B981'}} size={28} />
            </div>
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statCardContent}>
            <div>
              <div style={styles.statLabel}>AIマッチング成功率</div>
              <div style={styles.statNumber}>94%</div>
              <div style={styles.statTrend}>↑ +3% 先月比</div>
            </div>
            <div style={{...styles.statIcon, backgroundColor: '#F3F0FF'}}>
              <Brain style={{color: '#8B5CF6'}} size={28} />
            </div>
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statCardContent}>
            <div>
              <div style={styles.statLabel}>今月の成約数</div>
              <div style={styles.statNumber}>23</div>
              <div style={styles.statTrend}>↑ +15% 先月比</div>
            </div>
            <div style={{...styles.statIcon, backgroundColor: '#FEF3C7'}}>
              <Star style={{color: '#F59E0B'}} size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* AI推奨マッチング */}
      <div style={styles.sectionCard}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionTitle}>
            <div style={styles.gradientIcon}>
              <Brain style={{color: 'white'}} size={24} />
            </div>
            <div>
              <h2 style={styles.sectionTitleText}>AI推奨マッチング</h2>
              <p style={styles.sectionSubtitle}>リアルタイムで最適な人材をマッチング</p>
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            <div style={styles.liveIndicator}>
              <div style={styles.liveDot}></div>
              LIVE
            </div>
            <button style={styles.primaryButton}>更新</button>
          </div>
        </div>
        
        <div style={styles.matchingGrid}>
          {aiMatches.map(match => (
            <div key={match.id} style={styles.matchCard}>
              <div style={styles.candidateHeader}>
                <div style={styles.candidateInfo}>
                  <div style={styles.candidateAvatar}>{match.candidate.avatar}</div>
                  <div>
                    <h3 style={styles.candidateName}>{match.candidate.name}</h3>
                    <p style={styles.candidateRole}>{match.candidate.currentRole}</p>
                    <p style={styles.candidateDetails}>{match.candidate.experience} • {match.candidate.location}</p>
                  </div>
                </div>
                <div style={styles.scoreChip}>
                  <Star size={16} />
                  <span>{match.score}%</span>
                </div>
              </div>
              
              <div style={styles.skillsContainer}>
                <p style={{fontSize: '12px', color: '#6B7280', margin: '0 0 8px 0'}}>
                  マッチング職種: {match.matchedJob}
                </p>
                <div style={styles.skillsGrid}>
                  {match.candidate.skills.slice(0, 4).map(skill => (
                    <span key={skill} style={styles.skillChip}>{skill}</span>
                  ))}
                </div>
              </div>

              <div style={styles.aiAnalysis}>
                <p style={styles.aiAnalysisTitle}>
                  <Brain size={16} style={{color: '#8B5CF6'}} />
                  AI分析結果:
                </p>
                <p style={styles.aiAnalysisText}>{match.reason}</p>
              </div>

              <div style={styles.actionButtons}>
                <button 
                  onClick={() => setSelectedCandidate(match.candidate)}
                  style={styles.actionButtonPrimary}
                >
                  <Eye size={16} />
                  <span>詳細を見る</span>
                </button>
                <button style={styles.actionButtonSecondary}>
                  <Heart size={16} style={{color: '#6B7280'}} />
                </button>
                <button style={styles.actionButtonSuccess}>
                  <Send size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const CandidateModal = () => {
    if (!selectedCandidate) return null;
    
    return (
      <div style={styles.modal}>
        <div style={styles.modalContent}>
          <div style={styles.modalHeader}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '24px'}}>
                <div style={{fontSize: '64px'}}>{selectedCandidate.avatar}</div>
                <div>
                  <h2 style={{fontSize: '32px', fontWeight: 'bold', color: '#1F2937', margin: 0}}>
                    {selectedCandidate.name}
                  </h2>
                  <p style={{fontSize: '20px', color: '#6B7280', fontWeight: '500', margin: '4px 0'}}>
                    {selectedCandidate.currentRole}
                  </p>
                  <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginTop: '8px'}}>
                    <span style={{fontSize: '14px', color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '4px'}}>
                      <Calendar size={16} />
                      {selectedCandidate.experience}
                    </span>
                    <span style={{fontSize: '14px', color: '#9CA3AF'}}>
                      📍 {selectedCandidate.location}
                    </span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCandidate(null)}
                style={{
                  padding: '12px',
                  color: '#6B7280',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <X size={28} />
              </button>
            </div>
          </div>
          
          <div style={{padding: '32px'}}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px'}}>
              <div>
                <h3 style={{fontSize: '18px', fontWeight: 'bold', color: '#1F2937', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <Users size={20} style={{color: '#2C7BE5'}} />
                  基本情報
                </h3>
                <div style={{backgroundColor: '#F9FAFB', padding: '16px', borderRadius: '8px', fontSize: '14px'}}>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
                    <div>
                      <span style={{color: '#6B7280'}}>年齢: </span>
                      <span style={{fontWeight: '600'}}>{selectedCandidate.age}歳</span>
                    </div>
                    <div>
                      <span style={{color: '#6B7280'}}>経験年数: </span>
                      <span style={{fontWeight: '600'}}>{selectedCandidate.experience}</span>
                    </div>
                    <div style={{gridColumn: 'span 2'}}>
                      <span style={{color: '#6B7280'}}>学歴: </span>
                      <span style={{fontWeight: '600'}}>{selectedCandidate.education}</span>
                    </div>
                  </div>
                </div>

                <h3 style={{fontSize: '18px', fontWeight: 'bold', color: '#1F2937', margin: '24px 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <Star size={20} style={{color: '#F59E0B'}} />
                  スキル・技術
                </h3>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px'}}>
                  {selectedCandidate.skills.map(skill => (
                    <span key={skill} style={{
                      padding: '8px 16px',
                      backgroundColor: '#EBF4FF',
                      color: '#2C7BE5',
                      fontSize: '14px',
                      fontWeight: '600',
                      borderRadius: '8px',
                      border: '1px solid #BFDBFE'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{fontSize: '18px', fontWeight: 'bold', color: '#1F2937', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <Brain size={20} style={{color: '#8B5CF6'}} />
                  AI マッチング分析
                </h3>
                <div style={{background: 'linear-gradient(135deg, #F3F0FF 0%, #EBF4FF 100%)', padding: '16px', borderRadius: '8px', border: '1px solid #C4B5FD'}}>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px'}}>
                    <span style={{fontWeight: '600', color: '#1F2937'}}>総合マッチング度</span>
                    <span style={{fontSize: '24px', fontWeight: 'bold', color: '#8B5CF6'}}>92%</span>
                  </div>
                  <div style={{width: '100%', backgroundColor: '#E2E8F0', borderRadius: '4px', height: '8px', marginBottom: '12px'}}>
                    <div style={{
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #2C7BE5 100%)',
                      height: '8px',
                      borderRadius: '4px',
                      width: '92%'
                    }}></div>
                  </div>
                  <p style={{fontSize: '14px', color: '#374151', margin: 0}}>
                    技術スキル、経験年数、希望条件を総合的に分析した結果、非常に高い適合度を示しています。
                  </p>
                </div>
              </div>
            </div>

            {/* ✅ AI分析ボタンを追加 */}
            <button
              onClick={() => {
                const targetJob = jobs[0] || { 
                  title: 'フルスタックエンジニア', 
                  requiredSkills: ['React', 'Node.js'],
                  experienceRequired: 3
                };
                performAIAnalysis(selectedCandidate, targetJob);
              }}
              disabled={isAnalyzing}
              style={{
                background: isAnalyzing 
                  ? 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)'
                  : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: isAnalyzing ? 'not-allowed' : 'pointer',
                opacity: isAnalyzing ? 0.7 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                margin: '20px 0',
                width: '100%',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              🤖 {isAnalyzing ? 'GPT-4 AI分析実行中...' : 'GPT-4 AI詳細分析を実行'}
            </button>

            {/* ✅ AI分析中の表示 */}
            {isAnalyzing && renderAIAnalysisLoader(analysisProgress)}
            
            {/* ✅ AI分析結果の表示 */}
            {aiAnalysis && renderAIAnalysisResult(aiAnalysis)}

            <div style={{display: 'flex', gap: '16px', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #E2E8F0'}}>
              <button style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '16px 24px',
                background: 'linear-gradient(135deg, #2C7BE5 0%, #1E40AF 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(44, 123, 229, 0.3)'
              }}>
                <Mail size={20} />
                <span>スカウトメール送信</span>
              </button>
              <button style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '16px 24px',
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
              }}>
                <Calendar size={20} />
                <span>面談予約</span>
              </button>
              <button style={{
                padding: '16px 24px',
                border: '2px solid #E2E8F0',
                backgroundColor: 'transparent',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                color: '#374151'
              }}>
                <Phone size={20} />
                <span>連絡先</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {/* ナビゲーションヘッダー */}
      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <div style={styles.logoSection}>
            <div style={styles.logoIcon}>
              <Brain style={{color: 'white'}} size={28} />
            </div>
            <div>
              <div style={styles.logoText}>AI HRマッチング</div>
              <div style={styles.logoSubtext}>次世代人材マッチングプラットフォーム</div>
            </div>
          </div>
          
          <div style={styles.userSection}>
            <button style={styles.notificationBtn}>
              <Bell size={20} />
              <span style={styles.badge}>3</span>
            </button>
            
            <select style={styles.select}>
              <option value="recruiter">採用担当者</option>
              <option value="candidate">求職者</option>
            </select>
            
            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
              <div style={styles.avatar}>A</div>
              <div>
                <div style={{fontSize: '14px', fontWeight: '600', color: '#1F2937'}}>管理者</div>
                <div style={{fontSize: '12px', color: '#6B7280'}}>admin@company.com</div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div style={styles.mainContent}>
        {/* サイドバー */}
        <div style={styles.sidebar}>
          <nav>
            <button
              onClick={() => setCurrentView('dashboard')}
              style={{
                ...styles.sidebarButton,
                ...(currentView === 'dashboard' ? styles.sidebarButtonActive : styles.sidebarButtonInactive)
              }}
            >
              <Users size={20} />
              <span>ダッシュボード</span>
            </button>
            
            <button
              onClick={() => setCurrentView('candidates')}
              style={{
                ...styles.sidebarButton,
                ...(currentView === 'candidates' ? styles.sidebarButtonActive : styles.sidebarButtonInactive)
              }}
            >
              <Search size={20} />
              <span>人材検索</span>
            </button>
            
            <button
              onClick={() => setCurrentView('jobs')}
              style={{
                ...styles.sidebarButton,
                ...(currentView === 'jobs' ? styles.sidebarButtonActive : styles.sidebarButtonInactive)
              }}
            >
              <Building size={20} />
              <span>求人管理</span>
            </button>
            
            <button
              onClick={() => setCurrentView('settings')}
              style={{
                ...styles.sidebarButton,
                ...(currentView === 'settings' ? styles.sidebarButtonActive : styles.sidebarButtonInactive)
              }}
            >
              <Settings size={20} />
              <span>設定</span>
            </button>
          </nav>
        </div>

        {/* メインコンテンツ */}
        <div style={styles.content}>
          {currentView === 'dashboard' && <Dashboard />}
          {currentView === 'candidates' && (
            <div style={{textAlign: 'center', padding: '64px'}}>
              <div style={{display: 'inline-block', padding: '16px', backgroundColor: '#F3F4F6', borderRadius: '50%', marginBottom: '16px'}}>
                <Search style={{width: '48px', height: '48px', color: '#6B7280'}} />
              </div>
              <h3 style={{fontSize: '20px', fontWeight: '600', color: '#1F2937', marginBottom: '8px'}}>人材検索</h3>
              <p style={{color: '#6B7280', marginBottom: '24px'}}>人材検索機能を実装中です...</p>
              <button style={{
                padding: '12px 24px',
                backgroundColor: '#2C7BE5',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                近日公開予定
              </button>
            </div>
          )}
          {currentView === 'jobs' && (
            <div style={{textAlign: 'center', padding: '64px'}}>
              <div style={{display: 'inline-block', padding: '16px', backgroundColor: '#F3F4F6', borderRadius: '50%', marginBottom: '16px'}}>
                <Building style={{width: '48px', height: '48px', color: '#6B7280'}} />
              </div>
              <h3 style={{fontSize: '20px', fontWeight: '600', color: '#1F2937', marginBottom: '8px'}}>求人管理</h3>
              <p style={{color: '#6B7280', marginBottom: '24px'}}>求人管理機能を実装中です...</p>
              <button style={{
                padding: '12px 24px',
                backgroundColor: '#2C7BE5',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                近日公開予定
              </button>
            </div>
          )}
          {currentView === 'settings' && (
            <div style={{textAlign: 'center', padding: '64px'}}>
              <div style={{display: 'inline-block', padding: '16px', backgroundColor: '#F3F4F6', borderRadius: '50%', marginBottom: '16px'}}>
                <Settings style={{width: '48px', height: '48px', color: '#6B7280'}} />
              </div>
              <h3 style={{fontSize: '20px', fontWeight: '600', color: '#1F2937', marginBottom: '8px'}}>システム設定</h3>
              <p style={{color: '#6B7280', marginBottom: '24px'}}>設定機能を実装中です...</p>
              <button style={{
                padding: '12px 24px',
                backgroundColor: '#2C7BE5',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                近日公開予定
              </button>
            </div>
          )}
        </div>
      </div>

      <CandidateModal />
    </div>
  );
};

export default HRMatchingSystem;