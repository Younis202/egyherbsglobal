export function PreloadResources() {
  return (
    <>
      {/* Preload critical CSS */}
      <link
        rel="preload"
        href="/fonts/inter-var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      
      {/* Preload hero image */}
      <link
        rel="preload"
        href="https://egyherbsglobal-770136110.imgix.net/home/hero.png"
        as="image"
        type="image/png"
      />
      
      {/* Preload logo */}
      <link
        rel="preload"
        href="https://egyherbsglobal-770136110.imgix.net/global/2.png"
        as="image"
        type="image/png"
      />
      
      {/* Critical CSS for above-the-fold content */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Critical CSS for immediate rendering */
          .hero-section {
            background-image: url('https://egyherbsglobal-770136110.imgix.net/home/hero.png');
            background-size: cover;
            background-position: center;
            min-height: 100vh;
          }
          
          /* Prevent layout shift */
          .navbar-logo {
            width: 150px;
            height: 60px;
          }
          
          /* Loading states */
          .loading-skeleton {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
          }
          
          @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `
      }} />
    </>
  );
}