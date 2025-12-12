"""
Test Claude API integration
"""
from anthropic import Anthropic

api_key = "YOUR_CLAUDE_API_KEY"

try:
    client = Anthropic(api_key=api_key)
    
    print("Testing Claude API...")
    response = client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=50,
        messages=[
            {"role": "user", "content": "Say 'Hello, World!' if you can read this."}
        ]
    )
    
    print("✅ Success!")
    print(f"Response: {response.content[0].text}")
    
except Exception as e:
    print(f"❌ Error: {e}")
    import traceback
    traceback.print_exc()
