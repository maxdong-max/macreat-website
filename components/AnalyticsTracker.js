import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AnalyticsTracker() {
  const router = useRouter();

  useEffect(() => {
    // 获取访客信息
    const getVisitorInfo = async () => {
      try {
        // 简单设备检测
        const userAgent = navigator.userAgent;
        let device = 'Desktop';
        let os = 'Unknown';
        
        if (/mobile/i.test(userAgent)) {
          device = 'Mobile';
        } else if (/tablet|iPad/i.test(userAgent)) {
          device = 'Tablet';
        }
        
        if (/Windows/i.test(userAgent)) os = 'Windows';
        else if (/Mac/i.test(userAgent)) os = 'macOS';
        else if (/Linux/i.test(userAgent)) os = 'Linux';
        else if (/Android/i.test(userAgent)) os = 'Android';
        else if (/iOS|iPhone|iPad/i.test(userAgent)) os = 'iOS';
        
        const browser = /Chrome/i.test(userAgent) ? 'Chrome' 
          : /Safari/i.test(userAgent) ? 'Safari' 
          : /Firefox/i.test(userAgent) ? 'Firefox' 
          : /Edge/i.test(userAgent) ? 'Edge' : 'Other';
        
        // 发送追踪数据
        await fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ip: '', // 服务器端获取
            country: '', // 服务器端获取
            city: '',
            device,
            os,
            browser,
            url: window.location.pathname,
            referer: document.referrer || ''
          })
        });
      } catch (e) {
        // 静默失败，不影响用户体验
      }
    };

    // 页面加载时执行
    getVisitorInfo();

    // 路由变化时追踪
    const handleRouteChange = (url) => {
      getVisitorInfo();
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return null;
}