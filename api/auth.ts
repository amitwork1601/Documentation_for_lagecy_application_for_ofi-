// @ts-nocheck
export const config = {
    runtime: 'edge', // Use Edge runtime for speed
};

export default async function handler(request: Request) {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const body = await request.json();
        const { username, password } = body;

        // Get credentials from environment variables
        // ADMIN_USERNAME and ADMIN_PASSWORD must be set in Vercel Project Settings
        const validUsername = process.env.ADMIN_USERNAME || 'admin'; // Default fallback for unsafe local dev only
        // Check for case variations
        const validPassword = process.env.ADMIN_PASSWORD || process.env.admin_password;

        if (!validPassword) {
            console.error("ADMIN_PASSWORD environment variable is not set.");

            // Debug available keys (safe filter)
            const availableKeys = Object.keys(process.env)
                .filter(k => k.startsWith('ADMIN_') || k.startsWith('admin_'))
                .join(', ');

            return new Response(JSON.stringify({
                error: `Server configuration error: ADMIN_PASSWORD not set. Found keys: [${availableKeys}]. Did you set it in the correct environment (Prod/Preview)?`,
            }), { status: 500 });
        }

        if (username === validUsername && password === validPassword) {
            // Create a simple session cookie
            // In production, use a signed JWT string
            const token = 'authenticated_user';

            // Calculate expiration (e.g., 1 day)
            const maxAge = 60 * 60 * 24;

            const cookieValue = `auth_token=${token}; Path=/; Max-Age=${maxAge}; SameSite=Strict; HttpOnly; Secure`;

            return new Response(JSON.stringify({ success: true }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Set-Cookie': cookieValue,
                },
            });
        }

        return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: 'Invalid request body' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
