export async function GET(request: Request) {
  try {
    return new Response(
      `<!DOCTYPE html>
      <html>
      <head>
        <title>Chetana's Beauty Lounge - Admin</title>
        <style>
          body { font-family: system-ui; padding: 40px; background: #f5f5f5; }
          .container { max-width: 600px; margin: 0 auto; background: white; padding: 40px; border-radius: 8px; }
          h1 { color: #5f1e42; }
          p { color: #555; line-height: 1.6; }
          .warning { background: #fff3cd; border: 1px solid #ffc107; padding: 15px; border-radius: 4px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Admin Panel</h1>
          <p>Chetana's Beauty Lounge Admin Dashboard</p>
          <div class="warning">
            <p><strong>Admin Setup:</strong> The admin panel is initializing. Please refresh the page in a moment, or contact support if this persists.</p>
          </div>
          <p><a href="/">← Back to Home</a></p>
        </div>
      </body>
      </html>`,
      {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      }
    )
  } catch (error) {
    console.error('Admin error:', error)
    return new Response('Error loading admin panel', { status: 500 })
  }
}
